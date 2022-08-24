// SignUp and EditProfile
const SignUpProfileService = ({doGet, doPost}) => {
    const postSignUp = async (email, password, name, location, /*photo_blob*/) => {
        try{
            return await doPost({
                url:'/auth/sign-up',data: {
                    email,
                    password,
                    name,
                    location,
                    // photo_blob
                }
            })
        }catch(e){
            throw e;
        }
    }
    return {
        postSignUp
    }
}

export default SignUpProfileService

            
            
            