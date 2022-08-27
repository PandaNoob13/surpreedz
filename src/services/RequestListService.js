const requestListService = ({doGet, doPost}) => {
    const postService = async () => {
        console.log("Try Poasting Request List Cards");
        try {
            return await doPost({url: '', data: {}})
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
