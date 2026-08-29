import { IProduct } from '@/app/interfaces/IProducts';

const products: IProduct[] = [
  {
    name: '8KHOST',
    description:
      'Hospedagem PaaS com deploy via Git, banco e cache inclusos — e um MCP que deixa sua IA publicar por você, sem precisar saber Docker.',
    // PROVISÓRIO: card de marca. Substituir por prints reais do dashboard,
    // da tela de deploy e da seção de MCP em plataforma.8ksoft.com.
    image: '/images/products/8khost/product-8khost-placeholder.png',
    tags: ['PaaS', 'Oracle Cloud', 'MCP', 'CLI', 'Docker'],
    url: 'https://plataforma.8ksoft.com',
    detailedDescription:
      'Plataforma de hospedagem de containers da 8KSOFT, construída sobre Oracle Cloud Infrastructure. Publique com git push ou pelo CLI 8k, com PostgreSQL e Redis provisionados automaticamente, secrets isolados por app e rollback instantâneo. Tem um servidor MCP nativo — conecta direto no Claude, Cursor ou qualquer agente de IA, então também dá para publicar, ver logs e fazer deploy sem sair do chat com a sua IA. Planos Starter, Growth e Pro.',
    images: ['/images/products/8khost/product-8khost-placeholder.png'],
    features: [
      'Deploy via git push (webhook) ou pelo CLI 8k',
      'PostgreSQL, Redis e Object Storage provisionados automaticamente em cada app',
      'Secrets por ambiente, nunca expostos em log ou no portal',
      'Rollback instantâneo para qualquer build anterior',
      'Domínio customizado com SSL automático',
      'Servidor MCP nativo: Claude, Cursor ou Claude Desktop publicam, leem logs e fazem deploy direto do chat',
      'Onboarding assistido por IA: cole um prompt na sua IA de código e ela configura e publica o projeto sozinha',
    ],
    technologies: [
      'Oracle Cloud Infrastructure (OCI)',
      'Docker',
      'PostgreSQL',
      'Redis',
      'MCP (Model Context Protocol)',
    ],
  },
  {
    name: 'NixVetApp',
    description:
      'Sistema de gestão para clínicas veterinárias: prontuário, agenda e financeiro integrados, com atendimento automático no WhatsApp.',
    image: '/images/products/nixvetapp/product-nixvetapp-1-prontuario.png',
    tags: ['Next.js', 'Node.js', 'IA', 'WhatsApp', 'Android'],
    url: 'https://nixvetapp.com.br',
    detailedDescription:
      'Produto próprio da 8KSOFT para clínicas e hospitais veterinários. Reúne prontuário eletrônico, agenda e financeiro em um só sistema e atende os clientes da clínica diretamente pelo WhatsApp: marca consulta, tira dúvidas e envia lembretes de vacina e retorno sem depender da recepção. Disponível em três planos (Essencial, Clínica e Hospital), com 14 dias de teste grátis. A equipe da clínica também conta com aplicativo nativo para Android, já publicado na Play Store (play.google.com/store/apps/details?id=com.nixvetapp.equipe); a versão para iOS está em desenvolvimento.',
    images: [
      '/images/products/nixvetapp/product-nixvetapp-1-prontuario.png',
      '/images/products/nixvetapp/product-nixvetapp-2-agenda.png',
      '/images/products/nixvetapp/product-nixvetapp-3-whatsapp.png',
      '/images/products/nixvetapp/product-nixvetapp-4-financeiro.png',
    ],
    features: [
      'Prontuário eletrônico completo, com histórico por paciente',
      'Agenda com visão mensal de toda a clínica',
      'Atendimento automático no WhatsApp, com IA marcando consultas e respondendo dúvidas',
      'Financeiro com contas a pagar, a receber e fluxo de caixa sempre atualizados',
      'Receitas e pedidos de exame em PDF com assinatura digital',
      'Segurança e conformidade com a LGPD (dados criptografados e logs de auditoria)',
      'Aplicativo nativo para Android disponível na Play Store',
      'Aplicativo para iOS em desenvolvimento',
    ],
    technologies: [
      'React/Next.js para frontend',
      'Node.js no backend',
      'IA integrada ao WhatsApp para atendimento automático',
      'Criptografia AES-256',
    ],
  },
];

export default products;
