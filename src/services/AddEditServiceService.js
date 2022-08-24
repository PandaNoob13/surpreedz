const addEditServiceService = ({doPost, doPut}) => {
    const postService = async (data) => {
        console.log("Try post service");
        try {
            return await doPost({url: '/service-detail/create-service-detail', data: data})
        } catch (error) {
            throw error
        }
    }
    const serviceDetailId = window.localStorage.getItem('service_detail_id')
    const putService = async (data) => {
        console.log("Try put service");
        try {
            return await doPut({url: `/service-detail/edit-service-detail/?serviceId=${serviceDetailId}`, data: data})
        } catch (error) {
            throw error
        }
    }
    return {postService, putService}
  
}

export default addEditServiceService
