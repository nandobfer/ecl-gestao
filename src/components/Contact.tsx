import React from "react"
import { Box, Typography } from "@mui/material"
import { colors } from "../style/colors"
import { links } from "../data/links"
import { motion } from "framer-motion"
import { useInView } from "../hooks/useInView"
import { animationVariants } from "../animationVariants"

interface ContactProps {}

interface SocialItem {
    icon: string
    label: string
    link: string
}
const Social: React.FC<{ item: SocialItem }> = ({ item }) => (
    <Box sx={{ gap: "1vw", flex: 1, cursor: "pointer" }} onClick={() => window.open(item.link, "_new")}>
        <img src={`/icons/${item.icon}.svg`} style={{ width: "2vw", height: "2vw" }} />
        <Typography
            sx={{
                color: colors.grey,
                fontSize: "1.8rem",
                fontWeight: 500,
                lineHeight: "2.2rem",
                textDecoration: "underline",
            }}
        >
            {item.label}
        </Typography>
    </Box>
)

export const Contact: React.FC<ContactProps> = ({}) => {
    const { ref, inView } = useInView()

    const socials: SocialItem[] = [
        { icon: "zap", label: "Whatsapp", link: links.whatsapp },
        { icon: "instagram", label: "Instagram", link: links.instagram },
        { icon: "linkedin", label: "Linkedin", link: links.linkedin },
    ]

    return (
        <Box id="contact" sx={{ padding: "0 5vw", height: "90vh", position: "relative" }}>
            <Box
                sx={{
                    bgcolor: colors.dark_pink,
                    paddingRight: "7vw",
                    paddingBottom: "10vw",
                    flex: 1,
                    borderBottomLeftRadius: "5vw",
                    borderBottomRightRadius: "5vw",
                    height: "80vh",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    zIndex: -1,
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: colors.grey,
                        marginTop: "auto",
                        marginLeft: "auto",
                        fontSize: "5rem",
                        flex: 0.6,
                        lineHeight: "5rem",
                    }}
                >
                    Entre em <span style={{ color: colors.light_pink }}>contato</span> e torne sua empresa otimizada
                </Typography>
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    width: "75vw",
                    height: "75vw",
                    left: "-37.5vw",
                    top: "-37.5vw",
                    borderRadius: "100%",
                    border: `12vw solid ${colors.blue}`,
                    zIndex: -1,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    height: "3.5vw",
                    bgcolor: colors.blue,
                    right: 0,
                    bottom: "2vw",
                    gap: "5vw",
                    padding: "3.5vw",
                    paddingRight: "13vw",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: "5vw",
                    borderBottomLeftRadius: "5vw",
                }}
                ref={ref}
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
        </Box>
    )
}
