import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import withRoot from "./modules/withRoot";
// @mui material components
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 PRO React themes
// import theme from "./assets/theme";
import Home from "./pages/Home";
// import TwoBirthday from "./pages/TwoBirthday";

function Index() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/two" element={<TwoBirthday />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default withRoot(Index);
