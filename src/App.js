import Hero from "./modules/views/Hero";
import BirthStats from "./modules/views/BirthStats";
import BirthStatsTime from "./modules/views/BirthStatsTime";
import withRoot from "./modules/withRoot";
import "./App.css";

function Index() {
  return (
    <>
      <Hero />
      <BirthStatsTime />
      <BirthStats />
    </>
  );
}

export default withRoot(Index);
