const EditProfileService = ({doPut}) => {
    const putProfile = async (data) => {
        console.log("Try Edit Profile Put");
        try {
            return await doPut({url: '/account/edit', data: data})
        } catch (error) {
            throw error
        }
    }
    return {putProfile}
  
}

export default EditProfileService
