import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import { useInView } from '../lib/useInView'

const faqs = [
  {
    question: 'O Pace Inteligente é uma planilha de treino?',
    answer:
      'Não. É um guia educacional para ajudar você a interpretar ritmo, esforço e recuperação. Ele não oferece prescrição individualizada.',
  },
  {
    question: 'Vou baixar meu pace depois de ler?',
    answer:
      'O e-book não promete um resultado específico. Ele apresenta princípios que ajudam a tomar decisões melhores e entender o que pode influenciar seu ritmo.',
  },
  {
    question: 'Serve para quem está começando?',
    answer:
      'Sim. A linguagem é simples e os exemplos foram pensados para corredores iniciantes e recreativos.',
  },
  {
    question: 'Como recebo o material?',
    answer:
      'Após a confirmação do pagamento, a Lowify envia as instruções de acesso por e-mail e WhatsApp.',
  },
  {
    question: 'Consigo ler pelo celular?',
    answer:
      'Sim. O arquivo é um PDF e pode ser aberto em celular, tablet ou computador.',
  },
  {
    question: 'O conteúdo substitui treinador, médico ou nutricionista?',
    answer:
      'Não. O material é educacional e não substitui avaliação, diagnóstico ou orientação individual de profissionais habilitados.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div className="border-b border-navy/10 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-heading text-base font-semibold text-navy sm:text-lg">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-turquoise transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        hidden={!open}
        className="pb-5 text-gray-muted leading-relaxed"
      >
        {answer}
      </div>
    </div>
  )
}

export function FAQ() {
  const { ref, isVisible } = useInView()

  return (
    <section id="faq" ref={ref} className="bg-white py-20 sm:py-28">
      <div className={`mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <h2 className="text-center font-heading text-3xl font-bold text-navy sm:text-4xl">
          Dúvidas frequentes
        </h2>

        <div className="mt-10 rounded-3xl border border-navy/8 bg-cream/30 px-6 sm:px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
