import React from "react"
import { IconButton } from "@mui/material"
import { links } from "../data/links"

interface FloatingZapProps {}

const offset = "2vw"

export const FloatingZap: React.FC<FloatingZapProps> = ({}) => {
    return (
        <IconButton sx={{ position: "fixed", bottom: offset, right: offset }} onClick={() => window.open(links.whatsapp, "_new")}>
            <img src="/icons/floating-zap.svg" alt="" style={{ width: "3vw", height: "auto" }} />
        </IconButton>
    )
}
