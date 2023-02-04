// Mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function BirthStats() {
  return (
    <Box
      className="first-words"
      component="section"
      sx={{ display: "flex", overflow: "hidden", backgroundColor: "#fff5f8" }}
    >
      <Container
        sx={{
          mt: 8,
          mb: 8,
          display: "flex",
          flexWrap: "wrap",
          position: "relative",
          justifyContent: "center",
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
            mb: 6,
          }}
        >
          <Typography variant="h4" component="span">
            My First Words
          </Typography>
        </Box>
        <Typography
          variant="h4"
          component="p"
          sx={{ textAlign: "center", fontWeight: "normal" }}
        >
          Daddy, Hot, Up, Owl, Taco, No, Apple, Uh-oh, Cracker, Mama, Help,
          Cora, Leo, Bye Bye, Coal, Papa, Nana, Night Night, Pizza.
        </Typography>
      </Container>
    </Box>
  );
}

export default BirthStats;
