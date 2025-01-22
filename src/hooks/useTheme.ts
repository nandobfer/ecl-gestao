import { createTheme } from "@mui/material"
import { useMemo } from "react"
import { colors } from "../style/colors"

export const useTheme = () => {
    const THEME = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: ["Work Sans", "Playfair Display"].join(","),
                    h1: {
                        fontSize: "7.82475vw",
                        fontFamily: "Playfair Display",
                        color: colors.dark_pink,
                        lineHeight: "7.09444vw",
                        fontWeight: 700,
                    },
                    h2: { fontSize: "6.57279vw", fontFamily: "Playfair Display", lineHeight: "6.57279vw", fontWeight: 700 },
                    h3: { fontSize: "2.92124vw", fontFamily: "Playfair Display", lineHeight: "2.92124vw", fontWeight: 700, color: colors.light_pink },
                    h4: { color: colors.grey, fontSize: "1.40846vw", fontWeight: 500, lineHeight: "2.0866vw" },
                    h5: { fontFamily: "Playfair Display", fontWeight: 700, fontSize: "3.96454vw", color: colors.grey, lineHeight: "4.1732vw" },
                    h6: { fontSize: "6.05114vw", fontFamily: "Playfair Display", lineHeight: "6.57279vw", fontWeight: 700, color: colors.blue },
                    body2: {
                        fontWeight: 500,
                        fontSize: "1.9301vw",
                        lineHeight: "2.60825vw",
                        whiteSpace: "preserve-spaces",
                    },
                    body1: {
                        color: colors.blue,
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
