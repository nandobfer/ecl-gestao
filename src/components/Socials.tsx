import React from "react"
import { Box, IconButton, Typography } from "@mui/material"
import { colors } from "../style/colors"
import { motion } from "framer-motion"
import { links } from "../data/links"
import { animationVariants } from "../animationVariants"
import { useInView } from "../hooks/useInView"

interface SocialsProps {}

interface SocialItem {
    icon: string
    label: string
    link: string
}
const Social: React.FC<{ item: SocialItem }> = ({ item }) => (
    <IconButton onClick={() => window.open(item.link, "_new")}>
        <img src={`/icons/${item.icon}.svg`} style={{ width: "2.5vw", height: "auto" }} />
    </IconButton>
)

export const Socials: React.FC<SocialsProps> = ({}) => {
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
                width: "70vw",
                bgcolor: colors.dark_pink,
                padding: "2.5vw",
                borderTopLeftRadius: "3.5vw",
                borderTopRightRadius: "3.5vw",
                justifyContent: "center",
                alignItems: "center",
                gap: "10vw",
            }}
        >
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
    )
}
