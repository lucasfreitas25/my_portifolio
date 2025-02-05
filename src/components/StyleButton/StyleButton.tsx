import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyleButtonProps {
    children: ReactNode
}

const StyleButton: React.FC<StyleButtonProps> =  ({children}) => {

    const StyleButton = styled("button")(({theme}) => ( {
        backgroundColor: "transparent",
        border:`1.5px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "4px",
        padding: "3px 15px",
        width:"100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    }))
    return (
        <>
        <StyleButton>
            {children}
        </StyleButton>
        </>
    )
}

export default StyleButton
