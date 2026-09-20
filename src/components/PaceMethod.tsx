import { useInView } from '../lib/useInView'

const cards = [
  {
    letter: 'P',
    title: 'Perceba',
    text: 'Observe respiração, teste da fala e sensação de esforço. O relógio confirma; o corpo contextualiza.',
  },
  {
    letter: 'A',
    title: 'Alterne',
    text: 'Corridas leves e sessões fortes têm funções diferentes. Nem todo dia pede o mesmo ritmo.',
  },
  {
    letter: 'C',
    title: 'Construa',
    text: 'Consistência vem antes de heroísmo. Volume, intensidade e frequência não precisam subir juntos.',
  },
  {
    letter: 'E',
    title: 'Evolua',
    text: 'Registre padrões, recupere e ajuste. Progresso é uma tendência, não um treino isolado.',
  },
]

export function PaceMethod() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28">
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-turquoise uppercase">
            UM MÉTODO SIMPLES DE LEMBRAR
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Use o método P.A.C.E. para tomar decisões melhores.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.letter}
              className="rounded-2xl border border-navy/8 bg-cream/50 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="font-heading text-3xl font-extrabold text-turquoise">
                {card.letter}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold text-navy">
                — {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-muted">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
