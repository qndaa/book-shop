import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const SidebarLink = (props) => {

    const orders = useSelector(state => state.orders);

    let num = 0;
    const renderNum = () => {
        if (props.isAdmin && props.to === '/orders') {
            num = Object.values(orders).filter(order => {
                if (order.status === 'PROCESSING') return order;
            }).length;
            return (num > 0) ? num : null ;
        } else {
            return null;
        }
    }

    return (
        <li className="nav-item active">
            <Link className="nav-link" to={`${props.to}`}>
                <div className={`row`}>
                    <div className={`col-10`}>
                        <FontAwesomeIcon icon={props.icon} className={`mr-2`}/>
                        <span>{props.title}</span>
                    </div>
                    <div className={`col-2`}>
                        {renderNum()}
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default SidebarLink;
