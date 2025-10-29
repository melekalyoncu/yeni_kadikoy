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
interface Sponsor {
  id: number;
  name: string;
  logo: string;
  position: 'sidebar' | 'banner';
  url?: string;
  isActive: boolean;
  addedDate: string;
}

export default function SponsorYonetimi() {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [sponsors, setSponsors] = useState<Sponsor[]>([
    { id: 1, name: 'Sponsor A', logo: '🏢', position: 'sidebar', url: 'https://example.com', isActive: true, addedDate: '2025-01-15' },
    { id: 2, name: 'Sponsor B', logo: '🏪', position: 'banner', url: 'https://example.com', isActive: true, addedDate: '2025-01-14' },
    { id: 3, name: 'Sponsor C', logo: '🏬', position: 'sidebar', url: 'https://example.com', isActive: false, addedDate: '2025-01-13' },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: 'sidebar' as 'sidebar' | 'banner',
    url: '',
    logo: null as File | null,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, logo: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API integration will be added here
    alert('Sponsor ekleme API\'si entegre edilecek');
    setShowAddModal(false);
    setFormData({ name: '', position: 'sidebar', url: '', logo: null });
  };

  const handleToggleActive = (id: number) => {
    // TODO: API integration will be added here
    setSponsors(sponsors.map(s => 
      s.id === id ? { ...s, isActive: !s.isActive } : s
    ));
    alert('Durum güncelleme API\'si entegre edilecek');
  };

  const handleDelete = (id: number) => {
    if (confirm('Bu sponsoru silmek istediğinizden emin misiniz?')) {
      // TODO: API integration will be added here
      setSponsors(sponsors.filter(s => s.id !== id));
      alert('Silme API\'si entegre edilecek');
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="hover:opacity-80 transition">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Sponsor Yönetimi</h1>
                <p className="text-yellow-100 text-sm">Reklam panoları ve sponsorlar</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-white text-amber-700 hover:bg-yellow-50 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Sponsor Ekle
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
                <p className="text-sm font-medium text-slate-600">Toplam Sponsor</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{sponsors.length}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl">
                🎯
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Aktif</p>
                <p className="text-3xl font-bold text-green-600 mt-1">
                  {sponsors.filter(s => s.isActive).length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                ✅
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Sidebar</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">
                  {sponsors.filter(s => s.position === 'sidebar').length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                📌
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Banner</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">
                  {sponsors.filter(s => s.position === 'banner').length}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-2xl">
                🎪
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sponsors List */}
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
          className="space-y-4"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={fadeUp}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-6"
            >
              <div className="flex items-center gap-6">
                {/* Logo */}
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-4xl flex-shrink-0">
                  {sponsor.logo}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{sponsor.name}</h3>
                      <p className="text-sm text-slate-600">{sponsor.url}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        sponsor.position === 'sidebar' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {sponsor.position === 'sidebar' ? 'Sidebar' : 'Banner'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        sponsor.isActive 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {sponsor.isActive ? 'Aktif' : 'Pasif'}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">Eklenme Tarihi: {sponsor.addedDate}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleToggleActive(sponsor.id)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
                      sponsor.isActive
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                  >
                    {sponsor.isActive ? 'Pasif Yap' : 'Aktif Yap'}
                  </button>
                  <button
                    onClick={() => handleDelete(sponsor.id)}
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-sm transition"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {sponsors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Henüz sponsor yok</h3>
            <p className="text-slate-600 mb-6">İlk sponsoru eklemek için yukarıdaki butona tıklayın</p>
          </div>
        )}
      </main>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Sponsor Ekle</h2>
              <button
                onClick={() => setShowAddModal(false)}
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
                  Sponsor Adı
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  placeholder="Örn: ABC Şirketi"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Pozisyon
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value as 'sidebar' | 'banner' })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                >
                  <option value="sidebar">Sidebar (Yan Panel)</option>
                  <option value="banner">Banner (Üst/Alt)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Web Sitesi URL (Opsiyonel)
                </label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  placeholder="https://example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Logo Dosyası
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-50 file:text-yellow-700 file:font-semibold hover:file:bg-yellow-100"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-yellow-600 hover:to-amber-700 transition-all"
                >
                  Ekle
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

