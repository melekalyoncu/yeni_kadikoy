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
      <div className="min-h-screen bg-neutral-50">
        <HeroBand
          pill="Haberler • Gündem"
          title="HABERLER"
          subtitle="Kulübümüzden Son Haberler ve Gelişmeler"
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
      {/* Hero Section */}
      <HeroBand
        pill="Haberler • Gündem"
        title="HABERLER"
        subtitle="Kulübümüzden Son Haberler ve Gelişmeler"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-2 flex justify-center lg:block">
            <SponsorSidebar maxSponsors={6} />
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
                    className={`px-4 py-2.5 rounded-xl font-semibold transition-all ${selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-[#1E4FBC] to-[#183E93] text-white shadow-[0_8px_24px_rgba(30,79,188,0.4)] hover:shadow-[0_12px_32px_rgba(24,62,147,0.6)] hover:-translate-y-0.5'
                      : 'bg-white/80 backdrop-blur-xl border border-slate-200/70 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
                      }`}
                  >
                    {cat.icon} {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-16">
                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#1E4FBC] border-r-transparent"></div>
                <p className="mt-6 text-neutral-600 font-medium">Haberler yükleniyor...</p>
              </div>
            )}

            {/* Empty State */}
            {!isLoading && allNews.length === 0 && (
              <div className="text-center py-16">
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#2563eb]/15 via-[#eab308]/25 to-[#16a34a]/15 max-w-md mx-auto">
                  <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm p-12">
                    <div className="text-7xl mb-6">📰</div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Henüz Haber Yok</h3>
                    <p className="text-neutral-600 leading-relaxed">Bu kategoride henüz haber bulunmuyor.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Featured News */}
            {!isLoading && allNews.length > 0 && (
              <section className="mb-12">
                <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#2563eb]/15 via-[#eab308]/25 to-[#16a34a]/15 overflow-hidden">
                  <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm overflow-hidden">
                    {allNews[0].mediaFiles && allNews[0].mediaFiles.length > 0 ? (
                      <div className="h-64 overflow-hidden">
                        <img
                          src={allNews[0].mediaFiles[0].s3Url}
                          alt={allNews[0].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-neutral-800 to-neutral-700 h-64 flex items-center justify-center text-8xl text-white">
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
                      <h2 className="text-3xl font-bold text-neutral-900 mb-4 line-clamp-2">{allNews[0].title}</h2>
                      <p className="text-neutral-700 leading-relaxed mb-6 line-clamp-3">{allNews[0].content}</p>
                      <Link
                        href={`/haberler/${allNews[0].id}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#1E4FBC] hover:bg-[#183E93] text-white px-5 py-2.5 text-[13px] font-semibold shadow-[0_12px_32px_rgba(30,79,188,0.4)] hover:shadow-[0_16px_40px_rgba(24,62,147,0.6)] hover:-translate-y-0.5 transition"
                      >
                        Devamını Oku
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* All News Grid */}
            {!isLoading && allNews.length > 1 && (
              <section>
                <div className="mb-8 flex items-center justify-center gap-3 md:gap-4 text-center">
                  {/* sol şerit */}
                  <span className="h-[2px] w-8 md:w-10 rounded-full bg-gradient-to-r from-[#eab308] to-[#c2410c]" />

                  {/* başlık */}
                  <h2
                    className="
    text-2xl md:text-4xl
    font-medium italic
    tracking-[-0.03em]
    bg-gradient-to-r from-[#eab308] to-[#c2410c]
    text-transparent bg-clip-text
    drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]
    pr-1
  "
                  >
                    Tüm Haberler
                  </h2>


                  {/* sağ şerit */}
                  <span className="h-[2px] w-8 md:w-10 rounded-full bg-gradient-to-r from-[#eab308] to-[#c2410c]" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {allNews.slice(1).map((news) => (
                    <div key={news.id} className="group h-full flex flex-col">
                      <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-[#2563eb]/15 via-[#eab308]/25 to-[#16a34a]/15 h-full">
                        <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm overflow-hidden h-full flex flex-col">
                          {news.mediaFiles && news.mediaFiles.length > 0 ? (
                            <div className="h-48 overflow-hidden flex-shrink-0">
                              <img
                                src={news.mediaFiles[0].s3Url}
                                alt={news.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          ) : (
                            <div className="bg-gradient-to-br from-neutral-800 to-neutral-700 h-48 flex items-center justify-center text-6xl text-white flex-shrink-0">
                              📰
                            </div>
                          )}
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 mb-3 flex-shrink-0">
                              <span className="bg-gradient-to-r from-[#EAB308] to-[#FACC15] text-slate-900 px-3 py-1 rounded-full text-xs font-medium shadow-md">
                                {news.sportTypeName}
                              </span>
                              <span className="text-slate-500 text-sm">{formatDate(news.publishedAt)}</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-neutral-900 line-clamp-2 flex-shrink-0">{news.title}</h3>
                            <p className="text-neutral-700 text-sm mb-4 line-clamp-3 flex-grow">{news.content}</p>
                            <Link
                              href={`/haberler/${news.id}`}
                              className="inline-flex items-center gap-2 font-semibold text-neutral-900 hover:text-[#eab308] transition-colors flex-shrink-0"
                            >
                              Devamını Oku
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-3 mt-12">
                    <button
                      onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                      disabled={pageNumber === 1}
                      className="px-5 py-2.5 rounded-xl bg-white/80 backdrop-blur-xl border border-slate-200/70 text-slate-700 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-sm transition-all shadow-sm hover:shadow-md"
                    >
                      ← Önceki
                    </button>
                    <span className="px-4 py-2 text-sm font-medium text-slate-600 bg-white/60 backdrop-blur-xl rounded-lg border border-slate-200/50">
                      Sayfa {pageNumber} / {totalPages}
                    </span>
                    <button
                      onClick={() => setPageNumber(Math.min(totalPages, pageNumber + 1))}
                      disabled={pageNumber === totalPages}
                      className="px-5 py-2.5 rounded-xl bg-white/80 backdrop-blur-xl border border-slate-200/70 text-slate-700 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-sm transition-all shadow-sm hover:shadow-md"
                    >
                      Sonraki →
                    </button>
                  </div>
                )}
              </section>
            )}
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-2 flex justify-center lg:block">
            <SponsorSidebar maxSponsors={6} />
          </aside>
        </div>
      </div>
    </div>
  );
}

