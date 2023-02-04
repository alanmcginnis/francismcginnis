import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ScaleIcon from "@mui/icons-material/Scale";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const iconSize = 66;

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
        {/* <Box
          component="img"
          src="/static/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        /> */}
        <Typography
          variant="h4"
          marked="center"
          component="h2"
          sx={{ mb: 10, flex: "0 0 100%", textAlign: "center" }}
        >
          The day I was born
        </Typography>
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item xs={10} md={4}>
            <Box sx={item}>
              <MedicalInformationIcon sx={{ fontSize: iconSize }} />
              <Typography variant="h4" sx={{ my: 3, textAlign: "center" }}>
                Francis Joseph McGinnis
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <Box sx={item}>
              <AccessAlarmIcon sx={{ fontSize: iconSize }} />
              <Typography variant="h4" sx={{ my: 3, textAlign: "center" }}>
                5:37 A.M
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} md={4}>
            <Box sx={item}>
              <ScaleIcon sx={{ fontSize: iconSize }} />
              <Typography variant="h4" sx={{ my: 3, textAlign: "center" }}>
                8 lbs. 15 oz.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default BirthStats;
