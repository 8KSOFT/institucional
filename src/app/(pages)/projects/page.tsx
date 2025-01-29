'use client';
import FadeIn from '@/app/components/Animation/FadeIn';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Plataforma Sistema Federal',
    description:
      'Plataforma completa de ensino com gestão de cursos e alunos de concursos federais.',
    image: '/images/projects/project-simulado-federal.png',
    tags: ['Next.js', 'Node.js', 'Oracle Cloud'],
    url: '#',
  },
  {
    name: 'Auroque Agendamentos de consultores',
    description: 'Aplicação web para agendamentos de consultores de investimento.',
    image: '/images/projects/project-auroque.png',
    tags: ['Next.js', 'Node.js', 'Oracle Cloud'],
    url: '#',
  },
  // Adicione mais projetos conforme necessário
];

export default function Projects() {
  return (
    <main className="container mx-auto px-4 pt-32 pb-20">
      <FadeIn>
        <h1 className="text-4xl font-bold text-center mb-4">Nossos Projetos</h1>
        <p className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Conheça alguns dos projetos que desenvolvemos, demonstrando nossa expertise em criar soluções tecnológicas
          inovadoras.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <FadeIn key={project.name} direction="up" delay={index * 0.1}>
            <motion.div
              className="h-[400px] bg-background/50 rounded-lg border border-primary/20 overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 text-primary">{project.name}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Ver detalhes
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
