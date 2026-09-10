import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Building2, 
  Phone, 
  Mail,
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  ShieldAlert, 
  Sparkles,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { Language, TourReservationFormData } from '../types';
import { TOURS_DATA } from '../data/toursData';
import { 
  ALANYA_REGIONS, 
  POPULAR_ALANYA_HOTELS, 
  detectRegionFromHotel, 
  getTourPickupTime,
  AlanyaRegion
} from '../data/pickupSchedules';
import { generateTourReservationWhatsAppMessage, createWhatsAppLink } from '../utils/whatsapp';

interface ReservationModalProps {
  isOpen: boolean;
  initialTourId?: string | null;
  currentLang: Language;
  onClose: () => void;
}

const MODAL_TEXTS: Record<Language, {
  modalTitle: string;
  modalBadge: string;
  modalDesc: string;
  selectTour: string;
  tourDate: string;
  guestsTitle: string;
  adults: string;
  children: string;
  infants: string;
  hotelLabel: string;
  hotelPlaceholder: string;
  hotelDropdownTitle: string;
  detectedRegion: string;
  pickupCardTitle: string;
  securityNotice: string;
  fullName: string;
  fullNamePlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  emailHelpText: string;
  roomNumber: string;
  roomNumberPlaceholder: string;
  notes: string;
  notesPlaceholder: string;
  totalPrice: string;
  submitButton: string;
  noPrepaymentNotice: string;
  successTitle: string;
  successDesc: string;
  refLabel: string;
  tourLabel: string;
  dateLabel: string;
  hotelText: string;
  pickupText: string;
  guestsText: string;
  emailSentText: string;
  openWhatsAppAgain: string;
  closeButton: string;
  fillRequiredWarning: string;
}> = {
  tr: {
    modalTitle: 'Hızlı Tur Rezervasyonu',
    modalBadge: 'Ön Ödemesiz • Ücretsiz İptal',
    modalDesc: 'Ön ödeme yapmadan rezervasyonunuzu anında oluşturun. Ödemenizi tur günü nakit veya kartla rehberinize yapabilirsiniz.',
    selectTour: 'Tur / Deneyim Seçimi *',
    tourDate: 'Tur Tarihi *',
    guestsTitle: 'Katılımcı Sayısı',
    adults: 'Yetişkin',
    children: 'Çocuk (4-11)',
    infants: 'Bebek (0-3)',
    hotelLabel: 'Otelinizin Adı (Alanya) *',
    hotelPlaceholder: 'Örn: Delphin Deluxe, Long Beach, Saphir, Kleopatra Atlas...',
    hotelDropdownTitle: 'Önerilen Alanya Otelleri',
    detectedRegion: 'Tespit Edilen Bölge',
    pickupCardTitle: 'Tahmini Otelden Alınış Saati',
    securityNotice: 'Otel yönetmeliği gereğince servis araçları otel içine giremez. Lütfen belirtilen saatte otelinizin ana güvenlik bariyeri / nizamiye dışında hazır olunuz.',
    fullName: 'Adınız Soyadınız *',
    fullNamePlaceholder: 'Örn: Mehmet Yılmaz',
    phone: 'WhatsApp Telefon Numarası *',
    phonePlaceholder: '+90 5XX XXX XX XX',
    email: 'E-posta Adresi (Bilgilendirme & Fiş İçin) *',
    emailPlaceholder: 'ornek@eposta.com',
    emailHelpText: 'Rezervasyon konfirmasyon fişi bu adresinize ve operasyon ekibimize (ilyaskaradas07@hotmail.com) iletilecektir.',
    roomNumber: 'Oda No (Varsa)',
    roomNumberPlaceholder: 'Örn: 304',
    notes: 'Özel İstek / Not',
    notesPlaceholder: 'Örn: Vejetaryen menü, çocuk koltuğu...',
    totalPrice: 'Toplam Tutar',
    submitButton: 'WhatsApp İle Rezervasyonu Onayla',
    noPrepaymentNotice: 'Kart veya ön ödeme gerekmez. Ödemenizi tur günü rehberinize nakit veya kartla yapabilirsiniz.',
    successTitle: 'Rezervasyon Talebiniz Alındı!',
    successDesc: 'Rezervasyon detaylarınız oluşturuldu. Bilgilendirme ilyaskaradas07@hotmail.com adresine ve e-postanıza yönlendirildi.',
    refLabel: 'Referans No:',
    tourLabel: 'Tur:',
    dateLabel: 'Tarih:',
    hotelText: 'Otel & Bölge:',
    pickupText: 'Alınış Saati:',
    guestsText: 'Katılımcılar:',
    emailSentText: 'Konfirmasyon E-postası:',
    openWhatsAppAgain: 'WhatsApp\'ı Tekrar Aç',
    closeButton: 'Kapat',
    fillRequiredWarning: 'Lütfen adınızı, telefonunuzu, e-postanızı, otelinizi ve tur tarihini doldurunuz.'
  },
  en: {
    modalTitle: 'Quick Tour Booking',
    modalBadge: 'No Prepayment • Free Cancellation',
    modalDesc: 'Book your tour instantly with zero prepayment. Pay on the day of the excursion by cash or card.',
    selectTour: 'Select Tour / Experience *',
    tourDate: 'Tour Date *',
    guestsTitle: 'Guests Count',
    adults: 'Adults',
    children: 'Children (4-11)',
    infants: 'Infants (0-3)',
    hotelLabel: 'Hotel Name in Alanya *',
    hotelPlaceholder: 'e.g. Delphin Deluxe, Long Beach, Saphir, Cleopatra Atlas...',
    hotelDropdownTitle: 'Popular Alanya Hotels',
    detectedRegion: 'Detected Region',
    pickupCardTitle: 'Estimated Hotel Pickup Time',
    securityNotice: 'Tour transport cannot enter private hotel grounds. Please be waiting outside the main security gate at your pickup time.',
    fullName: 'Full Name *',
    fullNamePlaceholder: 'e.g. John Smith',
    phone: 'WhatsApp Phone Number *',
    phonePlaceholder: '+44 7XXX XXXXXX / +90 5XX...',
    email: 'Email Address (For Voucher & Confirmation) *',
    emailPlaceholder: 'john@example.com',
    emailHelpText: 'Your official booking voucher will be sent to your email and to ilyaskaradas07@hotmail.com.',
    roomNumber: 'Room Number (Optional)',
    roomNumberPlaceholder: 'e.g. 204',
    notes: 'Special Requests / Notes',
    notesPlaceholder: 'e.g. Vegetarian meal, baby stroller space...',
    totalPrice: 'Total Amount',
    submitButton: 'Confirm & Book via WhatsApp',
    noPrepaymentNotice: 'No advance credit card required. Pay on the day of the tour in cash or by card.',
    successTitle: 'Reservation Confirmed & Sent!',
    successDesc: 'Your reservation details are ready. Confirmation has been sent to ilyaskaradas07@hotmail.com and your email.',
    refLabel: 'Ref Code:',
    tourLabel: 'Tour:',
    dateLabel: 'Date:',
    hotelText: 'Hotel & Region:',
    pickupText: 'Pickup Time:',
    guestsText: 'Guests:',
    emailSentText: 'Confirmation Email:',
    openWhatsAppAgain: 'Open WhatsApp Again',
    closeButton: 'Close',
    fillRequiredWarning: 'Please fill in your name, phone, email, hotel, and tour date.'
  },
  ru: {
    modalTitle: 'Быстрое Бронирование Экскурсии',
    modalBadge: 'Без предоплаты • Бесплатная отмена',
    modalDesc: 'Оформите заказ без предоплаты прямо сейчас. Оплата в день тура гиду наличными или картой.',
    selectTour: 'Выберите Экскурсию *',
    tourDate: 'Дата Экскурсии *',
    guestsTitle: 'Количество Гостей',
    adults: 'Взрослые',
    children: 'Дети (4-11)',
    infants: 'Малыши (0-3)',
    hotelLabel: 'Название Отеля в Аланье *',
    hotelPlaceholder: 'Например: Delphin Deluxe, Long Beach, Saphir...',
    hotelDropdownTitle: 'Популярные Отели Аланьи',
    detectedRegion: 'Район',
    pickupCardTitle: 'Время Трансфера из Отеля',
    securityNotice: 'Автобусы не заезжают на территорию отеля. Пожалуйста, ожидайте снаружи у шлагбаума/будки охраны.',
    fullName: 'Ваше Имя и Фамилия *',
    fullNamePlaceholder: 'Иван Иванов',
    phone: 'Номер WhatsApp / Телефон *',
    phonePlaceholder: '+7 9XX XXX XX XX',
    email: 'Электронная Почта (Для Ваучера) *',
    emailPlaceholder: 'ivan@example.com',
    emailHelpText: 'Ваучер бронирования будет отправлен на вашу почту и в отдел бронирования (ilyaskaradas07@hotmail.com).',
    roomNumber: 'Номер Комнаты (Если есть)',
    roomNumberPlaceholder: 'Например: 104',
    notes: 'Пожелания / Комментарий',
    notesPlaceholder: 'Например: Детское кресло...',
    totalPrice: 'Итого к оплате',
    submitButton: 'Подтвердить в WhatsApp',
    noPrepaymentNotice: 'Без предоплаты. Оплата производится в день экскурсии гиду наличными или картой.',
    successTitle: 'Бронирование Успешно Оформлено!',
    successDesc: 'Данные бронирования сформированы и отправлены на ilyaskaradas07@hotmail.com и на ваш email.',
    refLabel: 'Код брони:',
    tourLabel: 'Экскурсия:',
    dateLabel: 'Дата:',
    hotelText: 'Отель и район:',
    pickupText: 'Время трансфера:',
    guestsText: 'Участники:',
    emailSentText: 'Email уведомление:',
    openWhatsAppAgain: 'Открыть WhatsApp снова',
    closeButton: 'Закрыть',
    fillRequiredWarning: 'Пожалуйста, заполните имя, телефон, email, отель и дату экскурсии.'
  },
  de: {
    modalTitle: 'Schnelle Tourbuchung',
    modalBadge: 'Ohne Vorauszahlung • Kostenlose Stornierung',
    modalDesc: 'Buchen Sie ganz ohne Vorauszahlung. Die Bezahlung erfolgt am Ausflugstag beim Reiseleiter.',
    selectTour: 'Ausflug / Erlebnis wählen *',
    tourDate: 'Ausflugsdatum *',
    guestsTitle: 'Teilnehmerzahl',
    adults: 'Erwachsene',
    children: 'Kinder (4-11)',
    infants: 'Kleinkinder (0-3)',
    hotelLabel: 'Hotelname in Alanya *',
    hotelPlaceholder: 'z.B. Delphin Deluxe, Long Beach, Saphir, Kleopatra...',
    hotelDropdownTitle: 'Beliebte Alanya Hotels',
    detectedRegion: 'Erkannte Region',
    pickupCardTitle: 'Voraussichtliche Hotel-Abholzeit',
    securityNotice: 'Transferbusse dürfen nicht aufs Hotelgelände fahren. Bitte warten Sie an der Sicherheitsschranke des Hotels.',
    fullName: 'Vor- und Nachname *',
    fullNamePlaceholder: 'Max Mustermann',
    phone: 'WhatsApp / Telefonnummer *',
    phonePlaceholder: '+49 1XX XXXXXXXX',
    email: 'E-Mail-Adresse (für Buchungsbestätigung) *',
    emailPlaceholder: 'max@example.com',
    emailHelpText: 'Ihre Buchungsbestätigung wird an Ihre E-Mail und an ilyaskaradas07@hotmail.com gesendet.',
    roomNumber: 'Zimmernummer (Optional)',
    roomNumberPlaceholder: 'z.B. 205',
    notes: 'Besondere Wünsche',
    notesPlaceholder: 'z.B. Kindersitz, vegetarisches Menü...',
    totalPrice: 'Gesamtbetrag',
    submitButton: 'Über WhatsApp Bestätigen',
    noPrepaymentNotice: 'Keine Kreditkarte erforderlich. Bezahlung am Tag der Tour in bar oder mit Karte.',
    successTitle: 'Buchungsanfrage Erhalten!',
    successDesc: 'Ihre Buchung wurde registriert und an ilyaskaradas07@hotmail.com sowie an Ihre E-Mail übermittelt.',
    refLabel: 'Buchungs-Ref:',
    tourLabel: 'Ausflug:',
    dateLabel: 'Datum:',
    hotelText: 'Hotel & Region:',
    pickupText: 'Abholzeit:',
    guestsText: 'Teilnehmer:',
    emailSentText: 'Bestätigungsmail:',
    openWhatsAppAgain: 'WhatsApp erneut öffnen',
    closeButton: 'Schließen',
    fillRequiredWarning: 'Bitte füllen Sie Name, Telefon, E-Mail, Hotel und Datum aus.'
  },
  pl: {
    modalTitle: 'Szybka Rezerwacja Wycieczki',
    modalBadge: 'Bez przedpłat • Bezpłatne odwołanie',
    modalDesc: 'Zarezerwuj natychmiast bez przedpłat. Płatność odbywa się w dniu wycieczki u przewodnika gotówką lub kartą.',
    selectTour: 'Wybierz Wycieczkę *',
    tourDate: 'Data Wycieczki *',
    guestsTitle: 'Liczba Uczestników',
    adults: 'Dorośli',
    children: 'Dzieci (4-11)',
    infants: 'Niemowlęta (0-3)',
    hotelLabel: 'Nazwa Hotelu w Alanyi *',
    hotelPlaceholder: 'np. Delphin Deluxe, Long Beach, Saphir, Kleopatra...',
    hotelDropdownTitle: 'Popularne Hotele w Alanyi',
    detectedRegion: 'Wykryty Region',
    pickupCardTitle: 'Przewidywany Czas Odbioru z Hotelu',
    securityNotice: 'Autokary wycieczkowe nie wjeżdżają na teren hotelu. Prosimy o oczekiwanie przed głównym szlabanem/bramą ochrony.',
    fullName: 'Imię i Nazwisko *',
    fullNamePlaceholder: 'Jan Kowalski',
    phone: 'Numer WhatsApp / Telefon *',
    phonePlaceholder: '+48 XXX XXX XXX',
    email: 'Adres E-mail (do vouchera) *',
    emailPlaceholder: 'jan@example.com',
    emailHelpText: 'Potwierdzenie rezerwacji zostanie przesłane na podany e-mail oraz do ilyaskaradas07@hotmail.com.',
    roomNumber: 'Numer Pokoju (Opcjonalnie)',
    roomNumberPlaceholder: 'np. 312',
    notes: 'Uwagi i Życzenia',
    notesPlaceholder: 'np. Fotelik dziecięcy, posiłek wege...',
    totalPrice: 'Łączna Kwota',
    submitButton: 'Potwierdź Rezerwację przez WhatsApp',
    noPrepaymentNotice: 'Brak konieczności przedpłaty. Płatność u przewodnika w dniu wycieczki.',
    successTitle: 'Rezerwacja Została Przyjęta!',
    successDesc: 'Szczegóły zostały wygenerowane i przesłane do ilyaskaradas07@hotmail.com oraz na Twój adres e-mail.',
    refLabel: 'Numer Ref:',
    tourLabel: 'Wycieczka:',
    dateLabel: 'Data:',
    hotelText: 'Hotel i Region:',
    pickupText: 'Godzina Odbioru:',
    guestsText: 'Uczestnicy:',
    emailSentText: 'Wysłano Voucher na:',
    openWhatsAppAgain: 'Otwórz WhatsApp Ponownie',
    closeButton: 'Zamknij',
    fillRequiredWarning: 'Prosimy o podanie imienia, telefonu, adresu e-mail, hotelu i daty.'
  },
  uk: {
    modalTitle: 'Швидке Бронювання Екскурсії',
    modalBadge: 'Без передоплати • Безкоштовне скасування',
    modalDesc: 'Оформіть бронювання миттєво без попередньої оплати. Оплата гіду в день екскурсії готівкою або карткою.',
    selectTour: 'Оберіть Екскурсію *',
    tourDate: 'Дата Екскурсії *',
    guestsTitle: 'Кількість Учасників',
    adults: 'Дорослі',
    children: 'Діти (4-11)',
    infants: 'Малюки (0-3)',
    hotelLabel: 'Назва Готелю в Аланії *',
    hotelPlaceholder: 'Наприклад: Delphin Deluxe, Long Beach, Saphir...',
    hotelDropdownTitle: 'Популярні Готелі Аланії',
    detectedRegion: 'Визначений Район',
    pickupCardTitle: 'Орієнтовний Час Виїзду з Готелю',
    securityNotice: 'Згідно з правилами готелів, екскурсійні автобуси не заїжджають на територію. Будь ласка, очікуйте біля головного шлагбаума / поста охорони.',
    fullName: 'Прізвище та Ім\'я *',
    fullNamePlaceholder: 'Олександр Коваленко',
    phone: 'Номер WhatsApp / Телефон *',
    phonePlaceholder: '+380 XX XXX XX XX',
    email: 'Електронна Пошта (Для Ваучера) *',
    emailPlaceholder: 'oleksandr@example.com',
    emailHelpText: 'Ваучер та підтвердження бронювання надійде на вашу пошту та на ilyaskaradas07@hotmail.com.',
    roomNumber: 'Номер Кімнати (Якщо є)',
    roomNumberPlaceholder: 'Наприклад: 204',
    notes: 'Особливі Побажання',
    notesPlaceholder: 'Наприклад: Дитяче автокрісло...',
    totalPrice: 'Загальна Сума',
    submitButton: 'Підтвердити у WhatsApp',
    noPrepaymentNotice: 'Без попередньої оплати карткою. Оплата гіду в день екскурсії готівкою або карткою.',
    successTitle: 'Бронювання Успішно Оформлено!',
    successDesc: 'Деталі сформовано. Підтвердження надіслано на ilyaskaradas07@hotmail.com та на вашу електронну адресу.',
    refLabel: 'Номер Броні:',
    tourLabel: 'Екскурсія:',
    dateLabel: 'Дата:',
    hotelText: 'Готель та район:',
    pickupText: 'Час виїзду:',
    guestsText: 'Учасники:',
    emailSentText: 'Email підтвердження:',
    openWhatsAppAgain: 'Відкрити WhatsApp Знову',
    closeButton: 'Закрити',
    fillRequiredWarning: 'Будь ласка, заповніть ім\'я, телефон, email, назву готелю та дату.'
  },
  ro: {
    modalTitle: 'Rezervare Rapidă Excursie',
    modalBadge: 'Fără plată în avans • Anulare gratuită',
    modalDesc: 'Rezervați pe loc fără nicio plată în avans. Plătiți în ziua excursiei către ghid în numerar sau cu cardul.',
    selectTour: 'Selectați Excursia *',
    tourDate: 'Data Excursiei *',
    guestsTitle: 'Număr Participanți',
    adults: 'Adulți',
    children: 'Copii (4-11)',
    infants: 'Bebeluși (0-3)',
    hotelLabel: 'Numele Hotelului din Alanya *',
    hotelPlaceholder: 'Ex: Delphin Deluxe, Long Beach, Saphir, Kleopatra...',
    hotelDropdownTitle: 'Hoteluri Populare în Alanya',
    detectedRegion: 'Regiunea Detectată',
    pickupCardTitle: 'Ora Estimată de Preluare din Hotel',
    securityNotice: 'Din motive de securitate hotelieră, autocarele nu intră în curtea hotelului. Vă rugăm să așteptați la bariera principală.',
    fullName: 'Nume și Prenume *',
    fullNamePlaceholder: 'Ion Popescu',
    phone: 'Număr WhatsApp / Telefon *',
    phonePlaceholder: '+40 7XX XXX XXX',
    email: 'Adresă de E-mail (Pentru Voucher) *',
    emailPlaceholder: 'ion@example.com',
    emailHelpText: 'Voucherul de confirmare va fi trimis pe emailul dvs. și către ilyaskaradas07@hotmail.com.',
    roomNumber: 'Număr Cameră (Opțional)',
    roomNumberPlaceholder: 'Ex: 402',
    notes: 'Cereri Speciale',
    notesPlaceholder: 'Ex: Scaun copil, meniu vegetarian...',
    totalPrice: 'Total de Plată',
    submitButton: 'Trimite Rezervarea pe WhatsApp',
    noPrepaymentNotice: 'Fără plată în avans. Plătiți în ziua turului ghidului, numerar sau card.',
    successTitle: 'Rezervare Trimisă cu Succes!',
    successDesc: 'Detaliile au fost generate și trimise către ilyaskaradas07@hotmail.com și pe adresa dvs. de email.',
    refLabel: 'Cod Ref:',
    tourLabel: 'Excursie:',
    dateLabel: 'Data:',
    hotelText: 'Hotel & Zonă:',
    pickupText: 'Ora Preluării:',
    guestsText: 'Participanți:',
    emailSentText: 'Email Confirmare:',
    openWhatsAppAgain: 'Deschide WhatsApp din nou',
    closeButton: 'Închide',
    fillRequiredWarning: 'Vă rugăm să completați numele, telefonul, emailul, hotelul și data.'
  },
  sr: {
    modalTitle: 'Brza Rezervacija Izleta',
    modalBadge: 'Bez plaćanja unapred • Besplatno otkazivanje',
    modalDesc: 'Rezervišite odmah bez plaćanja unapred. Plaćanje tek na dan izleta vodiču u gotovini ili karticom.',
    selectTour: 'Izaberite Izlet *',
    tourDate: 'Datum Izleta *',
    guestsTitle: 'Broj Učesnika',
    adults: 'Odrasli',
    children: 'Deca (4-11)',
    infants: 'Bebe (0-3)',
    hotelLabel: 'Naziv Hotela u Alanji *',
    hotelPlaceholder: 'Npr: Delphin Deluxe, Long Beach, Saphir, Kleopatra...',
    hotelDropdownTitle: 'Popularni Hoteli u Alanji',
    detectedRegion: 'Prepoznata Regija',
    pickupCardTitle: 'Vreme Polaska iz Hotela',
    securityNotice: 'Autobusi ne ulaze u krug hotela. Molimo sačekajte kod glavne rampe / kućice obezbeđenja.',
    fullName: 'Ime i Prezime *',
    fullNamePlaceholder: 'Marko Jovanović',
    phone: 'Broj Telefona / WhatsApp *',
    phonePlaceholder: '+381 6X XXX XXXX',
    email: 'E-mail Adresa (Za Vaučer) *',
    emailPlaceholder: 'marko@example.com',
    emailHelpText: 'Potvrda rezervacije biće poslata na Vaš e-mail i na ilyaskaradas07@hotmail.com.',
    roomNumber: 'Broj Sobe (Opciono)',
    roomNumberPlaceholder: 'Npr: 108',
    notes: 'Posebne Želje / Napomene',
    notesPlaceholder: 'Npr: Dečije sedište...',
    totalPrice: 'Ukupan Iznos',
    submitButton: 'Potvrdi Rezervaciju na WhatsApp',
    noPrepaymentNotice: 'Plaćanje tek na dan izleta vodiču u gotovini ili karticom.',
    successTitle: 'Rezervacija Uspešno Zabeležena!',
    successDesc: 'Detalji rezervacije su poslati na ilyaskaradas07@hotmail.com i na Vašu e-mail adresu.',
    refLabel: 'Broj Rezervacije:',
    tourLabel: 'Izlet:',
    dateLabel: 'Datum:',
    hotelText: 'Hotel i Regija:',
    pickupText: 'Vreme Polaska:',
    guestsText: 'Učesnici:',
    emailSentText: 'Potvrda E-poštom:',
    openWhatsAppAgain: 'Otvori WhatsApp Ponovo',
    closeButton: 'Zatvori',
    fillRequiredWarning: 'Molimo popunite ime, telefon, email, hotel i datum izleta.'
  }
};

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  initialTourId,
  currentLang,
  onClose
}) => {
  const t = MODAL_TEXTS[currentLang] || MODAL_TEXTS.en;

  const [formData, setFormData] = useState<TourReservationFormData>({
    fullName: '',
    phone: '',
    email: '',
    hotelName: '',
    tourName: '',
    tourId: '',
    tourDate: '',
    adults: 2,
    children: 0,
    infants: 0,
    roomNumber: '',
    specialRequests: ''
  });

  const [selectedRegion, setSelectedRegion] = useState<AlanyaRegion>(ALANYA_REGIONS[4]);
  const [showHotelDropdown, setShowHotelDropdown] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [referenceCode, setReferenceCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Default date to tomorrow
  useEffect(() => {
    if (!formData.tourDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setFormData(prev => ({ ...prev, tourDate: tomorrow.toISOString().split('T')[0] }));
    }
  }, [formData.tourDate]);

  // Update selected tour when modal opens or initialTourId changes
  useEffect(() => {
    if (initialTourId) {
      if (initialTourId === 'free-shopping-tour') {
        setFormData(prev => ({
          ...prev,
          tourId: 'free-shopping-tour',
          tourName: currentLang === 'tr' ? 'Ücretsiz VIP Alışveriş Turu (€0)' : 'Free VIP Shopping Shuttle (€0)'
        }));
      } else {
        const found = TOURS_DATA.find(t => t.id === initialTourId);
        if (found) {
          setFormData(prev => ({
            ...prev,
            tourId: found.id,
            tourName: found.title[currentLang] || found.title.en
          }));
        }
      }
    } else if (!formData.tourName && TOURS_DATA.length > 0) {
      setFormData(prev => ({
        ...prev,
        tourId: TOURS_DATA[0].id,
        tourName: TOURS_DATA[0].title[currentLang] || TOURS_DATA[0].title.en
      }));
    }
  }, [initialTourId, isOpen, currentLang]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Hotel search & region auto-detection
  const handleHotelChange = (val: string) => {
    setFormData(prev => ({ ...prev, hotelName: val }));
    if (val.trim().length > 1) {
      const detected = detectRegionFromHotel(val);
      setSelectedRegion(detected);
      setShowHotelDropdown(true);
    } else {
      setShowHotelDropdown(false);
    }
  };

  const filteredHotels = useMemo(() => {
    if (!formData.hotelName.trim()) return POPULAR_ALANYA_HOTELS.slice(0, 8);
    const q = formData.hotelName.toLowerCase();
    return POPULAR_ALANYA_HOTELS.filter(h => h.name.toLowerCase().includes(q)).slice(0, 8);
  }, [formData.hotelName]);

  // Current tour and pickup calculation
  const currentTourObj = useMemo(() => {
    return TOURS_DATA.find(t => t.id === formData.tourId) || TOURS_DATA[0];
  }, [formData.tourId]);

  const pickupDetails = useMemo(() => {
    return getTourPickupTime(formData.tourId || 'alanya-boat-tour', selectedRegion.id);
  }, [formData.tourId, selectedRegion.id]);

  // Total price calculation
  const calculatedTotal = useMemo(() => {
    if (formData.tourId === 'free-shopping-tour') return 0;
    if (!currentTourObj.pricePerPerson) {
      return currentTourObj.price;
    }
    const childRate = currentTourObj.price > 35 ? Math.round(currentTourObj.price * 0.5) : Math.round(currentTourObj.price * 0.6);
    return (formData.adults * currentTourObj.price) + (formData.children * childRate);
  }, [formData.tourId, currentTourObj, formData.adults, formData.children]);

  if (!isOpen) return null;

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.hotelName || !formData.tourDate) {
      alert(t.fillRequiredWarning);
      return;
    }

    setIsSubmitting(true);
    const ref = `TRIP-${Date.now().toString().slice(-6)}`;
    setReferenceCode(ref);

    const payload: TourReservationFormData = {
      ...formData,
      pickupTime: pickupDetails.pickupTime,
      region: selectedRegion.name[currentLang] || selectedRegion.name.en,
      totalPrice: calculatedTotal,
      referenceCode: ref
    };

    const message = generateTourReservationWhatsAppMessage(payload);
    const link = createWhatsAppLink(message);
    setWhatsappUrl(link);
    setSubmitted(true);
    setIsSubmitting(false);

    // Send reservation payload to server (triggers email to ilyaskaradas07@hotmail.com and guest)
    try {
      await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch {
      // ignore client network error
    }

    // Direct WhatsApp redirect
    window.open(link, '_blank');
  };

  return (
    <div
      id="reservation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="reservation-modal-card"
        className="relative w-full max-w-2xl bg-white rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-2xl border border-slate-200 my-auto text-left max-h-[92vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 px-5 sm:px-7 py-4 flex items-center justify-between border-b border-sky-900/60 text-white shrink-0">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>{t.modalBadge}</span>
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-black text-white tracking-wide mt-1">
              {t.modalTitle}
            </h2>
          </div>

          <button
            id="close-reservation-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {submitted ? (
            /* SUBMITTED SUCCESS CARD */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {t.successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {t.successDesc}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 text-left max-w-md mx-auto space-y-2 font-medium">
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.refLabel}</span>
                  <strong className="text-amber-600 font-mono text-sm">{referenceCode}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.tourLabel}</span>
                  <span className="font-semibold text-slate-900">{formData.tourName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.dateLabel}</span>
                  <span>{formData.tourDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.hotelText}</span>
                  <span>{formData.hotelName} ({selectedRegion.name[currentLang] || selectedRegion.name.en})</span>
                </div>
                <div className="flex justify-between text-amber-700 font-bold">
                  <span>{t.pickupText}</span>
                  <span>{pickupDetails.pickupTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.guestsText}</span>
                  <span>{formData.adults} {t.adults}, {formData.children} {t.children}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-1.5 text-sky-900">
                  <span className="text-slate-500">{t.emailSentText}</span>
                  <span className="font-semibold text-blue-600 truncate max-w-[200px]">{formData.email}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-black border-t border-slate-200 pt-1.5 text-sm">
                  <span>{t.totalPrice}:</span>
                  <span>€{calculatedTotal}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  id="open-whatsapp-again-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center space-x-2 cursor-pointer transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.openWhatsAppAgain}</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold cursor-pointer transition-colors"
                >
                  {t.closeButton}
                </button>
              </div>
            </div>
          ) : (
            /* QUICK FORM */
            <form onSubmit={handleSubmitForm} className="space-y-4">
              {/* Tour Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {t.selectTour}
                </label>
                <select
                  id="select-tour-dropdown"
                  required
                  value={formData.tourId}
                  onChange={e => {
                    const tId = e.target.value;
                    const match = TOURS_DATA.find(tour => tour.id === tId);
                    setFormData(prev => ({
                      ...prev,
                      tourId: tId,
                      tourName: match ? (match.title[currentLang] || match.title.en) : tId
                    }));
                  }}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-amber-500 focus:outline-none"
                >
                  {TOURS_DATA.map(tour => (
                    <option key={tour.id} value={tour.id}>
                      {tour.title[currentLang] || tour.title.en} — €{tour.price} {tour.pricePerPerson ? (currentLang === 'tr' ? '/ kişi' : '/ person') : (currentLang === 'tr' ? '/ yat' : '/ yacht')}
                    </option>
                  ))}
                  <option value="free-shopping-tour">
                    {currentLang === 'tr' ? 'Ücretsiz VIP Alışveriş Turu (Mücevher, Butik, Dövme - €0)' : 'Free VIP Shopping Shuttle (€0)'}
                  </option>
                </select>
              </div>

              {/* Date & Guests Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Tour Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.tourDate}
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                    <input
                      id="tour-date-input"
                      type="date"
                      required
                      value={formData.tourDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={e => setFormData({ ...formData, tourDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 font-semibold focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Guests breakdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.guestsTitle}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="bg-slate-50 border border-slate-300 rounded-xl p-1.5 text-center">
                      <span className="text-[10px] text-slate-500 block">{t.adults}</span>
                      <select
                        value={formData.adults}
                        onChange={e => setFormData({ ...formData, adults: Number(e.target.value) })}
                        className="w-full bg-transparent font-bold text-xs text-center focus:outline-none cursor-pointer text-slate-900"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <div className="bg-slate-50 border border-slate-300 rounded-xl p-1.5 text-center">
                      <span className="text-[10px] text-slate-500 block">{t.children}</span>
                      <select
                        value={formData.children}
                        onChange={e => setFormData({ ...formData, children: Number(e.target.value) })}
                        className="w-full bg-transparent font-bold text-xs text-center focus:outline-none cursor-pointer text-slate-900"
                      >
                        {[0, 1, 2, 3, 4, 5].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <div className="bg-slate-50 border border-slate-300 rounded-xl p-1.5 text-center">
                      <span className="text-[10px] text-emerald-600 block">{t.infants}</span>
                      <select
                        value={formData.infants || 0}
                        onChange={e => setFormData({ ...formData, infants: Number(e.target.value) })}
                        className="w-full bg-transparent font-bold text-xs text-center focus:outline-none cursor-pointer text-slate-900"
                      >
                        {[0, 1, 2, 3].map(n => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotel Input with live region detection */}
              <div className="relative">
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {t.hotelLabel}
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    id="hotel-name-input"
                    type="text"
                    required
                    value={formData.hotelName}
                    onChange={e => handleHotelChange(e.target.value)}
                    onFocus={() => setShowHotelDropdown(true)}
                    placeholder={t.hotelPlaceholder}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                {/* Hotel Auto-suggest dropdown */}
                {showHotelDropdown && filteredHotels.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl p-1.5 z-30 max-h-48 overflow-y-auto">
                    <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {t.hotelDropdownTitle}
                    </div>
                    {filteredHotels.map(h => {
                      const regObj = ALANYA_REGIONS.find(r => r.id === h.regionId);
                      return (
                        <button
                          key={h.name}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, hotelName: h.name }));
                            if (regObj) setSelectedRegion(regObj);
                            setShowHotelDropdown(false);
                          }}
                          className="w-full px-3 py-2 text-left text-xs hover:bg-amber-500/10 rounded-lg flex items-center justify-between cursor-pointer transition-colors"
                        >
                          <span className="font-semibold text-slate-900">{h.name}</span>
                          <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full font-medium">
                            {regObj?.name[currentLang] || regObj?.name.en || h.regionId}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* LIVE ALANYA PICKUP SCHEDULE BANNER */}
              {formData.hotelName.trim().length > 0 && (
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white border border-amber-400/40 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                        {t.pickupCardTitle}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-black text-amber-400 bg-amber-400/15 px-2.5 py-0.5 rounded-lg border border-amber-400/30">
                      {pickupDetails.pickupTime}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-300 flex items-center justify-between">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{t.detectedRegion}: <strong>{selectedRegion.name[currentLang] || selectedRegion.name.en}</strong></span>
                    </span>
                    <span className="text-emerald-400 font-bold">€{calculatedTotal}</span>
                  </div>

                  <div className="pt-1 border-t border-sky-900/60 flex items-start space-x-1.5 text-[11px] text-amber-200/90 leading-tight">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{t.securityNotice}</span>
                  </div>
                </div>
              )}

              {/* Guest Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.fullName}
                  </label>
                  <input
                    id="guest-fullname-input"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t.fullNamePlaceholder}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.phone}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                    <input
                      id="guest-phone-input"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.phonePlaceholder}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Guest Email Address (REQUIRED for confirmations & dispatch to ilyaskaradas07@hotmail.com) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {t.email}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-blue-500 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    id="guest-email-input"
                    type="email"
                    required
                    value={formData.email || ''}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
                  <span>{t.emailHelpText}</span>
                </p>
              </div>

              {/* Optional Room Number & Special Requests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.roomNumber}
                  </label>
                  <input
                    id="room-number-input"
                    type="text"
                    value={formData.roomNumber || ''}
                    onChange={e => setFormData({ ...formData, roomNumber: e.target.value })}
                    placeholder={t.roomNumberPlaceholder}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {t.notes}
                  </label>
                  <input
                    id="special-requests-input"
                    type="text"
                    value={formData.specialRequests || ''}
                    onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder={t.notesPlaceholder}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit & Payment Notice */}
              <div className="pt-2">
                <button
                  id="submit-reservation-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm sm:text-base tracking-wide shadow-lg shadow-emerald-700/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>
                    {t.submitButton} (€{calculatedTotal})
                  </span>
                </button>
                <p className="text-[10px] sm:text-[11px] text-slate-500 text-center mt-2 leading-relaxed">
                  {t.noPrepaymentNotice}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
