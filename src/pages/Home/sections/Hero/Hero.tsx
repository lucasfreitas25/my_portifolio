import {Box, Container, Grid2, IconButton, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StyleButton from "../../../../components/StyleButton/StyleButton";
import { AnimatedBackground } from "../../../../components/StyleButton/AnimatedBackgroud/AnimatedBackgroud";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useRedirect from "../../../../components/StyleButton/Buttons/Button_down";


const Hero = () => {

  const redirectToWhatsApp = useRedirect("https://wa.me/5565996474929");
  const redirectToLinkedin= useRedirect("https://br.linkedin.com/in/lucasfreitas-tech");
  const redirectToGithub= useRedirect("https://github.com/lucasfreitas25");
  const redirectToCurriculo= useRedirect("https://drive.google.com/file/d/12PdZCSu8i_mPxgEiieT7bx-qhl91SO4V/view?usp=sharing");
  
  const StyleHero = styled("div")(({theme}) => ( {
    backgroundColor: `#0d0317`,
    height: "100vh",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.up('xs')]: { // altera para mobile <=mobile
      paddingTop: "100px",

    },
    [theme.breakpoints.up('md')]: { // altera para desktop >=mobile
      paddingTop: "0",
    }

  }))
  const StyleImg = styled("img")(({theme}) => ({
     width: "80%",
     borderRadius: "50%",
     border: `1px solid ${theme.palette.primary.contrastText}`

  }))

  const StyleText = styled('div')(() => ({
    textShadow: 
      '2px 2px 0 #000, ' +
      '-2px -2px 0 #000, ' +
      '2px -2px 0 #000, ' +
      '-2px 2px 0 #000', 
  }));
  


    return (
      <>
        <StyleHero>
          <Container maxWidth="lg">
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, md: 5 }}>
                <Box position="relative">
                  <Box position="absolute" width={"150%"} top={-100} right={0}>
                    <AnimatedBackground></AnimatedBackground>
                  </Box>
                  <Box position={"relative"} textAlign={"center"}>
                    <StyleImg src={Avatar}></StyleImg>
                  </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 7 }}>
                <StyleText>
                  <Typography 
                    color="primary.contrastText" 
                    variant="h1" 
                    textAlign="center" 
                    pb={2}
                  >
                    Lucas Freitas
                  </Typography>
                  <Typography 
                    color="primary.contrastText" 
                    variant="h2" 
                    textAlign={"center"} 
                    pb={2}
                  >
                    I'm a Software Dev and Data Scientist
                  </Typography>
                </StyleText>
                <Grid2 container display={"flex"} justifyContent={"center"} spacing={3}>
                  <Grid2 size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                    <StyleButton onClick={(redirectToCurriculo)}>
                      <CloudDownloadIcon></CloudDownloadIcon>
                      <Typography>Download Resume</Typography>
                    </StyleButton>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                    <StyleButton onClick={(redirectToWhatsApp)}>
                      <ContactPageIcon></ContactPageIcon>
                      <Typography>Contact me</Typography>
                    </StyleButton>
                  </Grid2>
                </Grid2>
                <Grid2 container display={"flex"} justifyContent={"center"} spacing={3} paddingTop={3}>
                  <Grid2 size={{ xs: 12, md: 4 }} display={"inline-flex"} justifyContent={"center"}>
                      <IconButton onClick={(redirectToLinkedin)} sx={{ color: 'rgb(255, 255, 255)' }}>
                        <LinkedInIcon></LinkedInIcon>
                      </IconButton>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }} display={"inline-flex"} justifyContent={"center"}>
                      <IconButton onClick={(redirectToGithub)} sx={{ color: 'rgb(255, 255, 255)' }}>
                        <GitHubIcon></GitHubIcon>
                      </IconButton>
                    </Grid2>
                  </Grid2>
              </Grid2>
            </Grid2>
          </Container>
        </StyleHero>
      </>
    );
  
  }
  
  export default Hero
  