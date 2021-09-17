import {
    BLOCK_CUSTOMER,
    CHANGE_PROFILE_PASSWORD,
    CHANGE_PROFILE_PHOTO, CREATE_AUTHOR, CREATE_BOOK,
    CREATE_CATEGORY, CREATE_LANGUAGE,
    FETCH_ALL_BOOKS,
    FETCH_AUTHORS, FETCH_BOOK,
    FETCH_CATEGORY, FETCH_CUSTOMERS, FETCH_LANGUAGE,
    FETCH_LOGGED_USER,
    LOGIN,
    LOGOUT, UNBLOCK_CUSTOMER, UPDATE_ADMINISTRATOR, UPDATE_BOOK, UPDATE_CUSTOMER, UPDATE_LANGUAGE
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

export const fetchLanguage = () => async (dispatch) => {
    try {
        const res = await api.get('/language', {headers: getHeader()});
        dispatch({
            type: FETCH_LANGUAGE,
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

export const changeUserPhoto = data => async (dispatch) => {
    try {
        const res = await api.post('/user/photo', data,{headers: getHeader()});
        dispatch({
            type: CHANGE_PROFILE_PHOTO,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const changeUserPassword = data => async (dispatch) => {
    try {
        const res = await api.post('/user/password', data,{headers: getHeader()});
        dispatch({
            type: CHANGE_PROFILE_PASSWORD,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}


export const updateAdministrator = data => async (dispatch) => {
    try {
        const res = await api.post('/administrator', data,{headers: getHeader()});
        dispatch({
            type: UPDATE_ADMINISTRATOR,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const updateCustomer = data => async (dispatch) => {
    try {
        const res = await api.post('/customer/update', data,{headers: getHeader()});
        dispatch({
            type: UPDATE_CUSTOMER,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}


export const createAuthor = data => async (dispatch) => {
    try {
        const res = await api.post('/author', data,{headers: getHeader()});
        dispatch({
            type: CREATE_AUTHOR,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}


export const updateLanguage = data => async (dispatch) => {
    try {
        const res = await api.post('/language/update', data,{headers: getHeader()});
        dispatch({
            type: UPDATE_LANGUAGE,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}


export const createLanguage = data => async (dispatch) => {
    try {
        const res = await api.post('/language', data,{headers: getHeader()});
        dispatch({
            type: CREATE_LANGUAGE,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const fetchCustomers = () => async (dispatch) => {
    try {
        const res = await api.get('/customer',{headers: getHeader()});
        dispatch({
            type: FETCH_CUSTOMERS,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const blockCustomer = id => async (dispatch) => {
    try {
        const res = await api.post(`/customer/block/${id}`, null,{headers: getHeader()});
        dispatch({
            type: BLOCK_CUSTOMER,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const unblockCustomer = id => async (dispatch) => {
    try {
        const res = await api.post(`/customer/unblock/${id}`, null,{headers: getHeader()});
        dispatch({
            type: UNBLOCK_CUSTOMER,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const createBook = data => async (dispatch) => {
    try {
        const res = await api.post(`/book`, data,{headers: getHeader()});
        dispatch({
            type: CREATE_BOOK,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const fetchBook = id => async (dispatch) => {
    try {
        const res = await api.get(`/book/${id}`,{headers: getHeader()});
        dispatch({
            type: FETCH_BOOK,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const updateBook = data => async (dispatch) => {
    try {
        const res = await api.post(`/book/update`, data,{headers: getHeader()});
        dispatch({
            type: UPDATE_BOOK,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}
