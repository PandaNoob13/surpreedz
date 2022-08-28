import { useEffect, useState } from "react";
import { useDeps } from "../../shared/DepContext";

function usePurchaseListPage() {
    const {orderService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [posts, setPosts] = useState([])
    useEffect(() => { 
        
    }, [posts])
    const onGetOrder = async () => {
        setLoading(true);
        console.log("On Get Order Service Called");
        try {
            const response = await orderService.getService()
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
        posts, onGetOrder
    }
}

export default usePurchaseListPage