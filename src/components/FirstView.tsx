import React from "react"
import { Box, Typography } from "@mui/material"
import { colors } from "../style/colors"
import { Cta } from "./Cta"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"
import { useInView } from "../hooks/useInView"

interface FirstViewProps {}

export const FirstView: React.FC<FirstViewProps> = ({}) => {
    const { ref, inView } = useInView()

    return (
        <Box sx={{ padding: "6vw" }} ref={ref}>
            <video
                src="/background.mp4"
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: "110vh",
                    objectFit: "cover",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    borderBottomRightRadius: "2vw",
                    borderBottomLeftRadius: "2vw",
                }}
                loop
                autoPlay
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "110vh",
                    background: `linear-gradient(to right, ${colors.blue} 25%, #7B7E8E99 60%, #F5F5F500 80%);`,
                    zIndex: -1,
                    borderBottomLeftRadius: "2vw",
                    borderBottomRightRadius: "2vw",
                }}
            />
            <Box id="first-view" sx={{ flexDirection: "column", flex: 1, gap: "2vw" }}>
                <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants()}>
                    <Typography sx={{ fontSize: "1.91446vw", color: colors.light_pink, fontWeight: 700 }}>Modelagem de Negócios</Typography>
                </motion.div>
                <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ delay: 0.2 })}>
                    <Typography
                        sx={{
                            color: colors.grey,
                            fontWeight: 700,
                            fontSize: "4.69485vw",
                            lineHeight: "4.69485vw",
                            fontFamily: "Yaldevi",
                            width: 0.65,
                        }}
                    >
                        Resultados por meio de otimização de processos: Pessoas, processos e tecnologia em sintonia.
                    </Typography>
                </motion.div>

                <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ delay: 0.4 })}>
                    <Cta color="primary" href="#about-us" style={{ padding: "1vw 10vw" }}>
                        saiba mais
                    </Cta>
                </motion.div>
            </Box>
        </Box>
    )
}
