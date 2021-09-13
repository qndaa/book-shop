import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {URL_BACKEND} from "../../apis/api";
import {Link} from "react-router-dom";

const Book = (props) => {

    const renderImage = (fileName) => {
        if (fileName !== null) {
            const resource = URL_BACKEND + '/file/' + fileName;
            return (<img className="img-fluid border border-secondary" src={resource} height="200" width="200"  alt={`Book!`}/>);
        } else {
            return (<div/>)
        }
    }

    return (
            <div className="col-xl-2 col-md-5 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div style={{ height: 300}}>
                                    {renderImage(props.book.image)}
                                </div>
                                <div style={{height: 50}} className="d-flex justify-content-center text-xl font-weight-bold text-primary text-uppercase mb-1">
                                    {props.book.title}
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800 d-flex justify-content-center">
                                    {props.book.price}&euro;
                                </div>

                                <a href="#" className="btn btn-success  d-flex justify-content-center mt-3">
                                        <span className="icon mr-3">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    <span className="text">Add</span>
                                </a>

                                <Link to={`/books/${props.book.bookId}`} className="btn btn-primary  d-flex justify-content-center mt-3">
                                    <span className="text">See more</span>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


    );
}

export default Book;
