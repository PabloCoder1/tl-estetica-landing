// src/sections/Footer.tsx
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t-4 border-[#c27355]">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Info Principal e SEO Local */}
        <div className="text-center md:text-left">
          <h4 className="text-white text-2xl font-bold mb-1 tracking-wide">Thuany Lima</h4>
          <p className="text-sm font-medium">Especialista em Remoção de Estrias</p>
          <div className="mt-4 text-sm text-stone-400">
            <p>Atendimento presencial:</p>
            <p className="text-white">Av. Senador Pinheiro Machado, 92</p>
            <p className="text-white">Vila Mathias, Santos - SP</p>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="text-center md:text-right text-xs text-stone-500">
          <p>&copy; {currentYear} Thuany Lima Estética. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido para resgatar sua autoestima.
          </p>
        </div>

      </div>
    </footer>
  )
}