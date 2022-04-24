import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";

const projects = [
  {
    name: "Operating system kernel",
    description:
      "Implemented a simplified, but fully functional kernel from scratch for Intel 8086 architecture for my Operating Systems 1 class. It supports multithreading, event handling and semaphores. Building it helped me a bunch to understand how operating system actually work.",
    stack: ["C++", "Assembly"],
    sourceCode: "https://github.com/brkagithub/operatingSystemKernel",
    livePreview: null,
  },
  {
    name: "Operating system schedulers",
    description:
      "Created a functional Completely Fair Scheduler and approximations of preemptive and non-preemptive Shortest Job First schedulers for my Operating Systems II class. I also integrated them into operating system xv6, created by MIT's Operating Systems course.",
    stack: ["C++", "Assembly"],
    sourceCode: null,
    livePreview: null,
  },
  {
    name: "Educational blockchain web app",
    description:
      "[IN PROGRESS] Used modern web development technologies and concepts (React state, hooks, incremental static regeneration etc.) to develop basic features of the website such as responsiveness, crypto wallet authentication, browsing and writing articles that are stored in a MongoDB database I designed.",
    stack: [
      "Typescript",
      "React",
      "NextJS",
      "MaterialUI",
      "MDXjs",
      "Moralis SDK",
    ],
    sourceCode: "https://github.com/brkagithub/blockchainBlog",
    livePreview: null,
  },
];

const Projects = ({ theme }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }} id="projects">
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
        projects
      </Typography>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {projects.map((project) => (
          <Grid item xs={4}>
            <Card
              variant="outlined"
              className="flexColumn"
              sx={{ minWidth: 275, minHeight: 340 }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  color="secondary"
                  component="div"
                  sx={{ mb: 1 }}
                >
                  {project.name}
                </Typography>
                <Typography
                  sx={{ mb: 1.5, textAlign: "center" }}
                  color="text.secondary"
                >
                  {project.description}
                </Typography>
                <Typography variant="body2" className="flexCenterWrap">
                  {project.stack.map((tech) => (
                    <Chip
                      label={tech}
                      variant="outlined"
                      color="secondary"
                      sx={{ mr: 1, mt: 1 }}
                    />
                  ))}
                </Typography>
              </CardContent>
              <CardActions className="icons">
                {theme.palette.mode === "dark" ? (
                  <a
                    aria-label="Github preview"
                    className="linkIconDarkWhite ml"
                    href={project.sourceCode}
                  >
                    <GitHubIcon fontSize="small" />
                  </a>
                ) : (
                  <a
                    aria-label="Github preview"
                    className="linkIconLight ml"
                    href={project.sourceCode}
                  >
                    <GitHubIcon fontSize="small" />
                  </a>
                )}
                {theme.palette.mode === "dark" ? (
                  <a
                    aria-label="Live preview"
                    className="linkIconDarkWhite"
                    href={project.livePreview}
                  >
                    <PreviewIcon fontSize="medium" />
                  </a>
                ) : (
                  <a
                    aria-label="Live preview"
                    className="linkIconLight"
                    href={project.livePreview}
                  >
                    <PreviewIcon fontSize="medium" />
                  </a>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
