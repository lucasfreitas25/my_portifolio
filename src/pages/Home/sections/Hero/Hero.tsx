import {Box, Container, Grid2, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StyleButton from "../../../../components/StyleButton/StyleButton";
import { AnimatedBackground } from "../../../../components/StyleButton/AnimatedBackgroud/AnimatedBackgroud";
const Hero = () => {

  const StyleHero = styled("div")(({theme}) => ( {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    alignItems: "center",
    display: "flex"
  }))
  const StyleImg = styled("img")(({theme}) => ({
     width: "80%",
     borderRadius: "50%",
     border: `1px solid ${theme.palette.primary.contrastText}`

  }))

    return (
      <>
        <StyleHero>
          <Container maxWidth="lg">
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, md: 5}}>
                <Box position="relative">
                    <Box position= "absolute" width={"150%"} top={-100} right={0}>
                      <AnimatedBackground></AnimatedBackground>
                    </Box>
                    <Box position={"absolute"} textAlign={"center"}>
                      <StyleImg src={Avatar}></StyleImg>  
                    </Box>
                </Box>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 7}}>
                <Typography color="primary.contrastText" variant="h1" textAlign="center">Lucas Freitas</Typography>
                <Typography color="secondary" variant="h2" textAlign={"center"}>I'm a Software Dev and Data Scientist</Typography>
                <Grid2 container display={"flex"} justifyContent={"center"} spacing={3}>
                    <Grid2 size={{xs: 12, md:4}} display={"flex"} justifyContent={"center"}>
                        <StyleButton>
                          <CloudDownloadIcon></CloudDownloadIcon> 
                          <Typography>
                            Download CV 
                          </Typography>
                        </StyleButton>
                    </Grid2>
                    <Grid2 size={{xs: 12, md:4}} display={"flex"} justifyContent={"center"}>
                        <StyleButton>
                          <ContactPageIcon></ContactPageIcon>
                          <Typography>
                            Contact me
                          </Typography>
                        </StyleButton>
                    </Grid2>
                </Grid2>

              </Grid2>
            </Grid2>
          </Container>
        </StyleHero>
      </>
    )
  }
  
  export default Hero
  