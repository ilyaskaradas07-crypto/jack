import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Star, Award, Sparkles, Car } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { createWhatsAppLink } from '../utils/whatsapp';
import { openAiAssistant } from '../utils/aiAssistant';

interface HeroProps {
  currentLang: Language;
  onBookClick: () => void;
  onExploreClick: () => void;
  onAirportTransferClick: () => void;
  onHamamClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onBookClick,
  onExploreClick,
  onAirportTransferClick,
  onHamamClick,
}) => {
  const t = TRANSLATIONS[currentLang]?.hero || TRANSLATIONS.en.hero;

  const whatsappInquiryUrl = createWhatsAppLink(
    'Hello Tripora Alanya, I would like to inquire about booking a tour in Alanya.'
  );

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#071325]"
    >
      {/* Background Image with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/boat-tour.jpg"
          alt="Alanya pirate boat tour Baba 07 cruising along Mediterranean coastline"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse [animation-duration:15s]"
          loading="eager"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/images/alanya-boat-tour.jpg';
          }}
        />
        {/* Layered cinematic overlays: deep navy vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071325] via-[#071325]/75 to-[#071325]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071325]/90 via-[#071325]/60 to-transparent" />
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.15),transparent_60%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="max-w-3xl">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>TRIPORA ALANYA • TURKEY</span>
            </div>

            <button
              id="hero-airport-transfer-btn"
              onClick={onAirportTransferClick}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wide backdrop-blur-md transition-colors group cursor-pointer"
            >
              <Car className="w-3.5 h-3.5 text-amber-400" />
              <span>VIP AIRPORT TRANSFER</span>
              <span className="text-[11px] font-black bg-amber-400/20 px-2 py-0.5 rounded ml-1 group-hover:bg-amber-400/30 border border-amber-400/30 text-amber-200">
                Gazipaşa €50 • Antalya €80
              </span>
            </button>

            <button
              id="hero-hamam-btn"
              onClick={onHamamClick}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wide backdrop-blur-md transition-colors group cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {currentLang === 'tr' ? 'GELENEKSEL TÜRK HAMAMI' :
                 currentLang === 'ru' ? 'ТУРЕЦКИЙ ХАМАМ И СПА' :
                 currentLang === 'de' ? 'TRADITIONELLES HAMAM' :
                 currentLang === 'pl' ? 'TRADYCYJNY HAMAM' :
                 currentLang === 'uk' ? 'ТУРЕЦЬКИЙ ХАМАМ' :
                 currentLang === 'ro' ? 'HAMAM TRADIȚIONAL' :
                 currentLang === 'sr' ? 'TURSKO KUPATILO' :
                 'TRADITIONAL HAMAM & SPA'}
              </span>
              <span className="text-[11px] font-black bg-emerald-400/25 px-2 py-0.5 rounded ml-1 group-hover:bg-emerald-400/35 border border-emerald-400/30 text-emerald-100">
                €20
              </span>
            </button>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Experience More. <br />
            <span className="font-brand bg-gradient-to-r from-sky-200 via-amber-200 to-amber-400 bg-clip-text text-transparent">
              Discover Alanya.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-slate-200/90 font-normal leading-relaxed mb-8 max-w-2xl">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            {/* Primary CTA */}
            <button
              id="hero-primary-book-btn"
              onClick={onBookClick}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 text-sm sm:text-base font-bold tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2"
            >
              <span>{t.bookTour}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary CTA */}
            <button
              id="hero-secondary-explore-btn"
              onClick={onExploreClick}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm sm:text-base font-semibold backdrop-blur-md transition-all hover:border-white/40"
            >
              {t.exploreTours}
            </button>

            {/* Ask AI Assistant CTA */}
            <button
              id="hero-ask-ai-btn"
              onClick={() => openAiAssistant()}
              className="px-5 py-3.5 rounded-full bg-gradient-to-r from-amber-500/20 via-sky-600/20 to-blue-600/20 hover:from-amber-500/30 hover:to-sky-500/30 border border-amber-400/50 hover:border-amber-400 text-amber-300 hover:text-white text-sm sm:text-base font-semibold backdrop-blur-md transition-all flex items-center space-x-2 cursor-pointer shadow-lg shadow-amber-500/10"
            >
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>
                {currentLang === 'tr' ? 'AI Rehbere Sor' : currentLang === 'ru' ? 'Спросить AI' : currentLang === 'de' ? 'AI fragen' : currentLang === 'pl' ? 'Zapytaj AI' : 'Ask AI Guide'}
              </span>
            </button>

            {/* Floating WhatsApp CTA directly */}
            <a
              id="hero-whatsapp-btn"
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600/95 hover:bg-emerald-500 text-white text-sm sm:text-base font-bold shadow-lg shadow-emerald-700/30 transition-all flex items-center space-x-2 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.bookOnWhatsapp}</span>
            </a>
          </div>

          {/* Trust Line */}
          <div className="pt-6 border-t border-sky-900/40 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Easy Booking</span>
            </div>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Professional Service</span>
            </div>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400" />
              <span>Local Experts</span>
            </div>
            <span className="text-slate-500 hidden sm:inline">•</span>
            <div className="flex items-center space-x-1.5 text-emerald-300 font-medium">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 fill-emerald-400" />
              <span>WhatsApp: +905051422116</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
