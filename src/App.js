import AccountCard from "./shared/components/AccountCard/AccountCard";
import EditProfileCard from "./shared/components/EditProfieCard/EditProfieCard";
import ProfileCard from "./shared/components/ProfileCard/ProfileCard";
import PurchasedCard from "./shared/components/PurchasedCard/PurchasedCard";
import ServiceCard from "./shared/components/ServiceCard/ServiceCard";

function App() {
  return (
    <>
      <ServiceCard />
      <PurchasedCard />
      <div>
        <ProfileCard />
        <AccountCard />
      </div>
      <EditProfileCard />
    </>
  );
}

export default App;
