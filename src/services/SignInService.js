const SignInService = ({doPost}) => {
    const postLogin = async (data) => {
        console.log("Try Login Service Post");
        try {
            return await doPost({url: '/api/auth/login', data: data})
        } catch (error) {
            throw error
        }
    }
    return {postLogin}
  
}

export default SignInService
