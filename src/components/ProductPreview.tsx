import { useInView } from '../lib/useInView'

const badges = [
  '17 páginas',
  'Ilustrações originais',
  'Tabela de pace para 5 km',
  'Protocolo de observação por 7 dias',
]

export function ProductPreview() {
  const { ref, isVisible } = useInView()

  return (
    <section id="preview" ref={ref} className="bg-cream py-20 sm:py-28">
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-coral uppercase">
            POR DENTRO DO E-BOOK
          </p>
          <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">
            Visual, direto e construído para ser consultado de verdade.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-muted">
            São 17 páginas com quadrinhos, tabelas, exemplos e checklists. Você
            pode ler de uma vez ou voltar às páginas-chave antes e depois dos
            seus treinos.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/assets/pages-preview.webp"
            alt="Prévia de quatro páginas internas do e-book Pace Inteligente"
            width={1200}
            height={675}
            loading="lazy"
            className="h-auto w-full"
          />
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {badges.map((badge) => (
            <li
              key={badge}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
