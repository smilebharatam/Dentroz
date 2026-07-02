import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, Mail, CalendarDays, Phone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface InquiryModalProps {
  isOpen: boolean;
  prefilledService?: string;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, prefilledService, onClose }: InquiryModalProps) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [setupStage, setSetupStage] = useState('planning');
  const [serviceOfInterest, setServiceOfInterest] = useState('Full Turnkey Setup');
  const [userMessage, setUserMessage] = useState('');
  
  // Submit feedback state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setServiceOfInterest(prefilledService);
    }
  }, [prefilledService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) {
      alert("Please fill in your Name and Contact Phone Number so our team can call you!");
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    const newInquiry = {
      id: `inq-${Date.now()}`,
      clientName: userName,
      email: userEmail || 'no-email@dentros.com',
      phone: userPhone,
      clinicStage: setupStage,
      serviceType: serviceOfInterest,
      message: userMessage,
      date: new Date().toISOString()
    };

    setTimeout(() => {
      // Save in local storage history array
      const existingInquiries = JSON.parse(localStorage.getItem('dentroz_inquiries') || '[]');
      existingInquiries.push(newInquiry);
      localStorage.setItem('dentroz_inquiries', JSON.stringify(existingInquiries));

      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setUserName('');
    setUserEmail('');
    setUserPhone('');
    setSetupStage('planning');
    setUserMessage('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs animate-fade-in" id="consultation-form-modal">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100 dark:border-neutral-800 dark:bg-neutral-900"
      >
        
        {/* Top styling band */}
        <div className="bg-[#6A1B9A] h-2.5 w-full dark:bg-amber-400" />

        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4.5 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400 dark:text-neutral-500">
              Free Dentroz Consultation
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 hover:bg-gray-100 text-gray-400 hover:text-gray-900 dark:hover:bg-neutral-800 dark:hover:text-white"
            aria-label="Close modal form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto scrollbar-thin">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-black text-gray-950 dark:text-white">Let's build your clinic!</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-neutral-400">
                  Provide your details below. A dental execution lead will call you within 2 business hours for a free walkthrough presentation.
                </p>
              </div>

              {/* Prefilled alert if came from active picker */}
              {prefilledService && (
                <div className="rounded-xl bg-purple-50 p-3 text-[11px] text-[#6A1B9A] font-bold border border-purple-100 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/15">
                  Prefilled Service: {prefilledService}
                </div>
              )}

              {/* Input: Dentist Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Your Full Name / Dr. Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Aarav Mehta / Ramesh Kumar"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full rounded-xl border border-gray-250 bg-gray-50/50 px-4 py-3 text-xs focus:border-[#6A1B9A] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                />
              </div>

              {/* Input details Row (Phone & Email) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">
                    WhatsApp/Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 91500 44651"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full rounded-xl border border-gray-250 bg-gray-50/50 px-4 py-3 text-xs focus:border-[#6A1B9A] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-250 bg-gray-50/50 px-4 py-3 text-xs focus:border-[#6A1B9A] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                  />
                </div>
              </div>

              {/* Clinic Category Stage */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Current Clinic Stage
                </label>
                <select
                  value={setupStage}
                  onChange={(e) => setSetupStage(e.target.value)}
                  className="w-full rounded-xl border border-gray-250 bg-gray-50/50 px-4 py-3 text-xs focus:border-[#6A1B9A] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                >
                  <option value="planning">Fresh planning / Startup stage</option>
                  <option value="established">Established Practice, seeking consumables/support</option>
                  <option value="upgrading">Upgrading existing infrastructure/chairs</option>
                </select>
              </div>

              {/* Service of Interest */}
              {!prefilledService && (
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">
                    Primary Service of Interest
                  </label>
                  <select
                    value={serviceOfInterest}
                    onChange={(e) => setServiceOfInterest(e.target.value)}
                    className="w-full rounded-xl border border-gray-250 bg-gray-50/50 px-4 py-3 text-xs focus:border-[#6A1B9A] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                  >
                    <option value="Full Turnkey Setup">Complete Turnkey Clinic Setup</option>
                    <option value="Interior Designing">Clinic Spatial Interior Layouts</option>
                    <option value="Equipment Procurement">Medical Equipment Procurement</option>
                    <option value="Compliance Licenses">State & Atomic Compliance (AERB)</option>
                    <option value="Digital Marketing">Social & Website Marketing (Leads)</option>
                    <option value="Technical Maintenance">Support Desk / Annual Maintenance (AMC)</option>
                    <option value="Consumables Supply">Dental Materials & Consumables Bulk</option>
                  </select>
                </div>
              )}

              {/* Message inputs */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Questions / Message details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your physical site length, location or requirements..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="w-full rounded-xl border border-gray-250 bg-gray-50/50 px-4 py-2.5 text-xs focus:border-[#6A1B9A] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
                />
              </div>

              {/* Submit triggers button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer rounded-xl bg-[#6A1B9A] py-4 text-xs font-extrabold text-white shadow-lg transition-all hover:bg-purple-800 disabled:opacity-50 dark:bg-amber-400 dark:text-neutral-950 dark:hover:bg-amber-500"
                id="modal-submit-consultation-btn"
              >
                {isSubmitting ? 'Sending Request blueprint...' : 'Complete Consultation Booking'}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>Zero spam assurance • Secure data encryption</span>
              </div>
            </form>
          ) : (
            // Success view frame
            <div className="py-8 text-center space-y-6" id="consultation-success-panel">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 dark:bg-emerald-900/20">
                <Check className="h-8 w-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">Consultation Slots Reserved!</h3>
                <p className="text-xs text-gray-500 dark:text-neutral-400 font-medium px-4">
                  Awesome, Dr. <strong>{userName}</strong>. Our custom blueprint setup desks has logged your interest for "<strong>{serviceOfInterest}</strong>".
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-5 mt-4 text-xs text-emerald-800 dark:border-neutral-800 dark:text-neutral-300">
                <p className="leading-relaxed">
                  We have assigned your case to a premium clinical setup lead. They will call you on <strong>{userPhone}</strong> inside 2 business hours.
                </p>
                <div className="mt-3 flex items-center justify-center gap-4 text-[10px] font-bold">
                  <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> Call SLA SLA Support</span>
                </div>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="rounded-xl bg-neutral-950 px-6 py-3 text-xs font-bold text-white hover:bg-neutral-800 focus:outline-none dark:bg-amber-400 dark:text-neutral-950 dark:hover:bg-amber-500"
              >
                Return to Website
              </button>
            </div>
          )}
        </div>

      </motion.div>
    </div>
  );
}
