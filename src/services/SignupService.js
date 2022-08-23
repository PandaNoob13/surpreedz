const SignUpService = ({doPost}) => {
    const postSignUp = async (data) => {
        console.log("Try Signup Service Post");
        try {
            return await doPost({url: '/account/signup', data: data})
        } catch (error) {
            throw error
        }
    }
    return {postSignUp}
  
}

export default SignUpService
