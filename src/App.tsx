import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { FeaturedHamamSection } from './components/FeaturedHamamSection';
import { TourMarketplace } from './components/TourMarketplace';
import { FeaturedPartyBoat } from './components/FeaturedPartyBoat';
import { AirportTransferSection } from './components/AirportTransferSection';
import { ShoppingSection } from './components/ShoppingSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AiChatAssistant } from './components/AiChatAssistant';
import { TourDetailModal } from './components/TourDetailModal';
import { ReservationModal } from './components/ReservationModal';
import { Language, Tour } from './types';
import { TOURS_DATA } from './data/toursData';
import { trackVisitorOnce, triggerTestNotification } from './utils/visitorTracker';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('tripora_lang');
    return (saved === 'en' || saved === 'tr' || saved === 'ru' || saved === 'de' || saved === 'pl' || saved === 'uk' || saved === 'ro' || saved === 'sr') ? (saved as Language) : 'en';
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);
  const [reservationTourId, setReservationTourId] = useState<string | null>(null);
  const [shoppingServiceId, setShoppingServiceId] = useState<string | null>(null);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('tripora_lang', lang);
  };

  const handleOpenReservation = (tourId?: string) => {
    setReservationTourId(tourId || null);
    setIsReservationOpen(true);
  };

  const handleNavigate = (view: string, detailId?: string) => {
    setActiveSection(view);

    if (view === 'reservation') {
      handleOpenReservation(detailId);
      return;
    }

    if (view === 'shopping' && detailId) {
      setShoppingServiceId(detailId);
    }

    if (view === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(view);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scrollspy to keep active navigation link in sync
  useEffect(() => {
    const sectionIds = ['home', 'hamam', 'tours', 'party-boat', 'private-tours', 'airport-transfer', 'shopping', 'about', 'reviews', 'faq', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global silent visitor notification tracking (once per session)
  useEffect(() => {
    trackVisitorOnce();

    // Check for optional test query parameter: ?test_telegram=true
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('test_telegram') === 'true' || urlParams.get('admin_test') === 'true') {
        triggerTestNotification().then((res) => {
          console.log('[TRIPORA Admin] Telegram test notification result:', res);
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Sticky Header Navigation */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenReservation={handleOpenReservation}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero
          currentLang={currentLang}
          onBookClick={() => handleOpenReservation()}
          onExploreClick={() => handleNavigate('tours')}
          onAirportTransferClick={() => handleNavigate('airport-transfer')}
          onHamamClick={() => handleNavigate('hamam')}
        />

        {/* Trust Indicators Bar */}
        <TrustBar currentLang={currentLang} />

        {/* Featured Turkish Bath & Spa Experience (Top of Page) */}
        <FeaturedHamamSection
          currentLang={currentLang}
          onBookHamam={() => handleOpenReservation('turkish-hamam-spa')}
          onSelectHamam={(tour) => setSelectedTour(tour)}
        />

        {/* Tour Marketplace */}
        <TourMarketplace
          currentLang={currentLang}
          onSelectTour={(tour) => setSelectedTour(tour)}
          onBookTour={(tourId) => handleOpenReservation(tourId)}
        />

        {/* Featured Alanya Party Boat Tour (Baba 07 Pirate Ship) */}
        <FeaturedPartyBoat
          currentLang={currentLang}
          onBookPartyBoat={() => handleOpenReservation('alanya-boat-tour')}
          onViewDetails={() => {
            const boatTour = TOURS_DATA.find(t => t.id === 'alanya-boat-tour');
            if (boatTour) setSelectedTour(boatTour);
          }}
        />

        {/* VIP Airport Transfer (€80 Fixed Rate) */}
        <AirportTransferSection currentLang={currentLang} />

        {/* Shopping Experiences (Free Shopping Tour, Jewelry, Butik, Tattoo) */}
        <ShoppingSection
          currentLang={currentLang}
          onBookShoppingTour={() => handleOpenReservation('free-shopping-tour')}
          selectedServiceId={shoppingServiceId}
          onClearSelectedService={() => setShoppingServiceId(null)}
        />

        {/* Why Choose Tripora */}
        <WhyChooseUs currentLang={currentLang} />

        {/* Authentic International Guest Reviews */}
        <ReviewsSection currentLang={currentLang} />

        {/* Visual Mediterranean Gallery */}
        <GallerySection currentLang={currentLang} />

        {/* Frequently Asked Questions (17 questions) */}
        <FaqSection currentLang={currentLang} />

        {/* Contact Desk & Location */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onNavigate={handleNavigate}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* Tripora Travel Assistant AI Chatbot */}
      <AiChatAssistant
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onSelectTour={(tour) => setSelectedTour(tour)}
        onBookTour={(tour) => handleOpenReservation(tour.id)}
      />

      {/* Tour Detail Modal */}
      <TourDetailModal
        tour={selectedTour}
        currentLang={currentLang}
        onClose={() => setSelectedTour(null)}
        onBook={(tourId) => handleOpenReservation(tourId)}
      />

      {/* WhatsApp Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        initialTourId={reservationTourId}
        currentLang={currentLang}
        onClose={() => {
          setIsReservationOpen(false);
          setReservationTourId(null);
        }}
      />
    </div>
  );
}
