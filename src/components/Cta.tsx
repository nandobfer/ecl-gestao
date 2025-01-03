import React from "react"
import { Button, SxProps } from "@mui/material"

interface CtaProps {
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
    children?: React.ReactNode
    href: string
    style?: SxProps
}

export const Cta: React.FC<CtaProps> = (props) => {
    return (
        <Button
            variant="contained"
            color={props.color}
            href={props.href}
            sx={{
                borderRadius: "5vw",
                fontSize: "2rem",
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
