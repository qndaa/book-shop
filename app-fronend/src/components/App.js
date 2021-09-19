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
import PanelPage from "./panel/PanelPage";
import ShoppingCardPage from "./card/ShoppingCardPage";
import OrdersPage from "./orders/OrdersPage";
import CustomerPage from "./customers/CustomerPage";
import BookByCategory from "./books/BookByCategory";
import SearchPage from "./search/SearchPage";



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
                                <Route path={`/home/categories/:id`} exact component={BookByCategory} />
                                <Route path={`/login`} exact component={LoginPage}/>
                                <Route path={'/registration'} exact component={RegistrationPage}/>
                                <Route path={'/shoppingCard'} exact component={ShoppingCardPage} />
                                <Route path={'/search'} exact component={SearchPage} />
                                <Route path={`/orders`} exact component={OrdersPage} />
                                <Route path={`/customers`} exact component={CustomerPage} />
                                <Route path={`/books/:id`} exact component={SingleBookPage} />
                                <Route path={`/profile`} exact component={Profile} />
                                <Route path={`/authors`} exact component={AuthorsPage} />
                                <Route path={`/panel`} exact component={PanelPage} />
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
