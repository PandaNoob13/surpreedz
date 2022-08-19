import OccasionCard from "./shared/components/OccasionCard/OccasionCard";
import PersonalisedMessageCard from "./shared/components/PersonalisedMessageCard/PersonalisedMessageCard";
import ProfileCard from "./shared/components/ProfileCard/ProfileCard";
import ReviewCard from "./shared/components/ReviewCard/ReviewCard";
import VideoCarouselCard from "./shared/components/VideoCarouselCard/VideoCarouselCard";

function App() {
  return (
    <div className="App">
      <ProfileCard />
      <ReviewCard />
      <OccasionCard />
      <PersonalisedMessageCard />
      <VideoCarouselCard />
    </div>
  );
}

export default App;
