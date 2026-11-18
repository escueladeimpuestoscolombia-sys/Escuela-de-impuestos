import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCertificates: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenCertificates
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'formacion', label: 'Programas' },
    { id: 'diplomado', label: 'Diplomados' },
    { id: 'seminarios', label: 'Seminarios' },
    { id: 'laboratorio', label: 'Laboratorio NIIF' },
    { id: 'metodologia', label: 'Metodología' },
    { id: 'ap-contables', label: 'AP Contables' },
    { id: 'inscripcion', label: 'Inscripciones' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F1122]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand mark */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/5 border border-white/15 p-1 flex items-center justify-center group-hover:scale-105 transition-transform">
            <img 
              src="/assets/brand-mark.svg"
              alt="Escuela de Impuestos" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${
                  isActive
                    ? 'bg-[#376aac] text-[#e0eaff] font-semibold shadow-sm'
                    : 'text-[#ebf2f8]/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <a
            href="https://www.panoramatributario.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-lg text-[13px] font-semibold text-[#b8eaff] hover:text-white hover:bg-[#006780]/30 transition-all inline-flex items-center gap-1.5"
            aria-label="Abrir la revista Panorama Tributario en una pestaña nueva"
          >
            <span className="material-symbols-outlined text-sm">auto_stories</span>
            Revista
          </a>
          <button
            onClick={onOpenCertificates}
            className="px-3 py-2 rounded-lg text-[13px] font-medium text-[#b8eaff] hover:text-white hover:bg-[#006780]/30 transition-all flex items-center gap-1.5"
            title="Validar certificado emitido"
          >
            <span className="material-symbols-outlined text-sm">workspace_premium</span>
            Certificados
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => handleNavClick('inscripcion')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#165192] hover:bg-[#376aac] text-white text-[13px] font-semibold transition-all shadow-[0_2px_12px_rgba(22,81,146,0.4)] hover:shadow-[0_4px_16px_rgba(81,213,255,0.3)] active:scale-95"
          >
            <span className="material-symbols-outlined text-base">how_to_reg</span>
            <span>Inscribirme ahora</span>
          </button>

          {/* Student Profile Quick Tooltip */}
          <button
            onClick={onOpenCertificates}
            title="Consulta y Verificación de Estudiantes"
            className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#51d5ff]/50 hover:ring-[#51d5ff] transition-all cursor-pointer relative group flex-shrink-0"
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1VoDb6lTyJ4Cg_GLop-S-WK3y3WAj9nVcu4LNdvzjdnJMj9h06SGO8dbCOp7SdX9cz1dv78GnsUAxn3f16i2TbqnV0jCXCblfmbAytM3KCu0APilW5lyoxLoctIF8dznkjhZEImz84HabK-bfL6lMyd1Z-1GjLlMhei6yFxljuWDv2xlE8lwC8H3TapHDvW7MvSEmQZ1Ki393ilwK6p-8H6DhI9nmFLW-2ZP7DoJeTa1q8kjirv6ZeSIE9IrkNK3nta-gcBodCI3g"
              alt="Portal Académico"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0F1122] border-b border-white/10 px-4 py-4 space-y-1 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-[#376aac] text-white font-semibold'
                  : 'text-[#ebf2f8]/80 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://www.panoramatributario.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold text-[#b8eaff] hover:bg-white/5 hover:text-white inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base">auto_stories</span>
            Revista Panorama Tributario
          </a>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenCertificates();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#b8eaff] bg-[#006780]/30 hover:bg-[#006780]/50"
            >
              <span className="material-symbols-outlined text-base">verified</span>
              Consulta de Certificados
            </button>
            <a
              href="https://wa.me/573167589456"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#40A677] hover:bg-[#348a62]"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Hablar por WhatsApp (+57 316 758 9456)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
