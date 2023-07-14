// MUI Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../../modules/components/Typography";
// Icons
import {
  PlantTestTube,
  HandHoldingPlant,
  HeartPlant,
} from "@vectopus/atlas-icons-react";
// MomentJS
import moment from "moment";

// Grid Item Config
const gridItem = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

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
        className="birth-stats-time"
        component="section"
        sx={{
          mt: 8,
          mb: 8,
          display: "flex",
          flexWrap: "wrap",
          // position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h4"
          marked="center"
          component="h2"
          sx={{ mb: 7, flex: "0 0 100%", textAlign: "center", color: "white" }}
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
              <PlantTestTube size={40} weight="bold" />
              <Typography
                variant="h4"
                component="h4"
                sx={{ my: 2, color: "white", textAlign: "center" }}
              >
                {`${years} Years Old`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <Box sx={gridItem}>
              <HandHoldingPlant size={40} weight="bold" />
              <Typography
                variant="h4"
                component="h4"
                sx={{ my: 2, color: "white", textAlign: "center" }}
              >
                {`${months} Months Old`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <Box sx={gridItem}>
              <HeartPlant size={40} weight="bold" />
              <Typography
                variant="h4"
                component="h4"
                sx={{ my: 2, color: "white", textAlign: "center" }}
              >
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
