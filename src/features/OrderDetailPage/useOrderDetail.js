import { useEffect, useState } from "react";
import { useAuth } from "../../shared/auth/UseAuth";
import { useDeps } from "../../shared/DepContext";

const useOrderService = () => {
    const {orderService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [posts, setPosts] = useState([]);
    
    useEffect(() => { 
    }, [posts])

    const onPostService = async (buyer_id, service_detail_id, due_date, occasion, recipient_name, message_to_recipient, recipient_description) => {
        setLoading(true);
        console.log("On Get Home Service Called");
        try {
            const response = await orderService.postOrderService({
                buyer_id: buyer_id,
                service_detail_id: service_detail_id,
                due_date: due_date,
                occasion: occasion,
                recipient_name: recipient_name,
                message_to_recipient: message_to_recipient,
                recipient_description: recipient_description
            })
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
        onPostService
    }
}

export default useOrderService;
