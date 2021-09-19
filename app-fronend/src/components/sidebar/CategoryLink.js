import React from "react";

import {Link} from "react-router-dom";


const CategoryLink = ({name, to, num}) => {
    return (
        <li className="nav-item my-0">
            <Link className="nav-link collapsed" to={`/home/categories/${to}`}
               aria-expanded="true" aria-controls="collapseTwo">
                <div className={`row`}>
                    <div className={`col-10`}><span>{name}</span></div>
                    <div className={`col-2 d-flex justify-content-end`}><span className={`font-weight-bold`}>{num}</span></div>
                </div>

            </Link>
        </li>
    );
}

export default CategoryLink;
