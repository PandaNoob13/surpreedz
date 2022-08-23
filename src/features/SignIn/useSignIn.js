import { useEffect, useState } from "react";
import { useAuth } from "../../shared/auth/UseAuth"
import { useDeps } from "../../shared/DepContext";

const useSignIn = () => {
    const {onLogin} = useAuth();
    const {signInService} = useDeps();
    const [isLoading, setLoading] = useState(false);

    const [posts, setPosts] = useState({})

    const onPostSignIn = async (username,password) => {
        console.log("On Post Sign In Called");
        setLoading(true);
        console.log(username);
        console.log(password);
        try {
            const response = await signInService.postLogin({
                username: username,
                password: password
            })
            console.log('response token', response.token);

            setPosts(response.token)
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        onLogin(posts)
    },[posts])

  return {
    onPostSignIn
  }
}

export default useSignIn;
