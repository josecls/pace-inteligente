import { Audience } from '../components/Audience'
import { Benefits } from '../components/Benefits'
import { FAQ } from '../components/FAQ'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { MobileBuyBar } from '../components/MobileBuyBar'
import { Offer } from '../components/Offer'
import { PaceMethod } from '../components/PaceMethod'
import { PerspectiveSection } from '../components/PerspectiveSection'
import { ProblemSection } from '../components/ProblemSection'
import { ProductPreview } from '../components/ProductPreview'
import { SEOHead } from '../components/SEOHead'

export function LandingPage() {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <PaceMethod />
        <Benefits />
        <ProductPreview />
        <PerspectiveSection />
        <Audience />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBuyBar />
    </>
  )
}
