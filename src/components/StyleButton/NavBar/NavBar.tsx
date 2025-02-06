import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const NavBar = () => {

    const StyleBar = styled(Toolbar)(({}) => ({
        // border: `1px solid ${theme.palette.primary.contrastText}`,
        justifyContent: "space-evenly",
        display:"flex"
   
     }))
    return (
      <>
        <AppBar position="absolute">
            <StyleBar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Project</MenuItem>
            </StyleBar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  