// src/sections/Qualification.tsx
'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react'

const forWho = [
  "Mulheres incomodadas com estrias brancas (antigas) ou vermelhas (recentes).",
  "Marcas causadas por gestação, efeito sanfona (ganho/perda de peso) ou crescimento rápido.",
  "Estrias nos glúteos, abdômen, coxas, seios ou braços.",
  "Quem busca um tratamento seguro, com embasamento científico e resultados reais.",
  "Quem deseja voltar a usar biquíni e roupas curtas com 100% de confiança."
]

const notForWho = [
  "Gestantes (o ideal é aguardar o período pós-parto para iniciar).",
  "Pessoas com infecções, dermatites ou lesões ativas no local da estria.",
  "Pacientes com doenças autoimunes descontroladas ou histórico de má cicatrização grave.",
  "Quem busca 'milagres' do dia para a noite (o tratamento respeita o tempo de regeneração da pele).",
]

export function Qualification() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            O Método da Thuany é para o <span className="text-[#c27355]">meu caso?</span>
          </h2>
          <p className="text-lg text-stone-600">
            Trabalhamos com transparência e ética. Veja abaixo para quem o nosso protocolo exclusivo é indicado.
          </p>
        </div>

        {/* Grid de Qualificação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card: É PARA VOCÊ */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#fdf8f6] p-8 md:p-10 rounded-3xl border-2 border-[#eed6cc]/50 shadow-sm relative overflow-hidden"
          >
            {/* Decoração de fundo */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#c27355]/5 rounded-full blur-2xl pointer-events-none" />

            <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-[#25D366]" /> 
              Sim, é para você que:
            </h3>
            
            <ul className="space-y-6 relative z-10">
              {forWho.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#c27355]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#c27355]" />
                  </div>
                  <p className="text-stone-700 leading-relaxed font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card: NÃO É PARA VOCÊ */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-stone-50 p-8 md:p-10 rounded-3xl border-2 border-stone-200 shadow-sm relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-stone-400 mb-8 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-stone-400" /> 
              Ainda não é para você:
            </h3>
            
            <ul className="space-y-6 relative z-10">
              {notForWho.map((item, index) => (
                <li key={index} className="flex gap-4 opacity-80">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-stone-400" />
                  </div>
                  <p className="text-stone-600 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>

            {/* Aviso Extra */}
            <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200 flex gap-3 items-start">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">
                <strong>Lactantes:</strong> O procedimento pode ser feito mediante liberação prévia do seu médico.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}