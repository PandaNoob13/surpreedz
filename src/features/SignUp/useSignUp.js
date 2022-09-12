import { useEffect, useState } from "react";
import { useAuth } from "../../shared/auth/UseAuth"
import { useDeps } from "../../shared/DepContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useSelector } from "react-redux";

const useSignUp = () => {
    const navigate = useNavigate();
    const {signUpService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const {addOrderDataResult} = useSelector((state)=> state.orderDetailReducer);
    

    const [posts, setPosts] = useState({})

    const onPostSignUp = async (email, password, name, location) => {
        setLoading(true);
        console.log("On Post Sign Up Called");
        try {
            const response = await signUpService.postSignUp({
                email: email,
                password: password,
                name: name,
                location: location,
                photo_link: "",
                is_deleted: false
            })
            console.log('status: ', response.status);
            setPosts(response.status)
            if (addOrderDataResult) {
                swal({
                    title:'Sign Up Success',
                    text:`Welcome to Surpreedz ! \n Please Sign In to complete your transaction`,
                    icon:'success'
                })
                navigate('/sign-in')
            }else{
                swal({
                    title:'Sign Up Succes',
                    text:'Welcome to Surpreedz !',
                    icon:'success',
                    buttons:["Go to Home", "Sign In"]
                }).then((value)=> {
                    if (value) {
                        navigate('/sign-in')
                    }else{
                        navigate('/')
                    }
                })
            }
            
        } catch (error) {
            setPosts(error)
            swal({
                title:'Sign Up Failed',
                text:'Email already exist !',
                icon:'error'
            })
        }finally{
            setLoading(false)
        }
    }

  return {
    onPostSignUp,isLoading
  }
}

export default useSignUp;
