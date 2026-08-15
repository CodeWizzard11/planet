import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { DENTIST_WORK_URL, CLINIC_INFO } from '../data/dentalData';

interface TechnologySectionProps {
  onOpenBooking: () => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      {/* 2-Column Responsive Layout matching the screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Technology Narrative, Tag & Actions */}
        <div className="lg:col-span-6 relative flex flex-col items-start text-left space-y-6">
          
          {/* Badge: OUR APPROACH TO TECHNOLOGY */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white text-[#050e1f] text-xs font-extrabold py-2 px-6 rounded-full uppercase tracking-wider shadow-md inline-block"
          >
            OUR APPROACH TO TECHNOLOGY
          </motion.div>

          {/* Heading matching screenshot */}
          <motion.h2 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.18] tracking-tight"
          >
            Technology That Launches <br />
            <span className="text-[#38bdf8]">Personalized Treatment Plans</span>
          </motion.h2>

          {/* Description matching screenshot */}
          <motion.p 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-xl"
          >
            Modern dentistry requires clear vision and careful planning. Our technology allows us to navigate treatment with accuracy and confidence.
          </motion.p>

          {/* Clinical Technology Checklist */}
          <motion.div 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full rounded-2xl bg-[#07172f]/80 border border-sky-900/50 p-5 sm:p-6 shadow-xl"
          >
            <ul className="text-xs sm:text-sm text-gray-200 space-y-3">
              {CLINIC_INFO.techHighlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/50 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <p className="text-xs sm:text-sm text-gray-400 italic">
            Every tool we use serves a purpose: better care, greater comfort, and predictable outcomes.
          </p>

          {/* Action Button: Request an Appointment */}
          <motion.button 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={onOpenBooking}
            className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold py-3.5 px-8 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all cursor-pointer text-sm sm:text-base group"
          >
            <span>Request an Appointment</span>
            <div className="bg-[#050e1f] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs group-hover:bg-black transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </motion.button>
        </div>

        {/* Right Column: Operatory Image Card with Cyan Halo Glow */}
        <div className="lg:col-span-6 relative">
          {/* Subtle cyan outer aura */}
          <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 to-blue-600/20 rounded-[36px] blur-xl -z-10" />

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-500/40 bg-[#08152e] shadow-2xl group"
          >
            <div className="relative h-[340px] sm:h-[460px] w-full overflow-hidden">
              <img 
                src={DENTIST_WORK_URL} 
                alt="Planet Dental Technology and Advanced Operatory" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050e1f]/80 via-transparent to-sky-950/20" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-semibold text-sky-200">
                Precision Guided • 3D Imaging • Digital Care
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
