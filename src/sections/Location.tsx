// src/sections/Location.tsx
'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export function Location() {
  // Usamos a URL de embed padrão do Google Maps com o endereço
  const mapUrl = "https://maps.google.com/maps?q=Av.%20Senador%20Pinheiro%20Machado,%2092%20-%20Vila%20Mathias,%20Santos&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="py-24 bg-[#fdf8f6]">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Informações Textuais */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3"
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
            <MapPin className="w-6 h-6 text-[#c27355]" />
          </div>
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Venha conhecer o nosso espaço
          </h2>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Um ambiente preparado com todo carinho, conforto e privacidade para receber você e resgatar a sua autoestima.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-[#eed6cc]/40 shadow-sm">
            <p className="font-bold text-stone-900 mb-1">Endereço:</p>
            <p className="text-stone-600 text-sm">Av. Senador Pinheiro Machado, 92</p>
            <p className="text-stone-600 text-sm">Vila Mathias, Santos - SP</p>
          </div>
        </motion.div>

        {/* O Mapa Embutido de Forma Elegante */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-2/3 h-[400px] rounded-3xl overflow-hidden shadow-xl border-8 border-white"
        >
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            // O segredo do design: um leve filtro grayscale para tirar as cores agressivas do mapa e deixá-lo chique
            style={{ border: 0, filter: 'grayscale(60%) contrast(1.1)' }} 
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>
    </section>
  )
}