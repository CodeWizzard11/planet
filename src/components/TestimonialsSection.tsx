import React, { useRef } from 'react';
import { PATIENT_REVIEWS } from '../data/dentalData';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

// Official Google G icon SVG
const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="relative px-3 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto overflow-hidden">
      {/* Background Cosmic Starfield */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-sky-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-8 left-14 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse opacity-80" />
        <div className="absolute bottom-16 right-20 w-2 h-2 bg-white rounded-full opacity-60" />
      </div>

      {/* Pill Badge: TESTIMONIALS matching screenshot */}
      <div className="text-center mb-3 sm:mb-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white text-[#050e1f] text-xs font-extrabold py-2 px-6 rounded-full uppercase tracking-wider shadow-md inline-block"
        >
          TESTIMONIALS
        </motion.div>
      </div>

      {/* Heading: Patients Reviews matching screenshot */}
      <motion.h2 
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-center mb-4 text-white tracking-tight"
      >
        Patients <span className="text-[#38bdf8]">Reviews</span>
      </motion.h2>

      {/* Subtitle description matching screenshot */}
      <motion.p
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xs sm:text-sm text-gray-300 text-center max-w-xl mx-auto mb-10 sm:mb-14 leading-relaxed font-normal"
      >
        Discover firsthand experiences and testimonials from our valued patients as they share their thoughts and feedback on our services and care.
      </motion.p>

      {/* Testimonials Carousel Container with Navigation Button matching screenshot */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* Scrollable Row of Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory px-2"
        >
          {PATIENT_REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -4 }}
              className="shrink-0 w-[270px] sm:w-[290px] md:w-[310px] min-h-[220px] rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 bg-gradient-to-b from-[#092244]/80 via-[#071933]/90 to-[#040f21]/95 border border-sky-900/60 shadow-xl snap-start flex flex-col justify-between text-left relative group transition-all duration-300 hover:border-sky-400/50"
            >
              <div>
                {/* Review Header: Avatar + Name/Time + Google Logo */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    {review.avatarUrl ? (
                      <img
                        src={review.avatarUrl}
                        alt={review.author}
                        className="w-10 h-10 rounded-full object-cover border border-white/20"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className={`w-10 h-10 rounded-full ${review.avatarBg || 'bg-sky-600'} text-white font-bold text-sm flex items-center justify-center border border-white/20`}>
                        {review.avatarInitial || review.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-gray-400">
                        {review.timeAgo}
                      </p>
                    </div>
                  </div>

                  {/* Google Icon Badge */}
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <GoogleIcon className="w-4 h-4" />
                  </div>
                </div>

                {/* 5 Gold Stars matching screenshot */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>

                {/* Review Text with vertical line accent */}
                <div className="relative pl-3 border-l border-sky-600/30">
                  <p className="text-xs text-gray-300 leading-relaxed font-normal line-clamp-4">
                    {review.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow Navigation Button (White Circle) matching screenshot */}
        <button
          onClick={() => handleScroll('right')}
          aria-label="Next Reviews"
          className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#050e1f] hover:bg-gray-100 flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer border border-white/40"
        >
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Left Arrow Navigation Button for smooth bidirectional navigation */}
        <button
          onClick={() => handleScroll('left')}
          aria-label="Previous Reviews"
          className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#050e1f] hover:bg-gray-100 flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer border border-white/40 opacity-0 group-hover:opacity-100 sm:opacity-90"
        >
          <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
};
