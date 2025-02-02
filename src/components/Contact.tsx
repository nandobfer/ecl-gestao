import React from "react"
import { Box, Typography } from "@mui/material"
import { colors } from "../style/colors"
import { Socials } from "./Socials"

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
    return (
        <Box id="contact" sx={{ flexDirection: "column" }}>
            <Box
                sx={{
                    padding: "4vw 8vw",
                    flex: 1,
                    borderBottomLeftRadius: "5vw",
                    borderBottomRightRadius: "5vw",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "3vw",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: colors.blue,
                        fontSize: "5.7vw",
                        lineHeight: "5.7vw",
                    }}
                >
                    Entre em contato agora e torne sua empresa <span style={{ color: colors.dark_pink }}>mais eficiente</span>
                </Typography>

                <img src="/icons/arrow-down.svg" style={{ width: "4vw", height: "auto" }} />
            </Box>

            <Box
                sx={{
                    bgcolor: colors.blue,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: "3vw",
                    borderTopRightRadius: "3vw",
                    padding: "5vw 0",
                    flexDirection: "column",
                    gap: "5vw",
                    paddingBottom: 0,
                }}
            >
                <img src={"/logo.svg"} style={{ width: "30vw", height: "auto" }} />

                <Box sx={{ gap: "2vw", color: colors.grey, width: 1 }}>
                    <Box sx={{ flex: 0.5 }}>mapa</Box>
                    <Box sx={{ flex: 0.5, flexDirection: "column", gap: "2vw" }}>
                        <Typography
                            sx={{
                                color: colors.grey,
                                bgcolor: colors.dark_pink,
                                fontSize: "2rem",
                                flex: 1,
                                padding: "1vw 4vw",
                                borderTopLeftRadius: "5vw",
                                borderBottomLeftRadius: "5vw",
                                fontWeight: "bold",
                            }}
                        >
                            comercial@eclgestao.com.br
                        </Typography>

                        <Box sx={{ flexDirection: "column", gap: "0.5vw", paddingLeft: "3vw" }}>
                            <Typography variant="body2">Av presidente Juscelino Kubitschek, 1327</Typography>
                            <Typography variant="body2">Sala cv 1469 andar 4 conj 41</Typography>
                            <Typography variant="body2">Vila Nova Conceição, São Paulo</Typography>
                            <Typography variant="body2">CEP 04.543-011</Typography>
                        </Box>
                    </Box>
                </Box>

                <Socials />
            </Box>
        </Box>
    )
}
