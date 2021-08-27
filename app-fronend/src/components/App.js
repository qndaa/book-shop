import Sidebar from "./sidebar/Sidebar";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import "./css/index.css";

import HomePage from "./home/HomePage";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import ErrorPage from "./ErrorPage";
import Header from "./header/Header";
import BookPage from "./BookPage";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div id={`wrapper`}>
                    <Sidebar/>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Header />
                            <Switch>
                                <Route path={`/`} exact component={HomePage}/>
                                <Route path={`/home`} exact component={HomePage}/>
                                <Route path={`/login`} exact component={LoginPage}/>
                                <Route path={'/registration'} exact component={RegistrationPage}/>
                                <Route path={`/book/:category`} exact component={BookPage} />
                                <Route path={`/forbidden`} exact >
                                    <ErrorPage code={403} title={`Forbidden Page`}/>
                                </Route>
                                <Route>
                                    <ErrorPage code={404} title={`Page Not Found`} />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>

            </BrowserRouter>
        </div>


    );
};

export default App;
