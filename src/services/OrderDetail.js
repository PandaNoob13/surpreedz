const OrderService = ({doPost}) => {
    const postLogin = async (data) => {
        console.log("Try Order Service Post");
        try {
            return await doPost({url: '/api/auth/login', data: data})
        } catch (error) {
            throw error
        }
    }
    return {postLogin}
  
}

export default OrderService
