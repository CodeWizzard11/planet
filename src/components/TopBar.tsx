import React from 'react';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface TopBarProps {
  onOpenBooking: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#061530] text-white text-xs py-2 px-4 flex justify-between items-center z-50 relative border-b border-gray-700/80">
      <div className="flex gap-4 items-center">
        <a 
          href={`tel:${CLINIC_INFO.phoneClean}`} 
          className="flex flex-col sm:flex-row items-center gap-1 hover:text-sky-400 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" /> 
          <span>Call Now</span>
        </a>

        <button 
          onClick={onOpenBooking} 
          className="flex flex-col sm:flex-row items-center gap-1 hover:text-sky-400 transition-colors cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-sky-400" /> 
          <span>Book</span>
        </button>

        <a 
          href={CLINIC_INFO.mapsLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col sm:flex-row items-center gap-1 hover:text-sky-400 transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-sky-400" /> 
          <span>Directions</span>
        </a>
      </div>

      <div className="hidden md:flex items-center gap-2 text-gray-300">
        <span className="inline-block w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
        <span>Open Today 9:00 AM - 9:00 PM</span>
      </div>
    </div>
  );
};
