import addEditServiceService from "./AddEditServiceService"
import SignInService from "./SignInService"
import SignUpService from "./SignupService"


const ServiceFactory = (apiClient) => {
  return {
        signInService : SignInService(apiClient),
        signUpService : SignUpService(apiClient),
        addEditServiceService: addEditServiceService(apiClient)
  }
}

export default ServiceFactory
