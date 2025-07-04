import React from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { colors } from "../style/colors"
import { useInView } from "../hooks/useInView"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"

interface AboutMeProps {}

const JourneyFeature: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Box sx={{ gap: "1vw" }}>
        <Typography variant="h4" sx={{ color: colors.light_pink, fontSize: "1.56495vw" }}>
            ✷
        </Typography>
        <Typography variant="h4">{children}</Typography>
    </Box>
)

export const AboutMe: React.FC<AboutMeProps> = ({}) => {
    const isMobile = useMediaQuery("(orientation: portrait)")
    const { ref, inView } = useInView()

    const journey_features: string[] = [
        "+10 anos transformando caos operacional em crescimento lucrativo;",
        "Especialização em gestão do conhecimento (Oxford University);",
        "Vivência em negócios reais, como executiva e fundadora;",
        "Mapeamento e implantação de processos com foco em automação inteligente;",
        "Governança e eficiência para empresas que precisam crescer sem arriscar tudo no meio do caminho.",
    ]

    return (
        <Box
            ref={ref}
            id="about-me"
            sx={{
                bgcolor: colors.blue,
                width: "100vw",
                borderRadius: isMobile ? "10vw" : "5vw",
                padding: "6.2vw",
                paddingTop: "8.2vw",
                flexDirection: "column",
                overflowX: "hidden",
            }}
        >
            <Box sx={{ position: "relative", flexDirection: isMobile ? "column" : "row" }}>
                <Box sx={{ flex: 0.4, flexDirection: "column" }}>
                    <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants()}>
                        <Box sx={{ flexDirection: "column", alignItems: isMobile ? "center" : undefined, gap: isMobile ? "3vw" : undefined }}>
                            <Typography variant="h2" sx={{ color: colors.grey, width: "min-content" }}>
                                Karen Miniacci
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: isMobile ? "4vw" : "1.79448vw",
                                    lineHeight: "2.0866vw",
                                    color: colors.light_pink,
                                }}
                            >
                                Fundadora e Consultora Líder
                            </Typography>
                        </Box>
                    </motion.div>

                    <Box
                        sx={{
                            position: isMobile ? undefined : "absolute",
                            bottom: "-3vw",
                            left: 0,
                            zIndex: 3,
                            marginBottom: isMobile ? "-25vw" : undefined,
                        }}
                    >
                        <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ delay: 0.4 })}>
                            <img
                                src={isMobile ? "/karen2_mobile.png" : `/karen2.png`}
                                style={{ width: isMobile ? "88vw" : "33vw", height: "auto" }}
                            />
                        </motion.div>
                    </Box>
                </Box>

                <motion.div
                    style={{ flex: 0.8 }}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={animationVariants({ reversed: true, delay: 0.2 })}
                >
                    <Box
                        sx={{
                            flex: 0.6,
                            bgcolor: colors.dark_pink,
                            borderRadius: isMobile ? "10vw" : "5vw",
                            padding: isMobile ? "10vw" : "6.2vw",
                            flexDirection: "column",
                            gap: isMobile ? "5vw" : "3vw",
                            paddingTop: isMobile ? "30vw" : undefined,
                            alignItems: isMobile ? "center" : undefined,
                        }}
                    >
                        <Typography variant="h3" sx={{}}>
                            Sobre:
                        </Typography>
                        <Typography variant="h4">
                            Mais de 15 anos de experiência em gestão de processos de negócios. Mestre em Administração e com MBA em Economia e
                            Mercado. <br />
                            <br />
                            Karen combina profundidade estratégica com execução prática. Não é apenas consultora. É sócia-operadora de negócios reais
                            — e traz pra cada cliente o que FUNCIONA no campo de batalha, não em sala de reunião.
                        </Typography>
                        <Typography variant="h3">Destaques da trajetória:</Typography>

                        <Box sx={{ flexDirection: "column" }}>
                            {journey_features.map((item) => (
                                <JourneyFeature key={item}>{item}</JourneyFeature>
                            ))}
                        </Box>
                    </Box>
                </motion.div>
            </Box>

            <Box
                sx={{
                    padding: isMobile ? "0 10vw 5vw 10vw" : undefined,
                    paddingTop: "6vw",
                    gap: "3vw",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h5" sx={{ fontSize: isMobile ? "6vw" : "2.8vw", lineHeight: isMobile ? "7vw" : undefined }}>
                    "Eu aplico nas minhas empresas o que entrego nas consultorias. O mercado não tem espaço mais para achismos e nem amadorismo. Se
                    não funciona na prática, não entra na Ecl Gestão."
                </Typography>
                <Typography
                    sx={{
                        fontSize: isMobile ? "4vw" : "1.91446vw",
                        color: colors.light_pink,
                        fontWeight: 700,
                        alignSelf: isMobile ? "flex-end" : undefined,
                    }}
                >
                    ⎯ Karen Miniacci
                </Typography>
                <Typography variant="body2" sx={{ color: colors.grey, textAlign: isMobile ? undefined : "center" }}>
                    e mais do que acreditar, ela vivencia todos os dias esse método e cada projeto é uma oportunidade de transformar negócios e
                    construir legados.
                </Typography>
            </Box>
        </Box>
    )
}
