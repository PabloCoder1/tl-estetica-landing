// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thuany Lima | Remoção de Estrias em Santos',
  description: 'Especialista em método avançado de remoção de estrias na Baixada Santista. Procedimento seguro e com resultados reais. Agende sua avaliação na Vila Mathias, Santos.',
  keywords: 'remoção de estrias Santos, tratamento de estrias Baixada Santista, esteticista Vila Mathias, Thuany Lima, recuperar autoestima',
  openGraph: {
    title: 'Thuany Lima | Remoção de Estrias',
    description: 'Recupere a confiança na sua pele com o método avançado de remoção de estrias em Santos.',
    type: 'website',
    locale: 'pt_BR',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}