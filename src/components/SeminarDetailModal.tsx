import React from 'react';
import { Seminar } from '../types.ts';

interface SeminarDetailModalProps {
  seminar: Seminar | null;
  onClose: () => void;
  onEnrollSeminar: (seminar: Seminar) => void;
}

export const SeminarDetailModal: React.FC<SeminarDetailModalProps> = ({
  seminar,
  onClose,
  onEnrollSeminar,
}) => {
  if (!seminar) return null;

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent(
      `¡Hola Escuela de Impuestos! Estoy interesado en inscribirme o recibir más detalles sobre el Seminario ${seminar.number}: "${seminar.title}".`
    );
    window.open(`https://wa.me/573167589456?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F1122] text-white p-6 sm:p-7 flex items-start justify-between border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#51d5ff]/20 text-[#51d5ff] flex items-center justify-center border border-[#51d5ff]/30">
              <span className="material-symbols-outlined text-2xl">{seminar.icon}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-[#b8eaff] bg-white/10 px-2 py-0.5 rounded-md">
                  Seminario {seminar.number}
                </span>
                <span className="text-[11px] text-[#51d5ff] font-semibold">
                  {seminar.categoryLabel}
                </span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-extrabold text-white">
                {seminar.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Key metadata pills */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#edf4fa] border border-[#dce3e9]">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#151d21]">
              <span className="material-symbols-outlined text-[#165192] text-base">schedule</span>
              <span><strong>Duración:</strong> {seminar.hours}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#151d21]">
              <span className="material-symbols-outlined text-[#006780] text-base">devices</span>
              <span><strong>Modalidad:</strong> {seminar.modality}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#165192] mb-2">
              Alcance y Justificación Técnica:
            </h4>
            <p className="text-sm text-[#424750] leading-relaxed">
              {seminar.fullDesc}
            </p>
          </div>

          {/* Topics Syllabus */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#165192] mb-3">
              Temario Específico y Aplicación Práctica:
            </h4>
            <ul className="space-y-2.5">
              {seminar.topics.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#151d21]">
                  <span className="material-symbols-outlined text-[#40A677] text-base mt-0.5">
                    check_circle
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#424750]">
            <strong className="text-[#151d21] block mb-0.5">Dirigido a:</strong>
            {seminar.targetAudience}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onEnrollSeminar(seminar);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#165192] hover:bg-[#376aac] text-white text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer"
          >
            Inscribirme a este seminario
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppClick}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#40A677] hover:bg-[#348a62] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>Consultar cupos vía WhatsApp</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-xs sm:text-sm font-bold text-[#151d21] transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
