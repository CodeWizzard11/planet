import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X, Phone, ShieldCheck, Sparkles, Smile, Zap, Clock, Calculator, CreditCard } from 'lucide-react';
import { LOGO_URL, CLINIC_INFO } from '../data/dentalData';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(true);
  const [mobileFinancingOpen, setMobileFinancingOpen] = useState(true);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [financingOpen, setFinancingOpen] = useState(false);

  const treatmentsRef = useRef<HTMLDivElement>(null);
  const financingRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (treatmentsRef.current && !treatmentsRef.current.contains(event.target as Node)) {
        setTreatmentsOpen(false);
      }
      if (financingRef.current && !financingRef.current.contains(event.target as Node)) {
        setFinancingOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (tab: ActiveTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    setTreatmentsOpen(false);
    setFinancingOpen(false);
  };

  return (
    <header className="bg-[#050e1f] text-white w-full sticky top-0 z-50 border-b border-gray-800/80 shadow-lg transition-all">
      {/* Top Main Row: Logo and Right Action Pill Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3.5 pb-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNav('home')} 
            className="flex items-center gap-3 cursor-pointer group text-left transition-transform duration-200 hover:opacity-95"
          >
            {/* Custom stylized crisp logo if image or fallback */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Glowing planetary tooth icon matching design */}
                  <defs>
                    <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#67e8f9" />
                      <stop offset="50%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  {/* Tooth base */}
                  <path 
                    d="M50 12 C32 12 20 25 20 45 C20 62 30 70 35 88 C38 96 46 96 48 87 C49 80 51 80 52 87 C54 96 62 96 65 88 C70 70 80 62 80 45 C80 25 68 12 50 12 Z" 
                    fill="url(#toothGrad)" 
                  />
                  {/* Orbit Ring */}
                  <ellipse 
                    cx="50" 
                    cy="48" 
                    rx="44" 
                    ry="15" 
                    stroke="url(#ringGrad)" 
                    strokeWidth="4" 
                    transform="rotate(-20 50 48)" 
                    strokeLinecap="round"
                  />
                  {/* Gloss highlight */}
                  <path 
                    d="M32 30 C35 22 45 18 55 18" 
                    stroke="#ffffff" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    opacity="0.8"
                  />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                  Planet
                </span>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#38bdf8] leading-none">
                  Dental
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Right Pill Actions matching screenshot */}
          <div className="hidden md:flex items-center gap-3">
            {/* Call us Today Pill Button */}
            <a 
              href={`tel:${CLINIC_INFO.phoneClean}`}
              className="flex items-center gap-2.5 bg-[#0b172a] hover:bg-[#12223b] text-white border border-gray-700/80 hover:border-gray-500/80 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <span>Call us Today</span>
              <div className="w-6 h-6 rounded-full bg-white text-[#050e1f] flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </a>

            {/* Request an Appointment Pill Button */}
            <button 
              onClick={onOpenBooking}
              className="flex items-center gap-2.5 bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.35)] cursor-pointer"
            >
              <span>Request an Appointment</span>
              <div className="w-6 h-6 rounded-full bg-[#050e1f] text-white flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#38bdf8] text-[#050e1f] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 cursor-pointer"
            >
              <span>Book</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-sky-300 p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Second Row: Centered Navigation Links as in Screenshot */}
        <nav className="hidden md:flex items-center justify-center gap-7 pt-3 pb-1 border-t border-gray-800/40 text-sm">
          {/* Home */}
          <button
            onClick={() => handleNav('home')}
            className={`font-medium transition-colors cursor-pointer ${
              activeTab === 'home' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
            }`}
          >
            Home
          </button>

          {/* TMJ Disorder */}
          <button
            onClick={() => handleNav('tmj')}
            className={`font-medium transition-colors cursor-pointer ${
              activeTab === 'tmj' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
            }`}
          >
            TMJ Disorder
          </button>

          {/* Treatments Dropdown */}
          <div className="relative" ref={treatmentsRef}>
            <button
              onClick={() => {
                setTreatmentsOpen(!treatmentsOpen);
                setFinancingOpen(false);
              }}
              className="flex items-center gap-1 font-medium text-gray-300 hover:text-white transition-colors cursor-pointer py-1"
            >
              <span>Treatments</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${treatmentsOpen ? 'rotate-180 text-sky-400' : ''}`} />
            </button>

            {treatmentsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#09152b] border border-gray-700/80 rounded-2xl shadow-2xl p-2.5 z-50 animate-fadeIn space-y-1">
                <button
                  onClick={() => handleNav('services')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 flex items-center gap-3 text-xs text-gray-200 hover:text-white transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Restorative Dentistry</div>
                    <div className="text-[11px] text-gray-400">Fillings, Crowns, Bridges</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNav('services')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 flex items-center gap-3 text-xs text-gray-200 hover:text-white transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Dental Implants</div>
                    <div className="text-[11px] text-gray-400">3D Navigated Replacement</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNav('services')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 flex items-center gap-3 text-xs text-gray-200 hover:text-white transition-colors"
                >
                  <Smile className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Braces & Invisalign®</div>
                    <div className="text-[11px] text-gray-400">Clear Smile Aligners</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNav('tmj')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 flex items-center gap-3 text-xs text-gray-200 hover:text-white transition-colors"
                >
                  <Zap className="w-4 h-4 text-rose-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Botox & TMJ Relief</div>
                    <div className="text-[11px] text-gray-400">Jaw Pain & Tension Therapy</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNav('transformations')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 flex items-center gap-3 text-xs text-gray-200 hover:text-white transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Before & After Smiles</div>
                    <div className="text-[11px] text-gray-400">Smile Transformations & Cases</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNav('wisdom-teeth')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 flex items-center gap-3 text-xs text-gray-200 hover:text-white transition-colors"
                >
                  <Clock className="w-4 h-4 text-lime-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Wisdom Teeth Extractions</div>
                    <div className="text-[11px] text-gray-400">Gentle & Painless Surgery</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Pricing */}
          <button
            onClick={() => handleNav('pricing')}
            className={`font-medium transition-colors cursor-pointer ${
              activeTab === 'pricing' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
            }`}
          >
            Pricing
          </button>

          {/* Wisdom Teeth */}
          <button
            onClick={() => handleNav('wisdom-teeth')}
            className={`font-medium transition-colors cursor-pointer ${
              activeTab === 'wisdom-teeth' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
            }`}
          >
            Wisdom Teeth
          </button>

          {/* Financing & Fees Dropdown */}
          <div className="relative" ref={financingRef}>
            <button
              onClick={() => {
                setFinancingOpen(!financingOpen);
                setTreatmentsOpen(false);
              }}
              className="flex items-center gap-1 font-medium text-gray-300 hover:text-white transition-colors cursor-pointer py-1"
            >
              <span>Financing & Fees</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${financingOpen ? 'rotate-180 text-sky-400' : ''}`} />
            </button>

            {financingOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#09152b] border border-gray-700/80 rounded-2xl shadow-2xl p-2.5 z-50 animate-fadeIn space-y-1">
                <button
                  onClick={() => handleNav('financing')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 flex items-center gap-3 text-xs text-gray-200 hover:text-white transition-colors"
                >
                  <Calculator className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">0% Financing Calculator</div>
                    <div className="text-[11px] text-gray-400">Custom Monthly Payment Plans</div>
                  </div>
                </button>

                <button
                  onClick={() => handleNav('financing')}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-white/10 flex items-center gap-3 text-xs text-gray-200 hover:text-white transition-colors"
                >
                  <CreditCard className="w-4 h-4 text-lime-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white">Direct Insurance Billing</div>
                    <div className="text-[11px] text-gray-400">We bill directly to provider</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <button
            onClick={() => handleNav('contact')}
            className={`font-medium transition-colors cursor-pointer ${
              activeTab === 'contact' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
            }`}
          >
            Contact Us
          </button>
        </nav>
      </div>

      {/* Full-Screen Mobile Drawer matching Screenshot */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#020b18] overflow-y-auto animate-fadeIn flex flex-col">
          {/* Top Bar inside Mobile Menu matching screenshot */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-[#030e20] border-b border-sky-950/80">
            {/* Logo */}
            <button 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2.5 text-left"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                  <ellipse cx="50" cy="50" rx="46" ry="46" fill="url(#toothGradMobile)" />
                  <path d="M35 30 C30 45, 32 65, 40 74 C44 78, 48 75, 50 65 C52 58, 54 58, 56 65 C58 75, 62 78, 66 74 C74 65, 76 45, 71 30 C66 18, 40 18, 35 30 Z" fill="#ffffff" />
                  <defs>
                    <linearGradient id="toothGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-none">Planet</span>
                <span className="text-lg font-bold tracking-tight text-[#38bdf8] leading-none">Dental</span>
              </div>
            </button>

            {/* Square Close Button with White Border */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 border border-white/90 rounded-[4px] text-white flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Navigation Links list */}
          <div className="flex flex-col flex-1 pb-12">
            {/* 1. Home - Dark Navy bg, Sky Blue text */}
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left px-5 py-3.5 bg-[#030e20] text-[#38bdf8] hover:text-white font-normal text-[15px] transition-colors border-b border-sky-950/40"
            >
              Home
            </button>

            {/* 2. TMJ Disorder - Solid Sky Blue bg, White text */}
            <button
              onClick={() => handleNav('tmj')}
              className="w-full text-left px-5 py-3.5 bg-[#2faee8] text-white font-normal text-[15px] hover:bg-[#289cd2] transition-colors border-b border-sky-400/30"
            >
              TMJ Disorder
            </button>

            {/* 3. Treatments Header - Dark Navy bg, Sky Blue text + chevron */}
            <button
              onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
              className="w-full text-left px-5 py-3.5 bg-[#030e20] text-[#38bdf8] hover:text-white font-normal text-[15px] flex items-center gap-1.5 transition-colors border-b border-sky-950/40 cursor-pointer"
            >
              <span>Treatments</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileTreatmentsOpen ? 'rotate-0' : '-rotate-90'}`} />
            </button>

            {/* Expanded Treatments List with Solid Sky Blue Background matching screenshot */}
            {mobileTreatmentsOpen && (
              <div className="bg-[#2faee8] text-white flex flex-col divide-y divide-sky-300/20 py-1">
                {[
                  { name: 'Orthodontics in East Hills', tab: 'services' as const },
                  { name: 'Pediatric Dentistry in East Hills', tab: 'services' as const },
                  { name: 'Preventive Dentistry', tab: 'services' as const },
                  { name: 'Root Canal Treatment in East Hills', tab: 'services' as const },
                  { name: 'Emergency Dental Care', tab: 'emergency' as const },
                  { name: 'Tooth Dental Fillings', tab: 'services' as const },
                  { name: 'Dental Full Check Up', tab: 'services' as const },
                  { name: 'Hygiene Cleaning', tab: 'services' as const },
                  { name: 'Dental Implants', tab: 'services' as const },
                  { name: 'Custom Night Guards', tab: 'services' as const },
                  { name: 'Sedation Dentistry', tab: 'services' as const },
                  { name: 'Teeth Whitening', tab: 'services' as const },
                  { name: 'Pricing', tab: 'pricing' as const },
                  { name: 'Wisdom Teeth', tab: 'wisdom-teeth' as const },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleNav(item.tab)}
                    className="w-full text-left px-6 py-2.5 text-white hover:bg-black/10 transition-colors text-[14.5px] font-normal leading-tight"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}

            {/* 4. Financing & Fees Header - Dark Navy bg, Sky Blue text + chevron */}
            <button
              onClick={() => setMobileFinancingOpen(!mobileFinancingOpen)}
              className="w-full text-left px-5 py-3.5 bg-[#030e20] text-[#38bdf8] hover:text-white font-normal text-[15px] flex items-center gap-1.5 transition-colors border-b border-sky-950/40 cursor-pointer"
            >
              <span>Financing & Fees</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileFinancingOpen ? 'rotate-0' : '-rotate-90'}`} />
            </button>

            {/* Expanded Financing & Fees List with Solid Sky Blue Background */}
            {mobileFinancingOpen && (
              <div className="bg-[#2faee8] text-white flex flex-col divide-y divide-sky-300/20 py-1">
                <button
                  onClick={() => handleNav('pricing')}
                  className="w-full text-left px-6 py-2.5 text-white hover:bg-black/10 transition-colors text-[14.5px] font-normal"
                >
                  Fees
                </button>
                <button
                  onClick={() => handleNav('financing')}
                  className="w-full text-left px-6 py-2.5 text-white hover:bg-black/10 transition-colors text-[14.5px] font-normal"
                >
                  Financing
                </button>
              </div>
            )}

            {/* 5. Contact Us - Solid Sky Blue bg, White text */}
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-left px-5 py-3.5 bg-[#2faee8] text-white font-normal text-[15px] hover:bg-[#289cd2] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
