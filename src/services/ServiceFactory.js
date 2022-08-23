import SignInService from "./SignInService"
import SignUpProfileService from "./SignUpProfileService"

const ServiceFactory = (apiClient) => {
  return {
    signupProfileService: SignUpProfileService(apiClient),
    signInService : SignInService(apiClient)
  }
}

export default ServiceFactory
