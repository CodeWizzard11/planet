import React from 'react';
import { PRICING_PLANS } from '../data/dentalData';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingSectionProps {
  onSelectPlanForBooking: (planTitle: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlanForBooking }) => {
  return (
    <section id="pricing" className="relative px-3 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto overflow-hidden">
      {/* Background Cosmic Starfield & Nebula Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-10 left-16 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse opacity-80" />
        <div className="absolute top-24 right-20 w-2 h-2 bg-white rounded-full opacity-60" />
        <div className="absolute bottom-16 left-24 w-1.5 h-1.5 bg-sky-400 rounded-full opacity-70" />
      </div>

      {/* Pill Badge: PRICING PLANS matching screenshot */}
      <div className="text-center mb-3 sm:mb-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white text-[#050e1f] text-xs font-extrabold py-2 px-6 rounded-full uppercase tracking-wider shadow-md inline-block"
        >
          PRICING PLANS
        </motion.div>
      </div>

      {/* Heading: Simple, Transparent Pricing matching screenshot */}
      <motion.h2 
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-center mb-10 sm:mb-14 text-white tracking-tight"
      >
        Simple, Transparent <span className="text-[#38bdf8]">Pricing</span>
      </motion.h2>

      {/* 3 Pricing Cards Grid matching screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {PRICING_PLANS.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 bg-gradient-to-b from-[#0a1f3d]/80 via-[#07172f]/85 to-[#040e1f]/95 border border-sky-900/60 hover:border-sky-400/60 shadow-2xl transition-all duration-300 flex flex-col justify-between text-left relative group overflow-hidden"
          >
            {/* Top Glow Accent on Hover */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Category Pill Tag inside Card matching screenshot */}
              <div className="mb-5">
                <div className="inline-block bg-[#0d284f]/80 border border-sky-500/30 text-white text-xs sm:text-sm font-semibold px-5 py-1.5 rounded-full shadow-sm">
                  {plan.title}
                </div>
              </div>

              {/* Price Line matching screenshot */}
              <div className="mb-6 flex items-baseline gap-1.5">
                <span className="text-gray-300 text-xs sm:text-sm font-normal">Starting at -</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8] tracking-tight">
                  {plan.startingPrice}
                </span>
              </div>

              {/* Inner Card: All inclusive Pricing with List matching screenshot */}
              <div className="rounded-2xl p-5 sm:p-6 bg-[#051329]/90 border border-sky-950/80 mb-6 shadow-inner">
                <h4 className="text-sm font-bold text-white mb-4">
                  {plan.subtitle}
                </h4>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                      <ChevronRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Cyan Pill Button: Book an Appointment matching screenshot */}
            <button
              onClick={() => onSelectPlanForBooking(plan.title)}
              className="w-full bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all cursor-pointer text-xs sm:text-sm group"
            >
              <span>Book an Appointment</span>
              <div className="w-5 h-5 rounded-full bg-[#050e1f] text-white flex items-center justify-center text-xs group-hover:bg-black transition-colors">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
