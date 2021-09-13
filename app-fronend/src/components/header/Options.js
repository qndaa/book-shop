import React from "react";
import ProfileOptions from "./ProfileOptions";
import LogRegOptions from "./LogRegOptions";
import {useDispatch, useSelector} from "react-redux";
import {loggedIn} from "../../apis/api";
import {logout} from "../../actions";

const Options = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const dispatch = useDispatch();

    if(isLoggedIn && loggedIn()) {
        return (<ProfileOptions />)
    } else {
        dispatch(logout());
        return (<LogRegOptions />)
    }
}

export default Options;
