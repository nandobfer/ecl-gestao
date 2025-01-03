import React from 'react'
import {Box, Button, MenuItem} from '@mui/material'
import { colors } from '../style/colors'
import logo from '/logo.svg'
import { AnchorButton } from '../types/AnchorButton'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
    
}

export const Header: React.FC<HeaderProps> = ({ }) => {
    const navigate = useNavigate()
    
    const buttons: AnchorButton[] = [
        { label: "Sobre nós", anchorId: "#about-us" },
        { label: "Serviços", anchorId: "#services" },
        { label: "Metodologia", anchorId: "#methodology" },
        { label: "Contato", anchorId: "#contact" },
    ]

    return (
        <Box sx={{ padding: "0 6vw", paddingBottom: "2vw" }}>
            <MenuItem
                sx={{
                    padding: "2vw",
                    paddingTop: "3vw",
                    fontSize: "1.5rem",
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
                            fontSize: "1.5rem",
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
    )
}