import React from "react";
import ProfileOptions from "./ProfileOptions";
import LogRegOptions from "./LogRegOptions";
import {useSelector} from "react-redux";

const Options = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    if(isLoggedIn) {
        return (<ProfileOptions />)
    } else {
        return (<LogRegOptions />)
    }
}

export default Options;
