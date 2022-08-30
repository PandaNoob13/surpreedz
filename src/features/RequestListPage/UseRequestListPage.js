import { useEffect, useState } from "react";
import { useDeps } from "../../shared/DepContext";
import swal from "sweetalert";


const useRequestListService = () => {
    const {requestListService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [posts, setPosts] = useState([])
    useEffect(() => { 
        
    }, [posts])
    const onGetService = async () => {
        setLoading(true);
        console.log("On Get Request List Service");
        try {
            const response = await requestListService.getService()
            console.log('Response: ', response.data);
            setPosts(response.data)
            setIsError(false)
        } catch (error) {
            setPosts(error)
            console.log(error);
        }finally{
            setLoading(false)
        }
    }

    const onPostService = async (order_id, status) => {
        console.log("On Get Request List Called");
        try {
            const response = await requestListService.postService({
                order_id: order_id,
                status: status
            })
            console.log('Response: ', response.data);
            setPosts(response.data)
            setIsError(false)
        } catch (error) {
            setPosts(error)
            console.log(error);
        }finally{}   
    }

    const onPostVideoResult = async (orderId, dataUrl) => {
        setLoading(true)
        console.log("On post video result called");
        try {
            const response = await requestListService.postVideoResult({
                order_id: orderId,
                data_url: dataUrl
            })
            console.log('Response: ', response.data);
            setPosts(response.data)
            
            setIsError(false)
        } catch (error) {
            setPosts(error)
            console.log(error);
            swal({
                title:'Upload Video Failed',
                text:'Error while uploading your video..',
                icon:'error'
            })
        }finally{
            setLoading(false)
            swal({
                title:'Upload Video Success',
                text:'Your customer has received your video!',
                icon:'success'
            })
        }   
    }  

    return {
        posts, onGetService, onPostService, onPostVideoResult, isLoading
    }
}

export default useRequestListService;
