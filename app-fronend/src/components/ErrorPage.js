import React from "react";
import {Link} from "react-router-dom";

const ErrorPage = (props) => {
    return (
        <div className="container-fluid">
            <div className="text-center mt-5">
                <div className="error mx-auto" data-text={`${props.code}`}>{props.code}</div>
                <p className="lead text-gray-800 mb-5">{props.title}</p>
                <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                <Link to="/home">&larr; Back to Home page</Link>
            </div>
        </div>
    );
}

export default ErrorPage;
