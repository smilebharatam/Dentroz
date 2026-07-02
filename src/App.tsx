import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsAndAbout from './components/StatsAndAbout';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import InquiryModal from './components/InquiryModal';

export default function App() {
  // Light/Dark Theme state
  const [isDark, setIsDark] = useState<boolean>(false);

  // Inquiry form modal state
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Handle local dark class insertion
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    } else {
      setPrefilledService('');
    }
    setModalOpen(true);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-150 selection:bg-purple-200 dark:selection:bg-amber-400">
      
      {/* Premium Navigation Header */}
      <Header 
        isDark={isDark} 
        onToggleTheme={toggleTheme} 
        onOpenConsultationModal={() => handleOpenConsultation()} 
      />

      <main>
        {/* Core Sections */}
        <Hero onOpenConsultationModal={handleOpenConsultation} />
        
        <StatsAndAbout />
        
        <Services onOpenConsultationModal={handleOpenConsultation} />
        
        <ProcessTimeline />
        
        <CaseStudies />
        
        <Testimonials />
        
        <FAQ />
        
        <Blog />
        
        <Contact />
      </main>

      {/* Corporate Premium Footer */}
      <Footer />

      {/* Interactive Helper Utilities */}
      <WhatsAppFloat />

      <InquiryModal 
        isOpen={modalOpen} 
        prefilledService={prefilledService} 
        onClose={() => setModalOpen(false)} 
      />

    </div>
  );
}
