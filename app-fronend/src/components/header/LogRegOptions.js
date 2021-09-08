import React from "react";

import {Link} from "react-router-dom";


const LogRegOptions = () => {
    return(
        <div>
            <Link className={`btn btn-primary mr-3`} to={`/registration`}>Registration</Link>
            <Link className={`btn btn-primary mr-3`} to={`/login`}>Login</Link>
        </div>
    );
}

export default LogRegOptions;
