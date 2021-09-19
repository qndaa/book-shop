import {
    ADD_TO_SHOPPING_CART,
    APPROVE_COMMENT, APPROVE_ORDER,
    BLOCK_CUSTOMER, CANCEL_ORDER,
    CHANGE_PROFILE_PASSWORD,
    CHANGE_PROFILE_PHOTO,
    CREATE_AUTHOR,
    CREATE_BOOK,
    CREATE_CATEGORY,
    CREATE_CITY,
    CREATE_COMMENT,
    CREATE_LANGUAGE,
    CREATE_MARK, CREATE_ORDER,
    DECLINE_COMMENT, DECLINE_ORDER,
    DELETE_FROM_SHOPPING_CART,
    FETCH_ALL_BOOKS,
    FETCH_AUTHORS,
    FETCH_BOOK,
    FETCH_BOOK_BY_CATEGORY,
    FETCH_CATEGORY,
    FETCH_CITIES,
    FETCH_CUSTOMERS,
    FETCH_LANGUAGE,
    FETCH_LOGGED_USER, FETCH_ORDERS, FETCH_ORDERS_BY_CUSTOMER,
    FETCH_SHOPPING_CART,
    LOGIN,
    LOGOUT,
    UNBLOCK_CUSTOMER,
    UPDATE_ADMINISTRATOR,
    UPDATE_BOOK,
    UPDATE_CUSTOMER,
    UPDATE_LANGUAGE,
    UPDATE_SHOPPING_CART
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

export const fetchBookByCategory = (id) => async (dispatch) => {
    try {
        const res = await api.get(`/book/category/${id}`, {headers: getHeader()});
        dispatch({
            type: FETCH_BOOK_BY_CATEGORY,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const fetchShoppingCart = () => async (dispatch) => {
    try {
        const res = await api.get(`/shoppingCart`, {headers: getHeader()});
        dispatch({
            type: FETCH_SHOPPING_CART,
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

export const fetchCities = () => async (dispatch) => {
    try {
        const res = await api.get(`/city`,{headers: getHeader()});
        dispatch({
            type: FETCH_CITIES,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const createCity = data => async (dispatch) => {
    try {
        const res = await api.post(`/city`, data,{headers: getHeader()});
        dispatch({
            type: CREATE_CITY,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const createOrder = data => async (dispatch) => {
    try {
        const res = await api.post(`/order`, data,{headers: getHeader()});
        dispatch({
            type: CREATE_ORDER,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const fetchOrders = () => async (dispatch) => {
    try {
        const res = await api.get(`/order`,{headers: getHeader()});
        dispatch({
            type: FETCH_ORDERS,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const fetchOrdersByCustomer = (username) => async (dispatch) => {
    try {
        const res = await api.get(`/order/${username}`,{headers: getHeader()});
        dispatch({
            type: FETCH_ORDERS_BY_CUSTOMER,
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

export const createComment = data => async (dispatch) => {
    try {
        const res = await api.post(`/comment`, data,{headers: getHeader()});
        dispatch({
            type: CREATE_COMMENT,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const createMark = data => async (dispatch) => {
    try {
        const res = await api.post(`/mark`, data,{headers: getHeader()});
        dispatch({
            type: CREATE_MARK,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}


export const approveComment = id => async (dispatch) => {
    try {
        const res = await api.post(`/comment/approve/${id}`, null,{headers: getHeader()});
        dispatch({
            type: APPROVE_COMMENT,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const declineComment = id => async (dispatch) => {
    try {
        const res = await api.post(`/comment/decline/${id}`, null,{headers: getHeader()});
        dispatch({
            type: DECLINE_COMMENT,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const addToShoppingCart = data => async (dispatch) => {
    try {
        const res = await api.post(`/shoppingCart`, data,{headers: getHeader()});
        dispatch({
            type: ADD_TO_SHOPPING_CART,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const updateShoppingCart = data => async (dispatch) => {
    try {
        const res = await api.post(`/shoppingCart/update`, data,{headers: getHeader()});
        dispatch({
            type: UPDATE_SHOPPING_CART,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const deleteFromShoppingCart = data => async (dispatch) => {
    try {
        const res = await api.post(`/shoppingCart/delete`, data,{headers: getHeader()});
        dispatch({
            type: DELETE_FROM_SHOPPING_CART,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const approveOrder = id => async (dispatch) => {
    try {
        const res = await api.post(`/order/approve/${id}`, null,{headers: getHeader()});
        dispatch({
            type: APPROVE_ORDER,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const declineOrder = id => async (dispatch) => {
    try {
        const res = await api.post(`/order/decline/${id}`, null,{headers: getHeader()});
        dispatch({
            type: DECLINE_ORDER,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}

export const cancelOrder = id => async (dispatch) => {
    try {
        const res = await api.post(`/order/cancel/${id}`, null,{headers: getHeader()});
        dispatch({
            type: CANCEL_ORDER,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (e) {
        return Promise.reject(e);
    }
}
