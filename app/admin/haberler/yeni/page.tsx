'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { logout } from '@/app/store/authSlice';
import {
  createNews,
  uploadNewsMedia,
  NewsType,
  MediaType,
  type CreateNewsRequest,
} from '@/lib/hooks/useNews';

export default function NewNewsPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState<CreateNewsRequest>({
    title: '',
    content: '',
    newsType: NewsType.Bilgilendirme,
    isActive: true,
  });

  const [mediaFiles, setMediaFiles] = useState<{ file: File; type: MediaType; preview: string }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'newsType') {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value) as NewsType }));
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

    setMediaFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setMediaFiles((prev) => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert('Lütfen haber başlığı girin');
      return;
    }

    if (!formData.content.trim()) {
      alert('Lütfen haber içeriği girin');
      return;
    }

    try {
      setIsSubmitting(true);

      // 1. Create news
      const newsResponse = await createNews(formData);
      const newsId = newsResponse.id;

      // 2. Upload media files
      for (let i = 0; i < mediaFiles.length; i++) {
        const { file, type } = mediaFiles[i];
        await uploadNewsMedia(newsId, file, type, i);
      }

      alert('Haber başarıyla oluşturuldu!');
      router.push('/admin/haberler');
    } catch (error: any) {
      console.error('Haber oluşturma hatası:', error);
      alert(error.message || 'Haber oluşturulamadı');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return null;
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
            <h1 className="text-2xl font-bold text-slate-900">Yeni Haber Oluştur</h1>
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

              {/* News Type */}
              <div>
                <label htmlFor="newsType" className="block text-sm font-medium text-slate-700 mb-2">
                  Haber Türü *
                </label>
                <select
                  id="newsType"
                  name="newsType"
                  value={formData.newsType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                >
                  <option value={NewsType.Bilgilendirme}>Bilgilendirme</option>
                  <option value={NewsType.SkorTakibi}>Skor Takibi</option>
                  <option value={NewsType.OzelGun}>Özel Gün</option>
                  <option value={NewsType.SosyalSorumluluk}>Sosyal Sorumluluk</option>
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

            {/* Right Column - Media Upload */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Medya Dosyaları</h3>

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
                <div className="mb-4">
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

              {/* Media Preview */}
              {mediaFiles.length > 0 && (
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Seçilen Dosyalar ({mediaFiles.length})</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {mediaFiles.map((media, index) => (
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
                          onClick={() => removeFile(index)}
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
              {isSubmitting ? 'Oluşturuluyor...' : '✓ Haberi Oluştur'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

