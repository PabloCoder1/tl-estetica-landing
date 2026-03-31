// src/sections/BeforeAfterSlider.tsx
'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeftRight, Sparkles } from 'lucide-react'
import { WhatsAppButton } from '../components/ui/WhatsAppButton'

const beforeImage = '/antes.png' 
const afterImage = '/depois.png' 

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    let clientX;
    
    if ('touches' in event) {
      clientX = event.touches[0].clientX
    } else {
      clientX = (event as React.MouseEvent).clientX
    }
    
    let position = ((clientX - rect.left) / rect.width) * 100
    position = Math.max(0, Math.min(100, position))
    
    setSliderPosition(position)
  }

  return (
    <section id="resultados" className="py-24 bg-[#fdf8f6]">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[#c27355]" />
            <h2 className="text-4xl font-bold text-stone-900 leading-tight">
              A transformação <span className="text-[#c27355]">está no controle</span> das suas mãos
            </h2>
          </div>
          <p className="text-lg text-stone-600">
            Arraste a barra para o lado e veja a eficácia real do protocolo exclusivo de remoção de estrias da Thuany Lima.
          </p>
        </div>

        {/* ALTERAÇÃO PRINCIPAL AQUI:
          1. max-w-md: Limita a largura para não ficar gigante no desktop
          2. aspect-[9/16]: Força a proporção exata da foto do celular (2268x4032)
        */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[9/16] cursor-ew-resize select-none"
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* Imagem de Fundo (ANTES) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src={beforeImage} 
              alt="Antes do tratamento de estrias" 
              fill 
              className="object-cover" 
              priority
            />
            <div className="absolute bottom-6 left-6 bg-black/60 text-white font-medium text-xs py-1.5 px-3 rounded-full uppercase tracking-wider backdrop-blur-sm">
              Antes
            </div>
          </div>

          {/* Imagem Sobreposta (DEPOIS) */}
          <div 
            className="absolute inset-0 z-10 border-r-2 border-[#c27355] pointer-events-none" 
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image 
              src={afterImage} 
              alt="Depois do tratamento de estrias" 
              fill 
              className="object-cover" 
              priority
            />
            <div className="absolute bottom-6 right-6 bg-white/70 text-stone-900 font-bold text-xs py-1.5 px-3 rounded-full uppercase tracking-wider backdrop-blur-sm">
              Depois
            </div>
          </div>

          {/* Barra Deslizante */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-white flex items-center justify-center pointer-events-none"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            <motion.div 
              className="w-10 h-10 rounded-full bg-[#c27355] text-white flex items-center justify-center shadow-lg border-2 border-white -ml-0.5"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>

        <div className="text-center mt-16 max-w-lg mx-auto p-8 bg-white rounded-3xl shadow-sm border border-[#eed6cc]/40">
            <h4 className="text-xl font-bold text-stone-900 mb-2">Ansiosa pelo seu resultado?</h4>
            <p className="text-stone-600 mb-6">Cada pele é única. Clique abaixo e agende agora sua avaliação personalizada.</p>
            <WhatsAppButton text="Quero agendar minha avaliação" />
        </div>

      </div>
    </section>
  )
}