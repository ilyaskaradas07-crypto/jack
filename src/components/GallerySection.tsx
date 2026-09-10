import React, { useState } from 'react';
import { Camera, X, ZoomIn, Users } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/faqAndReviews';
import { Language } from '../types';

interface GallerySectionProps {
  currentLang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const tags = [
    { id: 'all', label: 'All Photos' },
    { id: 'sea', label: 'Sea & Yachts' },
    { id: 'adventure', label: 'Adventures' },
    { id: 'landmarks', label: 'Historical & Nature' },
    { id: 'shopping', label: 'Shopping & Style' },
  ];

  const filteredItems = selectedTag === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedTag);

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-sky-600" />
            <span>Mediterranean Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Discover Alanya in Pictures
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From the turquoise waters of Cleopatra Beach to the Taurus Mountains and lively bazaars.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {tags.map(tag => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedTag === tag.id
                  ? 'bg-[#0a192f] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => {
            const count = 1850 + (idx * 340) % 3600;
            const formatted = count.toLocaleString();
            const label = currentLang === 'tr' ? `${formatted}+ kişi` :
                          currentLang === 'ru' ? `${formatted}+ уч.` :
                          currentLang === 'de' ? `${formatted}+ Pers.` :
                          currentLang === 'pl' ? `${formatted}+ osób` :
                          `${formatted}+ guests`;

            return (
              <div
                key={idx}
                id={`gallery-item-${idx}`}
                onClick={() => setActivePhoto(item)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/images/alanya-boat-tour.jpg';
                  }}
                />

                {/* Participant Count on Photo */}
                <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-slate-950/85 text-emerald-300 border border-emerald-400/40 backdrop-blur-sm flex items-center space-x-1 shadow-md">
                  <Users className="w-3 h-3 text-emerald-400" />
                  <span>{label}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-left">
                  <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                    {item.tag}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {item.title}
                  </p>
                  <div className="mt-2 flex items-center text-xs text-slate-300">
                    <ZoomIn className="w-3.5 h-3.5 mr-1" />
                    <span>Click to expand</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full max-h-[75vh] object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/images/alanya-boat-tour.jpg';
                }}
              />
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-slate-950/85 border border-emerald-400/40 text-emerald-300 backdrop-blur-md flex items-center space-x-1.5 text-xs font-bold shadow-lg">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>2,400+ {currentLang === 'tr' ? 'kişi katıldı' : 'participants'}</span>
              </div>
            </div>
            <div className="p-5 bg-slate-900 text-left flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 block mb-1">
                  {activePhoto.tag}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {activePhoto.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
