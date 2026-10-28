import React, { useState, useMemo } from 'react';
import { SEMINARS_DATA } from '../data/seminars.ts';
import { Seminar } from '../types.ts';

interface SeminarsCatalogProps {
  onSelectSeminar: (seminar: Seminar) => void;
}

export const SeminarsCatalog: React.FC<SeminarsCatalogProps> = ({ onSelectSeminar }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSeminars = useMemo(() => {
    return SEMINARS_DATA.filter((sem) => {
      const matchesCategory = selectedCategory === 'all' || sem.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        sem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sem.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sem.number.includes(searchQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16" id="seminarios">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-2">
          <span className="text-[12px] uppercase tracking-widest text-[#006780] font-bold">
            ACTUALIZACIÓN EJECUTIVA
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl text-[#151d21] font-extrabold tracking-tight">
            El conocimiento tributario evoluciona. Tú también.
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-[#424750] mt-2">
            Actualízate con seminarios enfocados en los cambios normativos y sus implicaciones prácticas directas para el ejercicio 2025.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto w-full">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#165192] text-white shadow-md'
                  : 'bg-[#edf4fa] text-[#151d21] hover:bg-[#dce3e9]'
              }`}
            >
              Todos los seminarios (11)
            </button>
            <button
              onClick={() => setSelectedCategory('renta')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'renta'
                  ? 'bg-[#165192] text-white shadow-md'
                  : 'bg-[#edf4fa] text-[#151d21] hover:bg-[#dce3e9]'
              }`}
            >
              Renta e IVA
            </button>
            <button
              onClick={() => setSelectedCategory('dian')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'dian'
                  ? 'bg-[#165192] text-white shadow-md'
                  : 'bg-[#edf4fa] text-[#151d21] hover:bg-[#dce3e9]'
              }`}
            >
              DIAN y Exógena
            </button>
            <button
              onClick={() => setSelectedCategory('regimen')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'regimen'
                  ? 'bg-[#165192] text-white shadow-md'
                  : 'bg-[#edf4fa] text-[#151d21] hover:bg-[#dce3e9]'
              }`}
            >
              Regímenes y Cierre
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar seminario..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#edf4fa] border border-slate-200 text-xs sm:text-sm text-[#151d21] focus:outline-none focus:ring-2 focus:ring-[#165192]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSeminars.map((sem) => (
            <div
              key={sem.id}
              onClick={() => onSelectSeminar(sem)}
              className="group p-6 sm:p-7 rounded-2xl bg-[#edf4fa] hover:bg-[#e4ecf4] border border-[#dce3e9] transition-all flex flex-col justify-between shadow-sm hover:shadow-md cursor-pointer hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-[#d5e3ff] text-[#165192] group-hover:bg-[#165192] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-xl">{sem.icon}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-[#006780] uppercase tracking-wider">
                      Seminario {sem.number}
                    </span>
                  </div>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#151d21] mb-2 group-hover:text-[#165192] transition-colors">
                  {sem.title}
                </h3>

                <p className="font-['Inter'] text-xs sm:text-sm text-[#424750] leading-relaxed line-clamp-3">
                  {sem.shortDesc}
                </p>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-slate-200/60 mt-4">
                <span className="text-xs font-semibold text-[#165192] group-hover:text-[#376aac] flex items-center gap-1">
                  <span>Ver temario completo</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </span>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  {sem.categoryLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSeminars.length === 0 && (
          <div className="text-center py-12 bg-[#edf4fa] rounded-2xl border border-dashed border-slate-300">
            <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">
              search_off
            </span>
            <p className="text-sm font-semibold text-[#151d21]">
              No se encontraron seminarios para "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-bold text-[#165192] hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
