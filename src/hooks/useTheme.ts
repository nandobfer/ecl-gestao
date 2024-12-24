import { createTheme } from "@mui/material"
import { useMemo } from "react"
import { colors } from "../style/colors"

export const useTheme = () => {
    const THEME = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: ["Work Sans", "Yaldevi"].join(","),
                    h1: {
                        fontSize: '7.5rem',
                        fontFamily: 'Yaldevi',
                        color: colors.dark_pink,
                        lineHeight: '6.8rem',
                        fontWeight: 700,
                    },
                    body2: {
                        fontWeight: 500,
                    fontSize: '1.85rem',
                        lineHeight: '2.5rem',
                    whiteSpace: 'preserve-spaces'
                    },
                    body1: {
                        color: colors.blue
                    }
                },
                palette: {
                    mode: "light",

                    primary: {
                        main: colors.dark_pink
                    },
                    secondary: {
                        main: colors.blue
                    },

                    background: {
                        default: colors.light_pink,
                        paper: colors.light_pink
                    },

                    text: {
                        primary: colors.dark_pink,
                        secondary: colors.blue
                    },

                }
            }),
        [colors]
    )

    return THEME
}