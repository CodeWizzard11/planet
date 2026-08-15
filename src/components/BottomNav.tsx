import React from 'react';
import { Home, Stethoscope, HeartPulse, PhoneCall } from 'lucide-react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onSelectTab }) => {
  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: <Home className="w-5 h-5 mb-0.5" /> 
    },
    { 
      id: 'services', 
      label: 'Services', 
      icon: <Stethoscope className="w-5 h-5 mb-0.5" /> 
    },
    { 
      id: 'emergency', 
      label: 'Emergency', 
      icon: <HeartPulse className="w-5 h-5 mb-0.5" /> 
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: <PhoneCall className="w-5 h-5 mb-0.5" /> 
    },
  ];

  return (
    <nav className="bg-[#061530]/95 backdrop-blur-md shadow-2xl bottom-0 fixed border-t border-gray-700/80 w-full flex justify-around items-center px-3 py-1.5 z-40 md:hidden">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSelectTab(item.id)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl text-xs font-medium transition-all duration-150 active:scale-95 cursor-pointer min-w-[64px] ${
              isActive
                ? 'bg-[#38bdf8]/20 text-[#38bdf8] font-bold border border-[#38bdf8]/40 shadow-inner'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="text-[11px] leading-none mt-0.5">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
