import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '../types';
import { BUSINESS_WHATSAPP_NUMBER, createWhatsAppLink } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const messages: Record<Language, { tooltip: string; defaultMsg: string }> = {
    en: {
      tooltip: 'Need assistance? Chat on WhatsApp',
      defaultMsg: 'Hello Tripora Alanya, I would like to inquire about tours.'
    },
    tr: {
      tooltip: 'Sorunuz mu var? WhatsApp\'tan yazın',
      defaultMsg: 'Merhaba Tripora Alanya, turlar hakkında bilgi almak istiyorum.'
    },
    ru: {
      tooltip: 'Есть вопросы? Напишите нам в WhatsApp',
      defaultMsg: 'Здравствуйте, Tripora Alanya! Хочу узнать подробнее об экскурсиях.'
    },
    de: {
      tooltip: 'Fragen? Schreiben Sie uns auf WhatsApp',
      defaultMsg: 'Hallo Tripora Alanya, ich möchte mich über Touren erkundigen.'
    },
    pl: {
      tooltip: 'Masz pytania? Napisz na WhatsApp',
      defaultMsg: 'Dzień dobry Tripora Alanya, chciałbym zapytać o wycieczki.'
    },
    uk: {
      tooltip: 'Маєте запитання? Напишіть нам у WhatsApp',
      defaultMsg: 'Вітаю, Tripora Alanya! Хочу дізнатися детальніше про екскурсії.'
    },
    ro: {
      tooltip: 'Aveți întrebări? Scrieți-ne pe WhatsApp',
      defaultMsg: 'Bună ziua Tripora Alanya, aș dori să aflu mai multe despre excursii.'
    },
    sr: {
      tooltip: 'Imate pitanja? Pišite nam na WhatsApp',
      defaultMsg: 'Dobar dan Tripora Alanya, želeo bih da se raspitam o turama.'
    }
  };

  const currentMsg = messages[currentLang] || messages.en;
  const whatsappUrl = createWhatsAppLink(currentMsg.defaultMsg);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center space-x-3">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-2xl bg-[#0a192f] text-white text-xs font-semibold shadow-xl border border-emerald-500/30 animate-bounce [animation-duration:3s]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{currentMsg.tooltip}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-950/50 transform hover:scale-110 active:scale-95 transition-all cursor-pointer"
        aria-label="Chat on WhatsApp +905051422116"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" />
      </a>
    </div>
  );
};
