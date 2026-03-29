// src/sections/Benefits.tsx
'use client'

import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, HeartPulse } from 'lucide-react'

// Array de dados com a copy estratégica que definimos
const benefits = [
  {
    icon: <Sparkles className="w-8 h-8 text-[#c27355]" />,
    title: "Método Avançado",
    description: "Esqueça cremes que não funcionam. Utilizamos tecnologia de ponta que trata a estria de dentro para fora, estimulando a regeneração natural da pele."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#c27355]" />,
    title: "Procedimento Seguro",
    description: "Sem cirurgias ou internações. Você faz o procedimento e pode voltar à sua rotina rapidamente, seguindo cuidados simples pós-sessão."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-[#c27355]" />,
    title: "Resultados Visíveis",
    description: "Acompanhamento de perto. Desde a primeira sessão, trabalhamos focados em entregar a melhor versão da sua pele e recuperar sua autoestima."
  }
]

export function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Muito mais que estética, um resgate do seu <span className="text-[#c27355]">amor-próprio.</span>
          </h2>
          <p className="text-lg text-stone-600">
            Por que o método da Thuany Lima é a escolha certa para você na Baixada Santista?
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#fdf8f6] p-8 rounded-2xl border border-[#eed6cc]/40 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{benefit.title}</h3>
              <p className="text-stone-700 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}