import React from 'react';
import { LOGO_URL, CLINIC_INFO } from '../data/dentalData';

interface FooterProps {
  onOpenBooking?: () => void;
  onOpenEmergencyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="relative w-full text-white pt-2 sm:pt-4 pb-12 overflow-hidden">
      
      {/* Lying Astronaut Holding Tooth Artwork positioned right above/overlapping the curved footer banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        <div className="w-full flex justify-center lg:justify-start lg:pl-28 mb-[-30px] sm:mb-[-45px] relative z-20 pointer-events-none">
          <div className="w-64 sm:w-80 md:w-96 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]">
            <svg viewBox="0 0 520 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Giant Gleaming Tooth held in left hand */}
              <g transform="translate(145, 30) scale(1.15)">
                {/* Tooth Shadow */}
                <ellipse cx="45" cy="85" rx="35" ry="10" fill="#030b17" fillOpacity="0.4" filter="blur(4px)" />
                {/* Tooth Body Base */}
                <path
                  d="M20 20 C10 45, 12 75, 26 88 C32 94, 38 90, 42 75 C45 64, 48 64, 52 75 C56 90, 62 94, 68 88 C82 75, 84 45, 74 20 C68 6, 26 6, 20 20 Z"
                  fill="url(#toothWhiteGrad)"
                  stroke="#cbd5e1"
                  strokeWidth="2.5"
                />
                {/* Tooth Crown Highlights & Ridges */}
                <path
                  d="M24 22 C32 12, 62 12, 70 22 C64 28, 54 26, 47 32 C40 26, 30 28, 24 22 Z"
                  fill="#ffffff"
                  fillOpacity="0.8"
                />
                {/* Left Root Highlight */}
                <path d="M26 45 C24 60, 26 78, 30 84" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" />
                {/* Right Root Soft Shading */}
                <path d="M68 45 C70 60, 68 78, 64 84" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Glossy Sparkle */}
                <polygon points="34,22 36,16 38,22 44,24 38,26 36,32 34,26 28,24" fill="#ffffff" />
              </g>

              {/* Astronaut Body (Lying down propped on right elbow) */}
              <g transform="translate(40, 60)">
                {/* Legs extended to the left */}
                {/* Left Leg & Boot */}
                <path d="M40 155 C70 150, 110 145, 150 140 L160 168 C120 175, 80 180, 40 182 Z" fill="#d1d5db" stroke="#9ca3af" strokeWidth="3" />
                {/* Left Boot */}
                <path d="M40 155 C25 155, 10 162, 5 178 C2 188, 15 195, 35 192 C45 190, 52 182, 45 172 Z" fill="#e5e7eb" stroke="#6b7280" strokeWidth="3.5" />
                {/* Boot tread */}
                <path d="M8 185 L36 188" stroke="#4b5563" strokeWidth="3" strokeLinecap="round" />

                {/* Right Leg (in front) */}
                <path d="M75 160 C110 155, 160 148, 195 140 L205 172 C165 180, 115 188, 75 190 Z" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="3" />
                {/* Red stripe detail on leg */}
                <path d="M125 154 L128 178" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                {/* Right Boot */}
                <path d="M75 160 C60 160, 42 168, 38 184 C35 196, 50 204, 70 200 C82 198, 90 190, 82 178 Z" fill="#ffffff" stroke="#6b7280" strokeWidth="3.5" />
                <path d="M42 194 L72 196" stroke="#374151" strokeWidth="3" strokeLinecap="round" />

                {/* Torso & Suit */}
                <path
                  d="M170 135 C190 120, 240 115, 275 125 C295 132, 305 155, 290 180 C265 195, 205 195, 175 180 Z"
                  fill="#f3f4f6"
                  stroke="#9ca3af"
                  strokeWidth="3.5"
                />
                
                {/* Chest Control Pack */}
                <rect x="210" y="130" width="55" height="42" rx="6" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2.5" />
                {/* Pack Controls */}
                <circle cx="222" cy="142" r="4" fill="#38bdf8" />
                <circle cx="234" cy="142" r="4" fill="#ef4444" />
                <circle cx="246" cy="142" r="4" fill="#10b981" />
                <rect x="218" y="152" width="38" height="3" rx="1.5" fill="#4b5563" />
                <rect x="218" y="158" width="28" height="3" rx="1.5" fill="#6b7280" />
                {/* Oxygen Hose Tube */}
                <path d="M255 160 C270 168, 280 155, 285 142" stroke="#64748b" strokeWidth="3" fill="none" strokeDasharray="3 2" />

                {/* Right Arm (Propping on elbow) */}
                <path d="M285 145 C305 160, 315 190, 295 205 C280 215, 255 210, 245 200" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="3.5" />
                {/* Right Glove propped on floor */}
                <ellipse cx="250" cy="205" rx="16" ry="12" fill="#d1d5db" stroke="#6b7280" strokeWidth="3" />

                {/* Left Arm (Reaching back to hold the tooth) */}
                <path d="M195 128 C185 110, 180 85, 195 65 C205 50, 215 45, 225 55" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="3.5" />
                {/* Left Glove holding the tooth */}
                <path d="M190 68 C182 60, 180 45, 192 40 C204 35, 212 48, 206 62 Z" fill="#ffffff" stroke="#6b7280" strokeWidth="3" />
                <circle cx="188" cy="52" r="5" fill="#9ca3af" />

                {/* Helmet Base */}
                <circle cx="310" cy="115" r="54" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="4" />
                <circle cx="310" cy="115" r="46" fill="#f9fafb" />

                {/* Helmet Visor with Golden Mirrored Reflection */}
                <ellipse cx="312" cy="114" rx="38" ry="32" fill="url(#footerVisorGrad)" stroke="#374151" strokeWidth="3" />
                {/* Visor Glare/Glow */}
                <ellipse cx="300" cy="102" rx="16" ry="10" fill="#ffffff" fillOpacity="0.45" transform="rotate(-15 300 102)" />
                {/* Helmet details & ear lights */}
                <rect x="256" y="108" width="6" height="15" rx="2" fill="#38bdf8" />
                <rect x="360" y="108" width="6" height="15" rx="2" fill="#38bdf8" />
                <rect x="302" y="58" width="16" height="6" rx="2" fill="#9ca3af" />
              </g>

              <defs>
                <linearGradient id="toothWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="65%" stopColor="#f8fafc" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
                <linearGradient id="footerVisorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="25%" stopColor="#92400e" />
                  <stop offset="55%" stopColor="#f59e0b" />
                  <stop offset="85%" stopColor="#b45309" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Curved Dark Navy Footer Container matching Screenshot 2 */}
      <div className="w-full bg-gradient-to-b from-[#082245] via-[#051630] to-[#020b1a] rounded-t-[36px] sm:rounded-t-[50px] border-t border-sky-600/30 shadow-2xl relative z-10 px-4 sm:px-8 lg:px-14 pt-14 sm:pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          
          {/* 3 Column Grid: Logo/Address, Location & Get Direction, Working Hours Table */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 text-left mb-12 sm:mb-16">
            
            {/* Column 1: Planet Dental Logo + Address + Bold Phone (md:col-span-4) */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <img 
                  src={LOGO_URL} 
                  alt="Planet Dental Calgary" 
                  className="h-11 sm:h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-xs sm:text-sm text-gray-300 space-y-1 pt-1 leading-relaxed">
                <p>250 East Hills Square SE #4110</p>
                <p>Calgary, AB, Canada T2A 7A7</p>
              </div>

              <div className="pt-2">
                <a 
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="text-base sm:text-lg font-bold text-white hover:text-[#38bdf8] transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>

            {/* Column 2: Location Heading + Address + Get Direction link (md:col-span-4) */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xl font-bold text-white tracking-tight">Location</h4>
              
              <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                <p>250 East Hills Square SE #4110Calgary, AB, Canada T2A 7A7</p>
              </div>

              <div className="pt-2">
                <a 
                  href={CLINIC_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-white font-medium underline underline-offset-4 hover:text-[#38bdf8] transition-colors inline-block"
                >
                  Get Direction
                </a>
              </div>
            </div>

            {/* Column 3: Working Hours List (md:col-span-4) */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xl font-bold text-white tracking-tight">Working Hours</h4>
              
              <div className="divide-y divide-sky-950/60 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 text-gray-300">
                  <span className="font-normal">Monday</span>
                  <span className="text-gray-200">9 am – 9 pm</span>
                </div>
                <div className="flex justify-between py-1.5 text-gray-300">
                  <span className="font-normal">Tuesday</span>
                  <span className="text-gray-200">9 am – 9 pm</span>
                </div>
                <div className="flex justify-between py-1.5 text-gray-300">
                  <span className="font-normal">Wednesday</span>
                  <span className="text-gray-200">9 am – 9 pm</span>
                </div>
                <div className="flex justify-between py-1.5 text-gray-300">
                  <span className="font-normal">Thursday</span>
                  <span className="text-gray-200">9 am – 9 pm</span>
                </div>
                <div className="flex justify-between py-1.5 text-gray-300">
                  <span className="font-normal">Friday</span>
                  <span className="text-gray-200">9 am – 5 pm</span>
                </div>
                <div className="flex justify-between py-1.5 text-gray-300">
                  <span className="font-normal">Saturday</span>
                  <span className="text-gray-200">9 am – 5 pm</span>
                </div>
                <div className="flex justify-between py-1.5 text-gray-300">
                  <span className="font-normal">Sunday</span>
                  <span className="text-gray-200">9 am – 5 pm</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Divider Line matching Screenshot 2 */}
          <div className="border-t border-sky-900/60 pt-6">
            <p className="text-xs text-gray-400 text-left font-normal">
              © 2026 Planet Dental. All rights reserved.
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
};
