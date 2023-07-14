import { GiMineTruck } from "react-icons/gi";
import Typography from "../../modules/components/Typography";
import HeroLayout from "./layout/HeroLayout";

// const backgroundImage = "./static/TwoHero.jpg";

export default function ProductHero() {
  return (
    <HeroLayout
      sxBackground={{
        backgroundColor: "#e7bb41", // Average color of the background image.
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Hi Friends 👋
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 6 } }}
      >
        I'm having a <strong>BIRTHDAY PARTY</strong> on{" "}
        <strong>AUG. 12, 2023</strong> from <strong>11A-2P</strong> and{" "}
        <strong>YOUR INVITED</strong>!
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        // sx={{ mb: 4, mt: { sm: 2 } }}
      >
        There is a $5.00 parking fee but the FOOD, FUN, and SUN are all free!
        Don't forget your change of clothes/swim diapers.
      </Typography>
      <Typography variant="h4" component="span" sx={{ mb: 4, mt: { sm: 4 } }}>
        No Gifts Please 🙏
      </Typography>
      <Typography variant="h4" component="span" sx={{ fontSize: "48px" }}>
        <GiMineTruck />
      </Typography>
    </HeroLayout>
  );
}
