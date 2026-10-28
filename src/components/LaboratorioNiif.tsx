import React, { useState } from 'react';
import { LAB_PHASES_DATA } from '../data/labPhases.ts';
import { LabPhase } from '../types.ts';

interface LaboratorioNiifProps {
  onEnrollLab: () => void;
}

export const LaboratorioNiif: React.FC<LaboratorioNiifProps> = ({ onEnrollLab }) => {
  const [selectedPhase, setSelectedPhase] = useState<LabPhase>(LAB_PHASES_DATA[0]);
  const [simulationActive, setSimulationActive] = useState<boolean>(false);

  return (
    <section className="w-full bg-[#0F1122] text-[#ebf2f8] py-16 sm:py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden" id="laboratorio">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#51d5ff]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#165192]/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <div className="max-w-2xl">
            <span className="text-[12px] uppercase tracking-widest text-[#51d5ff] font-bold">
              SIMULACIÓN EMPRESARIAL INTEGRAL
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 tracking-tight">
              De la teoría a la realidad.
            </h2>
            <p className="font-['Inter'] text-base sm:text-lg text-[#ebf2f8]/80 mt-3 leading-relaxed">
              Aprende el ciclo contable y tributario de una empresa paso a paso a través de una inmersión completa sin vacíos conceptuales.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onEnrollLab}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#51d5ff] text-[#001f28] text-xs sm:text-sm font-bold hover:bg-[#b8eaff] transition-all shadow-[0_0_24px_rgba(81,213,255,0.35)] cursor-pointer"
            >
              <span>Inscribirme al laboratorio</span>
              <span className="material-symbols-outlined text-lg">assignment_turned_in</span>
            </button>
          </div>
        </div>

        {/* 5-Phase Horizontal Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {LAB_PHASES_DATA.map((phase) => {
            const isSelected = selectedPhase.number === phase.number;
            return (
              <div
                key={phase.number}
                onClick={() => {
                  setSelectedPhase(phase);
                  setSimulationActive(true);
                }}
                className={`p-6 rounded-2xl backdrop-blur-md flex flex-col justify-between transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-white/15 border-[#51d5ff] shadow-[0_0_24px_rgba(81,213,255,0.25)] scale-[1.02]'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-['Plus_Jakarta_Sans'] text-3xl font-black text-[#51d5ff] block">
                      {phase.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#b8eaff] bg-white/10 px-2 py-0.5 rounded-md">
                      {phase.tag}
                    </span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white mb-1.5">
                    {phase.title}
                  </h4>
                  <p className="text-xs text-[#ebf2f8]/70 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-5 flex items-center justify-between text-[#51d5ff] text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base">{phase.icon}</span>
                    <span>{phase.subtitle}</span>
                  </div>
                  <span className="text-[11px] underline opacity-80 hover:opacity-100">
                    Inspeccionar
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Simulation Deep-Dive Panel */}
        <div className="rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#51d5ff]/20 text-[#51d5ff] border border-[#51d5ff]/40 flex items-center justify-center font-bold text-lg">
                {selectedPhase.number}
              </span>
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#b8eaff] font-bold">
                  Simulador de Casos — {selectedPhase.tag}
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white">
                  Fase {selectedPhase.number}: {selectedPhase.title} en la Empresa Simulada
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#40A677] animate-ping" />
              <span className="text-xs text-[#b8eaff] font-mono">
                Caso: "Innovación Fiscal S.A.S." (NIT 901.884.219-5)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Practical exercise description */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#51d5ff] font-bold mb-1">
                  Reto Práctico del Estudiante:
                </h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  {selectedPhase.practicalExercise}
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-wider text-[#b8eaff] font-bold mb-2">
                  Entregables y Habilidades Verificadas:
                </h4>
                <ul className="space-y-2">
                  {selectedPhase.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#ebf2f8]/80">
                      <span className="material-symbols-outlined text-[#40A677] text-base mt-0.5">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Document preview */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-[#090b14] border border-white/10 font-mono text-xs">
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#51d5ff] mb-3 pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">terminal</span>
                    Voucher Contable Simulado
                  </span>
                  <span className="text-slate-400">NIIF para PYMES</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-sans text-xs bg-white/5 p-3 rounded-lg border border-white/5">
                  {selectedPhase.sampleDocument}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Software: AP Contables Cloud</span>
                <button
                  onClick={onEnrollLab}
                  className="px-3.5 py-1.5 rounded-lg bg-[#376aac] hover:bg-[#51d5ff] hover:text-[#001f28] text-white text-xs font-bold transition-all"
                >
                  Postular al Laboratorio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
