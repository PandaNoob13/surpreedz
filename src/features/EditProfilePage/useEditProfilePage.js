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
    },[isError, data])

    const onPutProfile = async (name,location, photo, photoName, url, dataUrl) => {
        console.log("THE DATA URL : ", dataUrl);
        setLoading(true);
        console.log("On Put Profile Called");
        try {
            const response = await editProfileService.putProfile({
                account_id: parseInt(window.localStorage.getItem('account_id')),
                name :name,
                location : location,
                photo_name: photoName,
                url: url,
                data_url: dataUrl
            })
            console.log('response useEditProfile => ',response);
            setPosts(response.status);
            setData({
                name: name,
                location: location,
                photo_name: photoName,
                url: url,
                data_url: dataUrl
            })
            console.log('data.name', data.name);
            setIsError(false)
            console.log('error edit profile', isError);
        } catch (error) {
            setPosts(error);
        } finally{
            setLoading(false)
        }
    }

    return {
        onPutProfile
    }
  
}

export default useEditProfilePage
