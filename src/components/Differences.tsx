import React from "react"
import { Box, Typography } from "@mui/material"
import { colors } from "../style/colors"

interface DifferencesProps {}

export const Differences: React.FC<DifferencesProps> = ({}) => {
    return (
        <Box
            sx={{
                padding: "10vw 7vw",
                paddingBottom: "5vw",
                bgcolor: colors.blue,
                borderRadius: "3vw",
                height: "100vh",
                marginTop: "-10vw",
                flexDirection: "column",
            }}
        >
            <Box sx={{ gap: "3vw", alignItems: "flex-end" }}>
                <Typography variant="h1" sx={{ color: colors.grey, flex: 0.5 }}>
                    Nosso <span style={{ color: colors.light_pink }}>diferencial</span>
                </Typography>
                <Typography sx={{ color: colors.grey, flex: 0.5, fontSize: "1.35rem", fontWeight: 500, lineHeight: "2.2rem" }}>
                    Enquanto muitos param na teoria, <span style={{ fontWeight: "bold" }}>a Ecl Gestão vai até o "Go Live"</span>, de mãos dadas com
                    cada cliente até que os resultados planejados se concretizem.{" "}
                    <span style={{ fontWeight: "bold" }}>Implementamos, testamos e ajustamos</span> até que cada detalhe funcione. Com isso,
                    entregamos algo que vai além de processos: entregamos{" "}
                    <span style={{ fontWeight: "bold" }}>tranquilidade, sustentabilidade e crescimento</span> real para sua empresa.
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
        </Box>
    )
}
