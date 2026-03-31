// src/components/ui/Navbar.tsx
'use client'

import { motion } from 'framer-motion'

export function Navbar() {
  const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Sobre', href: '#sobre' }, // <-- Adicionado para linkar com a seção About
    { name: 'Resultados', href: '#resultados' },
    { name: 'Dúvidas', href: '#faq' },
    { name: 'Localização', href: '#localizacao' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-[#eed6cc]/50 shadow-sm"
    >
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo Textual */}
        <div className="text-xl font-bold text-stone-900 tracking-wide">
          Thuany<span className="text-[#c27355]"> Lima</span>
        </div>

        {/* Links Desktop (Some no celular para não poluir) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-600 hover:text-[#c27355] font-medium transition-colors text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}