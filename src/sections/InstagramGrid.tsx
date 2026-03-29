// src/sections/InstagramGrid.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera, Heart, MessageCircle } from 'lucide-react'
import insta1 from '@/assets/images/insta-1.png'
import insta2 from '@/assets/images/insta-2.png'
import insta3 from '@/assets/images/insta-3.png'
import insta4 from '@/assets/images/insta-4.png'

const feedImages = [
  { id: 1, src: insta1, likes: '124', comments: '12' },
  { id: 2, src: insta2, likes: '89', comments: '5' },
  { id: 3, src: insta3, likes: '256', comments: '28' },
  { id: 4, src: insta4, likes: '167', comments: '14' },
]

export function InstagramGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-[#c27355]" />
              <h2 className="text-3xl font-bold text-stone-900">
                Acompanhe no Instagram
              </h2>
            </div>
            <p className="text-stone-600">
              Acompanhe resultados reais, dicas de cuidados com a pele e o dia a dia na clínica na Baixada Santista.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/thuanylimaestrias/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-[#c27355] hover:text-[#964834] transition-colors pb-1 border-b-2 border-[#c27355]/30 hover:border-[#964834]"
          >
            Siga @thuanylimaestrias
          </motion.a>
        </div>

        {/* Grid de Fotos Premium */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {feedImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100 cursor-pointer shadow-sm"
            >
              
              {/* Imagem ativada usando next/image para máxima performance */}
              <Image 
                src={image.src} 
                alt={`Postagem do Instagram de Thuany Lima ${image.id}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Premium (Efeito Vidro) - Com z-10 para ficar acima da imagem */}
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm z-10">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Heart className="w-6 h-6 fill-white" />
                  <span>{image.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-bold">
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span>{image.comments}</span>
                </div>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}