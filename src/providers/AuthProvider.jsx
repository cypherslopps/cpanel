import { createContext, useState, useContext } from "react";
import { axios } from "../lib/axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
    user: false,
    setNewUser: {},
    error: null,
    setError: () => {},
    logout: () => {},
    loginUserRequest: () => {}
});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        funds: 0
    });
    const [error, setError] = useState(null);
    const setNewUser = (newUser) => setUser(newUser); 

    // Login
    const loginUserRequest = async (loginData, setError) => {
        const response = await axios.post("/login", loginData)
        const data = response.data;

        if(data.auth) {
            // Set token
            Cookies.set("token", data.token);

            const userData = data.result[0];

            // Set user
            setUser({
                ...user,
                ...userData
            });

            // Redirect user to dashboard
            navigate("/dashboard")
        } else {
            setError(data.message);
        }
    }  

    // Logout
    const logout = () => {
        axios.get('/logout')
            .then(({ data }) => {
                console.log(data);
                if(data.status) {
                    // Empty current user data
                    setNewUser({});

                    // Delete token
                    Cookies.remove("token");

                    // Redirect to login
                    navigate('/accounts/login');
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
  
    return authContext;
}