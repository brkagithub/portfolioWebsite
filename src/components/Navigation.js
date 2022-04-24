import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

const pages = ["projects", "experience", "contact"];

const Navigation = ({ theme, onThemeModeChange }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" id="top">
        <Toolbar disableGutters>
          <a href="#top">
            <Typography
              variant="h4"
              noWrap
              component="div"
              color="secondary"
              sx={{
                mr: 2,
                display: {
                  xs: "none",
                  md: "flex",
                  "&:hover": {
                    color: theme.palette.mode === "dark" ? "white" : "#061836",
                    textAlign: "center",
                    textDecoration: "underline",
                  },
                },
              }}
            >
              m/b
            </Typography>
          </a>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },

                "& .MuiPaper-root": {
                  backgroundColor:
                    theme.palette.mode === "dark" ? "#171717" : "#88f2e4",
                },
              }}
            >
              {pages.map((page) => (
                <Link href={"#" + page} underline="none">
                  <MenuItem
                    href={"#" + page}
                    key={page}
                    sx={{
                      bgcolor:
                        theme.palette.mode === "dark" ? "#171717" : "#88f2e4",
                    }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      variant="h6"
                      color="secondary"
                      textAlign="center"
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
            <Link href="#top" underline="none" component="button">
              <Typography
                color="secondary"
                variant="h4"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  textAlign: "left",
                  display: { xs: "flex", md: "none" },
                  "&:hover": {
                    color: theme.palette.mode === "dark" ? "white" : "#061836",
                    textAlign: "center",
                    textDecoration: "underline",
                  },
                }}
              >
                m/b
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={"#" + page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: theme.palette.mode === "dark" ? "#c8e2e6" : "#2460bf",
                  display: "block",
                  "&:hover": {
                    color: theme.palette.mode === "dark" ? "white" : "#061836",
                    textDecoration: "underline",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <ThemeSwitch onModeChange={onThemeModeChange} theme={theme} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
