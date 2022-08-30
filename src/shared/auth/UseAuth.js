import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(window.sessionStorage.getItem('token'));
    const orderData = {
        recipient : localStorage.getItem('order_detail_recipient'),
        message : localStorage.getItem('order_detail_message'),
        occasion : localStorage.getItem('order_detail_occasion')
    }
    const onLogin = (token) => {
        if (token.AccessToken !== undefined){
            console.log(`Token : ${token}`);
            console.log(token);
            window.sessionStorage.setItem('token', token.AccessToken);
            setToken(token.AccessToken);
           
            console.log('orderData 2 ', orderData);

            if (localStorage.getItem('order_detail_recipient') != 'null' && localStorage.getItem('order_detail_occasion') != 'null' ) {
                console.log('orderData 1 ', orderData);
                console.log('recipient',localStorage.getItem('order_detail_recipient'));
                console.log('occasion',localStorage.getItem('order_detail_occasion'));
                navigate('/purchase-confirmation')
            } else if (localStorage.getItem('order_detail_recipient') == 'null' && localStorage.getItem('order_detail_occasion') == 'null'){
                console.log('recipient 2',localStorage.getItem('order_detail_recipient'));
                console.log('occasion 2',localStorage.getItem('order_detail_occasion'));
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