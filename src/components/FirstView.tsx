import React from 'react'
import {Box, Button, Typography} from '@mui/material'
import { colors } from '../style/colors'
import first_view_image from '/first_view.png'
import { Cta } from "./Cta"

interface FirstViewProps {}

export const FirstView: React.FC<FirstViewProps> = ({}) => {
    return (
        <Box sx={{ padding: "6vw" }}>
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
                <Typography sx={{ fontSize: "1.835rem", color: colors.light_pink, fontWeight: 700 }}>Modelagem de Negócios</Typography>
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

                <Cta color="primary" href="#about-us" style={{ padding: "1vw 10vw" }}>
                    saiba mais
                </Cta>
            </Box>
        </Box>
    )
}