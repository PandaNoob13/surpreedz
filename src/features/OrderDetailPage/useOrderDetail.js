import { post } from "jquery";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDeps } from "../../shared/DepContext";
import Midtrans from "../PurchaseConfirmationPage/Midtrans";
import useMidtransService from "../PurchaseConfirmationPage/useMidtransService";

const useOrderService = () => {
    const {onPostMidtrans} = useMidtransService()
    const {orderService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [posts, setPosts] = useState([])
    const {addOrderDataResult} = useSelector((state)=> state.orderDetailReducer)



    useEffect(() => { 
        if (posts.order_id != undefined){
            const buyerEmail = window.localStorage.getItem('account_email')
            console.log("Order id changed : ", posts.order_id);
            const fetchData = async () => {
                const token = await onPostMidtrans(posts.order_id, buyerEmail ,addOrderDataResult.price)
                if (token !== '') {
                    await Midtrans(token);
                }
            }
            fetchData()
        }
    }, [posts])
    const onPostService = async (buyer_id, buyer_email, service_detail_id, due_date, occasion, recipient_name, message_to_recipient, recipient_description) => {
        setLoading(true);
        console.log("On Post Order Service Called");
        try {
            const response = await orderService.postOrderService({
                buyer_id: buyer_id,
                buyer_email: buyer_email,
                service_detail_id: service_detail_id,
                due_date: due_date,
                occasion: occasion,
                recipient_name: recipient_name,
                message_to_recipient: message_to_recipient,
                recipient_description: recipient_description
            })
            
            console.log('Response use order detail : ', response);
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
        onPostService, isLoading, posts
    }
}

export default useOrderService;
