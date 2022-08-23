import SignUpProfileService from "./SignUpProfileService"

const ServiceFactory = (apiClient) => {
  return {
    signupProfileService: SignUpProfileService(apiClient),
    
  }
}

export default ServiceFactory
