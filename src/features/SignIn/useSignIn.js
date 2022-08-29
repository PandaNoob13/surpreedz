import { useEffect, useState } from "react";
import { useAuth } from "../../shared/auth/UseAuth"
import { useDeps } from "../../shared/DepContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


const useSignIn = () => {
    const navigate = useNavigate();
    const {onLogin} = useAuth();
    const {signInService} = useDeps();
    const [isLoading, setLoading] = useState(false);

    const [data, setData] = useState('');
    const [posts, setPosts] = useState({})

    const onPostSignIn = async (email,password) => {
        setLoading(true);
        console.log("On Post Sign In Called"); 
        try {
            const response = await signInService.postLogin({
                email: email,
                password: password
            })
            console.log('response token', response.token);
            console.log('response account', response.account);
            setPosts(response.token)
            setData(response.account)
            swal({
                title:'Sign In Success',
                text:'Have fun on Surpreedz !',
                icon:'success'
            })
        } catch (error) {
            console.log(error);
            swal({
                title:'Sign In Failed',
                text:'Wrong Email or Password !',
                icon:'error'
            })
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if (data != "") {
            const account = data.account
            window.localStorage.setItem('account_id', account.id);
            window.localStorage.setItem('account_email', account.email);
            window.localStorage.setItem('account_name', account.AccountDetail.name);
            window.localStorage.setItem('account_location', account.AccountDetail.location);
            window.localStorage.setItem('account_join_date', data.string_join_date)
            window.localStorage.setItem('service_detail_id', account.ServiceDetail.id)
            window.localStorage.setItem('service_detail_role', account.ServiceDetail.role)
            window.localStorage.setItem('service_detail_desc', account.ServiceDetail.description)
            if (account.ServiceDetail.id != 0){
                const serviceDetail = account.ServiceDetail
                console.log(serviceDetail.ServicePrices);
                const price = serviceDetail.ServicePrices[serviceDetail.ServicePrices.length - 1]
                window.localStorage.setItem('service_detail_price', price.price)
            } else {
                window.localStorage.setItem('service_detail_price', 0)
                console.log("No service detail");
            }
            // const accountDetail = account.AccountDetail
            // console.log("Photo Profiles : ", accountDetail.PhotoProfiles);
            // const photoProfile = accountDetail.PhotoProfiles[accountDetail.PhotoProfiles.length - 1]
            window.localStorage.setItem('photo_profile', data.data_url);
            navigate('/')
        }
    }, [data])

    useEffect(() => {
        onLogin(posts)
    },[posts])

  return {
    onPostSignIn
  }
}

export default useSignIn;
