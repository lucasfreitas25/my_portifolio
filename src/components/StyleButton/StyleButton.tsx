import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyleButtonProps {
    children: ReactNode
    onClick: () => void
    backgroundColor?: string;  
    textColor?: string;        
    padding?: string;          
    
    width?: string; 
}

const StyleButton: React.FC<StyleButtonProps> = ({
    children,
    onClick,
    backgroundColor = "transparent", 
    textColor,
    padding = "3px 15px",           
    width = "100%",                  
  }) => {
  
    const StyledButton = styled("button")(({ theme }) => ({
      backgroundColor: backgroundColor,
      border: `1.5px solid ${theme.palette.primary.contrastText}`,
      borderRadius: "4px",
      padding: padding,
      width: width,
      color: textColor || theme.palette.primary.contrastText, // Usa o textColor passado ou o default do theme
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark
      }
    }));
  
    return (
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    );
  }
  
  export default StyleButton;