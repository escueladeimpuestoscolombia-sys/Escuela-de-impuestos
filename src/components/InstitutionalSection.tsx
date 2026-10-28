import React, { useState } from 'react';

export const InstitutionalSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('mision');

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <section className="w-full bg-[#0F1122] text-[#ebf2f8] py-16 sm:py-24 px-4 sm:px-8 lg:px-16" id="institucional">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Block 1: 4 Core Differentials */}
        <div>
          <div className="max-w-2xl mb-8">
            <span className="text-[12px] uppercase tracking-widest text-[#51d5ff] font-bold">
              VALOR DIFERENCIAL
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 tracking-tight">
              Formación con propósito. Conocimiento con aplicación.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[#51d5ff] text-3xl mb-4 block">
                verified
              </span>
              <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-2">
                Rigor técnico
              </h4>
              <p className="text-xs sm:text-sm text-[#ebf2f8]/75 leading-relaxed">
                Fundamentación jurídica y contable sin especulaciones ni interpretaciones ambiguas.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[#b8eaff] text-3xl mb-4 block">
                sync_saved_locally
              </span>
              <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-2">
                Actualización viva
              </h4>
              <p className="text-xs sm:text-sm text-[#ebf2f8]/75 leading-relaxed">
                Planes curriculares actualizados con cada nueva norma, decreto reglamentario y circular DIAN.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[#F1D649] text-3xl mb-4 block">
                terminal
              </span>
              <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-2">
                Práctica real
              </h4>
              <p className="text-xs sm:text-sm text-[#ebf2f8]/75 leading-relaxed">
                Talleres diseñados desde la experiencia de campo en auditoría, litigio y planeación corporativa.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-white text-3xl mb-4 block">
                flag
              </span>
              <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-2">
                Objetivos claros
              </h4>
              <p className="text-xs sm:text-sm text-[#ebf2f8]/75 leading-relaxed">
                Competencias técnicas medibles desde la primera sesión formativa para aplicar de inmediato.
              </p>
            </div>
          </div>
        </div>

        {/* Block 2: Institutional Identity & Accordion */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-[12px] uppercase tracking-widest text-[#51d5ff] font-bold">
              QUIÉNES SOMOS
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
              Formamos profesionales para decidir con criterio.
            </h3>
            <p className="font-['Inter'] text-sm sm:text-base text-[#ebf2f8]/80 mt-4 leading-relaxed">
              La Escuela de Impuestos nace como una respuesta rigurosa a la constante volatilidad normativa colombiana, proporcionando certidumbre jurídica y destreza contable a los líderes tributarios del país.
            </p>
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#b8eaff] flex items-center gap-3">
              <span className="material-symbols-outlined text-xl text-[#51d5ff]">policy</span>
              <span>Comprometidos con el Código de Ética Profesional de la Ley 43 de 1990 y las normas IESBA.</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-3">
            {/* Accordion 1: Misión */}
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all">
              <button
                onClick={() => toggleAccordion('mision')}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#51d5ff]">target</span>
                  Misión Institucional
                </span>
                <span className="material-symbols-outlined text-slate-400">
                  {openAccordion === 'mision' ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openAccordion === 'mision' && (
                <div className="p-5 pt-0 text-sm text-[#ebf2f8]/85 leading-relaxed border-t border-white/5">
                  Formar y actualizar a contadores, asesores y directivos tributarios con un estándar de excelencia técnica inquebrantable, promoviendo una cultura de cumplimiento riguroso, ético y eficiente en el entorno corporativo colombiano.
                </div>
              )}
            </div>

            {/* Accordion 2: Visión */}
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all">
              <button
                onClick={() => toggleAccordion('vision')}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#51d5ff]">visibility</span>
                  Visión
                </span>
                <span className="material-symbols-outlined text-slate-400">
                  {openAccordion === 'vision' ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openAccordion === 'vision' && (
                <div className="p-5 pt-0 text-sm text-[#ebf2f8]/85 leading-relaxed border-t border-white/5">
                  Ser el centro de pensamiento, capacitación y consultoría fiscal más respetado de la región, reconocido por la solvencia técnica de sus egresados y el impacto tangible en la transparencia y sostenibilidad de las organizaciones.
                </div>
              )}
            </div>

            {/* Accordion 3: Valores */}
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all">
              <button
                onClick={() => toggleAccordion('valores')}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#51d5ff]">security</span>
                  Valores Institucionales
                </span>
                <span className="material-symbols-outlined text-slate-400">
                  {openAccordion === 'valores' ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openAccordion === 'valores' && (
                <div className="p-5 pt-0 text-sm text-[#ebf2f8]/85 leading-relaxed space-y-2 border-t border-white/5">
                  <p>• <strong className="text-white">Integridad:</strong> Actuación leal y honesta frente a las normas fiscales y los deberes ciudadanos.</p>
                  <p>• <strong className="text-white">Objetividad:</strong> Criterio fundamentado sin sesgos ni interpretaciones imprudentes que expongan a los clientes.</p>
                  <p>• <strong className="text-white">Competencia y debido cuidado:</strong> Actualización continua y rigurosa en doctrina y jurisprudencia.</p>
                  <p>• <strong className="text-white">Confidencialidad:</strong> Máxima reserva en casos empresariales y análisis de datos.</p>
                  <p>• <strong className="text-white">Comportamiento profesional:</strong> Conducta apegada a la dignidad del oficio contable.</p>
                </div>
              )}
            </div>

            {/* Accordion 4: Calidad */}
            <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all">
              <button
                onClick={() => toggleAccordion('calidad')}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#51d5ff]">auto_awesome</span>
                  Política de Calidad
                </span>
                <span className="material-symbols-outlined text-slate-400">
                  {openAccordion === 'calidad' ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              {openAccordion === 'calidad' && (
                <div className="p-5 pt-0 text-sm text-[#ebf2f8]/85 leading-relaxed border-t border-white/5">
                  Garantizar contenidos académicos permanentemente validados contra la legislación colombiana vigente y dictados por expertos activos en litigio tributario, auditoría de grandes contribuyentes y asesoría corporativa de primer nivel.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
