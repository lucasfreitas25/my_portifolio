import { Box, Container, IconButton, Typography, styled } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useRedirect from "../Buttons/Button_down";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const redirectToLinkedin = useRedirect("https://br.linkedin.com/in/lucasfreitas-tech");
  const redirectToGithub = useRedirect("https://github.com/lucasfreitas25");
  const redirectToWhatsApp = useRedirect("https://wa.me/5565996474929");

  const StyleFooter = styled("footer")({
    backgroundColor: '#0a0114',
    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
    padding: '32px 0 24px',
  });

  const SocialButton = styled(IconButton)({
    color: 'rgba(255, 255, 255, 0.6)',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#ffffff',
      transform: 'translateY(-3px)',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  });

  return (
    <StyleFooter>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Social icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <SocialButton onClick={redirectToLinkedin} aria-label="LinkedIn">
              <LinkedInIcon />
            </SocialButton>
            <SocialButton onClick={redirectToGithub} aria-label="GitHub">
              <GitHubIcon />
            </SocialButton>
            <SocialButton onClick={redirectToWhatsApp} aria-label="WhatsApp">
              <WhatsAppIcon />
            </SocialButton>
          </Box>

          {/* Divider line */}
          <Box
            sx={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              borderRadius: '1px',
            }}
          />

          {/* Copyright */}
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: '0.8rem',
              fontFamily: '"Inter", "Segoe UI", sans-serif',
              letterSpacing: '0.5px',
            }}
          >
            © {new Date().getFullYear()} Lucas Freitas. {t("footer")}
          </Typography>
        </Box>
      </Container>
    </StyleFooter>
  );
};

export default Footer;
