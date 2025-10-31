'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { logout } from '@/app/store/authSlice';
import { useGallery, uploadMedia, deleteMedia, MediaItem } from '@/lib/hooks/useGallery';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Photo interface with category metadata
interface Photo extends MediaItem {
  category?: string;
  uploadDate?: string;
}

export default function GaleriYonetimi() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Use SWR hook for gallery data
  const { media, isLoading: loading, mutate } = useGallery();

  const [uploading, setUploading] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Voleybol',
    file: null as File | null,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/admin');
  };

  // Convert MediaItem[] to Photo[] for display
  const photos: Photo[] = media.map((item) => ({
    id: item.id,
    name: item.name,
    fileName: item.fileName,
    fileUrl: item.fileUrl,
    order: item.order,
    category: 'Voleybol', // Default category
  }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.file) {
      alert('Lütfen bir dosya seçin');
      return;
    }

    if (!formData.name.trim()) {
      alert('Lütfen bir isim girin');
      return;
    }

    try {
      setUploading(true);
      await uploadMedia(formData.file, formData.name);

      // Refresh the gallery data
      await mutate();

      alert('Fotoğraf başarıyla yüklendi!');
      setShowUploadModal(false);
      setFormData({ name: '', category: 'Voleybol', file: null });
    } catch (error: any) {
      console.error('Yükleme hatası:', error);
      alert(error.message || 'Fotoğraf yüklenemedi');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu fotoğrafı silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      await deleteMedia(id);

      // Refresh the gallery data
      await mutate();

      alert('Fotoğraf başarıyla silindi!');
    } catch (error: any) {
      console.error('Silme hatası:', error);
      alert(error.message || 'Fotoğraf silinemedi');
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <p className="text-slate-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="hover:opacity-80 transition">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Galeri Yönetimi</h1>
                <p className="text-blue-100 text-sm">Fotoğraf ekle, düzenle ve sil</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowUploadModal(true)}
                disabled={uploading}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Fotoğraf Ekle
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                title="Çıkış Yap"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Çıkış
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Toplam Fotoğraf</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{photos.length}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                📸
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Voleybol</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">
                  {photos.filter(p => p.category === 'Voleybol').length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl">
                🏐
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Basketbol</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">
                  {photos.filter(p => p.category === 'Basketbol').length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-2xl">
                🏀
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Okçuluk</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">
                  {photos.filter(p => p.category === 'Okçuluk').length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                🎯
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photos Grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.fileName}
              variants={fadeUp}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.fileUrl}
                  alt={photo.fileName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 mb-1 truncate" title={photo.name}>
                  {photo.name}
                </h3>
                <p className="text-sm text-slate-600 mb-3">{photo.category || 'Genel'}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {photo.uploadedAt
                      ? new Date(photo.uploadedAt).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })
                      : 'Tarih yok'}
                  </span>
                  <button
                    onClick={() => handleDelete(photo.id)}
                    className="text-red-600 hover:text-red-700 font-semibold text-sm"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {photos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Henüz fotoğraf yok</h3>
            <p className="text-slate-600 mb-6">Galeriye ilk fotoğrafı eklemek için yukarıdaki butona tıklayın</p>
          </div>
        )}
      </main>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Fotoğraf Ekle</h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-slate-400 hover:text-slate-600 transition"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Başlık / İsim *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Örn: Okçuluk Turnuvası"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-slate-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Kategori
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-slate-900"
                >
                  <option value="Voleybol">Voleybol</option>
                  <option value="Basketbol">Basketbol</option>
                  <option value="Okçuluk">Okçuluk</option>
                  <option value="Genel">Genel</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Fotoğraf Dosyası *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 file:font-semibold hover:file:bg-blue-100"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  disabled={uploading}
                  className="flex-1 px-6 py-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Yükleniyor...' : 'Yükle'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

