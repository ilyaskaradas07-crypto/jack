import React from 'react';
import { 
  Award, 
  CalendarCheck, 
  Compass, 
  MapPin, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang]?.whyChooseUs || TRANSLATIONS.en.whyChooseUs;
  const items = t.items || TRANSLATIONS.en.whyChooseUs.items || [];

  const icons = [Award, CalendarCheck, Sparkles, Compass, MessageCircle];
  const accents = [
    'border-amber-500/30 bg-amber-500/10 text-amber-400',
    'border-sky-500/30 bg-sky-500/10 text-sky-400',
    'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
    'border-teal-500/30 bg-teal-500/10 text-teal-400',
  ];

  return (
    <section id="about" className="py-20 bg-[#071325] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item: { title: string; desc: string }, idx: number) => {
            const Icon = icons[idx % icons.length];
            const accent = accents[idx % accents.length];

            return (
              <div
                key={idx}
                id={`why-choose-card-${idx}`}
                className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-amber-400/30 transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${accent} mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center space-x-1.5 text-[11px] font-semibold text-amber-400/80">
                  <span>Tripora Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
