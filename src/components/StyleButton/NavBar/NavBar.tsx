import { AppBar, MenuItem, styled, Toolbar,Box } from "@mui/material"


import { Link as ScrollLink } from "react-scroll";  // Importando ScrollLink do react-scroll

const NavBar = () => {
  const StyleBar = styled(Toolbar)(() => ({
    justifyContent: "space-evenly",
    display: "flex",
  }));

  return (
    <AppBar position="absolute">
      <StyleBar>
        <Box>
          <ScrollLink to="about" smooth={true} duration={500}>
            <MenuItem>About</MenuItem>
          </ScrollLink>
        </Box>

        <Box>
          <ScrollLink to="skills" smooth={true} duration={500}>
            <MenuItem>Skills</MenuItem>
          </ScrollLink>
        </Box>

        <Box>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <MenuItem>Projects</MenuItem>
          </ScrollLink>
        </Box>
      </StyleBar>
    </AppBar>
  );
};

export default NavBar;