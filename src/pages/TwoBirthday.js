import Hero from "./two/Hero";
import BirthStatsTime from "./two/BirthStatsTime";
import BirthStats from "./two/BirthStats";
import FirstWords from "./two/FirstWords";
import withRoot from "../modules/withRoot";
import "../App.css";

function TwoBirthday() {
  return (
    <>
      <Hero />
      <BirthStatsTime />
      <BirthStats />
      <FirstWords />
    </>
  );
}

export default withRoot(TwoBirthday);
