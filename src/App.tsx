import React from 'react'
import { useTheme } from './hooks/useTheme'
import { ThemeProvider } from '@mui/material'
import './App.css'
import { Header } from './components/Header'
import { FirstView } from './components/FirstView'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'

export const App:React.FC<{}> = () => {
    const theme = useTheme()
    
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <FirstView />
            <AboutUs />
            <Services />
        </ThemeProvider>
    )
}