const PaymentStatusService = ({doPost}) => {
    const postPaymentStatusService = async (data) => {
        console.log("Try Payment Status Service Post");
        try {
            return await doPost({url: '/order/create-order', data: data})
        } catch (error) {
            throw error
        }
    }
    return {postPaymentStatusService}
  
}

export default PaymentStatusService
