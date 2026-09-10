import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Menu, 
  X, 
  ChevronDown, 
  Compass, 
  Sparkles, 
  Gem, 
  ShoppingBag, 
  Palette, 
  Car, 
  Anchor,
  Ship
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_WHATSAPP_NUMBER, createWhatsAppLink } from '../utils/whatsapp';
import { openAiAssistant } from '../utils/aiAssistant';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenReservation: (tourId?: string) => void;
  activeSection: string;
  onNavigate: (view: string, detailId?: string) => void;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' },
  { code: 'ro', label: 'Română', flag: '🇷🇴' },
  { code: 'sr', label: 'Srpski', flag: '🇷🇸' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenReservation,
  activeSection,
  onNavigate
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shoppingMenuOpen, setShoppingMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = TRANSLATIONS[currentLang]?.nav || TRANSLATIONS.en.nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setMobileMenuOpen(false);
    setShoppingMenuOpen(false);
    onNavigate(section);
  };

  const handleShoppingItemClick = (serviceId: string) => {
    setMobileMenuOpen(false);
    setShoppingMenuOpen(false);
    onNavigate('shopping', serviceId);
  };

  const currentLangObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071325]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3 border-b border-sky-950/40'
          : 'bg-gradient-to-b from-[#071325]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex flex-col text-left group focus:outline-none"
        >
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
              <Compass className="w-5 h-5 text-slate-950" />
            </span>
            <span className="font-brand text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors">
              TRIPORA <span className="text-amber-400 font-semibold text-lg sm:text-xl">ALANYA</span>
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-sky-200/70 tracking-widest uppercase ml-10 hidden sm:inline">
            Experience More • Discover Alanya
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-200">
          <button
            id="nav-home"
            onClick={() => handleNavClick('home')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeSection === 'home' ? 'text-amber-400 bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            {t.home}
          </button>
          
          <button
            id="nav-tours"
            onClick={() => handleNavClick('tours')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeSection === 'tours' ? 'text-amber-400 bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            {t.tours}
          </button>

          <button
            id="nav-hamam"
            onClick={() => handleNavClick('hamam')}
            className={`px-3 py-1.5 rounded-full transition-colors flex items-center space-x-1.5 ${
              activeSection === 'hamam' ? 'text-amber-400 bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Hamam & Spa</span>
            <span className="text-[10px] font-bold px-1.5 py-0.2 bg-emerald-500/30 text-emerald-300 rounded border border-emerald-400/40">
              20€
            </span>
          </button>

          <button
            id="nav-party-boat"
            onClick={() => handleNavClick('party-boat')}
            className={`px-3 py-1.5 rounded-full transition-colors flex items-center space-x-1.5 ${
              activeSection === 'party-boat' || activeSection === 'private-tours' ? 'text-amber-400 bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            <Ship className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.partyBoat || 'Party Boat'}</span>
            <span className="text-[10px] font-bold px-1.5 py-0.2 bg-amber-500/30 text-amber-300 rounded border border-amber-400/40">
              22€
            </span>
          </button>

          {/* Shopping Mega Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShoppingMenuOpen(true)}
            onMouseLeave={() => setShoppingMenuOpen(false)}
          >
            <button
              id="nav-shopping-dropdown-btn"
              onClick={() => handleNavClick('shopping')}
              className={`px-3 py-1.5 rounded-full transition-colors flex items-center space-x-1 ${
                activeSection === 'shopping' ? 'text-amber-400 bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{t.shopping}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {shoppingMenuOpen && (
              <div 
                id="shopping-mega-menu"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-[#0a192f] border border-amber-500/20 rounded-2xl shadow-2xl shadow-black/60 p-3 grid gap-1.5 text-left"
              >
                <button
                  id="mega-free-shopping"
                  onClick={() => handleShoppingItemClick('free-shopping-tour')}
                  className="p-2.5 rounded-xl hover:bg-sky-950/60 transition-colors flex items-start space-x-3 text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-semibold text-white group-hover:text-emerald-300 text-sm">
                        {t.freeShoppingTour}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 bg-emerald-500/30 text-emerald-300 rounded border border-emerald-400/40">
                        FREE
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Free hotel shuttle & local bazaar shopping</p>
                  </div>
                </button>

                <button
                  id="mega-jewelry"
                  onClick={() => handleShoppingItemClick('jewelry')}
                  className="p-2.5 rounded-xl hover:bg-sky-950/60 transition-colors flex items-start space-x-3 text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Gem className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-semibold text-white group-hover:text-amber-300 text-sm">
                        {t.jewelry}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 bg-emerald-500/30 text-emerald-300 rounded border border-emerald-400/40">
                        FREE
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Fine Turkish gold & precious diamonds</p>
                  </div>
                </button>

                <button
                  id="mega-butik"
                  onClick={() => handleShoppingItemClick('butik')}
                  className="p-2.5 rounded-xl hover:bg-sky-950/60 transition-colors flex items-start space-x-3 text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-semibold text-white group-hover:text-sky-300 text-sm">
                        {t.butik}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 bg-emerald-500/30 text-emerald-300 rounded border border-emerald-400/40">
                        FREE
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Mediterranean fashion, resortwear & leather</p>
                  </div>
                </button>

                <button
                  id="mega-tattoo"
                  onClick={() => handleShoppingItemClick('tattoo')}
                  className="p-2.5 rounded-xl hover:bg-sky-950/60 transition-colors flex items-start space-x-3 text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                    <Palette className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <span className="font-semibold text-white group-hover:text-indigo-300 text-sm">
                        {t.tattoo}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 bg-emerald-500/30 text-emerald-300 rounded border border-emerald-400/40">
                        FREE
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">Custom holiday art in hygienic sterile studio</p>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            id="nav-transfer"
            onClick={() => handleNavClick('airport-transfer')}
            className={`px-3 py-1.5 rounded-full transition-colors flex items-center space-x-1.5 ${
              activeSection === 'airport-transfer' ? 'text-amber-400 bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            <Car className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.airportTransfer}</span>
            <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-400/40 rounded-full">
              50€ / 80€
            </span>
          </button>

          <button
            id="nav-reviews"
            onClick={() => handleNavClick('reviews')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeSection === 'reviews' ? 'text-amber-400 bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            {t.reviews}
          </button>

          <button
            id="nav-faq"
            onClick={() => handleNavClick('faq')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeSection === 'faq' ? 'text-amber-400 bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            {t.faq}
          </button>

          <button
            id="nav-contact"
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-1.5 rounded-full transition-colors ${
              activeSection === 'contact' ? 'text-amber-400 bg-white/10 font-semibold' : 'hover:text-white hover:bg-white/5'
            }`}
          >
            {t.contact}
          </button>
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              id="lang-selector-btn"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold transition-colors"
            >
              <span>{currentLangObj.flag}</span>
              <span className="uppercase">{currentLangObj.code}</span>
              <ChevronDown className="w-3 h-3 text-slate-300" />
            </button>

            {langMenuOpen && (
              <div 
                id="lang-dropdown-menu"
                className="absolute right-0 mt-2 w-36 bg-[#0a192f] border border-sky-900 rounded-xl shadow-xl p-1 z-50 text-left"
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    id={`lang-opt-${lang.code}`}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-2 px-3 py-2 text-xs rounded-lg text-left transition-colors ${
                      currentLang === lang.code
                        ? 'bg-amber-500/20 text-amber-300 font-semibold'
                        : 'text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* AI Travel Assistant Button */}
          <button
            id="nav-ai-assistant-btn"
            onClick={() => openAiAssistant()}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-sky-500/15 to-blue-500/20 border border-amber-400/40 hover:border-amber-400 text-amber-300 hover:text-white text-xs font-bold transition-all shadow-sm shadow-amber-500/10 cursor-pointer"
            title="Tripora AI Travel Assistant"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="hidden sm:inline">AI Asistan</span>
            <span className="sm:hidden">AI</span>
          </button>

          {/* WhatsApp Quick Link */}
          <a
            id="nav-whatsapp-btn"
            href={createWhatsAppLink('Hello Tripora Alanya, I would like to inquire about tours and experiences.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm shadow-emerald-700/30"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>{t.whatsapp}</span>
          </a>

          {/* BOOK NOW CTA */}
          <button
            id="nav-book-now-btn"
            onClick={() => onOpenReservation()}
            className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {t.bookNow}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#071325]/98 border-b border-sky-900/60 p-5 shadow-2xl backdrop-blur-xl max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-2 text-base font-medium text-slate-200">
            {/* AI Assistant Mobile Action */}
            <button
              id="mobile-nav-ai-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                openAiAssistant();
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500/20 via-sky-900/40 to-[#0c1f38] border border-amber-400/40 text-left cursor-pointer mb-1 shadow-md shadow-amber-500/10"
            >
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Tripora AI Asistan</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">Online</span>
                  </div>
                  <p className="text-[11px] text-slate-300">Anında Alanya tur & fiyat bilgisi</p>
                </div>
              </div>
              <span className="text-xs text-amber-300 font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-400/30">Sor →</span>
            </button>

            <button
              id="mobile-nav-home"
              onClick={() => handleNavClick('home')}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              {t.home}
            </button>
            <button
              id="mobile-nav-tours"
              onClick={() => handleNavClick('tours')}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              {t.tours}
            </button>
            <button
              id="mobile-nav-hamam"
              onClick={() => handleNavClick('hamam')}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-emerald-300 font-semibold"
            >
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Hamam & Spa</span>
              </div>
              <span className="text-xs bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 px-2 py-0.5 rounded-full font-extrabold">
                20€
              </span>
            </button>
            <button
              id="mobile-nav-party-boat"
              onClick={() => handleNavClick('party-boat')}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-amber-300 font-semibold"
            >
              <div className="flex items-center space-x-2">
                <Ship className="w-4 h-4 text-amber-400" />
                <span>{t.partyBoat || 'Party Boat Tour'}</span>
              </div>
              <span className="text-xs bg-amber-500/25 border border-amber-400/40 text-amber-300 px-2 py-0.5 rounded-full font-extrabold">
                22€
              </span>
            </button>

            {/* Mobile Shopping Submenu */}
            <div className="border-t border-b border-sky-900/50 py-2 my-1">
              <button
                id="mobile-nav-shopping-header"
                onClick={() => handleNavClick('shopping')}
                className="text-left font-bold text-amber-400 px-4 py-1.5 flex items-center space-x-2"
              >
                <span>{t.shopping}</span>
              </button>
              <div className="pl-6 space-y-1 mt-1">
                <button
                  id="mobile-nav-free-shopping"
                  onClick={() => handleShoppingItemClick('free-shopping-tour')}
                  className="w-full text-left py-2 px-3 text-sm text-emerald-300 hover:bg-white/5 rounded-lg flex items-center justify-between"
                >
                  <span>{t.freeShoppingTour}</span>
                  <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded font-bold border border-emerald-400/40">
                    FREE • €0
                  </span>
                </button>
                <button
                  id="mobile-nav-jewelry"
                  onClick={() => handleShoppingItemClick('jewelry')}
                  className="w-full text-left py-2 px-3 text-sm text-slate-300 hover:bg-white/5 rounded-lg flex items-center justify-between"
                >
                  <span>{t.jewelry}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold border border-emerald-400/40">
                    FREE • €0
                  </span>
                </button>
                <button
                  id="mobile-nav-butik"
                  onClick={() => handleShoppingItemClick('butik')}
                  className="w-full text-left py-2 px-3 text-sm text-slate-300 hover:bg-white/5 rounded-lg flex items-center justify-between"
                >
                  <span>{t.butik}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold border border-emerald-400/40">
                    FREE • €0
                  </span>
                </button>
                <button
                  id="mobile-nav-tattoo"
                  onClick={() => handleShoppingItemClick('tattoo')}
                  className="w-full text-left py-2 px-3 text-sm text-slate-300 hover:bg-white/5 rounded-lg flex items-center justify-between"
                >
                  <span>{t.tattoo}</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold border border-emerald-400/40">
                    FREE • €0
                  </span>
                </button>
              </div>
            </div>

            <button
              id="mobile-nav-transfer"
              onClick={() => handleNavClick('airport-transfer')}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span>{t.airportTransfer}</span>
              <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-400/40 px-2 py-0.5 rounded-full font-bold">
                50€ / 80€ VIP
              </span>
            </button>
            <button
              id="mobile-nav-reviews"
              onClick={() => handleNavClick('reviews')}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              {t.reviews}
            </button>
            <button
              id="mobile-nav-faq"
              onClick={() => handleNavClick('faq')}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              {t.faq}
            </button>
            <button
              id="mobile-nav-contact"
              onClick={() => handleNavClick('contact')}
              className="text-left px-4 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              {t.contact}
            </button>

            {/* Mobile Language buttons */}
            <div className="pt-3 border-t border-sky-900/50 px-2 space-y-1.5">
              <span className="text-[11px] font-semibold text-slate-400 block">Select Language / Мова / Limba / Jezik:</span>
              <div className="grid grid-cols-4 gap-1.5">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    id={`mobile-lang-${lang.code}`}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1 ${
                      currentLang === lang.code
                        ? 'bg-amber-400 text-slate-950 shadow-sm'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="uppercase">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile WhatsApp Button */}
            <a
              id="mobile-drawer-whatsapp-btn"
              href={createWhatsAppLink('Hello Tripora Alanya, I would like to make a reservation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 mt-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/40"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WHATSAPP (+90 505 142 21 16)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
