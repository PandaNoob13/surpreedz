import PurchaseListPage from '../features/PurchaseListPage/PurchaseListPage'
import PurchaseConfirmationPage from '../features/PurchaseConfirmationPage/PurchaseConfirmationPage'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../features/HomePage/HomePage'
import SignInView from '../features/SignIn/SignInView'
import SignUpView from "../features/SignUp/SignUpView"
import RequestListPage from "../features/RequestListPage/RequestListPage"
import ServicePage from "../features/AddEditServicePage/ServicePage"
import EditProfilePage from '../features/EditProfilePage/EditProfilePage'
import OrderDetailPage from '../features/OrderDetailPage/OrderDetailPage'
import ProtectedPage from "../navigation/ProtectedPage"
import Nav from '../shared/components/navbar/Nav'
import Footer from "../shared/components/Footer/Footer"
import AboutPage from '../features/AboutPage/AboutPage'

const AppRouter = () => {
  return (
    <>
    <Nav/>
    <Routes>
       <Route element={<ProtectedPage/>}>
          <Route path="/request-list" element={<RequestListPage/>}></Route>
          <Route path="/service" element={<ServicePage/>}></Route>
          <Route path='/purchase-list' element={<PurchaseListPage/>}></Route>
          <Route path='/profile' element={<EditProfilePage/>}></Route>
          {/* <Route path='/order-detail-page' element={<OrderDetailPage/>}></Route> */}
          <Route path='/purchase-confirmation' element={<PurchaseConfirmationPage/>}></Route>
      </Route>

      <Route index element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage></AboutPage>}></Route>
      <Route path='/order-detail-page' element={<OrderDetailPage/>}></Route>
      <Route  path="/sign-in" element={<SignInView/>}></Route>
      <Route  path="/sign-up" element={<SignUpView/>}></Route>
     
    </Routes>
    <Footer/>
    </>
  )
}

export default AppRouter
