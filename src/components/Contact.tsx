import React from "react"
import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { colors } from "../style/colors"
import { Socials } from "./Socials"
import { Map } from "./Map"
import { Cta } from "./Cta"
import { links } from "../data/links"

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    return (
        <Box id="contact" sx={{ flexDirection: "column", overflowX: "hidden" }}>
            <Box
                sx={{
                    padding: isMobile ? "10vw 20vw" : "4vw 8vw",
                    flex: 1,
                    borderBottomLeftRadius: "5vw",
                    borderBottomRightRadius: "5vw",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: isMobile ? "6vw" : "3vw",
                }}
            >
                <Typography
                    variant={isMobile ? "h5" : "h2"}
                    sx={{
                        color: colors.blue,
                        fontSize: isMobile ? undefined : "5.7vw",
                        lineHeight: isMobile ? undefined : "5.7vw",
                    }}
                >
                    Sua operação não pode mais depender do improviso.
                </Typography>

                <Typography variant="subtitle1">
                    Se você está apagando incêndio, perdendo clientes por falta de processo ou vendo sua equipe afundar em retrabalho — pare de tentar
                    resolver sozinho.
                </Typography>

                <Box sx={{ flexDirection: "column" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        Receba gratuitamente nosso Diagnóstico Estratégico Rápido:
                    </Typography>
                    <Typography variant="subtitle1">Um sprint de diagnóstico que identifica:</Typography>
                    {[
                        "Os 3 principais gargalos invisíveis da sua operação",
                        "Onde sua empresa está queimando dinheiro (sem perceber)",
                        " E como processos + automação podem te dar ESCALA com controle",
                    ].map((item, index) => (
                        <Box key={index} sx={{ gap: "1vw" }}>
                            <Typography variant="subtitle1" sx={{ color: colors.dark_pink, fontSize: "1.56495vw" }}>
                                ✷
                            </Typography>
                            <Typography variant="subtitle1">{item}</Typography>
                        </Box>
                    ))}
                    <Typography variant="subtitle1">
                        Em até 48h, enviamos uma análise com orientações reais. Sem enrolação. Sem compromisso.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ justifyContent: "center", alignItems: "center", width: 1, paddingBottom: "5vw", flexDirection: "column" }}>
                <Button
                    sx={{ borderRadius: "5vw", fontSize: isMobile ? "5vw" : "2.0866vw", padding: "1vw 5vw" }}
                    variant="contained"
                    onClick={() => window.open(links.whatsapp, "_new")}
                >
                    QUERO MEU DIAGNÓSTICO GRÁTIS
                </Button>
                <Typography variant="button">Vagas limitadas por semana.</Typography>
            </Box>

            <Box
                sx={{
                    bgcolor: colors.blue,
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: isMobile ? "10vw" : "3vw",
                    borderTopRightRadius: isMobile ? "10vw" : "3vw",
                    padding: isMobile ? "15vw 5vw" : "5vw 0",
                    flexDirection: "column",
                    gap: isMobile ? "10vw" : "5vw",
                    paddingBottom: 0,
                }}
            >
                <img src={"/logo.svg"} style={{ width: isMobile ? "60vw" : "30vw", height: "auto" }} />

                {/* {isMobile && (
                    <Typography
                        variant="body1"
                        sx={{
                            color: colors.grey,
                            bgcolor: colors.dark_pink,
                            padding: "1vw 7vw",
                            borderTopLeftRadius: "5vw",
                            borderBottomLeftRadius: "5vw",
                            fontWeight: "bold",
                            margin: "0 -5vw",
                            marginLeft: "auto",
                            paddingRight: "15vw",
                        }}
                    >
                        comercial@eclgestao.com.br
                    </Typography>
                )} */}

                <Box sx={{ gap: isMobile ? "6vw" : "2vw", color: colors.grey, width: 1, flexDirection: isMobile ? "column" : undefined }}>
                    <Box sx={{ flex: isMobile ? undefined : 0.45, height: isMobile ? "50vw" : undefined }}>
                        <Map />
                    </Box>
                    <Box sx={{ flex: isMobile ? undefined : 0.55, flexDirection: "column", gap: "2vw" }}>
                        {!isMobile && (
                            <Typography
                                sx={{
                                    color: colors.grey,
                                    bgcolor: colors.dark_pink,
                                    fontSize: "2vw",
                                    flex: 1,
                                    padding: "1vw 4vw",
                                    borderTopLeftRadius: "5vw",
                                    borderBottomLeftRadius: "5vw",
                                    fontWeight: "bold",
                                }}
                            >
                                Onde estamos
                            </Typography>
                        )}

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
