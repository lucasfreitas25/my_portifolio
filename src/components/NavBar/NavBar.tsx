import { AppBar, MenuItem, styled, Toolbar, Box, Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import { t } from "i18next";
// import { changeLanguage } from "i18next";

const NavBar = () => {
  const { i18n } = useTranslation(); 

  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };

  const StyleBar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",  
    alignItems: "center",  
    width: "100%",  
    flexWrap: "wrap", 
    position: 'fixed',
  }));

  return (
    <AppBar position="absolute">
      <StyleBar>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1, 
          gap: { md: '150px', xs:"15px"},
        }}>
          <ScrollLink to="about" smooth={true} duration={500}>
            <MenuItem>{t("mim")}</MenuItem>
          </ScrollLink>

          <ScrollLink to="skills" smooth={true} duration={500}>
            <MenuItem>Skills</MenuItem>
          </ScrollLink>

          <ScrollLink to="projects" smooth={true} duration={500}>
            <MenuItem>{t("projetos")}</MenuItem>
          </ScrollLink>
        </Box>

        {/* Box para as bandeiras */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: { md: 'flex-end', xs: "center" },
            alignItems: 'center',
            padding: 0,
            width: { md: "auto", xs: "100%" },
            marginTop: "10px",
            gap: 0, 
          }}
        >
          <Button
            onClick={() => changeLanguage("en")}
            sx={{
              padding: 0,  
              width: {md:'20px', xs:"10px"}, 
              height: {md:'20px',xs:"10px"}  
            }}
          >
            <Flag code="US" style={{ width: '100%', height: '100%' }} />
          </Button>
          <Button
            onClick={() => changeLanguage("pt")}
            sx={{
              padding: 0,  
              width: {md:'30px', xs:"10px"}, 
              height: {md:'20px', xs:"10px"},  
            }}
          >
            <Flag code="BR" style={{ width: '100%', height: '100%' }} />
          </Button>
        </Box>
      </StyleBar>
    </AppBar>
  );
};

export default NavBar;
