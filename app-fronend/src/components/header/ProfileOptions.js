import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const ProfileOptions = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [showDropdownUser, setShowDropdownUser] = useState(false);

    const handledLogout = () => {
        dispatch(logout());
        history.push('/login');
    }

    const handledDropdownUser = () => {
        setShowDropdownUser(!showDropdownUser);
    }

    return (

        <ul className="navbar-nav ml-auto">
            <button className={`btn btn-primary`} onClick={handledLogout}> Logout</button>

            <li className="nav-item dropdown no-arrow d-sm-none">
                <a className="nav-link dropdown-toggle" href="/" id="searchDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-search fa-fw"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                     aria-labelledby="searchDropdown">
                    <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small"
                                   placeholder="Search for..." aria-label="Search"
                                   aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </li>


            <li className="nav-item dropdown no-arrow mx-1">
                <Link to={`/shoppingCart`} className="nav-link dropdown-toggle"  id="messagesDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon icon={faShoppingCart} size={`1x`} />
                    <span className="badge badge-danger badge-counter">7</span>
                </Link>
            </li>

            <div className="topbar-divider d-none d-sm-block"/>

            <li className="nav-item dropdown no-arrow">
                <Link className="nav-link dropdown-toggle" onClick={handledDropdownUser} id="userDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                    <img className="img-profile rounded-circle"
                         src="img/undraw_profile.svg"/>
                </Link>
                <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${showDropdownUser ? 'show' : ''}`}
                     aria-labelledby="userDropdown">
                    <Link className="dropdown-item" to={`/profile`}>
                        <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-400"/>
                        Profile
                    </Link>

                    <div className="dropdown-divider"/>
                    <Link className="dropdown-item" onClick={handledLogout} data-toggle="modal" data-target="#logoutModal">
                        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-gray-400"/>
                        Logout
                    </Link>
                </div>
            </li>

        </ul>




    );
}

export default ProfileOptions
