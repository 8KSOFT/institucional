'use client';
import FadeIn from '../Animation/FadeIn';
import { motion } from 'framer-motion';
import ClientOnly from '../ClientOnly/ClientOnly';

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <ClientOnly>
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-center">Fale Conosco</h2>
            <p className="text-lg mb-12 text-center text-gray-300">
              Vamos transformar suas ideias em realidade? Entre em contato e descubra como podemos ajudar seu negócio.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn direction="left">
              <div className="bg-background/50 p-8 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold mb-6 text-primary">Informações de Contato</h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href="mailto:contato@8ksoft.com.br"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      contato@8ksoft.com
                    </a>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <a href="tel:+551199999999" className="text-gray-300 hover:text-primary transition-colors">
                    (51) 9-8587-5908
                    </a>
                  </motion.div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <form className="bg-background/50 p-8 rounded-lg border border-primary/20">
                <div className="space-y-6">
                  {['name', 'email', 'message'].map((field, index) => (
                    <motion.div
                      key={field}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-2">
                        {field === 'name' ? 'Nome' : field === 'email' ? 'E-mail' : 'Mensagem'}
                      </label>
                      {field === 'message' ? (
                        <textarea
                          id={field}
                          rows={4}
                          className="w-full px-4 py-2 bg-zinc-900/50 border border-primary/20 rounded-lg 
                                 text-gray-300 focus:outline-none focus:border-primary/40 transition-colors"
                          placeholder="Como podemos ajudar?"
                        />
                      ) : (
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          id={field}
                          className="w-full px-4 py-2 bg-zinc-900/50 border border-primary/20 rounded-lg 
                                 text-gray-300 focus:outline-none focus:border-primary/40 transition-colors"
                          placeholder={field === 'name' ? 'Seu nome' : 'seu@email.com'}
                        />
                      )}
                    </motion.div>
                  ))}

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-background rounded-lg font-semibold 
                           hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enviar Mensagem
                  </motion.button>
                </div>
              </form>
            </FadeIn>
          </div>
        </ClientOnly>
      </div>
    </section>
  );
}
