import React, { useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import { colors } from "../style/colors"
import { Cta } from "./Cta"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"
import { useVisibleCallback } from "burgos-use-visible-callback"
import { useInView } from "../hooks/useInView"

interface FirstViewProps {}

export const FirstView: React.FC<FirstViewProps> = ({}) => {
    const {ref, inView} = useInView()

    return (
        <Box sx={{ padding: "6vw" }} ref={ref}>
            <img
                src="/background.png"
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: "110vh",
                    zIndex: -1,
                    top: 0,
                    right: "-2vw",
                }}
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
                    borderTopLeftRadius: "2vw",
                }}
            />
            <Box id="first-view" sx={{ flexDirection: "column", flex: 1, gap: "2vw" }}>
                <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants()}>
                    <Typography sx={{ fontSize: "1.835rem", color: colors.light_pink, fontWeight: 700 }}>Modelagem de Negócios</Typography>
                </motion.div>
                <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ delay: 0.2 })}>
                    <Typography
                        sx={{
                            color: colors.grey,
                            fontWeight: 700,
                            fontSize: "4.5rem",
                            lineHeight: "4.5rem",
                            fontFamily: "Yaldevi",
                            width: 0.65,
                        }}
                    >
                        Transformamos processos em resultados através da tríade: pessoas, processos & tecnologia
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
