import React from 'react'
import {Box, Typography} from '@mui/material'
import { colors } from '../style/colors'
import { useInView } from "../hooks/useInView"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"

interface AboutUsProps {}

export const AboutUs: React.FC<AboutUsProps> = ({}) => {
    const { ref, inView } = useInView()

    return (
        <Box
            ref={ref}
            id="about-us"
            sx={{
                // bgcolor: colors.blue,
                width: "100vw",
                borderRadius: "3vw",
                flexDirection: "column",
                padding: "6vw 12vw 6vw",
                gap: "4vw",
            }}
        >
            <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ opacityOnly: true })}>
                <Typography
                    sx={{
                        color: colors.blue,
                        fontSize: "1.49rem",
                        fontWeight: 500,
                        lineHeight: "2.2rem",
                    }}
                >
                    Na Ecl Gestão, desde 2015, somos mais do que uma consultoria em modelagem de negócios: somos parceiros estratégicos de empresários
                    que buscam organizar, crescer e prosperar de maneira sustentável. Nosso trabalho combina pessoas, processos e tecnologia de forma
                    prática e descomplicada, porque acreditamos que soluções eficientes devem ser acessíveis.
                </Typography>
            </motion.div>

            <Box sx={{ alignItems: "center", gap: "1vw" }}>
                <motion.div
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={animationVariants({ opacityOnly: true, delay: 0.2 })}
                    style={{ flex: 0.4 }}
                >
                    <Typography variant="h5" sx={{ color: colors.blue }}>
                        Nosso diferencial? Vivência <span style={{ color: colors.dark_pink, fontFamily: "Yaldevi" }}>real</span>.
                    </Typography>
                </motion.div>

                <motion.div
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={animationVariants({ opacityOnly: true, delay: 0.4 })}
                    style={{ flex: 0.7 }}
                >
                    <Typography
                        sx={{
                            color: colors.blue,

                            fontSize: "1.49rem",
                            fontWeight: 500,
                            lineHeight: "2.2rem",
                        }}
                    >
                        Mais do que teoria, enfrentamos os desafios de empreender e estruturar negócios. Isso nos dá uma visão única para oferecer
                        soluções personalizadas que funcionam de verdade. Transformamos operações desordenadas em modelos claros e eficientes,
                        permitindo que negócios cresçam sem caos.
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    )
}