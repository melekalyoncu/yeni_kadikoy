'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGallery, MediaItem } from '@/lib/hooks/useGallery';
import HeroBand from '../components/sections/HeroBand';
import { X } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function GaleriPage() {
  const { media, isLoading } = useGallery();
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const allMedia = isMounted ? media : [];

  const openLightbox = (item: MediaItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (currentIndex < allMedia.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(allMedia[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(allMedia[currentIndex - 1]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <HeroBand
          pill="Medya • Galeri"
          title="MEDYA GALERİSİ"
          subtitle="Antrenmanlardan Turnuvalara, Sahadaki Anlarımız"
        />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#1E4FBC] border-r-transparent"></div>
            <p className="mt-6 text-neutral-600 font-medium">Yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <HeroBand
        pill="Medya • Galeri"
        title="MEDYA GALERİSİ"
        subtitle="Antrenmanlardan Turnuvalara, Sahadaki Anlarımız"
      />

      <div className="container mx-auto px-4 py-12">

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-16">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#1E4FBC] border-r-transparent"></div>
            <p className="mt-6 text-neutral-600 font-medium">Medya yükleniyor...</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && allMedia.length === 0 && (
          <div className="text-center py-16">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#2563eb]/15 via-[#eab308]/25 to-[#16a34a]/15 max-w-md mx-auto">
              <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm p-12">
                <div className="text-7xl mb-6">📸</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Henüz Medya Yok</h3>
                <p className="text-neutral-600 leading-relaxed">Galeride henüz fotoğraf bulunmuyor.</p>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        {!isLoading && allMedia.length > 0 && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {allMedia.map((item, index) => (
              <motion.div
                key={item.fileName}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative rounded-xl overflow-hidden aspect-square shadow-[0_16px_40px_rgba(0,0,0,0.15)] ring-1 ring-black/5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.fileUrl}
                    alt={item.fileName}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Info Badge */}
                  <div className="pointer-events-none absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg ring-1 ring-white/20">
                      {item.name || 'Kadıköy Spor'}
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="pointer-events-none absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ring-1 ring-white/30">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all ring-1 ring-white/20"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium text-sm ring-1 ring-white/20">
              {currentIndex + 1} / {allMedia.length}
            </div>

            {/* Previous Button */}
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all ring-1 ring-white/20"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {currentIndex < allMedia.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all ring-1 ring-white/20"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage.fileUrl}
                alt={selectedImage.fileName}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-bold text-lg">{selectedImage.name || 'Kadıköy Spor Kulübü'}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

