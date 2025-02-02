import { createTheme, useMediaQuery } from "@mui/material"
import { useMemo } from "react"
import { colors } from "../style/colors"

export const useTheme = () => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    const THEME = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: ["Work Sans", "Playfair Display"].join(","),
                    h1: {
                        fontSize: isMobile ? "18vw" : "7.82475vw",
                        fontFamily: "Playfair Display",
                        color: colors.dark_pink,
                        lineHeight: isMobile ? "18vw" : "7.09444vw",
                        fontWeight: 700,
                    },
                    h2: {
                        fontSize: isMobile ? "15vw" : "6.57279vw",
                        fontFamily: "Playfair Display",
                        lineHeight: isMobile ? "15vw" : "6.57279vw",
                        fontWeight: 700,
                    },
                    h3: {
                        fontSize: isMobile ? "5vw" : "2.92124vw",
                        fontFamily: "Playfair Display",
                        lineHeight: isMobile ? "5vw" : "2.92124vw",
                        fontWeight: 700,
                        color: colors.light_pink,
                    },
                    h4: { color: colors.grey, fontSize: isMobile ? "3vw" : "1.40846vw", fontWeight: 500, lineHeight: isMobile ? "4vw" : "2.0866vw" },
                    h5: {
                        fontFamily: "Playfair Display",
                        fontWeight: 700,
                        fontSize: isMobile ? "12vw" : "3.96454vw",
                        color: colors.grey,
                        lineHeight: isMobile ? "12vw" : "4.1732vw",
                    },
                    h6: { fontSize: "6.05114vw", fontFamily: "Playfair Display", lineHeight: "6.57279vw", fontWeight: 700, color: colors.blue },
                    body2: {
                        fontWeight: 500,
                        fontSize: isMobile ? "3.2vw" : "1.9301vw",
                        lineHeight: isMobile ? "4vw" : "2.60825vw",
                        whiteSpace: "preserve-spaces",
                    },
                    body1: {
                        color: colors.blue,
                    },
                    subtitle1: {
                        color: colors.blue,
                        fontSize: isMobile ? "3.2vw" : "1.55452vw",
                        fontWeight: 500,
                        lineHeight: isMobile ? "4vw" : "2.29526vw",
                    },
                },
                palette: {
                    mode: "light",

                    primary: {
                        main: colors.dark_pink,
                    },
                    secondary: {
                        main: colors.blue,
                    },

                    background: {
                        default: colors.light_pink,
                        paper: colors.light_pink,
                    },

                    text: {
                        primary: colors.dark_pink,
                        secondary: colors.blue,
                    },
                },
            }),
        [colors]
    )

    return THEME
}
