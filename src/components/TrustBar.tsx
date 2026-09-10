import React from 'react';
import { CalendarCheck, Award, Compass, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface TrustBarProps {
  currentLang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang]?.trustBar || TRANSLATIONS.en.trustBar;

  const items = [
    {
      id: 'trust-easy-booking',
      icon: CalendarCheck,
      title: t.easyBooking,
      subtitle: t.easyBookingSub,
      accent: 'border-sky-500/20 text-sky-400 bg-sky-500/10'
    },
    {
      id: 'trust-pro-service',
      icon: Award,
      title: t.professionalService,
      subtitle: t.professionalServiceSub,
      accent: 'border-amber-500/20 text-amber-400 bg-amber-500/10'
    },
    {
      id: 'trust-local-experts',
      icon: Compass,
      title: t.localExperts,
      subtitle: t.localExpertsSub,
      accent: 'border-emerald-500/20 text-emerald-400 bg-emerald-500/10'
    },
    {
      id: 'trust-whatsapp-support',
      icon: MessageCircle,
      title: t.whatsappSupport,
      subtitle: t.whatsappSupportSub,
      accent: 'border-teal-500/20 text-teal-400 bg-teal-500/10'
    }
  ];

  return (
    <section 
      id="trust-bar" 
      className="relative z-20 bg-[#071325] border-y border-sky-950/60 py-6 sm:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="flex items-center space-x-3.5 p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border ${item.accent}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
