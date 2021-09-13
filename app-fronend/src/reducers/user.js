import {FETCH_LOGGED_USER, LOGIN, LOGOUT} from "../actions/types";
import { loggedIn, logout, setToken } from "../apis/api";

const isLogged = loggedIn();

const INITIAL_STATE = {
    isLoggedIn: isLogged,
    token: (isLogged) ? localStorage.getItem("token") : null,
    profile : null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            setToken(action.payload.token);
            return {...state, isLoggedIn: true, token: action.payload.token };
        case LOGOUT:
            logout();
            return {...state, isLoggedIn: false, token: null, profile: null };
        case FETCH_LOGGED_USER:
            return {...state, profile: action.payload};
        default:
            return state;
    }
};
