import React, { useEffect, useState } from 'react'
import { useDeps } from '../../shared/DepContext';
import usePurchaseListPage from '../PurchaseListPage/usePurchaseListPage';

const useMidtransService = () => {
    const {orderService} = useDeps();
    const {posts, onGetOrder} = usePurchaseListPage();
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [midPosts, setMidPosts] = useState([])
    const [statMidtrans, setStatMidTrans] = useState(false)

    // useEffect(() => {

    // }, [midPosts]);

    useEffect(() => {
        onGetOrder();

    }, [])

    const onPostMidtrans = async (amount) => {
        setLoading(true);
        console.log("On Post Midtrans Service Called");
        console.log('post', posts);

        const arr = posts.map((data) => { 
            const account = data.account  
            const orders = account.Orders.map((order) => {
                return {...order, CreatedAt: new Date(order.CreatedAt)}
            })
            return orders
        })

        const sortedDesc = arr.flat().sort(
            (objA, objB) => Number(objB.CreatedAt) - Number(objA.CreatedAt)
        )
        console.log('sortedDesc', sortedDesc);

        try {
            const response = await orderService.postMidtrans({
                order_id: String(sortedDesc[0].id),
                amount: amount,
            })
            console.log('Response: ', response);
            // setMidPosts(response.token)
            setIsError(false)
            setStatMidTrans(true)
            return response.token;
        } catch (error) {
            setMidPosts(error)
            console.log(error);
        } finally{
            setLoading(false)
        }   
    }

    return {
        onPostMidtrans, isLoading, midPosts, statMidtrans
    }
}

export default useMidtransService