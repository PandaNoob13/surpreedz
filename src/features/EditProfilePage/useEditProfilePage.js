import { useEffect, useState } from "react";
import { useDeps } from "../../shared/DepContext"

const useEditProfilePage = () => {

    const {editProfileService} = useDeps();
    const [isLoading,setLoading] = useState(false);
    const [isError, setIsError] = useState(true)
    const [data, setData] = useState({})
    const [posts, setPosts] = useState({})

    
    useEffect(()=>{
        if (isError === false) {
            window.localStorage.setItem('account_name', data.name)
            window.localStorage.setItem('account_location',data.location)
        }
        console.log('useEffect Edit Profile called');
    },[isError, data])

    const onPutProfile = async (name,location) => {
        setLoading(true);
        console.log("On Put Profile Called");
        try {
            console.log('On Put Profile Called => Try');
            const response = await editProfileService.putProfile({
                account_id: parseInt(window.localStorage.getItem('account_id')),
                name :name,
                location : location
            })
            console.log('response useEditProfile=>',response);
            setPosts(response.status);
            setData({
                name:name,
                location:location
            })
            console.log('data.name', data.name);
            setIsError(false)
            console.log('error edit profile', isError);
        } catch (error) {
            console.log('On Put Profile Called => Error');
            setPosts(error);
            console.log('edit profile eror => ', error);
        } finally{
            console.log('On Put Profile Called => Finally');
            setLoading(false)
        }
    }

    return {
        onPutProfile
    }
  
}

export default useEditProfilePage
