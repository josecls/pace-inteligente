import { Mail, MessageCircle, CheckCircle2, ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Logo } from '../components/Logo'
import { SEOHead } from '../components/SEOHead'
import { trackPurchase } from '../lib/analytics'
import { PRODUCT_NAME } from '../lib/constants'

const steps = [
  {
    icon: Mail,
    title: 'Verifique seu e-mail',
    text: 'Em poucos minutos você receberá uma mensagem com o link de acesso ao PDF e instruções para abrir o material.',
  },
  {
    icon: MessageCircle,
    title: 'Confira o WhatsApp',
    text: 'A Lowify também envia o acesso pelo WhatsApp cadastrado na compra. Se não encontrar, confira a caixa de spam ou promoções.',
  },
  {
    icon: CheckCircle2,
    title: 'Comece a ler quando quiser',
    text: 'O e-book funciona em celular, tablet ou computador. Você pode consultar antes e depois dos seus treinos.',
  },
]

export function ObrigadoPage() {
  useEffect(() => {
    trackPurchase()
  }, [])

  return (
    <>
      <SEOHead
        title={`Compra confirmada | ${PRODUCT_NAME}`}
        description="Obrigado pela compra! Seu acesso ao Pace Inteligente será enviado por e-mail e WhatsApp."
        path="/obrigado"
        noindex
      />

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

      <main className="min-h-[70vh] bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-turquoise/15">
              <CheckCircle2 size={36} className="text-turquoise" aria-hidden />
            </div>
            <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-turquoise uppercase">
              Compra confirmada
            </p>
            <h1 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
              Obrigado! Seu {PRODUCT_NAME} está a caminho.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-muted">
              O pagamento foi processado com sucesso. Em instantes você receberá
              as instruções de acesso por <strong className="font-medium text-text-dark">e-mail</strong> e{' '}
              <strong className="font-medium text-text-dark">WhatsApp</strong>.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {steps.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5">
                  <Icon size={22} className="text-navy" aria-hidden />
                </div>
                <div>
                  <h2 className="font-heading text-lg font-bold text-navy">{title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-gray-muted">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-yellow/40 bg-yellow/10 p-6 text-center">
            <p className="text-sm leading-relaxed text-text-dark">
              <strong className="font-semibold">Não recebeu em até 15 minutos?</strong>{' '}
              Verifique a pasta de spam, confira se o e-mail e o WhatsApp da compra
              estão corretos e entre em contato pelo canal de suporte da Lowify.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <img
              src="/assets/product-square.webp"
              alt="Capa do e-book Pace Inteligente"
              width={160}
              height={160}
              loading="lazy"
              className="rounded-2xl shadow-md"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
