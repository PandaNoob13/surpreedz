import addEditServiceService from "./AddEditServiceService"
import EditProfileService from "./EditProfileService"
import homeService from "./HomeService"
import OrderService from "./OrderService"
import purchaseListService from "./PurchaseListService"
import requestListService from "./RequestListService"
import SignInService from "./SignInService"
import SignUpService from "./SignupService"


const ServiceFactory = (apiClient) => {
  return {
        signInService : SignInService(apiClient),
        signUpService : SignUpService(apiClient),
        addEditServiceService: addEditServiceService(apiClient),
        homeService : homeService(apiClient),
        orderService : OrderService(apiClient),
        purchaseListService : purchaseListService(apiClient),
        requestListService : requestListService(apiClient),
        editProfileService : EditProfileService(apiClient)
  }
}

export default ServiceFactory
