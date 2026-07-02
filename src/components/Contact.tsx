import React, { useState, useEffect } from 'react';
import { Phone, Mail, Globe, MapPin, Check, Send, Sparkles, HelpCircle, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  
  // Submit feedback state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Active session inquiries list local state
  const [localHistory, setLocalHistory] = useState<any[]>([]);

  const loadHistory = () => {
    try {
      const history = JSON.parse(localStorage.getItem('dentroz_inquiries') || '[]');
      setLocalHistory(history);
    } catch (e) {
      setLocalHistory([]);
    }
  };

  useEffect(() => {
    loadHistory();
    // Watch custom storage event parameters
    const onStorageChange = () => loadHistory();
    window.addEventListener('storage', onStorageChange);
    return () => window.removeEventListener('storage', onStorageChange);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please provide your name and phone number so we can reach you!");
      return;
    }

    setLoading(true);

    const contactPayload = {
      id: `inq-${Date.now()}`,
      clientName: name,
      email: email || 'not-provided@dentros.com',
      phone: phone,
      clinicStage: 'General Inquiry / Contact page',
      serviceType: 'General consultation inquiry',
      message: msg,
      date: new Date().toISOString()
    };

    setTimeout(() => {
      try {
        const historyList = JSON.parse(localStorage.getItem('dentroz_inquiries') || '[]');
        historyList.push(contactPayload);
        localStorage.setItem('dentroz_inquiries', JSON.stringify(historyList));
        loadHistory();
      } catch (err) {}

      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMsg('');

      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  const deleteInquiryItem = (id: string) => {
    try {
      const historyList = JSON.parse(localStorage.getItem('dentroz_inquiries') || '[]');
      const filtered = historyList.filter((item: any) => item.id !== id);
      localStorage.setItem('dentroz_inquiries', JSON.stringify(filtered));
      loadHistory();
    } catch (e) {}
  };

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden" id="contact">
      {/* Visual map blob divider */}
      <div className="absolute right-1/10 top-1/10 -z-10 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title elements */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#6A1B9A] dark:text-amber-400">
            CONNECT WITH US
          </span>
          <h2 className="mt-2 font-sans text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Get In Touch With Our Specialists
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
            Visit our corporate office, send us an email, or dial our priority helpline to jumpstart your clinic planning.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Block: Contact Details & Map Mockup (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-extrabold text-gray-900 dark:text-white uppercase tracking-tight">
                Corporate Headquarters
              </h3>
              <p className="text-xs text-gray-500 dark:text-neutral-400 leading-normal font-normal">
                Our central medical setup coordination lounge and equipment display docks are established in the tech-corridor of Chennai, Tamil Nadu.
              </p>
            </div>

            {/* List Details */}
            <div className="space-y-4">
              {/* Phone info */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-purple-50 p-2.5 text-[#6A1B9A] dark:bg-amber-400/10 dark:text-amber-400 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 dark:text-neutral-500 font-bold uppercase tracking-wider">Priority Hotline</span>
                  <a href="tel:+919150044651" className="text-sm font-semibold text-gray-800 dark:text-neutral-200 hover:underline">
                    +91 91500 44651
                  </a>
                </div>
              </div>

              {/* Email info */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-purple-50 p-2.5 text-[#6A1B9A] dark:bg-amber-400/10 dark:text-amber-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 dark:text-neutral-500 font-bold uppercase tracking-wider">Email Address</span>
                  <a href="mailto:dentrozindia@gmail.com" className="text-sm font-semibold text-gray-800 dark:text-neutral-200 hover:underline">
                    dentrozindia@gmail.com
                  </a>
                </div>
              </div>

              {/* Web info */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-purple-50 p-2.5 text-[#6A1B9A] dark:bg-amber-400/10 dark:text-amber-400 shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 dark:text-neutral-500 font-bold uppercase tracking-wider">Website Portal</span>
                  <a 
                    href="http://www.dentroze.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold text-gray-800 dark:text-neutral-200 hover:underline"
                  >
                    www.dentroze.com
                  </a>
                </div>
              </div>

              {/* Address info block */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-purple-50 p-2.5 text-[#6A1B9A] dark:bg-amber-400/10 dark:text-amber-400 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 dark:text-neutral-500 font-bold uppercase tracking-wider">Office Address Location</span>
                  <p className="text-xs text-gray-700 dark:text-neutral-300 font-semibold leading-relaxed">
                    No. 9/11, 1st Floor, Avvai Street,<br />
                    Bharathi Nagar, Selaiyur,<br />
                    Chennai, Tamil Nadu – 600073
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated interactive Google map block */}
            <div className="rounded-2xl border border-gray-150 overflow-hidden bg-gray-100 p-1 dark:border-neutral-800 dark:bg-neutral-900 group">
              <div className="relative h-44 w-full bg-slate-350 dark:bg-neutral-950 flex flex-col justify-between p-4 rounded-xl">
                {/* Simulated map graphic indicators */}
                <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-850 opacity-40 pointer-events-none" />
                
                {/* Visual grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#ccc_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-100 pointer-events-none" />

                {/* Simulated map Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="bg-purple-600 text-white rounded-full p-2 animate-ping absolute h-8 w-8 z-0 dark:bg-amber-400" />
                  <div className="bg-[#6A1B9A] text-white rounded-2xl p-2.5 relative z-10 select-none shadow border-2 border-white dark:bg-neutral-950 dark:border-amber-400">
                    <span className="text-[10px] font-black tracking-wide flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-amber-400" /> DENTROZ CHENNAI HQ
                    </span>
                  </div>
                  <div className="w-1 h-3 bg-purple-900/60 dark:bg-amber-400/60 mt-0.5 rounded-full" />
                </div>

                {/* Fake map coordinates */}
                <div className="relative z-10 self-end text-[9px] font-bold text-gray-400 select-none dark:text-neutral-500">
                  LAT: 12.9229° N | LON: 80.1472° E (Selaiyur District)
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: General Inquiry Form (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl border border-gray-150 bg-gray-50/50 p-6 sm:p-10 dark:border-neutral-900 dark:bg-neutral-900/40">
              
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Send Direct Message
              </h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-neutral-400">
                Are you an individual dentist, building a multi-chair clinic, or looking for medical materials? Reach us directly.
              </p>

              <form onSubmit={handleContactSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Shruti"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs focus:border-[#6A1B9A] focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                      Mobile Telephone No. *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs focus:border-[#6A1B9A] focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. support@doctor.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs focus:border-[#6A1B9A] focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
                    Clinic Requirement & Address Location
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about your site, desired materials count, or upgrade targets..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs focus:border-[#6A1B9A] focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                  />
                </div>

                {/* Output feedback states */}
                <AnimatePresence>
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl bg-emerald-50 px-4 py-3 text-xs text-emerald-800 font-semibold border border-emerald-100 flex items-center gap-2 dark:bg-emerald-900/10 dark:text-emerald-400 dark:border-neutral-800"
                    >
                      <Check className="h-4 w-4" />
                      <span>Message successfully dispatched! Our coordinating executive will call you today.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 rounded-xl bg-neutral-950 py-3.5 text-xs font-bold text-white hover:bg-neutral-850 dark:bg-amber-400 dark:text-neutral-950 dark:hover:bg-amber-500 disabled:opacity-50"
                  id="contact-form-submit-btn"
                >
                  {loading ? (
                    <span>Registering details...</span>
                  ) : (
                    <>
                      <span>Transmit Message Direct</span>
                      <Send className="h-3.5 w-3.5 animate-pulse" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Session Inquiries Log history tray (super high-end UX feature) */}
            {localHistory.length > 0 && (
              <div className="rounded-2xl border border-gray-150 bg-gray-50/30 p-5 dark:border-neutral-900 dark:bg-neutral-900/20" id="inquiry-history-card">
                <span className="block text-[10px] font-black uppercase text-[#6A1B9A] tracking-wider dark:text-amber-400">
                  Your Submitted Requests (This Session)
                </span>
                
                <div className="mt-3.5 space-y-2 max-h-40 overflow-y-auto scrollbar-thin">
                  {localHistory.map((item: any) => (
                    <div 
                      key={item.id}
                      className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="min-w-0 flex-1">
                        <span className="font-extrabold text-gray-800 dark:text-white block sm:inline">{item.clientName} </span>
                        <span className="text-gray-400 dark:text-neutral-500 font-medium text-[11px]">
                          • Interest in: {item.serviceType || 'General Info'}
                        </span>
                        <span className="block text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">
                          ✓ Assigned to Dental setup desk
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => deleteInquiryItem(item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 rounded"
                        title="Delete record"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
