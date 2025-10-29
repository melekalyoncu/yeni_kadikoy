'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroBand from '@/app/components/sections/HeroBand';

type News = {
  id: string;
  title: string;
  summary: string;
  coverUrl?: string;
  createdAt: string; // ISO
  status: 'published' | 'draft';
};

const MOCK: News[] = [
  {
    id: '1',
    title: 'U16 Voleybol Takımı Sezonu Açtı',
    summary: 'Sezonun ilk idmanı yoğun katılımla gerçekleşti.',
    coverUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2025-10-15T10:00:00Z',
    status: 'published',
  },
  {
    id: '2',
    title: 'Basketbol Yaz Kampı Kayıtları Başladı',
    summary: 'Kontenjanlar sınırlı, erken kayıt avantajlarını kaçırmayın.',
    coverUrl: 'https://images.unsplash.com/photo-1526679493841-4c05e1f0a63d?q=80&w=1200&auto=format&fit=crop',
    createdAt: '2025-10-10T09:00:00Z',
    status: 'draft',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function AdminNewsPage() {
  const [query, setQuery] = useState('');
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MOCK;
    return MOCK.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      {/* Üst bant */}
      <HeroBand
        pill="Yönetim • Haberler"
        title="Haber Yönetimi"
        subtitle="Kulüp haberlerini oluştur, düzenle ve yayına al"
        actions={
          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/haberler/yeni"
              className="rounded-xl bg-yellow-400 text-slate-900 hover:bg-yellow-300 active:bg-yellow-500
                         px-4 py-2 font-semibold transition-colors focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              + Yeni Haber
            </Link>
          </div>
        }
      />

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Arama & Filtre Satırı */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          <div className="relative flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Haberlerde ara..."
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700
                         bg-white/80 dark:bg-slate-800/70 shadow-sm px-4 py-3
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">⌘K</span>
          </div>

          <Link
            href="/admin/haberler/yeni"
            className="sm:hidden rounded-xl bg-yellow-400 text-slate-900 hover:bg-yellow-300 active:bg-yellow-500
                       px-4 py-3 font-semibold transition-colors text-center"
          >
            + Yeni Haber
          </Link>
        </motion.div>

        {/* Boş durum */}
        {list.length === 0 && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700
                       bg-white/60 dark:bg-slate-800/50 p-10 text-center"
          >
            <p className="text-slate-600 dark:text-slate-300 mb-3">
              Aramanıza uygun haber bulunamadı.
            </p>
            <Link
              href="/admin/haberler/yeni"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 text-slate-900
                         hover:bg-yellow-300 active:bg-yellow-500 px-4 py-2 font-semibold transition-colors"
            >
              + İlk haberi oluştur
            </Link>
          </motion.div>
        )}

        {/* Desktop: Tablo | Mobile: Kartlar */}
        {list.length > 0 && (
          <>
            {/* Desktop Tablo */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50/80 dark:bg-slate-800/60">
                  <tr className="text-slate-600 dark:text-slate-300">
                    <th className="px-5 py-3 font-semibold">Kapak</th>
                    <th className="px-5 py-3 font-semibold">Başlık</th>
                    <th className="px-5 py-3 font-semibold">Durum</th>
                    <th className="px-5 py-3 font-semibold">Tarih</th>
                    <th className="px-5 py-3 text-right font-semibold">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 dark:divide-slate-700/60">
                  {list.map((n) => (
                    <tr key={n.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="px-5 py-3">
                        <div className="h-12 w-20 overflow-hidden rounded-md bg-slate-100 dark:bg-slate-700">
                          {n.coverUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={n.coverUrl} alt={n.title} className="h-full w-full object-cover" />
                          ) : (
                            <div className="h-full w-full grid place-items-center text-slate-400">—</div>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <div className="font-semibold">{n.title}</div>
                        <div className="text-sm text-slate-500 line-clamp-1">{n.summary}</div>
                      </td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium
                          ${n.status === 'published'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}>
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          {n.status === 'published' ? 'Yayında' : 'Taslak'}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-slate-600 dark:text-slate-300">
                        {new Date(n.createdAt).toLocaleDateString('tr-TR')}
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/admin/haberler/${n.id}/duzenle`}
                            className="rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5
                                       hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm"
                          >
                            Düzenle
                          </Link>
                          <Link
                            href={`/haber/${n.id}`}
                            className="rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5
                                       hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm"
                          >
                            Görüntüle
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Kartlar */}
            <div className="md:hidden grid gap-4">
              {list.map((n) => (
                <div
                  key={n.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/70 shadow-sm overflow-hidden"
                >
                  {n.coverUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={n.coverUrl} alt={n.title} className="h-40 w-full object-cover" />
                  )}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold leading-snug">{n.title}</h3>
                      <span className={`shrink-0 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium
                        ${n.status === 'published'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {n.status === 'published' ? 'Yayında' : 'Taslak'}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{n.summary}</p>

                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">
                        {new Date(n.createdAt).toLocaleDateString('tr-TR')}
                      </span>
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/haberler/${n.id}/duzenle`}
                          className="rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5
                                     hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          Düzenle
                        </Link>
                        <Link
                          href={`/haber/${n.id}`}
                          className="rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5
                                     hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          Görüntüle
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
