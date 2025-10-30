'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SponsorSidebar from '@/app/components/common/SponsorSidebar';
import HeroBand from '@/app/components/sections/HeroBand';
import { useNewsList, SportType, formatDate } from '@/lib/hooks/useNews';

export default function HaberlerPage() {
  const [selectedCategory, setSelectedCategory] = useState<SportType | undefined>(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 9;

  // Fetch news with SWR
  const { news: allNews, totalCount, totalPages, isLoading } = useNewsList(
    selectedCategory,
    true, // Only active news
    pageNumber,
    pageSize
  );

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reset to page 1 when category changes
  useEffect(() => {
    setPageNumber(1);
  }, [selectedCategory]);

  const categories = [
    { id: undefined, name: 'Tümü', icon: '📰' },
    { id: SportType.Okculuk, name: 'Okçuluk', icon: '🎯' },
    { id: SportType.Basketbol, name: 'Basketbol', icon: '🏀' },
    { id: SportType.Voleybol, name: 'Voleybol', icon: '🏐' },
  ];

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-white">
        <HeroBand
          pill="Haberler • Gündem"
          title="HABERLER"
          subtitle="Kulübümüzden Son Haberler ve Gelişmeler"
        />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-slate-600">Yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBand
        pill="Haberler • Gündem"
        title="HABERLER"
        subtitle="Kulübümüzden Son Haberler ve Gelişmeler"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-2">
            <SponsorSidebar />
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedCategory === cat.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-slate-600">Haberler yükleniyor...</p>
              </div>
            )}

            {/* Empty State */}
            {!isLoading && allNews.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📰</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Henüz Haber Yok</h3>
                <p className="text-slate-600">Bu kategoride henüz haber bulunmuyor.</p>
              </div>
            )}

            {/* Featured News */}
            {!isLoading && allNews.length > 0 && (
              <section className="mb-12">
                <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  {allNews[0].mediaFiles && allNews[0].mediaFiles.length > 0 ? (
                    <div className="h-64 overflow-hidden">
                      <img
                        src={allNews[0].mediaFiles[0].s3Url}
                        alt={allNews[0].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-slate-800 to-slate-700 h-64 flex items-center justify-center text-8xl">
                      📰
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-[#EAB308] to-[#FACC15] text-slate-900 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                        {allNews[0].sportTypeName}
                      </span>
                      <span className="text-slate-500 text-sm">{formatDate(allNews[0].publishedAt)}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">{allNews[0].title}</h2>
                    <p className="text-slate-700 leading-relaxed mb-6 line-clamp-3">{allNews[0].content}</p>
                    <Link
                      href={`/haberler/${allNews[0].id}`}
                      className="inline-block bg-gradient-to-r from-slate-800 to-slate-700 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      Devamını Oku →
                    </Link>
                  </div>
                </div>
              </section>
            )}

            {/* All News Grid */}
            {!isLoading && allNews.length > 1 && (
              <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-8">Tüm Haberler</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {allNews.slice(1).map((news) => (
                    <div key={news.id} className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                      {news.mediaFiles && news.mediaFiles.length > 0 ? (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={news.mediaFiles[0].s3Url}
                            alt={news.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="bg-gradient-to-br from-slate-800 to-slate-700 h-48 flex items-center justify-center text-6xl">
                          📰
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-gradient-to-r from-[#EAB308] to-[#FACC15] text-slate-900 px-3 py-1 rounded-full text-xs font-medium shadow-md">
                            {news.sportTypeName}
                          </span>
                          <span className="text-slate-500 text-sm">{formatDate(news.publishedAt)}</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-slate-800">{news.title}</h3>
                        <p className="text-slate-700 text-sm mb-4 line-clamp-2">{news.content}</p>
                        <Link
                          href={`/haberler/${news.id}`}
                          className="text-slate-800 font-medium hover:text-[#EAB308]"
                        >
                          Devamını Oku →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-12">
                    <button
                      onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                      disabled={pageNumber === 1}
                      className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm transition"
                    >
                      ← Önceki
                    </button>
                    <span className="px-4 py-2 text-sm text-slate-600">
                      Sayfa {pageNumber} / {totalPages}
                    </span>
                    <button
                      onClick={() => setPageNumber(Math.min(totalPages, pageNumber + 1))}
                      disabled={pageNumber === totalPages}
                      className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm transition"
                    >
                      Sonraki →
                    </button>
                  </div>
                )}
              </section>
            )}
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-2">
            <SponsorSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}

