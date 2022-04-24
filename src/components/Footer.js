import { Container, Typography } from "@mui/material";
import React from "react";

function Footer({ theme }) {
  return (
    <Container maxWidth="lg" id="footer" sx={{ textAlign: "center", mb: 3 }}>
      <Typography
        variant="body1"
        color={theme.palette.mode === "dark" ? "black" : "secondary"}
        component="div"
      >
        @2022 Marko Brkić
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.mode === "dark" ? "black" : "secondary"}
        component="div"
      >
        All rights reserved
      </Typography>
    </Container>
  );
}

export default Footer;
