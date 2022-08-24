import { useEffect, useState } from "react";
import { useAuth } from "../../shared/auth/UseAuth"
import { useDeps } from "../../shared/DepContext";
import { useNavigate } from "react-router-dom";

const useAddEditService = () => {
    const navigate = useNavigate();
    const {addEditServiceService} = useDeps();
    const [isLoading, setLoading] = useState(false);

    const [posts, setPosts] = useState({})

    const onPostService = async (email, password, name, location) => {
        setLoading(true);
        console.log("On Post Sign Up Called");
        try {
            const response = await addEditServiceService.postService({
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
    onPostService
  }
}

export default useAddEditService;
