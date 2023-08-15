import Axios from 'axios';
import Cookies from 'js-cookie';

const getUserToken = () => {
    const token = Cookies?.get("token") ?? "sdfdf";

    if(!token || token === "") {
        return null;
    }

    return token;
}

export const setAuthToken = (token, config) => {
    if (token) {
        config.headers.Authorization = `Bearer ${getUserToken()}`;
    }
    else
        delete config.headers.Authorization;
 }

 const refreshToken = async () => {
    try {
      const resp = await axios.get("auth/refresh");
      console.log("refresh token", resp.data);
      return resp.data;
    } catch (e) {
      console.log("Error",e);   
    }
};

export const axios = Axios.create({
    baseURL: `http://localhost:13070/api`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    withCredentials: true
})


axios.interceptors.request.use(
    async (config) => {
        const token = getUserToken();
        
        return setAuthToken(token, config);
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    }, async (error) => {
        const response = error?.response;
        const originalRequest = error?.config;

        if(response.status === 401) {
            // Remove token from cookies
            Cookies.remove("token");
        } 

        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
  
            const resp = await refreshToken();
    
            const accessToken = resp?.response?.token;
    
            // Store token
            Cookies.set("token", accessToken)

            axios.defaults.headers.common[
            "Authorization"
            ] = `Bearer ${accessToken}`;

            return axios(originalRequest);
        }

        return Promise.reject(error);
    }
);

// customFetch.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     async function (error) {
//       const originalRequest = error.config;
//       if (error.response.status === 403 && !originalRequest._retry) {
//         originalRequest._retry = true;
  
//         const resp = await refreshToken();
  
//         const access_token = resp.response.accessToken;
  
//         addTokenToLocalStorage(access_token);
//         customFetch.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${access_token}`;
//         return customFetch(originalRequest);
//       }
//       return Promise.reject(error);
//     }
//   );