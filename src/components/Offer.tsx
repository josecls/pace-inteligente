import { Check } from 'lucide-react'
import { CTAButton } from './CTAButton'
import { PRODUCT_PRICE } from '../lib/constants'
import { useInView } from '../lib/useInView'

const includes = [
  'E-book Pace Inteligente em PDF',
  'Método P.A.C.E.',
  'Tabela rápida de pace para 5 km',
  'Protocolo de observação por 7 dias',
  'Acesso enviado pela Lowify após a compra',
]

export function Offer() {
  const { ref, isVisible } = useInView()

  return (
    <section
      id="oferta"
      ref={ref}
      className="bg-gradient-to-br from-navy via-navy to-turquoise/30 py-20 sm:py-28"
    >
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="flex justify-center">
          <img
            src="/assets/ebook-mockup.webp"
            alt="Mockup do e-book Pace Inteligente em PDF"
            width={480}
            height={480}
            loading="lazy"
            className="w-full max-w-sm drop-shadow-2xl"
          />
        </div>

        <div className="rounded-3xl bg-white/95 p-8 shadow-xl backdrop-blur-sm sm:p-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-turquoise uppercase">
            ACESSO IMEDIATO
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold text-navy sm:text-3xl">
            Comece a correr com mais consciência por menos do que um lanche.
          </h2>

          <ul className="mt-6 space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex gap-3 text-text-dark">
                <Check size={20} className="mt-0.5 shrink-0 text-turquoise" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-navy/10 pt-8">
            <p className="font-heading text-5xl font-extrabold text-navy">{PRODUCT_PRICE}</p>
            <div className="mt-6">
              <CTAButton location="offer">
                Quero o Pace Inteligente por {PRODUCT_PRICE}
              </CTAButton>
              <p className="mt-3 text-center text-sm text-gray-muted sm:text-left">
                Pagamento processado com segurança pela Lowify.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
