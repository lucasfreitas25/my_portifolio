import { Box, Container, Divider, Grid, Grid2, List, ListItem, ListItemText, styled, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const logo_back = [
  'logo C.png',
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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.up('xs')]: {
      paddingTop: "100px", // Ajuste para mobile
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0", // Ajuste para desktop
    },
  }));

  const StyleImg = styled("img")({
    width: "20%",
    borderRadius: "50%",
    border: `1px solid #333`,

  });

  const LogoGallery = ({ logos }: { logos: string[] }) => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '5px' }}>
        {logos.map((logo, index) => (
          <StyleImg key={index} src={`/images/${logo}`} alt={`Logo ${index + 1}`} />
        ))}
      </Box>
    );
  };

  const StyleBox = styled("box")({

  });

  const StyleLIST = {
    width: '100%',
    maxWidth: 360,
    border: '2px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    padding: 0,
  };

  const StyleTabPanel = styled(Box)({
    padding: 0,
  });

  return (
    <>
      <StyleHero>
        <Container maxWidth="lg">
          <Grid2 container spacing={2} sx={{ position: 'relative' }}>
            <Box sx={{    
              flexGrow: 1,
              bgcolor: 'background.paper',
              display: 'flex',
              height: 224,
              padding: 0,
              border: `1px solid blue`,}}>
              <StyleBox>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                  <Tab label="SKILLS" {...a11yProps(0)} />
                  <Tab label="COURSES" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <StyleTabPanel>
                    <List sx={StyleLIST}>
                      <ListItem>
                        <ListItemText primary="BACKEND" />
                        <LogoGallery logos={logo_back} />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <ListItemText primary="FRONTEND" />
                        <LogoGallery logos={logo_front} />
                      </ListItem>
                      <Divider component="li" />
                      <ListItem>
                        <ListItemText primary="DATABASES" />
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
    </>
  );
}
