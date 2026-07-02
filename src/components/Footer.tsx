import React, { useState } from 'react';
import { Mail, ArrowRight, Phone, Clock, FileWarning, Sparkles } from 'lucide-react';

export default function Footer() {
  const [newsEmail, setNewsEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setSuccess(true);
    setNewsEmail('');
    setTimeout(() => setSuccess(false), 5000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-8 border-t border-neutral-900 transition-all" id="app-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Top Row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-12 border-b border-neutral-900">
          
          {/* Brand Spec (4/12 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#6A1B9A] to-purple-500 shadow-md">
                <span className="text-xl font-bold tracking-wider text-white">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  DENTROZ
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400">
                  Dentists' One Stop Solution
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed font-normal">
              Dentroz is India's leading comprehensive dental infrastructure, equipment supply, and consulting partner. We supply premium computerized operatory chairs, execute luxury healthcare interior architecture designs, and handle AERB compliance licensing.
            </p>

            <div className="text-[11px] text-neutral-600 space-y-1">
              <div>No. 9/11, Avvai Street, Chennai - 600073</div>
              <div>Hotline support: <a href="tel:+919150044651" className="text-amber-400 hover:underline">+91 91500 44651</a></div>
            </div>
          </div>

          {/* Quick links & categories (4/12 columns) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-xs">
            {/* Nav links */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Practice Portfolios
              </h4>
              <ul className="space-y-2.5 font-normal text-neutral-500 hover:text-neutral-400 transition-colors">
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Clinic setups</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Interior Designs</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Dental Equipment</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">AERB compliance</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Consumables Supply</a></li>
              </ul>
            </div>

            {/* Corporate items */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Interactive hubs
              </h4>
              <ul className="space-y-2.5 font-normal text-neutral-500">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">Core values</a></li>
                <li><a href="#process" className="hover:text-amber-400 transition-colors">Setup timeline</a></li>
                <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Dentist Reviews</a></li>
                <li><a href="#case-studies" className="hover:text-amber-400 transition-colors">Case blueprints</a></li>
                <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ accordion</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Box (4/12 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Practice Management Newsletter
            </h4>
            <p className="text-[11px] text-neutral-500 leading-normal">
              Register your email below to receive dental interior layouts planning books, State licensing rule updates, and bulk materials discounts direct to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="name@gclinic.com"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 text-xs text-white focus:border-amber-400 focus:outline-none placeholder:text-neutral-600"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 rounded-lg bg-[#6A1B9A] p-2 text-white hover:bg-purple-750 transition-all whitespace-nowrap"
                  aria-label="Subscribe email"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {success && (
                <p className="text-[10px] text-emerald-400 font-semibold animate-fade-in">
                  ✓ Successfully registered dentist email bulletin!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom row copyright information */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600 font-semibold">
          <div className="text-center sm:text-left">
            <span>© {currentYear} DENTROZ Inc. All rights reserved. </span>
            <span className="hidden sm:inline">|</span>
            <span className="block sm:inline sm:ml-1">Turnkey Dental Infrastructure Partner.</span>
          </div>

          <div className="flex gap-4">
            <span className="hover:text-neutral-500 transition-colors">Chennai HQ</span>
            <span>•</span>
            <span className="hover:text-neutral-500 transition-colors">Bengaluru Hub</span>
            <span>•</span>
            <span className="hover:text-neutral-500 transition-colors">Kochi Service Network</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
