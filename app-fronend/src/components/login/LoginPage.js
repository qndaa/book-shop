import React from "react";

import {Link} from "react-router-dom";
import LoginForm from "./LoginForm";


const LoginPage = () => {

    return (
        <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9 mt-5">
                <div className=" o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                    </div>
                                    <LoginForm />
                                    <hr/>
                                    <div className="text-center">
                                        <Link className="small" to="/registration">Create an Account!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LoginPage;
