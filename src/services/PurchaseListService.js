const purchaseListService = ({doGet}) => {
    const getService = async () => {
        console.log("Try Getting Purchase List Cards");
        try {
            const buyerId = window.localStorage.getItem('account_id')      
            return await doGet({url: `/order/get-all-order-by-buyer-id/?buyerId=${buyerId}`})
        } catch (error) {
            throw error
        }
    }
    return {getService}
  
}

export default purchaseListService
