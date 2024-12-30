import React from "react"
import { Box, Typography } from "@mui/material"
import { colors } from "../style/colors"

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
    const socials: SocialItem[] = [
        { icon: "zap", label: "Whatsapp", link: "https://api.whatsapp.com/send?phone=5544998536079" },
        { icon: "instagram", label: "Instagram", link: "https://www.instagram.com/eclgestao/" },
        { icon: "linkedin", label: "Linkedin", link: "https://www.instagram.com/eclgestao/" },
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
                sx={{ position: "absolute", width: "3.5vw", height: "3.5vw", bgcolor: colors.blue, right: "10vw", top: "4vw", borderRadius: "100%" }}
            />

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
            >
                {socials.map((item) => (
                    <Social item={item} key={item.icon} />
                ))}
            </Box>

            <img src="/contact.png" style={{ position: "absolute", width: "35vw", height: "auto", bottom: 0 }} />
        </Box>
    )
}
