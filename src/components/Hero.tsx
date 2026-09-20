import { BookOpen, Clock, Zap } from 'lucide-react'
import { CTAButton } from './CTAButton'
import { PRODUCT_PRICE } from '../lib/constants'

const signals = [
  { icon: Clock, label: 'Leitura rápida' },
  { icon: Zap, label: 'Aplicação prática' },
  { icon: BookOpen, label: 'Sem fórmulas complicadas' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden bg-navy-deep pt-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-[center_30%] sm:bg-[center_20%] md:bg-right"
        style={{ backgroundImage: "url('/assets/hero-runner.webp')" }}
        role="img"
        aria-label="Corredora observando o relógio durante uma corrida"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/20 md:via-navy-deep/70 md:to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-24 lg:min-h-[calc(92vh-6rem)] lg:px-8">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-turquoise uppercase">
            E-BOOK PRÁTICO PARA CORREDORES
          </p>
          <h1 className="font-heading text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-[3.25rem]">
            Pare de transformar todo treino em prova.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/85">
            Aprenda a interpretar seu pace, controlar o esforço e tomar decisões
            mais inteligentes antes, durante e depois da corrida.
          </p>

          <div className="mt-8">
            <CTAButton location="hero">Quero correr com mais estratégia</CTAButton>
            <p className="mt-3 text-sm text-white/70">
              Acesso imediato • PDF ilustrado • Apenas {PRODUCT_PRICE}
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-4">
            {signals.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
              >
                <Icon size={16} className="text-turquoise" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
