// Mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../../modules/components/Typography";
import Form from "./Form";

function RSVP() {
  return (
    <Box
      className="first-words"
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        backgroundColor: "#E7E5DF",
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
            maxWidth: "200px",
            // margin: "0 auto",
          }}
        >
          <Typography variant="h4" component="span">
            RSVP
          </Typography>
        </Box>
        <Form />
      </Container>
    </Box>
  );
}

export default RSVP;
