import React from "react"
import { Box, Typography } from "@mui/material"
import { colors } from "../style/colors"
import { useInView } from "../hooks/useInView"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"

interface AboutMeProps {}

const JourneyFeature: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Box sx={{ gap: "1vw" }}>
        <Typography variant="h4" sx={{ color: colors.light_pink, fontSize: "1.5rem" }}>
            ✷
        </Typography>
        <Typography variant="h4">{children}</Typography>
    </Box>
)

export const AboutMe: React.FC<AboutMeProps> = ({}) => {
    const { ref, inView } = useInView()

    const journey_features: string[] = [
        "Especialização em Oxford University (UK) em gestão do conhecimento;",
        "Experiência em governança corporativa e qualidade;",
        "Expertise em consultoria em gestão para empresas familiares, pequenas e médias;",
        "Especialidade em mapeamento e implantação de processos internos em organizações de diferentes setores.",
    ]

    return (
        <Box
            ref={ref}
            id="about-me"
            sx={{
                bgcolor: colors.blue,
                width: "100vw",
                borderRadius: "5vw",
                padding: "6.2vw",
                paddingTop: "8.2vw",
                flexDirection: "column",
            }}
        >
            <Box sx={{ position: "relative" }}>
                <Box sx={{ flex: 0.4, flexDirection: "column" }}>
                    <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants()}>
                        <Typography variant="h2" sx={{ color: colors.grey }}>
                            Karen Miniacci
                        </Typography>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.72rem", lineHeight: "2rem", color: colors.light_pink }}>
                            Fundadora e Consultora Líder
                        </Typography>
                    </motion.div>

                    <Box sx={{ position: "absolute", bottom: "-3vw", left: 0, zIndex: 3 }}>
                        <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ delay: 0.4 })}>
                            <img src="/karen.png" style={{ width: "33vw", height: "auto" }} />
                        </motion.div>
                    </Box>
                </Box>

                <motion.div
                    style={{ flex: 0.8 }}
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={animationVariants({ reversed: true, delay: 0.2 })}
                >
                    <Box sx={{ flex: 0.6, bgcolor: colors.dark_pink, borderRadius: "5vw", padding: "6.2vw", flexDirection: "column", gap: "3vw" }}>
                        <Typography variant="h3" sx={{}}>
                            Sobre:
                        </Typography>
                        <Typography variant="h4">
                            Com mais de 15 anos de experiência em gestão de processos. Mestre em Administração e com MBA em Economia e Mercado, reúne
                            expertise técnica e vivência prática, oferecendo consultorias que realmente fazem a diferença. Além disso, é
                            sócia-proprietária de outro negócio, colocando em prática em seu negócio em ascensão tudo aquilo que a Ecl Gestão ajuda
                            outras empresas a construir.
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

            <Box sx={{ paddingTop: "6vw", gap: "3vw", alignItems: "center", flexDirection: "column" }}>
                <Typography variant="h5" sx={{ fontSize: "3.6rem" }}>
                    “A chave para o sucesso é conseguir equilibrar na prática pessoas, processos e tecnologia em um ecossistema funcional e eficiente”
                </Typography>
                <Typography sx={{ fontSize: "1.835rem", color: colors.light_pink, fontWeight: 700 }}>⎯ Karen Miniacci</Typography>
                <Typography variant="body2" sx={{ color: colors.grey, textAlign: "center" }}>
                    e mais do que acreditar, ela vivencia todos os dias esse método e cada projeto é uma oportunidade de transformar negócios e
                    construir legados.
                </Typography>
            </Box>
        </Box>
    )
}
