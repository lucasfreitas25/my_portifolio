import { Box, Container, Grid2, Tabs, Typography, styled } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

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


export default function About() {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Estilos
  const StyleHero = styled("div")(({ theme }) => ({
    backgroundColor: ` #0d0317`,
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


  const StyleBox = styled("div")({
    display: 'flex',
    flexDirection: 'column', 
    height: 'auto',
    width: '100%',
    padding: 0,
  });

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
  const StyleText = styled(Typography)(({theme}) => ({
    fontFamily: '"Poppins", sans-serif',  
    [theme.breakpoints.up('xs')]: {
        fontSize:"15px"     
    },
    [theme.breakpoints.up('md')]: {
        fontSize:"30px"
      }
  }));

  return (
    <StyleHero>
      <Container id="about" maxWidth="lg">
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
              width: {md:'35%', xs:"20%"}, 
              height: '3px',
              background: 'white',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              width: {md:'35%', xs:"20%"}, 
              height: '3px',
              background: 'white',
              top: '50%',
              right: '0',
              transform: 'translateY(-50%)',
            },
          }}
          >{t("sobreMim")}</Typography>
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

            </Tabs>

              
              <TabPanel value={value} index={0}>
                <StyleTabPanel>
                    <Typography>
                        <StyleText>

                            {t("sobre")}
                        </StyleText>
                    </Typography>
                </StyleTabPanel>
              </TabPanel>
            </StyleBox>
          </Box>
        </Grid2>
      </Container>
    </StyleHero>
  );
}
