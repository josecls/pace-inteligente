import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { initMetaPixel } from './lib/analytics'
import { LandingPage } from './pages/LandingPage'
import { ObrigadoPage } from './pages/ObrigadoPage'

export default function App() {
  useEffect(() => {
    initMetaPixel()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/obrigado" element={<ObrigadoPage />} />
      </Routes>
    </BrowserRouter>
  )
}
