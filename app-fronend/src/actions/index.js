import {
    CREATE_CATEGORY,
    FETCH_ALL_BOOKS,
    FETCH_AUTHORS,
    FETCH_CATEGORY,
    FETCH_LOGGED_USER,
    LOGIN,
    LOGOUT
} from "./types";
import api, {getHeader} from "../apis/api";


export const login = (username, password) => async (dispatch) => {
    try {
        const params = new URLSearchParams()
        params.append("username", username);
        params.append("password", password)
        const headers = getHeader()
        headers['Content-type'] = 'application/x-www-form-urlencoded';
        const res = await api.post('/login', params, {headers: headers});

        dispatch({
            type: LOGIN,
            payload: res.data
        });

        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    };
}

export const fetchAllBooks = () => async (dispatch) => {
    try {
        const res = await api.get('/book', {headers: getHeader()});
        dispatch({
            type: FETCH_ALL_BOOKS,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const fetchCategories = () => async (dispatch) => {
    try {
        const res = await api.get('/category', {headers: getHeader()});
        dispatch({
            type: FETCH_CATEGORY,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const fetchAllAuthors = () => async (dispatch) => {
    try {
        const res = await api.get('/author', {headers: getHeader()});
        dispatch({
            type: FETCH_AUTHORS,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const fetchLoggedUser = (username) => async (dispatch) => {
    try {
        const res = await api.get('/user/' + username, {headers: getHeader()});
        dispatch({
            type: FETCH_LOGGED_USER,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const createCategory = (data) => async (dispatch) => {
    try {
        const res = await api.post('/category', data,{headers: getHeader()});
        dispatch({
            type: CREATE_CATEGORY,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }

}
