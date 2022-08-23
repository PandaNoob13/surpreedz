import SignInService from "./SignInService"
import SignUpService from "./SignupService"


const ServiceFactory = (apiClient) => {
  return {
        signInService : SignInService(apiClient),
        signUpService : SignUpService(apiClient)
  }
}

export default ServiceFactory
