import React from 'react';
import { X, Phone, ShieldAlert, Clock, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose, onOpenBooking }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#061530] border-2 border-rose-500/60 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-[0_0_30px_rgba(244,63,94,0.3)]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 w-8 h-8 rounded-full flex items-center justify-center text-sm cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="bg-rose-500/20 p-2 rounded-full text-rose-400">
            <ShieldAlert className="w-6 h-6 animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-white">Emergency Dental Care</h3>
        </div>

        <p className="text-xs text-rose-300 mb-6 font-semibold">
          Immediate Appointments Available 7 Days / Week in East Calgary
        </p>

        <div className="space-y-4 mb-6 text-left">
          <div className="glass-card rounded-2xl p-4 border border-rose-500/30 bg-rose-950/20">
            <h4 className="font-bold text-white text-sm mb-2">Common Dental Emergencies Treated:</h4>
            <ul className="text-xs text-gray-300 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Severe toothache or throbbing jaw pain</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Chipped, cracked, or broken tooth</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Knocked-out or loosened tooth</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Lost crown, filling, or broken bridge</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Swelling, abscess, or gum bleeding</span>
              </li>
            </ul>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phoneClean}`}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 text-center text-sm shadow-lg transition-all"
          >
            <Phone className="w-5 h-5 animate-bounce" />
            <span>Call Hotline: {CLINIC_INFO.phone}</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full bg-[#38bdf8] hover:bg-sky-400 text-[#061530] font-bold py-3 px-6 rounded-2xl text-center text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Clock className="w-4 h-4" />
            <span>Request Same-Day Emergency Appointment Online</span>
          </button>
        </div>

        <p className="text-[11px] text-gray-400">
          Direct insurance billing supported. Direct walk-ins welcome during working hours.
        </p>
      </div>
    </div>
  );
};
