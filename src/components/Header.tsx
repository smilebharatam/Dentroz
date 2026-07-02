import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Phone, MapPin } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenConsultationModal: () => void;
}

export default function Header({ isDark, onToggleTheme, onOpenConsultationModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Insights & Blogs', href: '#blog' },
    { name: 'Contact US', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-neutral-800/80 dark:bg-neutral-900/95" id="nav-header">
      {/* Top Banner with Direct Support Line */}
      <div className="bg-[#6A1B9A] px-4 py-1.5 text-xs text-white transition-colors duration-300">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-1 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="h-3.5 w-3.5" /> Direct Support: <a href="tel:+919150044651" className="font-semibold hover:underline">+91 91500 44651</a>
            </span>
            <span className="hidden items-center gap-1 md:flex">
              <MapPin className="h-3.5 w-3.5 text-amber-400" /> Selaiyur, Chennai, Tamil Nadu
            </span>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-3 text-[10px] sm:text-xs">
            <span className="rounded bg-amber-500/20 px-1.5 py-0.5 font-medium text-amber-300">★ Dentists' One Stop Solution</span>
            <span className="hidden sm:inline opacity-80">|</span>
            <span className="hidden sm:inline">24/7 Technical SLA Support</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, '#header')}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#6A1B9A] to-purple-500 shadow-md">
            <span className="text-xl font-bold tracking-wider text-white">D</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-2xl">
              DENTROZ
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#6A1B9A] dark:text-amber-400">
              One Stop Solution
            </span>
          </div>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-semibold transition-colors hover:text-[#6A1B9A] dark:hover:text-amber-400 text-gray-600 dark:text-neutral-300"
              id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme switcher */}
          <button
            onClick={onToggleTheme}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-[#6A1B9A] transition-colors focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-amber-400"
            aria-label="Toggle theme"
            id="theme-toggle-btn"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {/* Consultation Button */}
          <button
            onClick={onOpenConsultationModal}
            className="hidden sm:inline-flex cursor-pointer items-center justify-center rounded-full bg-[#6A1B9A] px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-[#6A1B9A] transition-all hover:bg-purple-800 hover:shadow dark:bg-amber-400 dark:text-neutral-950 dark:ring-amber-400 dark:hover:bg-amber-500"
            id="consultation-cta-header"
          >
            Free Consultation
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus:outline-none dark:text-neutral-300 dark:hover:bg-neutral-800 lg:hidden"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-lg transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900" id="mobile-nav-panel">
          <div className="space-y-1 pb-3 pt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#6A1B9A] dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-amber-400"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="border-t border-gray-100 pb-3 pt-4 dark:border-neutral-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="mt-2 flex w-full items-center justify-center rounded-xl bg-[#6A1B9A] py-3 text-center text-sm font-bold text-white shadow hover:bg-purple-800 dark:bg-amber-400 dark:text-neutral-950 dark:hover:bg-amber-500"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
