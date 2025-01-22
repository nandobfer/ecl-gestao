import React from "react"
import { Box, Typography } from "@mui/material"
import { version } from "../version"

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "column", alignItems: "center", paddingBottom: "2vw" }}>
            <Typography>
                {new Date().getFullYear()} © Direitos Reservados - {version}
            </Typography>
            <Typography>
                Powered by <span style={{ fontWeight: "bold" }}>Studio Criativo</span> & <span style={{ fontWeight: "bold" }}>BOZ</span>
            </Typography>
        </Box>
    )
}
