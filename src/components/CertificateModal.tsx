import React, { useState } from 'react';
import { DEMO_CERTIFICATES } from '../data/certificates.ts';
import { CertificateRecord } from '../types.ts';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  const [searchCode, setSearchCode] = useState('DEMO-0001');
  const [currentCert, setCurrentCert] = useState<CertificateRecord | null>(DEMO_CERTIFICATES[0]);
  const [hasSearched, setHasSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const found = DEMO_CERTIFICATES.find(
      (c) =>
        c.code.toLowerCase().trim() === searchCode.toLowerCase().trim() ||
        c.idNumber.toLowerCase().includes(searchCode.toLowerCase().trim()) ||
        c.studentName.toLowerCase().includes(searchCode.toLowerCase().trim())
    );
    setCurrentCert(found || null);
    setHasSearched(true);
  };

  const handleQuickSelect = (code: string) => {
    setSearchCode(code);
    const found = DEMO_CERTIFICATES.find((c) => c.code === code);
    setCurrentCert(found || null);
    setHasSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0F1122] text-white p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#51d5ff]/20 text-[#51d5ff] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">workspace_premium</span>
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-white">
                Vista de demostración de certificados
              </h3>
              <p className="text-xs text-[#ebf2f8]/75">
                El dato mostrado es ficticio y no acredita un certificado real.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-6 bg-[#edf4fa] border-b border-slate-200">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                search
              </span>
              <input
                type="text"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                placeholder="Ingresa el código de muestra DEMO-0001"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-[#151d21] focus:outline-none focus:ring-2 focus:ring-[#165192]"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#165192] hover:bg-[#376aac] text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              Consultar
            </button>
          </form>

          {/* Quick suggestions */}
          <div className="flex items-center gap-2 mt-3 text-xs text-[#424750]">
            <span className="font-semibold">Código ficticio:</span>
            <button
              type="button"
              onClick={() => handleQuickSelect('DEMO-0001')}
              className="underline text-[#165192] hover:text-[#006780] font-mono"
            >
              DEMO-0001
            </button>
          </div>
        </div>

        {/* Results Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {currentCert ? (
            <div className="rounded-2xl border-2 border-[#51d5ff]/40 bg-gradient-to-b from-[#f5faff] to-white p-6 shadow-sm relative">
              {/* Demo status tag */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#0F1122] flex items-center justify-center p-1">
                    <img
                      src="/assets/aistudio/image_04076cd5.png"
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold text-[#165192] uppercase tracking-wider block">
                      Escuela de Impuestos
                    </span>
                    <span className="text-[10px] text-slate-500">Ejemplo sin validez académica</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#165192]/10 text-[#165192] border border-[#165192]/20 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">info</span>
                  <span>{currentCert.status}</span>
                </div>
              </div>

              {/* Student details */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-slate-500 uppercase font-semibold">
                    Registro ficticio de demostración:
                  </span>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-extrabold text-[#151d21]">
                    {currentCert.studentName}
                  </h4>
                  <p className="text-xs text-[#424750] font-medium">{currentCert.idNumber}</p>
                </div>

                <div>
                  <span className="text-xs text-slate-500 uppercase font-semibold">
                    Programa de ejemplo:
                  </span>
                  <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-[#165192] mt-0.5">
                    {currentCert.program}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#edf4fa] border border-[#dce3e9] text-xs">
                  <div>
                    <span className="text-slate-500 block">Intensidad:</span>
                    <strong className="text-[#151d21]">{currentCert.hours} Horas</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Fecha del ejemplo:</span>
                    <strong className="text-[#151d21]">{currentCert.issueDate}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Código de muestra:</span>
                    <strong className="text-[#165192] font-mono">{currentCert.code}</strong>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600 break-all">
                  <span className="font-bold text-slate-700">Firma digital de demostración: </span>
                  {currentCert.digitalHash}
                </div>
              </div>
            </div>
          ) : (
            hasSearched && (
              <div className="text-center py-10">
                <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">
                  error
                </span>
                <p className="font-bold text-base text-[#151d21]">Certificado no encontrado</p>
                <p className="text-xs text-[#424750] mt-1 max-w-sm mx-auto">
                  No se encontró un registro activo con el código o documento ingresado. Verifica los datos o comunícate con la secretaría académica.
                </p>
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Este ejemplo usa datos ficticios y no valida certificados reales ni firmas digitales.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-xs font-bold text-[#151d21] transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
