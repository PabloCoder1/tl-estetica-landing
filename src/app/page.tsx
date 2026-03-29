// src/app/page.tsx
import { Navbar } from '../components/ui/Navbar'
import { Hero } from '../sections/Hero'
import { Benefits } from '../sections/Benefits'
import { SocialProof } from '../sections/SocialProof'
import { FAQ } from '../sections/FAQ'
import { Location } from '../sections/Location'
import { Footer } from '../sections/Footer'
import { FloatingWhatsApp } from '../components/ui/FloatingWhatsApp'
import { InstagramGrid } from '@/sections/InstagramGrid'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative pt-20">
      {/* A Navbar fixa no topo */}
      <Navbar />

      {/* Seções com IDs para os links da Navbar funcionarem */}
      <div id="inicio"><Hero /></div>
      <div id="beneficios"><Benefits /></div>
      <div id="depoimentos"><SocialProof /></div>
      <div id="faq"><FAQ /></div>
      <div id="localizacao"><Location /></div>
      <div id="instagram"><InstagramGrid /></div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}