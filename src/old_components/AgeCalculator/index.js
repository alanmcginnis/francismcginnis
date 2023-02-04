// import Moment from "react-moment";
import moment from "moment";

const AgeCalculator = () => {
  let now = moment(new Date());
  const start = moment("2021-08-12");
  const duration = moment.duration(now.diff(start));
  const years = duration.asYears();
  const days = duration.asDays();
  const months = duration.asMonths();
  return (
    <>
      {years.toFixed(2)}
      <br></br>
      {days.toFixed(2)}
      <br></br>
      {months.toFixed(2)}
    </>
  );
};

export default AgeCalculator;
