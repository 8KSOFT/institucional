import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '8KSOFT - Política de Privacidade',
  description: 'Política de privacidade e uso de cookies do site institucional da 8KSOFT.',
};

export default function PrivacidadePage() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-3xl space-y-8 text-gray-300">
        <h1 className="text-3xl font-bold text-white">Política de Privacidade</h1>
        <p className="text-sm text-gray-400">Última atualização: 28 de agosto de 2026</p>

        <p>
          Esta política explica quais dados o site da 8KSOFT coleta, para que servem e como você pode exercer seus
          direitos, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
        </p>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">1. Dados que coletamos</h2>
          <p>
            <strong>Formulário de contato:</strong> quando você preenche o formulário de Fale Conosco, coletamos
            nome, e-mail e a mensagem enviada, para responder ao seu contato.
          </p>
          <p>
            <strong>Cookies e analytics:</strong> com o seu consentimento, utilizamos o Google Analytics (GA4) para
            entender como os visitantes usam o site (páginas visitadas, tempo de navegação, origem do acesso), de
            forma agregada e anônima. Esses dados só começam a ser coletados depois que você aceita o banner de
            cookies exibido no site.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">2. Como usamos seus dados</h2>
          <p>
            Usamos os dados do formulário de contato exclusivamente para responder à sua solicitação. Usamos os
            dados de analytics para melhorar o conteúdo e a experiência de navegação no site.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">3. Compartilhamento</h2>
          <p>
            Não vendemos seus dados pessoais. O Google Analytics processa dados de navegação como nosso operador,
            conforme a{' '}
            <a
              href="https://business.safety.google/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80"
            >
              política de privacidade do Google
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">4. Seus direitos</h2>
          <p>
            Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento, além de revogar o
            consentimento de cookies limpando os dados de navegação do seu navegador para este site. Para exercer
            esses direitos, entre em contato pelo e-mail{' '}
            <a href="mailto:contato@8ksoft.com" className="text-primary underline hover:text-primary/80">
              contato@8ksoft.com
            </a>
            .
          </p>
        </div>

        <p className="text-sm text-gray-500">
          Este texto é um modelo inicial e deve ser revisado por um profissional jurídico antes da publicação
          definitiva, para garantir total conformidade com a LGPD e a realidade do tratamento de dados da 8KSOFT.
        </p>
      </div>
    </section>
  );
}
