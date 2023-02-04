import Hero from "./modules/views/Hero";
import BirthStats from "./modules/views/BirthStats";
import BirthStatsTime from "./modules/views/BirthStatsTime";
import PhotoGallery from "./modules/views/PhotoGallery";
import withRoot from "./modules/withRoot";
import "./App.css";

function Index() {
  return (
    <>
      <Hero />
      <BirthStatsTime />
      <BirthStats />
      <PhotoGallery />
    </>
  );
}

export default withRoot(Index);
