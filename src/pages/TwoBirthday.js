import Hero from "./two/Hero";
import FirstWords from "./two/FirstWords";
import withRoot from "../modules/withRoot";
import "../App.css";

function TwoBirthday() {
  return (
    <>
      <Hero />
      <FirstWords />
    </>
  );
}

export default withRoot(TwoBirthday);
