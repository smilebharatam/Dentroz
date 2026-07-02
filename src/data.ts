import { 
  DesignPackage, 
  EquipmentItem, 
  ConsumableItem, 
  MarketingPackage, 
  ProcessStep, 
  Testimonial, 
  CaseStudy, 
  BlogPost 
} from './types';

export const CLINIC_TYPES = [
  {
    id: 'single-chair',
    title: 'Single Chair Clinics',
    size: '150 - 250 sq.ft.',
    description: 'Perfect for fresh graduates and consultants starting fresh with optimal space efficiency.',
    features: ['Ergonomic zoning', 'Essential plumbing layout', 'Reception reception-desk integration', 'Compact sterilization workflow']
  },
  {
    id: 'two-chair',
    title: 'Two Chair Clinics',
    size: '300 - 450 sq.ft.',
    description: 'The sweet spot for growing dental practices looking to balance patient volume and investment.',
    features: ['Parallel treatment chambers', 'Shared digital imaging room', 'Larger lounge & washrooms', 'Optimized utility sound isolation']
  },
  {
    id: 'multi-chair',
    title: 'Multi Chair Clinics',
    size: '500+ sq.ft.',
    description: 'Designed as corporate or multi-doctor polyclinics with premium design standards and dedicated ops.',
    features: ['Centralized sterilization room', 'Executive consulting suites', 'Private staff lounge', 'Advanced server & IT cabling']
  },
  {
    id: 'specialty',
    title: 'Specialty Clinics',
    size: 'Customized layout',
    description: 'Designed specifically for Pediatric, Orthodontic, Maxillofacial Surgery, or Digital Implant Centers.',
    features: ['Kid-friendly child lounges', 'Dedicated high-end OT cabins', 'Surgical gas line integrations', 'Pre/Post operative recovery beds']
  }
];

export const DESIGN_PACKAGES: DesignPackage[] = [
  {
    id: 'basic-interior',
    name: 'Basic Setup',
    tagline: 'Functional & Smart Core design',
    priceLevel: 'Basic',
    vibe: 'Clean, professional and budget-friendly.',
    idealFor: 'Fresh graduates or secondary startup branches.',
    features: [
      'Smart Spatial Planning grid',
      'Standard vinyl/ceramic flooring suggestions',
      'Functional task lighting layout',
      'Optimized plumbing and compressor point guides',
      'Classic modular main reception counter details',
      'Waterproof paint palette styling'
    ]
  },
  {
    id: 'premium-interior',
    name: 'Premium Design',
    tagline: 'Contemporary patients experience focus',
    priceLevel: 'Premium',
    vibe: 'Warm lighting, modern accent paneling, premium visual alignment.',
    idealFor: 'Full-time consultants wanting to stand out from average neighborhood clinics.',
    features: [
      'Contemporary interior blueprint with customized 3D elevation themes',
      'Noise-reducing false ceilings with cove and warm profile lights',
      'Luxury anti-bacterial wooden-texture flooring / quartz countertops',
      'Dedicated glass partitions between consulting and treatment zones',
      'Integrated branding elements and signature backboard designs',
      'Ergonomic storage drawers & hidden cable routing channels'
    ]
  },
  {
    id: 'luxury-interior',
    name: 'Luxury Experience',
    tagline: 'High-End Elite Boutique Studio visual',
    priceLevel: 'Luxury',
    vibe: 'Elite hospitality ambiance, executive finishes, absolute sensory comfort.',
    idealFor: 'Premium cosmetic dentistry & high-end implant centers.',
    features: [
      'Signature bespoke high-end layouts designed by luxury architects',
      'Acoustic-insulated walls and soundproof partition panels',
      'Executive-class patient lounge resembling a luxury hotel lobby',
      'Automated dynamic lighting scenarios (restorative, operational, lounge)',
      'Hidden state-of-the-art sterilization unit layouts with custom glass viewing-ports',
      'Zero-VOC eco-conscious premium textures, gold metal accents, and customized marble finishes'
    ]
  }
];

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    id: 'eq-chairs',
    name: 'Dental Chairs',
    category: 'Core Operatory',
    description: 'Fully programmable premium computerized chairs featuring high durability and patient luxury.',
    features: ['Ergonomic memory systems', 'LED dental sensors', 'Under-mounted or over-delivery systems', 'Seamless feather-touch upholstery'],
    icon: 'Stethoscope'
  },
  {
    id: 'eq-compressors',
    name: 'Compressors & Suctions',
    category: 'Infrastructure',
    description: 'Oil-free medical compressors and continuous high-vacuum suction systems ensuring absolute hygiene.',
    features: ['Ultra-silent noise dampening systems', 'Dry air filtration mechanisms', 'High-capacity surgical vacuums', 'Thermostatic safety valves'],
    icon: 'Wind'
  },
  {
    id: 'eq-imaging',
    name: 'RVG & Digital Imaging',
    category: 'Diagnostics',
    description: 'Next-generation high-resolution digital X-ray sensors and portable high-frequency intraoral generators.',
    features: ['Zero-lag immediate digital preview', 'Direct USB-C compatibility', 'Ultra-low radiation scatter', 'Tough fiber-optic armor cables'],
    icon: 'Scan'
  },
  {
    id: 'eq-scanners',
    name: 'Intraoral Scanners',
    category: 'Digital Dentistry',
    description: 'State-of-the-art fast 3D scanning for custom crowns, bridges, and precise aligner workflows.',
    features: ['AI-powered color scan precision', 'Export directly to standard STL/PLY formats', 'Powder-free scanning speed', 'Anti-fog tip heating mechanisms'],
    icon: 'Cpu'
  },
  {
    id: 'eq-scalers',
    name: 'Scalers & Apex Locators',
    category: 'Endodontics',
    description: 'Multi-functional piezoelectric scalers and multi-frequency digital apex locators for high root canal accuracy.',
    features: ['Pain-free low-frequency scaler vibrations', 'LED auto-detect handpieces', 'Virtual apex graphical sound guides', 'Rechargeable Li-ion batteries'],
    icon: 'Zap'
  },
  {
    id: 'eq-cams',
    name: 'Intraoral Cameras & Lights',
    category: 'Diagnostics',
    description: 'High-definition macro intraoral cameras to document and present dental treatment cases to patients interactively.',
    features: ['1080p full autofocus sensor', 'Broad-spectrum violet curing handpieces', 'Wifi-enabled instant monitor cast', 'Shadowless ergonomic lights'],
    icon: 'Camera'
  }
];

export const REGULATORY_SERVICES = [
  {
    id: 'reg-clinical',
    title: 'Clinical Establishment Certification',
    authority: 'State Health Department',
    difficulty: 'Required for all clinics',
    description: 'Crucial baseline permit needed to start operating any healthcare clinic legally across Indian states.'
  },
  {
    id: 'reg-aerb',
    title: 'AERB Certification',
    authority: 'Atomic Energy Regulatory Board Office',
    difficulty: 'Required for dental X-Rays / RVGs',
    description: 'Rigorous safety registration for installing and utilizing diagnostic radiation equipment such as RVGs, OPGs, or dental CBCT.'
  },
  {
    id: 'reg-pollution',
    title: 'Pollution Control Certification (Consent to Establish/Operate)',
    authority: 'State Pollution Control Authority',
    difficulty: 'Required for clinic waste drainage',
    description: 'Certifies that your clinics plumbing and dental spittoon discharge systems meet local sanitary sewage codes.'
  },
  {
    id: 'reg-biomed',
    title: 'Biomedical Waste Certification (BMW Agreement)',
    authority: 'Authorized State Waste Management Board',
    difficulty: 'Mandatory',
    description: 'Covers essential contracts with certified agencies to dispose of contaminated needles, plastics, and cotton safely.'
  },
  {
    id: 'reg-safety',
    title: 'Fire & Structural Safety NOC',
    authority: 'Municipal Corporation / Local Fire Dept',
    difficulty: 'Required for commercial zones',
    description: 'Validation of electrical safety layout, smoke detectors, and emergency exits to guarantee patient and team safety.'
  }
];

export const MARKETING_PACKAGES: MarketingPackage[] = [
  {
    id: 'marketing-starter',
    name: 'Starter Practice Builder',
    price: '9,999',
    postsCount: '8 High-Resolution Posts',
    reelsCount: '4 Edited Practice Reels',
    shortsCount: '0 Shorts included',
    googleUpdates: '4 Google Profile Updates',
    additionalFeatures: [
      'Basic Local SEO Optimization',
      'Initial Google Map setup & verify',
      'Dental clinic custom logo visual consultation',
      'Bi-weekly custom content review',
      'Standard whatsapp consultation support'
    ]
  },
  {
    id: 'marketing-growth',
    name: 'Practice Growth Booster',
    price: '19,999',
    postsCount: '16 High-Resolution Posts',
    reelsCount: '8 Patient Testimonial/Procedure Reels',
    shortsCount: '4 YouTube Shorts',
    googleUpdates: '8 Dynamic Google Profile Updates',
    isPopular: true,
    additionalFeatures: [
      'Included: 5-Page fully optimized custom clinic website',
      'Enhanced Local SEO and patient review collection campaign',
      'Lead Generation strategies setup',
      'Dentist profile branding features',
      'Comprehensive monthly analytics and progress reporting',
      'Prioritized immediate team response'
    ]
  },
  {
    id: 'marketing-premium',
    name: 'Elite Celebrity Dental Practice',
    price: '29,999',
    postsCount: '20 Bespoke Custom Branded Posts',
    reelsCount: '12 Clinical/Lifestyle Reels',
    shortsCount: '10 YouTube Shorts',
    googleUpdates: 'Weekly Google Profile and Post Updates',
    additionalFeatures: [
      'Included: Premium Custom Website with online booking integration',
      '1 Long-Form high-production patient education video',
      'Advanced patient engagement & brand identity booklet',
      'Competitor SEO gap analysis and weekly optimization tasks',
      'Automated patient review response systems',
      'Dedicated elite branding account manager'
    ]
  }
];

export const DENTAL_CONSUMABLES: ConsumableItem[] = [
  // Restorative & Esthetic
  {
    id: 'con-1',
    name: 'Nano-Hybrid Composite Kits',
    category: 'Restorative',
    description: 'Low-shrinkage premium composite restorations offering stellar matching and natural aesthetics.',
    subCategory: 'Composite Systems'
  },
  {
    id: 'con-2',
    name: 'Universal Dentin Bonding Agents',
    category: 'Restorative',
    description: 'Premium light-cure single-bottle adhesives with deep dentinal tubule seal performance.',
    subCategory: 'Bonding and Adhesives'
  },
  {
    id: 'con-3',
    name: 'Glass Ionomer Luting Cements',
    category: 'Restorative',
    description: 'Highly biocombatible fluoride-releasing classical restorative system for primary teeth and metal crown luting.',
    subCategory: 'Glass Ionomers (GIC)'
  },
  // Endodontics
  {
    id: 'con-4',
    name: 'Heat-Activated Nickel Titanium Rotary Files',
    category: 'Endodontics',
    description: 'High-flexibility rotary instruments that adapt smoothly to even curved anatomical root canals.',
    subCategory: 'Rotary Files'
  },
  {
    id: 'con-5',
    name: 'Bioceramic Root Canal Sealers',
    category: 'Endodontics',
    description: 'Pre-mixed bio-active root canal filling sealers setting absolutely shrink-free for hermetic apical seal.',
    subCategory: 'Endoconic Sealers'
  },
  // Prosthodontics
  {
    id: 'con-6',
    name: 'High-Flow Addition Silicone (Addition Cured VPS)',
    category: 'Prosthodontics',
    description: 'Super-hydrophilic impression material offering supreme reproduction of preparation margin details.',
    subCategory: 'VPS Impression Materials'
  },
  {
    id: 'con-7',
    name: 'Premium Alginate Impression Powder',
    category: 'Prosthodontics',
    description: 'Dust-free rapid water absorbing chromatic impressions powder providing smooth initial study cast builds.',
    subCategory: 'Alginates'
  },
  // Surgical & Periodontal
  {
    id: 'con-8',
    name: 'Absorptive Bone Graft Sponges & Sutures',
    category: 'Surgical',
    description: 'Purified animal source collagen bone matrix plugs and sterile black silk braided non-absorbable sutures.',
    subCategory: 'Bone Grafts & Sutures'
  },
  // Preventive & Pedodontic
  {
    id: 'con-9',
    name: 'Prophylaxis Cleaning Sanding Paste & Fluorides',
    category: 'Preventive',
    description: 'Zirconium silicate formula high-polish prophy paste and clinical strength topical fluorides application gel.',
    subCategory: 'Preventive'
  },
  // Essentials
  {
    id: 'con-10',
    name: 'High-Barrier Nitrile Gloves & Masks',
    category: 'Essentials',
    description: 'Powder-free comfortable medical examination gloves paired with ASTM Level 3 surgical face masks.',
    subCategory: 'Clinic Disposables & Essentials'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Consultation & Feasibility',
    description: 'Initial site inspection, target patient demographic analysis, project estimation, and layout brainstorming.',
    details: ['Site survey & dimensions verification', 'Zoning eligibility review', 'Detailed investment blueprint layout', 'Equipment options overview']
  },
  {
    step: 2,
    title: 'Sophisticated Clinic Design',
    description: 'Preparing exact physical placement sheets including precise electrical cabling, high-grade drainage, and beautiful interiors.',
    details: ['Plumbing and compressor wiring drawings', 'Radiation safety wall thickeness maps', '3D styling rendering drafts', 'Modular operatory layout boards']
  },
  {
    step: 3,
    title: 'Curated Equipment Selection',
    description: 'Matching chairs, imaging arrays, compressors, and technical tools according to clinical focus and scale.',
    details: ['Budget-to-value comparison checklists', 'Manufacturer direct warranty enrollment', 'Product live demo walkthroughs', 'Custom feature package bundles']
  },
  {
    step: 4,
    title: 'Engineering Installation',
    description: 'Physical deployment, plumbing connection, compressed air testing, surgical suction adjustments, and complete calibration.',
    details: ['Structural reinforcement testing', 'Anti-vibration compressor mounting', 'Suction power check', 'Radiation scattering calibration']
  },
  {
    step: 5,
    title: 'Compliance & Registration',
    description: 'Executing all mandatory license filings including biomedical contract routing, pollution permits, and AERB compliance panels.',
    details: ['Document assembly by certified team', 'Direct filing with municipal boards', 'Pre-inspection checklist verification', 'Official license reception handoff']
  },
  {
    step: 6,
    title: 'Marketing & Digital Launch',
    description: 'Setting up high-ranking local SEO, setting up initial patient lead generation ads, profile systems, and custom clinic websites.',
    details: ['Clinic launching event planning', 'Google My Business verification maps', 'Optimized fast booking website deploy', 'Local patient ad campaigns start']
  },
  {
    step: 7,
    title: 'Ongoing Technical Support',
    description: 'Peace of mind operations backed by rapid repair teams, preventive dental equipment maintenance, and consumables supply.',
    details: ['24/7 priority emergency technical line', 'Quarterly preventive health checkups', 'Discounted Annual Maintenance Contracts (AMC)', 'Same-day clinical consumables routing']
  }
];

export const STATS = [
  { label: 'Clinics Handled', value: '100+', detail: 'Completed clinics custom built across South India.' },
  { label: 'Equipment Deployed', value: '500+', detail: 'Chairs, imaging systems & high-end diagnostics.' },
  { label: 'Consumables Shipped', value: '1000+', detail: 'Authentic dental components packaged cleanly.' },
  { label: 'Technical Response Time', value: '2 Hours', detail: 'Rapid response for emergency downtime issues.' },
  { label: 'Service Network', value: 'Pan India', detail: 'Primary support bases located strategically.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    doctorName: 'Dr. Aarav Mehta, MDS',
    role: 'Clinical Director & Implantologist',
    clinicName: 'Crown & Root Dental Studio',
    location: 'Adyar, Chennai',
    rating: 5,
    text: 'Building my three-chair premium clinic was absolutely zero hassle. Dentroz took care of everything from state compliance certificates to the stunning modular wood interior designs. I can focus 100% on patients.',
    imgUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't-2',
    doctorName: 'Dr. Shruti Sharma',
    role: 'Pediatric Dental Consultant',
    clinicName: 'Little Smiles Pediatric Clinic',
    location: 'Indiranagar, Bengaluru',
    rating: 5,
    text: 'Most designers dont understand dental clinical requirements — sterilization workflows, compressor plumbing angles, etc. The Dentroz team has specialized dental engineers who realized our child-friendly clinic with absolute precision.',
    imgUrl: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't-3',
    doctorName: 'Dr. Nikhil Kulkarni, MDS',
    role: 'Chief Orthodontist',
    clinicName: 'Align Orthodontic & Aesthetic Hub',
    location: 'Shivajinagar, Pune',
    rating: 5,
    text: 'The digital marketing packages of Dentroz transformed our patient leads scale! The Growth Program website and native search profile optimize gave us a 40% organic patient footfall spike in just 90 days. Recommended highly.',
    imgUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't-4',
    doctorName: 'Dr. Pooja Nair',
    role: 'Co-Founder & Periodontist',
    clinicName: 'Nair Multi-Specialty Dental Clinic',
    location: 'Kochi, Kerala',
    rating: 5,
    text: 'I bought my dental chairs, compressor, and digital scaler units directly through Dentroz. Their after-sales technical support response is stellar — when we had an intake pipe leak, an engineer resolved it within 90 minutes!',
    imgUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't-5',
    doctorName: 'Dr. Vivek Bhatia, MDS',
    role: 'Prosthodontics Specialist',
    clinicName: 'Bhatia Aesthetic Prosthetic Lab',
    location: 'Saket, New Delhi',
    rating: 5,
    text: 'AERB and State Health compliance setup can get extremely messy. Dentroz structured legal binders, checked testing details for RVG radiation, and brought certificates to our desk seamlessly. Zero paper headache.',
    imgUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: 't-6',
    doctorName: 'Dr. Ananya Roy',
    role: 'Endodontist & Cosmetic Dentist',
    clinicName: 'Perfect White Dental Center',
    location: 'Whitefield, Bengaluru',
    rating: 5,
    text: 'The consumables delivery saves me from keeping hefty stocks. I order our root files, addition silcone and composite bonding agents from their app catalog, and get verified shipments right on time.',
    imgUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Transforming a Heritage Building into a 4-Chair Digital Studio',
    location: 'Eldams Road, Chennai',
    area: '950 sq.ft.',
    chairs: 4,
    duration: '45 Days',
    challenge: 'A vintage colonial structure with absolute restrictions on floor chipping/drilling for main pneumatic dental drainage and heavy electricity demands.',
    solution: 'Engineered specialized suspended under-floor technical plumbing grids concealed behind elevated design panels. Deployed silent vacuum wet suctions on smart soundproof frames.',
    designConcept: 'Luxury vintage-contemporary blend featuring gold-brushed accent metals and custom ambient warmth fixtures.',
    beforeImg: 'Old heritage space with cracked clay tiling, legacy partition partitions and low power connections.',
    afterImg: 'Prestige 4-chair clinic with smart digital glass consulting walls, and ultra-comfortable operational bays.'
  },
  {
    id: 'case-2',
    title: 'Boutique Cosmetic Dentistry Boutique Aesthetic Cafe Clinic',
    location: 'Jubilee Hills, Hyderabad',
    area: '1200 sq.ft.',
    chairs: 3,
    duration: '55 Days',
    challenge: 'The doctor requested a layout that does NOT look or smell like a clinic to lower dental anxiety of celebrity and aesthetic clients.',
    solution: 'Designed and integrated specialized activated-carbon air filtration vents to scrub medical chemical scents. Formulated a minimal chic aesthetic concept resembling a Nordic espresso cafe.',
    designConcept: 'Neutral earth tones, raw natural textured oak paneling, warm lighting, and integrated beverage bar setups.',
    beforeImg: 'Empty high-ceiling bare concrete retail space with zero water inlets and heavy road dust exposure.',
    afterImg: 'Breath-taking luxury cosmetic clinic with silent operations, modern lounge and state of art scanning zone.'
  },
  {
    id: 'case-3',
    title: 'High-Throughput Multi-Doctor Family Practice Layout',
    location: 'Velachery, Chennai',
    area: '700 sq.ft.',
    chairs: 3,
    duration: '35 Days',
    challenge: 'Extreme space optimization needed to pack 3 full clinics, 1 digital RVG chamber, autoclaving center, and a wide waiting lobby.',
    solution: 'Pioneered an angled diagonal operatory placement scheme adding 30% functional walkthrough room while strictly partitioning patient flow from staff sterilization pathways.',
    designConcept: 'Smart medical modular setups, white anti-static composite surfaces with vivid purple branding graphics.',
    beforeImg: 'Standard box-layout residential apartment with crowded tiny chambers and low visual appeal.',
    afterImg: 'Super high-efficiency 3-chamber workflow with specialized lighting and zero patient-sterilization cross paths.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Avoiding the Top 5 Costly Plumbing Mistakes in Dental Design',
    excerpt: 'Plumbing mistakes can cause odor, vacuum loss, or expensive demolition. Learn how to design your clinic correctly.',
    category: 'Design',
    readTime: '6 Min Read',
    date: 'June 18, 2026',
    content: 'An incredible clinic setup depends heavily on what is hidden under the tiles. Dental chairs dump water and suction spit under high pressure. One common error is using standard right-angle domestic elbows instead of sweeping 45-degree bends, causing chronic biological debris clogging. Another mistake is ignoring separate copper compressed-air piping, leading to condensation rusting inside your premium rotary tools. Discover the complete layout checklists recommended by Dentroz technical engineers.'
  },
  {
    id: 'blog-2',
    title: 'Complete Indian Regulatory Guide: Starting a Dental Clinic Legally',
    excerpt: 'An exhaustive roadmap of State Health registrations, AERB procedures, and biomedical contract norms.',
    category: 'Clinic Operations',
    readTime: '9 Min Read',
    date: 'May 20, 2026',
    content: 'Dentists spend years learning patient care but often get puzzled by the municipal licensing procedures. To operate smoothly, a modern dental clinic needs at least five distinct regulatory greenlights: from State Clinical Establishment boards to pollution agreements and atomic safety panels (AERB) for hand-held raw imaging systems. This post deconstructs requirements state-by-state, and explains timelines to start operations confidently without legal friction.'
  },
  {
    id: 'blog-3',
    title: 'Dental local SEO Secrets: How to Outrank Multi-doctor Centers Nearby',
    excerpt: 'Simple organic strategies to position your standalone clinic on the top of local Google Search results.',
    category: 'Marketing',
    readTime: '5 Min Read',
    date: 'April 14, 2026',
    content: 'When a patient feels dental pain, they pull out their smartphone and type "dentist near me". The top three results get 70% of all telephone calls.STANDOUT clinics do not succeed by expensive TV or billboard ads, but by smart local directory signals, consistent photo pins, targeted patient reviews keyword tuning, and custom high-speed landing pages. Here is our actionable checklist to optimize your clinic’s local digital profile within 30 days.'
  }
];

export const FAQS = [
  {
    question: 'How long does a complete dental clinic setup typically take from scratch?',
    answer: 'A standard single or two-chair premium dental clinic setup takes approximately 30 to 45 days. This includes space planning, layout drawings, plumbing installation, electrical provisioning, interior design execution, equipment installation, and initial regulatory filings.'
  },
  {
    question: 'Which states in India do you provide services and equipment delivery to?',
    answer: 'Dentroz has a strong physical operational base in Chennai and supports clinics across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, Kerala, and multiple cities pan-India. Our digital medical marketing services and technical consultation are accessible nationwide.'
  },
  {
    question: 'Do you help in procuring dental equipment on installment options (EMIs)?',
    answer: 'Yes! We collaborate with top medical equipment leasing companies and leading financial banking institutions to facilitate easy EMI solutions and medical equipment business loans with simple paperwork for dentists.'
  },
  {
    question: 'What is covered in the Dentroz Annual Maintenance Contract (AMC) for dental chairs?',
    answer: 'Our comprehensive AMC covers quarterly preventive cleaning of compressor pipes, suction motors, and foot controllers; electrical voltage check-ups; alignment calibration of the main halogen/LED light arm; and two free priority emergency repair calls with heavily discounted spare parts.'
  },
  {
    question: 'Are the dental consumables and materials your team delivers fully genuine and under warranty?',
    answer: 'Absolutely. We deal direct with top dental manufacturing brands (3M, GC, Kulzer, Mani, Woodpecker, Dentsply Sirona). Every single composite kit, rotary file, or VPS impression cartridge comes in original sealed batches with verifiable batch numbers and complete expiration transparency.'
  },
  {
    question: 'How does your Digital Marketing guarantee clinic footfall growth?',
    answer: 'While we do not guarantee specific medical outcomes, our dental SEO and local Google Maps campaigns target high-intent patients searching actively for treatments like implants, root canals, braces, and clear aligners in your specific neighborhood (3-5 km radius). This hyper-local approach yields high conversion rates.'
  }
];
