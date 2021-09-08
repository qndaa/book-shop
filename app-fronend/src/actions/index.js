import {LOGIN, LOGOUT} from "./types";
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
