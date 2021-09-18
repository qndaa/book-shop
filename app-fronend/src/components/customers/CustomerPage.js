import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isAdmin, loggedIn, URL_BACKEND} from "../../apis/api";
import {blockCustomer, fetchCustomers, logout, unblockCustomer} from "../../actions";
import {Link, useHistory} from "react-router-dom";
import Book from "../util/Book";
import user from "../../reducers/user";
import {toast} from "react-toastify";

const CustomerPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const customers = useSelector(state => state.customers);

    const renderImage = (fileName) => {
        let resource = URL_BACKEND + '/file/default-profile.png';
        if (fileName !== null) {
            resource = URL_BACKEND + '/file/' + fileName;
        }
        return (<img className="img-fluid " src={resource} style={{ height : 260, width : 200}}  alt={`Customer!`}/>);
    }


    const renderButton = (blocked, username) => {
        if (blocked) {
            return <button key={username} className={`btn btn-success w-50`} onClick={() => dispatch(unblockCustomer(username)).then(()=> toast.success("Customer unblocked!"))}>Unblock</button>
        } else {
            return <button key={username} className={`btn btn-danger w-50`} onClick={() => dispatch(blockCustomer(username)).then(()=> toast.success("Customer blocked!"))}>Block</button>
        }
    }

    const renderCustomers = () => {
        return Object.values(customers).map(customer => {
            return (
                <div key={customer.user_id} className="col-xl-2 col-md-5 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div style={{ height: 270}}>
                                        {renderImage(customer.image)}
                                    </div>
                                    <div style={{height: 50}} className="d-flex justify-content-center text-xl font-weight-bold text-primary mb-1">
                                        {customer.firstName + ' ' + customer.lastName}
                                    </div>

                                    <div style={{height: 50}} className="d-flex justify-content-center text-xl font-weight-bold text-primary mb-1 ">
                                        {renderButton(customer.blocked, customer.username)}
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            );
        });


    }

    if(!loggedIn()) {
        dispatch(logout());
    }

    if(!isAdmin()) {
        history.push("/forbidden")
        return null;
    } else {
        useEffect(() => {
            dispatch(fetchCustomers());
        }, []);

        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h2 mb-0 text-gray-800">Books</h1>
                </div>
                <div className="row">
                    {renderCustomers()}
                </div>
            </div>
        );
    }



}

export default CustomerPage;
