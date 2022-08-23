
const ServiceFactory = (apiClient) => {
  return {
    signupProfileService: SignUpProfileService(apiClient),
    signInService : SignInService(apiClient)
  }
}

export default ServiceFactory
