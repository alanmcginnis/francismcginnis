import Hero from "./two/Hero";
import RSVP from "./two/RSVP";
import Details from "./two/Details";
import withRoot from "../modules/withRoot";
import "../App.css";

function TwoBirthday() {
  return (
    <>
      <Hero />
      <RSVP />
      <Details />
    </>
  );
}

export default withRoot(TwoBirthday);
