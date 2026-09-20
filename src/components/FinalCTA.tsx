import { CTAButton } from './CTAButton'
import { PRODUCT_PRICE } from '../lib/constants'
import { useInView } from '../lib/useInView'

export function FinalCTA() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="bg-cream py-20 sm:py-28">
      <div
        className={`mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
          Seu próximo treino não precisa ser uma disputa contra o relógio.
        </h2>
        <p className="mt-5 text-lg text-gray-muted">
          Entenda o que o seu pace está dizendo e use cada corrida com mais
          intenção.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton location="final">Quero acessar por {PRODUCT_PRICE}</CTAButton>
        </div>
      </div>
    </section>
  )
}
