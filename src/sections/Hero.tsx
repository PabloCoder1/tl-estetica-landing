// src/sections/Hero.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'
import thuanyProfile from '../assets/images/thuany-profile.png'

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#fdf8f6] flex items-center overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Coluna da Esquerda: Copy & CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          <span className="text-[#c27355] font-semibold tracking-wider uppercase text-sm mb-4">
            Especialista em Santos - Baixada Santista
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
            Liberte-se das estrias e recupere a <span className="text-[#c27355]">confiança na sua pele.</span>
          </h1>
          
          <p className="text-lg text-stone-700 mb-8 max-w-xl leading-relaxed">
            Descubra o método avançado de remoção de estrias com a especialista Thuany Lima. Procedimento seguro, com resultados reais e uma estética pensada para elevar sua autoestima.
          </p>
          
          <WhatsAppButton text="Quero recuperar minha autoestima" />
          
          <p className="mt-4 text-xs text-stone-500">
            * Vagas limitadas para avaliação nesta semana.
          </p>
        </motion.div>

        {/* Coluna da Direita: Imagem da Thuany */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
        >
          {/* Mantive as classes do Tailwind que dão a borda branca, a sombra e o formato de arco (rounded-t-full) */}
          <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[450px] lg:h-[600px] rounded-t-full overflow-hidden border-8 border-white shadow-2xl">
            <Image 
              src={thuanyProfile}
              alt="Thuany Lima - Especialista em Remoção de Estrias"
              fill /* O 'fill' é mágico no Next.js. Ele se adapta ao tamanho da div pai sem distorcer a foto */
              className="object-cover object-center"
              priority
              placeholder="blur"
            />
          </div>
          
          {/* Elemento Decorativo (com a cor hexadecimal corrigida para o Nude claro) */}
          <div className="absolute -z-10 bottom-10 -right-10 w-64 h-64 bg-[#eed6cc] rounded-full blur-3xl opacity-50"></div>
        </motion.div>

      </div>
    </section>
  )
}1