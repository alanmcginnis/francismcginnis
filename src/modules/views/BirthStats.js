// Mui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
// Icons
import {
  ScaleWeigh,
  AlarmClock,
  IdentificationCard,
  Ruler,
} from "@vectopus/atlas-icons-react";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function BirthStats() {
  return (
    <Box
      className="birth-stats"
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
          sx={{ mb: 7, flex: "0 0 100%", textAlign: "center" }}
        >
          The day I was born
        </Typography>
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item xs={10} md={4}>
            <Box sx={item}>
              <IdentificationCard size={40} weight="bold" />
              <Typography
                variant="h4"
                component="h4"
                sx={{ my: 2, textAlign: "center" }}
              >
                Francis Joseph McGinnis
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <Box sx={item}>
              <AlarmClock size={40} weight="bold" />
              <Typography
                variant="h4"
                component="h4"
                sx={{ my: 2, textAlign: "center" }}
              >
                08/12/2021 @ 5:37 A.M
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <Box sx={item}>
              <ScaleWeigh size={40} weight="bold" />
              <Typography
                variant="h4"
                component="h4"
                sx={{ my: 2, textAlign: "center" }}
              >
                8 lbs. 15 oz.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <Box sx={item}>
              <Ruler size={40} weight="bold" />
              <Typography
                variant="h4"
                component="h4"
                sx={{ my: 2, textAlign: "center" }}
              >
                21 inches
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default BirthStats;
