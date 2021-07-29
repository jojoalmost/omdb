import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_API_URL || 'http://www.omdbapi.com';
const API_KEY = process.env.REACT_APP_API_KEY || 'faf7e5bb';

let api = axios.create({
    baseURL: API_URL,
    params: {
        apikey: API_KEY,
    },
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;
