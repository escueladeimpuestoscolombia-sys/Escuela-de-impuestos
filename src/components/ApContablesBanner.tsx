import React from 'react';

export const ApContablesBanner: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#0F1122] to-[#1e252a] text-[#ebf2f8] py-16 sm:py-24 px-4 sm:px-8 lg:px-16" id="ap-contables">
      <div className="max-w-7xl mx-auto rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text & Action */}
          <div className="lg:col-span-6 flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#51d5ff]/20 text-[#51d5ff] text-xs font-bold border border-[#51d5ff]/30">
              <span className="material-symbols-outlined text-base">cloud</span>
              <span>TECNOLOGÍA CONTABLE NATIVA</span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-black tracking-tight text-white">
              El conocimiento crece cuando lo llevas a la práctica.
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl text-[#b8eaff] font-medium leading-snug">
              La tecnología también puede acompañar tus procesos contables y administrativos.
            </p>

            <p className="font-['Inter'] text-sm sm:text-base text-[#ebf2f8]/80 leading-relaxed">
              Conoce AP Contables, una solución digital en la nube diseñada con altos estándares para apoyar la gestión contable, facturación electrónica y reportes tributarios sin fricciones.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-3 w-full py-1">
              <div className="flex items-center gap-2 text-xs text-[#ebf2f8]/90">
                <span className="material-symbols-outlined text-[#51d5ff] text-base">check_circle</span>
                <span>Facturación DIAN 100%</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#ebf2f8]/90">
                <span className="material-symbols-outlined text-[#51d5ff] text-base">check_circle</span>
                <span>Nómina y Radian integrados</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#ebf2f8]/90">
                <span className="material-symbols-outlined text-[#51d5ff] text-base">check_circle</span>
                <span>Formato 2516 automatizado</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#ebf2f8]/90">
                <span className="material-symbols-outlined text-[#51d5ff] text-base">check_circle</span>
                <span>Acceso Cloud multidispositivo</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="https://apcontables.com.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#51d5ff] text-[#001f28] text-xs sm:text-sm font-bold hover:bg-[#b8eaff] transition-all shadow-[0_0_20px_rgba(81,213,255,0.3)] cursor-pointer"
              >
                <span>Descubrir AP Contables</span>
                <span className="material-symbols-outlined text-lg">open_in_new</span>
              </a>

              <a
                href="https://wa.me/573167589456?text=Hola,%20quisiera%20recibir%20asesor%C3%ADa%20acerca%20del%20software%20AP%20Contables."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#40A677] text-lg">chat</span>
                <span>Consultar sobre el software</span>
              </a>
            </div>
          </div>

          {/* Right: Mockup Interface */}
          <div className="lg:col-span-6 flex flex-col gap-2">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-white/5 border border-white/15 group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Render de interfaz de usuario de software de contabilidad en la nube"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_J6QPlhOrMIb9UlixxUV-fnjS7itkiLxkVymm8YqHHDV0POWLP14JblvcfK4z6Ut7StgGNTvBoAi9CPWcE72WoV9aF5AgEa-glm5hltZkDOIGEfIhGwLqAvEQnGYHncqkvv7Dbiq3j2NHqgco3xvLOCR5T7oYmP-b7rlUPnpMAk-XqFaPVCr4BVsV0Sqn6-Z5WGyiyQIL5VZqzlPkR2pMywtd8z46nLG5JKv5KnWNgFq6h5z6b5tu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1122]/70 via-transparent to-transparent pointer-events-none" />
            </div>
            <p className="text-[11px] text-[#ebf2f8]/50 text-right italic">
              * Imagen referencial del ecosistema tecnológico AP Contables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
