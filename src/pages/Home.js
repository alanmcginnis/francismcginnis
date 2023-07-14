import Hero from "../modules/views/Hero";
import BirthStatsTime from "../modules/views/BirthStatsTime";
import BirthStats from "../modules/views/BirthStats";
import FirstWords from "../modules/views/FirstWords";
import PhotoGallery from "../modules/views/PhotoGallery";
import withRoot from "../modules/withRoot";
import "../App.css";

function Home() {
  return (
    <>
      <Hero />
      <BirthStatsTime />
      <BirthStats />
      <FirstWords />
      <PhotoGallery />
    </>
  );
}

export default withRoot(Home);
