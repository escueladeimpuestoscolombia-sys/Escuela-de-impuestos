import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40">
      <a
        aria-label="Contacto directo por WhatsApp"
        className="group flex items-center gap-2 px-4 py-3 rounded-full bg-[#006780] text-white hover:bg-[#51d5ff] hover:text-[#005a70] transition-all shadow-[0_4px_24px_rgba(0,103,128,0.4)] hover:shadow-[0_6px_28px_rgba(81,213,255,0.5)] active:scale-95 border border-white/20"
        href="https://wa.me/573167589456?text=Hola,%20me%20comunico%20desde%20el%20portal%20de%20la%20Escuela%20de%20Impuestos%20para%20solicitar%20asesor%C3%ADa."
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">
          chat
        </span>
        <span className="text-xs sm:text-sm font-semibold tracking-wide pr-1 font-['Inter']">
          Asesor WhatsApp
        </span>
      </a>
    </aside>
  );
};
