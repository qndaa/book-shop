import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import api from "../../apis/api";
import {fetchBookByCategory} from "../../actions";
import Book from "../util/Book";


const BookByCategory = (props) => {

    const {id} = props.match.params;
    const books = useSelector(state => state.books);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchBookByCategory(id));
    }, [id]);

    const renderBooks = () => {
        return Object.values(books).map(book => {
            return (<Book book={book} key={book.bookId}/>);
        });
    }


    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h2 mb-0 text-gray-800">Books</h1>
            </div>
            <div className="row">
                {renderBooks()}
            </div>
        </div>
    );

}

export default BookByCategory;
