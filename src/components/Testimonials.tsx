import { TESTIMONIALS } from '../data';
import { Star, User, Quote, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-900/40 border-y border-gray-100 dark:border-neutral-800 transition-colors duration-300" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title elements */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#6A1B9A] dark:text-amber-400">
            DENTIST REVIEWS
          </span>
          <h2 className="mt-2 font-sans text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted By 100+ Diagnostic Clinic Founders
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
            Read authentic feedback from dentists, orthodontists, and dental college consultants across South India who built their dream practices with Dentroz.
          </p>
        </div>

        {/* Testimonial structural grid with 6 cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-gray-150 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 flex flex-col justify-between shadow-xs hover:shadow transition-all relative overflow-hidden group hover:border-purple-200 dark:hover:border-neutral-700"
            >
              {/* Giant elegant double quote indicator */}
              <Quote className="absolute -top-3 -right-3 h-24 w-24 text-gray-100/40 dark:text-neutral-800/10 pointer-events-none group-hover:scale-105 transition-transform" />

              <div className="space-y-4 relative z-10">
                {/* 5 star rating row */}
                <div className="flex items-center gap-0.5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial body quote */}
                <p className="text-xs text-gray-600 dark:text-neutral-300 leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>

              {/* Author bio specs footer block */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-neutral-800 flex items-center gap-3 relative z-10">
                {/* Doctor Avatar */}
                <img 
                  src={test.imgUrl} 
                  alt={test.doctorName}
                  referrerPolicy="no-referrer"
                  className="h-11 w-11 rounded-full object-cover border-2 border-purple-100 dark:border-neutral-800"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-extrabold text-gray-900 dark:text-white truncate">
                      {test.doctorName}
                    </span>
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" title="Verified Practice Owner" />
                  </div>
                  <span className="block text-[10px] text-[#6A1B9A] dark:text-amber-400 font-bold truncate">
                    {test.role}
                  </span>
                  <span className="block text-[9px] text-gray-400 dark:text-neutral-500 truncate">
                    {test.clinicName} • {test.location}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
