import React, { useState } from 'react';

interface DiplomadoFeaturedProps {
  onEnrollDiplomado: () => void;
}

export const DiplomadoFeatured: React.FC<DiplomadoFeaturedProps> = ({ onEnrollDiplomado }) => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      title: 'Módulo 1: Estatuto Tributario y Procedimiento',
      desc: 'Obligaciones formales y sustanciales, régimen sancionatorio, gradualidad (Art. 640 E.T.), respuestas a requerimientos especiales y recursos de reconsideración.',
      competence: 'Solvencia en defensa y actuación administrativa ante la DIAN.'
    },
    {
      title: 'Módulo 2: Impuesto de Renta y Tasa Depurada (TTD)',
      desc: 'Depuración corporativa integral, bancarización, límites a gastos no deducibles, ganancias ocasionales, dividendos corporativos y el cálculo de la Tasa de Tributación Depurada.',
      competence: 'Determinación certera del impuesto corporativo sin sobrecostos ni contingencias.'
    },
    {
      title: 'Módulo 3: IVA, Retenciones e Impuestos Territoriales',
      desc: 'Régimen de IVA, prorrateo de IVA descontable, retención en la fuente por pagos laborales y comerciales, retención en ICA territorial y mecanismos de devolución de saldos a favor.',
      competence: 'Gestión eficiente del flujo de caja fiscal y cero retenciones indebidas.'
    },
    {
      title: 'Módulo 4: Planeación Fiscal y Gestión del Riesgo',
      desc: 'Modelación de estrategias lícitas de optimización impositiva, precios de transferencia, operaciones vinculadas y prevención de la cláusula general antielusión (Art. 869 E.T.).',
      competence: 'Liderazgo en decisiones tributarias de alto impacto en juntas directivas.'
    },
    {
      title: 'Módulo 5: NIIF y Conciliación Fiscal (Formato 2516)',
      desc: 'Coordinación entre marcos contables IFRS y bases fiscales. Cálculo riguroso de impuesto diferido y estructuración completa del Formulario 2516 para personas jurídicas.',
      competence: 'Cierre anual blindado y articulado con la contabilidad de la empresa.'
    }
  ];

  return (
    <section className="w-full bg-[#f5faff] py-16 sm:py-24 px-4 sm:px-8 lg:px-16" id="diplomado">
      <div className="max-w-7xl mx-auto rounded-3xl bg-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img
                className="w-full h-full object-cover"
                alt="Aula ejecutiva de posgrado tributario con docentes y profesionales"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiaTux2eXSiD_sKsISOiWk7_B3jOAgPvJVI1NjAB4Rbi0v_JLOb8bYBw5r8OzajqPxBMajbtC3mgXu6w6M5e8G8FrlbzPRA9dDxPb5R3OuCSH1eCp_jhWJ8J0a0t-XLH-mkAPjqxqYjvzNRtNl8mqiPsIwxasPvWGZ_JB1yUghebHgkaoirYA6lohpf7UUS0Fdi3o-j3OLFVTKi1kIce48zswX2wy4EncR86QE98n23kNxkUTEYm5e"
              />
              <div className="absolute inset-0 bg-[#165192]/10" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 p-4 sm:p-5 rounded-2xl bg-[#165192] text-white shadow-xl max-w-[240px] border border-white/20">
              <p className="text-[11px] uppercase tracking-wider text-[#b8eaff] font-bold">
                Ruta Especializada
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold mt-1 leading-snug">
                100% Aplicable a la realidad fiscal
              </p>
            </div>
          </div>

          {/* Editorial Content Right */}
          <div className="lg:col-span-6 flex flex-col items-start gap-5">
            <div className="px-3.5 py-1 rounded-full bg-[#d5e3ff] text-[#004787] text-xs uppercase tracking-wider font-bold">
              FORMACIÓN ESPECIALIZADA
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#151d21] tracking-tight">
              Diplomado en Gerencia Tributaria.
            </h2>

            <p className="font-['Inter'] text-base sm:text-lg text-[#424750] leading-relaxed">
              Una ruta estructurada para fortalecer conocimientos tributarios, desarrollar criterio y aplicar lo aprendido en la gestión tributaria de las organizaciones con solvencia jurídica y contable.
            </p>

            {/* 3 Metric Badges */}
            <div className="w-full grid grid-cols-3 gap-3 py-1">
              <div className="p-3.5 rounded-xl bg-[#edf4fa] border border-[#dce3e9]">
                <span className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#165192] block">
                  120h
                </span>
                <span className="text-xs text-[#424750] font-medium">Intensidad</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#edf4fa] border border-[#dce3e9]">
                <span className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#165192] block">
                  Virtual
                </span>
                <span className="text-xs text-[#424750] font-medium">Modalidad Sincrónica</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#edf4fa] border border-[#dce3e9]">
                <span className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#165192] block">
                  Oficial
                </span>
                <span className="text-xs text-[#424750] font-medium">Certificación DIAN/NIIF</span>
              </div>
            </div>

            {/* Interactive Syllabus Explorer */}
            <div className="w-full bg-[#f5faff] rounded-2xl p-4 border border-[#e2e9ef] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#165192]">
                  Plan de Estudios (5 Módulos)
                </span>
                <span className="text-xs text-[#424750]">Haz clic en cada módulo:</span>
              </div>

              {/* Module Buttons */}
              <div className="flex gap-1.5 overflow-x-auto pb-1">
                {modules.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveModule(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      activeModule === idx
                        ? 'bg-[#165192] text-white shadow-sm'
                        : 'bg-[#e8eff5] text-[#151d21] hover:bg-[#dce3e9]'
                    }`}
                  >
                    Módulo {idx + 1}
                  </button>
                ))}
              </div>

              {/* Active Module Details */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#151d21] mb-1">
                  {modules[activeModule].title}
                </h4>
                <p className="text-xs text-[#424750] leading-relaxed mb-2">
                  {modules[activeModule].desc}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-[#006780] font-semibold">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>Competencia clave: {modules[activeModule].competence}</span>
                </div>
              </div>
            </div>

            {/* Inversión & CTA Action Box */}
            <div className="w-full p-4 sm:p-5 rounded-2xl bg-[#edf4fa] border border-[#dce3e9] flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <p className="text-sm text-[#151d21] font-bold">Inversión y cupos:</p>
                <p className="text-xs sm:text-sm text-[#424750]">
                  Tarifas preferenciales para afiliados, grupos empresariales y pronto pago.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={onEnrollDiplomado}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#165192] text-white text-xs sm:text-sm font-bold hover:bg-[#376aac] transition-all cursor-pointer shadow-md"
                >
                  <span>Inscribirme al diplomado</span>
                  <span className="material-symbols-outlined text-base">how_to_reg</span>
                </button>
                <a
                  href="https://wa.me/573167589456?text=Hola,%20quiero%20conocer%20el%20valor%20y%20disponibilidad%20del%20Diplomado%20en%20Gerencia%20Tributaria."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 rounded-xl bg-[#40A677] text-white hover:bg-[#348a62] transition-colors"
                  title="Consultar por WhatsApp"
                >
                  <span className="material-symbols-outlined text-lg">chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
