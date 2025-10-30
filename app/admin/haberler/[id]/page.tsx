'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { logout } from '@/app/store/authSlice';
import {
  useNewsDetail,
  updateNews,
  uploadNewsMedia,
  deleteNewsMedia,
  SportType,
  MediaType,
  type UpdateNewsRequest,
} from '@/lib/hooks/useNews';

export default function EditNewsPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const newsId = params?.id ? parseInt(params.id as string) : null;
  const { news, isLoading, mutate } = useNewsDetail(newsId);

  const [formData, setFormData] = useState<UpdateNewsRequest>({
    title: '',
    content: '',
    sportType: SportType.Hepsi,
    isActive: true,
  });

  const [newMediaFiles, setNewMediaFiles] = useState<{ file: File; type: MediaType; preview: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auth check
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  // Load news data
  useEffect(() => {
    if (news) {
      setFormData({
        title: news.title,
        content: news.content,
        sportType: news.sportType,
        isActive: news.isActive,
      });
    }
  }, [news]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/admin');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'sportType') {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value) as SportType }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, mediaType: MediaType) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newFiles = Array.from(files).map((file) => ({
      file,
      type: mediaType,
      preview: URL.createObjectURL(file),
    }));

    setNewMediaFiles((prev) => [...prev, ...newFiles]);
  };

  const removeNewFile = (index: number) => {
    setNewMediaFiles((prev) => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleDeleteExistingMedia = async (mediaId: number) => {
    if (!confirm('Bu medya dosyasını silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      await deleteNewsMedia(mediaId);
      await mutate();
      alert('Medya dosyası silindi!');
    } catch (error: any) {
      console.error('Medya silme hatası:', error);
      alert(error.message || 'Medya dosyası silinemedi');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsId) {
      alert('Haber ID bulunamadı');
      return;
    }

    if (!formData.title?.trim()) {
      alert('Lütfen haber başlığı girin');
      return;
    }

    if (!formData.content?.trim()) {
      alert('Lütfen haber içeriği girin');
      return;
    }

    try {
      setIsSubmitting(true);

      // 1. Update news
      await updateNews(newsId, formData);

      // 2. Upload new media files
      const currentMediaCount = news?.mediaFiles.length || 0;
      for (let i = 0; i < newMediaFiles.length; i++) {
        const { file, type } = newMediaFiles[i];
        await uploadNewsMedia(newsId, file, type, currentMediaCount + i);
      }

      alert('Haber başarıyla güncellendi!');
      router.push('/admin/haberler');
    } catch (error: any) {
      console.error('Haber güncelleme hatası:', error);
      alert(error.message || 'Haber güncellenemedi');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Haber Bulunamadı</h2>
          <Link
            href="/admin/haberler"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold transition"
          >
            ← Haberlere Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/haberler"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">Haber Düzenle</h1>
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

      {/* Form */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                  Başlık *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Haber başlığını girin"
                  required
                />
              </div>

              {/* Sport Type */}
              <div>
                <label htmlFor="sportType" className="block text-sm font-medium text-slate-700 mb-2">
                  Spor Dalı *
                </label>
                <select
                  id="sportType"
                  name="sportType"
                  value={formData.sportType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  <option value={SportType.Hepsi}>Hepsi (Genel)</option>
                  <option value={SportType.Okculuk}>Okçuluk</option>
                  <option value={SportType.Basketbol}>Basketbol</option>
                  <option value={SportType.Voleybol}>Voleybol</option>
                </select>
              </div>

              {/* Active Status */}
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-slate-700">Aktif (Yayında)</span>
                </label>
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-2">
                  İçerik *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={16}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  placeholder="Haber içeriğini girin"
                  required
                />
              </div>
            </div>

            {/* Right Column - Media */}
            <div className="space-y-6">

              {/* Existing Media */}
              {news.mediaFiles && news.mediaFiles.length > 0 && (
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Mevcut Medya Dosyaları ({news.mediaFiles.length})</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {news.mediaFiles.map((media) => (
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
                          type="button"
                          onClick={() => handleDeleteExistingMedia(media.id)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition shadow-lg hover:bg-red-600"
                          title="Medya dosyasını sil"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upload New Media */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Yeni Medya Ekle</h3>

                {/* Photo Upload */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    📷 Fotoğraflar
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleFileSelect(e, MediaType.Photo)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  />
                  <p className="text-xs text-slate-500 mt-1">Maksimum 10 MB</p>
                </div>

                {/* Video Upload */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    🎥 Videolar
                  </label>
                  <input
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={(e) => handleFileSelect(e, MediaType.Video)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  />
                  <p className="text-xs text-slate-500 mt-1">Maksimum 100 MB</p>
                </div>
              </div>

              {/* New Media Preview */}
              {newMediaFiles.length > 0 && (
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Yeni Seçilen Dosyalar ({newMediaFiles.length})</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {newMediaFiles.map((media, index) => (
                      <div key={index} className="relative group">
                        {media.type === MediaType.Photo ? (
                          <div className="relative">
                            <img
                              src={media.preview}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg border border-slate-200"
                            />
                            <div className="absolute top-1 left-1 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">
                              📷
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full h-24 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="absolute top-1 left-1 bg-purple-500 text-white text-xs px-1.5 py-0.5 rounded">
                              🎥
                            </div>
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => removeNewFile(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition shadow-lg hover:bg-red-600"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-slate-200">
            <Link
              href="/admin/haberler"
              className="px-6 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-sm transition"
            >
              İptal
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Güncelleniyor...' : '✓ Haberi Güncelle'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

