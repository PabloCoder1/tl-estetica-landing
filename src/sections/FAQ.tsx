// src/sections/FAQ.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

const faqs = [
  {
    question: "O procedimento de remoção de estrias dói?",
    answer: "Utilizamos técnicas e anestésicos tópicos de alta qualidade para garantir o máximo de conforto durante todo o procedimento. A maioria das nossas clientes relata apenas um leve incômodo, perfeitamente suportável."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer: "Isso varia de acordo com o tipo, tempo e grau da estria. Por isso, oferecemos uma avaliação personalizada pelo WhatsApp para entender o seu caso específico e montar o melhor protocolo de tratamento para a sua pele."
  },
  {
    question: "Posso tomar sol após o procedimento?",
    answer: "É necessário evitar a exposição solar direta nos primeiros dias e usar protetor solar rigorosamente. Passaremos todas as orientações pós-procedimento para garantir uma cicatrização perfeita e segura para você curtir as praias da região depois."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // A primeira já começa aberta

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-lg text-stone-600">
            Tudo o que você precisa saber antes de dar o primeiro passo para renovar sua pele.
          </p>
        </div>

        {/* Lista de Perguntas (Accordion) */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#eed6cc] rounded-2xl overflow-hidden bg-[#fdf8f6]/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-stone-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#c27355]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-stone-700 leading-relaxed border-t border-[#eed6cc]/30">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Chamada Final (CTA) na seção de FAQ */}
        <div className="text-center p-8 bg-[#fdf8f6] rounded-3xl border border-[#eed6cc]/50 mt-12">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Pronta para a sua transformação?</h3>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">
            Não deixe sua autoestima para depois. Clique abaixo e fale diretamente comigo para agendarmos sua avaliação.
          </p>
          <WhatsAppButton text="Falar com a Thuany no WhatsApp" />
        </div>

      </div>
    </section>
  )
}