import React from "react";
import ProfileData from "../profile/ProfileData";
import UpdateProfileDataForm from "../profile/UpdateProfileDataForm";
import UpdatePasswordForm from "../profile/UpdatePasswordForm";
import NewAuthorForm from "./NewAuthorForm";
import {isAdmin} from "../../apis/api";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import LanguageForm from "./LanguageForm";
import NewBookForm from "./NewBookForm";

const PanelPage = () => {

    const history = useHistory();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);


    if (isLoggedIn && isAdmin()) {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-md-5 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body d-flex justify-content-center">
                                <div className="row ">
                                    <div className="col mr-2 ">
                                        <NewAuthorForm/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-md-5 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body d-flex justify-content-center">
                                <div className="row ">
                                    <div className="col mr-2 ">
                                        <NewBookForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-5 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row ">
                                        <LanguageForm/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    } else {
        history.push('/forbidden');
        return null;
    }


}

export default PanelPage;
