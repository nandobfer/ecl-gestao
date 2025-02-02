import React from "react"
import { Box, IconButton, useMediaQuery } from "@mui/material"
import { colors } from "../style/colors"
import { motion } from "framer-motion"
import { links } from "../data/links"
import { animationVariants } from "../animationVariants"
import { useInView } from "../hooks/useInView"
import { Footer } from "./Footer"

interface SocialsProps {}

interface SocialItem {
    icon: string
    label: string
    link: string
}
const Social: React.FC<{ item: SocialItem }> = ({ item }) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    return (
        <IconButton onClick={() => window.open(item.link, "_new")}>
            <img src={`/icons/${item.icon}.svg`} style={{ width: isMobile ? "7vw" : "2.5vw", height: "auto" }} />
        </IconButton>
    )
}

export const Socials: React.FC<SocialsProps> = ({}) => {
    const isMobile = useMediaQuery("(orientation: portrait)")
    const { ref, inView } = useInView()

    const socials: SocialItem[] = [
        { icon: "zap", label: "Whatsapp", link: links.whatsapp },
        { icon: "instagram", label: "Instagram", link: links.instagram },
        { icon: "linkedin", label: "Linkedin", link: links.linkedin },
    ]

    return (
        <Box
            ref={ref}
            sx={{
                width: isMobile ? "80vw" : "70vw",
                bgcolor: colors.dark_pink,
                padding: isMobile ? "5vw" : "2.5vw",
                borderTopLeftRadius: isMobile ? "10vw" : "3.5vw",
                borderTopRightRadius: isMobile ? "10vw" : "3.5vw",
                justifyContent: "center",
                alignItems: "center",
                gap: isMobile ? "2vw" : "1vw",
                paddingBottom: isMobile ? "2vw" : "1vw",
                flexDirection: "column",
            }}
        >
            <Box sx={{ gap: "10vw" }}>
                {socials.map((item, index) => (
                    <motion.div
                        key={item.icon}
                        initial="initial"
                        animate={inView ? "animate" : "initial"}
                        variants={animationVariants({ reversed: true, delay: index * 0.5 })}
                    >
                        <Social item={item} />
                    </motion.div>
                ))}
            </Box>
            <Footer />
        </Box>
    )
}
