import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "../css/index.css";

import Sidebar from "./sidebar/Sidebar";
import BooksPage from "./books/BooksPage";
import RegistrationPage from "./registration/RegistrationPage";
import ErrorPage from "./ErrorPage";
import Header from "./header/Header";
import LoginPage from "./login/LoginPage";
import Profile from "./profile/Profile";
import AuthorsPage from "./authors/AuthorsPage";
import SingleAuthorPage from "./authors/SingleAuthorPage";
import SingleBookPage from "./books/SingleBookPage";



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
                                <Route path={`/`} exact component={BooksPage}/>
                                <Route path={`/home`} exact component={BooksPage}/>
                                <Route path={`/login`} exact component={LoginPage}/>
                                <Route path={'/registration'} exact component={RegistrationPage}/>

                                <Route path={`/books/:id`} exact component={SingleBookPage} />
                                <Route path={`/profile`} exact component={Profile} />
                                <Route path={`/authors`} exact component={AuthorsPage} />
                                <Route path={`/authors/:id`} exact component={SingleAuthorPage} />
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
