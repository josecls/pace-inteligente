import { Check, X } from 'lucide-react'
import { useInView } from '../lib/useInView'

const forYou = [
  'está começando ou voltando a correr;',
  'já completa 3 km, 5 km ou 10 km e quer entender melhor o ritmo;',
  'sente que corre todos os treinos no limite;',
  'gosta de conteúdo curto, visual e prático.',
]

const notForYou = [
  'procura uma planilha personalizada;',
  'espera uma promessa de pace garantido;',
  'precisa de diagnóstico ou tratamento de dor;',
  'quer substituir acompanhamento profissional.',
]

export function Audience() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="bg-cream py-20 sm:py-28">
      <div
        className={`mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 sm:grid-cols-2 lg:px-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <article className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-navy">
            É para você se...
          </h2>
          <ul className="mt-6 space-y-3">
            {forYou.map((item) => (
              <li key={item} className="flex gap-3 text-text-dark">
                <Check size={20} className="mt-0.5 shrink-0 text-turquoise" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-navy/10 bg-white/60 p-8">
          <h2 className="font-heading text-xl font-bold text-navy">
            Não é para você se...
          </h2>
          <ul className="mt-6 space-y-3">
            {notForYou.map((item) => (
              <li key={item} className="flex gap-3 text-gray-muted">
                <X size={20} className="mt-0.5 shrink-0 text-coral/70" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
