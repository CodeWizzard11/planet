import React, { useState } from 'react';
import { motion } from 'motion/react';

interface InfoCardsProps {
  onOpenBooking: () => void;
  onSelectEmergencyTab?: () => void;
  onSelectInsurance?: () => void;
}

interface CardItem {
  id: string;
  title: string;
  action: () => void;
  iconDark: React.ReactNode;
  iconHover: React.ReactNode;
}

export const InfoCards: React.FC<InfoCardsProps> = ({ 
  onOpenBooking, 
  onSelectEmergencyTab,
  onSelectInsurance 
}) => {
  // hovered index for dynamic interactive green hover effect only while cursor is over the card
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards: CardItem[] = [
    {
      id: 'open-7-days',
      title: 'We are open 7 Days / Week',
      action: onOpenBooking,
      iconDark: (
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-sky-400/25 blur-md rounded-full" />
          <div className="relative w-9 h-9 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.7)]">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <path d="M9 16l2 2 4-4"></path>
            </svg>
          </div>
        </div>
      ),
      iconHover: (
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-[#050e1f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <path d="M9 16l2 2 4-4" strokeWidth="2.5"></path>
          </svg>
        </div>
      ),
    },
    {
      id: 'direct-bill',
      title: 'We direct bill Dental Insurances',
      action: onSelectInsurance || onOpenBooking,
      iconDark: (
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-sky-400/25 blur-md rounded-full" />
          <div className="relative w-9 h-9 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.7)]">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.5 2 6 4.5 6 8.5C6 12 8 13.5 9 17C9.5 18.5 11 18.5 11.5 16.5C11.8 15 12.2 15 12.5 16.5C13 18.5 14.5 18.5 15 17C16 13.5 18 12 18 8.5C18 4.5 15.5 2 12 2Z" fill="#ffffff" />
              <path d="M12 5.5L15 7V10C15 12 13.5 13.5 12 14C10.5 13.5 9 12 9 10V7L12 5.5Z" fill="#0284c7" />
              <path d="M11 9.5L12 10.5L13.5 8.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      ),
      iconHover: (
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-[#050e1f]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.5 2 6 4.5 6 8.5C6 12 8 13.5 9 17C9.5 18.5 11 18.5 11.5 16.5C11.8 15 12.2 15 12.5 16.5C13 18.5 14.5 18.5 15 17C16 13.5 18 12 18 8.5C18 4.5 15.5 2 12 2Z" fill="#050e1f" />
            <path d="M12 5.5L15 7V10C15 12 13.5 13.5 12 14C10.5 13.5 9 12 9 10V7L12 5.5Z" fill="#0284c7" />
            <path d="M11 9.5L12 10.5L13.5 8.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      ),
    },
    {
      id: 'emergency-care',
      title: 'Same Day Emergency Care',
      action: onSelectEmergencyTab || onOpenBooking,
      iconDark: (
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-sky-400/25 blur-md rounded-full" />
          <div className="relative w-9 h-9 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.7)]">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C8.5 3 6.5 5 6.5 8.5C6.5 11.5 8 13 9 16C9.5 17.5 10.5 17.5 11 16C11.5 14.5 12.5 14.5 13 16C13.5 17.5 14.5 17.5 15 16C16 13 17.5 11.5 17.5 8.5C17.5 5 15.5 3 12 3Z" fill="#ffffff" />
              <circle cx="12" cy="9" r="3.5" fill="#0284c7" />
              <path d="M12 7.5V10.5M10.5 9H13.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      ),
      iconHover: (
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-[#050e1f]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C8.5 3 6.5 5 6.5 8.5C6.5 11.5 8 13 9 16C9.5 17.5 10.5 17.5 11 16C11.5 14.5 12.5 14.5 13 16C13.5 17.5 14.5 17.5 15 16C16 13 17.5 11.5 17.5 8.5C17.5 5 15.5 3 12 3Z" fill="#050e1f" />
            <circle cx="12" cy="9" r="3.5" fill="#0284c7" />
            <path d="M12 7.5V10.5M10.5 9H13.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      ),
    },
    {
      id: 'canada-dental',
      title: 'Accepting Canada Dental Insurance',
      action: onSelectInsurance || onOpenBooking,
      iconDark: (
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-sky-400/25 blur-md rounded-full" />
          <div className="relative w-9 h-9 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-white shadow-[0_0_15px_rgba(56,189,248,0.7)]">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2 L13.5 6 L16.5 5 L15.5 8 L19 9 L17 12 L20 14 L16.5 15 L16 18 L13 16.5 L12.5 22 L11.5 22 L11 16.5 L8 18 L7.5 15 L4 14 L7 12 L5 9 L8.5 8 L7.5 5 L10.5 6 Z" fill="#ffffff" />
              <path d="M12 8 C10.8 8 10 9 10 10.5 C10 11.5 10.5 12 11 13.5 C11.2 14 11.6 14 11.8 13.5 C12 13 12.3 13 12.5 13.5 C12.7 14 13.1 14 13.3 13.5 C13.7 12 14.2 11.5 14.2 10.5 C14.2 9 13.4 8 12 8 Z" fill="#0284c7" />
            </svg>
          </div>
        </div>
      ),
      iconHover: (
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md">
          <svg className="w-6 h-6 text-[#050e1f]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 L13.5 6 L16.5 5 L15.5 8 L19 9 L17 12 L20 14 L16.5 15 L16 18 L13 16.5 L12.5 22 L11.5 22 L11 16.5 L8 18 L7.5 15 L4 14 L7 12 L5 9 L8.5 8 L7.5 5 L10.5 6 Z" fill="#050e1f" />
            <path d="M12 8 C10.8 8 10 9 10 10.5 C10 11.5 10.5 12 11 13.5 C11.2 14 11.6 14 11.8 13.5 C12 13 12.3 13 12.5 13.5 C12.7 14 13.1 14 13.3 13.5 C13.7 12 14.2 11.5 14.2 10.5 C14.2 9 13.4 8 12 8 Z" fill="#0284c7" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="px-3 sm:px-6 py-6 sm:py-8 max-w-7xl mx-auto relative z-20">
      {/* 4 Cards in the exact same line on desktop / laptop (grid-cols-4), and moving 1 by 1 on lower widths */}
      <div 
        onMouseLeave={() => setHoveredIndex(null)}
        className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 scroll-smooth snap-x snap-mandatory hide-scrollbar"
      >
        {cards.map((card, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={card.action}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`flex-none w-[82vw] xs:w-[70vw] sm:w-auto snap-center relative rounded-[26px] sm:rounded-[30px] p-5 sm:p-6 lg:p-7 min-h-[165px] sm:min-h-[185px] flex flex-col items-center justify-between cursor-pointer text-center transition-all duration-300 select-none ${
                isHovered
                  ? 'bg-gradient-to-br from-[#42e8d0] via-[#6ee7b7] to-[#cbf73e] shadow-[0_12px_35px_rgba(66,232,208,0.35)] border border-transparent scale-[1.02]'
                  : 'bg-[#061224]/95 border border-sky-900/40 hover:border-sky-500/50 shadow-xl'
              }`}
            >
              {/* Top Center Icon Container */}
              <div className="w-full flex items-center justify-center pt-1 transition-transform duration-300">
                {isHovered ? card.iconHover : card.iconDark}
              </div>

              {/* Title Text */}
              <h3
                className={`text-base sm:text-[17px] lg:text-[18px] font-bold tracking-tight leading-snug transition-colors duration-200 mt-3 ${
                  isHovered ? 'text-[#050e1f]' : 'text-white'
                }`}
              >
                {card.title}
              </h3>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Swipe / 1 by 1 Indicator Dots */}
      <div className="flex sm:hidden justify-center items-center gap-1.5 pt-2">
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setHoveredIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              hoveredIndex === idx ? 'w-5 bg-[#42e8d0]' : 'w-1.5 bg-gray-600'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
