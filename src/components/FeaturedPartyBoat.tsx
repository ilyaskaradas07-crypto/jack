import React, { useState } from 'react';
import { 
  Ship, 
  Sparkles, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Star, 
  Users, 
  Waves, 
  Utensils, 
  ShieldCheck, 
  Bus, 
  Music,
  ArrowRight,
  PartyPopper
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { createWhatsAppLink } from '../utils/whatsapp';

interface FeaturedPartyBoatProps {
  currentLang: Language;
  onBookPartyBoat: () => void;
  onViewDetails?: () => void;
}

const GALLERY_IMAGES = [
  {
    url: '/assets/images/boat-party-foam.jpg',
    title: 'Legendary Foam Party on Upper Deck',
    tag: 'Foam Party'
  },
  {
    url: '/assets/images/boat-party-pirate.jpg',
    title: 'Multi-Deck Pirate Party Ship in Alanya',
    tag: 'Pirate Flagship'
  },
  {
    url: '/assets/images/boat-party-main.jpg',
    title: 'Alanya Coastline & Sea Caves Cruise',
    tag: 'Party Cruise'
  },
  {
    url: '/assets/images/boat-party-dance.jpg',
    title: 'Live DJ & Dance Entertainment',
    tag: 'DJ & Music'
  },
  {
    url: '/assets/images/boat-party-swim.jpg',
    title: 'Swimming in Crystal Turquoise Waters',
    tag: 'Swim Stops'
  },
  {
    url: '/assets/images/baba-boat-tour.jpeg',
    title: 'Legendary Baba 07 Multi-Deck Flagship',
    tag: 'Baba 07'
  }
];

export const FeaturedPartyBoat: React.FC<FeaturedPartyBoatProps> = ({
  currentLang,
  onBookPartyBoat,
  onViewDetails
}) => {
  const t = TRANSLATIONS[currentLang]?.partyBoatSection || TRANSLATIONS.en.partyBoatSection;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const getWhatsAppMessage = () => {
    switch (currentLang) {
      case 'tr':
        return 'Merhaba Tripora Alanya, 22€ olan Alanya Korsan Parti Tekne Turu (Baba 07) hakkında bilgi almak ve rezervasyon yaptırmak istiyorum.';
      case 'ru':
        return 'Здравствуйте, Tripora Alanya! Я хочу забронировать пиратскую вечеринку на корабле Baba 07 за 22€. Подскажите свободные даты?';
      case 'de':
        return 'Hallo Tripora Alanya, ich möchte die Alanya Party-Piratenschiff Tour (Baba 07) für 22€ pro Person buchen. Welche Termine sind frei?';
      case 'pl':
        return 'Dzień dobry Tripora Alanya, chciałbym zarezerwować Imprezowy Rejs Statkiem Pirackim Baba 07 za 22€. Jakie są dostępne terminy?';
      case 'uk':
        return 'Доброго дня, Tripora Alanya! Я хочу забронювати піратську вечірку на кораблі Baba 07 за 22€. Які є вільні дати?';
      default:
        return 'Hello Tripora Alanya, I would like to book the Alanya Party Boat Tour (Baba 07) for €22 per person. Could you assist me with availability?';
    }
  };

  const handleWhatsAppInquiry = () => {
    const url = createWhatsAppLink(getWhatsAppMessage());
    window.open(url, '_blank');
  };

  return (
    <section id="party-boat" className="relative py-20 bg-gradient-to-b from-sky-950 via-slate-900 to-sky-950 overflow-hidden text-white">
      {/* Anchor for backward compatibility with private-tours links */}
      <div id="private-tours" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Background Decorative Waves & Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm shadow-amber-500/20 animate-pulse">
            <PartyPopper className="w-4 h-4 text-amber-400" />
            <span>{t.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t.title}
          </h2>

          <p className="max-w-3xl text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Main Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch bg-slate-900/80 border border-sky-800/40 rounded-3xl p-5 sm:p-8 md:p-10 backdrop-blur-md shadow-2xl">
          
          {/* Left: Interactive Media Gallery */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Primary Main Image Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner group">
              <img
                src={GALLERY_IMAGES[activeImageIndex].url}
                alt={GALLERY_IMAGES[activeImageIndex].title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="eager"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Floating Top Left Pill */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide shadow-lg flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5" />
                  BABA 07 PIRATE CRUISE
                </span>
                <span className="bg-sky-600/90 text-white backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {GALLERY_IMAGES[activeImageIndex].tag}
                </span>
              </div>

              {/* Floating Top Right Rating */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>4.9 / 5.0</span>
                <span className="text-slate-400 font-normal">(318 reviews)</span>
              </div>

              {/* Bottom Caption & Highlights inside image */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Daily Departure 10:00 • Alanya Harbor</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Alanya Castle • Red Tower • Pirate, Lovers & Phosphoric Caves
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 self-start sm:self-auto">
                  <Users className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-xs text-slate-200 font-medium">4,120+ happy guests</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-200 text-left group ${
                    activeImageIndex === idx 
                      ? 'border-amber-400 shadow-md shadow-amber-500/30 scale-[1.02]' 
                      : 'border-white/10 hover:border-white/40 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-1 left-1 right-1 text-[10px] text-white font-semibold truncate bg-black/60 px-1 py-0.5 rounded text-center">
                    {img.tag}
                  </div>
                </button>
              ))}
            </div>

            {/* Quick Benefits Bar Under Gallery */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="bg-sky-950/60 border border-sky-800/40 rounded-xl p-2.5">
                <Music className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">Live DJ & Party</div>
                <div className="text-[10px] text-slate-400">Foam Party on Deck</div>
              </div>
              <div className="bg-sky-950/60 border border-sky-800/40 rounded-xl p-2.5">
                <Utensils className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">Open Buffet Lunch</div>
                <div className="text-[10px] text-slate-400">BBQ & Soft Drinks</div>
              </div>
              <div className="bg-sky-950/60 border border-sky-800/40 rounded-xl p-2.5">
                <Bus className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">Hotel Transfers</div>
                <div className="text-[10px] text-slate-400">Door-to-door included</div>
              </div>
            </div>

          </div>

          {/* Right: Key Details, Inclusions & Instant Booking CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Price & Value Proposition Box */}
            <div className="bg-gradient-to-br from-amber-500/15 via-sky-900/30 to-slate-900 border border-amber-500/30 rounded-2xl p-5 shadow-lg">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                  SPECIAL ONLINE RATE
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  {t.badgeDuration || '6 Hours • 10:00 - 15:30'}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                  {t.price}
                </span>
                <span className="text-sm sm:text-base text-slate-300 font-medium">
                  / {t.priceUnit}
                </span>
                <span className="ml-auto text-xs text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  ✓ NO PREPAYMENT NEEDED
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Pay conveniently on the day of the tour. Free cancellation up to 24 hours prior.
              </p>
            </div>

            {/* Tour Highlights List */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>WHAT MAKES THIS CRUISE UNMISSABLE:</span>
              </h4>

              <div className="space-y-2">
                {t.features && t.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 mt-0.5 text-amber-300 font-bold text-xs">
                      ✓
                    </div>
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Food & Hotel Transfer Info Pill */}
            <div className="bg-sky-950/70 border border-sky-700/40 rounded-xl p-3.5 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <Utensils className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hospitality || 'Open-buffet lunch (grilled BBQ chicken, pasta, salads) & soft drinks included.'}</span>
              </div>
              <div className="flex items-center gap-2 text-sky-200">
                <Bus className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.transferNote || 'Free pickup from all Alanya, Mahmutlar, Oba, Konakli & Avsallar hotels.'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                id="btn-book-party-boat-main"
                onClick={onBookPartyBoat}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-base uppercase tracking-wider shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <PartyPopper className="w-5 h-5" />
                <span>{t.ctaBook || 'BOOK PARTY BOAT (22€)'}</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  id="btn-party-boat-whatsapp"
                  onClick={handleWhatsAppInquiry}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wide shadow-md hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.ctaWhatsapp || 'WHATSAPP İLE SOR'}</span>
                </button>

                {onViewDetails && (
                  <button
                    id="btn-party-boat-details"
                    onClick={onViewDetails}
                    className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Ship className="w-4 h-4 text-sky-400" />
                    <span>{t.ctaDetails || 'TUR DETAYLARINI GÖR'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Trust Footnote */}
            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1 border-t border-white/10">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Official TURSAB Partner
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Waves className="w-3.5 h-3.5 text-sky-400" />
                100% Sea Safety Insured
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
