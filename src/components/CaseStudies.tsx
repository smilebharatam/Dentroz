import { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { Building2, Sparkles, MapPin, Compass, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function CaseStudies() {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const currentCase = CASE_STUDIES[selectedCaseIdx];

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300" id="case-studies">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6A1B9A] dark:text-amber-400">
              PROJECT REVIEWS
            </span>
            <h2 className="mt-2 font-sans text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Clinic Architecture Showcase
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-500 max-w-xl dark:text-neutral-400">
              Explore how Dentroz layouts and engineers successfully navigated high challenge sites to deliver luxury, ergonomics, and seamless diagnostic support.
            </p>
          </div>

          {/* Quick slider controls */}
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none" id="case-studies-selector">
            {CASE_STUDIES.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCaseIdx(idx)}
                className={`rounded-xl px-4 py-2.5 text-xs font-bold whitespace-nowrap focus:outline-none transition-all ${
                  selectedCaseIdx === idx 
                    ? 'bg-[#6A1B9A] text-white shadow-md dark:bg-amber-400 dark:text-neutral-950' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-850'
                }`}
              >
                Case Study {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case details card */}
        <motion.div
          key={currentCase.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-gray-100 bg-gray-50/50 p-6 sm:p-10 dark:border-neutral-900 dark:bg-neutral-900/40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Site metrics statistics & design spec (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-[#6A1B9A] dark:text-amber-400 font-bold uppercase tracking-wider">
                  <MapPin className="h-4 w-4" />
                  <span>{currentCase.location}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">
                  {currentCase.title}
                </h3>
              </div>

              {/* Site Specs bento metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white p-3.5 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                  <span className="block text-[10px] text-gray-400 dark:text-neutral-500 font-bold uppercase tracking-wider">Estimated Area</span>
                  <span className="mt-1 block text-sm font-extrabold text-gray-800 dark:text-white">{currentCase.area}</span>
                </div>
                <div className="rounded-xl bg-white p-3.5 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                  <span className="block text-[10px] text-gray-400 dark:text-neutral-500 font-bold uppercase tracking-wider">Dental Chairs</span>
                  <span className="mt-1 block text-sm font-extrabold text-[#6A1B9A] dark:text-amber-400">{currentCase.chairs} Bays</span>
                </div>
                <div className="rounded-xl bg-white p-3.5 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 col-span-2">
                  <span className="block text-[10px] text-gray-400 dark:text-neutral-500 font-bold uppercase tracking-wider">Delivery timeline</span>
                  <span className="mt-1 block text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> Direct delivery handoff inside {currentCase.duration}
                  </span>
                </div>
              </div>

              {/* design concept blueprint note */}
              <div className="rounded-xl bg-purple-50/70 p-4 border border-purple-100/40 dark:bg-neutral-900 dark:border-neutral-800">
                <div className="flex items-start gap-2.5">
                  <Compass className="h-5 w-5 text-[#6A1B9A] dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-extrabold text-[#6A1B9A] dark:text-amber-400 uppercase tracking-widest">Designed Concept focus:</h4>
                    <p className="mt-1 text-xs text-gray-700 dark:text-neutral-300 leading-relaxed font-semibold">
                      {currentCase.designConcept}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Challenge to solution before/after card flows (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Challenge panel */}
              <div className="rounded-2xl bg-white p-5 shadow-xs border border-gray-100 dark:bg-neutral-900 dark:border-neutral-800 space-y-2">
                <span className="inline-block rounded-md bg-amber-100 px-2.5 py-1 text-[9px] font-extrabold uppercase text-amber-850 dark:bg-amber-400/10 dark:text-amber-400">
                  Target Challenge
                </span>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300 leading-relaxed font-medium">
                  {currentCase.challenge}
                </p>
              </div>

              {/* Solution panel */}
              <div className="rounded-2xl bg-white p-5 shadow-xs border border-gray-100 dark:bg-neutral-900 dark:border-neutral-800 space-y-2 border-l-4 border-l-emerald-500">
                <span className="inline-block rounded-md bg-emerald-100 px-2.5 py-1 text-[9px] font-extrabold uppercase text-emerald-850 dark:bg-emerald-900/20 dark:text-emerald-400">
                  Engineering Solutions
                </span>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-300 leading-relaxed">
                  {currentCase.solution}
                </p>
              </div>

              {/* Before/After Visual highlights desk */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl border border-gray-150 p-4 bg-gray-100/40 dark:bg-neutral-950 dark:border-neutral-800">
                  <span className="text-[9px] tracking-widest uppercase font-bold text-gray-400 dark:text-neutral-500 block mb-1">State: Before Dentroz</span>
                  <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed italic">
                    "{currentCase.beforeImg}"
                  </p>
                </div>
                <div className="rounded-xl border border-indigo-100 p-4 bg-emerald-50/30 dark:bg-neutral-900/50 dark:border-neutral-800">
                  <span className="text-[9px] tracking-widest uppercase font-bold text-[#6A1B9A] dark:text-amber-400 block mb-1">State: After Turnkey Delivery</span>
                  <p className="text-xs text-gray-700 dark:text-neutral-200 leading-relaxed font-medium">
                    "{currentCase.afterImg}"
                  </p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
