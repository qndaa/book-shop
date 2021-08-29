import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "../css/index.css";

import Sidebar from "./sidebar/Sidebar";
import HomePage from "./home/HomePage";
import RegistrationPage from "./registration/RegistrationPage";
import ErrorPage from "./ErrorPage";
import Header from "./header/Header";
import BookPage from "./BookPage";
import LoginPage from "./login/LoginPage";



const App = () => {
    return (
        <div>
            <Router>
                <div id={`wrapper`}>
                    <Sidebar/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Header/>
                            <Switch>
                                <Route path={`/`} exact component={HomePage}/>
                                <Route path={`/home`} exact component={HomePage}/>
                                <Route path={`/login`} exact component={LoginPage}/>
                                <Route path={'/registration'} exact component={RegistrationPage}/>
                                <Route path={`/book/:category`} exact component={BookPage}/>
                                <Route path={`/forbidden`} exact>
                                    <ErrorPage code={403} title={`Forbidden Page`}/>
                                </Route>
                                <Route>
                                    <ErrorPage code={404} title={`Page Not Found`}/>
                                </Route>

                            </Switch>
                            <ToastContainer position="bottom-right"
                                            autoClose={5000}/>
                        </div>

                    </div>

                </div>


            </Router>


        </div>


    );
};

export default App;
