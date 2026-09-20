import { Mail, MessageCircle } from 'lucide-react'
import { LegalLayout } from '../components/LegalLayout'
import { CONTACT_INFO, PRODUCT_NAME } from '../lib/constants'

export function ContatoPage() {
  const hasEmail = Boolean(CONTACT_INFO.email)
  const hasWhatsApp = Boolean(CONTACT_INFO.whatsappUrl)

  return (
    <LegalLayout
      title="Contato"
      description="Entre em contato sobre o Pace Inteligente."
      path="/contato"
    >
      <p>
        Tem dúvidas sobre o {PRODUCT_NAME}, sua compra ou o acesso ao material? Veja abaixo
        os canais disponíveis.
      </p>

      <div className="space-y-4">
        {hasEmail && (
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5">
              <Mail size={22} className="text-navy" aria-hidden />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-navy">E-mail</h2>
              <p className="mt-1 text-sm text-gray-muted">{CONTACT_INFO.email}</p>
            </div>
          </a>
        )}

        {hasWhatsApp && (
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5">
              <MessageCircle size={22} className="text-navy" aria-hidden />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-navy">WhatsApp</h2>
              <p className="mt-1 text-sm text-gray-muted">Fale conosco pelo WhatsApp</p>
            </div>
          </a>
        )}
      </div>

      <div className="rounded-2xl border border-navy/10 bg-white/60 p-6">
        <h2 className="font-heading text-lg font-bold text-navy">Sobre sua compra</h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-muted">
          Pagamento, entrega do PDF e acesso ao produto são gerenciados pela{' '}
          <strong className="font-medium text-text-dark">Lowify</strong>. Se você já comprou
          e não recebeu o material, verifique e-mail e WhatsApp cadastrados na compra (incluindo
          spam) ou entre em contato com o suporte da Lowify pelo canal informado na confirmação
          de pagamento.
        </p>
      </div>

      {!hasEmail && !hasWhatsApp && import.meta.env.DEV && (
        <p className="text-sm text-gray-muted">
          Configure <code className="rounded bg-white px-1.5 py-0.5 text-text-dark">VITE_CONTACT_EMAIL</code>{' '}
          ou <code className="rounded bg-white px-1.5 py-0.5 text-text-dark">VITE_CONTACT_WHATSAPP</code> no
          arquivo <code className="rounded bg-white px-1.5 py-0.5 text-text-dark">.env</code> para
          exibir seus canais de contato aqui.
        </p>
      )}
    </LegalLayout>
  )
}
