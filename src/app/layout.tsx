// src/app/layout.tsx
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
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
      <body className="antialiased">
        {children}

        {/* 1. Google Analytics (Nativo do Next.js) */}
        <GoogleAnalytics gaId="G-38Q20MGJTF" />

        {/* 2. Meta Pixel (Facebook/Instagram Ads) */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'ID_DO_PIXEL_AQUI');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  )
}