import React from "react"
import { Box, Typography } from "@mui/material"
import { colors } from "../style/colors"
import { Cta } from "./Cta"

interface DifferencesProps {}

export const Differences: React.FC<DifferencesProps> = ({}) => {
    return (
        <Box
            sx={{
                padding: "10vw 7vw",
                paddingBottom: "5vw",
                bgcolor: colors.blue,
                borderRadius: "3vw",
                marginTop: "-5vw",
                flexDirection: "column",
                gap: "5vw",
                position: "relative",
            }}
        >
            <Box sx={{ gap: "3vw", alignItems: "flex-end" }}>
                <Typography variant="h1" sx={{ color: colors.grey, flex: 0.5 }}>
                    Nosso <span style={{ color: colors.light_pink }}>diferencial</span>
                </Typography>
                <Typography sx={{ color: colors.grey, flex: 0.5, fontSize: "1.35rem", fontWeight: 500, lineHeight: "2.2rem" }}>
                    <span style={{ fontWeight: "bold" }}>Na Ecl Gestão, não entregamos apenas planos, entregamos resultados.</span> Vamos além da
                    teoria, acompanhando cada etapa até que tudo esteja funcionando perfeitamente. Implementamos, testamos e ajustamos lado a lado com
                    você, garantindo não só processos eficientes, mas também{" "}
                    <span style={{ fontWeight: "bold" }}>tranquilidade, crescimento sustentável e resultados reais.</span>
                </Typography>
            </Box>

            <Box sx={{ alignItems: "center", marginTop: "auto", gap: "2vw" }}>
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

                <Typography sx={{ flex: 0.6, fontSize: "3.1rem", lineHeight: "3rem", color: colors.grey }} variant="h3">
                    Porque para nós, <span style={{ color: colors.light_pink }}>crescer sem caos</span> não é apenas possível, é essencial.
                </Typography>
            </Box>

            <Cta color="primary" href="#contact" style={{ margin: "0 auto" }}>
                quero transformar meus processos
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
