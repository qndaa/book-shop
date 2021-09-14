import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import ProfileData from "./ProfileData";
import {fetchLoggedUser, logout} from "../../actions";
import {getProfile, loggedIn} from "../../apis/api";

const Profile = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    if (!loggedIn()) {
        dispatch(logout())
    } else {
        useEffect(async () => {
            await dispatch(fetchLoggedUser(getProfile().sub));
        }, []);
    }

    if (profile != null) {
        return (
            <div className="container-fluid">
                <div className="row">
                    <ProfileData profile={profile}/>
                </div>
            </div>
        );
    } else if (!loggedIn()) {
        history.push('/forbidden');
        return null;
    } else {
        return (<div>Loading...</div>)
    }


}

export default Profile;
