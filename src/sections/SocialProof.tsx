// src/sections/SocialProof.tsx
'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Mariana C.",
    city: "Santos/SP",
    text: "Eu morria de vergonha de colocar biquíni para ir à praia no Gonzaga. Depois que fiz o tratamento com a Thuany, minha vida mudou. O atendimento é impecável e o resultado superou minhas expectativas!",
  },
  {
    name: "Juliana T.",
    city: "São Vicente/SP",
    text: "Já tinha gastado horrores com pomadas. A Thuany foi super sincera na avaliação e me explicou todo o processo. Hoje, olho no espelho e me sinto linda de novo.",
  },
  {
    name: "Camila R.",
    city: "Praia Grande/SP",
    text: "Ambiente super acolhedor e profissional maravilhosa. O método realmente funciona, indico de olhos fechados para todas as minhas amigas.",
  }
]

export function SocialProof() {
  return (
    <section className="py-24 bg-[#fdf8f6]">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Histórias reais de <span className="text-[#c27355]">transformação</span>
          </h2>
          <p className="text-lg text-stone-600">
            Veja o que as mulheres da Baixada Santista estão dizendo sobre o método da Thuany.
          </p>
        </motion.div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative"
            >
              {/* Ícone de Aspas Decorativo */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#eed6cc] opacity-50" />
              
              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c27355] text-[#c27355]" />
                ))}
              </div>
              
              {/* Texto do Depoimento */}
              <p className="text-stone-700 italic mb-6 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Autora */}
              <div className="mt-auto">
                <p className="font-bold text-stone-900">{testimonial.name}</p>
                <p className="text-sm text-[#c27355]">{testimonial.city}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}