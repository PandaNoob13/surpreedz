import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState();
    const onLogin = (token) => {
        if (token.AccessToken !== undefined){
            console.log(`Token : ${token}`);
            console.log(token);
            window.sessionStorage.setItem('token', token.AccessToken);
            setToken(token.AccessToken);
            navigate('/#category', {replace: true})
        } else {
            console.log(token.AccessToken);
            console.log('Token is null');
            window.sessionStorage.clear();
        }

    }
    const onLogout = () => {
        window.sessionStorage.clear();
        window.localStorage.clear();
        setToken(null)
        navigate('/', {replace: true})
    }
    return (
        <AuthContext.Provider value={{token, onLogin, onLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}