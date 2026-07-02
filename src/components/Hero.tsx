import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, ArrowRight, Layers, Sparkles, Building2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultationModal: (prefilledService?: string) => void;
}

export default function Hero({ onOpenConsultationModal }: HeroProps) {
  // Local state for the interactive estimator widget
  const [chairCount, setChairCount] = useState<number>(2);
  const [designLevel, setDesignLevel] = useState<'Basic' | 'Premium' | 'Luxury'>('Premium');

  const getEstimates = () => {
    let areaRange = '300 - 450 sq.ft.';
    let timeline = '35 - 40 Days';
    let complianceCost = 'Standard State Fees';
    let designFocus = 'Ergonomic zoning, patient relaxation accent.';

    if (chairCount === 1) {
      areaRange = '150 - 250 sq.ft.';
      timeline = '25 - 30 Days';
    } else if (chairCount >= 3) {
      areaRange = '600 - 900 sq.ft.';
      timeline = '45 - 55 Days';
    }

    if (designLevel === 'Basic') {
      designFocus = 'Functional, smart spatial flows.';
    } else if (designLevel === 'Luxury') {
      designFocus = 'Nordic spa theme, acoustic insulation, customized marbles.';
    }

    return { areaRange, timeline, designFocus, complianceCost };
  };

  const { areaRange, timeline, designFocus } = getEstimates();

  const handleExploreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-radial from-purple-50/50 via-white to-white py-12 transition-colors duration-300 dark:from-neutral-900/50 dark:via-neutral-950 dark:to-neutral-950 lg:py-24" id="header">
      {/* Visual background decorations */}
      <div className="absolute top-1/4 left-1/10 -z-10 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-900/20" />
      <div className="absolute right-1/10 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-amber-100/30 blur-3xl dark:bg-amber-800/10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-purple-100/80 px-3.5 py-1.5 text-xs font-semibold text-[#6A1B9A] dark:bg-amber-400/10 dark:text-amber-400"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>India's Premium Turnkey Dental Infrastructure Specialist</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Complete Dental <br />
              <span className="bg-gradient-to-r from-[#6A1B9A] to-purple-500 bg-clip-text text-transparent dark:from-amber-400 dark:to-orange-400">
                Clinic Setup & Growth
              </span>{' '}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-gray-600 dark:text-neutral-300 md:text-lg lg:max-w-2xl"
            >
              From clinic planning and interior design to premium equipment supply, regulatory compliance, custom digital marketing, and lifetime technical support — <strong>Dentroz</strong> helps dentists build, launch, and scale highly successful practices.
            </motion.p>

            {/* Quick trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 pb-4 sm:grid-cols-3 lg:max-w-xl"
            >
              <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2.5 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                <Building2 className="h-5 w-5 text-[#6A1B9A] dark:text-amber-400" />
                <span className="text-xs font-bold text-gray-700 dark:text-neutral-200">100+ Clinics</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2.5 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                <span className="text-xs font-bold text-gray-700 dark:text-neutral-200">100% AERB Assured</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2.5 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 col-span-2 sm:col-span-1">
                <Calendar className="h-5 w-5 text-amber-500" />
                <span className="text-xs font-bold text-gray-700 dark:text-neutral-200">24/7 SLA Tech Support</span>
              </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => onOpenConsultationModal()}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6A1B9A] to-purple-700 px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:translate-y-[-1px] hover:shadow-xl dark:from-amber-400 dark:to-amber-500 dark:text-neutral-950"
                id="hero-free-consultation-btn"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={handleExploreClick}
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-gray-300 bg-white px-7 py-4 text-base font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-[#6A1B9A] dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-amber-400"
                id="hero-explore-services-btn"
              >
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* Hero Right - Estimator Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-xl transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900/90 sm:p-8">
              {/* Gold Ribbon Tag */}
              <div className="absolute -top-3 right-6 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-neutral-900">
                <Sparkles className="h-3 w-3 animate-spin text-neutral-900" />
                <span>Estimate Clinic Setup</span>
              </div>

              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Practice Planner & Estimator
              </h2>
              <p className="mt-1 text-xs text-gray-500 dark:text-neutral-400">
                Select your parameters below to get instant spatial and timeline benchmarks.
              </p>

              {/* Selector 1: Chair Counts */}
              <div className="mt-6">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                  Step 1: Number of Dental Chairs
                </label>
                <div className="mt-2.5 grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setChairCount(num)}
                      className={`rounded-xl py-2.5 text-sm font-bold transition-all focus:outline-none ${
                        chairCount === num
                          ? 'bg-[#6A1B9A] text-white shadow-md dark:bg-amber-400 dark:text-neutral-950'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
                      }`}
                      id={`planner-chair-${num}`}
                    >
                      {num === 3 ? '3+ Chairs' : `${num} Chair`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 2: Interior Finishes */}
              <div className="mt-5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                  Step 2: Interior Design Class
                </label>
                <div className="mt-2.5 grid grid-cols-3 gap-2">
                  {(['Basic', 'Premium', 'Luxury'] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setDesignLevel(level)}
                      className={`rounded-xl py-2.5 text-xs font-bold transition-all focus:outline-none ${
                        designLevel === level
                          ? 'bg-[#6A1B9A] text-white shadow-md dark:bg-amber-400 dark:text-neutral-950'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200'
                      }`}
                      id={`planner-design-${level}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Results outputs */}
              <div className="mt-6 rounded-xl bg-purple-50/50 p-4 transition-colors duration-300 dark:bg-neutral-800/40 border border-purple-100/40 dark:border-neutral-800">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-400 dark:text-neutral-500 font-bold">
                      Estimated Area Required
                    </span>
                    <span className="mt-1 block text-sm font-extrabold text-[#6A1B9A] dark:text-amber-400">
                      {areaRange}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-gray-400 dark:text-neutral-500 font-bold">
                      Est. Execution Time
                    </span>
                    <span className="mt-1 block text-sm font-extrabold text-gray-800 dark:text-white">
                      {timeline}
                    </span>
                  </div>
                </div>

                <div className="mt-3.5 border-t border-purple-100/50 pt-3 dark:border-neutral-800/80">
                  <span className="block text-[10px] uppercase tracking-wider text-gray-400 dark:text-neutral-500 font-bold">
                    Design Theme focus
                  </span>
                  <span className="mt-1 block text-xs font-medium text-gray-600 dark:text-neutral-300">
                    {designFocus}
                  </span>
                </div>

                <div className="mt-2.5 flex items-center justify-between rounded bg-white px-2 py-1.5 dark:bg-neutral-900">
                  <span className="text-[10px] text-gray-400 dark:text-neutral-500">Includes AERB, State Pollution guidance</span>
                  <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold text-emerald-800 uppercase tracking-widest dark:bg-emerald-900/30 dark:text-emerald-400">
                    Verified
                  </span>
                </div>
              </div>

              {/* Bottom CTA for the Estimator */}
              <button
                onClick={() => onOpenConsultationModal(`Clinic Setup (Chairs: ${chairCount}, Design: ${designLevel})`)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 py-3.5 text-xs font-bold text-white transition-all hover:bg-neutral-800 focus:outline-none dark:bg-amber-400 dark:text-neutral-950 dark:hover:bg-amber-500"
                id="submit-planner-lead-btn"
              >
                <span>Request Pricing blueprint for this Setup</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
