import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import fileDownload from "js-file-download";

const About = ({ theme }) => {
  return (
    <Container maxWidth="lg" id="about">
      <div className="centerDiv mt40">
        <Typography
          variant="h2"
          component="span"
          align="center"
          sx={{ color: "#171717" }}
        >
          Hello, I'm&nbsp;
        </Typography>
        <Typography
          variant="h2"
          component="span"
          align="center"
          color="error"
          sx={{
            fontWeight: "bold",
          }}
        >
          Marko Brkić.
        </Typography>
      </div>
      <Typography
        variant="h6"
        component="div"
        align="center"
        color={theme.palette.mode === "dark" ? "black" : "secondary"}
        sx={{ mt: 3, mb: 3, fontWeight: 350 }}
      >
        I'm a Software Engineering student at the University of Belgrade,
        Faculty of Electrical Engineering in my third year, planning on
        graduating by June 2023. Outside of uni, I'm working on my full stack
        development skills and looking for internship opportunities. Apart from
        coding, I like to spend my free time playing games like League of
        Legends and Teamfight Tactics, watching series and anime or keeping up
        with the latest technological trends such as blockchain. I do my best to
        keep up with the NBA despite the time difference and play basketball
        whenever the weather allows it.
      </Typography>
      <div className="centerDiv icons">
        <Button
          color="primary"
          onClick={() => {
            fileDownload(null, "../resume/MarkoBrkic.pdf");
          }}
          variant="contained"
          sx={{ mr: "0.8em" }}
        >
          download resume.pdf
        </Button>
        {theme.palette.mode === "dark" ? (
          <a
            aria-label="Github"
            className="linkIconDark"
            href="https://github.com/brkagithub"
          >
            <GitHubIcon fontSize="large" />
          </a>
        ) : (
          <a
            aria-label="Github"
            className="linkIconLight"
            href="https://github.com/brkagithub"
          >
            <GitHubIcon fontSize="large" />
          </a>
        )}
        {theme.palette.mode === "dark" ? (
          <a
            aria-label="Linkedin"
            className="linkIconDark"
            href="https://www.linkedin.com/in/marko-brkic-82b29498/"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        ) : (
          <a
            aria-label="Linkedin"
            className="linkIconLight"
            href="https://www.linkedin.com/in/marko-brkic-82b29498/"
          >
            <LinkedInIcon fontSize="large" />
          </a>
        )}
      </div>
    </Container>
  );
};

export default About;
