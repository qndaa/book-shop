import React, {useEffect, useState} from "react";
import NewAuthorForm from "../panel/NewAuthorForm";
import NewBookForm from "../panel/NewBookForm";
import LanguageForm from "../panel/LanguageForm";
import {useDispatch} from "react-redux";
import {fetchBook, logout} from "../../actions";
import api, {isAdmin, isCustomer, loggedIn, URL_BACKEND} from "../../apis/api";
import AdminPanel from "./AdminPanel";
import CustomerPanel from "./CustomerPanel";
import CommentPanel from "./CommentPanel";
import MarkPanel from "./MarkPanel";
import {useForm} from "react-hook-form";


const SingleBookPage = (props) => {

    const {id} = props.match.params;
    const [book, setBook] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        api.get('/book/' + id).then(response => {
            console.log(response);
            setBook(response.data);
        })
    }, [])

    if (book == null) {
        return "Loading...";
    }
    const renderImage = () => {
        let resource = URL_BACKEND + '/file/default-book.jpeg';
        if (book.image !== null) {
            resource = URL_BACKEND + '/file/' + book.image;
        }
        return (
            <img className="img-profile" style={{width: 250}}
                 src={resource}/>
        );
    }

    const renderAdminPanel = () => {
        if(!loggedIn()) {
            dispatch(logout());
        }

      if (isAdmin()) {
          return (
              <AdminPanel book={book} setBook={setBook} />
          );
      } else if (isCustomer())
          return <CustomerPanel book={book} />
    }

    const renderMarkPanel = () => {
        if (isCustomer()) {
            return (
                <MarkPanel book={book} />
            );
        } else {
            return null;
        }
    }



    const renderCommentPanel = () => {
        if (isCustomer()) {
            return (<CommentPanel book={book}/>);
        } else {
            return null;
        }
    }

    const getMark = (book) => {
        return (book.marks.length === 0) ? 'There are no marks!' : "racunacu kasnije";
    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Book with id: {id}</h1>
            </div>
            <div className="row">
                <div className="col-xl-12 col-md-5 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body d-flex justify-content-center">
                            <div className={`row w-100`}>
                                <div className="col mr-4 ">

                                    <div className={`d-flex justify-content-center`}>
                                        {renderImage()}
                                    </div>
                                    <div className={`col-12 d-flex justify-content-center`}>
                                        <label className={`mt-3 h4`} htmlFor={`dateOfBirth`}>Title: {book.title}</label>
                                    </div>
                                    <div className={`col-12 d-flex justify-content-center`}>
                                        <label className={` h4`} htmlFor={`dateOfBirth`}>Price: {book.price}</label>
                                    </div>
                                    <div className={`col-12 d-flex justify-content-center`}>
                                        <label className={`h4`} htmlFor={`dateOfBirth`}>Quantity: {book.quantity}</label>
                                    </div>
                                    <div className={`col-12 d-flex justify-content-center`}>
                                        <label className={` h4`} htmlFor={`dateOfBirth`}>ISBN: {book.isbn}</label>

                                    </div>
                                    <div className={`col-12 d-flex justify-content-center`}>
                                        <label className={` h4`} htmlFor={`dateOfBirth`}>{getMark(book)}</label>

                                    </div>
                                    {renderCommentPanel(book)}
                                    {renderMarkPanel(book)}



                                </div>
                                <div className="col-6 mr-2 ">
                                    <label className={`h4 row`}>{book.description === null ? "There is no description!" : 'Description:'}</label>
                                    <label className={`row`}>{book.description === null ? "" : book.description}</label>
                                    <label className={`h4 row`}>{book.comments.length === 0 ? "There is no comments!" : "Comments:"}</label>
                                </div>

                                <div className={`col-2 mr-2`}>
                                    {renderAdminPanel()}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SingleBookPage;
