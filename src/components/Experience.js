import {
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import React from "react";

const experiences = [
  {
    position: "Software developer intern",
    company: "SOL Software",
    website: "http://www.sol.rs",
    duration: "Dec 2018 to Sep 2019",
    stack: ["JavaScript", "jQuery", "SQL"],
    description:
      "Developed JavaScript components for an online educational website which grade school teachers and students use in Serbia. The components made it easy for teachers to create tests containing of questions and mini-games for students by filling out simple forms (the tests rendered in the background). I also fixed various already present bugs, which taught me how to better read and understand other people's code. I participated in testing the upgraded version of the website, found problems and recommended upgrades to my senior colleagues which they implemented. Towards the end of my time there, I introduced the system and all my work to a new intern.",
    descriptionArr: [
      "Developed JavaScript components for an online educational website which grade school teachers and students use in Serbia",
      "The components made it easy for teachers to create tests containing of questions and mini-games for students by filling out simple forms (the tests rendered in the background)",
      "Fixed various already present bugs, which taught me how to better read and understand other people's code",
      "Participated in testing the upgraded version of the website, found problems and recommended upgrades to my senior colleagues which they implemented",
      "Towards the end of my time there, I introduced the system and all my work to a new intern",
    ],
  },
];

const Projects = ({ theme }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }} id="experience">
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
        experience
      </Typography>
      <Grid
        container
        spacing={2}
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{ justifyContent: "center" }}
      >
        {experiences.map((experience) => (
          <Grid item xs={12} sm={12} md={10}>
            <Card variant="outlined" className="flexColumn">
              <CardContent>
                <div className="flexSpaceBetween">
                  <Typography
                    variant="body1"
                    color="secondary"
                    component="div"
                    sx={{ mb: 1, mr: 1.5 }}
                  >
                    {experience.duration}
                  </Typography>
                  <Typography
                    variant="h4"
                    color="secondary"
                    component="div"
                    sx={{ mb: 1 }}
                  >
                    {experience.position}
                  </Typography>
                  <Typography
                    variant="h5"
                    color="secondary"
                    component="div"
                    sx={{
                      mb: 1,
                      ml: 1.5,
                      fontStyle: "italic",
                      textDecoration: "underline",
                    }}
                  >
                    <Link color="inherit" href={experience.website}>
                      {experience.company}
                    </Link>
                  </Typography>
                </div>
                {experience.descriptionArr.map((exp) => (
                  <Typography sx={{ mb: 1 }} color="text.secondary">
                    {"- " + exp}
                  </Typography>
                ))}
                <Typography variant="body2" className="flexCenterWrap">
                  {experience.stack.map((tech) => (
                    <Chip
                      label={tech}
                      variant="outlined"
                      color="secondary"
                      sx={{ mr: 1, mt: 1, mb: 0 }}
                    />
                  ))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
