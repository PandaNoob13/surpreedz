import { useEffect, useState } from "react";
import { useAuth } from "../../shared/auth/UseAuth"
import { useDeps } from "../../shared/DepContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { post } from "jquery";

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
    useEffect(() => {
        if (posts.service_detail_id != undefined){
            window.localStorage.setItem('service_detail_id', posts.service_detail_id)
        }
    }, [posts])
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
                    console.log('Create service response data : ', response);
                    setPosts(response.data)
                    setData({
                        role: role,
                        description: description,
                        price: price
                    })
                    setIsError(false)
                    swal({
                        title:'Submit Your Service Success',
                        icon:'success'
                    })
                } catch (error) {
                    setPosts(error)
                    console.log(error);
                    swal({
                        title:'Submit Your Service Failed',
                        text:'Something wrong , Try again!',
                        icon:'error'
                    })
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
                    swal({
                        title:'Your service has been changed successfully',
                        icon:'success'
                    })
                } catch (error) {
                    setPosts(error)
                    console.log(error);
                    swal({
                        title:'Your Service Change Failed',
                        text:'Something wrong , Try again!',
                        icon:'error'
                    })
                }finally{
                    setLoading(false)
                }
                break;
        }
        
    }

  return {
    onPostService,isLoading
  }
}

export default useAddEditService;
