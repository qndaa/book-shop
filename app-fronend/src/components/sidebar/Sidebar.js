import { useEffect, useState } from "react";
import api from "../../apis/api";

import Logo from "./Logo";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink";
import CategoryLink from "./CategoryLink";

const Sidebar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get('/category')
            .then(response => {
                console.log(response.data);
                setCategories(response.data);
            });

    }, [])

    const renderCategoryLinks = () => {
        return categories.map((item, index) => {
            console.log(item.categoryId);
            return (<CategoryLink key={index} to={item.categoryId} name={item.name} num={item.books.length} />);
        })
    }


    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Logo/>
            <hr className="sidebar-divider my-0"/>
            <SidebarLink icon={faHome} title={`Home page`} to={`/home`}/>
            <hr className="sidebar-divider my-0"/>
            <SidebarLink icon={faBook} title={`Categories`} to={`/categories`}/>

            {renderCategoryLinks()}
        </ul>
    );

}

export default Sidebar;
