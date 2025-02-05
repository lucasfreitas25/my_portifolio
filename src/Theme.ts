import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#111111',
      },
      secondary: {
        main: '#483d8b',
      },
    },
    typography: {
        fontFamily: [
            "Segoe UI"
        ].join(',')
    }
  });

  theme = responsiveFontSizes(theme);
  export default theme;