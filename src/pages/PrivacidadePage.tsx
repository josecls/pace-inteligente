import { Link } from 'react-router-dom'
import { LegalLayout } from '../components/LegalLayout'
import { PRODUCT_NAME } from '../lib/constants'

export function PrivacidadePage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      description="Como tratamos seus dados ao acessar e comprar o Pace Inteligente."
      path="/privacidade"
    >
      <p>
        Esta Política de Privacidade descreve como dados pessoais são coletados e utilizados
        quando você visita o site do {PRODUCT_NAME} ou realiza uma compra.
      </p>

      <h2 className="font-heading text-xl font-bold text-navy">1. Dados que podemos coletar</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Dados de navegação (páginas visitadas, origem da visita, dispositivo e navegador).</li>
        <li>Parâmetros de campanha (UTM) para entender de onde veio o acesso.</li>
        <li>
          Dados informados no checkout — nome, e-mail, telefone e pagamento — tratados
          diretamente pela Lowify, plataforma responsável pela transação.
        </li>
      </ul>

      <h2 className="font-heading text-xl font-bold text-navy">2. Finalidade do tratamento</h2>
      <p>Utilizamos os dados para:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>operar e melhorar o site;</li>
        <li>medir desempenho de campanhas (quando ferramentas como Meta Pixel estiverem ativas);</li>
        <li>permitir a entrega do produto digital após a compra.</li>
      </ul>

      <h2 className="font-heading text-xl font-bold text-navy">3. Compartilhamento</h2>
      <p>
        Dados de pagamento e entrega são processados pela Lowify, conforme a política
        própria dessa plataforma. Podemos utilizar serviços de hospedagem (Vercel) e
        analytics (Meta Pixel, quando configurado) que operam como processadores de dados.
      </p>

      <h2 className="font-heading text-xl font-bold text-navy">4. Cookies e tecnologias similares</h2>
      <p>
        Ferramentas de analytics podem usar cookies ou identificadores para medir visitas e
        conversões. Você pode gerenciar cookies nas configurações do seu navegador.
      </p>

      <h2 className="font-heading text-xl font-bold text-navy">5. Seus direitos</h2>
      <p>
        Nos termos da LGPD, você pode solicitar acesso, correção ou exclusão de dados
        pessoais tratados por nós. Para dúvidas sobre dados de compra, consulte também o
        suporte da Lowify.
      </p>

      <h2 className="font-heading text-xl font-bold text-navy">6. Contato</h2>
      <p>
        Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, acesse a página
        de <Link to="/contato" className="text-turquoise underline hover:text-turquoise/80">Contato</Link>.
      </p>
    </LegalLayout>
  )
}
