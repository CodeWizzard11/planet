import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onTakeTour?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onTakeTour }) => {
  const handleScrollToPhilosophy = () => {
    if (onTakeTour) {
      onTakeTour();
    } else {
      const el = document.getElementById('our-philosophy');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-2 sm:px-4 pt-2 pb-2">
      {/* Main Front Panel Hero Rounded Card matching screenshot */}
      <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-gray-800/80 bg-[#050e1f] shadow-2xl min-h-[580px] sm:min-h-[640px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 pb-16 sm:pb-20">
        
        {/* Background Architectural & Cosmos Atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Deep celestial gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#06142e] via-[#050d22] to-[#040816]" />

          {/* Perspective architectural modern clinic lines overlay */}
          <svg className="absolute inset-0 w-full h-full object-cover opacity-35" viewBox="0 0 1200 700" fill="none" preserveAspectRatio="none">
            {/* Ceiling perspective lines */}
            <path d="M0 0 L520 280 L520 700 L0 700 Z" fill="#0c2044" fillOpacity="0.4" />
            <path d="M1200 0 L720 280 L720 700 L1200 700 Z" fill="#081836" fillOpacity="0.5" />
            
            {/* Subtle operatory geometric lighting pillars */}
            <path d="M480 0 L530 320 L490 700" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.15" />
            <path d="M500 0 L550 320 L510 700" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" />
            <path d="M720 0 L680 320 L710 700" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.12" />
            <path d="M0 120 L400 300 L0 480" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.1" />

            {/* Subtle Star Constellations */}
            <g opacity="0.6">
              <circle cx="280" cy="110" r="1.5" fill="#ffffff" />
              <circle cx="340" cy="80" r="1.5" fill="#38bdf8" />
              <circle cx="410" cy="140" r="2" fill="#ffffff" />
              <circle cx="480" cy="95" r="1.5" fill="#ffffff" />
              <circle cx="560" cy="130" r="2" fill="#38bdf8" />
              <circle cx="620" cy="70" r="1.5" fill="#ffffff" />
              <circle cx="680" cy="110" r="2" fill="#ffffff" />
              <circle cx="760" cy="60" r="1.5" fill="#38bdf8" />
              <circle cx="820" cy="120" r="1.5" fill="#ffffff" />
              <circle cx="890" cy="85" r="2" fill="#ffffff" />
              <circle cx="950" cy="140" r="1.5" fill="#38bdf8" />
              <circle cx="1020" cy="100" r="2" fill="#ffffff" />
              
              {/* Constellation lines */}
              <line x1="280" y1="110" x2="340" y2="80" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.2" />
              <line x1="340" y1="80" x2="410" y2="140" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.2" />
              <line x1="560" y1="130" x2="620" y2="70" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.2" />
              <line x1="620" y1="70" x2="680" y2="110" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.2" />
              <line x1="820" y1="120" x2="890" y2="85" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.2" />
              <line x1="890" y1="85" x2="950" y2="140" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.2" />
            </g>
          </svg>

          {/* Vignette & Atmospheric Glows */}
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Top-Left Pill Badge: Open 7 Days a Week | East Hills, Calgary */}
        <div className="relative z-10 self-start">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/15 backdrop-blur-md shadow-md text-xs sm:text-sm text-gray-200"
          >
            {/* Glowing target / radar dot */}
            <div className="relative flex items-center justify-center w-3.5 h-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#38bdf8]"></span>
            </div>
            <span className="font-medium tracking-wide">
              Open 7 Days a Week | East Hills, Calgary
            </span>
          </motion.div>
        </div>

        {/* Main Lower Content Area: Left Headline + Right Explanatory & CTA */}
        <div className="relative z-10 mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Big Headline matching screenshot */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.12] tracking-tight">
              We Create Out-of-the- <br />
              world{' '}
              <span className="relative inline-block text-[#38bdf8] drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                Smiles
                {/* Curved smile swoop arc SVG below Smiles */}
                <svg 
                  className="absolute -bottom-2.5 sm:-bottom-3.5 left-0 w-full h-4 sm:h-6 text-[#38bdf8]" 
                  viewBox="0 0 160 30" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 5 6 Q 78 28 152 6" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                  />
                  {/* Arrowhead at the end of the swoop */}
                  <path 
                    d="M 143 3 L 153 6 L 148 14" 
                    stroke="currentColor" 
                    strokeWidth="3.2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </span>
            </h1>
          </motion.div>

          {/* Right Column: Paragraphs & Glowing Appointment Button matching screenshot */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-4 max-w-xl"
          >
            <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
              Welcome to Planet Dental—where advanced dentistry, thoughtful care, and real relationships come together.
            </p>

            <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed pb-2">
              We guide patients toward healthier smiles with clarity, precision, and care—so every visit feels calm, confident, and well-aligned.
            </p>

            {/* Request an Appointment Button with Cyan Glow */}
            <div className="pt-2">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="relative inline-flex items-center gap-3 bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-[0_0_35px_rgba(56,189,248,0.5)] group"
              >
                <span>Request an Appointment</span>
                <div className="w-7 h-7 rounded-full bg-[#050e1f] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </motion.button>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Take a Tour Interactive Scroll Button Bridging to Our Philosophy */}
      <div className="relative -mt-8 sm:-mt-9 z-30 flex flex-col items-center justify-center">
        <motion.button
          onClick={handleScrollToPhilosophy}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center group cursor-pointer focus:outline-none"
          aria-label="Take a Tour - Scrolls to Our Philosophy"
        >
          <span className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white transition-colors mb-2 tracking-wide">
            Take a Tour
          </span>

          {/* Glowing Planetary Capsule Orb Button matching screenshot */}
          <div className="relative flex items-center justify-center">
            {/* Subtle orbital glowing ring */}
            <div className="absolute -inset-2 rounded-full border border-sky-400/30 opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -inset-4 rounded-full border border-sky-400/10" />

            {/* Vibrant Lime/Cyan Gradient Capsule Button */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-[#d4fc79] via-[#96e6a1] to-[#42e8e0] shadow-[0_0_25px_rgba(150,230,161,0.7)] flex items-center justify-center transition-all group-hover:shadow-[0_0_35px_rgba(66,232,224,0.9)]">
              {/* Inner capsule mouse/scroll indicator */}
              <div className="w-4 h-6 rounded-full border-2 border-[#051124] flex justify-center pt-1">
                <motion.div 
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-1 h-1.5 bg-[#051124] rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.button>
      </div>

    </div>
  );
};
