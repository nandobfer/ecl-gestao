import React from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { colors } from "../style/colors"
import { Cta } from "./Cta"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"
import { useInView } from "../hooks/useInView"
import { InlineTypography } from "./InlineTypography"

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
                    <Typography sx={{ fontSize: isMobile ? "3.7vw" : "1.5vw", color: colors.light_pink, fontWeight: 700 }}>
                        Escalabilidade real começa com processos inteligentes. <br />
                        {isMobile ? <br /> : ""}
                        Implantamos sistemas operacionais com IA que rodam sem você.
                    </Typography>
                </motion.div>
                <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ delay: 0.2 })}>
                    <Typography
                        sx={{
                            color: colors.grey,
                            fontWeight: 700,
                            fontSize: isMobile ? "5.2vw" : "2.5vw",
                            lineHeight: isMobile ? "5.2vw" : "2.5vw",
                            fontFamily: "Playfair Display",
                            width: isMobile ? undefined : 0.65,
                        }}
                    >
                        Enquanto você tenta vender mais, seu time se afoga em retrabalho, erros e processos improvisados. Nós entramos, mapeamos,
                        implantamos e automatizamos{" "}
                        <InlineTypography highlight secondary>
                            TUDO
                        </InlineTypography>{" "}
                        e treinamos o seu time. <br />
                        <br />
                        Pra sua empresa escalar com eficiência, <br />
                        sem você precisar operar no grito.
                    </Typography>
                </motion.div>

                <motion.div initial="initial" animate={inView ? "animate" : "initial"} variants={animationVariants({ delay: 0.4 })}>
                    <Cta color="primary" href="#about-us" style={{ padding: "1vw 5vw", fontSize: isMobile ? "3.7vw" : undefined }}>
                        Quero diagnosticar minha ineficiência
                    </Cta>
                </motion.div>
            </Box>
        </Box>
    )
}
