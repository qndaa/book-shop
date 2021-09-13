import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Profile = () => {

    const profile = useSelector(state => state.user.profile);
    const history = useHistory();

        if (profile !== null) {
            return (
                <div>
                    {profile.firstName}
                </div>
            );

        } else {
            history.push('/forbidden');
            return(<div></div>);
        }


}

export default Profile;
