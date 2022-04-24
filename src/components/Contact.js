import React from "react";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import { Container, Typography } from "@mui/material";

const Contact = ({ theme }) => {
  return (
    <Container maxWidth="lg" id="contact" sx={{ textAlign: "center", mb: 10 }}>
      <Typography
        variant="h3"
        color={theme.palette.mode === "dark" ? "black" : "secondary"}
        component="div"
        sx={{
          mb: 2,
          textAlign: "center",
          fontWeight: "bold",
          fontVariant: "small-caps",
          letterSpacing: "-2px",
        }}
      >
        contact
      </Typography>

      {theme.palette.mode === "dark" ? (
        <Button
          color="primary"
          size="large"
          variant="contained"
          startIcon={<EmailIcon />}
          target="_top"
          href={`mailto:mbrkic@gmail.com`}
        >
          email me
        </Button>
      ) : (
        <Button
          color="secondary"
          size="large"
          variant="outlined"
          startIcon={<EmailIcon />}
          target="_top"
          href={`mailto:mbrkic@gmail.com`}
        >
          email me
        </Button>
      )}
      <Typography
        variant="h6"
        color={theme.palette.mode === "dark" ? "black" : "secondary"}
        component="div"
        sx={{ mt: 3 }}
      >
        You can contact me manually at mbrkic16@gmail.com or via Discord
        brka#6795 if you want as well 😎
      </Typography>
    </Container>
  );
};

export default Contact;
