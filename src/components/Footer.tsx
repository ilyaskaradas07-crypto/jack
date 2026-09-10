import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ArrowUp, 
  ShieldCheck, 
  Heart,
  X
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_WHATSAPP_NUMBER, BUSINESS_EMAIL, createWhatsAppLink } from '../utils/whatsapp';

interface FooterProps {
  currentLang: Language;
  onNavigate: (view: string, detailId?: string) => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onNavigate,
  onOpenReservation
}) => {
  const footerT = TRANSLATIONS[currentLang]?.footer || {};
  const t = {
    tagline: footerT.tagline || 'Experience More. Discover Alanya.',
    quickLinks: footerT.quickLinks || footerT.navTitle || (currentLang === 'tr' ? 'Hızlı Bağlantılar' : currentLang === 'de' ? 'Schnellzugriff' : currentLang === 'ru' ? 'Быстрые ссылки' : currentLang === 'pl' ? 'Szybkie linki' : 'Quick Links'),
    shoppingLinks: footerT.shoppingLinks || footerT.shoppingTitle || (currentLang === 'tr' ? 'Alışveriş Deneyimi' : currentLang === 'de' ? 'Shopping & Mode' : currentLang === 'ru' ? 'Шопинг и стиль' : currentLang === 'pl' ? 'Zakupy i styl życia' : 'Shopping & Lifestyle'),
    contactInfo: footerT.contactInfo || footerT.contactTitle || (currentLang === 'tr' ? 'İletişim Bilgileri' : currentLang === 'de' ? 'Kontaktinformationen' : currentLang === 'ru' ? 'Контактная информация' : currentLang === 'pl' ? 'Informacje kontaktowe' : 'Contact Information'),
    rights: footerT.rights || (currentLang === 'tr' ? 'Tüm hakları saklıdır.' : currentLang === 'de' ? 'Alle Rechte vorbehalten.' : currentLang === 'ru' ? 'Все права защищены.' : currentLang === 'pl' ? 'Wszelkie prawa zastrzeżone.' : 'All rights reserved.'),
    privacy: footerT.privacy || footerT.privacyPolicy || (currentLang === 'tr' ? 'Gizlilik Politikası' : currentLang === 'de' ? 'Datenschutz' : currentLang === 'ru' ? 'Конфиденциальность' : currentLang === 'pl' ? 'Polityka prywatności' : 'Privacy Policy'),
    terms: footerT.terms || footerT.termsConditions || (currentLang === 'tr' ? 'Kullanım Koşulları' : currentLang === 'de' ? 'AGB' : currentLang === 'ru' ? 'Условия обслуживания' : currentLang === 'pl' ? 'Regulamin usług' : 'Terms of Service')
  };
  const [legalModal, setLegalModal] = useState<{ title: string; content: string } | null>(null);
  const [adminTestResult, setAdminTestResult] = useState<{ loading: boolean; message: string; success?: boolean } | null>(null);

  const showAdminTest = typeof window !== 'undefined' && (
    window.location.search.includes('admin') || 
    window.location.search.includes('test')
  );

  const handleTestNotification = async () => {
    setAdminTestResult({ loading: true, message: 'Sending test notification to Telegram...' });
    try {
      const res = await fetch('/api/notify-visitor/test', { method: 'POST' });
      const data = await res.json();
      setAdminTestResult({
        loading: false,
        success: data.success,
        message: data.message || (data.success ? 'Test notification sent to Telegram!' : 'Failed to send.'),
      });
      setTimeout(() => {
        setAdminTestResult(null);
      }, 7000);
    } catch {
      setAdminTestResult({
        loading: false,
        success: false,
        message: 'Could not connect to /api/notify-visitor/test endpoint.',
      });
      setTimeout(() => {
        setAdminTestResult(null);
      }, 7000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPolicy = (type: 'privacy' | 'terms' | 'booking' | 'cookies') => {
    const policies = {
      privacy: {
        title: 'Privacy Policy — Tripora Alanya',
        content: `At Tripora Alanya, we respect and safeguard your privacy. 
When you submit an inquiry or reservation request through our website or WhatsApp (+905051422116), we collect only the necessary information (such as your name, hotel name, contact number, and tour preferences) exclusively to coordinate your excursions, airport transfers, and customer service during your stay in Alanya.
We never sell, rent, or distribute your personal data to unauthorized third parties. All communications are conducted securely.`
      },
      terms: {
        title: 'Terms & Conditions — Tripora Alanya',
        content: `Welcome to Tripora Alanya. By using our website and services, you agree to these terms:
1. Tour Reservations: All tour bookings are finalized and confirmed manually via WhatsApp communication with our official desk.
2. Inclusions & Exclusions: Specific inclusions (meals, transfers, equipment) and exclusions (drinks, personal photos) are detailed for each excursion.
3. Safety: All guests must follow safety instructions provided by licensed tour captains, drivers, and guides.
4. Changes & Weather: Excursions subject to sea or weather conditions (e.g. boat tours, paragliding) may be rescheduled for passenger safety.`
      },
      booking: {
        title: 'Booking & Cancellation Policy — Tripora Alanya',
        content: `Booking Policy:
- No online credit card charge is required on the website.
- Tour confirmations and pickup schedules are coordinated transparently with Tripora Alanya.
Cancellation & Rescheduling:
- If your holiday plans change, please notify us via WhatsApp at least 24 hours prior to the excursion for free rescheduling or cancellation.
- We strive to offer maximum holiday flexibility for our guests.`
      },
      cookies: {
        title: 'Cookie Policy — Tripora Alanya',
        content: `Our website utilizes minimal, essential client-side storage solely to preserve your language preference (EN, TR, RU, DE) and facilitate smooth interface navigation. We do not use intrusive third-party advertising cookies or cross-site tracking.`
      }
    };
    setLegalModal(policies[type]);
  };

  return (
    <footer id="main-footer" className="bg-[#050e1a] text-slate-300 pt-16 pb-12 border-t border-sky-950/80 text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md">
                <Compass className="w-5 h-5 text-slate-950" />
              </span>
              <span className="font-brand text-2xl font-bold tracking-wider text-white">
                TRIPORA <span className="text-amber-400 font-semibold">ALANYA</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.tagline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold">
                VIP Transfer (Gazipaşa €50 / Antalya €80)
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                Free Shopping, Jewelry & Boutique Transfer
              </span>
              <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold">
                €700 Private Yacht
              </span>
            </div>

            <div className="pt-2">
              <a
                id="footer-whatsapp-quick"
                href={createWhatsAppLink('Hello Tripora Alanya, I would like to make an inquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {BUSINESS_WHATSAPP_NUMBER}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Tours & Excursions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('party-boat')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-amber-300 font-medium flex items-center gap-1.5"
                >
                  <span>Alanya Party Boat Tour (22€)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('airport-transfer')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-amber-300 font-semibold"
                >
                  VIP Airport Transfer (50€ / 80€)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Why Travel With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Guest Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Shopping & Lifestyle */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.shoppingLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('shopping', 'free-shopping-tour')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-emerald-400 font-medium"
                >
                  Free Shopping Tour (€0)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shopping', 'jewelry')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-emerald-300 font-medium"
                >
                  Jewelry / Kuyumcu (Free Transfer)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shopping', 'butik')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-emerald-300 font-medium"
                >
                  Boutique & Fashion (Free Transfer)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('shopping', 'tattoo')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-emerald-300 font-medium"
                >
                  Tattoo Art Studio (Free Consultation)
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenReservation}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold hover:bg-amber-500/30 transition-colors cursor-pointer"
                >
                  Make a Reservation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.contactInfo}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Alanya / Antalya, Turkey</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>+90 505 142 21 16</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="break-all">{BUSINESS_EMAIL}</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <span>Mon – Sun: 08:00 – 22:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-sky-950/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} TRIPORA ALANYA. {t.rights}</p>
            <p className="text-[11px] text-slate-400 mt-1">
              All prices shown in Euros (€). Direct WhatsApp booking & confirmation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => openPolicy('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.privacy}
            </button>
            <span>•</span>
            <button
              onClick={() => openPolicy('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.terms}
            </button>
            <span>•</span>
            <button
              onClick={() => openPolicy('booking')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Booking Policy
            </button>
            <span>•</span>
            <button
              onClick={() => openPolicy('cookies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookies
            </button>

            {showAdminTest && (
              <>
                <span>•</span>
                <button
                  id="admin-telegram-test-btn"
                  onClick={handleTestNotification}
                  disabled={adminTestResult?.loading}
                  className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 transition-colors cursor-pointer font-mono text-[10px]"
                  title="Test Telegram Notification System"
                >
                  {adminTestResult?.loading ? 'Sending Test...' : '🧪 Test Telegram Alert'}
                </button>
              </>
            )}
          </div>

          {/* Admin Test Toast / Result Feedback */}
          {adminTestResult && (
            <div
              className={`text-xs px-3 py-1.5 rounded-lg border flex items-center gap-2 ${
                adminTestResult.success
                  ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300'
                  : 'bg-amber-950/80 border-amber-500/40 text-amber-300'
              }`}
            >
              <span>{adminTestResult.success ? '✅' : 'ℹ️'}</span>
              <span>{adminTestResult.message}</span>
            </div>
          )}

          {/* Scroll to Top */}
          <button
            id="scroll-to-top-btn"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Legal Modal */}
      {legalModal && (
        <div
          id="legal-policy-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 text-white text-left shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold text-amber-400 mb-4">
              {legalModal.title}
            </h3>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line max-h-[60vh] overflow-y-auto pr-2">
              {legalModal.content}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
