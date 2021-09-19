import React from "react";
import Book from "../util/Book";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {URL_BACKEND} from "../../apis/api";
import {useForm} from "react-hook-form";
import {updateBook} from "../../actions";
import {toast} from "react-toastify";
import UpdateQuantityForm from "./UpdateQuantityForm";

const ShoppingCardPage = () => {

    const dispatch = useDispatch();
    const books = useSelector(state => state.shoppingCart);


    const renderImage = (fileName) => {
        let resource = URL_BACKEND + '/file/';
        if (fileName !== null) {
            resource += fileName;
        } else {
            resource += 'default-book.jpeg';
        }
        return (<img className="img-fluid border border-secondary" src={resource} height="200" width="200"  alt={`Book!`}/>);
    }







    const renderBooks = () => {
        return Object.values(books).map(book => {
            return (<div className="col-xl-4 col-md-5 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div style={{ height: 320}}>
                                    {renderImage(book.book.image)}
                                </div>
                                <div style={{height: 50}} className="d-flex justify-content-center text-xl font-weight-bold text-primary text-uppercase mb-1">
                                    {book.book.title}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800 d-flex justify-content-center">
                                    Quantity: {book.quantity}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800 d-flex justify-content-center">
                                    {book.price}&euro;
                                </div>

                                <UpdateQuantityForm item={book} />



                            </div>

                        </div>
                    </div>
                </div>
            </div>);
        });
    }

    if (books === undefined || Object.values(books).length === 0) {
        return(
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h2 mb-0 text-gray-800">Shopping cart is empty!</h1>
                </div>
            </div>

        );

    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h2 mb-0 text-gray-800">Books in cart:</h1>
            </div>
            <div className="row">
                <div className={`col-8`}>
                    <div className={`row`}>
                        {renderBooks()}
                    </div>

                </div>
                <div className={`col-4`}>
                    
                </div>
            </div>
        </div>
    );

}

export default ShoppingCardPage;
