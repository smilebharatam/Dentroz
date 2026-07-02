import { useState } from 'react';
import { PROCESS_STEPS } from '../data';
import { CalendarRange, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-900/40 border-y border-gray-100 dark:border-neutral-800 transition-colors duration-300" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Content */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#6A1B9A] dark:text-amber-400">
            TURNKEY TIMELINE
          </span>
          <h2 className="mt-2 font-sans text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our 7-Step Seamless Handoff Blueprint
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
            From empty walls to high-throughput clinical operations, we guide your clinic journey securely. Select a step to explore detailed checklists.
          </p>
        </div>

        {/* Step buttons progress timeline switcher */}
        <div className="relative mb-12 flex justify-between items-center max-w-3xl mx-auto overflow-x-auto pb-4 scrollbar-none" id="timeline-stepper">
          {/* Connecting line */}
          <div className="absolute top-5 left-2 right-2 h-0.5 bg-gray-200 dark:bg-neutral-800 -z-10 hidden sm:block" />
          
          {PROCESS_STEPS.map((step) => {
            const isCompleted = step.step <= activeStep;
            const isSelected = step.step === activeStep;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(step.step)}
                className="flex flex-col items-center shrink-0 focus:outline-none px-4 sm:px-0"
              >
                <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm transition-all shadow-sm ${
                  isSelected 
                    ? 'bg-[#6A1B9A] text-white ring-4 ring-purple-100 dark:bg-amber-400 dark:text-neutral-950 dark:ring-amber-400/20' 
                    : isCompleted 
                      ? 'bg-[#6A1B9A]/80 text-white dark:bg-amber-400/80 dark:text-neutral-950' 
                      : 'bg-white text-gray-400 border border-gray-200 dark:bg-neutral-900 dark:border-neutral-800'
                }`}>
                  {step.step}
                </div>
                <span className={`mt-2 text-[10px] font-extrabold uppercase tracking-wider ${
                  isSelected 
                    ? 'text-[#6A1B9A] dark:text-amber-400' 
                    : 'text-gray-400 dark:text-neutral-500'
                }`}>
                  Step {step.step}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail Showcase Panel */}
        <div className="max-w-4xl mx-auto">
          {PROCESS_STEPS.filter(s => s.step === activeStep).map((currentStep) => (
            <motion.div
              key={currentStep.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-10 shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Left col info (5 spans) */}
                <div className="md:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded bg-purple-50 px-3 py-1 text-xs font-bold text-[#6A1B9A] dark:bg-amber-400/10 dark:text-amber-400">
                    <CalendarRange className="h-4 w-4" />
                    <span>Project Stage {currentStep.step}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight">
                    {currentStep.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
                    {currentStep.description}
                  </p>

                  <div className="pt-4 flex items-center gap-2 text-xs text-[#6A1B9A] dark:text-amber-400 font-bold">
                    <span>How we assist you</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Right col elements checklist (7 spans) */}
                <div className="md:col-span-7 bg-gray-50 p-6 rounded-xl dark:bg-neutral-950 border border-gray-100 dark:border-neutral-850 space-y-4">
                  <span className="block text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest">
                    Execution Action Plan Items:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {currentStep.details.map((detail, keyIdx) => (
                      <div 
                        key={keyIdx}
                        className="flex items-start gap-2 bg-white p-3 rounded-lg dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700 dark:text-neutral-300 font-medium leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 dark:border-neutral-800/80 pt-3 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Turnkey Assurance Coverage</span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[8px] font-bold uppercase text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      On-Track
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
