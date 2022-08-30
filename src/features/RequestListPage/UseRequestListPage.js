import { useEffect, useState } from "react";
import { useDeps } from "../../shared/DepContext";

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
        setLoading(true);
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
        }finally{
            setLoading(false)
        }   
    }

    const onPostVideoResult = async (orderId, dataUrl) => {
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
        }finally{
            setLoading(false)
        }   
    }  

    return {
        posts, onGetService, onPostService, onPostVideoResult
    }
}

export default useRequestListService;
