import React from 'react'
import {Box, Button, MenuItem} from '@mui/material'
import { colors } from '../style/colors'
import logo from '/logo.svg'
import { AnchorButton } from "../types/AnchorButton"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const buttons: AnchorButton[] = [
        { label: "Sobre nós", anchorId: "#about-us" },
        { label: "Serviços", anchorId: "#services" },
        { label: "Metodologia", anchorId: "#methodology" },
        { label: "Contato", anchorId: "#contact" },
    ]

    return (
        <motion.div initial="initial" animate="animate" variants={animationVariants({ vertical: true })}>
            <Box sx={{ padding: "0 6vw" }}>
                <MenuItem
                    href="#"
                    sx={{
                        padding: "2vw",
                        paddingTop: "3vw",
                        fontSize: "1.56495vw",
                        color: colors.grey,
                        borderBottomRightRadius: "2vw",
                        borderBottomLeftRadius: "2vw",
                        "&:hover": {},
                    }}
                >
                    <img src={logo} style={{ width: "16vw", height: "auto" }} />
                </MenuItem>

                <Box sx={{ padding: "0 4vw", paddingTop: "3vw", justifyContent: "space-between", flex: 1 }}>
                    {buttons.map((button) => (
                        <Button
                            variant="contained"
                            color="inherit"
                            href={button.anchorId}
                            sx={{
                                borderRadius: "5vw",
                                fontWeight: 600,
                                fontSize: "1.56495vw",
                                padding: "0 1.7vw",
                                height: "3vw",
                                borderWidth: "2px",
                                color: colors.blue,
                            }}
                        >
                            {button.label}
                        </Button>
                    ))}
                </Box>
            </Box>
        </motion.div>
    )
}
