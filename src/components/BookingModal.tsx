import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import { DENTAL_SERVICES, TEAM_MEMBERS, CLINIC_INFO } from '../data/dentalData';
import { AppointmentBooking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmBooking: (booking: AppointmentBooking) => void;
  preselectedServiceId?: string;
  preselectedDoctorName?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onConfirmBooking,
  preselectedServiceId = 'restorative',
  preselectedDoctorName = 'Dr. Sumit'
}) => {
  if (!isOpen) return null;

  const [serviceId, setServiceId] = useState(preselectedServiceId);
  const [doctorName, setDoctorName] = useState(preselectedDoctorName);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('10:00 AM');
  const [isEmergency, setIsEmergency] = useState(false);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill in your name and contact phone number.');
      return;
    }

    const booking: AppointmentBooking = {
      name,
      email,
      phone,
      preferredDate: date,
      preferredTime: time,
      serviceId,
      doctorPreference: doctorName,
      isEmergency,
      notes
    };

    onConfirmBooking(booking);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-[#061530] border border-sky-400/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl my-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-scaleUp">
            <CheckCircle2 className="w-16 h-16 text-[#38bdf8] mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-white">Appointment Confirmed!</h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="text-[#38bdf8] font-semibold">{name}</span>! Your appointment request for <strong className="text-white">{date} at {time}</strong> has been logged.
            </p>
            <div className="bg-white/5 border border-gray-700/80 rounded-2xl p-4 text-xs text-gray-300 text-left space-y-1">
              <p><strong>Clinic:</strong> Planet Dental Calgary (East Hills)</p>
              <p><strong>Phone:</strong> {CLINIC_INFO.phone}</p>
              <p><strong>Service:</strong> {DENTAL_SERVICES.find(s => s.id === serviceId)?.title || serviceId}</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-[#38bdf8]" />
              <h3 className="text-2xl font-bold text-white">Book Appointment</h3>
            </div>
            <p className="text-xs text-gray-300 mb-6">
              Planet Dental Calgary — Open 7 Days a Week in East Hills
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Emergency Checkbox Banner */}
              <div 
                onClick={() => setIsEmergency(!isEmergency)}
                className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                  isEmergency 
                    ? 'bg-rose-950/60 border-rose-500/80 text-rose-200' 
                    : 'bg-white/5 border-gray-700 text-gray-300 hover:bg-white/10'
                }`}
              >
                <ShieldAlert className={`w-5 h-5 ${isEmergency ? 'text-rose-400' : 'text-gray-400'}`} />
                <div className="flex-1 text-xs">
                  <span className="font-bold">Is this an urgent dental emergency?</span>
                  <p className="text-[11px] text-gray-400">Mark for same-day priority triage</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={isEmergency} 
                  onChange={() => {}} 
                  className="accent-rose-500 w-4 h-4"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Select Treatment Service
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-white text-[#061530] font-medium rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                >
                  {DENTAL_SERVICES.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Braces or Invisalign">Braces or Invisalign ($3,499)</option>
                  <option value="Dental Implants">Dental Implants ($2,999)</option>
                  <option value="Botox Special">Botox Special ($8/Unit)</option>
                  <option value="General Consultation">General Consultation / Cleaning</option>
                </select>
              </div>

              {/* Doctor Preference */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Preferred Doctor / Clinician
                </label>
                <select
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  className="w-full bg-white text-[#061530] font-medium rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                >
                  <option value="Dr. Sumit">Dr. Sumit (Lead Dentist)</option>
                  {TEAM_MEMBERS.filter(m => m.id !== 'dr-sumit').map(m => (
                    <option key={m.id} value={m.name}>{m.name} ({m.role})</option>
                  ))}
                  <option value="First Available Doctor">First Available Doctor</option>
                </select>
              </div>

              {/* Patient Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. (587) 318-0318"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white text-[#061530] font-medium rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white text-[#061530] font-medium rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:30 PM">07:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Additional Notes / Symptoms
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific dental concerns, anxiety, or insurance details..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white text-[#061530] font-medium rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#38bdf8] hover:bg-sky-400 text-[#061530] font-bold py-3.5 rounded-full text-center text-sm shadow-lg transition-all cursor-pointer mt-2"
              >
                Confirm Appointment Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
