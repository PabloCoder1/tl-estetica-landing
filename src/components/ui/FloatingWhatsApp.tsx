// src/components/ui/FloatingWhatsApp.tsx
'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { getWhatsAppLink } from '../../utils/formatters'

export function FloatingWhatsApp() {
  const whatsappLink = getWhatsAppLink("Olá, Thuany! Estava navegando na sua página e quero agendar minha avaliação.");

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors group"
      aria-label="Falar no WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
      <MessageCircle className="w-8 h-8 relative z-10" />
      <span className="absolute right-20 bg-white text-stone-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Agende sua avaliação
      </span>
    </motion.a>
  )
}