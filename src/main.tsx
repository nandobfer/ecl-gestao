import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <BrowserRouter>
            <Routes>
            <Route index element={<App />} />
            </Routes>
        </BrowserRouter>
  </StrictMode>,
)
