import { FOOTER_LINKS, PRODUCT_NAME } from '../lib/constants'
import { FooterLink } from './FooterLink'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep py-12 text-white/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Logo light className="inline-block" />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed">
          Material educacional. Não constitui prescrição de treino, diagnóstico
          ou orientação nutricional individualizada.
        </p>

        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Legal">
          <FooterLink href={FOOTER_LINKS.terms}>Termos de Uso</FooterLink>
          <FooterLink href={FOOTER_LINKS.privacy}>Política de Privacidade</FooterLink>
          <FooterLink href={FOOTER_LINKS.contact}>Contato</FooterLink>
        </nav>

        <p className="mt-8 text-xs text-white/40">
          © {year} {PRODUCT_NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
