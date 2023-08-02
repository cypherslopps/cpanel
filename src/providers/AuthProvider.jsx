import { createContext, useState, useContext } from "react";
import { axios } from "../lib/axios";
import { logoutAuthApi } from "../config";
import Cookies from "js-cookie";

export const AuthContext = createContext({
    user: false,
    setNewUser: {},
    error: null,
    setError: () => {},
    logout: () => {},
    loginUserRequest: () => {}
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        funds: 0
    });
    const [error, setError] = useState(null);
    const setNewUser = (newUser) => setUser(newUser); 

    // Login
    const loginUserRequest = (user) => {
        axios.post("/login", user)
            .then(res => {
                if(res.status === "success") {
                    Cookies.set(
                        "token", 
                        res.token, 
                        { secure: true }
                    );
                }
            })
    }  

    // Logout
    const logout = () => {
        axios.get(logoutAuthApi)
            .then(({ data }) => {
                if(data.success) {
                    // Empty current user data
                    setNewUser({});

                    // Delete token
                    sessionStorage.removeItem("token");
                }
            }).catch(error => error);
    }

    return (
        <AuthContext.Provider value={{
            user,
            error,
            setError,
            setNewUser,
            logout,
            loginUserRequest
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContext = useContext(AuthContext);
  
    if (!authContext) {
      throw new Error(
        "useAuth has to be used within <AuthContext.Provider>"
      );
    }
  
    return AuthContext;
}