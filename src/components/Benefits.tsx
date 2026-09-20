import { CheckCircle2 } from 'lucide-react'
import { CTAButton } from './CTAButton'
import { useInView } from '../lib/useInView'

const items = [
  'Como calcular e interpretar o pace sem virar refém do número.',
  'Como reconhecer esforço leve, sustentado e forte.',
  'Os 7 erros que costumam travar a evolução de corredores recreativos.',
  'Como analisar uma corrida em apenas 5 minutos.',
  'Como distribuir melhor o esforço em uma prova de 5 km.',
  'Princípios simples de alimentação, hidratação e recuperação.',
]

export function Benefits() {
  const { ref, isVisible } = useInView()

  return (
    <section id="beneficios" ref={ref} className="bg-navy py-20 sm:py-28">
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="mx-auto max-w-3xl text-center font-heading text-3xl font-bold text-white sm:text-4xl">
          Em poucos minutos, você vai entender o que o relógio sozinho não explica.
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl bg-white/8 p-5 text-white/90 backdrop-blur-sm"
            >
              <CheckCircle2
                size={22}
                className="mt-0.5 shrink-0 text-turquoise"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <CTAButton location="benefits" variant="turquoise">
            Quero acessar o Pace Inteligente
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
