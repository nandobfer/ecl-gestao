import React from 'react'
import { useTheme } from './hooks/useTheme'
import { ThemeProvider } from '@mui/material'
import './App.css'
import { Header } from './components/Header'
import { FirstView } from './components/FirstView'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'
import { AboutMe } from "./components/AboutMe"
import { Methodology } from "./components/Methodology"
import { Differences } from "./components/Differences"
import { Contact } from "./components/Contact"
import { FloatingZap } from "./components/FloatingZap"

export const App: React.FC<{}> = () => {
    const theme = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <FirstView />
            <AboutUs />
            <AboutMe />
            <Services />
            <Methodology />
            <Differences />
            <Contact />

            <FloatingZap />
        </ThemeProvider>
    )
}
