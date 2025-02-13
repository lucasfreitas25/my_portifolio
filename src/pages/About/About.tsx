import { Box, Container, Divider, Grid2, List, ListItem, Tab, Tabs, Typography, styled } from "@mui/material";
import React from "react";

const logo_back = [
  'logo_C.png',
  'logo Java.png',
  'logo node.png',
  'logo python.png'
];
const logo_front = [
  'logo CSS.png',
  'logo HTML.png',
  'logo js.svg'
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

  const StyleImg = styled("img")({
    width: "100%",  
    height: "100px",  
    objectFit: "contain", 
  });

  const LogoGallery = ({ logos }: { logos: string[] }) => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {logos.map((logo, index) => (
          <Box key={index} sx={{ width: "20%" }}> 
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
    gap: '16px', 
  });

  const StyleLIST = {
    flex: 1,
    // maxWidth: 500,
    border: '2px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    display: 'flex', 
    flexDirection: 'column',
    width: "100%",
  };

  const StyleTabPanel = styled(Box)({
    padding: '16px', // Adicionado padding para garantir o espaçamento adequado
    backgroundColor: '#f5f5f5',  // Altere a cor de fundo se desejar
    borderRadius: '8px',  // Bordas arredondadas para um visual mais suave
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Sombra para destacar o conteúdo
    height: '100%',  // Ajustado para que ocupe toda a altura disponível
    overflowY: 'auto',  // Para que o conteúdo não ultrapasse e tenha scroll se necessário
    alignItems: 'center',
    display: 'flex'
    
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
            // border: '1px solid blue',
          }}>
            <StyleBox>
              <Tabs
                orientation="horizontal" 
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                centered
                sx={{
                  borderColor: 'divider',
                  display: 'flex', 
                  flexDirection:'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Tab label="SKILLS" {...a11yProps(0)} sx={{ fontSize: '20px', fontWeight: 'bold',  }} /> 
                <Tab label="COURSES" {...a11yProps(1)} sx={{ fontSize: '20px', fontWeight: 'bold',  }} /> 
              </Tabs>

              {/* Conteúdo das Abas */}
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
                      <Typography sx={{fontWeight: 'bold'}}>BDs:</Typography>
                      <LogoGallery logos={logo_bd} />
                    </ListItem>
                    <Divider component="li" />
                  </List>
                </StyleTabPanel>
              </TabPanel>

              <TabPanel value={value} index={1}>
                Nome do curso, ano de conclusão e botão de download do portfólio
              </TabPanel>
            </StyleBox>
          </Box>
        </Grid2>
      </Container>
    </StyleHero>
  );
}
