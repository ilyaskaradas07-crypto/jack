import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { FAQ_DATA } from '../data/faqAndReviews';
import { TRANSLATIONS } from '../data/translations';
import { createWhatsAppLink } from '../utils/whatsapp';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang]?.faq || TRANSLATIONS[currentLang]?.faqSection || {
    badge: 'EVERYTHING YOU NEED TO KNOW',
    title: 'Frequently Asked Questions',
    subtitle: 'Clear, direct answers about booking, pickups, airport transfers, shopping and customer care.'
  };
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    cats.add('All');
    FAQ_DATA.forEach(item => cats.add(item.category));
    return Array.from(cats);
  }, []);

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const q = (item.question[currentLang] || item.question.en || item.question.tr || '').toLowerCase();
      const a = (item.answer[currentLang] || item.answer.en || item.answer.tr || '').toLowerCase();
      const s = searchQuery.toLowerCase().trim();

      const matchesSearch = !s || q.includes(s) || a.includes(s);
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, currentLang]);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions (e.g. airport transfer, payment, booking)..."
              className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-sm text-slate-800 shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          {/* Category tabs */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0a192f] text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 17 Accordion Items */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const q = faq.question[currentLang] || faq.question.en || faq.question.tr || '';
            const a = faq.answer[currentLang] || faq.answer.en || faq.answer.tr || '';

            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {q}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-sky-600" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="mt-2 text-left">{a}</p>
                    {faq.category === 'Airport Transfer' && (
                      <div className="mt-3 inline-flex items-center space-x-2 px-3 py-1 bg-amber-100 border border-amber-300 rounded-full text-amber-900 text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>VIP Airport Transfer • Gazipaşa €50 / Antalya €80 (Mercedes Vito)</span>
                      </div>
                    )}
                    {faq.category === 'Shopping & Lifestyle' && (
                      <div className="mt-3 inline-flex items-center space-x-2 px-3 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-emerald-800 text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>100% FREE • €0 Complimentary Roundtrip Hotel Transfer & Consultation</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No questions found matching your search. Please message us directly on WhatsApp!
            </div>
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 p-6 rounded-3xl bg-[#0a192f] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-lg font-bold text-white">
              Still have a question?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              Our coordinators are online on WhatsApp (+90 505 142 21 16) to assist in your language.
            </p>
          </div>

          <a
            id="faq-ask-whatsapp-btn"
            href={createWhatsAppLink('Hello Tripora Alanya, I have a question about your tours.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center space-x-2 shadow-lg shadow-emerald-950/40"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
