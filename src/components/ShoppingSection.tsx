import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Gem, 
  Sparkles, 
  Palette, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Car,
  X,
  Users
} from 'lucide-react';
import { Language } from '../types';
import { SHOPPING_SERVICES } from '../data/toursData';
import { TRANSLATIONS } from '../data/translations';
import { generateShoppingInquiryLink } from '../utils/whatsapp';

interface ShoppingSectionProps {
  currentLang: Language;
  onBookShoppingTour: () => void;
  selectedServiceId?: string | null;
  onClearSelectedService?: () => void;
}

export const ShoppingSection: React.FC<ShoppingSectionProps> = ({
  currentLang,
  onBookShoppingTour,
  selectedServiceId,
  onClearSelectedService
}) => {
  const t = TRANSLATIONS[currentLang].shoppingSection;
  const [activeModalService, setActiveModalService] = useState<string | null>(selectedServiceId || null);

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedServiceId) {
      setActiveModalService(selectedServiceId);
    }
  }, [selectedServiceId]);

  const services = [
    SHOPPING_SERVICES['free-shopping-tour'],
    SHOPPING_SERVICES['jewelry'],
    SHOPPING_SERVICES['butik'],
    SHOPPING_SERVICES['tattoo'],
  ];

  const handleCloseModal = () => {
    setActiveModalService(null);
    if (onClearSelectedService) {
      onClearSelectedService();
    }
  };

  const activeServiceObj = activeModalService ? SHOPPING_SERVICES[activeModalService] : null;

  return (
    <section id="shopping" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>

          <div className="mt-4 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <Car className="w-4 h-4 text-emerald-600" />
            <span>All shopping experiences include complimentary private hotel pickup</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map(service => {
            const isFree = service.isFree;
            const title = service.title[currentLang] || service.title.en || service.title.tr || '';
            const subtitle = service.subtitle[currentLang] || service.subtitle.en || service.subtitle.tr || '';
            const badge = service.badge[currentLang] || service.badge.en || service.badge.tr || '';
            const desc = service.description[currentLang] || service.description.en || service.description.tr || '';
            const priceLabel = service.priceLabel[currentLang] || service.priceLabel.en || service.priceLabel.tr || '';
            const ctaText = service.ctaText?.[currentLang] || service.ctaText?.en || 'Book Now';
            const whatsappText = service.whatsappText?.[currentLang] || service.whatsappText?.en || 'WhatsApp';
            const features = service.features[currentLang] || service.features.en || service.features.tr || [];
            const whatsappUrl = generateShoppingInquiryLink(title);

            return (
              <div
                key={service.id}
                id={`shopping-card-${service.id}`}
                className={`flex flex-col rounded-[26px] overflow-hidden border transition-all duration-300 transform hover:-translate-y-1 ${
                  isFree
                    ? 'bg-gradient-to-b from-emerald-50/50 to-white border-emerald-300 shadow-md shadow-emerald-500/10 hover:shadow-xl'
                    : service.id === 'jewelry'
                    ? 'bg-gradient-to-b from-[#0a192f]/5 to-white border-amber-300/80 shadow-md shadow-amber-500/10 hover:shadow-xl'
                    : 'bg-white border-slate-200/90 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Visual Area */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.imageAlt?.[currentLang] || service.imageAlt?.en || title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/shopping-tour.jpg';
                    }}
                  />
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-extrabold tracking-wider ${
                        isFree
                          ? 'bg-emerald-500 text-white shadow-md'
                          : service.id === 'jewelry'
                          ? 'bg-[#0a192f] text-amber-300 border border-amber-400/40'
                          : 'bg-slate-900/80 text-white backdrop-blur-md'
                      }`}
                    >
                      {badge}
                    </span>
                  </div>

                  {/* Participant Count on Photo */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-950/85 text-emerald-300 border border-emerald-400/40 backdrop-blur-sm flex items-center space-x-1 shadow-md">
                    <Users className="w-3 h-3 text-emerald-400" />
                    <span>
                      {service.id === 'jewelry' ? '3,800+' : service.id === 'butik' ? '5,100+' : service.id === 'tattoo' ? '2,100+' : '4,600+'} {currentLang === 'tr' ? 'kişi katıldı' : currentLang === 'uk' ? 'учасників' : 'visitors'}
                    </span>
                  </div>

                  {/* Free Price Stamp */}
                  {isFree && (
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-black shadow-lg">
                      FREE • €0
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex-1 p-6 flex flex-col justify-between text-left">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      {subtitle}
                    </span>

                    <h3 className="text-xl font-extrabold text-slate-950 mb-2">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {desc}
                    </p>

                    {/* Features preview */}
                    <div className="space-y-1.5 mb-6">
                      {features.slice(0, 3).map((feat: string, fIdx: number) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs text-slate-500 font-medium">Pricing</span>
                      <span
                        className={`text-sm font-extrabold ${
                          isFree ? 'text-emerald-700 text-lg font-black' : 'text-slate-900'
                        }`}
                      >
                        {priceLabel}
                      </span>
                    </div>

                    {/* CTA Buttons */}
                    {service.id === 'free-shopping-tour' ? (
                      <button
                        id={`book-${service.id}-btn`}
                        onClick={onBookShoppingTour}
                        className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <span>{ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        id={`explore-service-${service.id}`}
                        onClick={() => setActiveModalService(service.id)}
                        className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <span>{ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <a
                      id={`whatsapp-shopping-${service.id}`}
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center space-x-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                      <span>{whatsappText}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeServiceObj && (
        <div 
          id="shopping-service-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col text-left">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-60 sm:h-72 shrink-0 bg-slate-950">
              <img
                src={activeServiceObj.image}
                alt={activeServiceObj.imageAlt?.[currentLang] || activeServiceObj.imageAlt?.en || activeServiceObj.title[currentLang] || activeServiceObj.title.en}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/images/shopping-tour.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                  {activeServiceObj.subtitle[currentLang] || activeServiceObj.subtitle.en || ''}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">
                  {activeServiceObj.title[currentLang] || activeServiceObj.title.en || ''}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service & Transfer Fee</span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-black border border-emerald-300 shadow-sm">
                  FREE • €0 (Complimentary VIP Transfer)
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {activeServiceObj.description[currentLang] || activeServiceObj.description.en || ''}
              </p>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Service Highlights & Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(activeServiceObj.features[currentLang] || activeServiceObj.features.en || activeServiceObj.features.tr || []).map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center space-x-3 text-xs text-slate-600">
                <Car className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  Tripora Alanya arranges complimentary roundtrip transfer between your hotel and this venue at your preferred time.
                </span>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={generateShoppingInquiryLink(activeServiceObj.title[currentLang] || activeServiceObj.title.en)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold text-center flex items-center justify-center space-x-2 shadow-lg shadow-emerald-700/20"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire via WhatsApp (+905051422116)</span>
                </a>

                <button
                  onClick={handleCloseModal}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-bold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
