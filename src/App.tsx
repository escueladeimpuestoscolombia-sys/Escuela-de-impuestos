/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { FormationsBento } from './components/FormationsBento.tsx';
import { DiplomadoFeatured } from './components/DiplomadoFeatured.tsx';
import { SeminarsCatalog } from './components/SeminarsCatalog.tsx';
import { LaboratorioNiif } from './components/LaboratorioNiif.tsx';
import { ApContablesBanner } from './components/ApContablesBanner.tsx';
import { Methodology } from './components/Methodology.tsx';
import { InstitutionalSection } from './components/InstitutionalSection.tsx';
import { EnrollmentForm } from './components/EnrollmentForm.tsx';
import { FaqAndServices } from './components/FaqAndServices.tsx';
import { ClosingCta } from './components/ClosingCta.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { CertificateModal } from './components/CertificateModal.tsx';
import { SeminarDetailModal } from './components/SeminarDetailModal.tsx';
import { Seminar } from './types.ts';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState<boolean>(false);
  const [selectedSeminar, setSelectedSeminar] = useState<Seminar | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll listener to update active navigation state
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'formacion',
        'diplomado',
        'seminarios',
        'laboratorio',
        'ap-contables',
        'metodologia',
        'institucional',
        'inscripcion',
        'faq'
      ];

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5faff] text-[#151d21] font-['Inter'] selection:bg-[#51d5ff]/30 selection:text-[#005a70]">
      {/* Fixed Header */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenCertificates={() => setIsCertificateModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="w-full">
        {/* Section 1: Hero */}
        <div id="hero">
          <Hero
            onExplorePrograms={() => scrollToSection('formacion')}
            onOpenAdvisor={() => {
              window.open(
                'https://wa.me/573167589456?text=Hola,%20quisiera%20solicitar%20asesor%C3%ADa%20sobre%20los%20programas%20de%20la%20Escuela%20de%20Impuestos.',
                '_blank',
                'noopener,noreferrer'
              );
            }}
          />
        </div>

        {/* Section 2: Formations Bento */}
        <FormationsBento
          onSelectDiplomado={() => scrollToSection('diplomado')}
          onSelectSeminarios={() => scrollToSection('seminarios')}
          onSelectLaboratorio={() => scrollToSection('laboratorio')}
        />

        {/* Section 3: Featured Diplomado */}
        <DiplomadoFeatured
          onEnrollDiplomado={() => scrollToSection('inscripcion')}
        />

        {/* Section 4: 11 Seminars Catalog with Filtering */}
        <SeminarsCatalog
          onSelectSeminar={(seminar) => setSelectedSeminar(seminar)}
        />

        {/* Section 5: Laboratorio Contable y NIIF Inmersivo */}
        <LaboratorioNiif
          onEnrollLab={() => scrollToSection('inscripcion')}
        />

        {/* Section 6: AP Contables Cloud Cross-Selling */}
        <ApContablesBanner />

        {/* Section 7: Methodology Bento */}
        <Methodology />

        {/* Section 8: Institutional Section & Accordions */}
        <InstitutionalSection />

        {/* Section 10: Dynamic Enrollment Form */}
        <EnrollmentForm />

        {/* Section 11: Academic FAQ & Services */}
        <FaqAndServices
          onOpenCertificates={() => setIsCertificateModalOpen(true)}
        />

        {/* Section 12: High-Impact Closing */}
        <ClosingCta
          onExplorePrograms={() => scrollToSection('formacion')}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenCertificates={() => setIsCertificateModalOpen(true)}
      />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Certificate Validation Modal */}
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
      />

      {/* Seminar Details Modal */}
      <SeminarDetailModal
        seminar={selectedSeminar}
        onClose={() => setSelectedSeminar(null)}
        onEnrollSeminar={(sem) => {
          scrollToSection('inscripcion');
        }}
      />
    </div>
  );
}
