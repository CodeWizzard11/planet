/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ActiveTab, AppointmentBooking } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoCards } from './components/InfoCards';
import { Philosophy } from './components/Philosophy';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { TechnologySection } from './components/TechnologySection';
import { SmilesTransformedSection } from './components/SmilesTransformedSection';
import { PricingSection } from './components/PricingSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfficeLocationSection } from './components/OfficeLocationSection';
import { StickyScheduleTab } from './components/StickyScheduleTab';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { BookingModal } from './components/BookingModal';
import { EmergencyModal } from './components/EmergencyModal';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('restorative');
  const [preselectedDoctor, setPreselectedDoctor] = useState('Dr. Sumit');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSelectTab = (tab: ActiveTab) => {
    setActiveTab(tab);

    if (tab === 'emergency') {
      setIsEmergencyModalOpen(true);
      return;
    }

    if (tab === 'tmj') {
      setPreselectedService('TMJ Relief & Botox');
      setIsBookingModalOpen(true);
      return;
    }

    if (tab === 'wisdom-teeth') {
      setPreselectedService('Wisdom Teeth & Surgery');
      setIsBookingModalOpen(true);
      return;
    }

    if (tab === 'financing' || tab === 'pricing') {
      const el = document.getElementById('pricing');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (tab === 'treatments' || tab === 'services') {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (tab === 'transformations') {
      const el = document.getElementById('transformations');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (tab === 'testimonials') {
      const el = document.getElementById('testimonials');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // Standard section scroll
    const sectionElement = document.getElementById(tab);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBookingWithService = (serviceId: string) => {
    setPreselectedService(serviceId);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithPlan = (planTitle: string) => {
    setPreselectedService(planTitle);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingWithDoctor = (doctorName: string) => {
    setPreselectedDoctor(doctorName);
    setIsBookingModalOpen(true);
  };

  const handleSuccessBooking = (booking: AppointmentBooking) => {
    setToastMessage(`Appointment booked for ${booking.name}! Our team will contact you shortly.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#050e1f] text-white flex flex-col font-sans relative pb-16 md:pb-0 selection:bg-sky-400 selection:text-slate-900">
      {/* Top Header Navigation matching screenshot */}
      <Header 
        activeTab={activeTab} 
        onSelectTab={handleSelectTab} 
        onOpenBooking={() => setIsBookingModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Front Panel Hero Section matching screenshot */}
        <Hero 
          onOpenBooking={() => setIsBookingModalOpen(true)} 
          onTakeTour={() => {
            const el = document.getElementById('our-philosophy');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4 Feature Cards Strip matching screenshot */}
        <InfoCards 
          onOpenBooking={() => setIsBookingModalOpen(true)}
          onSelectEmergencyTab={() => setIsEmergencyModalOpen(true)}
          onSelectInsurance={() => {
            const el = document.getElementById('pricing');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Philosophy Section */}
        <Philosophy 
          onMeetTeam={() => handleSelectTab('team')} 
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />

        {/* Why Choose Planet Dental */}
        <WhyChooseUs />

        {/* Services / Treatments Section */}
        <ServicesSection 
          onSelectServiceForBooking={handleOpenBookingWithService} 
        />

        {/* Technology Section matching screenshot sequence */}
        <TechnologySection 
          onOpenBooking={() => setIsBookingModalOpen(true)} 
        />

        {/* Thousand of Smiles Transformed / Before & After Section */}
        <SmilesTransformedSection 
          onOpenBooking={() => setIsBookingModalOpen(true)} 
        />

        {/* Pricing Plans matching screenshot */}
        <PricingSection 
          onSelectPlanForBooking={handleOpenBookingWithPlan} 
        />

        {/* Clinicians Team Section */}
        <TeamSection 
          onOpenBookingWithDoctor={handleOpenBookingWithDoctor} 
        />

        {/* Testimonials / Patient Reviews Section */}
        <TestimonialsSection />

        {/* Office Location & Appointment Form */}
        <OfficeLocationSection 
          onSuccessBooking={handleSuccessBooking} 
          prefilledService={preselectedService}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />

      {/* Bottom Sticky Mobile Navigation Bar */}
      <BottomNav 
        activeTab={activeTab} 
        onSelectTab={handleSelectTab} 
      />

      {/* Sticky On-Scroll Schedule Appointment Magenta Tab */}
      <StickyScheduleTab 
        onOpenBooking={() => setIsBookingModalOpen(true)} 
      />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onConfirmBooking={handleSuccessBooking}
        preselectedServiceId={preselectedService}
        preselectedDoctorName={preselectedDoctor}
      />

      {/* Emergency Modal */}
      <EmergencyModal 
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Success Notification Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#38bdf8] text-[#061530] font-bold px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white animate-bounce max-w-sm">
          <CheckCircle2 className="w-6 h-6 shrink-0" />
          <span className="text-xs sm:text-sm">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
