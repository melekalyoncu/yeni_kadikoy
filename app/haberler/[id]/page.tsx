'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SponsorSidebar from '@/app/components/common/SponsorSidebar';
import HeroBand from '@/app/components/sections/HeroBand';
import { useNewsDetail, formatDate, getSportTypeName } from '@/lib/hooks/useNews';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const newsId = params?.id ? parseInt(params.id as string) : null;

  const { news, isLoading, isError } = useNewsDetail(newsId);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <HeroBand title="Haber Detayı" />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-slate-600">Yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <HeroBand title="Haber Detayı" />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-slate-600">Yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !news) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <HeroBand title="Haber Bulunamadı" />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">📰</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Haber Bulunamadı</h2>
            <p className="text-slate-600 mb-8">Aradığınız haber bulunamadı veya kaldırılmış olabilir.</p>
            <Link
              href="/haberler"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ← Haberlere Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Separate photos and videos
  const photos = news.mediaFiles.filter((m) => m.mediaType === 0);
  const videos = news.mediaFiles.filter((m) => m.mediaType === 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <HeroBand title={news.title} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <motion.main
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="lg:col-span-8"
          >
            {/* Article Header */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
              {/* Cover Image */}
              {photos.length > 0 && (
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={photos[0].s3Url}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Article Info */}
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {news.sportTypeName}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(news.publishedAt)}
                  </span>
                  {news.updatedAt && (
                    <span className="text-slate-400 text-sm">
                      (Güncellendi: {formatDate(news.updatedAt)})
                    </span>
                  )}
                </div>

                <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {news.title}
                </h1>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {news.content}
                  </div>
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            {photos.length > 1 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Fotoğraf Galerisi
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {photos.slice(1).map((photo, index) => (
                    <div key={photo.id} className="relative aspect-video rounded-lg overflow-hidden group">
                      <img
                        src={photo.s3Url}
                        alt={`${news.title} - ${index + 2}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video Gallery */}
            {videos.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Videolar
                </h2>
                <div className="grid gap-6">
                  {videos.map((video) => (
                    <div key={video.id} className="relative aspect-video rounded-lg overflow-hidden bg-slate-900">
                      <video
                        src={video.s3Url}
                        controls
                        className="w-full h-full"
                      >
                        Tarayıcınız video oynatmayı desteklemiyor.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="flex justify-center">
              <Link
                href="/haberler"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Tüm Haberlere Dön
              </Link>
            </div>
          </motion.main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <SponsorSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}

