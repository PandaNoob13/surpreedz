const purchaseListService = ({doGet}) => {
    const getService = async () => {
        console.log("Try Getting Purchase List Cards");
        try {
            const page = 1;
            return await doGet({url: `/get-all-order-by-buyer-id/?buyerId=${page}`})
        } catch (error) {
            throw error
        }
    }
    return {getService}
  
}

export default purchaseListService
