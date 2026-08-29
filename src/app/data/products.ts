import { IProduct } from '@/app/interfaces/IProducts';

const products: IProduct[] = [
  {
    name: 'NixVetApp',
    description:
      'Sistema de gestão para clínicas veterinárias: prontuário, agenda e financeiro integrados, com atendimento automático no WhatsApp.',
    image: '/images/products/nixvetapp/product-nixvetapp-1-prontuario.png',
    tags: ['Next.js', 'Node.js', 'IA', 'WhatsApp'],
    url: 'https://nixvetapp.com.br',
    detailedDescription:
      'Produto próprio da 8KSOFT para clínicas e hospitais veterinários. Reúne prontuário eletrônico, agenda e financeiro em um só sistema e atende os clientes da clínica diretamente pelo WhatsApp: marca consulta, tira dúvidas e envia lembretes de vacina e retorno sem depender da recepção. Disponível em três planos (Essencial, Clínica e Hospital), com 14 dias de teste grátis.',
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
