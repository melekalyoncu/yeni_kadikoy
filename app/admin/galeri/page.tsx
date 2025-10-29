'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/app/store/hooks';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Temporary mock data - will be replaced with API
interface Photo {
  id: number;
  title: string;
  url: string;
  category: string;
  uploadDate: string;
}

export default function GaleriYonetimi() {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [photos, setPhotos] = useState<Photo[]>([
    { id: 1, title: 'Voleybol Maçı', url: '🏐', category: 'Voleybol', uploadDate: '2025-01-15' },
    { id: 2, title: 'Basketbol Antrenmanı', url: '🏀', category: 'Basketbol', uploadDate: '2025-01-14' },
    { id: 3, title: 'Okçuluk Yarışması', url: '🎯', category: 'Okçuluk', uploadDate: '2025-01-13' },
  ]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Voleybol',
    file: null as File | null,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API integration will be added here
    alert('Fotoğraf yükleme API\'si entegre edilecek');
    setShowUploadModal(false);
    setFormData({ title: '', category: 'Voleybol', file: null });
  };

  const handleDelete = (id: number) => {
    if (confirm('Bu fotoğrafı silmek istediğinizden emin misiniz?')) {
      // TODO: API integration will be added here
      setPhotos(photos.filter(p => p.id !== id));
      alert('Silme API\'si entegre edilecek');
    }
  };

  if (!isAuthenticated) {
    return null;
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
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Fotoğraf Ekle
            </button>
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
              key={photo.id}
              variants={fadeUp}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-6xl">
                {photo.url}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 mb-1">{photo.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{photo.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{photo.uploadDate}</span>
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
                  Fotoğraf Başlığı
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-slate-900"
                  placeholder="Örn: Voleybol Maçı"
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
                  Fotoğraf Dosyası
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
                  className="flex-1 px-6 py-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all"
                >
                  Yükle
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

