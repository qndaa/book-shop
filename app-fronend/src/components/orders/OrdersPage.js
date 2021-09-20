import React, {useEffect} from "react";
import NewCityForm from "../card/NewCityForm";
import OrderForm from "../card/OrederForm";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {getProfile, isAdmin, isCustomer, loggedIn, URL_BACKEND} from "../../apis/api";
import {approveOrder, cancelOrder, declineOrder, fetchOrders, fetchOrdersByCustomer, logout} from "../../actions";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";
import ReportFrom from "./ReportFrom";


const OrdersPage = () => {

    const {register, handleSubmit, getValues, setValue, formState: {errors}} = useForm();
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const history = useHistory();


    if (!loggedIn()) {
        dispatch(logout());
    }

    if (!isLoggedIn) {
        history.push('/forbidden');
        return null;
    } else {
        useEffect(() => {
            if (isAdmin()) {
                dispatch(fetchOrders());
            } else {
                dispatch(fetchOrdersByCustomer(getProfile().sub));
            }
        }, []);


    }


    if (orders === undefined) {
        return <div>Loading...</div>;
    }

    if (Object.values(orders).length === 0) {
        return (
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h2 mb-0 text-gray-800">No orders!</h1>
                </div>
            </div>
        );
    }

    const renderReport = () => {
        if (isAdmin()) {
            return (<ReportFrom />);
        }
    }
    const renderImage = (fileName) => {
        let resource = URL_BACKEND + '/file/';
        if (fileName !== null) {
            resource += fileName;
        } else {
            resource += 'default-book.jpeg';
        }
        return (
            <img className="img-fluid border border-secondary" src={resource} height="200" width="200" alt={`Book!`}/>);
    }

    const renderBooks = (item) => {
        return (item.orderLines.map(o => {
            return (
                <div className={`col-3 mb-5`}>
                    <div className={`d-flex justify-content-center mb-2`} style={{height: 320}}>
                        {renderImage(o.book.image)}
                    </div>
                    <div style={{height: 50}}
                         className="d-flex justify-content-center text-xl font-weight-bold text-primary text-uppercase mb-1">
                        {o.book.title}
                    </div>
                    <div
                        className="h5 mb-0 font-weight-bold text-gray-800 d-flex justify-content-center">
                        Quantity: {o.quantity}
                    </div>
                    <div
                        className="h5 mb-0 font-weight-bold text-gray-800 d-flex justify-content-center">
                        {o.price}&euro;
                    </div>
                </div>

            )
            })


        )

    }

    const renderCancel = ( order) => {
        if (isCustomer() && order.status === 'PROCESSING'){
            return (<button className={`btn btn-danger`} onClick={() => {dispatch(cancelOrder(order.orderId)).then(() => toast.success("Order canceled!"))}}>Cancel</button>)
        }
    }

    const renderApprove = ( order) => {
        if (isAdmin() && order.status === 'PROCESSING'){
            return (<button className={`btn btn-success`} onClick={() => {dispatch(approveOrder(order.orderId)).then(() => toast.success("Order approved!"))}}>Approve</button>)
        }
    }

    const renderDecline = ( order) => {
        if (isAdmin() && order.status === 'PROCESSING'){
            return (<button className={`btn btn-danger`} onClick={() => {dispatch(declineOrder(order.orderId)).then(() => toast.success("Order declined!"))}}>Decline</button>)
        }
    }

    const renderOrders = () => {
        return Object.values(orders).map(order => {
            return (
                <div className="col-xl-12 col-md-5 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <h2 className={`gray mb-3`}>Order id: {order.orderId}</h2>
                            <div className="row">
                                <div className="col-8 ">
                                    <div className={`row`}>
                                        {renderBooks(order)}

                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div className={`border rounded-3 gray p-3`}>
                                        <div
                                            className="h5 mb-2 font-weight-bold text-gray-800 d-flex justify-content-center">
                                            Price: {order.totalMoney}&euro;
                                        </div>
                                        <div
                                            className="h5 mb-2 font-weight-bold text-gray-800 d-flex justify-content-center">
                                            City: {order.location.city.name}
                                        </div>
                                        <div
                                            className="h5 mb-2 font-weight-bold text-gray-800 d-flex justify-content-center">
                                            Location: {order.location.street + ' ' + order.location.number}
                                        </div>
                                        <div
                                            className="h5 mb-2 font-weight-bold text-gray-800 d-flex justify-content-center">
                                            Date: {order.dateOfCreation}
                                        </div>

                                        <div
                                            className="h5 mb-2 font-weight-bold text-gray-800 d-flex justify-content-center">
                                            Status: {order.status}
                                        </div>

                                        <div
                                            className="h5 mb-2 font-weight-bold text-gray-800 d-flex justify-content-center">
                                            {renderCancel(order)}
                                        </div>
                                        <div
                                            className="h5 mb-2 font-weight-bold text-gray-800 d-flex justify-content-center">

                                        </div>
                                        <div
                                            className="h5 mb-2 font-weight-bold text-gray-800 d-flex justify-content-center">
                                            {renderApprove(order)}
                                            {renderDecline(order)}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )


        })


    }

    return (
        <div className="container-fluid">

            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Orders:</h1>

                {renderReport()}

            </div>


            <div className="row">
                {renderOrders()}
            </div>
        </div>


    );
}

export default OrdersPage;
