'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import projects from '@/app/data/projects';
import { IProject } from '@/app/interfaces/IProjects';
import FadeIn from '@/app/components/Animation/FadeIn';

function ProjectModal({ project, onClose }: { project: IProject; onClose: () => void }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-background max-w-4xl w-full rounded-lg overflow-hidden"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-64 md:h-96">
            {project.images && (
              <>
                <Image src={project.images[currentImage]} alt={project.name} fill className="object-contain" />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-primary' : 'bg-gray-500'}`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-primary">{project.name}</h2>
              <button onClick={onClose} className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-gray-300 mb-6">{project.detailedDescription}</p>

            {project.features && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Funcionalidades</h3>
                <ul className="list-disc list-inside text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.technologies && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors"
            >
              Visitar Projeto
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

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

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Ver detalhes
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  );
}
