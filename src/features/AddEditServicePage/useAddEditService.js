import { useEffect, useState } from "react";
import { useAuth } from "../../shared/auth/UseAuth"
import { useDeps } from "../../shared/DepContext";
import { useNavigate } from "react-router-dom";

const useAddEditService = () => {
    
    const {addEditServiceService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(true)
    const [data, setData] = useState({})
    const [posts, setPosts] = useState({})
    useEffect(() => {
        if (isError == false){
            window.localStorage.setItem('service_detail_role', data.role)
            window.localStorage.setItem('service_detail_desc', data.description)
            window.localStorage.setItem('service_detail_price', data.price)
        }    
    }, [isError, data])
    const serviceDetailId = window.localStorage.getItem('service_detail_id')
    const onPostService = async (accountId ,role, description, price, video_link) => {
        setLoading(true);
        console.log("On Post Service Called");
        const intServiceDetailId = parseInt(serviceDetailId)
        switch (intServiceDetailId) {
            case 0 :
                try {
                    const response = await addEditServiceService.postService({
                        seller_id: accountId,
                        role: role,
                        description: description,
                        price: price,
                        video_link: video_link
                    })
                    console.log('status: ', response.status);
                    setPosts(response.status)
                    setData({
                        role: role,
                        description: description,
                        price: price
                    })
                    setIsError(false)
                } catch (error) {
                    setPosts(error)
                    console.log(error);
                }finally{
                    setLoading(false)
                }
                break;
            default :
                try {
                    const response = await addEditServiceService.putService({
                        role: role,
                        description: description,
                        price: price,
                    })
                    console.log('status: ', response.status);
                    setPosts(response.status)
                    setData({
                        role: role,
                        description: description,
                        price: price
                    })
                    setIsError(false)
                } catch (error) {
                    setPosts(error)
                    console.log(error);
                }finally{
                    setLoading(false)
                }
                break;
        }
        
    }

  return {
    onPostService
  }
}

export default useAddEditService;
