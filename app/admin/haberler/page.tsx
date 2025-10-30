'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { logout } from '@/app/store/authSlice';
import {
  useNewsList,
  deleteNews,
  deleteNewsMedia,
  SportType,
  MediaType,
  formatDate,
} from '@/lib/hooks/useNews';

export default function AdminNewsPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Filters
  const [sportTypeFilter, setSportTypeFilter] = useState<SportType | undefined>(undefined);
  const [isActiveFilter, setIsActiveFilter] = useState<boolean | undefined>(true);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10;

  // Expanded news for media view
  const [expandedNewsId, setExpandedNewsId] = useState<number | null>(null);

  // Fetch news with SWR
  const { news, totalCount, totalPages, isLoading, isError, mutate } = useNewsList(
    sportTypeFilter,
    isActiveFilter,
    pageNumber,
    pageSize
  );

  // Auth check
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/admin');
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu haberi silmek istediğinizden emin misiniz? Tüm medya dosyaları da silinecek.')) {
      return;
    }

    try {
      await deleteNews(id);
      await mutate();
      alert('Haber başarıyla silindi!');
    } catch (error: any) {
      console.error('Silme hatası:', error);
      alert(error.message || 'Haber silinemedi');
    }
  };

  const handleDeleteMedia = async (mediaId: number, newsTitle: string) => {
    if (!confirm(`"${newsTitle}" haberinden bu medya dosyasını silmek istediğinizden emin misiniz?`)) {
      return;
    }

    try {
      await deleteNewsMedia(mediaId);
      await mutate();
      alert('Medya dosyası başarıyla silindi!');
    } catch (error: any) {
      console.error('Medya silme hatası:', error);
      alert(error.message || 'Medya dosyası silinemedi');
    }
  };

  const toggleMediaView = (newsId: number) => {
    setExpandedNewsId(expandedNewsId === newsId ? null : newsId);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Haber Yönetimi</h1>
            <p className="text-sm text-slate-600 mt-1">Toplam {totalCount} haber</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard"
              className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-sm transition"
            >
              ← Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 font-semibold text-sm transition flex items-center gap-2"
            >
              <span>🚪</span> Çıkış
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Spor Dalı</label>
              <select
                value={sportTypeFilter ?? ''}
                onChange={(e) => {
                  const val = e.target.value;
                  setSportTypeFilter(val === '' ? undefined : Number(val) as SportType);
                  setPageNumber(1);
                }}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Tümü</option>
                <option value={SportType.Hepsi}>Genel</option>
                <option value={SportType.Okculuk}>Okçuluk</option>
                <option value={SportType.Basketbol}>Basketbol</option>
                <option value={SportType.Voleybol}>Voleybol</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Durum</label>
              <select
                value={isActiveFilter === undefined ? '' : isActiveFilter ? 'true' : 'false'}
                onChange={(e) => {
                  const val = e.target.value;
                  setIsActiveFilter(val === '' ? undefined : val === 'true');
                  setPageNumber(1);
                }}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Tümü</option>
                <option value="true">Aktif</option>
                <option value="false">Pasif</option>
              </select>
            </div>

            <div className="ml-auto">
              <Link
                href="/admin/haberler/yeni"
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm transition inline-block"
              >
                + Yeni Haber
              </Link>
            </div>
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-12">
            <p className="text-slate-600">Yükleniyor...</p>
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-600">Haberler yüklenirken bir hata oluştu.</p>
          </div>
        )}

        {/* Empty */}
        {!isLoading && !isError && news.length === 0 && (
          <div className="bg-white rounded-lg border border-slate-200 p-12 text-center">
            <p className="text-slate-600 mb-4">Henüz haber yok.</p>
            <Link
              href="/admin/haberler/yeni"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm transition inline-block"
            >
              + İlk Haberi Oluştur
            </Link>
          </div>
        )}

        {/* News List */}
        {!isLoading && !isError && news.length > 0 && (
          <>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Başlık</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Spor Dalı</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Durum</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Tarih</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Medya</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-700 uppercase">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {news.map((item) => (
                  <>
                    <tr key={item.id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-900">{item.title}</div>
                        <div className="text-sm text-slate-500 line-clamp-1">{item.content.substring(0, 100)}...</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {item.sportTypeName}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.isActive
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {item.isActive ? 'Aktif' : 'Pasif'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {formatDate(item.publishedAt)}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleMediaView(item.id)}
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                        >
                          {item.mediaFiles.length} dosya
                          <svg
                            className={`w-4 h-4 transition-transform ${expandedNewsId === item.id ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/haberler/${item.id}`}
                            className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium text-sm transition"
                          >
                            Düzenle
                          </Link>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="px-3 py-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 font-medium text-sm transition"
                          >
                            Sil
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Media Files Row */}
                    {expandedNewsId === item.id && item.mediaFiles.length > 0 && (
                      <tr key={`${item.id}-media`}>
                        <td colSpan={6} className="px-6 py-4 bg-slate-50">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-slate-700 mb-3">Medya Dosyaları</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                              {item.mediaFiles.map((media) => (
                                <div key={media.id} className="relative group">
                                  {media.mediaType === MediaType.Photo ? (
                                    <div className="relative">
                                      <img
                                        src={media.s3Url}
                                        alt={media.fileName}
                                        className="w-full h-24 object-cover rounded-lg border border-slate-200"
                                      />
                                      <div className="absolute top-1 left-1 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">
                                        📷 Foto
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="relative w-full h-24 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200">
                                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                      <div className="absolute top-1 left-1 bg-purple-500 text-white text-xs px-1.5 py-0.5 rounded">
                                        🎥 Video
                                      </div>
                                    </div>
                                  )}
                                  <button
                                    onClick={() => handleDeleteMedia(media.id, item.title)}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition shadow-lg hover:bg-red-600"
                                    title="Medya dosyasını sil"
                                  >
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </button>
                                  <div className="mt-1 text-xs text-slate-600 truncate" title={media.fileName}>
                                    {media.fileName.substring(0, 15)}...
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-6">
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
          </>
        )}
      </main>
    </div>
  );
}
