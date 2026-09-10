import React from 'react';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  ShieldCheck,
  Star,
  Users,
  HeartHandshake
} from 'lucide-react';
import { Language, Tour } from '../types';
import { TOURS_DATA } from '../data/toursData';
import { createWhatsAppLink } from '../utils/whatsapp';

interface FeaturedHamamSectionProps {
  currentLang: Language;
  onBookHamam: () => void;
  onSelectHamam: (tour: Tour) => void;
}

const HAMAM_TEXTS: Record<Language, {
  badge: string;
  title: string;
  subtitle: string;
  priceLabel: string;
  priceSub: string;
  day1TipBadge: string;
  day1TipText: string;
  packageTitle: string;
  packageItems: string[];
  bookBtn: string;
  detailBtn: string;
  whatsappBtn: string;
  participants: string;
  transferNote: string;
}> = {
  tr: {
    badge: 'ALANYA EN ÇOK TERCİH EDİLEN SPA DENEYİMİ',
    title: 'Geleneksel Türk Hamamı & Spa',
    subtitle: 'Tatilinizin ilk günlerinde bedeninizi ve ruhunuzu tazeleyin. Sıcak göbek taşı, geleneksel kese peelingi, bol köpük banyosu ve rahatlatıcı aromatik masaj ile tatilinize mükemmel bir başlangıç yapın.',
    priceLabel: '20€',
    priceSub: '/ kişi başı (Tam Paket)',
    day1TipBadge: 'Tatilin 1. veya 2. Günü İçin Şiddetle Tavsiye Edilir',
    day1TipText: 'Güneşlenmeden önce yapılan kese uygulaması cildinizi ölü hücrelerden arındırarak çok daha kalıcı, pürüzsüz ve altın sarısı bir bronzluk sağlar.',
    packageTitle: '20€ Her Şey Dahil Hamam Paketi:',
    packageItems: [
      'Geleneksel Sıcak Göbek Taşı & Terleme Seansı',
      'İpek Kese ile Ölü Deri Arındırma Peelingi',
      'Bulut gibi Yoğun Aromatik Köpük Masajı',
      '20 Dakikalık Dinlendirici Tüm Vücut Yağ Masajı',
      'Sauna, Buhar Odası & Yüz Kil Maskesi',
      'Otelden Ücretsiz Gidiş-Dönüş Transferi & Türk Çayı'
    ],
    bookBtn: 'Hemen Rezervasyon Yap (20€)',
    detailBtn: 'Detayları İncele',
    whatsappBtn: 'WhatsApp ile Danış',
    participants: '4.100+ Misafir Memnun Kaldı',
    transferNote: 'Otel Güvenlik Kapısından Alınış ve Bırakılış Dahildir'
  },
  en: {
    badge: 'MOST POPULAR SPA EXPERIENCE IN ALANYA',
    title: 'Traditional Turkish Bath (Hamam) & Spa',
    subtitle: 'Rejuvenate your body and mind right at the beginning of your vacation. Enjoy the warm marble stone, traditional peeling scrub, cloud-like foam massage, and soothing aromatherapy oil massage.',
    priceLabel: '€20',
    priceSub: '/ person (Full VIP Package)',
    day1TipBadge: 'Highly Recommended on Day 1 or 2 of Your Holiday',
    day1TipText: 'Exfoliating with traditional Kese peeling before sunbathing removes dead skin cells and ensures a smoother, deeper, and longer-lasting Mediterranean tan.',
    packageTitle: '€20 Complete All-Inclusive Package:',
    packageItems: [
      'Warm Marble Stone (Göbek Taşı) & Relaxing Sweating',
      'Traditional Silk Kese Exfoliating Peeling',
      'Luxurious Cloud-Like Soap Foam Massage',
      '20-Minute Soothing Full-Body Aromatherapy Oil Massage',
      'Sauna, Eucalyptus Steam Room & Rejuvenating Clay Mask',
      'Free Roundtrip Hotel Transfers & Fresh Turkish Apple Tea'
    ],
    bookBtn: 'Book Hamam Now (€20)',
    detailBtn: 'View Details',
    whatsappBtn: 'Inquire on WhatsApp',
    participants: '4,100+ Happy Guests',
    transferNote: 'Free Pickup & Drop-Off Outside Hotel Main Gate'
  },
  ru: {
    badge: 'САМЫЙ ПОПУЛЯРНЫЙ СПА-ОТДЫХ В АЛАНЬЕ',
    title: 'Традиционный турецкий хамам и спа',
    subtitle: 'Освежите тело и душу в первые дни отдыха. Тёплый мраморный камень, очищающий пилинг рукавицей кесе, воздушный пенный массаж и сеанс ароматерапии с натуральными маслами.',
    priceLabel: '20€',
    priceSub: '/ с человека (Полный пакет)',
    day1TipBadge: 'Рекомендуется в 1-й или 2-й день отпуска',
    day1TipText: 'Пилинг кесе перед загаром удаляет ороговевшие клетки кожи и гарантирует идеальный, стойкий и бронзовый средиземноморский загар.',
    packageTitle: 'В пакет за 20€ включено всё:',
    packageItems: [
      'Релаксация на тёплом мраморе (Гебек-Таши)',
      'Традиционный пилинг рукавицей кесе',
      'Воздушный пенный массаж всего тела',
      '20 минут расслабляющего массажа с маслами',
      'Сауна, эвкалиптовая парная и глиняная маска',
      'Бесплатный трансфер от/до отеля и турецкий чай'
    ],
    bookBtn: 'Забронировать хамам (20€)',
    detailBtn: 'Подробнее',
    whatsappBtn: 'Спросить в WhatsApp',
    participants: '4 100+ довольных гостей',
    transferNote: 'Бесплатный трансфер от КПП вашего отеля'
  },
  de: {
    badge: 'BELIEBTESTES WELLNESS-ERLEBNIS IN ALANYA',
    title: 'Traditionelles türkisches Hamam & Spa',
    subtitle: 'Gönnen Sie Ihrem Körper zu Beginn Ihres Urlaubs pure Erholung. Entspannen Sie auf dem warmen Marmorstein, genießen Sie das Kese-Peeling, die Schaummassage und eine pflegende Ölmassage.',
    priceLabel: '20€',
    priceSub: '/ Person (Komplettpaket)',
    day1TipBadge: 'Am 1. oder 2. Urlaubstag dringend empfohlen',
    day1TipText: 'Das Kese-Peeling vor dem ersten Sonnenbad befreit die Haut von abgestorbenen Hautschuppen und schenkt Ihnen eine gleichmäßige, goldene und langanhaltende Bräune.',
    packageTitle: 'Im 20€ Verwöhnpaket enthalten:',
    packageItems: [
      'Entspannung auf dem warmen Marmorstein (Göbek Taşı)',
      'Traditionelles Peeling mit dem Seidenhandschuh Kese',
      'Herrlich duftende, dichte Seifenschaummassage',
      '20 Minuten wohltuende Ganzkörper-Aromaölmassage',
      'Sauna, Eukalyptus-Dampfbad & Gesichts-Tonerdemaske',
      'Kostenloser Hin- und Rücktransfer ab Hotel & türkischer Tee'
    ],
    bookBtn: 'Hamam buchen (20€)',
    detailBtn: 'Details ansehen',
    whatsappBtn: 'WhatsApp Kontakt',
    participants: 'Über 4.100 zufriedene Gäste',
    transferNote: 'Kostenlose Abholung & Rückfahrt am Sicherheitstor'
  },
  pl: {
    badge: 'NAJCHĘTNIEJ WYBIERANE SPA W ALANYI',
    title: 'Tradycyjny turecki Hamam & Spa',
    subtitle: 'Zregeneruj ciało i umysł w pierwszych dniach urlopu. Rozgrzany marmur, tradycyjny peeling rękawicą Kese, chmura pachnącej piany i odprężający masaż olejkami.',
    priceLabel: '20€',
    priceSub: '/ osoba (Pełny pakiet VIP)',
    day1TipBadge: 'Szczególnie polecane w 1. lub 2. dniu pobytu',
    day1TipText: 'Peeling Kese przed pierwszym opalaniem usuwa martwy naskórek i zapewnia idealną, głęboką i trwałą śródziemnomorską opaleniznę.',
    packageTitle: 'Pakiet za 20€ obejmuje wszystko:',
    packageItems: [
      'Relaks na ciepłym marmurze Göbek Taşı',
      'Tradycyjny peeling jedwabną rękawicą Kese',
      'Masaż w gęstej, pachnącej pianie mydlanej',
      '20-minutowy relaksacyjny masaż olejkami całego ciała',
      'Sauna, łaźnia parowa i maseczka glinkowa na twarz',
      'Darmowy transfer w dwie strony i tradycyjna herbata'
    ],
    bookBtn: 'Rezerwuj Hamam (20€)',
    detailBtn: 'Zobacz szczegóły',
    whatsappBtn: 'Napisz na WhatsApp',
    participants: 'Ponad 4 100 zadowolonych gości',
    transferNote: 'Bezpłatny odbiór i dowóz przed bramą hotelu'
  },
  uk: {
    badge: 'НАЙПОПУЛЯРНІШЕ СПА-ВІДПОЧИНОК В АЛАНЬЇ',
    title: 'Традиційний турецький хамам і спа',
    subtitle: 'Оновіть тіло та душу у перші дні відпустки. Теплий мармуровий камінь, очищувальний пілінг рукавицею кесе, ніжна піна та розслаблюючий ароматичний масаж.',
    priceLabel: '20€',
    priceSub: '/ з особи (Повний пакет)',
    day1TipBadge: 'Рекомендовано в 1-й або 2-й день відпочинку',
    day1TipText: 'Пілінг кесе перед засмагою знімає відмерлі клітини шкіри та гарантує ідеальну, рівну та стійку бронзову засмагу.',
    packageTitle: 'У пакет за 20€ входить усе:',
    packageItems: [
      'Релаксація на теплому мармурі (Гебек-Таші)',
      'Традиційний шовковий пілінг рукавицею кесе',
      'Ніжний пінний масаж у хмарі мильної піни',
      '20 хвилин розслаблюючого масажу всього тіла',
      'Сауна, евкаліптова парова кімната та глиняна маска',
      'Безкоштовний трансфер від/до готелю та турецький чай'
    ],
    bookBtn: 'Забронювати хамам (20€)',
    detailBtn: 'Детальніше',
    whatsappBtn: 'WhatsApp консультація',
    participants: '4 100+ задоволених гостей',
    transferNote: 'Безкоштовний трансфер від воріт вашого готелю'
  },
  ro: {
    badge: 'CEA MAI POPULARĂ EXPERIENȚĂ SPA DIN ALANYA',
    title: 'Baie Turcească Tradițională (Hamam) & Spa',
    subtitle: 'Răsfățați-vă corpul și mintea în primele zile de vacanță. Piatră caldă de marmură, gomaj tradițional Kese, masaj cu spumă și masaj aromatic cu uleiuri.',
    priceLabel: '20€',
    priceSub: '/ persoană (Pachet complet)',
    day1TipBadge: 'Foarte recomandat în ziua 1 sau 2 a vacanței',
    day1TipText: 'Gomajul Kese înainte de plajă îndepărtează celulele moarte și asigură un bronz mediteranean uniform, auriu și de lungă durată.',
    packageTitle: 'Pachetul de 20€ include totul:',
    packageItems: [
      'Relaxare pe piatra caldă de marmură (Göbek Taşı)',
      'Gomaj exfoliant tradițional cu mănușa Kese',
      'Masaj spectaculos în nori de spumă parfumată',
      '20 minute masaj relaxant cu uleiuri pe tot corpul',
      'Saună, baie de aburi cu eucalipt & mască de argilă',
      'Transfer gratuit dus-întors de la hotel & ceai turcesc'
    ],
    bookBtn: 'Rezervă Hamam (20€)',
    detailBtn: 'Vezi detalii',
    whatsappBtn: 'Scrie pe WhatsApp',
    participants: 'Peste 4.100 de oaspeți mulțumiți',
    transferNote: 'Transfer gratuit de la poarta hotelului'
  },
  sr: {
    badge: 'NAJPOPULARNIJE SPA ISKUSTVO U ALANJI',
    title: 'Tradicionalno tursko kupatilo (Hamam) & Spa',
    subtitle: 'Osvežite telo i um na samom početku odmora. Topao mermerni kamen, tradicionalni Kese piling, bogata sapunska pena i opuštajuća masaža aromatičnim uljima.',
    priceLabel: '20€',
    priceSub: '/ po osobi (Kompletan paket)',
    day1TipBadge: 'Preporučuje se 1. ili 2. dana letovanja',
    day1TipText: 'Piling pre sunčanja uklanja mrtve ćelije kože i obezbeđuje besprekoran, ujednačen i dugotrajan preplanuli ten.',
    packageTitle: 'Paket od 20€ uključuje sve:',
    packageItems: [
      'Opuštanje na toplom mermernom kamenu (Göbek Taşı)',
      'Tradicionalni svilenkasti Kese piling',
      'Masaža u gustom oblaku mirisne sapunice',
      '20 minuta opuštajuće masaže celog tela uljima',
      'Sauna, parno kupatilo i maska od gline za lice',
      'Besplatan povratni transfer iz hotela & turski čaj'
    ],
    bookBtn: 'Rezerviši Hamam (20€)',
    detailBtn: 'Pogledaj detalje',
    whatsappBtn: 'WhatsApp kontakt',
    participants: 'Više od 4.100 zadovoljnih gostiju',
    transferNote: 'Besplatan transfer ispred glavne kapije hotela'
  }
};

export const FeaturedHamamSection: React.FC<FeaturedHamamSectionProps> = ({
  currentLang,
  onBookHamam,
  onSelectHamam
}) => {
  const content = HAMAM_TEXTS[currentLang] || HAMAM_TEXTS.en;
  const hamamTour = TOURS_DATA.find(t => t.id === 'turkish-hamam-spa') || TOURS_DATA[0];

  const whatsappHamamUrl = createWhatsAppLink(
    'Hello Tripora Alanya, I would like to book the Traditional Turkish Hamam & Spa package for €20.'
  );

  return (
    <section id="hamam" className="py-12 sm:py-16 bg-[#0a192f] text-white relative overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#0c203b] via-[#0d2545] to-[#081528] border-2 border-amber-500/40 rounded-[32px] overflow-hidden shadow-2xl shadow-black/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Photo Showcase Column */}
            <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[440px] lg:min-h-[580px] overflow-hidden flex flex-col justify-between p-6 sm:p-8">
              {/* Background Photos with Crossfade/Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/assets/images/turkish-hamam.jpg"
                  alt="Traditional Turkish Hamam in Alanya"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/images/hamam-foam-massage.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081528] via-[#081528]/60 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081528]/80 via-transparent to-transparent hidden lg:block" />
              </div>

              {/* Top Row Badges */}
              <div className="relative z-10 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/90 text-slate-950 text-xs font-black tracking-wider uppercase shadow-lg backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>{content.badge}</span>
                </div>
                <div className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-full bg-slate-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-bold backdrop-blur-md">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{content.participants}</span>
                </div>
              </div>

              {/* Bottom Visual Cards */}
              <div className="relative z-10 space-y-3">
                {/* Day 1-2 Tan Tip Box */}
                <div className="p-4 rounded-2xl bg-amber-500/20 border border-amber-400/50 backdrop-blur-md">
                  <div className="flex items-center space-x-2 text-amber-300 font-bold text-xs sm:text-sm mb-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                    <span>{content.day1TipBadge}</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {content.day1TipText}
                  </p>
                </div>

                {/* Big Price Tag */}
                <div className="flex items-baseline justify-between p-4 rounded-2xl bg-slate-950/85 border border-amber-500/40 backdrop-blur-md">
                  <div>
                    <div className="flex items-baseline space-x-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-amber-400">
                        {content.priceLabel}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-300 font-medium">
                        {content.priceSub}
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-400 font-semibold mt-0.5 flex items-center space-x-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{content.transferNote}</span>
                    </p>
                  </div>

                  <div className="flex items-center space-x-1 text-xs text-amber-300 font-semibold bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/30">
                    <Clock className="w-3.5 h-3.5" />
                    <span>2.5 - 3 Saat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information & Booking Details Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <HeartHandshake className="w-4 h-4" />
                  <span>TRIPORA ALANYA EXCLUSIVE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  {content.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  {content.subtitle}
                </p>

                {/* Package Inclusions Checklist */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3.5">
                    {content.packageTitle}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {content.packageItems.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-sky-900/50 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary Booking Button */}
                <button
                  id="hamam-book-now-btn"
                  onClick={onBookHamam}
                  className="flex-1 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center space-x-2 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>{content.bookBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* View Details Button */}
                <button
                  id="hamam-view-details-btn"
                  onClick={() => onSelectHamam(hamamTour)}
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>{content.detailBtn}</span>
                </button>

                {/* WhatsApp Button */}
                <a
                  id="hamam-whatsapp-btn"
                  href={whatsappHamamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-sm transition-all flex items-center justify-center space-x-1.5 shadow-lg shadow-emerald-700/20"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span className="hidden xl:inline">{content.whatsappBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
