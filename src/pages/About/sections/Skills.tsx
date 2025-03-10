import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, Divider, Grid2, List, ListItem, Tab, Tabs, Typography, styled } from "@mui/material";
import React from "react";
import StyleButton from "../../../components/StyleButton/StyleButton";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import useRedirect from "../../../components/Buttons/Button_down";
import { useTranslation } from "react-i18next";
import LogoCSS from '../../../assets/images/logo CSS.png';
import LogoHTML from '../../../assets/images/logo HTML.png';
import LogoJava from '../../../assets/images/logo Java.png';
import LogoJs from '../../../assets/images/logo js.svg';
import LogoMysql from '../../../assets/images/logo mysql.png';
import LogoNode from '../../../assets/images/logo node.png';
import LogoPostgres from '../../../assets/images/logo postgres.png';
import LogoPowerbi from '../../../assets/images/logo powerbi.png';
import LogoPython from '../../../assets/images/logo python.png';
import LogoReact from '../../../assets/images/logo react.png';
// import LogoSqlite from '../../../assets/images/logo sqlite.png';
import LogoC from '../../../assets/images/logo_C.png';


const logo_back = [
  LogoC,
  LogoJava,
  LogoNode,
  LogoPython
];
const logo_front = [
  LogoCSS,
  LogoHTML,
  LogoJs,
  LogoReact,
  LogoPowerbi
];
const logo_bd = [
  LogoMysql,
  LogoPostgres,
  // LogoSqlite
];

function TabPanel(props: { children?: React.ReactNode; index: number; value: number }) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Skills() {
  const [value, setValue] = React.useState(0);
  
  const { t } = useTranslation();
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  // Estilos
  const StyleHero = styled("div")(({ theme }) => ({
    backgroundColor: ` #0d0317`,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "column",  
    [theme.breakpoints.up('xs')]: {
     
      width: "100%"
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0", // Ajuste para desktop
      Bottom:0
    },
  }));

  const StyleImg = styled("img")(({ theme }) => ({
    
     
    objectFit: "contain", 
    [theme.breakpoints.down("sm")]: { 
      width: "40px", 
      height: "40px" 

    
    },
    [theme.breakpoints.up("sm")]: { 
      width: "100%",  
      height: "100px", 
    },
     
  }));

  const LogoGallery = ({ logos }: { logos: string[] }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: {xs: '25px', sm: '15px'}, flexWrap: 'wrap', justifyContent: 'center', marginLeft:"25px" }}>
        {logos.map((logo, index) => (
          <Box key={index} sx={{gap:"5px"}}> 
            <StyleImg src={`src/assets/images/${logo}`} alt={`Logo ${index + 1}`} />
          </Box>
        ))}
      </Box>
    );
  };
  

  const StyleBox = styled("div")({
    display: 'flex',
    flexDirection: 'column', 
    height: 'auto',
    width: '100%',
    padding: 0,
  });

  const StyleLIST = {
    flex: 1,
    border: '2px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    display: {xs: "flex", sm:"inline-flex"},
    flexDirection: 'column',
    width: "100%",
    gap: '5px',
    justifyContent: "center", 
    flexWrap: "wrap",
  };

  const StyleTabPanel = styled(Box)({
    padding: '16px', 
    backgroundColor: '#f5f5f5', 
    borderRadius: '8px',  
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  
    height: 'auto',
    overflowY: 'auto',  
    alignItems: 'center',
    display: 'flex',
    opacity: 1, 
  });
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyleHero>
      <Container id="skills" maxWidth="lg">
        <Typography
          sx={{
            display: 'flex',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            position: 'relative',
            overflow: 'hidden',
            fontWeight: 'bold',
            
            '&::before': {
              content: '""',
              position: 'absolute',
              width: {md:'30%', xs:"15%"}, 
              height: '3px',
              background: 'white',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: {md:'30%', xs:"15%"}, 
              height: '3px',
              background: 'white',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
            },
          }}
          >TECHS AND EXP</Typography>
        <Grid2 container spacing={2} sx={{ position: 'relative' }}>
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column', 
            height: 'auto',
            padding: 0,
            
          }}>
            <StyleBox>
            <Tabs
              orientation="horizontal"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              scrollButtons
              allowScrollButtonsMobile
              centered
              sx={{
                borderColor: 'divider',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Tab 
                icon={<ManageAccountsIcon sx={{ }} />} 
                label="SKILLS" 
                {...a11yProps(0)} 
                sx={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold',  
                  color: value === 0 ? "black" : "white", 
                  backgroundColor: value === 0 ? "white" : "transparent", 
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, opacity 0.3s ease', // Suaviza a transformação e opacidade
                  transform: value === 0 ? 'scale(1.05)' : 'scale(1)', // Efeito de escala para a tab selecionada
                  opacity: value === 0 ? 1 : 0.7, // Opacidade para a tab selecionada
                  '&:hover': {
                    transform: 'scale(1.1)', // Aumenta a escala quando o mouse passa sobre a Tab
                  },
                }} 
              /> 

              <Tab 
                icon={<LibraryBooksIcon sx={{ }} />} 
                label={t("cursos")} 
                {...a11yProps(1)} 
                sx={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold',  
                  color: value === 1 ? "black" : "white",  
                  backgroundColor: value === 1 ? "white" : "transparent", 
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, opacity 0.3s ease', // Suaviza a transformação e opacidade
                  transform: value === 0 ? 'scale(1.05)' : 'scale(1)', // Efeito de escala para a tab selecionada
                  opacity: value === 0 ? 1 : 0.7, // Opacidade para a tab selecionada
                  '&:hover': {
                    transform: 'scale(1.1)', // Aumenta a escala quando o mouse passa sobre a Tab
                  },
                }} 
              /> 
              <Tab 
                icon={<PersonAddAlt1Icon sx={{ }} />} 
                label="EXP" 
                {...a11yProps(2)} 
                sx={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold',  
                  color: value === 2 ? "black" : "white",  
                  backgroundColor: value === 2 ? "white" : "transparent", 
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, opacity 0.3s ease', // Suaviza a transformação e opacidade
                  transform: value === 0 ? 'scale(1.05)' : 'scale(1)', // Efeito de escala para a tab selecionada
                  opacity: value === 0 ? 1 : 0.7, // Opacidade para a tab selecionada
                  '&:hover': {
                    transform: 'scale(1.1)', // Aumenta a escala quando o mouse passa sobre a Tab
                  },
                }} 
              /> 
            </Tabs>

              
              <TabPanel value={value} index={0}>
                <StyleTabPanel>
                  <List sx={StyleLIST}>
                    <ListItem>
                      <Typography sx={{fontWeight: 'bold', fontSize:{md:"17px",xs:"12px"}}}>BACKEND:</Typography>
                      <LogoGallery logos={logo_back} />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <Typography sx={{fontWeight: 'bold', fontSize:{md:"17px",xs:"12px"}}}>FRONTEND:</Typography>
                      <LogoGallery logos={logo_front} />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <Typography sx={{fontWeight: 'bold',fontSize:{md:"17px",xs:"12px"}}}>BD:</Typography>
                      <LogoGallery logos={logo_bd} />
                    </ListItem>
                
                  </List>
                </StyleTabPanel>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <StyleTabPanel>
                  <List sx={StyleLIST}>
                   
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{t("curso")}:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Google Data Analytics, 2023</Typography>
                      </Box>
                      <StyleButton onClick={useRedirect("https://drive.google.com/file/d/12dIvDeDNfOtk0fNCxBy2XNx_nQ6jK8zx/view?usp=sharing")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />

                    
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{t("curso")}:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Santander Bootcamp Cibersegurança, 2024</Typography>
                      </Box>
                      <StyleButton onClick={useRedirect("https://drive.google.com/file/d/1DshIogGFTKftCdZLAeQqW3ayFexesLT6/view?usp=sharing")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />

                    
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{t("curso")}:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Bootcamp Nexa - Machine Learning para Iniciantes na AWS</Typography>
                      </Box>
                      <StyleButton onClick={useRedirect("https://drive.google.com/file/d/1q88H4SEDNKs3joz39ptoQ4X2LxobYE5C/view?usp=sharing")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />

                    
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{t("curso")}:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Python Data Analytics, 2024</Typography>
                      </Box>
                      <StyleButton onClick={useRedirect("https://drive.google.com/file/d/1n1HY0NkSoG9i4N-df5Un3U4d6LeOdrlV/view?usp=sharing")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />

                    
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{t("curso")}:</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize:{xs:"15px"}}}>Santander 2024 - Fundamentos de IA para Devs, 2024</Typography>
                      </Box>
                      <StyleButton onClick={useRedirect("https://drive.google.com/file/d/1GNstk6AzRta9ODE01Jp2EdPzBYiz_SRG/view?usp=sharing")} width="13%" backgroundColor="green" >
                        <WorkspacePremiumIcon />
                        <Typography sx={{display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
                      </StyleButton>
                    </ListItem>
                  </List>
                </StyleTabPanel>
              </TabPanel>

              <TabPanel value={value} index={2}>
                <StyleTabPanel>
                  <List sx={StyleLIST}>
                   
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>MEI:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>FREITULITOS, 2022-{t("atualmente")}</Typography>
                      </Box>
                      <Button variant="outlined" onClick={handleClickOpen} sx={{backgroundColor:"green", color:"white"}}>
                          SHOW MORE
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >

                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              {t("showMei")}
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>{t("fechar")}</Button>
                          </DialogActions>
                        </Dialog>
                    </ListItem>
                    <Divider component="li" />

                    
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{t("estagiario")}:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Secretaria de Desenvolvimento Econômico do Mato Grosso, 2023-{t("atualmente")}</Typography>
                      </Box>
                    
                      <Button variant="outlined" onClick={handleClickOpen} sx={{backgroundColor:"green", color:"white"}}>
                          SHOW MORE
                        </Button>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >

                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              {t("showSedec")}
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>{t("fechar")}</Button>
                          </DialogActions>
                        </Dialog>
                    </ListItem>
                    <Divider component="li" />

                    

                  </List>
                </StyleTabPanel>
              </TabPanel>
            </StyleBox>
          </Box>
        </Grid2>
      </Container>
    </StyleHero>
  );
}
