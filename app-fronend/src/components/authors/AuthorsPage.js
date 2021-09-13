import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllAuthors} from "../../actions";

import Author from "./Author";



const AuthorsPage = () => {

    const dispatch = useDispatch();
    const authors = useSelector(state => state.authors);

    useEffect(() => {
        dispatch(fetchAllAuthors());
    }, []);

    const renderAuthors = () => {
        return Object.values(authors).map(author => {
            return (<Author author={author} key={author.authorId}/>);
        });
    }

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h2 mb-0 text-gray-800">Authors:</h1>
            </div>
            <div className="row">
                {renderAuthors()}
            </div>
        </div>


    );




}

export default AuthorsPage;
