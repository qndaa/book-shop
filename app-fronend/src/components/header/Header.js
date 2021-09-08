import React from "react";

import SearchForm from "./SearchForm";
import Options from "./Options";


const Header = () => {
    return (
        <nav className={`navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow`}>
            <SearchForm />
            <Options />
        </nav>
    );
}

export default Header;
