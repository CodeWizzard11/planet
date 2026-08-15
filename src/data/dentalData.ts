import { DentalService, PricingPlan, TeamMember, OfficePhoto, SmileTransformation, PatientReview } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AP1WRLtsJwZ65mgQ4QoBFjEV6tfvi9Z-MMolnjwXPmx2XKuv445alfxKKLb7yel3htZIb1iHdD2J8Aimp8aQcOgUwE5ynddwV86wBVEDthTkX_XLewHEZ01p7NSm6ZGi5b9A4dtvGKvQhUDcVCU-XZD18Lf9Iv3IRA3SQ_4HWOixurQ5Y5jVAUYK_IEJH0qkMVFedhl0fKN3xrmnmwtItUQDltj89nFLRMd6TL1XN5SzBraAXpMOPCEJG_gvqW0';
export const HERO_BG_URL = 'https://lh3.googleusercontent.com/aida/AP1WRLvwLaTk8RZm6_SaA4tBm0eQwJlu4voB-RzTBRxp410OHyl_zo1ium4C0NlTgZudBY7VIBimCbVeDNNts4a25ecFlS5zB8s5B3Dj-VpBhqfOGfFrPngHNbEv57Vx18VACvY18TznXmQdsChBAPfArema5aysQgedBEJk9kzQW09-F7mOVedGG42aZ91RxCnKhu8RYT2iHyYtC_4ElJZGQP1adTCtNQm6YqMS5g1YTWMNEpnB2K-A6-MVKq0';
export const DENTIST_WORK_URL = 'https://lh3.googleusercontent.com/aida/AP1WRLsUHr_JGNydlE9N17teopqWB3PuHcHYvFSWBMzjE7Nd6Q-iiA0m_ylLugqldWllN98h5-78DBrTQ9QaFOOQt-G0q0HUgiUAiGTVjM8nv25MdejS5CjgC0E0imPmeF0dIf57Cz9iKEq_wcH2EJCU-KewfR9_VE8Alw7loEy9wB60Yk0HQOYFFaQVTRs-6dGU44ytuuf_BywqQsY4vAteF3teH6rwqn1ji1rZS3wf6WDWWgn4oU-nmJ0vvAY';
export const DOCTOR_SUMIT_URL = 'https://lh3.googleusercontent.com/aida/AP1WRLt0nMbl_KzHvKBeZEarUda45T7U1jLy8z2aVKYBGUn6dhHqav2zttcXMUZz50uUfxvEKisOHn-kKRRD4-PnELwliFF23zcm6kF2KYXozP5qIS7Cvx_qiYyV7OKlTtqMYL_2sQxXaegMKERpdrgSTc083ul9bpiSletFoW70NHrt2vbtBi5l7xfbDzpVWElYHnFfd-N2IQ5WLCEkXnLix_qWBW99dPXhDfN-2YFVwXEuBET9pFECe_mZF0A';
export const OFFICE_TOUR_1 = 'https://lh3.googleusercontent.com/aida/AP1WRLuEmLBuVz0lwk_jjdR9uH2cQgPiB4SJxPvDFagYkdxjUKIqvG2cjPAkWvNwjjRMTNYYwqJX3XZJ9z7ni5ZkgNULOu4x1jeT41vZ0HI40l5Ju-AhcVcNUzYj9F76S--7IW16uttDq77y3BNj5e6Ffxw2P2YxHRCEfLiELotgxhMoSyYjPzwRzt_odEMPWNETsV50IyRqLX8fidG_NWlWJ9hT2tyAwgJvO2Gefn6Ik6_rKkDm_fBA9iRW7UM';
export const OFFICE_TOUR_2 = 'https://lh3.googleusercontent.com/aida/AP1WRLvQo0T1yfFqWH33tb0cGWqX64ir74wBml9xteJUMCheg_oJfgt0t46peftJ4_hikIBNmD6baXT01jGO38AImBhnojKP8AcQLhh_K3sZA-7gaW1sQ2jZQpIeBA2lz8I94sB_9ErS3S7wY0xFX0wwR41Vj2rURlmm-vWRuLAJpgBpEuET8rlZ4RB6d4W-9PImpbZ1vqkwA-uyAksErUazE07Knp0uPeQWiJMJSTsM7buRX8X01VAWgsUELQ8';

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'general',
    title: 'General & Preventive',
    category: 'general',
    description: 'Comprehensive examinations, gentle cleanings, and proactive care for healthy, long-lasting smiles.',
    details: [
      'Gentle ultrasonic hygiene cleanings',
      'Comprehensive oral health & cancer screenings',
      'Low-radiation digital X-rays',
      'Preventive fluoride treatments and sealants'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    iconName: 'ShieldCheck',
    popular: true
  },
  {
    id: 'restorative',
    title: 'Restorative Dentistry',
    category: 'general',
    description: 'Fillings, crowns, and advanced restorations designed to restore strength, comfort, and function.',
    details: [
      'Same-day ceramic porcelain crowns',
      'Tooth-colored composite resin fillings',
      'Root canal therapy & endodontics',
      'Bridges and full mouth rehabilitation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    iconName: 'ShieldCheck',
    popular: true
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    category: 'cosmetic',
    description: 'Teeth whitening, veneers, and smile enhancements focused on natural, confident results.',
    details: [
      'Professional in-office & take-home teeth whitening',
      'Custom porcelain & composite veneers',
      'Cosmetic tooth bonding & shaping',
      'Complete smile makeovers with 3D previews'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80',
    iconName: 'Sparkles',
    popular: true
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    category: 'implants',
    description: 'Permanent, natural-looking tooth replacements with 3D navigated placement accuracy.',
    details: [
      'Single tooth dental implants',
      'Implant-supported bridges & dentures',
      '3D CBCT guided surgery',
      'Complimentary initial implant consultation'
    ],
    imageUrl: DENTIST_WORK_URL,
    iconName: 'Sparkles',
    popular: true
  },
  {
    id: 'ortho',
    title: 'Braces & Invisalign®',
    category: 'ortho',
    description: 'Clear aligners and modern orthodontic solutions for teens and adults for straight, confident smiles.',
    details: [
      'Invisalign® clear aligner therapy',
      'Traditional & aesthetic ceramic braces',
      'Digital 3D smile simulation',
      'Includes retainers & whitening post-treatment'
    ],
    imageUrl: OFFICE_TOUR_1,
    iconName: 'Smile',
    popular: true
  },
  {
    id: 'botox',
    title: 'TMJ Relief & Botox',
    category: 'cosmetic',
    description: 'Therapeutic and cosmetic Botox treatments for TMJ jaw tension, headaches, and fine line smoothing.',
    details: [
      'TMJ & teeth grinding tension relief',
      'Chronic migraine & headache therapy',
      'Administered by certified dental clinicians',
      'Rapid results with zero downtime'
    ],
    imageUrl: OFFICE_TOUR_2,
    iconName: 'Zap'
  },
  {
    id: 'wisdom-teeth',
    title: 'Wisdom Teeth & Surgery',
    category: 'emergency',
    description: 'Gentle extractions and surgical care with soothing sedation options for ultimate comfort.',
    details: [
      'Impacted wisdom teeth extractions',
      'IV & nitrous sedation options',
      'Fast, comfortable recovery protocols',
      'Direct insurance billing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    iconName: 'Clock'
  },
  {
    id: 'emergency',
    title: 'Same Day Emergency Care',
    category: 'emergency',
    description: 'Same-day urgent appointments for toothaches, chipped teeth, knocked-out teeth, and severe pain.',
    details: [
      'Immediate same-day appointments',
      'Painless emergency pain relief',
      'Open 7 days a week including weekends',
      'Direct insurance billing supported'
    ],
    imageUrl: DENTIST_WORK_URL,
    iconName: 'Clock'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'implants-plan',
    title: 'Dental Implants',
    startingPrice: '$2,999',
    subtitle: 'All inclusive Pricing',
    featured: false,
    badgeText: 'Dental Implants',
    features: [
      '0% Financing Available',
      'Complimentary Initial Consultation',
      'Implant treatment option'
    ]
  },
  {
    id: 'braces-plan',
    title: 'Braces or Invisalign',
    startingPrice: '$3,499',
    subtitle: 'All inclusive Pricing',
    featured: false,
    badgeText: 'Braces or Invisalign',
    features: [
      'No hidden fees',
      '0% Financing Available',
      'Includes Complimentary Consultation',
      'Includes All X-Rays, Scan, Retainers, Emergencies & All Visits'
    ]
  },
  {
    id: 'botox-plan',
    title: 'Botox Special',
    startingPrice: '$8/Unit',
    subtitle: 'All inclusive Pricing',
    featured: false,
    badgeText: 'Botox Special',
    features: [
      'Includes Complimentary Consultation',
      'Rapid Results',
      'Same-Day Treatment'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dr-tejas-patel',
    name: 'Dr. Tejas Patel',
    role: 'General & Cosmetic Dentist',
    title: 'DENTIST',
    bio: 'Specializing in comprehensive general dentistry, precision restorative care, and digital smile design with a warm, patient-first approach.',
    specialties: ['Comprehensive Restorative', 'Digital Scanning', 'Cosmetic Veneers', 'Preventive Care'],
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-siddharth-parikh',
    name: 'Dr. Siddharth Parikh',
    role: 'Implant & Restorative Dentist',
    title: 'DENTIST',
    bio: 'Dedicated to advanced dental implantology, guided surgery, and rehabilitating worn dentition for optimal function and long-term oral health.',
    specialties: ['Dental Implants', 'Guided Surgery', 'Crown & Bridge Restorations', 'Invisalign®'],
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-jeanne-trinh',
    name: 'Dr. Jeanne Trinh',
    role: 'Aesthetic & Family Dentist',
    title: 'DENTIST',
    bio: 'Passionate about gentle family care, aesthetic transformations, and empowering patients with clear education and anxiety-free visits.',
    specialties: ['Aesthetic Dentistry', 'Family Dental Care', 'Teeth Whitening', 'Pediatric Prevention'],
    imageUrl: 'https://images.unsplash.com/photo-1594824813515-59b48c41460a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-brayden',
    name: 'Dr. Brayden',
    role: 'Comprehensive & Surgical Dentist',
    title: 'DENTIST',
    bio: 'Focused on gentle wisdom teeth extractions, emergency treatments, and occlusal bite therapy to keep patients comfortable and pain-free.',
    specialties: ['Gentle Extractions', 'Wisdom Teeth', 'TMJ Therapy', 'Emergency Dental Care'],
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dr-sumit',
    name: 'Dr. Sumit',
    role: 'Lead Dentist',
    title: 'DENTIST',
    bio: 'Dr. Sumit combines advanced clinical expertise in restorative, implant, and aesthetic dentistry with a calm, patient-first philosophy.',
    specialties: ['Full Mouth Reconstruction', 'Dental Implants', 'Clear Aligners', 'Sedation Dentistry'],
    imageUrl: DOCTOR_SUMIT_URL
  }
];

export const OFFICE_GALLERY: OfficePhoto[] = [
  {
    id: 'tour-1',
    title: 'Modern Clinic Lounge & Suites',
    description: 'Ultra-modern lounge with pod seating, beverage station, and clean minimalist reception.',
    imageUrl: OFFICE_TOUR_1
  },
  {
    id: 'tour-2',
    title: 'Sci-Fi Arcade Corridor & Operatory Wing',
    description: 'Immersive spaceship hallway with retro arcade and illuminated dental portal.',
    imageUrl: OFFICE_TOUR_2
  },
  {
    id: 'tour-3',
    title: 'Panoramic Patient Relaxation Lounge',
    description: 'Floor-to-ceiling windows with ergonomic massage chairs for maximum patient comfort.',
    imageUrl: OFFICE_TOUR_1
  }
];

export const CLINIC_INFO = {
  name: 'Planet Dental Calgary',
  phone: '(587) 318-0318',
  phoneClean: '5873180318',
  address: 'East Hills Shopping Centre, East Calgary, AB',
  mapsLink: 'https://maps.app.goo.gl/eEKrA8au5S9VCx2o6',
  hours: [
    { day: 'Monday', time: '9 am - 9 pm' },
    { day: 'Tuesday', time: '9 am - 9 pm' },
    { day: 'Wednesday', time: '9 am - 9 pm' },
    { day: 'Thursday', time: '9 am - 9 pm' },
    { day: 'Friday', time: '9 am - 5 pm' },
    { day: 'Saturday', time: '9 am - 5 pm' },
    { day: 'Sunday', time: '9 am - 5 pm' }
  ],
  techHighlights: [
    '3D imaging for precise diagnosis and implant planning',
    'Navigated Dental Implant Placement Technology',
    'Digital X-rays with reduced radiation exposure',
    'Intraoral cameras to help you see what we see',
    'Same-day crown solutions for fewer visits and faster results'
  ]
};

export const SMILE_TRANSFORMATIONS: SmileTransformation[] = [
  {
    id: 'full-mouth-rehab',
    title: 'Full Mouth Reconstruction & Aesthetic Ceramic Arches',
    category: 'Restorative & Implant Dentistry',
    procedure: 'Full Arch Ceramic Crowns & Bridge Restorations',
    timeframe: 'Completed in 3 visits',
    description: 'Patient presented with severe tooth wear, broken restorations, and deep discoloration. Fully restored with natural-looking monolithic zirconia ceramic arches, restoring function, bite harmony, and a bright confident smile.',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'porcelain-veneers',
    title: 'Porcelain Veneers & Smile Makeover',
    category: 'Cosmetic Dentistry',
    procedure: '8 Custom Layered E-Max Porcelain Veneers',
    timeframe: 'Completed in 2 weeks',
    description: 'Transformation for chipped edges, uneven sizing, and fluorosis staining with hand-crafted ultra-thin porcelain veneers matching facial aesthetics.',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'invisalign-alignment',
    title: 'Invisalign® Clear Aligner Therapy',
    category: 'Orthodontics',
    procedure: 'Comprehensive Invisalign Clear Aligners + Whitening',
    timeframe: '8 Months Treatment',
    description: 'Corrected severe anterior crowding, crossbite, and midline asymmetry without metal wires or brackets.',
    beforeImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'dental-implants',
    title: 'Single & Multi-Tooth Implant Restorations',
    category: 'Implantology',
    procedure: '3D Navigated Titanium Implants + Custom Abutments',
    timeframe: 'Completed in 4 months',
    description: 'Restored missing front incisor and adjacent premolars with permanent, biocompatible dental implants that blend seamlessly with natural gum contours.',
    beforeImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'laser-whitening',
    title: 'In-Office Professional Power Whitening',
    category: 'Cosmetic Dentistry',
    procedure: 'Zoom! Advanced Laser Whitening',
    timeframe: 'Single 60-Minute Session',
    description: 'Lifted 8 shades of coffee, tea, and intrinsic aging discoloration in a single comfortable in-office appointment with zero sensitivity enamel protectant.',
    beforeImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80'
  }
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'review-1',
    author: 'Vivian Loor',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    timeAgo: '1 month ago',
    rating: 5,
    text: 'My routine cleaning was excellent as always! I appreciate the staffs hospitality as they are always very welcoming. Highly recommend this clinic for anyone looking for gentle and detailed care.',
    source: 'google'
  },
  {
    id: 'review-2',
    author: 'Harpreet Singh',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    timeAgo: '1 month ago',
    rating: 5,
    text: 'I recently visited Galaxy Dental with my family, and we had an outstanding experience from start to finish. The entire staff is incredibly friendly, welcoming, and thorough with all explanations.',
    source: 'google'
  },
  {
    id: 'review-3',
    author: 'Lamya Nassri',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    timeAgo: '1 month ago',
    rating: 5,
    text: "I've always been nervous about dental work, but Dr. Patel, Hadrie and the team made me feel completely at ease. They explained every step before doing anything. Truly wonderful care!",
    source: 'google'
  },
  {
    id: 'review-4',
    author: 'Asadullah Basir',
    avatarInitial: 'A',
    avatarBg: 'bg-emerald-700',
    timeAgo: '1 month ago',
    rating: 5,
    text: 'My experience with Dr. Sid and his nurse was excellent. He was very professional, a wonderful person, and explained well what was needed. Great painless treatment!',
    source: 'google'
  },
  {
    id: 'review-5',
    author: 'Georgette Heywood',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    timeAgo: '1 month ago',
    rating: 5,
    text: "Honestly, incredible place. One of the best dental experiences I've ever had. Clean, modern technology and super attentive clinicians.",
    source: 'google'
  },
  {
    id: 'review-6',
    author: 'Michael Chang',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    timeAgo: '2 months ago',
    rating: 5,
    text: 'Got my wisdom teeth extracted here without any discomfort. Dr. Brayden and the team were supportive, checked on me during recovery, and the pricing was completely transparent.',
    source: 'google'
  }
];
