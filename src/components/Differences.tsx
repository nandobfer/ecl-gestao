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
                    <span style={{ fontWeight: "bold" }}>
                        A maioria entrega template de notion e excel. A ECL entrega eficiência operacional implantada.
                    </span>{" "}
                    Cada projeto nosso é construído lado a lado com o time do cliente. Você não recebe um relatório ou um plano de ação — você recebe
                    um sistema funcionando. Rodando. <span style={{ fontWeight: "bold", color: colors.light_pink }}>Gerando resultado</span>.
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
                        color: colors.grey,
                    }}
                    variant={"subtitle1"}
                >
                    <span style={{ fontWeight: "bold" }}>
                        Crescer sem caos não é ilusão. É o que acontece quando o seu negócio para de operar no improviso.
                    </span>{" "}
                    Se você quer parar de apagar incêndio e começar a crescer com estrutura, a hora de agir é agora.
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
