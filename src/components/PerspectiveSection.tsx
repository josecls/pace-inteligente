import { useInView } from '../lib/useInView'

const beforeItems = [
  'Perseguir o mesmo pace todos os dias.',
  'Avaliar a corrida apenas pelo tempo final.',
  'Confundir cansaço com produtividade.',
  'Mudar tudo depois de um treino ruim.',
]

const afterItems = [
  'Definir a intenção antes de sair.',
  'Usar esforço e contexto junto com o pace.',
  'Entender que recuperação faz parte do processo.',
  'Comparar tendências ao longo das semanas.',
]

export function PerspectiveSection() {
  const { ref, isVisible } = useInView()

  return (
    <section ref={ref} className="bg-white py-20 sm:py-28">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      >
        <div className="order-2 lg:order-1">
          <img
            src="/assets/comic-inteligente.webp"
            alt="Quadrinho sobre controlar o esforço em vez de perseguir números"
            width={560}
            height={560}
            loading="lazy"
            className="w-full max-w-md rounded-2xl"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            O objetivo não é vencer o treino. É usar o treino para estar mais
            preparado.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-coral/20 bg-coral/5 p-5">
              <h3 className="font-heading text-sm font-bold tracking-wide text-coral uppercase">
                Antes
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-text-dark">
                {beforeItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-coral" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-turquoise/20 bg-turquoise/5 p-5">
              <h3 className="font-heading text-sm font-bold tracking-wide text-turquoise uppercase">
                Depois
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-text-dark">
                {afterItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-turquoise" aria-hidden>
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
