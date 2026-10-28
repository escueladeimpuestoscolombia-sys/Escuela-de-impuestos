import React from 'react';

interface ClosingCtaProps {
  onExplorePrograms: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onExplorePrograms }) => {
  return (
    <section className="w-full bg-[#0F1122] text-[#ebf2f8] py-20 sm:py-28 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#165192]/25 blur-[130px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#51d5ff]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#51d5ff]/20 text-[#51d5ff] text-xs uppercase tracking-widest font-bold border border-[#51d5ff]/30">
          DECIDE CON CRITERIO
        </div>

        <h2 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
          Tu próximo nivel profesional empieza hoy.
        </h2>

        <p className="font-['Inter'] text-base sm:text-xl text-[#ebf2f8]/85 max-w-2xl leading-relaxed">
          Fortalece tu conocimiento tributario con una formación orientada a la práctica real de las organizaciones y con respaldo docente incuestionable.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.me/573167589456?text=Hola,%20deseo%20recibir%20orientaci%C3%B3n%20para%20iniciar%20mi%20formaci%C3%B3n%20tributaria."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#51d5ff] text-[#001f28] font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(81,213,255,0.4)] hover:bg-[#b8eaff] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            <span>Recibir orientación inmediata</span>
          </a>

          <button
            onClick={onExplorePrograms}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-['Inter'] text-sm sm:text-base font-semibold transition-all cursor-pointer"
          >
            <span>Explorar programas</span>
            <span className="material-symbols-outlined text-lg">arrow_upward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
