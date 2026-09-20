import { useInView } from '../lib/useInView'

const painPoints = [
  'Você começa rápido e perde ritmo no final.',
  'Toda corrida parece mais difícil do que deveria.',
  'O relógio dita o treino, mesmo quando o corpo pede controle.',
  'Um dia ruim vira motivo para mudar tudo.',
]

export function ProblemSection() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="bg-cream py-20 sm:py-28">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-coral uppercase">
            O ERRO MAIS COMUM
          </p>
          <h2 className="font-heading text-3xl leading-tight font-bold text-navy sm:text-4xl">
            Correr forte todos os dias não significa evoluir mais rápido.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-muted">
            Muitos corredores começam empolgados, perseguem o relógio em toda
            saída e terminam acumulando cansaço. Quando o pace não melhora, a
            conclusão parece ser falta de condicionamento — mas o problema pode
            estar na forma de organizar o esforço.
          </p>
          <ul className="mt-6 space-y-3">
            {painPoints.map((item) => (
              <li key={item} className="flex gap-3 text-text-dark">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-heading text-xl font-bold text-navy">
            Pace é dado. Esforço dá contexto.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/comic-erro.webp"
            alt="Quadrinho ilustrando a armadilha de tratar cada treino como prova"
            width={560}
            height={560}
            loading="lazy"
            className="w-full max-w-md rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}
