import { Box, Container, Grid2, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Tab, Tabs, Typography, styled } from "@mui/material";
import React from "react";
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CodeIcon from '@mui/icons-material/Code';
import AddchartIcon from '@mui/icons-material/Addchart';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import GitHubIcon from '@mui/icons-material/GitHub';
import useRedirect from "../../components/Buttons/Button_down";
import { useTranslation } from "react-i18next";
import Camisa3D from "../../components/Models3D/model3d";




const itemDev = [
  {
    img: 'src\\assets\\images\\imagem portfolio.png',
    title: 'Portfólio',
    author: ['logo js.svg', 'logo react.png'],
    local: 'https://github.com/lucasfreitas25/my_portifolio'
  },
  {
    img: 'src\\assets\\images\\crud .png',
    title: 'CRUD',
    author: ['logo Java.png', 'logo postgres.png'],
    rows: 2,
    cols: 2,
    featured: true,
    local:'https://github.com/lucasfreitas25/Trabalho-CRUD'
  },
  {
    img: 'src\\assets\\images\\Sistema inteligente.png',
    title: 'SISTEMA INTELIGENTE FREITULITOS',
    author: ['logo python.png', 'logo postgres.png'],
    local: 'https://github.com/lucasfreitas25/IA_sistema_inteligente'
  },
  {
    img: 'src\\assets\\images\\linktree freitulitos.png',
    title: 'LinkTree Custom',
    author: ['logo js.svg', "logo CSS.png", "logo HTML.png"],
    cols: 2,
    local:'https://github.com/lucasfreitas25/Projeto-Frontend'
  },
  {
    img: 'src\\assets\\images\\site trojan.png',
    title: 'SITE TROJAN',
    author: ['logo js.svg', "logo CSS.png", "logo HTML.png"],
    local:"https://github.com/lucasfreitas25/Site-TROJAN"
  },
  {
    img: 'src\\assets\\images\\contador de tags.PNG',
    title: 'Contador de TAGS',
    author: ['logo node.png', 'logo postgres.png'],
    local: 'https://github.com/lucasfreitas25/TestePratico_NUTI'
  },
  {
    img: 'src\\assets\\images\\APP freitulitos.jpg',
    title: 'FreitulitosAPP',
    author: ['logo js.svg', "logo CSS.png", "logo HTML.png"],
    cols: 2,
    local:'https://github.com/lucasfreitas25/FreitulitosAPP'
  },
  {
    img: 'src\\assets\\images\\firstapi test.png',
    title: 'FirstAPI',
    author: ['logo python.png'],
    rows: 2,
    cols: 2,
    featured: true,
    local:'https://github.com/lucasfreitas25/FirstAPI'
  },
];

const itemData = [
  {
    img: 'src\\assets\\images\\painel pnad.png',
    title: 'PNAD',
    author: ['logo python.png', 'logo postgres.png'],
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'src\\assets\\images\\IA Calvo.png',
    title: 'IA CALVO',
    author: ['logo python.png', 'logo postgres.png'],
  },
  {
    img: 'src\\assets\\images\\painel pam.png',
    title: 'PAM',
    author: ['logo python.png', 'logo postgres.png'],
    cols: 2,
  },
  {
    img: 'src\\assets\\images\\painel pevs.png',
    title: 'PEVS',
    author: ['logo python.png', 'logo postgres.png'],
    cols: 2,
  },
  {
    img: 'src\\assets\\images\\painel ppm.png',
    title: 'PPM',
    author: ['logo python.png', 'logo postgres.png'],
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'src\\assets\\images\\painel conab.png',
    title: 'CONAB',
    author: ['logo python.png', 'logo postgres.png'],
  },
  {
    img: 'src\\assets\\images\\painel anp.png',
    title: 'ANP',
    author: ['logo python.png', 'logo postgres.png'],
  },
  {
    img: 'src\\assets\\images\\painel pib municipal.png',
    title: 'PIB MUNICIPAL',
    author: ['logo python.png', 'logo postgres.png'],
  },
  {
    img: 'src\\assets\\images\\painel abates.png',
    title: 'ABATE ANIMAIS',
    author: ['logo python.png', 'logo postgres.png'],
    rows: 2,
    cols: 2,
  },
  {
    img: 'src\\assets\\images\\painel estoques.png',
    title: 'ESTOQUES',
    author: ['logo python.png', 'logo postgres.png'],
    rows: 2,
    cols: 2,
  },
  {
    img: 'src\\assets\\images\\painel pim.png',
    title: 'PIM',
    author: ['logo python.png', 'logo postgres.png'],
  },
  {
    img: 'src\\assets\\images\\painel pms.png',
    title: 'PMS',
    author: ['logo python.png', 'logo postgres.png'],
  },
  {
    img: 'src\\assets\\images\\painel usda.png',
    title: 'USDA',
    author: ['logo python.png', 'logo postgres.png'],
  },
  {
    img: 'src\\assets\\images\\painel ptl.png',
    title: 'PTL',
    author: ['logo python.png', 'logo postgres.png'],
  },
];
const itemDesign = [
  {
    img: 'src\\assets\\images\\Camisa Preta Trojan.jpg',
    title: 'CAMISA PRETA TROJAN',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'src\\assets\\images\\Camisa Branca Trojan.jpeg',
    title: 'CAMISA BRANCA TROJAN',
    author: ['logo python.png', 'logo postgres.png'],
  },
  {
    img: 'src\\assets\\images\\Camisa Azul Trojan.jpg',
    title: 'CAMISA AZUL TROJAN',
    cols: 2,
  },
  {
    img: 'src\\assets\\images\\Camisa 2 Branca Trojan.jpeg',
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
              src={`src/assets/images/${logo}`} 
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
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                          
                        />
                      </StyleImageListItem>
                      
                      <ImageListItemBar
                        title={<Typography sx={{ fontSize: { xs: '10px', sm: '20px' }, fontWeight: 'bold' }}>{item.title}</Typography>}
                        subtitle={<LogoGallery logos={item.author} />}
                        actionIcon={
                          <IconButton onClick={useRedirect(item.local)}  sx={{ color: 'rgb(255, 255, 255)' , }} aria-label={`info about ${item.title}`}>
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
                <ImageList sx={{ width: "100%", height: 450, rowHeight: 180 }}>
                  <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div"></ListSubheader>
                  </ImageListItem>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{ width: "100%", height: 180 }}>
                      
                      <StyleImageListItem>
                        <img
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=248&fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                        <ImageListItemBar
                          title={<Typography sx={{ fontSize: { xs: '10px', sm: '20px' }, fontWeight: 'bold'}}>{item.title}</Typography>}
                          subtitle={<LogoGallery logos={item.author} />} 
                          actionIcon={
                            <IconButton
                              sx={{ color: 'rgb(255, 255, 255)' }}
                              aria-label={`info about ${item.title}`}
                            >
                              <GitHubIcon sx={{height:{xs:"15px", sm:"30px"}}}></GitHubIcon>
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
                          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=248&fit=crop&auto=format`}
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
                              <ThreeDRotationIcon sx={{height:{xs:"15px", sm:"30px"}}}></ThreeDRotationIcon>
                              
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
