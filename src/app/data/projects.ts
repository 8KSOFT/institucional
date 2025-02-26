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
    name: 'Sistema de Agendamento de Entrevistas',
    description: 'Aplicação web para agendamento de entrevistas e gestão do time de RH.',
    client: 'Auroque Investimentos',
    image: '/images/projects/auroque/project-auroque-1.png',
    tags: ['Next.js', 'Node.js', 'Oracle Cloud', 'Docker'],
    url: 'https://agendamentos.auroqueinvestimentos.com.br/auth',
    detailedDescription:
      "Uma aplicação web que facilita o agendamento de entrevistas e a gestão do time de RH. Os usuários podem marcar suas entrevistas de forma simples e rápida, enquanto os administradores têm acesso a uma ferramenta robusta para gerenciar todos os agendamentos e coordenar as atividades da equipe de Recursos Humanos, garantindo uma experiência eficiente e organizada para todos os envolvidos.",
    images: [
      '/images/projects/auroque/project-auroque-1.png',
      '/images/projects/auroque/project-auroque-2.png',
      '/images/projects/auroque/project-auroque-3.png',
    ],
    features: ['Dashboard em tempo real', 'Integração com múltiplos bancos', 'Relatórios personalizados'],
    technologies: [
      'React/Next.js para frontend',
      'Node.js com Express no backend',
      'Oracle Cloud para infraestrutura',
      'Containerização via Docker',
    ],
  },
];

export default projects;
