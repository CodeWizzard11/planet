import React from 'react';
import { TEAM_MEMBERS } from '../data/dentalData';
import { motion } from 'motion/react';

interface TeamSectionProps {
  onOpenBookingWithDoctor: (doctorName: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBookingWithDoctor }) => {
  return (
    <section id="team" className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto overflow-hidden">
      {/* Background Cosmic Starfield & Nebula */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-sky-600/10 rounded-full blur-[130px]" />
        <div className="absolute top-12 left-12 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse opacity-80" />
        <div className="absolute top-20 right-24 w-2 h-2 bg-white rounded-full opacity-60" />
      </div>

      {/* Top Header Row matching screenshot */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 mb-12 sm:mb-16">
        {/* Left Column: Pill & Big Heading */}
        <div className="space-y-4 max-w-xl text-left">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white text-[#050e1f] text-xs font-extrabold py-2 px-5 rounded-full uppercase tracking-wider shadow-md inline-block"
          >
            OUR TEAM
          </motion.div>

          <motion.h2 
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.18] tracking-tight"
          >
            Experienced Clinicians who’ll be <span className="text-[#38bdf8]">The Center of Your Dental Care</span>
          </motion.h2>
        </div>

        {/* Right Column: Paragraph Text matching screenshot */}
        <motion.div 
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl text-left space-y-3"
        >
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
            Our dentists combine clinical expertise with a calm, patient-first approach. They stay current with evolving techniques while never losing sight of what matters most—listening, explaining, and building trust.
          </p>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
            At Planet Dental, you’re not rushed through appointments or treated like a chart number. You’re part of our practice community.
          </p>
        </motion.div>
      </div>

      {/* Clinicians Row / Carousel Cards matching screenshot */}
      <div className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory">
        {TEAM_MEMBERS.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            onClick={() => onOpenBookingWithDoctor(doctor.name)}
            className="shrink-0 w-[260px] sm:w-[280px] md:w-[300px] h-[370px] sm:h-[400px] rounded-[28px] overflow-hidden relative border border-sky-900/50 bg-[#07172f] shadow-2xl group cursor-pointer snap-start transition-all duration-300 hover:border-sky-400/60"
          >
            {/* Clinician Photo */}
            <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-[#081e3d] via-[#06152e] to-[#040e21]">
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle Cyan Bottom Gradient Overlay matching screenshot */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021833] via-[#021833]/75 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#018ec7]/30 via-transparent to-transparent opacity-90" />
            </div>

            {/* Bottom Content Overlay matching screenshot */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-left z-10 space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                {doctor.name}
              </h3>

              {/* DENTIST White Pill Tag */}
              <div className="inline-block bg-white text-[#050e1f] text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                {doctor.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
