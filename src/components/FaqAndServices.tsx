import React, { useState } from 'react';

interface FaqAndServicesProps {
  onOpenCertificates: () => void;
}

export const FaqAndServices: React.FC<FaqAndServicesProps> = ({ onOpenCertificates }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cuáles son las modalidades de estudio disponibles?',
      a: 'Nuestros programas se imparten principalmente de manera virtual en tiempo real (clases sincrónicas) a través de nuestra aula ejecutiva interactiva. Todas las sesiones quedan grabadas y archivadas en el campus virtual para consulta recurrente 24/7 durante y después del curso.'
    },
    {
      q: '¿Cuánto dura el Diplomado en Gerencia Tributaria?',
      a: 'El Diplomado cuenta con una intensidad curricular completa de 120 horas académicas distribuidas en sesiones semanales estructuradas para permitir que los profesionales en ejercicio compaginen su trabajo habitual con la formación de posgrado.'
    },
    {
      q: '¿Cómo funcionan los seminarios específicos?',
      a: 'Son jornadas intensivas enfocadas puntualmente en temas de coyuntura y reformas (como Exógena, Renta PJ/PN, IVA o Retención), orientadas a la resolución de inquietudes prácticas inmediatas y modelos de liquidación aplicados con entrega de plantillas en Excel.'
    },
    {
      q: '¿Ofrecen planes especiales para empresas o grupos?',
      a: 'Sí. Contamos con planes corporativos a la medida para equipos contables, de auditoría interna y firmas de revisoría fiscal, con facturación electrónica a nombre de la empresa y tarifas escalonadas según el volumen de participantes.'
    },
    {
      q: '¿Cómo se valida y entrega el certificado?',
      a: 'Al cumplir con el porcentaje de asistencia y aprobación técnica requerida, se emite un certificado digital con código QR de verificación única institucional y hash criptográfico que cualquier empleador u organización puede consultar en línea en nuestro portal de certificación.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16" id="faq">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Academic Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service 1: External Enrollment Portal */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#edf4fa] border border-[#dce3e9] flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#d5e3ff] text-[#165192] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">badge</span>
              </div>
              <div>
                <h4 className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-[#151d21]">
                  Portal de Inscripciones Externo
                </h4>
                <p className="text-xs sm:text-sm text-[#424750]">
                  Acceso directo a la plataforma de matriculación centralizada.
                </p>
              </div>
            </div>
            <a
              href="https://inscripciones.escueladeimpuestos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white hover:bg-[#dce3e9] transition-colors border border-slate-200 text-[#165192]"
              title="Ir a inscripciones externas"
            >
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </a>
          </div>

          {/* Service 2: Certificate Verification Tool */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#edf4fa] border border-[#dce3e9] flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#b8eaff] text-[#006780] flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">workspace_premium</span>
              </div>
              <div>
                <h4 className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-[#151d21]">
                  Consulta de Certificados
                </h4>
                <p className="text-xs sm:text-sm text-[#424750]">
                  Valida la autenticidad técnica y el código QR de tu certificación.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenCertificates}
              className="p-3 rounded-xl bg-white hover:bg-[#dce3e9] transition-colors border border-slate-200 text-[#006780] cursor-pointer"
              title="Abrir validador de certificados"
            >
              <span className="material-symbols-outlined text-xl">verified</span>
            </button>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto w-full flex flex-col gap-3">
          <div className="text-center mb-6">
            <span className="text-[12px] uppercase tracking-widest text-[#165192] font-bold">
              RESOLUCIÓN DE DUDAS
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#151d21] mt-1">
              Preguntas Frecuentes
            </h2>
          </div>

          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#edf4fa] border border-[#dce3e9] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#e4ecf4] transition-colors cursor-pointer"
                >
                  <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-[#151d21] pr-4">
                    {faq.q}
                  </span>
                  <span className="material-symbols-outlined text-slate-500 flex-shrink-0">
                    {isOpen ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-[#424750] leading-relaxed border-t border-slate-200/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
