import React from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { version } from "../version"
import { colors } from "../style/colors"

interface FooterProps {}

const Link: React.FC<{ children: React.ReactNode; link: string }> = (props) => (
    <span className="link" style={{ fontWeight: "bold" }} onClick={() => window.open(props.link, "_new")}>
        {props.children}
    </span>
)

export const Footer: React.FC<FooterProps> = ({}) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    return (
        <Box sx={{ flexDirection: "column", alignItems: "center" }}>
            <Typography variant={isMobile ? "body2" : undefined} sx={{ color: colors.light_pink }}>
                {new Date().getFullYear()} © Direitos Reservados - {version}
            </Typography>
            <Typography variant={isMobile ? "body2" : undefined} sx={{ color: colors.light_pink }}>
                Powered by <Link link="https://www.instagram.com/studiocriativo.co/">Studio Criativo Co</Link> &{" "}
                <Link link="https://agenciaboz.com.br">BOZ</Link>
            </Typography>
        </Box>
    )
}
