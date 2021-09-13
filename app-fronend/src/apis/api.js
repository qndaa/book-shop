import axios from "axios";
import decode from "jwt-decode";

export const URL_BACKEND = 'http://localhost:8080/api';

export function getHeader() {
    const headers = {
        Accept: 'application/json',
    };

    if (loggedIn()) {
        headers['Authorization'] = 'Bearer ' + getToken();
    }
    return headers;
}

export function setToken (token)  {
    localStorage.setItem('token', token);
}

export function getToken() {
    return localStorage.getItem('token');
}

export function logout() {
    localStorage.removeItem('token');
}

export function loggedIn() {
    const token = getToken();
    return !!token && !isTokenExpired(token);
}

export function isTokenExpired(token) {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            // Checking if token is expired. N
            return true;
        } else return false;
    } catch (err) {
        return false;
    }
}

export function getProfile() {
    return decode(getToken());
}

export default axios.create({
    baseURL: URL_BACKEND,
});

