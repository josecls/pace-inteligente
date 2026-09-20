import { LegalLayout } from '../components/LegalLayout'
import { PRODUCT_NAME, PRODUCT_PRICE } from '../lib/constants'

export function TermosPage() {
  return (
    <LegalLayout
      title="Termos de Uso"
      description="Termos de uso do e-book Pace Inteligente."
      path="/termos"
    >
      <p>
        Ao adquirir e utilizar o {PRODUCT_NAME}, você concorda com estes Termos de Uso.
        Leia-os com atenção antes de concluir a compra.
      </p>

      <h2 className="font-heading text-xl font-bold text-navy">1. Objeto</h2>
      <p>
        O {PRODUCT_NAME} é um material educacional em formato PDF, destinado a corredores
        iniciantes e recreativos. O conteúdo aborda interpretação de pace, percepção de
        esforço, recuperação e organização de treino de forma geral.
      </p>

      <h2 className="font-heading text-xl font-bold text-navy">2. Natureza educacional</h2>
      <p>
        O material <strong>não constitui prescrição de treino</strong>, planilha
        personalizada, diagnóstico médico, orientação nutricional individualizada ou
        substituto de acompanhamento por profissionais habilitados (médicos, fisioterapeutas,
        nutricionistas ou treinadores).
      </p>

      <h2 className="font-heading text-xl font-bold text-navy">3. Compra e entrega</h2>
      <p>
        A compra é processada pela plataforma Lowify. Após a confirmação do pagamento, o
        acesso ao material é enviado por e-mail e WhatsApp cadastrados no checkout. O preço
        vigente na data da compra é {PRODUCT_PRICE}.
      </p>

      <h2 className="font-heading text-xl font-bold text-navy">4. Uso permitido</h2>
      <p>
        O PDF é licenciado para uso pessoal e não comercial. É proibida a redistribuição,
        revenda, compartilhamento público ou reprodução do conteúdo sem autorização prévia.
      </p>

      <h2 className="font-heading text-xl font-bold text-navy">5. Isenção de garantias</h2>
      <p>
        O {PRODUCT_NAME} não promete resultados específicos de performance, pace ou
        condicionamento. Cada corredor responde de forma diferente ao treino. Consulte um
        profissional antes de iniciar ou alterar sua rotina, especialmente se tiver
        condições de saúde preexistentes.
      </p>

      <h2 className="font-heading text-xl font-bold text-navy">6. Alterações</h2>
      <p>
        Estes termos podem ser atualizados periodicamente. A versão vigente estará sempre
        disponível nesta página.
      </p>
    </LegalLayout>
  )
}
