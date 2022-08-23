const SignInService = ({doPost}) => {
    const signinPost = async (email,password) => {
        try{
            return await doPost({
                url:'/sign-in',data: {
                    email,
                    password
                }
            })
        }catch(e){
            throw e;
        }
    }
    return {
        signinPost
    }
}

export default SignInService