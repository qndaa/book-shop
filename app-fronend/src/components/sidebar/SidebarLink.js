import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


const SidebarLink = (props) => {
    return (
        <li className="nav-item active">
            <Link className="nav-link" to={`${props.to}`}>
                <FontAwesomeIcon icon={props.icon} className={`mr-2`}/>
                <span>{props.title}</span>
            </Link>
        </li>
    );
}

export default SidebarLink;
