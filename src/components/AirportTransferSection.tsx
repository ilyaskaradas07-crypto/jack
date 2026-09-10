import React, { useState } from 'react';
import { 
  Car, 
  CheckCircle2, 
  Plane, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Calendar,
  Users,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Language, AirportTransferFormData } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { generateAirportTransferWhatsAppMessage, createWhatsAppLink } from '../utils/whatsapp';

interface AirportTransferSectionProps {
  currentLang: Language;
}

export const AirportTransferSection: React.FC<AirportTransferSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang]?.transferSection || TRANSLATIONS.en.transferSection;

  const [selectedAirport, setSelectedAirport] = useState<'Gazipaşa (GZP)' | 'Antalya (AYT)'>('Gazipaşa (GZP)');
  const [direction, setDirection] = useState<'arrival' | 'departure'>('arrival');

  const currentPrice = selectedAirport === 'Gazipaşa (GZP)' ? '€50' : '€80';

  const [formData, setFormData] = useState<AirportTransferFormData>({
    name: '',
    airport: 'Gazipaşa (GZP)',
    price: '€50',
    routeType: 'arrival',
    hotelName: '',
    pickupLocation: 'Gazipaşa Airport (GZP)',
    dropoffLocation: 'Hotel in Alanya',
    date: '',
    time: '',
    passengers: 2,
    flightNumber: '',
    phone: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleAirportSelect = (airport: 'Gazipaşa (GZP)' | 'Antalya (AYT)') => {
    setSelectedAirport(airport);
    const price = airport === 'Gazipaşa (GZP)' ? '€50' : '€80';
    if (direction === 'arrival') {
      setFormData(prev => ({
        ...prev,
        airport,
        price,
        pickupLocation: `${airport} Terminal`,
        dropoffLocation: prev.dropoffLocation.includes('Airport') ? 'Hotel in Alanya' : prev.dropoffLocation
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        airport,
        price,
        pickupLocation: prev.pickupLocation.includes('Airport') ? 'Hotel in Alanya' : prev.pickupLocation,
        dropoffLocation: `${airport} Departure Terminal`
      }));
    }
  };

  const handleDirectionToggle = (newDirection: 'arrival' | 'departure') => {
    setDirection(newDirection);
    const airport = selectedAirport;
    const price = airport === 'Gazipaşa (GZP)' ? '€50' : '€80';
    if (newDirection === 'arrival') {
      setFormData(prev => ({
        ...prev,
        routeType: 'arrival',
        pickupLocation: `${airport} Terminal`,
        dropoffLocation: prev.hotelName || 'Hotel in Alanya'
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        routeType: 'departure',
        pickupLocation: prev.hotelName || 'Hotel in Alanya',
        dropoffLocation: `${airport} Departure Terminal`
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.hotelName || !formData.date) {
      alert('Please fill in your name, hotel, date and phone number.');
      return;
    }

    const finalData: AirportTransferFormData = {
      ...formData,
      airport: selectedAirport,
      price: currentPrice,
      routeType: direction
    };

    const message = generateAirportTransferWhatsAppMessage(finalData);
    const link = createWhatsAppLink(message);
    setWhatsappUrl(link);
    setSubmitted(true);

    // Open WhatsApp directly
    window.open(link, '_blank');
  };

  return (
    <section id="airport-transfer" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/assets/images/airport-transfer.jpg"
          alt="VIP airport transfer vehicle Mercedes Vito in Gazipasa, Antalya and Alanya"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.highlightBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.subtitle}
          </p>

          {/* Interactive Airport Route Selection Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Gazipaşa Card (50€) */}
            <button
              type="button"
              id="transfer-route-gzp"
              onClick={() => handleAirportSelect('Gazipaşa (GZP)')}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                selectedAirport === 'Gazipaşa (GZP)'
                  ? 'bg-gradient-to-br from-emerald-950/60 to-slate-900 border-emerald-400 shadow-lg shadow-emerald-950/50 ring-2 ring-emerald-400/50'
                  : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  <Plane className="w-3 h-3" />
                  <span>GAZİPAŞA (GZP)</span>
                </span>
                <span className="text-2xl font-black text-emerald-400">€50</span>
              </div>
              <p className="text-sm font-bold text-white">Gazipaşa Airport ↔ Alanya</p>
              <p className="text-xs text-slate-400 mt-1">~40 min • ~45 km • Mercedes Vito VIP</p>
            </button>

            {/* Antalya Card (80€) */}
            <button
              type="button"
              id="transfer-route-ayt"
              onClick={() => handleAirportSelect('Antalya (AYT)')}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                selectedAirport === 'Antalya (AYT)'
                  ? 'bg-gradient-to-br from-amber-950/60 to-slate-900 border-amber-400 shadow-lg shadow-amber-950/50 ring-2 ring-amber-400/50'
                  : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  <Plane className="w-3 h-3" />
                  <span>ANTALYA (AYT)</span>
                </span>
                <span className="text-2xl font-black text-amber-400">€80</span>
              </div>
              <p className="text-sm font-bold text-white">Antalya Airport ↔ Alanya</p>
              <p className="text-xs text-slate-400 mt-1">~1h 45m • ~125 km • Mercedes Vito VIP</p>
            </button>
          </div>
        </div>

        {/* 2-Column Content: Left Features, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Key Benefits */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>VIP Transfer Quality & Benefits</span>
              </h3>

              <ul className="space-y-3.5">
                {t.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Route Info */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-950/40 to-slate-950 border border-sky-800/30 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center space-x-2.5">
                <Plane className="w-5 h-5 text-sky-400" />
                <div>
                  <p className="font-bold text-white">{selectedAirport}</p>
                  <p className="text-slate-400">
                    {direction === 'arrival' ? 'Arrival Gate Pickup' : 'Departure Drop-off'}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-400" />
              <div className="flex items-center space-x-2.5 text-right">
                <div>
                  <p className="font-bold text-white">Alanya Hotels</p>
                  <p className="text-slate-400">Door-to-Door VIP</p>
                </div>
                <Car className="w-5 h-5 text-emerald-400" />
              </div>
            </div>

            {/* Rate Guarantee Badge */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-xs flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                <strong>Fixed Price Guarantee:</strong> {selectedAirport} is strictly <strong>{currentPrice}</strong> per vehicle for up to 8 passengers. No hidden surcharges.
              </span>
            </div>
          </div>

          {/* Right Column: Transfer Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-md text-left">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {t.formTitle} — <span className="text-amber-400">{currentPrice}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {selectedAirport} • Mercedes Vito VIP • {currentPrice}
                  </p>
                </div>

                {/* Arrival / Departure Switch */}
                <div className="inline-flex rounded-xl bg-slate-950/80 p-1 border border-slate-700/60 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleDirectionToggle('arrival')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      direction === 'arrival'
                        ? 'bg-emerald-500 text-slate-950'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Airport ➔ Hotel
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDirectionToggle('departure')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      direction === 'departure'
                        ? 'bg-emerald-500 text-slate-950'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Hotel ➔ Airport
                  </button>
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Almost there!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your VIP transfer details ({selectedAirport} — {currentPrice} fixed rate) have been prepared and WhatsApp has been opened. Please click send in WhatsApp so our team can confirm your reservation.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      id="transfer-open-again-btn"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>OPEN WHATSAPP AGAIN</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Edit transfer details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* Hotel Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.hotelLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.hotelName}
                        onChange={e => setFormData({ ...formData, hotelName: e.target.value })}
                        placeholder="e.g. Grand Kaptan Hotel"
                        className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                      <p className="text-[11px] text-amber-300 mt-1.5 font-medium leading-tight">
                        ⚠️ {currentLang === 'tr' ? 'Otel kuralları gereği araçlar içeri giremez; transfer saatinde lütfen otel güvenlik kapısının/bariyerinin dışında bekleyiniz.' :
                            'Hotel security rule: Please wait outside the main hotel security barrier/gate at transfer pickup time.'}
                      </p>
                    </div>

                    {/* Pickup Location */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.pickupLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pickupLocation}
                        onChange={e => setFormData({ ...formData, pickupLocation: e.target.value })}
                        placeholder={direction === 'arrival' ? `${selectedAirport} Terminal` : 'Hotel in Alanya'}
                        className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* Drop-off Location */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.dropoffLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.dropoffLocation}
                        onChange={e => setFormData({ ...formData, dropoffLocation: e.target.value })}
                        placeholder={direction === 'arrival' ? 'Hotel in Alanya' : `${selectedAirport} Terminal`}
                        className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.dateLabel} *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.timeLabel} *
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* Passengers */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.passengersLabel}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={formData.passengers}
                        onChange={e => setFormData({ ...formData, passengers: parseInt(e.target.value) || 1 })}
                        className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>

                    {/* Flight Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.flightLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.flightNumber}
                        onChange={e => setFormData({ ...formData, flightNumber: e.target.value })}
                        placeholder="e.g. TC-1234 or BA-567"
                        className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7123 456789 or +49 170 1234567"
                      className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.specialRequestsLabel}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.specialRequests}
                      onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="Child car seat needed, oversized baggage, wheelchair etc."
                      className="w-full bg-slate-950/60 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-transfer-whatsapp-btn"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 text-sm sm:text-base font-extrabold tracking-wide shadow-xl shadow-emerald-900/30 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>BOOK {selectedAirport.toUpperCase()} VIP TRANSFER ({currentPrice}) VIA WHATSAPP</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    {selectedAirport} is {currentPrice} fixed rate (up to 8 passengers). Coordinated directly via WhatsApp (+905051422116).
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
