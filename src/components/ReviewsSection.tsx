import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { REVIEWS_DATA } from '../data/faqAndReviews';
import { TRANSLATIONS } from '../data/translations';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang]?.reviews || TRANSLATIONS[currentLang]?.reviewsSection || {
    badge: 'GUEST EXPERIENCES',
    title: 'What Our Guests Say',
    subtitle: 'Trusted by travelers from around the world who experienced the best of Alanya with Tripora.'
  };

  return (
    <section id="reviews" className="py-20 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.map((rev, idx) => {
            const comment = rev.comment[currentLang] || rev.comment.en || rev.comment.tr || '';
            const tour = rev.tour[currentLang] || rev.tour.en || rev.tour.tr || '';

            return (
              <div
                key={idx}
                id={`review-card-${idx}`}
                className="bg-white rounded-[26px] p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 pointer-events-none" />

                <div>
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                    "{comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-base">{rev.flag}</span>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {rev.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {rev.country} • <span className="text-sky-700 font-medium">{tour}</span>
                    </p>
                  </div>

                  <span className="text-[11px] text-slate-400 font-medium shrink-0">
                    {rev.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
