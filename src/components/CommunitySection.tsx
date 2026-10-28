import React from 'react';

export const CommunitySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16" id="comunidad">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[12px] uppercase tracking-widest text-[#165192] font-bold">
            COMUNIDAD ACADÉMICA
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl text-[#151d21] font-extrabold mt-2 tracking-tight">
            El conocimiento se construye con personas.
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-[#424750] mt-3">
            Docentes de amplia trayectoria y profesionales comprometidos con su crecimiento.
          </p>
        </div>

        {/* Photographic Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md group">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Debate tributario entre docentes y estudiantes de posgrado"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvabbfxwc7u6CVjt2JNbWrXn33O_lwDVpXmy9LFzh9OoRPEbbh7_DDSLGyj-QV3H9Vb5pCOgMxqOOcneJ_Migi6HYFpJ6vwv2wQxQNAars0L3pRxnkmt_D8iFhO-SrAW4CYA-nTTGkYImO5GYb7Twl7aI5zCuJM9up6_SjuTw-jEzOFtrnKxpzT9L78Kbc0W3K8MeyGTJQ6Ps7ekb1SVwMn635whLgRo0tfYb8asJbE_3Z0RGyuCQg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            <span className="absolute bottom-3 left-4 text-xs font-semibold text-white drop-shadow">
              Salas ejecutivas y debate técnico
            </span>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md group">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Docente tributarista explicando cálculos de retención en la fuente"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDue41rT1J2lWBuSioiHjZnP9ncOUxY7UxQ9TiIbLzn_L9DT-_uDu4yMBr4xQVASp0hrBjDSLAiQPz8GbruSuUPnSYhBi64S-r7TsgbiSfVjlxEbQL1DBn5S0M3OlcGsDgGyZSbAwAy-MZtkLGYfKU5KNyD7Qi6LbCX3bxv08af-6PZmC62CMZ93GRkX1ScSHKBx2p9qRojxKrl2itNLdNmVwPXO1gUPeB9dT403JRhJqPJzKh4qjGE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            <span className="absolute bottom-3 left-4 text-xs font-semibold text-white drop-shadow">
              Cátedra docente con casos en vivo
            </span>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md group">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Participantes de seminario tributario interactuando en mesa de trabajo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSlNcsbtfxSt2wWODoymJzAw-JD-OwNY_B2fPhamwj2Qm0vlT67LhFr6RSj2picOZlR5t9APtgNKACdV8c5XiR-5kW5-oR9qo_H5tBPzP-SD5xkluIlegjZtr5Pze7_ywqEtuUtEgf60dwszBJKky3LnaEKIHUhBXF_dI3eYBThZIdCwjiTLxk1qznaJEh02zOloZc0Y0JCvYsszBU8afbgZ_1-4pAWScbQ8SM_pFro4cvr4u-1D5i"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            <span className="absolute bottom-3 left-4 text-xs font-semibold text-white drop-shadow">
              Comunidad activa de egresados
            </span>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#edf4fa] border border-[#dce3e9] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#165192] mb-4 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#165192]" />
                <span>Experiencia de Egresado</span>
              </div>
              <p className="font-['Inter'] text-sm text-[#424750] italic mb-6 leading-relaxed">
                "El Diplomado en Gerencia Tributaria me dio las herramientas precisas para estructurar planeación fiscal con total tranquilidad ante posibles requerimientos DIAN."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
              <div className="w-10 h-10 rounded-full bg-[#165192] text-white flex items-center justify-center font-bold text-sm">
                C
              </div>
              <div>
                <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#151d21]">
                  Contador Independiente
                </p>
                <p className="text-xs text-[#424750]">Cohorte Diplomado 2024</p>
              </div>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#edf4fa] border border-[#dce3e9] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#006780] mb-4 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006780]" />
                <span>Experiencia de Egresado</span>
              </div>
              <p className="font-['Inter'] text-sm text-[#424750] italic mb-6 leading-relaxed">
                "Las cápsulas de seminarios son indispensables; resuelven dudas complejas de exógena e IVA y las plantillas en Excel ahorran días enteros de conciliación."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
              <div className="w-10 h-10 rounded-full bg-[#006780] text-white flex items-center justify-center font-bold text-sm">
                A
              </div>
              <div>
                <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#151d21]">
                  Auditor Fiscal Senior
                </p>
                <p className="text-xs text-[#424750]">Firma de Consultoría y Auditoría</p>
              </div>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-[#edf4fa] border border-[#dce3e9] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold text-[#376aac] mb-4 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#376aac]" />
                <span>Experiencia de Egresado</span>
              </div>
              <p className="font-['Inter'] text-sm text-[#424750] italic mb-6 leading-relaxed">
                "El Laboratorio Contable y NIIF es la mejor simulación empresarial que he visto. Recorrer de principio a fin las 5 fases afianzó mi criterio como director financiero."
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
              <div className="w-10 h-10 rounded-full bg-[#376aac] text-white flex items-center justify-center font-bold text-sm">
                D
              </div>
              <div>
                <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#151d21]">
                  Director Financiero
                </p>
                <p className="text-xs text-[#424750]">Sector Comercio y Distribución</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
