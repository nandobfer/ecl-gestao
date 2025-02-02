import React from 'react'
import { Box, Button, IconButton, Menu, MenuItem, useMediaQuery } from "@mui/material"
import { colors } from "../style/colors"
import logo from "/logo.svg"
import { AnchorButton } from "../types/AnchorButton"
import { motion } from "framer-motion"
import { animationVariants } from "../animationVariants"
import MenuIcon from "@mui/icons-material/Menu"

interface HeaderProps {}

const header_buttons: AnchorButton[] = [
    { label: "Sobre nós", anchorId: "#about-us" },
    { label: "Serviços", anchorId: "#services" },
    { label: "Metodologia", anchorId: "#methodology" },
    { label: "Contato", anchorId: "#contact" },
]

export const Header: React.FC<HeaderProps> = ({}) => {
    const isMobile = useMediaQuery("(orientation: portrait)")

    const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null)
    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMenuAnchor(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setMenuAnchor(null)
    }

    return (
        <motion.div initial="initial" animate="animate" variants={animationVariants({ vertical: true })}>
            <Box sx={{ padding: isMobile ? "5vw 10vw 0 10vw" : "0 6vw" }}>
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
                    <img src={logo} style={{ width: isMobile ? "32vw" : "16vw", height: "auto" }} />
                </MenuItem>

                {isMobile ? (
                    <>
                        <IconButton sx={{ marginLeft: "auto" }} onClick={handleOpenMenu}>
                            <MenuIcon sx={{ color: colors.grey, width: "7vw", height: "auto" }} />
                        </IconButton>
                        <Menu anchorEl={menuAnchor} open={!!menuAnchor} onClose={handleCloseMenu} MenuListProps={{ sx: { bgcolor: colors.grey } }}>
                            {header_buttons.map((button) => (
                                <MenuItem
                                    key={button.label}
                                    onClick={() => {
                                        handleCloseMenu()
                                        const anchor = document.createElement("a")
                                        anchor.href = button.anchorId
                                        anchor.style.display = "none"
                                        document.body.appendChild(anchor)
                                        anchor.click()
                                        document.body.removeChild(anchor)
                                    }}
                                >
                                    {button.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ padding: "0 4vw", paddingTop: "3vw", justifyContent: "space-between", flex: 1 }}>
                        {header_buttons.map((button) => (
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
                )}
            </Box>
        </motion.div>
    )
}
