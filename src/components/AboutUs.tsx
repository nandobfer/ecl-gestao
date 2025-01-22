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
                    Na <span style={{ fontWeight: "bold" }}>Ecl Gestão</span>, desde 2015, somos mais do que uma consultoria em modelagem de negócios:{" "}
                    <span style={{ fontWeight: "bold" }}>somos parceiros estratégicos</span>
                    de empresários que buscam <span style={{ fontWeight: "bold" }}>organizar, crescer e prosperar</span> de maneira sustentável. Nosso
                    trabalho combina <span style={{ fontWeight: "bold" }}>pessoas, processos e tecnologia</span> de forma prática e descomplicada,
                    porque acreditamos que <span style={{ fontWeight: "bold" }}>soluções eficientes devem ser acessíveis.</span>
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
                        <span style={{ fontWeight: "bold" }}>soluções personalizadas</span> que funcionam de verdade.
                    </Typography>
                </motion.div>
            </Box>

            <Typography variant="h2" sx={{ color: colors.blue }}>
                Sabemos exatamente como é estar do <span style={{ color: colors.dark_pink }}>outro lado da mesa</span>.
            </Typography>

            <Typography
                sx={{
                    color: colors.blue,

                    fontSize: "1.49rem",
                    fontWeight: 500,
                    lineHeight: "2.2rem",
                }}
            >
                Sabe aquele departamento comercial onde cada vendedor “faz do seu jeito”, os contratos ficam travados por dias sem inicio e os
                clientes voltam ao comercial pós-onboarding para “ajustar o produto/serviço contratado”?{" "}
                <span style={{ fontWeight: "bold" }}>Pois é, nós já vimos – e vivemos – isso.</span> Já enfrentamos esses desafios tanto nas nossas
                próprias empresas quanto nos negócios dos nossos clientes.
            </Typography>

            <Typography
                sx={{
                    color: colors.blue,

                    fontSize: "1.49rem",
                    fontWeight: 500,
                    lineHeight: "2.2rem",
                }}
            >
                E é exatamente aqui que a<span style={{ fontWeight: "bold" }}> Ecl Gestão entra em ação:</span> organizamos o caos, estruturamos
                processos claros e criamos fluxos eficientes que transformam desafios em{" "}
                <span style={{ fontWeight: "bold" }}>resultados reais e sustentáveis.</span>
            </Typography>
        </Box>
    )
}