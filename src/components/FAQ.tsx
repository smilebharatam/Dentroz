import { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title details */}
        <div className="text-center mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#6A1B9A] dark:text-amber-400">
            KNOWLEDGE BASE
          </span>
          <h2 className="mt-2 font-sans text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
            Clear responses regarding pricing, physical timelines, licensing assistance, and warranty terms.
          </p>
        </div>

        {/* Accordion panel listings */}
        <div className="space-y-3.5" id="faq-accordion-container">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-gray-150 bg-gray-50/50 dark:border-neutral-900 dark:bg-neutral-900/40 overflow-hidden"
              >
                {/* Trigger Row Button */}
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-200"
                  id={`faq-trigger-${idx}`}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-[#6A1B9A] dark:text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-extrabold text-gray-900 dark:text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#6A1B9A] dark:text-amber-400' : ''
                  }`} />
                </button>

                {/* Collapsible Answer block (AnimatePresence of motion/react) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-gray-100 dark:border-neutral-800/60 pl-11">
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-300 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                        
                        <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          <span>Verified by Dentroz Support Desk</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
