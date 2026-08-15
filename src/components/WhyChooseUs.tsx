import React from 'react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative px-3 sm:px-6 lg:px-8 py-10 sm:py-16 max-w-7xl mx-auto overflow-visible">
      {/* 3D Astronaut Mascot peeking over the top-right corner pointing down matching screenshot */}
      <div className="absolute -top-32 sm:-top-44 right-2 sm:right-10 z-30 pointer-events-none">
        <div className="relative w-40 h-44 sm:w-56 sm:h-60 flex items-center justify-center">
          <svg viewBox="0 0 240 260" className="w-full h-full drop-shadow-[0_12px_28px_rgba(0,0,0,0.8)]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="suit3D" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="65%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="visorGold3D" x1="20%" y1="10%" x2="80%" y2="90%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="30%" stopColor="#eab308" />
                <stop offset="70%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="brushRed3D" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#e11d48" />
                <stop offset="100%" stopColor="#9f1239" />
              </linearGradient>
            </defs>

            {/* Back Air Tank & Tubes */}
            <path d="M180 110 C195 110 205 130 205 160 C205 190 190 200 180 200" stroke="#cbd5e1" strokeWidth="16" strokeLinecap="round" />
            <path d="M195 135 C205 140 215 155 210 180" stroke="#64748b" strokeWidth="10" strokeLinecap="round" />

            {/* Astronaut Torso / Suit Base */}
            <path d="M50 145 C50 115 180 115 180 145 L195 240 C195 245 35 245 35 240 Z" fill="url(#suit3D)" />
            
            {/* Suit Chest Control Box */}
            <rect x="95" y="160" width="50" height="34" rx="7" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
            <circle cx="108" cy="172" r="5" fill="#ef4444" />
            <circle cx="122" cy="172" r="5" fill="#38bdf8" />
            <circle cx="136" cy="172" r="5" fill="#22c55e" />
            <rect x="103" y="181" width="34" height="6" rx="3" fill="#475569" />

            {/* Right Arm Holding Toothbrush (Left in viewer perspective) */}
            {/* Toothbrush Handle */}
            <path d="M22 65 L42 195" stroke="#f1f5f9" strokeWidth="14" strokeLinecap="round" />
            <path d="M22 65 L42 195" stroke="url(#brushRed3D)" strokeWidth="8" strokeLinecap="round" />
            
            {/* Toothbrush Head with Red & White Bristles */}
            <rect x="10" y="45" width="26" height="28" rx="6" fill="#f1f5f9" />
            <rect x="5" y="48" width="8" height="6" rx="2" fill="url(#brushRed3D)" />
            <rect x="5" y="56" width="8" height="6" rx="2" fill="#ffffff" />
            <rect x="5" y="64" width="8" height="6" rx="2" fill="url(#brushRed3D)" />

            {/* Right Glove Wrapping Toothbrush */}
            <ellipse cx="40" cy="165" rx="14" ry="16" fill="#ffffff" stroke="#94a3b8" strokeWidth="2.5" />
            <circle cx="34" cy="158" r="5" fill="#e2e8f0" />
            <circle cx="33" cy="167" r="5" fill="#e2e8f0" />
            <circle cx="35" cy="175" r="5" fill="#e2e8f0" />

            {/* Left Shoulder & Arm Pointing Finger Downwards matching image.png */}
            <path d="M170 145 C190 160 195 185 180 210 L155 240" stroke="url(#suit3D)" strokeWidth="26" strokeLinecap="round" />
            
            {/* Left Glove with Extended Pointing Index Finger pointing down to the section */}
            <g transform="translate(135, 205)">
              <ellipse cx="20" cy="15" rx="15" ry="13" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
              {/* Pointing Index Finger Downwards */}
              <path d="M18 18 L10 44 C9 47 13 49 16 47 L24 23" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
              {/* Curled other fingers */}
              <circle cx="28" cy="16" r="4.5" fill="#e2e8f0" />
              <circle cx="27" cy="24" r="4.5" fill="#e2e8f0" />
              <circle cx="24" cy="30" r="4" fill="#e2e8f0" />
            </g>

            {/* Astronaut Helmet */}
            <ellipse cx="120" cy="95" rx="60" ry="54" fill="url(#suit3D)" stroke="#cbd5e1" strokeWidth="3" />
            <ellipse cx="120" cy="95" rx="60" ry="54" fill="none" stroke="#64748b" strokeWidth="1.5" />

            {/* Golden Reflective Visor */}
            <ellipse cx="120" cy="94" rx="46" ry="38" fill="url(#visorGold3D)" />
            {/* Visor Golden Horizon Reflection & Smile Sparkle */}
            <path d="M80 92 Q120 76 160 92 Q120 108 80 92 Z" fill="#ffffff" opacity="0.45" />
            <circle cx="102" cy="84" r="3.5" fill="#ffffff" opacity="0.95" />
            <circle cx="140" cy="100" r="2" fill="#ffffff" opacity="0.75" />

            {/* Helmet Rim & Collar */}
            <path d="M75 136 C86 145 154 145 165 136" stroke="#64748b" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Main Big Cosmic Card Container matching screenshot */}
      <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden border border-sky-800/40 bg-gradient-to-b from-[#081e3d] via-[#051125] to-[#030914] shadow-2xl p-6 sm:p-10 lg:p-14 text-center">
        
        {/* Subtle Starry Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute top-8 left-12 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse" />
          <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full opacity-70" />
          <div className="absolute bottom-16 left-1/3 w-1 h-1 bg-sky-200 rounded-full" />
        </div>

        {/* Pill Badge: WHY PLANET DENTAL */}
        <div className="relative z-10 inline-block mb-3 sm:mb-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white text-[#050e1f] text-xs sm:text-xs font-extrabold py-1.5 px-5 rounded-full uppercase tracking-wider shadow-md"
          >
            WHY PLANET DENTAL
          </motion.div>
        </div>

        {/* Heading matching screenshot */}
        <motion.h2 
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-2xl sm:text-4xl lg:text-[42px] font-bold mb-3 text-white tracking-tight leading-tight"
        >
          Why Patients Choose <span className="text-[#38bdf8]">Planet Dental</span>
        </motion.h2>

        {/* Subheading matching screenshot */}
        <motion.p 
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 text-xs sm:text-sm text-gray-300 mb-8 sm:mb-12 font-normal"
        >
          You've Landed on the Right Planet for Complete Dental Care
        </motion.p>

        {/* 3 Core Value Cards in one row matching screenshot */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          
          {/* Card 1: All Your Dental Care, Centered in One Place */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-[26px] p-6 sm:p-7 bg-[#07172f]/90 border border-sky-900/50 hover:border-sky-400/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Icon 1: Tooth with Revolving Care Arrows in glowing squircle container */}
              <div className="w-12 h-12 rounded-2xl bg-[#0b2447] border border-sky-400/40 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {/* Tooth outline */}
                  <path d="M12 4C9 4 7 6 7 9.5C7 12 8 13.5 9 16C9.5 17.5 10.5 17.5 11 16C11.5 14.5 12.5 14.5 13 16C13.5 17.5 14.5 17.5 15 16C16 13.5 17 12 17 9.5C17 6 15 4 12 4Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
                  <path d="M12 7V11M10 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Revolving care arrows */}
                  <path d="M5 12 A8 8 0 0 1 12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M19 12 A8 8 0 0 1 12 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-2.5 leading-snug">
                All Your Dental Care, <br />
                Centered in One Place
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                From routine checkups to advanced restorative, cosmetic, orthodontic, implant, and emergency dentistry—we provide complete care for kids, adults and seniors under one roof.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Technology with Direction */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-[26px] p-6 sm:p-7 bg-[#07172f]/90 border border-sky-900/50 hover:border-sky-400/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Icon 2: Tooth with Star / Technology in glowing squircle container */}
              <div className="w-12 h-12 rounded-2xl bg-[#0b2447] border border-sky-400/40 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {/* Tooth outline */}
                  <path d="M12 4C9 4 7 6 7 9.5C7 12 8 13.5 9 16C9.5 17.5 10.5 17.5 11 16C11.5 14.5 12.5 14.5 13 16C13.5 17.5 14.5 17.5 15 16C16 13.5 17 12 17 9.5C17 6 15 4 12 4Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" />
                  {/* Sparkling diagnostic star */}
                  <path d="M17 3L18 6L21 7L18 8L17 11L16 8L13 7L16 6Z" fill="#38bdf8" stroke="none" />
                </svg>
              </div>

              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-2.5 leading-snug">
                Technology with Direction
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                Our modern advanced diagnostic and treatment tools allow us to see more, plan better, and treat with greater precision—helping us catch small issues before they become major problems.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Clear Guidance, No Guesswork */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="rounded-[26px] p-6 sm:p-7 bg-[#07172f]/90 border border-sky-900/50 hover:border-sky-400/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Icon 3: Caring hands holding heart / guidance in glowing squircle container */}
              <div className="w-12 h-12 rounded-2xl bg-[#0b2447] border border-sky-400/40 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {/* Heart in hands */}
                  <path d="M12 8C10.5 6.5 8 7 8 9C8 11.5 12 14 12 14C12 14 16 11.5 16 9C16 7 13.5 6.5 12 8Z" fill="#38bdf8" />
                  <path d="M5 14C5 14 8 16 12 16C16 16 19 14 19 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M4 18C4 18 7 20 12 20C17 20 20 18 20 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="text-lg sm:text-[19px] font-bold text-white mb-2.5 leading-snug">
                Clear Guidance, No <br className="hidden sm:inline" />
                Guesswork
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                We believe patients deserve transparency. Treatment options, timelines, and costs are discussed openly, so you always know what to expect.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
