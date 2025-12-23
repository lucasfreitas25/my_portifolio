import { Box, Container, Grid2, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Tab, Tabs, Typography, styled } from "@mui/material";
import React from "react";
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CodeIcon from '@mui/icons-material/Code';
import AddchartIcon from '@mui/icons-material/Addchart';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import useRedirect from "../../components/Buttons/Button_down";
import { useTranslation } from "react-i18next";

import Appfreitulitos from '../../assets/images/APP freitulitos.jpg';
import Camisa2BrancaTrojan from '../../assets/images/Camisa 2 Branca Trojan.jpeg';
import CamisaAzulTrojan from '../../assets/images/Camisa Azul Trojan.jpg';
import CamisaBrancaTrojan from '../../assets/images/Camisa Branca Trojan.jpeg';
import CamisaPretaTrojan from '../../assets/images/Camisa Preta Trojan.jpg';
import ContadorDeTags from '../../assets/images/contador de tags.jpg';
import Crud from '../../assets/images/crud.png';
import FirstapiTest from '../../assets/images/firstapi test.png';
import IACalvo from '../../assets/images/IA CALVO.png';
import ImagemPortfolio from '../../assets/images/imagem portfolio.png';
import LinktreeFreitulitos from '../../assets/images/linktree freitulitos.png';
import LogoCSS from '../../assets/images/logo CSS.png';
import LogoRuby from '../../assets/images/Ruby.png';
import LogoHTML from '../../assets/images/logo HTML.png';
import LogoJava from '../../assets/images/logo Java.png';
import LogoJs from '../../assets/images/logo_js.svg';
import LogoNode from '../../assets/images/logo node.png';
import LogoPostgres from '../../assets/images/logo postgres.png';
import LogoPowerbi from '../../assets/images/logo powerbi.png';
import LogoPython from '../../assets/images/logo_python.png';
import LogoReact from '../../assets/images/logo react.png';
import PainelAbates from '../../assets/images/painel abates.png';
import PainelPnad from '../../assets/images/painel pnad.png';
import PainelAnp from '../../assets/images/painel anp.png';
import PainelConab from '../../assets/images/painel conab.png';
import PainelEstoques from '../../assets/images/painel_estoques.png';
import PainelPam from '../../assets/images/painel pam.png';
import PainelPevs from '../../assets/images/painel pevs.png';
import PainelPibMunicipal from '../../assets/images/painel pib municipal.png';
import PainelPpm from '../../assets/images/painel ppm.png';
import PainelPms from '../../assets/images/painel pms.png';
// import PainelUsda from '../../assets/images/painel usda.png';
import PainelConsumo from '../../assets/images/painel consumo2.png';
import PainelCompensa from '../../assets/images/painel compensa2.png';
import SistemaInteligente from '../../assets/images/Sistema inteligente.png';
// import SiteTrojan from '../../assets/images/site trojan.png';
import RubyArticos from '../../assets/images/ruby pesquisa termos.jfif';
// import Camisa3D from "../../components/Models3D/model3d";



const itemDev = [
  {
    img: ImagemPortfolio,
    title: 'Portfólio',
    author: [LogoJs, LogoReact],
    local: 'https://github.com/lucasfreitas25/my_portifolio'
  },
  {
    img: Crud,
    title: 'CRUD',
    author: [LogoJava, LogoPostgres, LogoPowerbi],
    rows: 2,
    cols: 2,
    featured: true,
    local:'https://github.com/lucasfreitas25/Trabalho-CRUD'
  },
  {
    img: SistemaInteligente,
    title: 'SISTEMA INTELIGENTE FREITULITOS',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    local: 'https://github.com/lucasfreitas25/IA_sistema_inteligente'
  },
  {
    img: LinktreeFreitulitos,
    title: 'LinkTree Custom',
    author: [LogoJs, LogoCSS, LogoHTML],
    cols: 2,
    local:'https://github.com/lucasfreitas25/Projeto-Frontend'
  },
  {
    img: RubyArticos,
    title: 'Sistema de Pesquisa de Artigos',
    author: [LogoJs, LogoRuby],
    local:"https://github.com/lucasfreitas25/meu_app_ruby"
  },
  {
    img: ContadorDeTags,
    title: 'Contador de TAGS',
    author: [LogoNode, LogoPostgres, LogoPowerbi],
    local: 'https://github.com/lucasfreitas25/TestePratico_NUTI'
  },
  {
    img: Appfreitulitos,
    title: 'FreitulitosAPP',
    author: [LogoJs, LogoCSS, LogoHTML],
    cols: 2,
    local:'https://github.com/lucasfreitas25/FreitulitosAPP'
  },
  {
    img: FirstapiTest,
    title: 'FirstAPI',
    author: [LogoPython],
    rows: 2,
    cols: 2,
    featured: true,
    local:'https://github.com/lucasfreitas25/FirstAPI'
  },
];

const itemData = [
  {
    img: PainelPnad,
    title: 'PNAD',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    rows: 2,
    cols: 2,
    featured: true,
    local: 'https://datahub.sedec.mt.gov.br/comercio-e-servicos/mercado-de-trabalho', 
  },
  {
    img: IACalvo,
    title: 'IA CALVO',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
  },
  {
    img: PainelPam,
    title: 'PAM',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    cols: 2,
    local:'https://datahub.sedec.mt.gov.br/agronegocios/producao-agricola'
  },
  {
    img: PainelPevs,
    title: 'PEVS',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    cols: 2,
    local:'https://datahub.sedec.mt.gov.br/agronegocios/floresta-plantada-e-extracao-vegetal'
  },
  {
    img: PainelPpm,
    title: 'PPM',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    rows: 2,
    cols: 2,
    featured: true,
    local: 'https://datahub.sedec.mt.gov.br/agronegocios/pecuaria-mt'
  },
  {
    img: PainelConab,
    title: 'CONAB',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    local: 'https://datahub.sedec.mt.gov.br/agronegocios/producao-de-graos'
  },
  {
    img: PainelAnp,
    title: 'ANP',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    local: 'https://datahub.sedec.mt.gov.br/agronegocios/biocombustiveis'
  },
  {
    img: PainelPibMunicipal,
    title: 'PIB MUNICIPAL',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    local: 'https://datahub.sedec.mt.gov.br/perfil-de-mt/pib-dos-municipios'
  },
  {
    img: PainelAbates,
    title: 'ABATE ANIMAIS',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    local: 'https://datahub.sedec.mt.gov.br/agronegocios/producao-de-carne'
  },
  {
    img: PainelEstoques,
    title: 'ESTOQUES',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    rows: 2,
    cols: 2,
    local:'https://datahub.sedec.mt.gov.br/agronegocios/armazenagem'
  },
  {
    img: PainelCompensa,
    title: 'PIM',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    local: 'https://datahub.sedec.mt.gov.br/minas-e-energia/compensacao-financeira-energia'
  },
  {
    img: PainelPms,
    title: 'PMS',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    local: 'https://datahub.sedec.mt.gov.br/comercio-e-servicos/pesquisa-mensal-do-servico'
  },
  {
    img: PainelConsumo,
    title: 'Consumo energia',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    local: 'https://datahub.sedec.mt.gov.br/minas-e-energia/consumo-de-energia'
  },
  {
    img: 'src\\assets\\images\\painel ptl.png',
    title: 'PTL',
    author: [LogoPython, LogoPostgres, LogoPowerbi],
    local: 'https://datahub.sedec.mt.gov.br/agronegocios/pesquisa-trimestral-do-leite'
  },
];
const itemDesign = [
  {
    img: CamisaPretaTrojan,
    title: 'CAMISA PRETA TROJAN',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: CamisaBrancaTrojan,
    title: 'CAMISA BRANCA TROJAN',
  },
  {
    img: CamisaAzulTrojan,
    title: 'CAMISA AZUL TROJAN',
    cols: 2,
  },
  {
    img: Camisa2BrancaTrojan,
    title: 'CAMISA BRANCA 2 TROJAN',
    cols: 2,
  },
]
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

export default function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const {t} = useTranslation();
  
  
  // Estilos
  const StyleHero = styled("div")(({ theme }) => ({
    backgroundColor: "#0d0317",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "column",  
    [theme.breakpoints.up('xs')]: {
      
      width: "100%"
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0", 
    },
  }));

  const StyleImg = styled("img")(({ theme }) => ({
    objectFit: "contain", 
    [theme.breakpoints.down("sm")]: { 

    },
    [theme.breakpoints.up("xs")]: { 

    },
  }));
  const LogoGallery = ({ logos }: { logos: string[] }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: { xs: '25px', sm: '8px' }, marginTop: 0 , padding:0}}>
        {logos.map((logo, index) => (
          <Box 
            key={index} 
            sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              
              width: "fit-content",
              padding: "2px", 
              
            }}
          >
            <StyleImg 
              src={`${logo}`} 
              alt={`Logo ${index + 1}`} 
              sx={{ width: { xs: "12px", sm: "30px" }, height: "auto" }} 
            />
          </Box>
        ))}
      </Box>
    );
  };
  
  const StyleImageListItem = styled(ImageListItem) ({
    width: "100%",
    height: "100%", 
    objectFit: "contain", 
    fontSize:"1px"
  }) 

  const StyleBox = styled("div")({
    display: 'flex',
    flexDirection: 'column', 
    height: 'auto',
    width: '100%',
    padding: 0,
  });


  return (
    <StyleHero>
      <Container id="projects"  maxWidth="lg" >
      <Typography
          sx={{
            display: 'flex',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: {md:'2rem', xs:"1.5rem"},
            position: 'relative',
            overflow: 'hidden',
            fontWeight: 'bold',
            
            '&::before': {
              content: '""',
              position: 'absolute',
              width: {md:'30%', xs:"8%"}, 
              height: '3px',
              background: 'white',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: {md:'30%', xs:"8%"}, 
              height: '3px',
              background: 'white',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
            },
          }}
          >
        {t("gestao")}
      </Typography>
        <Grid2 container spacing={2} sx={{ position: 'relative', }}>
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', height: 'auto', padding: 0 }}>
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
                  flexDirection:'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Tab icon={<CodeIcon />} label="DEV"  {...a11yProps(0)} 
                sx={{ 
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, opacity 0.3s ease', // Suaviza a transformação e opacidade
                  transform: value === 0 ? 'scale(1.05)' : 'scale(1)', // Efeito de escala para a tab selecionada
                  opacity: value === 0 ? 1 : 0.7, // Opacidade para a tab selecionada
                  '&:hover': {
                    transform: 'scale(1.1)', // Aumenta a escala quando o mouse passa sobre a Tab
                  },
                    "&.Mui-selected": { 
                    color: "black", 
                    backgroundColor: "white"
                    }
                  }} 
                /> 
                <Tab icon={<AddchartIcon />} label="DATA SCIENCE" {...a11yProps(1)} 
                sx={{ 
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, opacity 0.3s ease', // Suaviza a transformação e opacidade
                  transform: value === 0 ? 'scale(1.05)' : 'scale(1)', // Efeito de escala para a tab selecionada
                  opacity: value === 0 ? 1 : 0.7, // Opacidade para a tab selecionada
                  '&:hover': {
                    transform: 'scale(1.1)', // Aumenta a escala quando o mouse passa sobre a Tab
                  },
                    "&.Mui-selected": { 
                    color: "black", 
                    backgroundColor: "white"
                    }
                    }} /> 
                <Tab icon={<ArchitectureIcon />} label="DESIGN" {...a11yProps(2)} 
                sx={{ 
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'white',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, opacity 0.3s ease', 
                  transform: value === 0 ? 'scale(1.05)' : 'scale(1)', 
                  opacity: value === 0 ? 1 : 0.7, 
                  '&:hover': {
                    transform: 'scale(1.1)', 
                  },
                    "&.Mui-selected": { 
                    color: "black", 
                    backgroundColor: "white"
                    }
                }} /> 
              </Tabs>

              <TabPanel value={value} index={0}>
                <ImageList sx={{ width: "100%", height: 450, rowHeight: 180 }}>
                  <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div"></ListSubheader>
                  </ImageListItem>
                  {itemDev.map((item) => (
                    <ImageListItem key={item.img} sx={{ width: "100%", height: 180 }}>
                      <StyleImageListItem>
                        <img
                          srcSet={`${item.img}`}
                          src={`${item.img}`}
                          alt={item.title}
                          loading="lazy"
                          
                        />
                      </StyleImageListItem>
                      
                      <ImageListItemBar
                        title={<Typography sx={{ fontSize: { xs: '10px', sm: '20px' }, fontWeight: 'bold' }}>{item.title}</Typography>}
                        subtitle={<LogoGallery logos={item.author} />}
                        actionIcon={
                          <IconButton onClick={() => useRedirect(item.local)()}  sx={{ color: 'rgb(255, 255, 255)' , }} aria-label={`info about ${item.title}`}>
                            <GitHubIcon sx={{height:{xs:"15px", sm:"30px"}}}></GitHubIcon>
                          </IconButton>
                        }
                        sx={{    
                          height: { xs: '40px', sm: 'auto' },
                          padding: '4px'}}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </TabPanel>


              <TabPanel value={value} index={1}>
                <ImageList sx={{ width: "100%", height: 450, rowHeight: 180, gap: 8 }}>
                  <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div"></ListSubheader>
                  </ImageListItem>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ width: "100%", height: 180 }}>
                      
                      <StyleImageListItem>
                        <img
                          srcSet={`${item.img}`}
                          src={`${item.img}`}
                          alt={item.title}
                          loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                        <ImageListItemBar
                          title={<Typography sx={{ fontSize: { xs: '10px', sm: '20px' }, fontWeight: 'bold'}}>{item.title}</Typography>}
                          subtitle={<LogoGallery logos={item.author} />} 
                          actionIcon={
                            <IconButton
                              onClick={() => useRedirect(item.local)()}
                              sx={{ color: 'rgb(255, 255, 255)' }}
                              aria-label={`info about ${item.title}`}
                            >
                              <LanguageIcon sx={{height:{xs:"15px", sm:"30px"}}}></LanguageIcon>
                            </IconButton>
                          
                          }
                          sx={{    
                            height: { xs: '40px', sm: 'auto' },
                            padding: '4px'}}
                        />
                      </StyleImageListItem>
                    </ImageListItem>
                  ))}
                </ImageList>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ImageList sx={{ width: "100%", height: 450, rowHeight: 180 }}>
                  <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div"></ListSubheader>
                  </ImageListItem>
                  {itemDesign.map((item) => (
                    <ImageListItem key={item.img} sx={{ width: "100%", height: 180 }}>
                      
                      <StyleImageListItem>
                        <img
                          srcSet={`${item.img}`}
                          src={`${item.img}`}
                          alt={item.title}
                          loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                        <ImageListItemBar
                          title={<Typography sx={{ fontSize: { xs: '8px', md: '20px' }, fontWeight: 'bold'}}>{item.title}</Typography>}
                  
                          actionIcon={
                            <IconButton
                              
                              sx={{ color: 'rgb(255, 255, 255)' }}
                              aria-label={`info about ${item.title}`}
                            >
                              <LanguageIcon sx={{height:{xs:"15px", sm:"30px"}}}></LanguageIcon>
                              
                            </IconButton>
                          
                          }
                          sx={{    
                            height: { xs: '40px', sm: 'auto' },
                            padding: '4px'}}
                        />
                      </StyleImageListItem>
                    </ImageListItem>
                  ))}
                </ImageList>
              </TabPanel>
            </StyleBox>
          </Box>
        </Grid2>
      </Container>
    </StyleHero>
  );
}
