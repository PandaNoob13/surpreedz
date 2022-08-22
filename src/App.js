import ServicePage from "./features/AddEditServicePage/ServicePage";
import EditProfilePage from "./features/EditProfilePage/EditProfilePage";
import HomePage from "./features/HomePage/HomePage";
import OrderDetailPage from "./features/OrderDetailPage/OrderDetailPage";
import PurchaseListPage from "./features/PurchaseListPage/PurchaseListPage";
import RequestListPage from "./features/RequestListPage/RequestListPage";
import SignInView from "./features/SignIn/SignInView";
import SignUpView from "./features/SignUp/SignUpView";
import Footer from "./shared/components/Footer/Footer";
import NavbarSellerBuyer from "./shared/components/navbar/NavbarSellerBuyer";

function App() {
  return (
    <>
      <NavbarSellerBuyer />
      {/* <SignUpView /> */}
      {/* <SignInView /> */}
      {/* <HomePage /> */}
      {/* <PurchaseListPage /> */}
      {/* <ServicePage /> */}
      {/* <EditProfilePage /> */}
      {/* <OrderDetailPage /> */}
      <RequestListPage />
      <Footer />
    </>
  );
}

export default App;
