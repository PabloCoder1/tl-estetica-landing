// src/app/page.tsx
import { Navbar } from '../components/ui/Navbar'
import { Hero } from '../sections/Hero'
import { Benefits } from '../sections/Benefits'
import { About } from '../sections/About'
import { SocialProof } from '../sections/SocialProof'
import { BeforeAfterSlider } from '../sections/BeforeAfterSlider'
import { Qualification } from '../sections/Qualification' 
import { FAQ } from '../sections/FAQ'
import { Location } from '../sections/Location'
import { InstagramGrid } from '../sections/InstagramGrid'
import { Footer } from '../sections/Footer'
import { FloatingWhatsApp } from '../components/ui/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative pt-20 overflow-hidden">
      <Navbar />
      <div id="inicio"><Hero /></div>
      <div id="beneficios"><Benefits /></div>
      <div id="sobre"><About /></div>
      <div id="depoimentos"><SocialProof /></div>
      <div id="resultados"><BeforeAfterSlider /></div>
      
      {/* Padrão mantido: Div com ID adicionada aqui */}
      <div id="qualificacao"><Qualification /></div>
      
      <div id="faq"><FAQ /></div>
      <div id="instagram"><InstagramGrid /></div>
      <div id="localizacao"><Location /></div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}