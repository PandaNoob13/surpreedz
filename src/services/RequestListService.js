const requestListService = ({doGet, doPost}) => {
    const postService = async (data) => {
        console.log("Try Posting Request List Cards");
        try {
            return await doPost({url: '/order-status/create-order-status', data: data})
        } catch (error) {

        }
    }

    const getService = async () => {
        console.log("Try Getting Request List Cards");
        try {
            const serviceDetailId = window.localStorage.getItem('service_detail_id')      
            return await doGet({url: `/order/get-all-order-by-service-detail-id/?serviceDetailId=${serviceDetailId}`})
        } catch (error) {
            throw error
        }
    }
    return {postService ,getService}
}

export default requestListService
