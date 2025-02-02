import React from "react"
import { Button, SxProps, useMediaQuery } from "@mui/material"

interface CtaProps {
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
    children?: React.ReactNode
    href: string
    style?: SxProps
}

export const Cta: React.FC<CtaProps> = (props) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    return (
        <Button
            variant="contained"
            color={props.color}
            href={props.href}
            fullWidth={isMobile}
            sx={{
                borderRadius: "5vw",
                fontSize: isMobile ? "5vw" : "2.0866vw",
                alignSelf: "flex-start",
                padding: "1vw 5vw",
                marginTop: "auto",
                marginRight: "13vw",
                ...props.style,
            }}
        >
            {props.children}
        </Button>
    )
}
