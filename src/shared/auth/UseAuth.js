import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(window.sessionStorage.getItem('token'));
    const {addOrderDataResult} = useSelector((state)=> state.orderDetailReducer)

    useEffect(()=> {
        console.log('orderData useEffect', addOrderDataResult);
    },[addOrderDataResult])

    const onLogin = (token) => {
        if (token.AccessToken !== undefined){
            console.log(`Token : ${token}`);
            console.log(token);
            window.sessionStorage.setItem('token', token.AccessToken);
            setToken(token.AccessToken);           
            console.log('orderData Auth=> ', addOrderDataResult);

            if (addOrderDataResult) {
                console.log('orderData 1 ', addOrderDataResult);
                navigate('/purchase-confirmation')
            } else{
                console.log('Order Data tidak ada', addOrderDataResult);
                navigate('/', {replace: true})
            }
        } else {
            console.log(token.AccessToken);
            console.log('Token is null');
        }
    }
    const onLogout = () => {
        window.localStorage.clear();
        window.sessionStorage.clear()
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