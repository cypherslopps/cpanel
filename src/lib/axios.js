import Axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL } from '../config';

export const axios = Axios.create({
    baseURL: API_URL
})

const getUserToken = () => {
    const token = Cookies?.get("token") ?? "sdfdf";

    if(!token || token === "") {
        return null;
    }

    return token;
}


axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getUserToken()}`;
    
    return config;
});

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const response = error?.response;

    if(response.status === 401) {
        // Remove token from cookies
        console.log("token");
    } 

    throw error;
});