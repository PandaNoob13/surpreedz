import { useEffect, useState } from "react";
import { useAuth } from "../../shared/auth/UseAuth"
import { useDeps } from "../../shared/DepContext";
import { useNavigate } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";


const useSignIn = () => {
    const navigate = useNavigate();
    const {onLogin} = useAuth();
    const {signInService} = useDeps();
    const [isLoading, setLoading] = useState(false);

    const [isError, setIsError] = useState(true);
    const [posts, setPosts] = useState({})

    const onPostSignIn = async (email,password) => {
        console.log("On Post Sign In Called");
        setLoading(true);
        console.log(email);
        console.log(password);
        try {
            const response = await signInService.postLogin({
                email: email,
                password: password
            })
            console.log('response token', response.token);
            setPosts(response.token)
            setIsError(false)
        } catch (error) {
            setIsError(true)
            console.log(error);
            alert(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        if (isError == false) {
            navigate('/')
        }
    }, [isError])

    useEffect(() => {
        onLogin(posts)
    },[posts])

  return {
    onPostSignIn
  }
}

export default useSignIn;
