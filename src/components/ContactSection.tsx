import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  Sparkles, 
  Compass, 
  CheckCircle2 
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { BUSINESS_WHATSAPP_NUMBER, BUSINESS_EMAIL, createWhatsAppLink } from '../utils/whatsapp';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const contactT = TRANSLATIONS[currentLang]?.contact || TRANSLATIONS[currentLang]?.contactSection || {};
  const t = {
    badge: contactT.badge || 'GET IN TOUCH',
    title: contactT.title || 'Contact Tripora Alanya',
    subtitle: contactT.subtitle || 'We are here to assist with recommendations, private yacht bookings, custom itineraries, VIP airport transfers (Gazipaşa €50 / Antalya €80), and free shopping tours.',
    location: contactT.location || 'Alanya, Antalya, Turkey',
    whatsapp: contactT.whatsapp || '+90 505 142 21 16',
    email: contactT.email || 'ilyaskaradas07@hotmail.com',
    hours: contactT.hours || (currentLang === 'tr' ? 'Çalışma Saatleri' : currentLang === 'de' ? 'Öffnungszeiten' : currentLang === 'ru' ? 'Часы работы' : currentLang === 'pl' ? 'Godziny pracy' : 'Working Hours'),
    hoursVal: contactT.hoursVal || (currentLang === 'tr' ? 'Pzt – Paz: 08:00 – 22:00' : currentLang === 'de' ? 'Mo – So: 08:00 – 22:00' : currentLang === 'ru' ? 'Пн – Вс: 08:00 – 22:00' : currentLang === 'pl' ? 'Pon – Niedz: 08:00 – 22:00' : 'Mon – Sun: 08:00 – 22:00'),
    whatsappDirect: contactT.whatsappDirect || contactT.btnWhatsapp || (currentLang === 'tr' ? 'WHATSAPP İLE YAZIN' : currentLang === 'de' ? 'AUF WHATSAPP SCHREIBEN' : currentLang === 'ru' ? 'НАПИСАТЬ В WHATSAPP' : currentLang === 'pl' ? 'NAPISZ NA WHATSAPP' : 'CHAT ON WHATSAPP'),
    formTitle: contactT.formTitle || (currentLang === 'tr' ? 'Bize Mesaj Gönderin' : currentLang === 'de' ? 'Nachricht senden' : currentLang === 'ru' ? 'Отправить сообщение' : currentLang === 'pl' ? 'Wyślij do nas wiadomość' : 'Send Us a Direct Inquiry'),
    formSubtitle: contactT.formSubtitle || (currentLang === 'tr' ? 'Sorularınızı iletin, en kısa sürede WhatsApp üzerinden dönüş yapalım.' : currentLang === 'de' ? 'Senden Sie uns eine Anfrage, wir antworten umgehend auf WhatsApp.' : currentLang === 'ru' ? 'Задайте вопрос, и мы свяжемся с вами в WhatsApp.' : currentLang === 'pl' ? 'Zadaj pytanie, a my skontaktujemy się z Tobą przez WhatsApp najszybciej jak to możliwe.' : 'Fill out the form below to connect instantly with our team.'),
    nameLabel: contactT.nameLabel || (currentLang === 'tr' ? 'Adınız Soyadınız' : currentLang === 'de' ? 'Vollständiger Name' : currentLang === 'ru' ? 'Ваше имя' : currentLang === 'pl' ? 'Imię i nazwisko' : 'Full Name'),
    phoneLabel: contactT.phoneLabel || (currentLang === 'tr' ? 'WhatsApp Telefon Numarası' : currentLang === 'de' ? 'WhatsApp Telefonnummer' : currentLang === 'ru' ? 'Телефон WhatsApp' : currentLang === 'pl' ? 'Numer telefonu WhatsApp' : 'WhatsApp Phone Number'),
    emailLabel: contactT.emailLabel || (currentLang === 'tr' ? 'E-posta Adresi (Opsiyonel)' : currentLang === 'de' ? 'E-Mail-Adresse (Optional)' : currentLang === 'ru' ? 'Электронная почта (необязательно)' : currentLang === 'pl' ? 'Adres e-mail (opcjonalnie)' : 'Email Address (Optional)'),
    messageLabel: contactT.messageLabel || (currentLang === 'tr' ? 'Mesajınız & Tur Tercihleriniz' : currentLang === 'de' ? 'Ihre Nachricht & Tourwünsche' : currentLang === 'ru' ? 'Ваше сообщение и пожелания' : currentLang === 'pl' ? 'Twoja wiadomość i preferencje' : 'Your Message & Tour Inquiry'),
    sendBtn: contactT.sendBtn || (currentLang === 'tr' ? 'WHATSAPP İLE GÖNDER' : currentLang === 'de' ? 'NACHRICHT VIA WHATSAPP SENDEN' : currentLang === 'ru' ? 'ОТПРАВИТЬ В WHATSAPP' : currentLang === 'pl' ? 'WYŚLIJ PRZEZ WHATSAPP' : 'SEND INQUIRY VIA WHATSAPP')
  };

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone || !contactMessage) {
      alert('Please fill in your name, WhatsApp number, and message.');
      return;
    }

    const text = `Hello Tripora Alanya,
I have an inquiry from your website.
Name: ${contactName}
Email: ${contactEmail || 'Not specified'}
Phone: ${contactPhone}
Message: ${contactMessage}`;

    const link = createWhatsAppLink(text);
    setIsSent(true);
    window.open(link, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-8 rounded-[32px] bg-[#071325] text-white space-y-6 shadow-xl shadow-slate-950/20">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  OFFICIAL CONTACT DESK
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  TRIPORA ALANYA
                </h3>
                <p className="text-xs text-sky-200/70 mt-1">
                  Experience More • Discover Alanya
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-sky-900/60 text-sm">
                {/* Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Location</span>
                    <span className="font-semibold text-white">{t.location}</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t.whatsapp}</span>
                    <a
                      href={createWhatsAppLink('Hello Tripora Alanya')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-300 hover:text-emerald-200 transition-colors"
                    >
                      {BUSINESS_WHATSAPP_NUMBER}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t.email}</span>
                    <a
                      href={`mailto:${BUSINESS_EMAIL}`}
                      className="font-semibold text-slate-200 hover:text-white transition-colors"
                    >
                      {BUSINESS_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{t.hours}</span>
                    <span className="font-medium text-slate-200">{t.hoursVal}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp button */}
              <div className="pt-2">
                <a
                  id="contact-direct-whatsapp-btn"
                  href={createWhatsAppLink('Hello Tripora Alanya, I would like to chat.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 flex items-center justify-center space-x-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t.whatsappDirect}</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed for Alanya */}
            <div className="rounded-[28px] overflow-hidden border border-slate-200 shadow-md h-64 relative bg-slate-100">
              <iframe
                title="Tripora Alanya Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102434.60677598822!2d31.944208754160453!3d36.54443689456578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dc9892c90c7677%3A0xe54ef9850ecce671!2sAlanya%2C%20Antalya%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2str!4v1700000000000!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[32px] bg-slate-50 border border-slate-200/90 text-left">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-slate-950">
                  {t.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {t.formSubtitle}
                </p>
              </div>

              {isSent ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Message Prepared!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your inquiry has been opened in WhatsApp. Simply tap "Send" to connect directly with our Alanya team.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="text-xs text-sky-700 font-bold underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={e => setContactName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={e => setContactPhone(e.target.value)}
                        placeholder="+44 7123 456789"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={e => setContactEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.messageLabel} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessage}
                      onChange={e => setContactMessage(e.target.value)}
                      placeholder="Tell us what tours you are interested in, dates, hotel location, or questions..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-4 rounded-2xl bg-[#0a192f] hover:bg-[#071325] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.sendBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
