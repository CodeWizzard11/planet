import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface StickyScheduleTabProps {
  onOpenBooking: () => void;
}

export const StickyScheduleTab: React.FC<StickyScheduleTabProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky button after user scrolls past 180px
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 pointer-events-auto"
        >
          <button
            onClick={onOpenBooking}
            aria-label="Schedule Appointment"
            className="bg-gradient-to-r from-[#b3146b] to-[#99105b] hover:from-[#c21875] hover:to-[#a91264] text-white flex items-center gap-3 pl-4 sm:pl-5 pr-3 sm:pr-4 py-3 sm:py-3.5 rounded-l-full sm:rounded-l-3xl shadow-[0_8px_30px_rgba(179,20,107,0.45)] border-t border-b border-l border-pink-400/40 cursor-pointer transition-all duration-300 hover:shadow-[0_10px_35px_rgba(179,20,107,0.65)] hover:-translate-x-1.5 active:scale-95 group"
          >
            {/* Calendar with Tooth Inside Icon matching screenshot */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <svg 
                className="w-full h-full text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.9" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="4" ry="4" strokeWidth="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2.2"></line>
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2.2"></line>
                <line x1="3" y1="9" x2="21" y2="9" strokeWidth="1.8"></line>
                {/* Tooth outline inside calendar */}
                <path 
                  d="M9.5 13.2 C8.8 13.2 8.3 13.8 8.3 14.5 C8.3 15.8 8.9 17.2 9.7 17.8 C10.1 18.1 10.7 17.7 10.9 16.8 C11.2 16.2 12.8 16.2 13.1 16.8 C13.3 17.7 13.9 18.1 14.3 17.8 C15.1 17.2 15.7 15.8 15.7 14.5 C15.7 13.8 15.2 13.2 14.5 13.2 C13.8 13.2 13.2 13.6 12 13.6 C10.8 13.6 10.2 13.2 9.5 13.2 Z" 
                  strokeWidth="1.5" 
                  fill="white" 
                  fillOpacity="0.25"
                />
              </svg>
            </div>

            {/* Two-line text matching screenshot */}
            <div className="text-left font-bold text-xs sm:text-sm leading-tight pr-1 tracking-tight select-none">
              <div>Schedule</div>
              <div>Appointment</div>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
