import { useState } from 'react';
import { 
  Building2, 
  Paintbrush, 
  Activity, 
  FileLock2, 
  Megaphone, 
  ShieldAlert, 
  Wrench, 
  Package, 
  Check, 
  Search, 
  Plus, 
  Minus, 
  ShoppingCart, 
  Trash2, 
  HelpCircle,
  FileCheck2,
  PhoneCall,
  Clock,
  Sparkles
} from 'lucide-react';
import { 
  CLINIC_TYPES, 
  DESIGN_PACKAGES, 
  EQUIPMENT_ITEMS, 
  REGULATORY_SERVICES, 
  MARKETING_PACKAGES, 
  DENTAL_CONSUMABLES 
} from '../data';
import { ConsumableItem } from '../types';

interface ServicesProps {
  onOpenConsultationModal: (prefilledService?: string) => void;
}

export default function Services({ onOpenConsultationModal }: ServicesProps) {
  // Main tabs state
  const [activeTab, setActiveTab] = useState<string>('setup');

  // Interior package selection
  const [selectedInteriorPackage, setSelectedInteriorPackage] = useState<string>('premium-interior');

  // Equipment search state
  const [eqSearch, setEqSearch] = useState<string>('');

  // Consumables category view & search
  const [selectedConsumableCategory, setSelectedConsumableCategory] = useState<string>('All');
  const [consumableSearch, setConsumableSearch] = useState<string>('');

  // Consumables custom inquiry cart state
  const [cart, setCart] = useState<{ [id: string]: number }>({});

  const tabs = [
    { id: 'setup', name: 'Clinic Setup', icon: <Building2 className="h-5 w-5" /> },
    { id: 'interior', name: 'Interior Design', icon: <Paintbrush className="h-5 w-5" /> },
    { id: 'equipment', name: 'Equipment Supply', icon: <Activity className="h-5 w-5" /> },
    { id: 'compliance', name: 'Compliance & Legal', icon: <FileLock2 className="h-5 w-5" /> },
    { id: 'marketing', name: 'Digital Marketing', icon: <Megaphone className="h-5 w-5" /> },
    { id: 'support', name: 'Technical Support', icon: <Wrench className="h-5 w-5" /> },
    { id: 'consumables', name: 'Consumables', icon: <Package className="h-5 w-5" /> }
  ];

  // Equipment calculation
  const filteredEquipment = EQUIPMENT_ITEMS.filter(item => 
    item.name.toLowerCase().includes(eqSearch.toLowerCase()) ||
    item.category.toLowerCase().includes(eqSearch.toLowerCase())
  );

  // Consumables categories filtering
  const categoriesList = ['All', 'Restorative', 'Endodontics', 'Prosthodontics', 'Surgical', 'Preventive', 'Essentials'];
  
  const filteredConsumables = DENTAL_CONSUMABLES.filter(item => {
    const matchCat = selectedConsumableCategory === 'All' || item.category === selectedConsumableCategory;
    const matchSearch = item.name.toLowerCase().includes(consumableSearch.toLowerCase()) || 
                        item.description.toLowerCase().includes(consumableSearch.toLowerCase()) ||
                        (item.subCategory && item.subCategory.toLowerCase().includes(consumableSearch.toLowerCase()));
    return matchCat && matchSearch;
  });

  // Cart operations
  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[id] && updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const getCartCount = (): number => {
    return Object.values(cart).reduce((sum: number, current: number) => sum + current, 0) as number;
  };

  const clearCart = () => setCart({});

  const handleConsumablesInquiry = () => {
    const itemsList = Object.entries(cart).map(([id, qty]) => {
      const item = DENTAL_CONSUMABLES.find(c => c.id === id);
      return item ? `${item.name} (Qty: ${qty})` : '';
    }).filter(Boolean).join(', ');

    onOpenConsultationModal(`Consumables Interest: [${itemsList}]`);
  };

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Titles */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#6A1B9A] dark:text-amber-400">
            Dentroz Solutions Portfolios
          </span>
          <h2 className="mt-2 font-sans text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Everything Required To Build & Launch Successfully
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
            Explore our specialized turnkey streams of setup plumbing, modern interior designs, AERB certifications, equipment supply, and local patient flow marketing.
          </p>
        </div>

        {/* Outer Grid Layout containing Sidebar (Left) and Details Content (Right) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          
          {/* Left Navigation Tabs - Responsive Scroll/Sidebar */}
          <div className="lg:col-span-1">
            {/* Mobile Scroll helper */}
            <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-thin lg:flex-col lg:overflow-x-visible lg:pb-0" id="services-tabs-container">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-xs font-bold whitespace-nowrap lg:whitespace-normal text-left transition-all focus:outline-none shrink-0 lg:shrink lg:w-full ${
                      isActive 
                        ? 'bg-purple-100 text-[#6A1B9A] shadow-xs border-r-4 border-l-4 border-r-[#6A1B9A] border-l-transparent dark:bg-amber-400/10 dark:text-amber-400 dark:border-r-amber-400' 
                        : 'bg-gray-50 hover:bg-gray-100 md:hover:translate-x-1 text-gray-600 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-300'
                    }`}
                    id={`services-tab-btn-${tab.id}`}
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Support Widget nested inside sidebar on desktop */}
            <div className="hidden lg:block mt-8 rounded-xl border border-gray-100 bg-gray-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/60">
              <HelpCircle className="h-6 w-6 text-[#6A1B9A] dark:text-amber-400" />
              <h4 className="mt-2 text-xs font-extrabold text-gray-900 dark:text-white">Confused about setups?</h4>
              <p className="mt-1 text-[11px] text-gray-500 dark:text-neutral-400">
                Book a 1-on-1 virtual design session with our dental setups advisor. Absolutely free!
              </p>
              <button 
                onClick={() => onOpenConsultationModal('Bespoke Layout Consultation')}
                className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-neutral-950 py-2.5 text-[10px] font-bold text-white hover:bg-neutral-800 dark:bg-amber-400 dark:text-neutral-950 dark:hover:bg-amber-500"
              >
                Inquire Setup Blueprint
              </button>
            </div>
          </div>

          {/* Right Area - Dynamic Details Board */}
          <div className="lg:col-span-3 min-h-[500px]">
            
            {/* 1. SETUP TAB */}
            {activeTab === 'setup' && (
              <div className="space-y-6" id="tab-content-setup">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 dark:border-neutral-800">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">Dental Clinic Setup Solutions</h3>
                    <p className="text-xs text-gray-500 dark:text-neutral-400">Complete architectural layouts and space-planning designs based on chair counts.</p>
                  </div>
                  <button 
                    onClick={() => onOpenConsultationModal('Clinic Setup Solutions')}
                    className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-purple-50 px-4 py-2 text-xs font-medium text-[#6A1B9A] hover:bg-purple-100 border border-purple-100 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/10 dark:hover:bg-amber-400/25"
                  >
                    Bespoke Layout Handoff
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {CLINIC_TYPES.map((type) => (
                    <div 
                      key={type.id}
                      className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/40 relative group hover:border-purple-200 dark:hover:border-neutral-800"
                    >
                      <span className="absolute top-4 right-6 text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-widest bg-white dark:bg-neutral-900 px-2 py-0.5 rounded-full border border-gray-100 dark:border-neutral-800">
                        {type.size}
                      </span>
                      <h4 className="text-base font-extrabold text-gray-900 dark:text-white group-hover:text-[#6A1B9A] dark:group-hover:text-amber-400 transition-colors">
                        {type.title}
                      </h4>
                      <p className="mt-2 text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                        {type.description}
                      </p>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-neutral-800 space-y-2">
                        <span className="block text-[10px] uppercase font-bold text-[#6A1B9A] dark:text-amber-400 tracking-wide">Included In-House Elements:</span>
                        <ul className="grid grid-cols-1 gap-1">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-neutral-300">
                              <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Turnkey process box */}
                <div className="rounded-2xl bg-[#6A1B9A] p-6 text-white dark:bg-neutral-900 border dark:border-neutral-800">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-extrabold tracking-wide text-amber-300 uppercase">Complete Turnkey Setup Assurance</h4>
                      <p className="text-xs text-purple-100 dark:text-neutral-400">
                        Dentroz supplies layout drawings including high-pressure clinical water pipeline feeds, dry compressor output routes, chemical sewage drain outlets, and radiation protective screening panels.
                      </p>
                    </div>
                    <button 
                      onClick={() => onOpenConsultationModal('Turnkey Setup Package')}
                      className="rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-purple-950 hover:bg-gray-150 shrink-0 dark:bg-amber-400 dark:text-neutral-950 dark:hover:bg-amber-500"
                    >
                      Inquire Full Setup Pricing
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. INTERIOR TAB */}
            {activeTab === 'interior' && (
              <div className="space-y-6" id="tab-content-interior">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 dark:border-neutral-800">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">Premium Interior Design Packages</h3>
                    <p className="text-xs text-gray-500 dark:text-neutral-400">Bespoke spatial modeling created exclusively by specialized dental healthcare planners.</p>
                  </div>
                </div>

                {/* Subpackage Selector Tabs */}
                <div className="grid grid-cols-3 gap-2 rounded-xl bg-gray-50 p-1.5 dark:bg-neutral-900">
                  {DESIGN_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedInteriorPackage(pkg.id)}
                      className={`rounded-lg py-2.5 text-xs sm:text-sm font-bold focus:outline-none transition-all ${
                        selectedInteriorPackage === pkg.id 
                          ? 'bg-white text-[#6A1B9A] shadow-sm dark:bg-neutral-800 dark:text-amber-400'
                          : 'text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200'
                      }`}
                    >
                      {pkg.name} ({pkg.priceLevel})
                    </button>
                  ))}
                </div>

                {/* Selected Package Details */}
                {DESIGN_PACKAGES.filter(p => p.id === selectedInteriorPackage).map((pkg) => (
                  <div key={pkg.id} className="rounded-2xl border border-gray-100 p-6 space-y-6 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="rounded bg-purple-50 px-2 py-1 text-[10px] font-bold text-[#6A1B9A] dark:bg-amber-400/10 dark:text-amber-400">
                          {pkg.priceLevel} Segment Package
                        </span>
                        <h4 className="mt-2 text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">{pkg.name} Layout</h4>
                        <p className="mt-1 text-sm text-[#6A1B9A] dark:text-amber-400 italic font-medium">{pkg.tagline}</p>
                      </div>
                      <div className="text-right">
                        <button
                          onClick={() => onOpenConsultationModal(`Interior Service: ${pkg.name}`)}
                          className="rounded-xl bg-[#6A1B9A] px-5 py-3 text-xs font-bold text-white hover:bg-purple-800 dark:bg-amber-400 dark:text-neutral-950 dark:hover:bg-amber-500"
                        >
                          Book Design Consult
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-5 rounded-xl dark:bg-neutral-950">
                      <div>
                        <span className="block text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">Aesthetic Theme Vibe</span>
                        <p className="mt-1 text-xs text-gray-700 dark:text-neutral-300 leading-relaxed font-semibold">{pkg.vibe}</p>
                        
                        <span className="block text-[10px] font-bold text-gray-400 dark:text-neutral-500 mt-4 uppercase tracking-wider">Best Suited For</span>
                        <p className="mt-1 text-xs text-gray-600 dark:text-neutral-300 leading-relaxed">{pkg.idealFor}</p>
                        
                        <div className="mt-5 border-t border-gray-200 dark:border-neutral-800/80 pt-4">
                          <span className="text-[10px] block text-gray-400 uppercase font-bold tracking-wider mb-2">Designed Zones Checklist:</span>
                          <div className="grid grid-cols-2 gap-1.5">
                            {['Waiting Lobby', 'Treatment Rooms', 'Autoclaving Area', 'Modular Cabinetry', 'X-Ray Safety Shielding', 'Washrooms'].map((z) => (
                              <div key={z} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-neutral-400">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#6A1B9A] dark:bg-amber-400" />
                                <span>{z}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <span className="block text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">Key Details Covered & Delivered:</span>
                        <div className="space-y-2">
                          {pkg.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2 rounded bg-white p-2.5 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800">
                              <Check className="h-4 w-4 text-[#6A1B9A] dark:text-amber-400 shrink-0" />
                              <span className="text-xs text-gray-600 dark:text-neutral-300 leading-relaxed">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. EQUIPMENT TAB */}
            {activeTab === 'equipment' && (
              <div className="space-y-6" id="tab-content-equipment">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 dark:border-neutral-800">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">Premium Dental Equipment Supply</h3>
                    <p className="text-xs text-gray-500 dark:text-neutral-400">Direct authorized partner of the worlds highest quality dental apparatus manufacturers.</p>
                  </div>
                  {/* Search bar inside equipment tab */}
                  <div className="relative max-w-xs w-full">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search equipment..."
                      value={eqSearch}
                      onChange={(e) => setEqSearch(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-4 py-2 text-xs focus:border-[#6A1B9A] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {filteredEquipment.map((eq) => (
                    <div 
                      key={eq.id}
                      className="rounded-2xl border border-gray-100 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900 space-y-4 shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-purple-50 p-2.5 text-[#6A1B9A] dark:bg-amber-400/10 dark:text-amber-400">
                          <Activity className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-[#6A1B9A] dark:text-amber-400 tracking-wider bg-purple-50 px-1.5 py-0.5 rounded dark:bg-amber-400/5">
                            {eq.category}
                          </span>
                          <h4 className="text-sm font-black text-gray-900 dark:text-white">{eq.name}</h4>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                        {eq.description}
                      </p>
                      
                      <div className="space-y-1">
                        {eq.features.map((f, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-neutral-300">
                            <span className="text-[#6A1B9A] dark:text-amber-400 font-extrabold">•</span>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => onOpenConsultationModal(`Equipment Quote: ${eq.name}`)}
                        className="mt-2 w-full roudned-lg bg-gray-50 border border-gray-100 py-2.5 text-xs font-bold text-gray-700 hover:bg-[#6A1B9A] hover:text-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-amber-400 dark:hover:text-neutral-950 transition-colors"
                      >
                        Request Complete Quote Brochure
                      </button>
                    </div>
                  ))}
                  
                  {filteredEquipment.length === 0 && (
                    <div className="col-span-2 text-center py-10">
                      <p className="text-xs text-gray-400">No equipment matching query found. Type another item or search our full portfolio. Contact +91 91500 44651.</p>
                    </div>
                  )}
                </div>

                {/* Assurance notice bar */}
                <div className="rounded-xl bg-amber-400/10 border border-amber-300 p-5 text-neutral-800 dark:text-amber-300">
                  <h4 className="text-xs font-bold uppercase tracking-wider">Our Official Procurement Assurance</h4>
                  <p className="mt-1 text-[11px] leading-relaxed opacity-90">
                    We supply only 100% genuine equipment in original boxed packaging. Includes strict Manufacturer On-Site Warranties, free structural installation by trained bio-medical engineers, and complete technical after-sales troubleshooting service packages.
                  </p>
                </div>
              </div>
            )}

            {/* 4. COMPLIANCE TAB */}
            {activeTab === 'compliance' && (
              <div className="space-y-6" id="tab-content-compliance">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 dark:border-neutral-800">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">Documentation, Licensing & Compliance</h3>
                    <p className="text-xs text-gray-500 dark:text-neutral-400">Smooth state clearances handled by our specialized and legally skilled medical project desks.</p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 dark:text-neutral-400">
                  Operating a direct dental facility legally within state regulations in India requires meticulous documentation files. Under our legal liaison services, we take absolute charge:
                </p>

                <div className="space-y-4">
                  {REGULATORY_SERVICES.map((reg) => (
                    <div 
                      key={reg.id}
                      className="rounded-xl border border-gray-100 bg-gray-50 p-5 dark:border-neutral-800 dark:bg-neutral-900 border-l-4 border-l-[#6A1B9A] dark:border-l-amber-400"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-sm font-extrabold text-gray-900 dark:text-white">{reg.title}</h4>
                        <span className="rounded bg-indigo-50 px-2 py-0.5 text-[9px] font-bold text-indigo-700 dark:bg-neutral-800 dark:text-neutral-300">
                          {reg.difficulty}
                        </span>
                      </div>
                      
                      <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-400 dark:text-neutral-500 font-bold block text-[10px] uppercase">Liaison Authority:</span>
                          <span className="text-gray-700 dark:text-neutral-300 font-medium">{reg.authority}</span>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-neutral-400 text-[11px] leading-relaxed mt-1 sm:mt-0">
                            {reg.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Turnkey process box */}
                <div className="rounded-xl border border-dashed border-gray-200 p-5 text-center dark:border-neutral-800">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white">All Certifications Package Deal Available</h4>
                  <p className="mt-1 text-[11px] text-gray-500 dark:text-neutral-400">
                    Avoid multiple legal liaison runs. Our compliance team prepares drawings, formats files, submits fees on State portals, and guarantees handoff of physical certifications. We serve all cities across southern states.
                  </p>
                  <button 
                    onClick={() => onOpenConsultationModal('Complete Documentation package')}
                    className="mt-4 rounded-xl bg-purple-50 px-4 py-2 text-xs font-bold text-[#6A1B9A] hover:bg-[#6A1B9A] hover:text-white dark:bg-amber-400/10 dark:text-amber-400 dark:hover:bg-amber-400 dark:hover:text-neutral-950 transition-colors"
                  >
                    Discuss Legal Certification Timelines
                  </button>
                </div>
              </div>
            )}

            {/* 5. MARKETING TAB */}
            {activeTab === 'marketing' && (
              <div className="space-y-6" id="tab-content-marketing">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 dark:border-neutral-800">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">Digital Marketing & Leads Engine</h3>
                    <p className="text-xs text-gray-500 dark:text-neutral-400">Turnkey local clinic search profile growth setups designed to capture high-intent patients.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {MARKETING_PACKAGES.map((pkg) => (
                    <div 
                      key={pkg.id}
                      className={`relative rounded-2xl border bg-white p-5 space-y-4 dark:bg-neutral-950 transition-all ${
                        pkg.isPopular 
                          ? 'border-[#6A1B9A] shadow-lg ring-1 ring-[#6A1B9A] dark:border-amber-400 dark:ring-amber-400' 
                          : 'border-gray-100 dark:border-neutral-800'
                      }`}
                    >
                      {pkg.isPopular && (
                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#6A1B9A] px-3.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white dark:bg-amber-400 dark:text-neutral-950">
                          RECOMMENDED BY DENTISTS
                        </span>
                      )}

                      <div className="text-center">
                        <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#6A1B9A] dark:text-amber-400">{pkg.name}</h4>
                        <div className="mt-4 flex items-baseline justify-center">
                          <span className="text-sm font-bold text-gray-500 dark:text-neutral-400">₹</span>
                          <span className="text-3xl font-extrabold text-gray-900 dark:text-white">{pkg.price}</span>
                          <span className="text-xs font-bold text-gray-400 dark:text-neutral-500">/mo</span>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-4 space-y-2 dark:border-neutral-800">
                        <span className="block text-[10px] uppercase font-bold text-gray-400 dark:text-neutral-500 tracking-wider text-center">Deliverables per Month</span>
                        <div className="space-y-1.5 text-xs text-gray-600 dark:text-neutral-300">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#6A1B9A] dark:bg-amber-400" />
                            <span><strong>Socials:</strong> {pkg.postsCount}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#6A1B9A] dark:bg-amber-400" />
                            <span><strong>Reels:</strong> {pkg.reelsCount}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#6A1B9A] dark:bg-amber-400" />
                            <span>{pkg.shortsCount}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#6A1B9A] dark:bg-amber-400" />
                            <span><strong>GMB Updates:</strong> {pkg.googleUpdates}</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-4 space-y-2 dark:border-neutral-800">
                        <span className="block text-[10px] uppercase font-bold text-gray-400 dark:text-neutral-500 tracking-wider">Features Included</span>
                        <div className="space-y-1.5 text-[11px] text-gray-500 dark:text-neutral-400 leading-normal">
                          {pkg.additionalFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-1.5">
                              <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenConsultationModal(`Marketing tier: ${pkg.name}`)}
                        className={`mt-4 w-full cursor-pointer rounded-xl py-3 text-xs font-bold text-center ${
                          pkg.isPopular 
                            ? 'bg-[#6A1B9A] text-white hover:bg-purple-800 dark:bg-amber-400 dark:text-neutral-950 dark:hover:bg-amber-500' 
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-150 border border-gray-100 dark:bg-neutral-850 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800'
                        }`}
                      >
                        Inquire Marketing Growth Plan
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. TECHNICAL TAB */}
            {activeTab === 'support' && (
              <div className="space-y-6" id="tab-content-support">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 dark:border-neutral-800">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">Technical Support & Maintenance (AMC)</h3>
                    <p className="text-xs text-gray-500 dark:text-neutral-400">Rapid bio-medical engineers responding immediately to secure clinical continuity.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Urgent Support Highlight Card */}
                  <div className="rounded-2xl bg-gradient-to-tr from-rose-500 to-red-600 p-6 text-white md:col-span-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <ShieldAlert className="h-8 w-8 text-white animate-bounce" />
                      <h4 className="text-base font-extrabold uppercase tracking-wide">Emergency Breakdown?</h4>
                      <p className="text-xs text-red-100 leading-relaxed">
                        Chairs pneumatic loss, vacuum suction leaks, or electrical failures can stop operations. For registered clinics, our dedicated breakdown squad guarantees on-site engineer response inside 2 hours.
                      </p>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-white/20 whitespace-normal">
                      <a 
                        href="tel:9150044651" 
                        className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-center text-xs font-extrabold hover:bg-white/20"
                      >
                        <PhoneCall className="h-4 w-4 text-white" />
                        <span>Call +91 91500 44651</span>
                      </a>
                    </div>
                  </div>

                  {/* Operational Elements */}
                  <div className="md:col-span-2 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-neutral-500">Preventive Program SLA details:</span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
                        <h4 className="text-xs font-bold text-gray-900 dark:text-white">Annual Maintenance (AMC) Plans</h4>
                        <p className="mt-2 text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                          SLA contracts covering quarterly preventive cleanings, pipeline pressure drainage flush tests, control valves replacements, and emergency on-site engineer dispatch.
                        </p>
                      </div>
                      <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
                        <h4 className="text-xs font-bold text-gray-900 dark:text-white">Upgrades Consultation</h4>
                        <p className="mt-2 text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                          Assessing state of older dental infrastructure and proposing laser, scanning or digital sensor upgrades with optimal swap valuation discounts.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl bg-purple-50/50 p-4 border border-purple-100/40 dark:bg-neutral-900">
                      <span className="block text-xs font-bold text-[#6A1B9A] dark:text-amber-400 uppercase tracking-widest mb-2">Our technical checklist:</span>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-neutral-400">
                        <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#6A1B9A] dark:text-amber-400" /> Pneumatic line checks</li>
                        <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#6A1B9A] dark:text-amber-400" /> Silent water pipeline scaling</li>
                        <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#6A1B9A] dark:text-amber-400" /> Voltage stabilizer checkups</li>
                        <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#6A1B9A] dark:text-amber-400" /> Dental LED sensor alignment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 border-dashed text-center p-6 dark:border-neutral-800">
                  <h4 className="text-xs font-black text-gray-900 dark:text-white">Ask for custom AMC quote today</h4>
                  <button 
                    onClick={() => onOpenConsultationModal('Technical Support & AMC quotation')}
                    className="mt-3 inline-flex cursor-pointer rounded-xl bg-purple-50 px-5 py-2.5 text-xs font-bold text-[#6A1B9A] hover:bg-[#6A1B9A] hover:text-white dark:bg-amber-400/10 dark:text-amber-400 dark:hover:bg-amber-400 dark:hover:text-neutral-950 transition-all"
                  >
                    Inquire Custom AMC Coverage
                  </button>
                </div>
              </div>
            )}

            {/* 7. CONSUMABLES TAB */}
            {activeTab === 'consumables' && (
              <div className="space-y-6" id="tab-content-consumables">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 dark:border-neutral-800">
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white">Dental Consumables Portfolio</h3>
                    <p className="text-xs text-gray-500 dark:text-neutral-400">Aesthetics composites, rotary files, Silicones impression chemicals, and single-use supplies.</p>
                  </div>
                </div>

                {/* Categories filtering bar */}
                <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
                  {categoriesList.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedConsumableCategory(cat)}
                      className={`rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap focus:outline-none transition-all ${
                        selectedConsumableCategory === cat 
                          ? 'bg-purple-600 text-white dark:bg-amber-400 dark:text-neutral-900' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* SubSearch and Cart status indicator bar */}
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <div className="relative w-full sm:max-w-xs">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search restorative, files, gloves..."
                      value={consumableSearch}
                      onChange={(e) => setConsumableSearch(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-4 py-2 text-xs focus:border-[#6A1B9A] focus:bg-white focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                    />
                  </div>

                  {getCartCount() > 0 && (
                    <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-100 dark:bg-amber-400/10 dark:border-amber-400/20">
                      <ShoppingCart className="h-4 w-4 text-[#6A1B9A] dark:text-amber-400" />
                      <span className="text-xs font-bold text-gray-700 dark:text-neutral-200">{getCartCount()} items in bulk inquiry</span>
                      <button 
                        onClick={clearCart} 
                        className="p-1 text-red-500 hover:bg-red-50 rounded"
                        title="Clear cart list"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Consumables bento lists */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {filteredConsumables.map((item) => {
                    const countInCart = cart[item.id] || 0;
                    return (
                      <div 
                        key={item.id}
                        className="rounded-xl border border-gray-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 flex justify-between gap-4 items-start shadow-xs hover:border-purple-200 dark:hover:border-neutral-700"
                      >
                        <div className="space-y-1 max-w-2/3">
                          <span className="text-[10px] uppercase font-bold text-gray-400 dark:text-neutral-500">
                            {item.category} {item.subCategory ? `• ${item.subCategory}` : ''}
                          </span>
                          <h4 className="text-sm font-bold text-gray-900 dark:text-white">{item.name}</h4>
                          <p className="text-[11px] text-gray-500 dark:text-neutral-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Interactive cart button controls */}
                        <div className="flex flex-col items-end gap-2 text-right shrink-0">
                          {countInCart > 0 ? (
                            <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200 dark:bg-neutral-850 dark:border-neutral-800 p-1">
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 hover:bg-gray-200 text-gray-500 rounded"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="px-2 text-xs font-bold text-gray-800 dark:text-white">{countInCart}</span>
                              <button 
                                onClick={() => addToCart(item.id)}
                                className="p-1 hover:bg-gray-200 text-gray-500 rounded"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => addToCart(item.id)}
                              className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1.5 text-[11px] font-bold text-[#6A1B9A] border border-purple-100 hover:bg-[#6A1B9A] hover:text-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-amber-400 dark:hover:bg-amber-400 dark:hover:text-neutral-950 transition-colors"
                            >
                              <Plus className="h-3.5 w-3.5" />
                              <span>Select Bulk</span>
                            </button>
                          )}
                          <span className="text-[9px] text-[#6A1B9A] dark:text-amber-400 font-bold uppercase tracking-wider">
                            Direct supply
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Cart bottom slide inquiry launcher */}
                {getCartCount() > 0 && (
                  <div className="rounded-xl bg-purple-50/50 p-5 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4 dark:bg-neutral-900 dark:border-neutral-800 animate-slide-up">
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-gray-900 dark:text-white">Ready with selected bulk materials?</h4>
                      <p className="text-xs text-gray-500 dark:text-neutral-400">
                        Submit your selections list. We will reach back immediately with special customized dentist discounts and shipping delivery times.
                      </p>
                    </div>
                    <button
                      onClick={handleConsumablesInquiry}
                      className="cursor-pointer whitespace-nowrap rounded-lg bg-[#6A1B9A] px-5 py-3 text-xs font-bold text-white hover:bg-purple-800 dark:bg-amber-400 dark:text-neutral-950 dark:hover:bg-amber-500"
                    >
                      Send Bulk Materials Inquiry ({getCartCount()} items)
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
