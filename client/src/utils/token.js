import { TOKEN } from './constants';
import jwtDecode from "jwt-decode";

// Save in localStorage
export function setToken(token) {
    localStorage.setItem(TOKEN, token);
}

// Get token from localStorage
export function getToken() {
    return localStorage.getItem(TOKEN);
}

// Remove token from localStorage
export function removeToken() {
    localStorage.removeItem(TOKEN);
}

// Decode token
export function decodeToken(token) {
    return jwtDecode(token);
}