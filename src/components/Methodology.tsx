import React from 'react';

export const Methodology: React.FC = () => {
  return (
    <section className="w-full bg-[#EFF6FC] py-16 sm:py-24 px-4 sm:px-8 lg:px-16" id="metodologia">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-[12px] uppercase tracking-widest text-[#165192] font-bold">
            MODELO PEDAGÓGICO
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl text-[#151d21] font-extrabold mt-2 tracking-tight">
            Aprender haciendo cambia la manera de decidir.
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-[#424750] mt-3">
            Dejamos atrás la memorización pasiva. Construimos destreza analítica mediante retos y simulaciones vivas.
          </p>
        </div>

        {/* 5-Principle Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Principle 1 */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-3xl bg-white shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#d5e3ff] text-[#165192] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">cloud_upload</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-[#151d21] mb-2.5">
                Exposición clara y aplicada
              </h3>
              <p className="font-['Inter'] text-sm sm:text-base text-[#424750] leading-relaxed">
                Explicaciones estructuradas que transforman la complejidad de decretos y normas técnicas en conceptos comprensibles, directos y accionables para la realidad tributaria colombiana.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#165192]">
              <span className="material-symbols-outlined text-sm">check</span>
              <span>Cero jerga abstracta; fundamentos jurídicos directos</span>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-3xl bg-white shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#b8eaff] text-[#006780] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">calculate</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-[#151d21] mb-2.5">
                Ejercicios prácticos
              </h3>
              <p className="font-['Inter'] text-sm sm:text-base text-[#424750] leading-relaxed">
                Talleres guiados con hojas de trabajo, modelos de cálculo en Excel y papeles de trabajo que simulan auditorías reales y revisiones DIAN.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#006780]">
              <span className="material-symbols-outlined text-sm">check</span>
              <span>Descarga de matrices y liquidadores editables</span>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#e8eff5] text-[#165192] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-xl">travel_explore</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#151d21] mb-2">
                Análisis de casos
              </h3>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#424750] leading-relaxed">
                Discusión de conceptos emitidos por la DIAN, sentencias del Consejo de Estado y controversias habituales entre contribuyente y fisco.
              </p>
            </div>
          </div>

          {/* Principle 4 */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#e8eff5] text-[#165192] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-xl">question_answer</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#151d21] mb-2">
                Espacios de preguntas
              </h3>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#424750] leading-relaxed">
                Interacción directa con consultores experimentados para resolver dudas específicas y casuísticas reales de los participantes.
              </p>
            </div>
          </div>

          {/* Principle 5 */}
          <div className="md:col-span-4 p-6 sm:p-7 rounded-2xl bg-white shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#e8eff5] text-[#165192] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-xl">domain</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#151d21] mb-2">
                Situaciones reales
              </h3>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#424750] leading-relaxed">
                Enfoque pragmático dirigido a resolver problemas de empresas manufactureras, comerciales, de servicios y entidades sin ánimo de lucro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
