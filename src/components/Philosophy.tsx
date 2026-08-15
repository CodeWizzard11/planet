import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { DENTIST_WORK_URL } from '../data/dentalData';

interface PhilosophyProps {
  onMeetTeam: () => void;
  onOpenBooking?: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({ onMeetTeam, onOpenBooking }) => {
  return (
    <section 
      id="our-philosophy" 
      className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20 max-w-7xl mx-auto scroll-mt-16 overflow-hidden"
    >
      {/* Background Cosmic Starfield Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
        {/* Subtle twinkling stars */}
        <div className="absolute top-10 left-12 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse opacity-80" />
        <div className="absolute top-36 left-1/2 w-2 h-2 bg-white rounded-full opacity-60" />
        <div className="absolute bottom-24 left-16 w-1 h-1 bg-sky-200 rounded-full opacity-70" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-sky-300 rounded-full opacity-70" />
      </div>

      {/* Main 2-Column Grid Layout matching screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Stacked Layered Dental Image with Floating Planetary Orbs */}
        <div className="lg:col-span-6 relative">
          
          {/* Layered dark backing card behind */}
          <div className="absolute -top-6 -left-4 right-4 h-full bg-[#081733]/60 rounded-[36px] -z-10 border border-sky-950/80 transform -rotate-1 hidden sm:block" />
          <div className="absolute -bottom-6 -right-4 left-4 h-full bg-[#061126]/60 rounded-[36px] -z-10 border border-sky-950/80 transform rotate-1 hidden sm:block" />

          {/* Floating Planetary Accent Dots around image matching screenshot */}
          {/* Top-Right Big Lime Planet Orb */}
          <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#d4fc79] shadow-[0_0_25px_#d4fc79] border-2 border-white/60 z-20 animate-pulse" />
          
          {/* Mid-Left Cyan Orb */}
          <div className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#38bdf8] shadow-[0_0_20px_#38bdf8] border-2 border-white/50 z-20" />
          
          {/* Bottom-Left Small Lime Dot */}
          <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#d4fc79] shadow-[0_0_15px_#d4fc79] border border-white/60 z-20" />

          {/* Small Cyan Dot Mid-Right */}
          <div className="absolute top-1/3 -right-2 sm:-right-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] z-20" />

          {/* Small Bottom-Center Lime Dot */}
          <div className="absolute -bottom-4 left-1/3 w-3 h-3 rounded-full bg-[#d4fc79] shadow-[0_0_8px_#d4fc79] z-20" />

          {/* Main Rounded Operatory Photo Card */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-900/60 bg-[#08152e] shadow-2xl group"
          >
            <div className="relative h-[340px] sm:h-[460px] w-full overflow-hidden">
              <img 
                src={DENTIST_WORK_URL} 
                alt="Planet Dental clinician providing personalized patient care" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95"
                referrerPolicy="no-referrer"
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/70 via-transparent to-sky-950/20" />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Copy, Tag, Button matching screenshot */}
        <div className="lg:col-span-6 relative flex flex-col items-start text-left space-y-6">
          
          {/* OUR PHILOSOPHY White Pill Badge matching screenshot */}
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white text-[#050e1f] text-xs font-extrabold py-2 px-6 rounded-full uppercase tracking-wider shadow-md inline-block"
          >
            OUR PHILOSOPHY
          </motion.div>

          {/* Headline matching screenshot */}
          <motion.h2 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.18] tracking-tight"
          >
            Modern Dentistry, Advanced <br />
            Technology, <span className="text-[#38bdf8]">Personalized Care</span>
          </motion.h2>

          {/* Paragraphs matching screenshot */}
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-xl"
          >
            <p>
              A healthy smile is part of a bigger picture—your comfort, confidence, and long-term well-being.
            </p>
            <p>
              At Planet Dental, we take a measured, thoughtful approach to care. We listen first, explain clearly, and recommend treatments that truly support your oral health—without pressure or unnecessary steps.
            </p>
            <p>
              Our role is to help you stay on a steady course toward lifelong dental health.
            </p>
          </motion.div>

          {/* Meet Our Team Pill Button */}
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2"
          >
            <button 
              onClick={onMeetTeam}
              className="flex items-center gap-3 bg-[#0b172a] hover:bg-[#12223b] text-white border border-gray-600/80 hover:border-gray-400 px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-200 shadow-md cursor-pointer group"
            >
              <span>Meet Our Team</span>
              <div className="w-6 h-6 rounded-full bg-white text-[#050e1f] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
