const addEditServiceService = ({doPost}) => {
    const postService = async (data) => {
        console.log("Try post service");
        try {
            return await doPost({url: '/account/edit', data: data})
        } catch (error) {
            throw error
        }
    }
    return {postService}
  
}

export default addEditServiceService
