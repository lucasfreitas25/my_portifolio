import { Box, Container, Divider, Grid2, Icon, IconButton, ImageList, ImageListItem, ImageListItemBar, List, ListItem,  ListSubheader, Tab, Tabs, Typography, styled } from "@mui/material";
import React from "react";
import StyleButton from "../../components/StyleButton/StyleButton";
import ArchitectureIcon from '@mui/icons-material/Architecture';
import CodeIcon from '@mui/icons-material/Code';
import AddchartIcon from '@mui/icons-material/Addchart';

const itemDev = [
    {
      img: 'src\\assets\\images\\crud .png',
      title: 'CRUD',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'SITE TROJAN',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Contador de TAGS',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'LinkTree Custom',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'FreitulitosAPP',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'FirstAPI',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Meu portfolio',
      author: '@tjdragotta',
    },
];
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'PNAD',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'IA CALVO',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'SISTEMA INTELIGENTE FREITULITOS',
      author: '@helloimnik',
    },
    {
      img: 'src\\assets\\images\\painel pam.png',
      title: 'PAM',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'src\\assets\\images\\painel pevs.png',
      title: 'PEVS',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'src\\assets\\images\\painel ppm.png',
      title: 'PPM',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'CONAB',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'ANP',
      author: '@tjdragotta',
    },
    {
      img: 'src\\assets\\images\\logo sqllite.png',
      title: 'USDA',
      author: '@tjdragotta',
    },
    {
      img: 'src\\assets\\images\\painel pib municipal.png',
      title: 'PIB MUNICIPAL',
      author: '@tjdragotta',
    },
    {
      img: 'src\\assets\\images\\logo sqllite.png',
      title: 'PIM',
      author: '@tjdragotta',
    },
    {
      img: 'src\\assets\\images\\logo sqllite.png',
      title: 'PMS',
      author: '@tjdragotta',
    },
    {
      img: 'src\\assets\\images\\painel abates.png',
      title: 'ABATE ANIMAIS',
      author: '@tjdragotta',
    },
    {
      img: 'src\\assets\\images\\logo sqllite.png',
      title: 'ESTOQUES',
      author: '@tjdragotta',
    },
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

export default function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Estilos
  const StyleHero = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "column",  
    [theme.breakpoints.up('xs')]: {
      paddingTop: "100px", // Ajuste para mobile
      width: "100%"
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0", // Ajuste para desktop
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


  const StyleIMGList = styled(ImageList)({
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
      <Container maxWidth="lg">
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
                    flexDirection:'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    
                  }}
                >
                    <Tab icon={<CodeIcon></CodeIcon>}label="DEV" {...a11yProps(0)} sx={{ fontSize: '20px', fontWeight: 'bold',  }} /> 
                    <Tab icon={<AddchartIcon></AddchartIcon>} label="DATA SCIENCE" {...a11yProps(1)} sx={{ fontSize: '20px', fontWeight: 'bold',  }} /> 
                    <Tab icon={<ArchitectureIcon></ArchitectureIcon>} label="DESIGN" {...a11yProps(2)} sx={{ fontSize: '20px', fontWeight: 'bold',  }} /> 

                </Tabs>
                <TabPanel value={value} index={0}>
                    <ImageList sx={{ width: "100%", height: 450}}>
                        <ImageListItem key="Subheader" cols={2}>
                            <ListSubheader component="div"></ListSubheader>
                        </ImageListItem>
                        {itemDev.map((item) => (
                            <ImageListItem key={item.img} sx={{height:"80%", }}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)',  }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <Icon />
                                </IconButton>
                                }
                            />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ImageList sx={{ width: "100%", height: 450,}}>
                        <ImageListItem key="Subheader" cols={2}>
                            <ListSubheader component="div"></ListSubheader>
                        </ImageListItem>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <Icon />
                                </IconButton>
                                }
                            />
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
