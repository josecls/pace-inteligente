import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'
import { Logo } from './Logo'
import { SEOHead } from './SEOHead'

interface LegalLayoutProps {
  title: string
  description: string
  path: string
  children: React.ReactNode
}

export function LegalLayout({ title, description, path, children }: LegalLayoutProps) {
  return (
    <>
      <SEOHead title={`${title} | Pace Inteligente`} description={description} path={path} />

      <header className="border-b border-navy/8 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Logo />
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-muted transition-colors hover:text-navy"
          >
            <ArrowLeft size={16} aria-hidden />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="bg-cream py-12 sm:py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">{title}</h1>
          <div className="prose-legal mt-8 space-y-5 text-base leading-relaxed text-text-dark">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
