// src/components/ui/WhatsAppButton.tsx
'use client'

import { motion } from 'framer-motion'
import { WhatsAppIcon } from './WhatsAppIcon'
import { getWhatsAppLink } from '../../utils/formatters'

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
}

export function WhatsAppButton({ text = "Agendar minha avaliação", className = "" }: WhatsAppButtonProps) {
  const whatsappLink = getWhatsAppLink("Olá! Vi o site e gostaria de saber mais sobre o método de remoção de estrias.");

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center gap-2 bg-[#c27355] hover:bg-[#b45a3f] text-white font-medium py-4 px-8 rounded-full shadow-lg transition-colors duration-300 ${className}`}
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span>{text}</span>
    </motion.a>
  )
}