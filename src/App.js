import AccountCard from "./shared/components/AccountCard/AccountCard";
import EditProfileCard from "./shared/components/EditProfieCard/EditProfieCard";
import ProfileCard from "./shared/components/ProfileCard/ProfileCard";

function App() {
  return (
    <>
      <div>
        <ProfileCard />
        <AccountCard />
      </div>
      <EditProfileCard />
    </>
  );
}

export default App;
