import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SMILE_TRANSFORMATIONS } from '../data/dentalData';

interface SmilesTransformedSectionProps {
  onOpenBooking: () => void;
}

export const SmilesTransformedSection: React.FC<SmilesTransformedSectionProps> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = SMILE_TRANSFORMATIONS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : SMILE_TRANSFORMATIONS.length - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < SMILE_TRANSFORMATIONS.length - 1 ? prev + 1 : 0));
    setSliderPosition(50);
  };

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let percentage = (x / width) * 100;
    if (percentage < 2) percentage = 2;
    if (percentage > 98) percentage = 98;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="relative px-3 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto overflow-hidden">
      {/* Background Cosmic Starfield */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-12 left-10 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse opacity-80" />
        <div className="absolute top-28 right-16 w-2 h-2 bg-white rounded-full opacity-60" />
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-sky-400 rounded-full opacity-70" />
      </div>

      {/* Pill Badge: THOUSAND OF SMILES TRANSFORMED! matching screenshot */}
      <div className="text-center mb-3 sm:mb-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white text-[#050e1f] text-xs font-extrabold py-2 px-6 rounded-full uppercase tracking-wider shadow-md inline-block"
        >
          THOUSAND OF SMILES TRANSFORMED!
        </motion.div>
      </div>

      {/* Heading: Before & After matching screenshot */}
      <motion.h2 
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-center mb-8 sm:mb-12 text-white tracking-tight"
      >
        Before & <span className="text-[#38bdf8]">After</span>
      </motion.h2>

      {/* Interactive Drag Before/After Container with Side Navigation Arrows */}
      <div className="relative max-w-4xl mx-auto flex items-center justify-center">
        
        {/* Left Arrow Button (White Circle) matching screenshot */}
        <button
          onClick={handlePrev}
          aria-label="Previous Smile Transformation"
          className="absolute -left-3 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#050e1f] hover:bg-gray-100 flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 cursor-pointer border border-white/40"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Right Arrow Button (White Circle) matching screenshot */}
        <button
          onClick={handleNext}
          aria-label="Next Smile Transformation"
          className="absolute -right-3 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#050e1f] hover:bg-gray-100 flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 cursor-pointer border border-white/40"
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Main Card Split Image Slider View */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => handleMove(e.clientX)}
          className="relative w-full h-[320px] sm:h-[440px] md:h-[490px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-sky-600/40 bg-[#051125] shadow-2xl select-none cursor-ew-resize group"
        >
          {/* Layer 1: The AFTER Image (Full background) */}
          <div className="absolute inset-0 w-full h-full">
            {currentIndex === 0 ? (
              // High fidelity reproduction of the uploaded patient's Full Arch Zirconia Makeover (After)
              <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-[#1a0808] via-[#2d1215] to-[#120507] overflow-hidden">
                {/* Photorealistic smile visualization matching uploaded Screenshot 3 */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 1000 600" className="w-full h-full object-cover">
                    <defs>
                      <radialGradient id="skinGlowAfter" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#cf8471" />
                        <stop offset="60%" stopColor="#9e5545" />
                        <stop offset="100%" stopColor="#4a1f18" />
                      </radialGradient>
                      <linearGradient id="teethAfterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="70%" stopColor="#f8fafc" />
                        <stop offset="100%" stopColor="#e2e8f0" />
                      </linearGradient>
                      <linearGradient id="lipAfterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#be5d65" />
                        <stop offset="60%" stopColor="#8d3742" />
                        <stop offset="100%" stopColor="#541b22" />
                      </linearGradient>
                    </defs>

                    {/* Facial Skin Base & Stubble Texture */}
                    <rect width="1000" height="600" fill="url(#skinGlowAfter)" />
                    {/* Subtle facial texture details */}
                    <ellipse cx="500" cy="180" rx="350" ry="120" fill="#a45849" opacity="0.6" />
                    <ellipse cx="500" cy="480" rx="400" ry="140" fill="#6d3025" opacity="0.8" />

                    {/* Wide Confident Smiling Lips Contour */}
                    {/* Upper Lip */}
                    <path d="M 220 280 Q 360 210 500 240 Q 640 210 780 280 Q 640 260 500 270 Q 360 260 220 280 Z" fill="url(#lipAfterGrad)" />
                    
                    {/* Dark Oral Cavity Shadow */}
                    <ellipse cx="500" cy="330" rx="270" ry="85" fill="#140204" />

                    {/* Perfect White Upper Dental Arch (Full Beautiful Restored Smile) */}
                    <g transform="translate(0, 0)">
                      {/* Central Incisors (Right & Left) */}
                      <path d="M 465 255 L 500 257 L 498 335 C 498 340 465 340 465 335 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1.2" />
                      <path d="M 500 257 L 535 255 L 535 335 C 535 340 502 340 502 335 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1.2" />
                      {/* Lateral Incisors */}
                      <path d="M 430 258 L 465 255 L 465 328 C 465 333 430 333 430 328 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1.2" />
                      <path d="M 535 255 L 570 258 L 570 328 C 570 333 535 333 535 328 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1.2" />
                      {/* Canines */}
                      <path d="M 395 264 L 430 258 L 430 322 C 430 326 395 324 395 320 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1.2" />
                      <path d="M 570 258 L 605 264 L 605 320 C 605 324 570 326 570 322 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1.2" />
                      {/* Premolars and Molars */}
                      <path d="M 360 270 L 395 264 L 395 315 L 360 310 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.2" />
                      <path d="M 605 264 L 640 270 L 640 310 L 605 315 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.2" />
                      <path d="M 325 276 L 360 270 L 360 305 L 325 300 Z" fill="#cbd5e1" />
                      <path d="M 640 270 L 675 276 L 675 300 L 640 305 Z" fill="#cbd5e1" />
                    </g>

                    {/* Perfect Lower Arch */}
                    <g transform="translate(0, 5)">
                      <path d="M 470 342 L 500 342 L 500 395 L 470 395 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1" />
                      <path d="M 500 342 L 530 342 L 530 395 L 500 395 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1" />
                      <path d="M 440 344 L 470 342 L 470 392 L 440 392 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1" />
                      <path d="M 530 342 L 560 344 L 560 392 L 530 392 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1" />
                      <path d="M 410 348 L 440 344 L 440 388 L 410 385 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1" />
                      <path d="M 560 344 L 590 348 L 590 385 L 560 388 Z" fill="url(#teethAfterGrad)" stroke="#cbd5e1" strokeWidth="1" />
                    </g>

                    {/* Enamel Gloss & Specular Highlights */}
                    <ellipse cx="482" cy="275" rx="14" ry="4" fill="#ffffff" opacity="0.6" />
                    <ellipse cx="518" cy="275" rx="14" ry="4" fill="#ffffff" opacity="0.6" />
                    <circle cx="485" cy="305" r="3" fill="#ffffff" opacity="0.8" />
                    <circle cx="515" cy="305" r="3" fill="#ffffff" opacity="0.8" />

                    {/* Lower Lip */}
                    <path d="M 220 280 Q 360 410 500 415 Q 640 410 780 280 Q 640 365 500 370 Q 360 365 220 280 Z" fill="url(#lipAfterGrad)" />
                  </svg>
                </div>
              </div>
            ) : (
              <img
                src={currentCase.afterImage}
                alt={`${currentCase.title} After Treatment`}
                className="w-full h-full object-cover brightness-95"
                referrerPolicy="no-referrer"
              />
            )}
          </div>

          {/* Layer 2: The BEFORE Image (Clipped dynamically by slider position) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div
              className="absolute inset-y-0 left-0"
              style={{ width: containerRef.current?.offsetWidth || '100%' }}
            >
              {currentIndex === 0 ? (
                // High fidelity reproduction of the uploaded patient's Worn / Stained initial state (Before)
                <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-[#1a0808] via-[#2d1215] to-[#120507] overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 1000 600" className="w-full h-full object-cover">
                      <defs>
                        <linearGradient id="teethWornGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#faebd7" />
                          <stop offset="40%" stopColor="#e5c57d" />
                          <stop offset="100%" stopColor="#8c6227" />
                        </linearGradient>
                        <linearGradient id="darkDecayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#784e1b" />
                          <stop offset="100%" stopColor="#3d2105" />
                        </linearGradient>
                      </defs>

                      {/* Facial Skin Base */}
                      <rect width="1000" height="600" fill="url(#skinGlowAfter)" />
                      <ellipse cx="500" cy="180" rx="350" ry="120" fill="#a45849" opacity="0.6" />
                      <ellipse cx="500" cy="480" rx="400" ry="140" fill="#6d3025" opacity="0.8" />

                      {/* Lips Contour */}
                      <path d="M 220 280 Q 360 210 500 240 Q 640 210 780 280 Q 640 260 500 270 Q 360 260 220 280 Z" fill="url(#lipAfterGrad)" />
                      <ellipse cx="500" cy="330" rx="270" ry="85" fill="#140204" />

                      {/* Worn Old Teeth with Discoloration & Missing Segments */}
                      <g transform="translate(0, 0)">
                        {/* Fractured Left Premolars/Canine */}
                        <path d="M 330 280 L 355 272 L 350 310 L 330 305 Z" fill="url(#darkDecayGrad)" stroke="#452306" />
                        <path d="M 355 272 L 385 266 L 380 320 L 350 310 Z" fill="url(#darkDecayGrad)" stroke="#452306" />
                        
                        {/* Stained Old Crown Anterior Unit */}
                        <path d="M 385 264 L 435 258 L 435 320 C 435 324 385 324 385 320 Z" fill="url(#teethWornGrad)" stroke="#85531d" strokeWidth="1.2" />
                        <path d="M 435 258 L 485 255 L 485 325 C 485 330 435 330 435 325 Z" fill="url(#teethWornGrad)" stroke="#85531d" strokeWidth="1.2" />
                        <path d="M 485 255 L 535 255 L 535 325 C 535 330 485 330 485 325 Z" fill="url(#teethWornGrad)" stroke="#85531d" strokeWidth="1.2" />
                        <path d="M 535 258 L 585 264 L 585 320 C 585 324 535 324 535 320 Z" fill="url(#teethWornGrad)" stroke="#85531d" strokeWidth="1.2" />
                        
                        {/* Heavy Attrition & Deep Wear on Posterior */}
                        <path d="M 585 264 L 625 270 L 620 315 L 585 318 Z" fill="url(#teethWornGrad)" stroke="#85531d" />
                        <path d="M 625 270 L 665 278 L 655 305 L 625 310 Z" fill="url(#darkDecayGrad)" stroke="#452306" />
                      </g>

                      {/* Lower Stained & Crowded Teeth */}
                      <g transform="translate(0, 8)">
                        <path d="M 345 345 L 375 343 L 370 385 L 345 380 Z" fill="url(#darkDecayGrad)" />
                        <path d="M 375 343 L 415 340 L 410 390 L 370 385 Z" fill="url(#darkDecayGrad)" />
                        <path d="M 415 340 L 455 338 L 455 395 L 415 392 Z" fill="url(#teethWornGrad)" stroke="#784e1b" />
                        <path d="M 455 338 L 495 338 L 495 395 L 455 395 Z" fill="url(#teethWornGrad)" stroke="#784e1b" />
                        <path d="M 495 338 L 535 338 L 535 395 L 495 395 Z" fill="url(#teethWornGrad)" stroke="#784e1b" />
                        <path d="M 535 338 L 575 340 L 570 392 L 535 395 Z" fill="url(#teethWornGrad)" stroke="#784e1b" />
                        <path d="M 575 340 L 615 343 L 610 385 L 570 390 Z" fill="url(#darkDecayGrad)" />
                      </g>

                      {/* Lower Lip */}
                      <path d="M 220 280 Q 360 410 500 415 Q 640 410 780 280 Q 640 365 500 370 Q 360 365 220 280 Z" fill="url(#lipAfterGrad)" />
                    </svg>
                  </div>
                </div>
              ) : (
                <img
                  src={currentCase.beforeImage}
                  alt={`${currentCase.title} Before Treatment`}
                  className="w-full h-full object-cover brightness-95"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          </div>

          {/* Draggable Vertical Divider Line */}
          <div
            className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* DRAG Cyan Round Button in the center matching screenshot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#56cdff] hover:bg-[#38bdf8] text-[#050e1f] font-black text-[11px] tracking-wider flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.7)] border-2 border-white pointer-events-auto cursor-ew-resize transition-transform hover:scale-110 active:scale-95">
              DRAG
            </div>
          </div>

          {/* "Before" Pill Badge on Bottom-Left matching screenshot */}
          <div className="absolute bottom-4 left-4 z-20">
            <div className="bg-[#1e293b]/90 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
              Before
            </div>
          </div>

          {/* "After" Pill Badge on Bottom-Right matching screenshot */}
          <div className="absolute bottom-4 right-4 z-20">
            <div className="bg-[#56cdff] text-[#050e1f] text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg">
              After
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pagination Dashes / Bars matching screenshot */}
      <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8">
        {SMILE_TRANSFORMATIONS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              setSliderPosition(50);
            }}
            className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === idx
                ? 'w-8 bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]'
                : 'w-2.5 bg-gray-600/70 hover:bg-gray-400'
            }`}
            aria-label={`Go to transformation case ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
