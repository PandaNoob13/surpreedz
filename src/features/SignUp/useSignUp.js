import { useEffect, useState } from "react";
import { useAuth } from "../../shared/auth/UseAuth"
import { useDeps } from "../../shared/DepContext";
import { useNavigate } from "react-router-dom";

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
        } catch (error) {
            setPosts(error)
            console.log(error);
        }finally{
            if (posts != "SUCCESS"){
                alert(posts)
            } else {
                navigate('/sign-in')
            }
            setLoading(false)
        }
    }

  return {
    onPostSignUp
  }
}

export default useSignUp;
