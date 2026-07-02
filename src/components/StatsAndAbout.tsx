import { STATS } from '../data';
import { Shield, Sparkles, Award, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function StatsAndAbout() {
  const valueProps = [
    {
      title: 'Single Point Solution',
      description: 'End-to-end management spanning site layout blueprints, high-pressure dental piping, AERB registration filings, and marketing setups.',
      icon: <Award className="h-6 w-6 text-amber-500" />
    },
    {
      title: 'Industry-Leading Dental Equipment',
      description: 'Genuine diagnostic chairs, compressors, scalers, and scanners with direct manufacturer warranty files and installation checklists.',
      icon: <Sparkles className="h-6 w-6 text-purple-600 dark:text-amber-400" />
    },
    {
      title: 'Customized Clinic Designs',
      description: 'Careful layout planning with dedicated zoning guidelines that maximize operative room and patient comfort in even compact 150 sq.ft. clinics.',
      icon: <CheckCircle2 className="h-6 w-6 text-emerald-500" />
    },
    {
      title: 'Regulatory & Compliance Support',
      description: 'Pain-free assembly of AERB, Pollution Control, BMW agreements, and clinical establishment safety NOC permits ready for operational launch.',
      icon: <Shield className="h-6 w-6 text-indigo-500" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-neutral-900/60 transition-colors duration-300" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Statistics bento grid section first */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 mb-20 text-center">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow transition-all dark:border-neutral-800 dark:bg-neutral-900"
            >
              <span className="block font-sans text-3xl font-extrabold tracking-tight text-[#6A1B9A] dark:text-amber-400 lg:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-neutral-200">
                {stat.label}
              </span>
              <span className="mt-1 block text-[10px] text-gray-400 dark:text-neutral-500 leading-tight">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>

        {/* About details and Why Choose us */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left: About Brand and Mission card */}
          <div className="space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#6A1B9A] dark:text-amber-400">
              Who We Are
            </span>
            <h2 className="font-sans text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Partnering in Clinic Setup, <br />
              <span className="text-[#6A1B9A] dark:text-amber-400 font-extrabold">Equipment & Scalable Practice Growth</span>
            </h2>
            <p className="text-gray-600 dark:text-neutral-300 leading-relaxed">
              Dentroz is India's premier integrated infrastructure developer, dental medical supplies distributor, and regulatory partner. We empower dental professionals to step away from administrative setup stress and design exceptional spaces that foster diagnostic success.
            </p>

            {/* Mission Statement Box */}
            <div className="rounded-2xl border-l-4 border-amber-400 bg-amber-500/5 p-6 dark:bg-amber-400/5">
              <div className="flex items-start gap-4">
                <Heart className="h-6 w-6 text-amber-500 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Our Mission</h4>
                  <p className="mt-1 text-xs text-gray-600 dark:text-neutral-300 leading-relaxed">
                    To supply end-to-end diagnostic equipment, beautiful functional spaces, and strategic online visibility frameworks that accelerate dental practice scale, improve surgical efficiency, and inspire patient confidence.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 dark:text-neutral-500">
              *All equipment installation is completed under certified radiological safety parameters following national guidelines.
            </p>
          </div>

          {/* Right: ValueProps list */}
          <div className="space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gray-400 dark:text-neutral-500">
              Why Dentists Prefer Dentroz
            </span>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {valueProps.map((prop) => (
                <div 
                  key={prop.title}
                  className="has-transition rounded-xl border border-gray-100 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 hover:border-purple-200 dark:hover:border-neutral-700 shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-gray-50 p-2.5 dark:bg-neutral-800 shrink-0">
                      {prop.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-gray-900 dark:text-white">
                        {prop.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
