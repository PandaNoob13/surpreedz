import { upload } from "@testing-library/user-event/dist/upload";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { useDeps } from "../../shared/DepContext"

const useEditProfilePage = () => {

    const {editProfileService} = useDeps();
    const [isLoading,setLoading] = useState(false);
    const [isError, setIsError] = useState(true)
    const [data, setData] = useState({})
    const [posts, setPosts] = useState({})
    const [uploadStatus, setUploadStatus] = useState(false)

    
    useEffect(()=>{
        if (isError === false) {
            window.localStorage.setItem('account_name', data.name)
            window.localStorage.setItem('account_location',data.location)
            if(data.dataUrl != undefined){
                console.log("Data url empty : ", data.dataUrl);
                console.log("Dataurl is not empty!");
                const dataUrlSeparated = data.dataUrl.split(',')
                window.localStorage.setItem('photo_profile', dataUrlSeparated[1])
            }
        }
        console.log('useEffect Edit Profile called');
    },[isError, data])

    useEffect(() => {console.log("Upload finished");}, [uploadStatus])

    const onPutProfile = async (name,location, photo, photoName, url, dataUrl) => {
        setLoading(true);
        console.log("On Put Profile Called");
        console.log('islOading edit profile', isLoading);
        try {
            console.log('On Put Profile Called => Try');
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
            console.log('error edit profile', isError);
            swal({
                title:'Edit Profile Success',
                icon:'success'
            })
            setUploadStatus(!uploadStatus)
            setIsError(false)
        } catch (error) {
            setPosts(error);
            swal({
                title:'Edit Profile Failed',
                text:'Something wrong , Try again!',
                icon:'error'
            })
        } finally{
            console.log('On Put Profile Called => Finally');
            setLoading(false)
            console.log('islOading final edit profile', isLoading);

        }
    }

    return {
        onPutProfile,isLoading
    }
  
}

export default useEditProfilePage
