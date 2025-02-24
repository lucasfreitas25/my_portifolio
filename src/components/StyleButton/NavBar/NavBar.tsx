import { AppBar, MenuItem, styled, Toolbar, Box, Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

const NavBar = () => {
  const { i18n } = useTranslation(); // Para usar a funcionalidade de troca de idioma

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Muda o idioma
  };

  const StyleBar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",  
    alignItems: "center",  
    width: "100%",  
    flexWrap: "wrap", 
  }));

  return (
    <AppBar position="absolute">
      <StyleBar>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1, // Para que os links ocupem o espaço central
          gap: { md: '150px', xs:"15px"}, // Espaço entre os itens de navegação
        }}>
          <ScrollLink to="about" smooth={true} duration={500}>
            <MenuItem>About</MenuItem>
          </ScrollLink>

          <ScrollLink to="skills" smooth={true} duration={500}>
            <MenuItem>Skills</MenuItem>
          </ScrollLink>

          <ScrollLink to="projects" smooth={true} duration={500}>
            <MenuItem>Projects</MenuItem>
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
            onClick={() => handleLanguageChange('en')}
            sx={{
              padding: 0,  // Remove o padding do botão
              width: {md:'20px', xs:"10px"}, // Define a largura da bandeira
              height: {md:'20px',xs:"10px"}  // Define a altura da bandeira
            }}
          >
            <Flag code="US" style={{ width: '100%', height: '100%' }} />
          </Button>
          <Button
            onClick={() => handleLanguageChange('pt')}
            sx={{
              padding: 0,  // Remove o padding do botão
              width: {md:'30px', xs:"10px"}, // Define a largura da bandeira
              height: {md:'20px', xs:"10px"},  // Define a altura da bandeira
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
