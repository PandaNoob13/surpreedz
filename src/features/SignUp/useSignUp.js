import { useEffect, useState } from "react";
import { useAuth } from "../../shared/auth/UseAuth"
import { useDeps } from "../../shared/DepContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const useSignUp = () => {
    const navigate = useNavigate();
    const {signUpService} = useDeps();
    const [isLoading, setLoading] = useState(false);

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
        } catch (error) {
            setPosts(error)
            // console.log(error);
            swal({
                title:'Sign Up Failed',
                text:'Email already exist !',
                icon:'error'
            })
        }finally{
            // if (posts != "SUCCESS"){
            //     alert(posts)
            // } else {
            //     navigate('/sign-in')
            // }
            setLoading(false)
        }
    }

  return {
    onPostSignUp
  }
}

export default useSignUp;
