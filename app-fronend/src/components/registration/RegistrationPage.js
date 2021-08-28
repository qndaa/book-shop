import {Link} from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

const RegistrationPage = () => {

    return (
        <div className="o-hidden my-5">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-7">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <RegistrationForm/>
                        <hr/>
                        <div className="text-center">
                            <Link className="small" to="/login">Already have an account? Login!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
