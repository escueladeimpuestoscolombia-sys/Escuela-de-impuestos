import React from 'react';

interface HeroProps {
  onExplorePrograms: () => void;
  onOpenAdvisor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms, onOpenAdvisor }) => {
  return (
    <section className="relative w-full min-h-[880px] lg:min-h-[942px] bg-[#0F1122] text-[#ebf2f8] flex flex-col justify-between overflow-hidden px-4 sm:px-8 lg:px-16 pt-28 pb-12">
      {/* Atmospheric glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#51d5ff]/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] rounded-full bg-[#165192]/25 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#376aac]/15 blur-[100px] pointer-events-none" />

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 py-8 lg:py-12">
        {/* Left Column: Headline & Value Proposition */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#51d5ff] animate-pulse shadow-[0_0_8px_#51d5ff]" />
            <span className="text-[11px] font-bold tracking-widest text-[#b8eaff] uppercase">
              ESCUELA DE IMPUESTOS
            </span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.08] text-white">
            Domina lo tributario. Lidera con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#51d5ff] via-[#EFF6FC] to-[#F1D649]">
              criterio.
            </span>
          </h1>

          <p className="font-['Inter'] text-lg sm:text-xl text-[#ebf2f8]/85 max-w-xl leading-relaxed">
            Formación contable y tributaria de vanguardia con rigor técnico, actualización normativa permanente y aprendizaje metodológico aplicado a la realidad empresarial.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExplorePrograms}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#376aac] hover:bg-[#2e5c94] text-white font-['Plus_Jakarta_Sans'] text-base font-semibold shadow-[0_0_28px_rgba(38,187,228,0.3)] hover:shadow-[0_0_36px_rgba(81,213,255,0.5)] transition-all cursor-pointer group active:scale-95"
            >
              <span>Explorar programas</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">
                arrow_downward
              </span>
            </button>

            <a
              href="https://wa.me/573167589456?text=Hola,%20quisiera%20solicitar%20asesor%C3%ADa%20general%20sobre%20los%20programas%20de%20la%20Escuela%20de%20Impuestos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-['Inter'] text-sm font-semibold transition-all backdrop-blur-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#51d5ff] text-xl">chat</span>
              <span>Hablar con un asesor</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Composition & Floating Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-6">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 group">
            <img
              className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
              alt="Auditora fiscal consultando documentación tributaria avanzada"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6TX12XzZS4fCsXAXyVdWm66tipTJNFzq3KpIsUGCXxrgaukbhi5X-MH6sn2zBe_rZbnREhMMclnFhBPO0sOCg3t5zAAvXoVqPJ7ofPsKTjYpVu8aD7Sban7x80IA5a7Q3k5kp4HE2n1oMrWfVzFvRPu9H4VVJitVDIO0lKzlQsU2x3zG8JOKZFWBu8XhvK7q2i4UjviUhBt_rIUPzDp2MmVQq09ohRiKc4X3edghKNpy6Up61ToMQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1122] via-[#0F1122]/30 to-transparent opacity-85" />

            {/* Floating Top Badge */}
            <div className="absolute top-6 left-6 p-4 rounded-2xl bg-[#0F1122]/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#165192]/60 flex items-center justify-center text-[#51d5ff] border border-[#51d5ff]/30">
                <span className="material-symbols-outlined text-xl">workspace_premium</span>
              </div>
              <div>
                <p className="text-[11px] uppercase text-[#b8eaff] font-bold tracking-wider">
                  Acreditación
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-white font-bold">
                  Formación especializada
                </p>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute bottom-6 right-6 p-4 rounded-2xl bg-white text-[#151d21] shadow-2xl flex items-center gap-3 max-w-[270px] border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-[#b8eaff] flex items-center justify-center text-[#006780]">
                <span className="material-symbols-outlined text-xl">insights</span>
              </div>
              <div>
                <p className="text-[11px] uppercase text-[#006780] font-bold tracking-wider">
                  Metodología Activa
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#151d21] leading-tight">
                  Aprendizaje aplicado al 100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: 3 Pillars */}
      <div className="max-w-7xl mx-auto w-full pt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-4 p-2">
            <div className="w-12 h-12 rounded-xl bg-[#51d5ff]/15 flex items-center justify-center flex-shrink-0 text-[#51d5ff] border border-[#51d5ff]/25">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-semibold">
                Rigor técnico
              </h4>
              <p className="text-xs sm:text-sm text-[#ebf2f8]/75">
                Análisis con estricto apego al estatuto y doctrina DIAN.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 border-t md:border-t-0 md:border-l border-white/10">
            <div className="w-12 h-12 rounded-xl bg-[#b8eaff]/15 flex items-center justify-center flex-shrink-0 text-[#b8eaff] border border-[#b8eaff]/25">
              <span className="material-symbols-outlined text-2xl">sync</span>
            </div>
            <div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-semibold">
                Actualización permanente
              </h4>
              <p className="text-xs sm:text-sm text-[#ebf2f8]/75">
                Reformas tributarias y resoluciones en tiempo real.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-2 border-t md:border-t-0 md:border-l border-white/10">
            <div className="w-12 h-12 rounded-xl bg-[#F1D649]/15 flex items-center justify-center flex-shrink-0 text-[#F1D649] border border-[#F1D649]/25">
              <span className="material-symbols-outlined text-2xl">balance</span>
            </div>
            <div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base text-white font-semibold">
                Práctica real
              </h4>
              <p className="text-xs sm:text-sm text-[#ebf2f8]/75">
                Resolución de casos complejos y simulaciones contables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
