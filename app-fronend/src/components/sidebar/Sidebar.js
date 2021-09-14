import React from "react";
import { useEffect, useState } from "react";
import api, {isAdmin, loggedIn} from "../../apis/api";

import Logo from "./Logo";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faTachometerAlt} from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink";
import CategoryLink from "./CategoryLink";
import CategoryForm from "./CategoryForm";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {fetchAllBooks, fetchCategories, logout} from "../../actions";
import Book from "../util/Book";

const Sidebar = () => {

    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    if(!loggedIn()) {
        dispatch(logout());
    }

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const renderCategoryLinks = () => {
        return Object.values(categories).map(item => {
            return (<CategoryLink key={item.categoryId} to={item.categoryId} name={item.name} num={item.books.length} />);
        });

    }

    const renderForm = () => {
        if(isLoggedIn && isAdmin()){
            return <CategoryForm />
        }
        return null;
    }

    const renderPanel = () => {
        if(isLoggedIn && isAdmin()){
            return (
                <React.Fragment>
                    <hr className="sidebar-divider my-0"/>
                    <SidebarLink icon={faTachometerAlt} title={`Panel`} to={`/panel`}/>
                </React.Fragment>
            );
        }
        return null
    }


    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Logo/>
            <hr className="sidebar-divider my-0"/>
            <SidebarLink icon={faHome} title={`Home page`} to={`/home`}/>
            {renderPanel()}
            <hr className="sidebar-divider my-0"/>
            <SidebarLink icon={faUser} title={`Authors`} to={`/authors`}/>
            <hr className="sidebar-divider my-0"/>
            <SidebarLink icon={faBook} title={`Categories`} to={`/categories`}/>

            {renderCategoryLinks()}

            {renderForm()}
        </ul>
    );

}

export default Sidebar;
