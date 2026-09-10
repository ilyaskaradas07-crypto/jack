import React, { useEffect, useState } from 'react';
import { 
  X, 
  Clock, 
  MapPin, 
  Star, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  Info, 
  ArrowRight, 
  MessageCircle, 
  Car,
  Compass,
  Camera,
  Users,
  ShieldAlert
} from 'lucide-react';
import { Tour, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { generateTourInquiryLink } from '../utils/whatsapp';

interface TourDetailModalProps {
  tour: Tour | null;
  currentLang: Language;
  onClose: () => void;
  onBook: (tourId: string) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  currentLang,
  onClose,
  onBook
}) => {
  const [activeImage, setActiveImage] = useState<string>(tour?.image || '');

  useEffect(() => {
    if (tour) {
      setActiveImage(tour.image);
    }
  }, [tour]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (tour) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [tour, onClose]);

  if (!tour) return null;

  const detailT = TRANSLATIONS[currentLang]?.tourDetail || {};
  const t = {
    perPerson: detailT.perPerson || (currentLang === 'tr' ? 'kişi başı' : currentLang === 'de' ? 'pro Person' : currentLang === 'ru' ? 'за человека' : currentLang === 'pl' ? 'za osobę' : 'per person'),
    perYacht: detailT.perYacht || (currentLang === 'tr' ? 'özel yat' : currentLang === 'de' ? 'pro Yacht' : currentLang === 'ru' ? 'за яхту' : currentLang === 'pl' ? 'za jacht' : 'private yacht'),
    bookTour: detailT.bookTour || (currentLang === 'tr' ? 'HEMEN REZERVASYON YAP' : currentLang === 'de' ? 'JETZT BUCHEN' : currentLang === 'ru' ? 'ЗАБРОНИРОВАТЬ ТУР' : currentLang === 'pl' ? 'ZAREZERWUJ TERAZ' : 'BOOK THIS TOUR'),
    whatsappInquire: detailT.whatsappInquire || (currentLang === 'tr' ? 'WHATSAPP\'TAN BİLGİ AL' : currentLang === 'de' ? 'AUF WHATSAPP ANFRAGEN' : currentLang === 'ru' ? 'СПРОСИТЬ В WHATSAPP' : currentLang === 'pl' ? 'ZAPYTAJ NA WHATSAPP' : 'INQUIRE ON WHATSAPP'),
    overview: detailT.overview || (currentLang === 'tr' ? 'Tur Özeti' : currentLang === 'de' ? 'Überblick' : currentLang === 'ru' ? 'Обзор тура' : currentLang === 'pl' ? 'Opis wycieczki' : 'Tour Overview'),
    highlights: detailT.highlights || (currentLang === 'tr' ? 'Öne Çıkanlar' : currentLang === 'de' ? 'Highlights' : currentLang === 'ru' ? 'Главные моменты' : currentLang === 'pl' ? 'Najważniejsze punkty' : 'Highlights'),
    included: detailT.included || (currentLang === 'tr' ? 'Fiyata Dahil Olanlar' : currentLang === 'de' ? 'Inklusive' : currentLang === 'ru' ? 'Включено' : currentLang === 'pl' ? 'W cenie wycieczki' : 'What is Included'),
    excluded: detailT.excluded || (currentLang === 'tr' ? 'Dahil Olmayanlar' : currentLang === 'de' ? 'Nicht Inklusive' : currentLang === 'ru' ? 'Не включено' : currentLang === 'pl' ? 'Cena nie obejmuje' : 'What is Excluded'),
    itinerary: detailT.itinerary || (currentLang === 'tr' ? 'Tur Programı' : currentLang === 'de' ? 'Ablauf' : currentLang === 'ru' ? 'Программа' : currentLang === 'pl' ? 'Plan wycieczki' : 'Tour Itinerary'),
    pickup: detailT.pickup || (currentLang === 'tr' ? 'Otelden Alış & Bırakılış' : currentLang === 'de' ? 'Hotelabholung' : currentLang === 'ru' ? 'Трансфер из отеля' : currentLang === 'pl' ? 'Odbiór i powrót do hotelu' : 'Hotel Pickup & Transfer'),
    whatToBring: detailT.whatToBring || (currentLang === 'tr' ? 'Önemli Bilgiler & Yanınıza Almanız Gerekenler' : currentLang === 'de' ? 'Wichtige Hinweise & Was Sie mitbringen sollten' : currentLang === 'ru' ? 'Что взять с собой' : currentLang === 'pl' ? 'Ważne informacje i co zabrać' : 'Important Information & What to Bring')
  };
  const title = tour.title[currentLang] || tour.title.en || tour.title.tr || '';
  const desc = tour.description[currentLang] || tour.description.en || tour.description.tr || '';
  const duration = tour.duration[currentLang] || tour.duration.en || tour.duration.tr || '';
  const destination = tour.destination ? (tour.destination[currentLang] || tour.destination.en || 'Alanya, Antalya, Turkey') : 'Alanya, Antalya, Turkey';
  const highlights = tour.highlights[currentLang] || tour.highlights.en || tour.highlights.tr || [];
  const included = tour.included[currentLang] || tour.included.en || tour.included.tr || [];
  const excluded = tour.notIncluded ? (tour.notIncluded[currentLang] || tour.notIncluded.en || []) : [];
  const whatToBring = tour.importantInfo ? (tour.importantInfo[currentLang] || tour.importantInfo.en || []) : [];
  const pickup = tour.pickupInfo[currentLang] || tour.pickupInfo.en || tour.pickupInfo.tr || '';
  const itinerary = tour.itinerary ? (tour.itinerary[currentLang] || tour.itinerary.en || []) : [];

  const whatsappInquiryUrl = generateTourInquiryLink(title);

  return (
    <div
      id="tour-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="tour-detail-modal-card"
        className="relative w-full max-w-4xl bg-white rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 my-auto flex flex-col max-h-[92vh] text-left"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-tour-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Section */}
        <div className="relative h-64 sm:h-80 lg:h-96 w-full shrink-0 bg-slate-900">
          <img
            src={activeImage || tour.image}
            alt={tour.imageAlt?.[currentLang] || title}
            className="w-full h-full object-cover transition-all duration-300"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/images/alanya-boat-tour.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Overlaid Badges and Title */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-slate-950">
                {tour.category}
              </span>
              <div className="flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{tour.rating.toFixed(1)}</span>
                <span className="text-slate-300">({tour.reviewsCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500 text-slate-950 shadow-md">
                <Users className="w-3.5 h-3.5" />
                <span>
                  {(tour.participantsCount || (tour.reviewsCount * 9 + 400)).toLocaleString()}+ {currentLang === 'tr' ? 'kişi katıldı' : currentLang === 'ru' ? 'участников' : currentLang === 'de' ? 'Teilnehmer' : currentLang === 'pl' ? 'uczestników' : 'travelers'}
                </span>
              </div>
              <div className="flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/80 backdrop-blur-md">
                <Car className="w-3.5 h-3.5" />
                <span>Hotel Transfer Included</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{duration}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{destination}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Top Pricing & Sticky CTA Strip */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Experience Price
              </span>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-black text-slate-950">
                  {tour.currency}{tour.price}
                </span>
                <span className="text-sm text-slate-600 font-medium">
                  / {tour.pricePerPerson ? t.perPerson : t.perYacht}
                </span>
              </div>
              <p className="text-xs text-emerald-700 font-medium mt-0.5">
                Transparent pricing • No online card payment required
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <button
                id="modal-book-tour-btn"
                onClick={() => {
                  onClose();
                  onBook(tour.id);
                }}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center space-x-1.5"
              >
                <span>{t.bookTour}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="modal-whatsapp-tour-btn"
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center space-x-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.whatsappInquire}</span>
              </a>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          {tour.gallery && tour.gallery.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 flex items-center space-x-2">
                  <Camera className="w-4 h-4 text-sky-600" />
                  <span>
                    {currentLang === 'tr' 
                      ? 'Tur Fotoğraf Galerisi' 
                      : currentLang === 'ru' 
                        ? 'Фотогалерея тура' 
                        : currentLang === 'de' 
                          ? 'Fotogalerie der Tour' 
                          : currentLang === 'pl'
                            ? 'Galeria zdjęć wycieczki'
                            : 'Tour Photo Gallery'}
                  </span>
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  {currentLang === 'tr' 
                    ? 'Fotoğrafa tıklayarak büyütün' 
                    : currentLang === 'ru' 
                      ? 'Нажмите для просмотра' 
                      : currentLang === 'de' 
                        ? 'Klicken zum Wechseln' 
                        : currentLang === 'pl'
                          ? 'Kliknij zdjęcie, aby powiększyć'
                          : 'Click photo to view'}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
                {tour.gallery.map((photoUrl, idx) => {
                  const isCurrent = (activeImage === photoUrl) || (!activeImage && idx === 0);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(photoUrl)}
                      className={`relative aspect-[4/3] rounded-2xl overflow-hidden border-2 transition-all cursor-pointer group ${
                        isCurrent
                          ? 'border-amber-500 ring-2 ring-amber-400/40 shadow-md scale-[1.02]'
                          : 'border-slate-200 hover:border-slate-300 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={photoUrl}
                        alt={`${tour.imageAlt?.[currentLang] || title} - View ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/images/alanya-boat-tour.jpg';
                        }}
                      />
                      {/* Photo participant badge */}
                      <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-950/80 text-emerald-300 backdrop-blur-sm flex items-center gap-1">
                        <Users className="w-2.5 h-2.5 text-emerald-400" />
                        <span>{(tour.participantsCount || (tour.reviewsCount * 9 + 400)).toLocaleString()}+</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Description / Overview */}
          <div>
            <h3 className="text-lg font-extrabold text-slate-950 mb-3">
              {t.overview}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {desc}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-lg font-extrabold text-slate-950 mb-3">
              {t.highlights}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included / Excluded Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Included */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <h4 className="text-sm font-bold text-emerald-900 mb-3 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.included}</span>
              </h4>
              <ul className="space-y-2">
                {included.map((inc, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-emerald-950 flex items-start space-x-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded */}
            <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
              <h4 className="text-sm font-bold text-rose-900 mb-3 flex items-center space-x-2">
                <XCircle className="w-4 h-4 text-rose-500" />
                <span>{t.excluded}</span>
              </h4>
              <ul className="space-y-2">
                {excluded.map((exc, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-rose-950 flex items-start space-x-2">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Itinerary Timeline */}
          {itinerary && itinerary.length > 0 && (
            <div>
              <h3 className="text-lg font-extrabold text-slate-950 mb-4">
                {t.itinerary}
              </h3>
              <div className="relative pl-6 border-l-2 border-sky-300 space-y-4">
                {itinerary.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-sky-600 border-2 border-white shadow-sm" />
                    <p className="text-sm text-slate-700 font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hotel Security Waiting Alert */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 flex items-start space-x-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-amber-950 uppercase tracking-wide">
                {currentLang === 'tr' && 'Önemli Transfer & Güvenlik Kuralı'}
                {currentLang === 'en' && 'Important Hotel Security & Transfer Rule'}
                {currentLang === 'ru' && 'Важное правило безопасности отеля и трансфера'}
                {currentLang === 'de' && 'Wichtige Sicherheits- & Transferregel'}
                {currentLang === 'pl' && 'Ważna zasada bezpieczeństwa i transferu'}
                {currentLang === 'uk' && 'Важливе правило безпеки готелю та трансферу'}
                {currentLang === 'ro' && 'Regulă importantă de securitate și transfer'}
                {currentLang === 'sr' && 'Važno pravilo bezbednosti i transfera'}
              </h4>
              <p className="text-xs text-amber-900 mt-1 leading-relaxed font-semibold">
                {currentLang === 'tr' && 'Otel kuralları gereğince tur ve transfer servis araçları otel bahçesine/içine girememektedir. Lütfen transfer saatinde otel güvenlik kapısının/bariyerinin dışında bekleyiniz.'}
                {currentLang === 'en' && 'Due to hotel security regulations, transfer vehicles are not permitted inside hotel premises. Please be ready waiting outside the main hotel security gate/barrier at your pickup time.'}
                {currentLang === 'ru' && 'По правилам безопасности отелей туристический транспорт ожидает снаружи. Пожалуйста, ожидайте трансфер снаружи перед шлагбаумом/будкой охраны отеля.'}
                {currentLang === 'de' && 'Aufgrund von Hotelsicherheitsvorschriften dürfen Transferfahrzeuge das Hotelgelände nicht befahren. Bitte warten Sie pünktlich außerhalb des Hotels an der Sicherheitsschranke.'}
                {currentLang === 'pl' && 'Zgodnie z przepisami bezpieczeństwa pojazdy transferowe nie mogą wjeżdżać na teren hotelu. Prosimy o oczekiwanie na zewnątrz przed bramą ochrony hotelu.'}
                {currentLang === 'uk' && 'Згідно з правилами безпеки готелів, екскурсійний транспорт не заїжджає на територію. Будь ласка, очікуйте біля головного шлагбаума / поста охорони готелю у призначений час.'}
                {currentLang === 'ro' && 'Conform regulamentului hotelier, vehiculele de transfer nu intră în incinta hotelului. Vă rugăm să așteptați la poarta principală de securitate/barieră.'}
                {currentLang === 'sr' && 'Po hotelskim propisima vozila transfera ne ulaze u dvorište. Molimo sačekajte ispred glavne kapije / rampe obezbeđenja hotela.'}
              </p>
            </div>
          </div>

          {/* Logistics: Pickup Info & What to Bring */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center space-x-1.5">
                <Car className="w-4 h-4 text-sky-600" />
                <span>{t.pickup}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pickup}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center space-x-1.5">
                <Info className="w-4 h-4 text-amber-600" />
                <span>{t.whatToBring}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {whatToBring.join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-sky-600" />
            <span>Tripora Alanya Official Tour Desk</span>
          </div>
          <span>Direct WhatsApp: +90 505 142 21 16</span>
        </div>
      </div>
    </div>
  );
};
