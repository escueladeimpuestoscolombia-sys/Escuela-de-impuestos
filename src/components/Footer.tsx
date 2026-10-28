import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCertificates: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCertificates }) => {
  return (
    <footer className="w-full bg-[#181d22] text-[#ebf2f8] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Brand & Identity */}
          <div>
            <div 
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-3 mb-4 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-white/10 p-1 flex items-center justify-center">
                <img
                  src="/assets/aistudio/image_04076cd5.png"
                  alt="Escuela de Impuestos"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-lg tracking-tight text-white">
                Escuela de Impuestos
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#ebf2f8]/70 mb-5 leading-relaxed">
              Institución especializada en formación fiscal avanzada, planeación tributaria estratégica, consultoría de auditoría y aplicación rigurosa de marcos normativos NIIF.
            </p>

            <div className="flex items-center gap-2 text-[#b8eaff] text-xs font-medium">
              <span className="material-symbols-outlined text-base">verified</span>
              <span>Certificación académica y técnica verificada</span>
            </div>
          </div>

          {/* Col 2: Oferta Académica */}
          <div>
            <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white mb-4">
              Oferta Académica
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#ebf2f8]/75">
              <li>
                <button
                  onClick={() => onNavigate('formacion')}
                  className="hover:text-[#51d5ff] transition-colors text-left"
                >
                  Programas de Formación
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('diplomado')}
                  className="hover:text-[#51d5ff] transition-colors text-left"
                >
                  Diplomados en Fiscalidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seminarios')}
                  className="hover:text-[#51d5ff] transition-colors text-left"
                >
                  Seminarios de Reforma Tributaria
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('laboratorio')}
                  className="hover:text-[#51d5ff] transition-colors text-left"
                >
                  Laboratorio Práctico NIIF
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ap-contables')}
                  className="hover:text-[#51d5ff] transition-colors text-left"
                >
                  Actualizaciones AP Contables
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Servicios y Estudiantes */}
          <div>
            <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white mb-4">
              Servicios y Estudiantes
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#ebf2f8]/75">
              <li>
                <button
                  onClick={onOpenCertificates}
                  className="hover:text-[#51d5ff] transition-colors flex items-center gap-1.5 text-left text-[#51d5ff] font-semibold"
                >
                  <span className="material-symbols-outlined text-sm">workspace_premium</span>
                  Consulta de Certificados
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('metodologia')}
                  className="hover:text-[#51d5ff] transition-colors text-left"
                >
                  Metodología Pedagógica
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/573167589456?text=Hola,%20necesito%20soporte%20al%20estudiante."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#51d5ff] transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">help</span>
                  Mesa de Soporte al Estudiante
                </a>
              </li>
              <li>
                <a
                  href="https://inscripciones.escueladeimpuestos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#51d5ff] transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">school</span>
                  Acceso a Campus Virtual
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('institucional')}
                  className="hover:text-[#51d5ff] transition-colors text-left"
                >
                  Términos y Tratamiento de Datos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Oficial */}
          <div>
            <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white mb-4">
              Contacto Oficial
            </h4>
            <p className="text-xs text-[#ebf2f8]/70 mb-3">
              Asesoría corporativa y admisiones académicas:
            </p>
            <div className="space-y-2 text-xs sm:text-sm mb-4">
              <a
                href="https://wa.me/573167589456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#51d5ff] hover:text-[#b8eaff] transition-colors"
              >
                <span className="material-symbols-outlined text-base">call</span>
                <span>+57 316 758 9456</span>
              </a>
              <div className="flex items-center gap-2 text-[#ebf2f8]/80">
                <span className="material-symbols-outlined text-base">mail</span>
                <span>admisiones@escueladeimpuestos.co</span>
              </div>
              <div className="flex items-center gap-2 text-[#ebf2f8]/80">
                <span className="material-symbols-outlined text-base">location_on</span>
                <span>Bogotá D.C., Colombia</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="text-[10px] uppercase tracking-wider text-[#b8eaff] block mb-1 font-bold">
                Horario de Atención
              </span>
              <span className="text-xs text-[#ebf2f8]/80">
                Lunes a Viernes: 8:00 AM - 6:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#ebf2f8]/60">
          <p>© 2025 Escuela de Impuestos V2. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('institucional')}
              className="hover:text-white transition-colors"
            >
              Privacidad & Habeas Data
            </button>
            <button
              onClick={() => onNavigate('institucional')}
              className="hover:text-white transition-colors"
            >
              Términos Académicos
            </button>
            <a
              href="https://wa.me/573167589456"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Atención al Cliente
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
