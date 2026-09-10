import React, { useState, useMemo } from 'react';
import { 
  Clock, 
  Star, 
  ArrowRight, 
  MessageCircle, 
  SlidersHorizontal,
  CheckCircle2,
  Anchor,
  Flame,
  ShieldAlert,
  Users
} from 'lucide-react';
import { Tour, TourCategory, Language } from '../types';
import { TOURS_DATA } from '../data/toursData';
import { TRANSLATIONS } from '../data/translations';
import { generateTourInquiryLink } from '../utils/whatsapp';

interface TourMarketplaceProps {
  currentLang: Language;
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tourId: string) => void;
}

type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'duration';

const CATEGORIES: TourCategory[] = [
  'All',
  'Boat Tours',
  'Adventure',
  'Nature',
  'Culture',
  'Day Trips',
  'Private',
  'Family',
  'Luxury'
];

export const TourMarketplace: React.FC<TourMarketplaceProps> = ({
  currentLang,
  onSelectTour,
  onBookTour,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TourCategory>('All');
  const [selectedSort, setSelectedSort] = useState<SortOption>('recommended');

  const t = TRANSLATIONS[currentLang].marketplace;

  // Filter and Sort Tours
  const filteredTours = useMemo(() => {
    let list = [...TOURS_DATA];

    if (selectedCategory !== 'All') {
      if (selectedCategory === 'Private') {
        list = list.filter(tour => tour.category === 'Luxury' || tour.id === 'private-yacht');
      } else if (selectedCategory === 'Family') {
        list = list.filter(tour => 
          ['alanya-boat-tour', 'turkish-hamam-spa', 'green-canyon-manavgat', 'land-of-legends-night-show', 'alanya-city-tour', 'private-yacht'].includes(tour.id)
        );
      } else {
        list = list.filter(tour => tour.category === selectedCategory);
      }
    }

    if (selectedSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'duration') {
      list.sort((a, b) => {
        const getHours = (t: Tour) => {
          const m = t.duration.en.match(/(\d+(\.\d+)?)/);
          return m ? parseFloat(m[1]) : 5;
        };
        return getHours(a) - getHours(b);
      });
    }

    return list;
  }, [selectedCategory, selectedSort]);

  return (
    <section id="tours" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Anchor className="w-3.5 h-3.5 text-sky-600" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none no-scrollbar">
            {CATEGORIES.map(category => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  id={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0a192f] text-white shadow-md shadow-slate-900/15'
                      : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center justify-end space-x-2 shrink-0">
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            <select
              id="tours-sort-select"
              value={selectedSort}
              onChange={e => setSelectedSort(e.target.value as SortOption)}
              className="bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm rounded-xl px-3 py-2 font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none cursor-pointer shadow-sm"
            >
              <option value="recommended">{t.sortRecommended}</option>
              <option value="price-asc">{t.sortPriceAsc}</option>
              <option value="price-desc">{t.sortPriceDesc}</option>
              <option value="duration">{t.sortDuration}</option>
            </select>
          </div>
        </div>

        {/* Hotel Security Waiting Alert Reminder */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center space-x-3 text-amber-950">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
          <p className="text-xs sm:text-sm font-semibold leading-relaxed">
            {currentLang === 'tr' && 'Önemli Transfer Kuralı: Tur araçlarının otel bahçesine girmesi yasaktır. Transfer saatinde lütfen otel güvenlik kapısının/bariyerinin dışında bekleyiniz.'}
            {currentLang === 'en' && 'Important Transfer Rule: Hotel security prohibits transfer buses inside hotel premises. Please wait outside the main hotel security gate at pickup time.'}
            {currentLang === 'ru' && 'Важное правило трансфера: Автобусы не заезжают на территорию отеля. Пожалуйста, ожидайте трансфер снаружи перед шлагбаумом/будкой охраны.'}
            {currentLang === 'de' && 'Wichtige Transferregel: Transferbusse dürfen nicht aufs Hotelgelände fahren. Bitte warten Sie pünktlich außerhalb des Hotels an der Sicherheitsschranke.'}
            {currentLang === 'pl' && 'Ważna zasada transferu: Autobusy nie wjeżdżają na teren hotelu. Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.'}
            {currentLang === 'uk' && 'Важливе правило трансферу: Екскурсійні автобуси не заїжджають на територію готелю. Будь ласка, очікуйте трансфер біля шлагбаума/поста охорони готелю.'}
            {currentLang === 'ro' && 'Regulă importantă de transfer: Autocarele nu au voie în curtea hotelului. Vă rugăm să așteptați la poarta de securitate/barieră a hotelului.'}
            {currentLang === 'sr' && 'Važno pravilo transfera: Turistički autobusi ne ulaze u krug hotela. Molimo sačekajte ispred rampe / obezbeđenja hotela.'}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTours.map(tour => {
            const tourTitle = tour.title[currentLang] || tour.title.en || tour.title.tr || '';
            const tourDesc = tour.description[currentLang] || tour.description.en || tour.description.tr || '';
            const tourDuration = tour.duration[currentLang] || tour.duration.en || tour.duration.tr || '';
            const inquiryWhatsAppUrl = generateTourInquiryLink(tourTitle);
            const participantsFormatted = (tour.participantsCount || (tour.reviewsCount * 9 + 400)).toLocaleString();
            const participantsLabel = currentLang === 'tr' ? `${participantsFormatted}+ kişi katıldı` :
                                      currentLang === 'ru' ? `${participantsFormatted}+ участников` :
                                      currentLang === 'uk' ? `${participantsFormatted}+ учасників` :
                                      currentLang === 'de' ? `${participantsFormatted}+ Teilnehmer` :
                                      currentLang === 'pl' ? `${participantsFormatted}+ uczestników` :
                                      `${participantsFormatted}+ travelers`;
            const tourHighlights = tour.highlights[currentLang] || tour.highlights.en || tour.highlights.tr || [];

            return (
              <div
                key={tour.id}
                id={`tour-card-${tour.slug}`}
                className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={tour.image}
                    alt={tour.imageAlt?.[currentLang] || tour.imageAlt?.en || tourTitle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/alanya-boat-tour.jpg';
                    }}
                  />
                  {/* Category & Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#071325]/85 backdrop-blur-md text-amber-300 border border-amber-400/20">
                      {tour.category}
                    </span>
                    {tour.isFeatured && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-slate-950 flex items-center space-x-1 shadow-md">
                        <Flame className="w-3 h-3 fill-current" />
                        <span>VIP</span>
                      </span>
                    )}
                  </div>

                  {/* Participants Count Badge on Photo */}
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full text-xs font-extrabold bg-slate-950/85 text-emerald-300 border border-emerald-400/30 backdrop-blur-md flex items-center space-x-1.5 shadow-lg">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{participantsLabel}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3.5 right-3.5 px-2.5 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md flex items-center space-x-1 backdrop-blur-md">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{tour.rating.toFixed(1)}</span>
                    <span className="text-slate-400 font-normal text-[11px]">({tour.reviewsCount})</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex-1 p-6 flex flex-col justify-between text-left">
                  <div>
                    {/* Duration & Highlights */}
                    <div className="flex items-center space-x-2 text-xs text-slate-500 mb-2.5">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
                      <span className="font-semibold text-slate-700">{tourDuration}</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-medium">
                        {currentLang === 'tr' ? 'Otel Transferi (Güvenlik Dışında Bekleme)' : 
                         currentLang === 'uk' ? 'Трансфер з готелю (Очікування біля охорони)' :
                         currentLang === 'ru' ? 'Трансфер из отеля (Ожидание перед шлагбаумом)' :
                         'Hotel Transfer (Wait outside security)'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-sky-700 transition-colors line-clamp-1">
                      {tourTitle}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {tourDesc}
                    </p>

                    {/* Highlights bullet previews */}
                    <div className="space-y-1 mb-5">
                      {tourHighlights.slice(0, 2).map((hl, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Area */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-slate-500 uppercase tracking-wider block">
                          {t.from}
                        </span>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-extrabold text-slate-950">
                            {tour.currency}{tour.price}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            / {tour.pricePerPerson ? t.perPerson : t.perYacht}
                          </span>
                        </div>
                      </div>

                      {/* View Details Link */}
                      <button
                        id={`view-details-${tour.slug}`}
                        onClick={() => onSelectTour(tour)}
                        className="text-xs font-bold text-sky-700 hover:text-sky-900 underline underline-offset-4 cursor-pointer"
                      >
                        {t.viewDetails} →
                      </button>
                    </div>

                    {/* Action Buttons: Book Now + Direct WhatsApp */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        id={`book-now-${tour.slug}`}
                        onClick={() => onBookTour(tour.id)}
                        className="w-full py-2.5 px-3 rounded-xl bg-[#0a192f] hover:bg-[#071325] text-white text-xs font-bold tracking-wide transition-all shadow-sm flex items-center justify-center space-x-1"
                      >
                        <span>{t.bookNow}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <a
                        id={`whatsapp-${tour.slug}`}
                        href={inquiryWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center space-x-1"
                      >
                        <MessageCircle className="w-3 h-3 fill-current" />
                        <span>{t.whatsapp}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
