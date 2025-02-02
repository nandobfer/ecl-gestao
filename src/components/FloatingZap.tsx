import React from "react"
import { IconButton, useMediaQuery } from "@mui/material"
import { links } from "../data/links"

interface FloatingZapProps {}

export const FloatingZap: React.FC<FloatingZapProps> = ({}) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    const offset = isMobile ? "5vw" : "2vw"

    return (
        <IconButton sx={{ position: "fixed", bottom: offset, right: offset }} onClick={() => window.open(links.whatsapp, "_new")}>
            <img src="/icons/floating-zap.svg" alt="" style={{ width: isMobile ? "10vw" : "3vw", height: "auto" }} />
        </IconButton>
    )
}
