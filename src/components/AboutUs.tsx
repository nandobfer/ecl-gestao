import React from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { colors } from "../style/colors"
import { useInView } from "../hooks/useInView"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"
import { InlineTypography } from "./InlineTypography"

interface AboutUsProps {}

export const AboutUs: React.FC<AboutUsProps> = ({}) => {
    const { ref, inView } = useInView()
    const isMobile = useMediaQuery("(orientation: portrait)")

    return (
        <Box
            ref={ref}
            id="about-us"
            sx={{
                // bgcolor: colors.blue,
                width: "100vw",
                flexDirection: "column",
                padding: isMobile ? "10vw 12vw 10vw" : "6vw 12vw 6vw",
                gap: isMobile ? "8vw" : "4vw",
                overflowX: "hidden",
            }}
        >
            <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ opacityOnly: true })}>
                <Typography variant="subtitle1">
                    <span style={{ fontWeight: "bold" }}>
                        Há mais de 10 anos, somos especialistas em destravar operações caóticas e transformar crescimento desordenado em escala
                        previsível.
                    </span>{" "}
                    Não entregamos templates prontos e planilhas. Implantamos sistemas de eficiência real — combinando estratégia de processos,
                    automações inteligentes e uso estratégico de IA.
                </Typography>
            </motion.div>

            <Box sx={{ alignItems: "center", gap: isMobile ? "8vw" : "1vw", flexDirection: isMobile ? "column" : "row" }}>
                <motion.div
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={animationVariants({ opacityOnly: true, delay: 0.2 })}
                    style={{ flex: 0.4 }}
                >
                    <Typography variant="h5" sx={{ color: colors.blue }}>
                        Nosso diferencial? <span style={{ color: colors.dark_pink, fontFamily: "Playfair Display" }}>Vivência real</span>.
                    </Typography>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={animationVariants({ opacityOnly: true, delay: 0.4 })}
                    style={{ flex: 0.7 }}
                >
                    <Typography variant="subtitle1">
                        <span style={{ fontWeight: "bold" }}>
                            A Ecl Gestão nasceu no campo de batalha, dentro de empresas que travavam por causa de decisões operacionais ruins.
                        </span>{" "}
                        Sabemos o que paralisa uma operação. E sabemos exatamente como consertar — com precisão, método e execução.
                    </Typography>
                </motion.div>
            </Box>

            <Typography variant={"h5"} sx={{ color: colors.blue }}>
                Se você sente que sua empresa depende demais de você, é porque <InlineTypography highlight>ainda não operamos nela</InlineTypography>.
            </Typography>

            <Box sx={{ flexDirection: "column", gap: "1vw" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Você sabe que a operação está falhando quando:
                </Typography>
                <Box sx={{ flexDirection: "column" }}>
                    {[
                        "Cada vendedor faz do seu jeito.",
                        "O cliente entra confuso e volta pro time comercial no pós-venda.",
                        "O financeiro só sabe o que fatura — não o que trava.",
                        "E você precisa explicar o básico toda semana.",
                    ].map((item, index) => (
                        <Box key={index} sx={{ gap: "1vw" }}>
                            <Typography variant="subtitle1" sx={{ color: colors.dark_pink, fontSize: "1.56495vw" }}>
                                ✷
                            </Typography>
                            <Typography variant="subtitle1">{item}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>A Ecl Gestão existe pra acabar com isso.</span> Implantamos estruturas que organizam o caos,
                automatizam o essencial e liberam você pra pensar no crescimento — com clareza, não com correria.
            </Typography>

            <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>Desde 2015, ajudamos negócios a crescer sem perder o controle.</span> Somos uma consultoria de
                operação com foco em eficiência e execução real: Mapeamos processos, implantamos sistemas e integramos automações com IA — sem
                blá-blá-blá técnico, sem engessar o time, sem soluções genéricas.
            </Typography>
        </Box>
    )
}
