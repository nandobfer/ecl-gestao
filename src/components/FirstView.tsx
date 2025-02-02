import React from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { colors } from "../style/colors"
import { Cta } from "./Cta"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"
import { useInView } from "../hooks/useInView"

interface FirstViewProps {}

export const FirstView: React.FC<FirstViewProps> = ({}) => {
    const isMobile = useMediaQuery("(orientation: portrait)")
    const { ref, inView } = useInView()

    const video_height = isMobile ? "130vw" : "48vw"

    return (
        <Box sx={{ padding: isMobile ? "10vw" : "6vw", paddingTop: "2vw", overflowX: "hidden" }} ref={ref}>
            <video
                src="/background.mp4"
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: video_height,
                    objectFit: "cover",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    borderBottomLeftRadius: isMobile ? "10vw" : "2vw",
                    borderBottomRightRadius: isMobile ? "10vw" : "2vw",
                    objectPosition: isMobile ? "-130vw 35vw" : "5vw 0",
                }}
                loop
                autoPlay
                muted
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: video_height,
                    background: isMobile
                        ? `linear-gradient(to bottom, ${colors.blue} 25%, #7B7E8E99 60%, #F5F5F500 80%);`
                        : `linear-gradient(to right, ${colors.blue} 25%, #7B7E8E99 60%, #F5F5F500 80%);`,
                    zIndex: -1,
                    borderBottomLeftRadius: isMobile ? "10vw" : "2vw",
                    borderBottomRightRadius: isMobile ? "10vw" : "2vw",
                }}
            />
            <Box id="first-view" sx={{ flexDirection: "column", flex: 1, gap: isMobile ? "4vw" : "2vw" }}>
                <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants()}>
                    <Typography sx={{ fontSize: isMobile ? "4vw" : "1.91446vw", color: colors.light_pink, fontWeight: 700 }}>
                        Modelagem de Negócios
                    </Typography>
                </motion.div>
                <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ delay: 0.2 })}>
                    <Typography
                        sx={{
                            color: colors.grey,
                            fontWeight: 700,
                            fontSize: isMobile ? "12.6vw" : "4.69485vw",
                            lineHeight: isMobile ? "12.6vw" : "4.69485vw",
                            fontFamily: "Playfair Display",
                            width: isMobile ? undefined : 0.65,
                        }}
                    >
                        Resultados por meio de otimização de processos:{!isMobile && " Pessoas, processos e tecnologia em sintonia."}
                    </Typography>
                    {isMobile && (
                        <Typography sx={{ color: colors.grey, fontSize: "6vw", fontFamily: "Playfair Display", marginTop: "5vw" }}>
                            Pessoas, processos e tecnologia em sintonia.
                        </Typography>
                    )}
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
