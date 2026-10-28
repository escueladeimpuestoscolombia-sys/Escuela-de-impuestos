import React, { useState } from 'react';

export const EnrollmentForm: React.FC = () => {
  const [programType, setProgramType] = useState<'diplomado' | 'seminario' | 'laboratorio'>('diplomado');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [billingType, setBillingType] = useState<'persona' | 'empresa'>('persona');
  const [submitted, setSubmitted] = useState(false);

  const programDetails = {
    diplomado: {
      title: 'Diplomado en Gerencia Tributaria',
      subtitle: '120 horas con certificación académica verificable.',
      hours: '120 Horas',
      label: 'Diplomado',
    },
    seminario: {
      title: 'Seminarios de Actualización Especializada',
      subtitle: 'Actualización intensiva en coyuntura normativa y práctica DIAN.',
      hours: 'Cápsulas Temáticas',
      label: 'Seminarios',
    },
    laboratorio: {
      title: 'Laboratorio Contable y NIIF',
      subtitle: 'Simulación empresarial intensiva en 5 fases reales.',
      hours: '80 Horas',
      label: 'Laboratorio',
    },
  };

  const currentProgram = programDetails[programType];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `¡Hola Escuela de Impuestos! Deseo tramitar mi inscripción:\n` +
      `• Programa: ${currentProgram.title.toUpperCase()}\n` +
      `• Nombre: ${name || 'Interesado'}\n` +
      `• Correo: ${email}\n` +
      `• Teléfono: ${phone}\n` +
      `• Ciudad: ${city}\n` +
      `• Facturación: ${billingType === 'persona' ? 'Persona Natural' : 'Factura a Empresa (RUT Jurídico)'}\n` +
      `• Código de referencia: EI-${Date.now().toString().slice(-5)}`
    );

    // Open WhatsApp in new tab
    const waUrl = `https://wa.me/573167589456?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full bg-[#edf4fa] py-16 sm:py-24 px-4 sm:px-8 lg:px-16" id="inscripcion">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[12px] uppercase tracking-widest text-[#165192] font-bold">
            PROCESO DE ADMISIÓN
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl text-[#151d21] font-extrabold mt-2 tracking-tight">
            Tu siguiente paso comienza aquí.
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-[#424750] mt-3">
            Elige tu formación e inicia tu proceso de inscripción en 3 pasos sencillos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-200">
            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-[#40A677]/10 border border-[#40A677]/30 text-[#1e583c] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#40A677] text-2xl">
                    check_circle
                  </span>
                  <div>
                    <p className="font-bold text-sm">¡Solicitud generada con éxito!</p>
                    <p className="text-xs">Se ha generado tu ticket de WhatsApp con un asesor de admisiones.</p>
                  </div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold underline hover:opacity-75"
                >
                  Nuevo registro
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Program Choice */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#165192] text-white text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  <label className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#151d21]">
                    Selecciona tu formación
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`flex flex-col p-4 rounded-xl cursor-pointer transition-all border ${
                      programType === 'diplomado'
                        ? 'bg-[#d5e3ff]/40 border-[#165192] ring-2 ring-[#165192]/20'
                        : 'bg-[#f5faff] border-slate-200 hover:bg-[#edf4fa]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <input
                        type="radio"
                        name="programType"
                        value="diplomado"
                        checked={programType === 'diplomado'}
                        onChange={() => setProgramType('diplomado')}
                        className="accent-[#165192]"
                      />
                      <span className="material-symbols-outlined text-[#165192] text-xl">school</span>
                    </div>
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#151d21]">
                      Diplomado
                    </span>
                    <span className="text-xs text-[#424750]">120 Horas</span>
                  </label>

                  <label
                    className={`flex flex-col p-4 rounded-xl cursor-pointer transition-all border ${
                      programType === 'seminario'
                        ? 'bg-[#d5e3ff]/40 border-[#165192] ring-2 ring-[#165192]/20'
                        : 'bg-[#f5faff] border-slate-200 hover:bg-[#edf4fa]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <input
                        type="radio"
                        name="programType"
                        value="seminario"
                        checked={programType === 'seminario'}
                        onChange={() => setProgramType('seminario')}
                        className="accent-[#165192]"
                      />
                      <span className="material-symbols-outlined text-[#006780] text-xl">
                        calendar_month
                      </span>
                    </div>
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#151d21]">
                      Seminarios
                    </span>
                    <span className="text-xs text-[#424750]">11 Temáticas</span>
                  </label>

                  <label
                    className={`flex flex-col p-4 rounded-xl cursor-pointer transition-all border ${
                      programType === 'laboratorio'
                        ? 'bg-[#d5e3ff]/40 border-[#165192] ring-2 ring-[#165192]/20'
                        : 'bg-[#f5faff] border-slate-200 hover:bg-[#edf4fa]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <input
                        type="radio"
                        name="programType"
                        value="laboratorio"
                        checked={programType === 'laboratorio'}
                        onChange={() => setProgramType('laboratorio')}
                        className="accent-[#165192]"
                      />
                      <span className="material-symbols-outlined text-[#376aac] text-xl">
                        science
                      </span>
                    </div>
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#151d21]">
                      Laboratorio
                    </span>
                    <span className="text-xs text-[#424750]">Práctico NIIF</span>
                  </label>
                </div>
              </div>

              {/* Step 2: Personal details */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#165192] text-white text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  <label className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#151d21]">
                    Tus datos personales
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#151d21] block mb-1">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. Camila Morales"
                      className="w-full px-4 py-3 rounded-xl bg-[#f5faff] border border-slate-200 text-sm text-[#151d21] focus:outline-none focus:ring-2 focus:ring-[#165192]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#151d21] block mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ejemplo@empresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#f5faff] border border-slate-200 text-sm text-[#151d21] focus:outline-none focus:ring-2 focus:ring-[#165192]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#151d21] block mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+57 300 000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#f5faff] border border-slate-200 text-sm text-[#151d21] focus:outline-none focus:ring-2 focus:ring-[#165192]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#151d21] block mb-1">
                      Ciudad / País *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Bogotá, Colombia"
                      className="w-full px-4 py-3 rounded-xl bg-[#f5faff] border border-slate-200 text-sm text-[#151d21] focus:outline-none focus:ring-2 focus:ring-[#165192]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Billing Type */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#165192] text-white text-xs flex items-center justify-center font-bold">
                    3
                  </span>
                  <label className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#151d21]">
                    Tipo de facturación
                  </label>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-[#151d21]">
                    <input
                      type="radio"
                      name="billingType"
                      value="persona"
                      checked={billingType === 'persona'}
                      onChange={() => setBillingType('persona')}
                      className="accent-[#165192]"
                    />
                    <span>Persona Natural</span>
                  </label>

                  <label className="inline-flex items-center gap-2 cursor-pointer text-xs sm:text-sm text-[#151d21]">
                    <input
                      type="radio"
                      name="billingType"
                      value="empresa"
                      checked={billingType === 'empresa'}
                      onChange={() => setBillingType('empresa')}
                      className="accent-[#165192]"
                    />
                    <span>Factura a Empresa (RUT Jurídico)</span>
                  </label>
                </div>
              </div>

              {/* Submission CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#165192] text-white font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold shadow-lg hover:bg-[#376aac] transition-all cursor-pointer"
                >
                  <span>Continuar proceso</span>
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                </button>

                <a
                  href="https://inscripciones.escueladeimpuestos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#006780] hover:underline flex items-center gap-1"
                >
                  <span>O accede al portal oficial de inscripciones</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </form>
          </div>

          {/* Right Column: Live Dynamic Preview Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#0F1122] text-[#ebf2f8] shadow-2xl border border-white/10">
            <div className="space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-[#51d5ff]/20 text-[#51d5ff] text-xs uppercase font-bold tracking-wider inline-block">
                RESUMEN DE TU PROGRAMA
              </span>

              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                  {currentProgram.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#ebf2f8]/75 mt-1 leading-relaxed">
                  {currentProgram.subtitle}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex justify-between text-xs sm:text-sm text-[#ebf2f8]/80">
                  <span>Postulante:</span>
                  <span className="font-semibold text-white">
                    {name.trim() !== '' ? name : 'Por definir'}
                  </span>
                </div>

                <div className="flex justify-between text-xs sm:text-sm text-[#ebf2f8]/80">
                  <span>Modalidad:</span>
                  <span className="font-semibold text-[#51d5ff]">Virtual sincrónico</span>
                </div>

                <div className="flex justify-between text-xs sm:text-sm text-[#ebf2f8]/80">
                  <span>Campus virtual:</span>
                  <span className="font-semibold text-white">Acceso 24/7 incluido</span>
                </div>

                <div className="flex justify-between text-xs sm:text-sm text-[#ebf2f8]/80">
                  <span>Facturación:</span>
                  <span className="font-semibold text-[#b8eaff]">
                    {billingType === 'persona' ? 'Persona Natural' : 'Empresa / RUT'}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#51d5ff]/10 border border-[#51d5ff]/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#51d5ff] text-xl mt-0.5">
                  verified_user
                </span>
                <p className="text-xs text-[#ebf2f8]/90 leading-relaxed">
                  Tus datos están protegidos bajo nuestra política institucional conforme a la Ley 1581 de 2012 de Protección de Datos Personales.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="https://wa.me/573167589456?text=Hola,%20quisiera%20ayuda%20para%20completar%20mi%20inscripci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[#40A677] text-lg">support_agent</span>
                <span>¿Dudas con tu inscripción? Habla con soporte</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
