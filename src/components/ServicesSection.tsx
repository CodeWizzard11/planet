import React, { useState, useRef, useEffect } from 'react';
import { DENTAL_SERVICES } from '../data/dentalData';
import { DentalService } from '../types';
import { ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Sparkles, Smile, Zap, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default to Restorative Dentistry (index 1)
  const [activeModalService, setActiveModalService] = useState<DentalService | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-sky-400" />;
      case 'Smile': return <Smile className="w-5 h-5 text-sky-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-rose-400" />;
      case 'Clock': return <Clock className="w-5 h-5 text-lime-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-sky-400" />;
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : DENTAL_SERVICES.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < DENTAL_SERVICES.length - 1 ? prev + 1 : 0));
  };

  // Scroll to active card when activeIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const activeCard = carouselRef.current.children[activeIndex] as HTMLElement;
      if (activeCard) {
        const scrollLeft = activeCard.offsetLeft - (carouselRef.current.offsetWidth - activeCard.offsetWidth) / 2;
        carouselRef.current.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [activeIndex]);

  return (
    <section id="services" className="relative px-3 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto overflow-hidden">
      {/* Subtle Starfield Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Pill Badge: OUR SERVICES */}
      <div className="text-center mb-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white text-[#050e1f] text-xs font-extrabold py-2 px-6 rounded-full uppercase tracking-wider shadow-md inline-block"
        >
          OUR SERVICES
        </motion.div>
      </div>

      {/* Main Section Heading matching screenshot */}
      <motion.h2 
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-center mb-10 sm:mb-14 text-white leading-tight tracking-tight max-w-3xl mx-auto"
      >
        Full Service General Dentistry <br />
        with <span className="text-[#38bdf8]">Personal Care!</span>
      </motion.h2>

      {/* Services Carousel / Cards Display */}
      <div className="relative group/carousel">
        {/* Navigation Arrows for desktop */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#07172f]/80 hover:bg-[#0b2447] border border-sky-400/40 text-white items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-105 cursor-pointer"
          aria-label="Previous Service"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#07172f]/80 hover:bg-[#0b2447] border border-sky-400/40 text-white items-center justify-center shadow-2xl backdrop-blur-md transition-all duration-200 hover:scale-105 cursor-pointer"
          aria-label="Next Service"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Horizontal Card Row matching the peek layout in screenshot */}
        <div
          ref={carouselRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 sm:px-6 hide-scrollbar"
        >
          {DENTAL_SERVICES.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={service.id}
                onClick={() => {
                  setActiveIndex(index);
                  setActiveModalService(service);
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`snap-center shrink-0 w-[84vw] sm:w-[460px] lg:w-[520px] h-[340px] sm:h-[400px] lg:h-[440px] rounded-[28px] sm:rounded-[36px] overflow-hidden relative border cursor-pointer transition-all duration-300 shadow-2xl ${
                  isActive
                    ? 'border-sky-400/80 shadow-[0_15px_45px_rgba(56,189,248,0.25)] ring-1 ring-sky-400/50'
                    : 'border-sky-950/80 opacity-60 hover:opacity-90 hover:border-sky-700/60'
                }`}
              >
                {/* Background Image with Dark Vignette */}
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 brightness-90"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Gradient matching screenshot */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051125] via-[#051125]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#051125]/70 via-transparent to-transparent" />

                {/* Popular Badge if active */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-sky-400/90 backdrop-blur-md text-[#050e1f] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Featured Care
                  </div>
                )}

                {/* Bottom Content Area matching screenshot */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-left space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed font-normal max-w-md">
                    {service.description}
                  </p>
                  
                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-sky-300">
                    <span>Learn More & Treatment Options</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Bar Indicators matching screenshot */}
      <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
        {DENTAL_SERVICES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
              activeIndex === idx
                ? 'w-9 bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]'
                : 'w-2.5 bg-gray-600/70 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Service Details Drawer/Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#07172f] border border-sky-500/40 rounded-[32px] p-6 sm:p-8 max-w-lg w-full text-left shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
                  {getIcon(activeModalService.iconName)}
                </div>
                <h3 className="text-2xl font-bold text-white">{activeModalService.title}</h3>
              </div>

              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                {activeModalService.description}
              </p>

              <h4 className="font-bold text-xs text-sky-300 mb-3 uppercase tracking-wider">
                What's Included & Advantages:
              </h4>
              <ul className="space-y-2.5 mb-8">
                {activeModalService.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const sid = activeModalService.id;
                    setActiveModalService(null);
                    onSelectServiceForBooking(sid);
                  }}
                  className="flex-1 bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold py-3.5 rounded-full text-center text-sm shadow-[0_0_20px_rgba(56,189,248,0.35)] cursor-pointer transition-all"
                >
                  Book Appointment For This Service
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
