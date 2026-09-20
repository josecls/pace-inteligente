import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { initMetaPixel } from './lib/analytics'
import { ContatoPage } from './pages/ContatoPage'
import { LandingPage } from './pages/LandingPage'
import { ObrigadoPage } from './pages/ObrigadoPage'
import { PrivacidadePage } from './pages/PrivacidadePage'
import { TermosPage } from './pages/TermosPage'

export default function App() {
  useEffect(() => {
    initMetaPixel()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/obrigado" element={<ObrigadoPage />} />
        <Route path="/termos" element={<TermosPage />} />
        <Route path="/privacidade" element={<PrivacidadePage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
