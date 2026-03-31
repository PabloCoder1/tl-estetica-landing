// src/sections/About.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Heart, Sparkles, Quote } from 'lucide-react'
import thuanyProfile from '../assets/images/thuany-profile.png'

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado da Imagem com efeito decorativo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Moldura decorativa atrás da foto */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#eed6cc] rounded-2xl z-0" />
            
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image 
                src={thuanyProfile} // Certifique-se de ter uma foto profissional dela aqui
                alt="Thuany Lima - Especialista em Estética"
                fill
                className="object-cover"
              />
            </div>

            {/* Selo de Especialista Flutuante */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-[#c27355] text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <Award className="w-8 h-8 mb-2" />
              <p className="font-bold text-sm">Formação MEC 2024</p>
              <p className="text-xs opacity-80">Protocolo Exclusivo</p>
            </motion.div>
          </motion.div>

          {/* Lado do Texto */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-[#c27355] font-bold tracking-widest uppercase text-sm mb-4 block">
              A Especialista
            </span>
            <h2 className="text-4xl font-bold text-stone-900 mb-8 leading-tight">
              A trajetória por trás do <br />
              <span className="text-[#c27355]">olhar sensível</span>
            </h2>

            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                Thuany de Lima Nascimento, natural de Santos, é reconhecida pelo seu olhar técnico e sensível no tratamento de estrias. Sua jornada iniciou aos 18 anos, e hoje, aos 31, carrega uma história construída com dedicação e paixão pelo propósito de transformar vidas.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="flex gap-4">
                  <Sparkles className="w-6 h-6 text-[#c27355] shrink-0" />
                  <p className="text-sm font-medium">Protocolo exclusivo baseado na individualidade de cada pele.</p>
                </div>
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-[#c27355] shrink-0" />
                  <p className="text-sm font-medium">Foco na restauração da autoestima e confiança feminina.</p>
                </div>
              </div>

              <p>
                Mais do que tratar a pele, seu método respeita as características únicas de cada cliente, proporcionando resultados assertivos e uma experiência acolhedora.
              </p>

              {/* Bloco de Citação / Fé */}
              <div className="relative mt-12 p-8 bg-[#fdf8f6] rounded-3xl border-l-4 border-[#c27355]">
                <Quote className="absolute top-4 right-6 w-10 h-10 text-[#eed6cc] opacity-40" />
                <p className="italic text-stone-800 font-medium mb-4 relative z-10">
                  “Deus me confiou um propósito: cuidar de vidas através da estética.”
                </p>
                <p className="text-sm font-bold text-[#c27355]">— Thuany Lima</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}