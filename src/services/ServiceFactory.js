import addEditServiceService from "./AddEditServiceService"
import homeService from "./HomeService"
import SignInService from "./SignInService"
import SignUpService from "./SignupService"


const ServiceFactory = (apiClient) => {
  return {
        signInService : SignInService(apiClient),
        signUpService : SignUpService(apiClient),
        addEditServiceService: addEditServiceService(apiClient),
        homeService : homeService(apiClient)
  }
}

export default ServiceFactory
