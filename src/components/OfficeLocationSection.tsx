import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';
import { AppointmentBooking } from '../types';
import { motion } from 'motion/react';

interface OfficeLocationSectionProps {
  onSuccessBooking: (booking: AppointmentBooking) => void;
  prefilledService?: string;
}

export const OfficeLocationSection: React.FC<OfficeLocationSectionProps> = ({ 
  onSuccessBooking,
  prefilledService = '' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '2026-08-15',
    service: 'Service',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number so our clinic team can confirm your appointment.');
      return;
    }

    const booking: AppointmentBooking = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferredDate: formData.date,
      serviceId: formData.service === 'Service' ? 'General & Hygiene Cleaning' : formData.service,
      notes: formData.message
    };

    onSuccessBooking(booking);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '2026-08-15',
        service: 'Service',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative px-3 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-4 sm:pb-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Starfield & Subtle Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-sky-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-12 left-16 w-1.5 h-1.5 bg-sky-300 rounded-full animate-pulse opacity-80" />
        <div className="absolute top-28 right-24 w-2 h-2 bg-white rounded-full opacity-60" />
      </div>

      {/* Top Header Row: Pill Badge + Big Title */}
      <div className="text-left mb-10 sm:mb-14 max-w-3xl">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white text-[#050e1f] text-xs font-extrabold py-2 px-5 rounded-full uppercase tracking-wider shadow-md inline-block mb-3.5"
        >
          OUR LOCATION
        </motion.div>

        <motion.h2 
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight"
        >
          East Hills Office <span className="text-[#38bdf8]">Location</span>
        </motion.h2>
      </div>

      {/* Main Appointment Box with 3D Spaceman Illustration overlapping top right matching screenshot */}
      <div className="relative max-w-4xl mx-auto mb-16 sm:mb-20">
        
        {/* Floating Spaceman with Toothbrush Asset Overlapping Top Right matching screenshot */}
        <div className="absolute -top-16 sm:-top-20 right-4 sm:right-10 z-20 w-28 sm:w-36 md:w-44 pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)]">
          <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            {/* Toothbrush held by astronaut */}
            <g transform="rotate(-15 150 70)">
              {/* Brush Handle */}
              <rect x="142" y="10" width="8" height="95" rx="4" fill="#38bdf8" />
              <rect x="143" y="12" width="6" height="50" rx="3" fill="#67e8f9" />
              {/* Brush Head */}
              <rect x="140" y="8" width="12" height="24" rx="3" fill="#ffffff" />
              {/* Bristles */}
              <rect x="133" y="12" width="7" height="16" rx="1.5" fill="#f43f5e" />
              <rect x="135" y="14" width="5" height="12" rx="1" fill="#fb7185" />
            </g>

            {/* Astronaut Helmet */}
            <circle cx="100" cy="85" r="55" fill="#d1d5db" stroke="#9ca3af" strokeWidth="4" />
            <circle cx="100" cy="85" r="48" fill="#e5e7eb" />
            {/* Visor with Golden/Space Reflection */}
            <ellipse cx="100" cy="83" rx="38" ry="32" fill="url(#visorGradLocation)" stroke="#374151" strokeWidth="3" />
            
            {/* Visor reflection highlight */}
            <ellipse cx="88" cy="74" rx="14" ry="9" fill="#ffffff" fillOpacity="0.45" transform="rotate(-15 88 74)" />

            {/* Helmet Lights & Details */}
            <rect x="42" y="78" width="6" height="14" rx="2" fill="#38bdf8" />
            <rect x="152" y="78" width="6" height="14" rx="2" fill="#38bdf8" />
            <rect x="94" y="26" width="12" height="6" rx="2" fill="#9ca3af" />

            {/* Astronaut Suit Collar & Shoulders */}
            <path d="M52 135 C52 118 72 112 100 112 C128 112 148 118 148 135 L160 210 C160 230 40 230 40 210 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="4" />
            {/* Chest Plate */}
            <rect x="74" y="132" width="52" height="42" rx="6" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="2" />
            {/* Controls on chest */}
            <rect x="80" y="140" width="12" height="8" rx="2" fill="#38bdf8" />
            <rect x="96" y="140" width="12" height="8" rx="2" fill="#f43f5e" />
            <rect x="80" y="152" width="40" height="4" rx="2" fill="#4b5563" />
            <rect x="80" y="160" width="28" height="4" rx="2" fill="#6b7280" />

            {/* Space Suit Arms */}
            <path d="M140 138 C158 145 172 130 162 105 C158 95 148 88 138 98" fill="#d1d5db" stroke="#9ca3af" strokeWidth="3" />
            <ellipse cx="146" cy="92" rx="10" ry="12" fill="#e5e7eb" stroke="#6b7280" strokeWidth="2.5" />

            <defs>
              <linearGradient id="visorGradLocation" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="35%" stopColor="#b45309" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Appointment Card Body matching screenshot */}
        <div className="rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 text-center bg-gradient-to-b from-[#0a1e3a]/90 via-[#07172f]/95 to-[#040e21] border border-sky-900/60 shadow-2xl relative">
          
          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white mb-3">
            Book An <span className="text-[#38bdf8]">Appointment</span>
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
            Book an appointment with our modern East Hills Shopping Centre clinic, proudly serving East Calgary and Chestermere with quality dental care and comprehensive services for patients from nearby communities.
          </p>

          {formSubmitted ? (
            <div className="bg-sky-950/60 border border-[#38bdf8] rounded-2xl p-8 text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-[#38bdf8] mx-auto" />
              <h4 className="text-xl font-bold text-white">Appointment Request Received!</h4>
              <p className="text-sm text-gray-200">
                Thank you, <strong>{formData.name}</strong>. Our team at Planet Dental Calgary will contact you shortly at <strong>{formData.phone}</strong> to confirm your appointment time.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-3xl mx-auto">
              
              {/* Row 1: Name, Email, Phone Number matching screenshot */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                <input 
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-gray-500 shadow-inner"
                />

                <input 
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-gray-500 shadow-inner"
                />

                <input 
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-gray-500 shadow-inner"
                />
              </div>

              {/* Row 2: Date Picker + Service Dropdown matching screenshot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Date Picker styled as 15 / 08 / 2026 */}
                <div className="relative">
                  <input 
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] shadow-inner cursor-pointer"
                  />
                  <Calendar className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Service Dropdown with custom chevron */}
                <div className="relative">
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] shadow-inner appearance-none cursor-pointer pr-10"
                  >
                    <option value="Service">Service</option>
                    <option value="Restorative Dentistry">Restorative Dentistry (Fillings / Crowns)</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Braces or Invisalign">Braces or Invisalign</option>
                    <option value="Botox Special">Botox Special</option>
                    <option value="Emergency Dental Care">Emergency Dental Care</option>
                    <option value="General & Hygiene Cleaning">General & Hygiene Cleaning</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Row 3: Type Your Message Textarea matching screenshot */}
              <div>
                <textarea 
                  rows={4}
                  placeholder="Type Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white text-[#061530] font-medium rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8] placeholder-gray-500 shadow-inner"
                />
              </div>

              {/* Submit Button Centered matching screenshot */}
              <div className="flex justify-center pt-2">
                <button 
                  type="submit"
                  className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold py-3 px-8 rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all cursor-pointer text-xs sm:text-sm group"
                >
                  <span>Submit</span>
                  <div className="w-5 h-5 rounded-full bg-[#050e1f] text-white flex items-center justify-center text-xs group-hover:bg-black transition-colors">
                    <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                  </div>
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

      {/* Lower Section: Left Location Info & Working Hours + Right Google Map matching screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-5xl mx-auto items-start text-left">
        
        {/* Left Column: Address, Phone, Emergency, and Working Hours Card */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Top Address & Phone Row matching screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <span>250 East Hills Square SE #4110<br />Calgary, AB, Canada T2A 7A7</span>
            </div>

            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <a href="tel:5873180318" className="hover:text-[#38bdf8] transition-colors">
                (587) 318-0318
              </a>
            </div>
          </div>

          {/* Dental Emergency Contact matching screenshot */}
          <div className="space-y-1 pt-2">
            <h4 className="text-base font-bold text-white">Dental Emergency</h4>
            <p className="text-xs text-gray-300">Immediate Appointments Available Call / Text Us</p>
            <div className="flex items-center gap-2 pt-1">
              <Phone className="w-3.5 h-3.5 text-gray-400" />
              <a href="tel:5873180318" className="text-xs font-semibold text-gray-200 hover:text-[#38bdf8] transition-colors">
                (587) 318-0318
              </a>
            </div>
          </div>

          {/* Working Hours Card matching screenshot */}
          <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#092347]/80 to-[#041126]/90 border border-sky-900/60 shadow-xl space-y-3">
            <h4 className="text-base font-bold text-white mb-2">Working Hours</h4>
            
            <div className="divide-y divide-sky-950/80 text-xs sm:text-sm">
              <div className="flex justify-between py-2 text-gray-300">
                <span>Monday</span>
                <span className="text-gray-200">9 am – 9 pm</span>
              </div>
              <div className="flex justify-between py-2 text-gray-300">
                <span>Tuesday</span>
                <span className="text-gray-200">9 am – 9 pm</span>
              </div>
              <div className="flex justify-between py-2 text-gray-300">
                <span>Wednesday</span>
                <span className="text-gray-200">9 am – 9 pm</span>
              </div>
              <div className="flex justify-between py-2 text-gray-300">
                <span>Thursday</span>
                <span className="text-gray-200">9 am – 9 pm</span>
              </div>
              <div className="flex justify-between py-2 text-gray-300">
                <span>Friday</span>
                <span className="text-gray-200">9 am – 5 pm</span>
              </div>
              <div className="flex justify-between py-2 text-gray-300">
                <span>Saturday</span>
                <span className="text-gray-200">9 am – 5 pm</span>
              </div>
              <div className="flex justify-between py-2 text-gray-300">
                <span>Sunday</span>
                <span className="text-gray-200">9 am – 5 pm</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Google Map with Open in Maps button and Pin matching screenshot */}
        <div className="lg:col-span-7">
          <div className="relative w-full h-[380px] sm:h-[440px] rounded-[24px] overflow-hidden border border-sky-900/60 shadow-2xl bg-[#091f3d]">
            
            {/* Open in Maps Floating Button matching screenshot */}
            <a 
              href={CLINIC_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 z-20 bg-white hover:bg-gray-100 text-[#0f172a] text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 transition-colors border border-gray-300"
            >
              <span>Open in Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Embedded Interactive Map */}
            <iframe
              title="Planet Dental Calgary Location Map"
              src="https://maps.google.com/maps?q=250%20East%20Hills%20Square%20SE%20%234110%2C%20Calgary%2C%20AB%20T2A%207A7&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter brightness-95 contrast-105"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Open in Google Map dark pill button at the bottom of the map matching Screenshot 2 */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center z-20 pointer-events-auto">
              <a 
                href={CLINIC_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#051329]/90 hover:bg-[#081d3d] text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg border border-sky-900/80 flex items-center gap-2 transition-all hover:scale-105 backdrop-blur-md"
              >
                <span>Open in Google Map</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
              </a>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
