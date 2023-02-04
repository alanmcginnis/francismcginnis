import Typography from "../components/Typography";
import HeroLayout from "./layout/HeroLayout";

const backgroundImage = "./static/Hero.jpg";

export default function ProductHero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Hi 👋, I'm Francis...
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 6 } }}
      >
        the <strong>BEST BABY</strong> in the <strong>WHOLE WORLD</strong>!
      </Typography>
    </HeroLayout>
  );
}
