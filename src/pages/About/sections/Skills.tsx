import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid2, List, ListItem, Tab, Tabs, Typography, styled } from "@mui/material";
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
import LogoJs from '../../../assets/images/logo_js.svg';
import LogoMysql from '../../../assets/images/logo mysql.png';
import LogoNode from '../../../assets/images/logo node.png';
import LogoPostgres from '../../../assets/images/logo postgres.png';
import LogoPowerbi from '../../../assets/images/logo powerbi.png';
import LogoPython from '../../../assets/images/logo_python.png';
import LogoReact from '../../../assets/images/logo react.png';
import LogoSqlite from '../../../assets/images/logo sqllite.png';
import LogoC from '../../../assets/images/logo_C.png';
import LogoRuby from '../../../assets/images/Ruby.png';
// import images from '../../../assets/images/indes';
// const logo_back = [images.LogoC, images.LogoJava, images.LogoNode, images.LogoPython];
// const logo_front = [images.LogoCSS, images.LogoHTML, images.LogoJs, images.LogoReact, images.LogoPowerbi];
// const logo_bd = [images.LogoMysql, images.LogoPostgres, images.LogoSqlite];

const logo_back = [
  LogoC,
  LogoJava,
  LogoNode,
  LogoPython,
  LogoRuby
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
  LogoSqlite
];

interface ExperienceItem {
  id: string;
  titleKey: string;
  companyName: string;
  period: string;
  descriptionKey: string;
  techLogos: string[];
}

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

  // Fix: cada experiência tem seu próprio dialog controlado por ID
  const [openDialog, setOpenDialog] = React.useState<string | null>(null);
  const handleClickOpen = (id: string) => {
    setOpenDialog(id);
  };
  const handleClose = () => {
    setOpenDialog(null);
  };

  // Dados de experiência centralizados
  const experiences: ExperienceItem[] = [
    {
      id: 'mei',
      titleKey: 'MEI',
      companyName: 'Freitulitos, 2022-2025',
      period: '2022-2025',
      descriptionKey: 'showMei',
      techLogos: [],
    },
    {
      id: 'niesa',
      titleKey: 'engDados',
      companyName: 'Projeto Niesa UFMT, 01/08/2025-01/09/2025',
      period: '01/08/2025-01/09/2025',
      descriptionKey: 'showNiesa',
      techLogos: [LogoPython, LogoPostgres],
    },
    {
      id: 'sedec',
      titleKey: 'estagiario',
      companyName: 'Secretaria de Desenvolvimento Econômico do Mato Grosso, 09/2023 - 02/2024',
      period: '09/2023 - 02/2024',
      descriptionKey: 'showSedec',
      techLogos: [LogoPython, LogoPowerbi, LogoPostgres],
    },
    {
      id: 'unimed',
      titleKey: 'analistaSistemas',
      companyName: 'Unimed, 01/12/2025-09/04/2026',
      period: '01/12/2025-09/04/2026',
      descriptionKey: 'showUnimed',
      techLogos: [LogoPython, LogoPowerbi],
    },
    {
      id: 'seduc',
      titleKey: 'engComputacao',
      companyName: `Secretaria de Estado de Educação do Mato Grosso`,
      period: '13/04/2026',
      descriptionKey: 'showSeduc',
      techLogos: [LogoPython, LogoPowerbi],
    },
  ];

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
      Bottom: 0
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
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: { xs: '25px', sm: '15px' }, flexWrap: 'wrap', justifyContent: 'center', marginLeft: "25px" }}>
        {logos.map((logo, index) => (
          <Box key={index} sx={{ gap: "5px" }}>
            <StyleImg src={`${logo}`} alt={`Logo ${index + 1}`} />
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
    display: { xs: "flex", sm: "inline-flex" },
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
              width: { md: '30%', xs: "15%" },
              height: '3px',
              background: 'white',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: { md: '30%', xs: "15%" },
              height: '3px',
              background: 'white',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
            },
          }}
        >{t("techsAndExp")}</Typography>
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
                  icon={<ManageAccountsIcon sx={{}} />}
                  label={t("skills")}
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
                  icon={<LibraryBooksIcon sx={{}} />}
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
                  icon={<PersonAddAlt1Icon sx={{}} />}
                  label={t("exp")}
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
                      <Typography sx={{ fontWeight: 'bold', fontSize: { md: "17px", xs: "12px" } }}>{t("backend")}:</Typography>
                      <LogoGallery logos={logo_back} />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <Typography sx={{ fontWeight: 'bold', fontSize: { md: "17px", xs: "12px" } }}>{t("frontend")}:</Typography>
                      <LogoGallery logos={logo_front} />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <Typography sx={{ fontWeight: 'bold', fontSize: { md: "17px", xs: "12px" } }}>{t("bd")}:</Typography>
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
                        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
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
                        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />


                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{t("curso")}:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Introducing Generative AI with AWS</Typography>
                      </Box>
                      <StyleButton onClick={useRedirect("https://drive.google.com/file/d/1tw00-Q5fn4GYwt36AyEjc-0-RsSu_HwW/view?usp=sharing")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
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
                        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />

                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{t("curso")}:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Santander 2025 Front end, 2025</Typography>
                      </Box>
                      <StyleButton onClick={useRedirect("https://drive.google.com/file/d/1oVNgjluPoPRzbsYxlHc46MpbLuer6emf/view?usp=sharing")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{t("curso")}:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>LuizaLabs - Back-end com Python, 2025</Typography>
                      </Box>
                      <StyleButton onClick={useRedirect("https://drive.google.com/file/d/1VGyr38TsFbcC_vJgo6RDXq7edx4KOD9Q/view?usp=sharing")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />


                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{t("curso")}:</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: "15px" } }}>Santander 2024 - Fundamentos de IA para Devs, 2024</Typography>
                      </Box>
                      <StyleButton onClick={useRedirect("https://drive.google.com/file/d/1GNstk6AzRta9ODE01Jp2EdPzBYiz_SRG/view?usp=sharing")} width="13%" backgroundColor="green" >
                        <WorkspacePremiumIcon />
                        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{t("certificado")}</Typography>
                      </StyleButton>
                    </ListItem>
                  </List>
                </StyleTabPanel>
              </TabPanel>

              <TabPanel value={value} index={2}>
                <StyleTabPanel>
                  <List sx={StyleLIST}>
                    {experiences.map((exp) => (
                      <React.Fragment key={exp.id}>
                        <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box>
                            <Typography sx={{ fontWeight: 'bold' }}>{t(exp.titleKey)}:</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>
                              {exp.id === 'seduc' 
                                ? `${t("seducTitle")}, ${exp.period}-${t("atualmente")}` 
                                : exp.companyName}
                            </Typography>
                          </Box>

                          <Button 
                            variant="outlined" 
                            onClick={() => handleClickOpen(exp.id)} 
                            sx={{ 
                              backgroundColor: "green", 
                              color: "white",
                              fontWeight: 'bold',
                              borderColor: 'green',
                              '&:hover': {
                                backgroundColor: '#2e7d32',
                                borderColor: '#2e7d32',
                                transform: 'scale(1.05)',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {t("showMore")}
                          </Button>

                          {/* Dialog individual por experiência */}
                          <Dialog
                            open={openDialog === exp.id}
                            onClose={handleClose}
                            aria-labelledby={`dialog-title-${exp.id}`}
                            aria-describedby={`dialog-description-${exp.id}`}
                            maxWidth="sm"
                            fullWidth
                            PaperProps={{
                              sx: {
                                background: 'linear-gradient(135deg, #0d0317 0%, #1a0a2e 50%, #16213e 100%)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
                              }
                            }}
                          >
                            <DialogTitle 
                              id={`dialog-title-${exp.id}`}
                              sx={{ 
                                color: 'white', 
                                fontWeight: 'bold',
                                fontSize: { xs: '1.1rem', sm: '1.4rem' },
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                pb: 2,
                              }}
                            >
                              {t(exp.titleKey)}
                              <Typography 
                                variant="subtitle2" 
                                sx={{ 
                                  color: 'rgba(255,255,255,0.6)', 
                                  mt: 0.5,
                                  fontWeight: 400,
                                }}
                              >
                                {exp.id === 'seduc' 
                                  ? `${t("seducTitle")} • ${exp.period}-${t("atualmente")}` 
                                  : exp.companyName}
                              </Typography>
                            </DialogTitle>

                            <DialogContent sx={{ pt: 3 }}>
                              <Typography 
                                id={`dialog-description-${exp.id}`}
                                sx={{ 
                                  color: 'rgba(255,255,255,0.85)', 
                                  lineHeight: 1.7,
                                  fontSize: { xs: '0.9rem', sm: '1rem' },
                                  fontFamily: '"Inter", "Segoe UI", sans-serif',
                                }}
                              >
                                {t(exp.descriptionKey)}
                              </Typography>

                              {/* Tech badges */}
                              {exp.techLogos.length > 0 && (
                                <Box sx={{ 
                                  display: 'flex', 
                                  gap: '12px', 
                                  mt: 3, 
                                  pt: 2,
                                  borderTop: '1px solid rgba(255,255,255,0.08)',
                                  flexWrap: 'wrap',
                                }}>
                                  {exp.techLogos.map((logo, i) => (
                                    <Box 
                                      key={i} 
                                      sx={{ 
                                        width: '36px', 
                                        height: '36px', 
                                        borderRadius: '8px',
                                        backgroundColor: 'rgba(255,255,255,0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '6px',
                                        transition: 'transform 0.2s ease',
                                        '&:hover': {
                                          transform: 'scale(1.15)',
                                          backgroundColor: 'rgba(255,255,255,0.15)',
                                        }
                                      }}
                                    >
                                      <img src={logo} alt={`Tech ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </Box>
                                  ))}
                                </Box>
                              )}
                            </DialogContent>

                            <DialogActions sx={{ p: 2 }}>
                              <Button 
                                onClick={handleClose}
                                sx={{ 
                                  color: 'white',
                                  border: '1px solid rgba(255,255,255,0.2)',
                                  borderRadius: '8px',
                                  px: 3,
                                  '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderColor: 'rgba(255,255,255,0.4)',
                                  }
                                }}
                              >
                                {t("fechar")}
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </ListItem>
                        <Divider component="li" />
                      </React.Fragment>
                    ))}
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
