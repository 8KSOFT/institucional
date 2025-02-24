import { IProject } from '@/app/interfaces/IProjects';

const projects: IProject[] = [
  {
    name: 'Plataforma Sistema Federal',
    description: 'Plataforma completa de ensino com gestão de cursos e alunos de concursos federais.',
    image: '/images/projects/plataforma-qb/project-plataforma-qb-1.png',
    tags: ['Next.js', 'Node.js', 'Oracle Cloud', 'Docker'],
    url: '#',
    detailedDescription:
      'Uma plataforma inovadora para concurseiros, oferecendo aulas e simulados com correção de redações por IA em tempo real. Esta solução revoluciona a forma de estudar para concursos, proporcionando uma experiência de aprendizado personalizada e eficiente.',
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
    name: 'Auroque Agendamentos de consultores',
    description: 'Aplicação web para agendamentos de consultores de investimento.',
    image: '/images/projects/auroque/project-auroque-1.png',
    tags: ['Next.js', 'Node.js', 'Oracle Cloud', 'Docker'],
    url: '#',
    detailedDescription:
      'Uma aplicação que facilita o agendamento de entrevistas com consultores de investimento. Os usuários podem marcar suas entrevistas de forma simples e rápida, enquanto o administrador tem acesso a uma ferramenta robusta para gerenciar todos os agendamentos, garantindo uma experiência eficiente e organizada para todos os envolvidos.',
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
