import { IProject } from '@/app/interfaces/IProjects';

const projects: IProject[] = [
  {
    name: 'Plataforma EAD com uso de IA',
    description: 'Plataforma completa de EAD, com uso de Inteligência artificial para correções de redações e acompanhamento de estudos dos alunos.',
    client: 'Quebrando as Bancas',
    image: '/images/projects/plataforma-qb/project-plataforma-qb-1.png',
    tags: ['Next.js', 'Node.js', 'Oracle Cloud', 'Docker'],
    url: 'https://plataforma.quebrandoasbancas.com/',
    detailedDescription:
      'Uma plataforma inovadora para concurseiros, oferecendo aulas e simulados com correção de redações por IA em tempo real. Esta solução revoluciona a forma de estudar, proporcionando uma experiência de aprendizado personalizada e eficiente.',
    images: [
      '/images/projects/plataforma-qb/project-plataforma-qb-1.png',
      '/images/projects/plataforma-qb/project-plataforma-qb-2.png',
      '/images/projects/plataforma-qb/project-plataforma-qb-3.png',
      '/images/projects/plataforma-qb/project-plataforma-qb-4.png',
    ],
    features: ['Dashboard em tempo real', 'Integração com múltiplos bancos', 'Relatórios personalizados'],
    technologies: [
      'React/Next.js para frontend',
      'Node.js com Express no backend',
      'Oracle Cloud para infraestrutura',
      'Containerização via Docker',
    ],
  },
  {
    name: 'Rota191 — Jogo de Questões para o Concurso da PRF',
    description:
      'Jogo multiplayer online e gratuito para quem estuda para o concurso da Polícia Rodoviária Federal, com questões em tempo real e ranking ao vivo.',
    client: 'Quebrando as Bancas',
    image: '/images/projects/rota191/project-rota191-1.png',
    tags: ['Next.js', 'Node.js', 'Oracle Cloud', 'Docker'],
    url: 'https://rota191.com.br',
    detailedDescription:
      'O Rota191 transforma o estudo para o concurso da PRF em um jogo: os candidatos entram em salas, competem em tempo real com outros concurseiros de todo o Brasil e resolvem questões de provas anteriores e questões inéditas, cobrindo as principais matérias do edital. 100% gratuito e direto do navegador, sem instalação.',
    images: [
      '/images/projects/rota191/project-rota191-1.png',
      '/images/projects/rota191/project-rota191-2.png',
    ],
    features: [
      'Salas multiplayer com disputa em tempo real',
      'Questões de provas anteriores e questões inéditas da PRF',
      'Ranking geral ao vivo, com sequência de dias consecutivos jogados',
      '100% gratuito, direto do navegador, sem instalar nada',
    ],
    technologies: [
      'React/Next.js para frontend',
      'Node.js com Express no backend',
      'Oracle Cloud para infraestrutura',
      'Containerização via Docker',
    ],
  },
  {
    name: 'Sistema de Seleção de Assessores de Investimentos',
    description:
      'Plataforma de recrutamento com jornada personalizada de 7 etapas para selecionar novos Assessores de Investimentos.',
    client: 'Auroque Investimentos',
    image: '/images/projects/auroque-selecao/project-auroque-selecao-1.png',
    tags: ['Next.js', 'Node.js', 'Oracle Cloud', 'Docker'],
    url: 'https://selecao.auroqueinvestimentos.com.br/',
    detailedDescription:
      'Evolução do antigo sistema de agendamento de entrevistas: hoje a Auroque Investimentos conta com uma plataforma própria para conduzir todo o processo seletivo de novos Assessores de Investimentos. Os candidatos criam conta e acompanham uma trajetória personalizada de 7 etapas, enquanto o time de RH gerencia todo o processo de forma centralizada.',
    images: ['/images/projects/auroque-selecao/project-auroque-selecao-1.png'],
    features: [
      'Login e criação de conta para candidatos',
      'Trajetória personalizada de 7 etapas no processo seletivo',
      'Gestão centralizada dos candidatos para o time de RH',
    ],
    technologies: [
      'React/Next.js para frontend',
      'Node.js com Express no backend',
      'Oracle Cloud para infraestrutura',
      'Containerização via Docker',
    ],
  },
];

export default projects;
