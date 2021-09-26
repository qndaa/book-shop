import React, {useEffect, useState} from "react";
import NewAuthorForm from "../panel/NewAuthorForm";
import NewBookForm from "../panel/NewBookForm";
import LanguageForm from "../panel/LanguageForm";
import {useDispatch} from "react-redux";
import {approveComment, declineComment, fetchBook, logout} from "../../actions";
import api, {getProfile, isAdmin, isCustomer, loggedIn, URL_BACKEND} from "../../apis/api";
import AdminPanel from "./AdminPanel";
import CustomerPanel from "./CustomerPanel";
import CommentPanel from "./CommentPanel";
import MarkPanel from "./MarkPanel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave, faTrash, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";


const SingleBookPage = (props) => {

    const {id} = props.match.params;
    const [book, setBook] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        api.get('/book/' + id).then(response => {
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
        if (!loggedIn()) {
            dispatch(logout());
        }

        if (isAdmin()) {
            return (
                <AdminPanel book={book} setBook={setBook}/>
            );
        } else if (isCustomer())
            return <CustomerPanel book={book}/>
    }

    const renderMarkPanel = () => {
        if (isCustomer()) {
            for (let item of book.marks) {
                if (item.customer.username === getProfile().sub) {
                    return null
                }
            }
            return (
                <MarkPanel book={book} setBook={setBook}/>
            );
        } else {
            return null;
        }
    }


    const renderCommentPanel = () => {
        if (isCustomer()) {
            for (let item of book.comments) {
                if (item.customer.username === getProfile().sub && (item.status === 'APPROVED' || item.status === 'NO_STATUS')) {
                    return null;
                }
            }

            return (<CommentPanel book={book} setBook={setBook}/>);
        } else {
            return null;
        }
    }

    const getMark = (book) => {
        if (book.marks.length === 0) {
            return 'There are no marks!';
        } else {
            let sum = 0;
            for (let item of book.marks) {
                sum += item.value;
            }
            return "Average mark: " + (sum / book.marks.length);
        }
    }


    const renderComments = () => {

        let comments = [];
        if (isAdmin()) {
            comments = book.comments;
        } else {

            comments = book.comments.filter(item => {
                if (item.status === 'APPROVED') {
                    return item;
                }
            })


        }

        if (comments.length === 0) {
            return <label className={`h4 ml-1 row mt-4`}>There is no comments!</label>
        } else {

            return (
                <React.Fragment>
                    <label className={`h4 ml-1 row mt-4`}>Comments:</label>
                    {renderComment(comments)}
                </React.Fragment>
            );


        }
    }

    const renderImageUser = (fileName) => {
        let resource = URL_BACKEND + '/file/default-profile.png';
        if (fileName !== null) {
            resource = URL_BACKEND + '/file/' + fileName;
        }
        return (<img className="rounded-circle" src={resource} style={{height: 30, width: 30}} alt={`Customer!`}/>);
    }

    const renderApproveButton = (com) => {
        if(isAdmin()) {
            if (com.status === 'NO_STATUS') {
                return (
                    <button className={`btn btn-outline-primary mb-2`} onClick={() => {
                        dispatch(approveComment(com.commentId)).then((response) => {
                            toast.success("Comment is approved!");
                            api.get('/book/' + id).then(response => {
                                setBook(response.data);
                            })
                        })
                    }}>
                        <FontAwesomeIcon color={`bluetooth`} icon={faThumbsUp}/>
                    </button>
                )
            }
        }

    }

    const renderDeclineButton = (com) => {
        if (isAdmin()) {
            if (com.status === 'NO_STATUS' || com.status === 'APPROVED') {
                return (
                    <button className={`btn btn-outline-danger`} onClick={() => {
                        dispatch(declineComment(com.commentId)).then((response) => {
                            toast.success("Comment is declined!");
                            api.get('/book/' + id).then(response => {
                                setBook(response.data);
                            })
                        })
                    }}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                )
            }
        }

    }

    const renderComment = (comments) => {

        return comments.map((item) => {
                return (
                    <div className="mt-2 border gray rounded-3 p-3">
                        <div className={`row`}>
                            <div className={`col-1`}>
                                {renderImageUser(item.customer.image)}
                            </div>

                            <div className={`col-5`}>
                                <h4 className={`ml-1 mt-1`}>{item.customer.firstName + ' ' + item.customer.lastName}</h4>
                            </div>
                            <div className={`col-4`}>
                                <label className={`mt-1`}>{item.date}</label>
                            </div>

                            <div className={`col-1`}>
                                {renderApproveButton(item)}
                            </div>

                            <div className={`col-1`}>
                                {renderDeclineButton(item)}

                            </div>

                        </div>
                        <p>{item.content}</p>
                    </div>
                );
            }
        )
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
                                        <label className={`h4`}
                                               htmlFor={`dateOfBirth`}>Quantity: {book.quantity}</label>
                                    </div>
                                    <div className={`col-12 d-flex justify-content-center`}>
                                        <label className={` h4`} htmlFor={`dateOfBirth`}>ISBN: {book.isbn}</label>

                                    </div>
                                    <div className={`col-12 d-flex justify-content-center`}>
                                        <label className={` h4`} htmlFor={`dateOfBirth`}>{getMark(book)}</label>

                                    </div>
                                    <div className={`mt-5 border gray rounded-3 p-3` }>
                                        {renderCommentPanel(book)}
                                        {renderMarkPanel(book)}
                                    </div>


                                </div>
                                <div className="col-6 mr-2 ">
                                    <label
                                        className={`h4 ml-1 row`}>{book.description === null ? "There is no description!" : 'Description:'}</label>
                                    <label
                                        className={`row ml-1`}>{book.description === null ? "" : book.description}</label>
                                    {renderComments()}

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
