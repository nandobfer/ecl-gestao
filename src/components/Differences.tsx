import React from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { colors } from "../style/colors"
import { Cta } from "./Cta"

interface DifferencesProps {}

export const Differences: React.FC<DifferencesProps> = ({}) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    return (
        <Box
            sx={{
                padding: isMobile ? "10vw" : "10vw 7vw",
                paddingBottom: isMobile ? "10vw" : "5vw",
                bgcolor: colors.blue,
                borderRadius: isMobile ? "10vw" : "3vw",
                marginTop: "-5vw",
                flexDirection: "column",
                gap: "5vw",
                position: "relative",
                overflowX: "hidden",
            }}
        >
            <Box sx={{ gap: isMobile ? "10vw" : "3vw", alignItems: "flex-end", flexDirection: isMobile ? "column" : "row" }}>
                <Typography variant={isMobile ? "h2" : "h1"} sx={{ color: colors.grey, flex: 0.5 }}>
                    Nosso <span style={{ color: colors.light_pink }}>diferencial</span>
                </Typography>
                <Typography
                    sx={{
                        color: colors.grey,
                        flex: 0.5,
                        fontSize: isMobile ? "3.4vw" : "1.40846vw",
                        fontWeight: 500,
                        lineHeight: isMobile ? "4.4vw" : "2.29526vw",
                    }}
                >
                    <span style={{ fontWeight: "bold" }}>Na Ecl Gestão, não entregamos apenas planos, entregamos resultados.</span> Vamos além da
                    teoria, acompanhando cada etapa até que tudo esteja funcionando perfeitamente. Implementamos, testamos e ajustamos lado a lado com
                    você, garantindo não só processos eficientes, mas também{" "}
                    <span style={{ fontWeight: "bold" }}>tranquilidade, crescimento sustentável e resultados reais.</span>
                </Typography>
            </Box>

            <Box sx={{ alignItems: "center", marginTop: "auto", gap: "2vw" }}>
                {!isMobile && (
                    <Box
                        sx={{
                            flex: 0.4,
                            height: "2vw",
                            borderBottomRightRadius: "5vw",
                            borderTopRightRadius: "5vw",
                            marginLeft: "-7vw",
                            bgcolor: colors.dark_pink,
                        }}
                    />
                )}

                <Typography
                    sx={{
                        flex: isMobile ? undefined : 0.6,
                        fontSize: isMobile ? undefined : "3.23423vw",
                        lineHeight: isMobile ? undefined : "3.1299vw",
                        color: colors.grey,
                    }}
                    variant={isMobile ? "h5" : "h3"}
                >
                    Porque para nós, <span style={{ color: colors.light_pink }}>crescer sem caos</span> não é apenas possível, é essencial.
                </Typography>
            </Box>

            <Cta color="primary" href="#contact" style={{ margin: "0 auto", fontSize: "4vw" }}>
                quero transformar meu negócio
            </Cta>

            <Box
                sx={{
                    position: "absolute",
                    width: "8vw",
                    height: "8vw",
                    bgcolor: colors.light_pink,
                    right: "8vw",
                    bottom: "-4vw",
                    borderRadius: "100%",
                }}
            />
        </Box>
    )
}
