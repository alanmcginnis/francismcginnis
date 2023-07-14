// Mui
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../../modules/components/Typography";

function Details() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <Box
      className="first-words"
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        backgroundColor: "#D3D0CB",
      }}
    >
      <Container
        sx={{
          mt: 8,
          mb: 8,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          position: "relative",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            border: "4px solid currentColor",
            borderRadius: 0,
            height: "auto",
            textAlign: "center",
            py: 2,
            px: 5,
            mb: 10,
            maxWidth: "400px",
            // margin: "0 auto",
          }}
        >
          <Typography variant="h4" component="span">
            Maps & Such
          </Typography>
        </Box>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            variant="outlined"
            size="medium"
            role="link"
            onClick={() =>
              openInNewTab("https://goo.gl/maps/LASa2MWSCwAxDCRC6")
            }
          >
            Google Maps
          </Button>
          <Button
            variant="outlined"
            size="medium"
            role="link"
            onClick={() =>
              openInNewTab(
                "https://www.oregonmetro.gov/sites/default/files/2016/06/13/Shahala-Shelter-A.pdf"
              )
            }
          >
            Detailed Park Map (PDF)
          </Button>
        </Container>
      </Container>
    </Box>
  );
}

export default Details;
