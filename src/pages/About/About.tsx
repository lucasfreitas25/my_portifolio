import { Box, Container, Divider, Grid2, List, ListItem, Tab, Tabs, Typography, styled } from "@mui/material";
import React from "react";
import StyleButton from "../../components/StyleButton/StyleButton";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const logo_back = [
  'logo_C.png',
  'logo Java.png',
  'logo node.png',
  'logo python.png'
];
const logo_front = [
  'logo CSS.png',
  'logo HTML.png',
  'logo js.svg',
  'logo react.png',
  'logo powerbi.png'
];
const logo_bd = [
  'logo mysql.png',
  'logo postgres.png',
  'logo sqllite.png'
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
                    <Tab icon={<ManageAccountsIcon></ManageAccountsIcon>}label="SKILLS" {...a11yProps(0)} sx={{ fontSize: '20px', fontWeight: 'bold',  }} /> 
                    <Tab icon={<LibraryBooksIcon></LibraryBooksIcon>} label="COURSES" {...a11yProps(1)} sx={{ fontSize: '20px', fontWeight: 'bold',  }} /> 

                </Tabs>

              
              <TabPanel value={value} index={0}>
                <StyleTabPanel>
                  <List sx={StyleLIST}>
                    <ListItem>
                      <Typography sx={{fontWeight: 'bold'}}>BACKEND:</Typography>
                      <LogoGallery logos={logo_back} />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <Typography sx={{fontWeight: 'bold'}}>FRONTEND:</Typography>
                      <LogoGallery logos={logo_front} />
                    </ListItem>
                    <Divider component="li" />
                    <ListItem>
                      <Typography sx={{fontWeight: 'bold'}}>BANCO DE DADOS:</Typography>
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
                        <Typography sx={{ fontWeight: 'bold' }}>CURSO:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Google Data Analytics, 2023</Typography>
                      </Box>
                      <StyleButton onClick={() => console.log("download")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{display: { xs: 'none', sm: 'block' } }}>Certificado</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />

                    
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>CURSO:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Santander Bootcamp Cibersegurança, 2024</Typography>
                      </Box>
                      <StyleButton onClick={() => console.log("download")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{display: { xs: 'none', sm: 'block' } }}>Certificado</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />

                    
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>CURSO:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Bootcamp Nexa - Machine Learning para Iniciantes na AWS</Typography>
                      </Box>
                      <StyleButton onClick={() => console.log("download")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{display: { xs: 'none', sm: 'block' } }}>Certificado</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />

                    
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>CURSO:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>Python Data Analytics, 2024</Typography>
                      </Box>
                      <StyleButton onClick={() => console.log("download")} width="13%" backgroundColor="green">
                        <WorkspacePremiumIcon />
                        <Typography sx={{display: { xs: 'none', sm: 'block' } }}>Certificado</Typography>
                      </StyleButton>
                    </ListItem>
                    <Divider component="li" />

                    
                    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>CURSO:</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize:{xs:"15px"}}}>Santander 2024 - Fundamentos de IA para Devs, 2024</Typography>
                      </Box>
                      <StyleButton onClick={() => console.log("download")} width="13%" backgroundColor="green" >
                        <WorkspacePremiumIcon />
                        <Typography sx={{display: { xs: 'none', sm: 'block' } }}>Certificado</Typography>
                      </StyleButton>
                    </ListItem>
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
