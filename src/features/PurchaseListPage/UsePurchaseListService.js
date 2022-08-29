import { useEffect, useState } from "react";
import { useDeps } from "../../shared/DepContext";

const usePurchaseListService = () => {
    const {purchaseListService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [posts, setPosts] = useState([])
    useEffect(() => { 
        
    }, [posts])
    const onGetService = async () => {
        setLoading(true);
        console.log("On Get Purchase List Service");
        try {
            const response = await purchaseListService.getService()
            console.log('Response: ', response);
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
        posts, onGetService
    }
}

export default usePurchaseListService;
