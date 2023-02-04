// MUI Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
// Icons
import TodayIcon from "@mui/icons-material/Today";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DateRangeIcon from "@mui/icons-material/DateRange";
// MomentJS
import moment from "moment";

// Grid Item Config
const gridItem = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

// Icon Config
const iconSize = 66;

// Moment Variables
let now = moment(new Date());
const start = moment("2021-08-12");
const duration = moment.duration(now.diff(start));
const years = duration.asYears().toFixed(2);
const months = Math.trunc(duration.asMonths());
const days = Math.trunc(duration.asDays());

function BirthStatsTime() {
  return (
    <Box
      className="birth-stats-time"
      component="section"
      sx={{ display: "flex", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 8,
          mb: 8,
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          marked="center"
          component="h2"
          sx={{ mb: 10, flex: "0 0 100%", textAlign: "center", color: "white" }}
        >
          Look at me grow!
        </Typography>
        <Grid
          container
          spacing={5}
          sx={{ color: "white", justifyContent: "center" }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={gridItem}>
              <TodayIcon sx={{ fontSize: iconSize }} />
              <Typography variant="h4" sx={{ my: 3, color: "white" }}>
                {`${years} Years Old`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <Box sx={gridItem}>
              <CalendarMonthIcon sx={{ fontSize: iconSize }} />
              <Typography variant="h4" sx={{ my: 3, color: "white" }}>
                {`${months} Months Old`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <Box sx={gridItem}>
              <DateRangeIcon sx={{ fontSize: iconSize }} />
              <Typography variant="h4" sx={{ my: 3, color: "white" }}>
                {`${days} Days Old`}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default BirthStatsTime;
