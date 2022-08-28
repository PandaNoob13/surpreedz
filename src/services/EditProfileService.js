const EditProfileService = ({doPut}) => {
    const putProfile = async (data) => {
        console.log("Try Edit Profile Put");
        try {
            console.log('Try Edit Profile Put : Try');
            return await doPut({url: '/account/edit', data: data})
        } catch (error) {
            console.log('Try Edit Profile Put : Error', error);
            throw error
        }
    }
    return {putProfile}
  
}

export default EditProfileService
