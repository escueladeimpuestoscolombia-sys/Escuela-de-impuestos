import React from 'react';

interface FormationsBentoProps {
  onSelectDiplomado: () => void;
  onSelectSeminarios: () => void;
  onSelectLaboratorio: () => void;
}

export const FormationsBento: React.FC<FormationsBentoProps> = ({
  onSelectDiplomado,
  onSelectSeminarios,
  onSelectLaboratorio,
}) => {
  return (
    <section className="w-full bg-[#edf4fa] py-16 sm:py-24 px-4 sm:px-8 lg:px-16" id="formacion">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[12px] uppercase tracking-widest text-[#165192] font-bold">
            DESCUBRE TU PRÓXIMO PASO
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl text-[#151d21] mt-2 font-extrabold tracking-tight">
            Tres formas de llevar tu conocimiento más lejos.
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-[#424750] mt-3">
            Diseñadas para profesionales que no se conforman con la teoría estéril.
          </p>
        </div>

        {/* 3-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: DIPLOMADOS */}
          <div className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#376aac] text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1.5 border border-white/20">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/20 text-xs uppercase tracking-wider text-white font-bold">
                  Diplomados
                </span>
                <span className="material-symbols-outlined text-[#b8eaff] text-2xl">school</span>
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-white">
                  Profundiza.
                </h3>
                <h4 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#b8eaff] mt-1">
                  Diplomado en Gerencia Tributaria
                </h4>
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-white/90 leading-relaxed">
                Formación integral para directores financieros, contadores y asesores con enfoque gerencial, planeación y mitigación de contingencias.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-white/15 text-xs text-white font-medium">
                  120 horas
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/15 text-xs text-white font-medium">
                  Virtual sincrónico
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/15 text-xs text-white font-medium">
                  Certificación Oficial
                </span>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onSelectDiplomado}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white text-[#165192] font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold shadow-md hover:bg-[#edf4fa] transition-all cursor-pointer group-hover:shadow-lg"
              >
                <span>Conocer el diplomado</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 2: SEMINARIOS */}
          <div className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#0F1122] text-[#ebf2f8] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1.5 border border-white/10">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#51d5ff]/20 text-[#51d5ff] text-xs uppercase tracking-wider font-bold">
                  Seminarios
                </span>
                <span className="material-symbols-outlined text-[#51d5ff] text-2xl">calendar_month</span>
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-white">
                  Actualízate.
                </h3>
                <h4 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#51d5ff] mt-1">
                  Cápsulas Especializadas
                </h4>
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-[#ebf2f8]/80 leading-relaxed">
                Formación ágil e intensiva sobre cambios normativos, resoluciones de última hora y su aplicación profesional inmediata sin rodeos.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-[#b8eaff] font-medium border border-white/10">
                  11 Temáticas clave
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-[#b8eaff] font-medium border border-white/10">
                  Enfoque puntual
                </span>
                <span className="px-3 py-1 rounded-lg bg-white/10 text-xs text-[#b8eaff] font-medium border border-white/10">
                  Plantillas Excel
                </span>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onSelectSeminarios}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#51d5ff] text-[#001f28] font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold shadow-md hover:bg-[#b8eaff] transition-all cursor-pointer group-hover:shadow-[0_0_20px_rgba(81,213,255,0.4)]"
              >
                <span>Explorar seminarios</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 3: LABORATORIO NIIF */}
          <div className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white text-[#151d21] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1.5 border border-[#dce3e9]">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#edf4fa] text-[#165192] text-xs uppercase tracking-wider font-bold">
                  Práctica Pura
                </span>
                <span className="material-symbols-outlined text-[#006780] text-2xl">science</span>
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#151d21]">
                  Ponlo en práctica.
                </h3>
                <h4 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#165192] mt-1">
                  Laboratorio Contable y NIIF
                </h4>
              </div>
              <p className="font-['Inter'] text-sm sm:text-base text-[#424750] leading-relaxed">
                Recorre el ciclo real y completo de una empresa desde su constitución, registro transaccional cotidiano, hasta los informes fiscales finales.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-[#f5faff] text-xs text-[#151d21] font-medium border border-slate-200">
                  Simulador empresarial
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#f5faff] text-xs text-[#151d21] font-medium border border-slate-200">
                  5 Fases de caso real
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#f5faff] text-xs text-[#151d21] font-medium border border-slate-200">
                  Conciliación 2516
                </span>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onSelectLaboratorio}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#edf4fa] hover:bg-[#dce3e9] text-[#151d21] font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold transition-all cursor-pointer"
              >
                <span>Descubrir el laboratorio</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
