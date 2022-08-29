const purchaseListService = ({doGet}) => {
    const getService = async () => {
        console.log("Try Getting Purchase List Cards");
        try {
            const buyerId = parseInt(window.localStorage.getItem('account_id'))      
            return await doGet({url: `/order/get-all-order-by-buyer-id/?buyerId=${buyerId}`})
        } catch (error) {
            throw error
        }
    }
    const getVideoResult = async (orderId) => {
        console.log("Trying to get video result");
        console.log("Order id in service purchase : ", orderId);

        try {
            return await doGet({url: `/video-result/get-video-result-by-order-id/?orderId=${orderId}`})
        } catch (error) {
            throw error
        }
    }
    return {getService, getVideoResult}
  
}

export default purchaseListService
