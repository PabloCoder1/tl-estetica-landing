// src/app/page.tsx
import { Hero } from '../sections/Hero'
import { Benefits } from '../sections/Benefits'
import { SocialProof } from '../sections/SocialProof'
import { FAQ } from '../sections/FAQ'
import { Footer } from '../sections/Footer'
import { FloatingWhatsApp } from '../components/ui/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white relative">
      <Hero />
      <Benefits />
      <SocialProof />
      <FAQ />
      <Footer />
      
      {/* Botão flutuante fora do fluxo normal da página */}
      <FloatingWhatsApp />
    </main>
  )
}