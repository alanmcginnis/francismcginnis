import * as React from "react";
// import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const HeroLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.black,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "50vh",
    minHeight: 300,
    maxHeight: 800,
  },
}));

const Background = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

function HeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <HeroLayoutRoot>
      <Container
        sx={{
          mt: 5,
          mb: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
        <Background sx={sxBackground} />
      </Container>
    </HeroLayoutRoot>
  );
}

export default HeroLayout;
