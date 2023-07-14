import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import withRoot from "./modules/withRoot";
import Home from "./pages/Home";
import TwoBirthday from "./pages/TwoBirthday";

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/two" element={<TwoBirthday />} />
      </Routes>
    </Router>
  );
}

export default withRoot(Index);
