import { MessageCircle, Sparkles } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappUrl = 'https://wa.me/919150044651?text=Hello%20Dentroz%2C%20I%20am%20a%20dentist%20interested%20in%20your%20turnkey%20dental%20clinic%20setup%20solutions.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group pointer-events-none" id="whatsapp-floating-control">
      {/* Tooltip hint text bubble */}
      <div className="bg-emerald-500 font-extrabold text-neutral-950 px-3 py-1.5 rounded-xl shadow-lg text-[10px] uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto border-2 border-neutral-950 dark:bg-emerald-400">
        <span className="flex items-center gap-1">
          <Sparkles className="h-3 w-3 animate-spin" /> Chat on WhatsApp
        </span>
      </div>

      {/* Floating trigger bubble button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-emerald-400 dark:text-neutral-950 dark:hover:bg-emerald-500 hover:scale-105 active:scale-95 animate-heading"
        aria-label="Direct Dental Advisor WhatsApp Connection"
      >
        <MessageCircle className="h-7 w-7 stroke-[2.5]" />
      </a>
    </div>
  );
}
