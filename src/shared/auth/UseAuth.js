import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { addOrder } from "../../features/OrderDetailPage/state/OrderDetailAction";


const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(window.sessionStorage.getItem('token'));
    const {addOrderDataResult} = useSelector((state)=> state.orderDetailReducer);
    const dispatch = useDispatch();

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
        if (addOrderDataResult) {
            swal({
                title:'Are you sure ?',
                text:`If you sign out before completing the payment, \n your order data will be deleted`,
                icon:'warning',
                buttons:["Cancel", "Sign Out"]
            }).then((value)=> {
                if (value) {
                    window.localStorage.clear();
                    window.sessionStorage.clear()
                    setToken(null)
                    dispatch(addOrder(false))
                    navigate('/', {replace: true})
                }
            })
    
        }else{
            window.localStorage.clear();
            window.sessionStorage.clear()
            setToken(null)
            dispatch(addOrder(false))
            navigate('/', {replace: true})
        }
        
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