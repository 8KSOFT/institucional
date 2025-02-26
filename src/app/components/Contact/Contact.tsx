'use client';

import { useContactForm } from '@/hooks/useContactForm';
import ClientOnly from '../ClientOnly/ClientOnly';
import FadeIn from '../Animation/FadeIn';
import { motion } from 'framer-motion';

export default function Contact() {
  const { formState, setFormState, handleSubmit } = useContactForm();

  return (
    <ClientOnly>
      <section id="contact" className="container mx-auto px-4 py-20 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
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
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <a
                      href="https://8ksoft.atlassian.net/servicedesk/customer/portal/2"
                      className="text-gray-300 hover:text-primary transition-colors"
                      target="_blank"
                    >
                      Suporte Técnico
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a href="mailto:lucopdev@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
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
              <form onSubmit={handleSubmit} className="bg-background/50 p-8 rounded-lg border border-primary/20">
                <div className="space-y-6">
                  {[
                    {
                      id: 'name',
                      label: 'Nome',
                      type: 'text',
                      placeholder: 'Seu nome',
                      value: formState.name,
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormState((prev) => ({ ...prev, name: e.target.value })),
                    },
                    {
                      id: 'email',
                      label: 'E-mail',
                      type: 'email',
                      placeholder: 'seu@email.com',
                      value: formState.email,
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormState((prev) => ({ ...prev, email: e.target.value })),
                    },
                  ].map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        value={field.value}
                        onChange={field.onChange}
                        className="w-full px-4 py-2 bg-zinc-900/50 border border-primary/20 rounded-lg 
                               text-gray-300 focus:outline-none focus:border-primary/40 transition-colors"
                        placeholder={field.placeholder}
                        required
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-2 bg-zinc-900/50 border border-primary/20 rounded-lg 
                             text-gray-300 focus:outline-none focus:border-primary/40 transition-colors 
                             resize-none"
                      placeholder="Como podemos ajudar?"
                      required
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={formState.status === 'sending'}
                    className={`w-full px-6 py-3 rounded-lg font-semibold 
                    transition-colors ${
                      formState.status === 'sending'
                        ? 'bg-primary/50 cursor-not-allowed'
                        : 'bg-primary text-background hover:bg-primary/90'
                    }`}
                    whileHover={{ scale: formState.status !== 'sending' ? 1.02 : 1 }}
                    whileTap={{ scale: formState.status !== 'sending' ? 0.98 : 1 }}
                  >
                    {formState.status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                  </motion.button>

                  {formState.status === 'success' && (
                    <div className="text-green-500 text-center mt-4">Mensagem enviada com sucesso!</div>
                  )}
                  {formState.status === 'error' && (
                    <div className="text-red-500 text-center mt-4">Erro ao enviar mensagem. Tente novamente.</div>
                  )}
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </ClientOnly>
  );
}
