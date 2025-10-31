'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { logout } from '@/app/store/authSlice';
import {
  useSponsorList,
  useSponsorStats,
  createSponsor,
  updateSponsor,
  deleteSponsor,
  uploadSponsorPhoto,
  uploadSponsorLogo,
  SportType,
  Placement,
  SponsorItem,
} from '@/lib/hooks/useSponsor';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const sportTypeNames: Record<SportType, string> = {
  [SportType.Hepsi]: 'Hepsi',
  [SportType.Okculuk]: 'Okçuluk',
  [SportType.Basketbol]: 'Basketbol',
  [SportType.Voleybol]: 'Voleybol',
};

const placementNames: Record<Placement, string> = {
  [Placement.Banner]: 'Banner',
  [Placement.Sidebar]: 'Sidebar',
};

export default function SponsorYonetimi() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Filters
  const [sportTypeFilter, setSportTypeFilter] = useState<SportType | undefined>(undefined);
  const [placementFilter, setPlacementFilter] = useState<Placement | undefined>(undefined);
  const [isActiveFilter, setIsActiveFilter] = useState<boolean | undefined>(true);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10;

  // Use SWR hooks
  const { sponsors, totalCount, totalPages, isLoading, mutate } = useSponsorList(
    sportTypeFilter,
    placementFilter,
    isActiveFilter,
    pageNumber,
    pageSize
  );
  const { stats } = useSponsorStats();

  const [uploading, setUploading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSponsor, setSelectedSponsor] = useState<SponsorItem | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    sportType: SportType.Okculuk,
    placement: Placement.Banner,
    websiteUrl: '',
    isActive: true,
    photoFile: null as File | null,
    logoFile: null as File | null,
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

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      sportType: SportType.Okculuk,
      placement: Placement.Banner,
      websiteUrl: '',
      isActive: true,
      photoFile: null,
      logoFile: null,
    });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photoFile: e.target.files[0] });
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, logoFile: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Lütfen sponsor adı girin');
      return;
    }

    try {
      setUploading(true);

      // Create sponsor
      const newSponsor = await createSponsor({
        name: formData.name,
        description: formData.description,
        sportType: formData.sportType,
        placement: formData.placement,
        websiteUrl: formData.websiteUrl || undefined,
        isActive: formData.isActive,
      });

      // Upload photo if provided
      if (formData.photoFile) {
        await uploadSponsorPhoto(newSponsor.id, formData.photoFile);
      }

      // Upload logo if provided
      if (formData.logoFile) {
        await uploadSponsorLogo(newSponsor.id, formData.logoFile);
      }

      // Refresh the sponsor data
      await mutate();

      alert('Sponsor başarıyla eklendi!');
      setShowAddModal(false);
      resetForm();
    } catch (error: any) {
      console.error('Yükleme hatası:', error);
      alert(error.message || 'Sponsor eklenemedi');
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (sponsor: SponsorItem) => {
    setSelectedSponsor(sponsor);
    setFormData({
      name: sponsor.name,
      description: sponsor.description,
      sportType: sponsor.sportType,
      placement: sponsor.placement,
      websiteUrl: sponsor.websiteUrl || '',
      isActive: sponsor.isActive,
      photoFile: null,
      logoFile: null,
    });
    setShowEditModal(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSponsor) return;

    if (!formData.name.trim()) {
      alert('Lütfen sponsor adı girin');
      return;
    }

    try {
      setUploading(true);

      // Update sponsor
      await updateSponsor(selectedSponsor.id, {
        name: formData.name,
        description: formData.description,
        sportType: formData.sportType,
        placement: formData.placement,
        websiteUrl: formData.websiteUrl || undefined,
        isActive: formData.isActive,
      });

      // Upload photo if provided
      if (formData.photoFile) {
        await uploadSponsorPhoto(selectedSponsor.id, formData.photoFile);
      }

      // Upload logo if provided
      if (formData.logoFile) {
        await uploadSponsorLogo(selectedSponsor.id, formData.logoFile);
      }

      // Refresh the sponsor data
      await mutate();

      alert('Sponsor başarıyla güncellendi!');
      setShowEditModal(false);
      setSelectedSponsor(null);
      resetForm();
    } catch (error: any) {
      console.error('Güncelleme hatası:', error);
      alert(error.message || 'Sponsor güncellenemedi');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu sponsoru silmek istediğinizden emin misiniz?')) {
      return;
    }

    try {
      await deleteSponsor(id);

      // Refresh the sponsor data
      await mutate();

      alert('Sponsor başarıyla silindi!');
    } catch (error: any) {
      console.error('Silme hatası:', error);
      alert(error.message || 'Sponsor silinemedi');
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
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
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAddModal(true)}
                disabled={uploading}
                className="bg-white text-amber-700 hover:bg-yellow-50 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Sponsor Ekle
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
                <p className="text-sm font-medium text-slate-600">Toplam Sponsor</p>
                <p className="text-3xl font-bold text-slate-900 mt-1">{stats?.total || 0}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl">
                🎯
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Okçuluk</p>
                <p className="text-3xl font-bold text-blue-600 mt-1">
                  {stats?.okculuk || 0}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                🏹
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Basketbol</p>
                <p className="text-3xl font-bold text-orange-600 mt-1">
                  {stats?.basketbol || 0}
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
                <p className="text-sm font-medium text-slate-600">Voleybol</p>
                <p className="text-3xl font-bold text-green-600 mt-1">
                  {stats?.voleybol || 0}
                </p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                🏐
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Spor Türü
              </label>
              <select
                value={sportTypeFilter ?? ''}
                onChange={(e) => {
                  setSportTypeFilter(e.target.value === '' ? undefined : Number(e.target.value) as SportType);
                  setPageNumber(1);
                }}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
              >
                <option value="">Tümü</option>
                <option value={SportType.Okculuk}>Okçuluk</option>
                <option value={SportType.Basketbol}>Basketbol</option>
                <option value={SportType.Voleybol}>Voleybol</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Yerleşim
              </label>
              <select
                value={placementFilter ?? ''}
                onChange={(e) => {
                  setPlacementFilter(e.target.value === '' ? undefined : Number(e.target.value) as Placement);
                  setPageNumber(1);
                }}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
              >
                <option value="">Tümü</option>
                <option value={Placement.Banner}>Banner</option>
                <option value={Placement.Sidebar}>Sidebar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Durum
              </label>
              <select
                value={isActiveFilter === undefined ? '' : isActiveFilter.toString()}
                onChange={(e) => {
                  setIsActiveFilter(e.target.value === '' ? undefined : e.target.value === 'true');
                  setPageNumber(1);
                }}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
              >
                <option value="">Tümü</option>
                <option value="true">Aktif</option>
                <option value="false">Pasif</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSportTypeFilter(undefined);
                  setPlacementFilter(undefined);
                  setIsActiveFilter(true);
                  setPageNumber(1);
                }}
                className="w-full px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold transition"
              >
                Filtreleri Temizle
              </button>
            </div>
          </div>
        </div>

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
              <div className="flex items-start gap-6">
                {/* Images */}
                <div className="flex gap-4 flex-shrink-0">
                  {/* Logo */}
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                    {sponsor.logoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={sponsor.logoUrl}
                        alt={`${sponsor.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-slate-400 text-xs">Logo</span>
                    )}
                  </div>
                  {/* Photo */}
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                    {sponsor.photoUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={sponsor.photoUrl}
                        alt={`${sponsor.name} photo`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-slate-400 text-xs">Fotoğraf</span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{sponsor.name}</h3>
                      <p className="text-sm text-slate-600 mt-1">{sponsor.description}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                          {sportTypeNames[sponsor.sportType]}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                          {placementNames[sponsor.placement]}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          sponsor.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {sponsor.isActive ? 'Aktif' : 'Pasif'}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                          ID: {sponsor.id}
                        </span>
                      </div>
                      {sponsor.websiteUrl && (
                        <a
                          href={sponsor.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          {sponsor.websiteUrl}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleEdit(sponsor)}
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 font-semibold text-sm transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleDelete(sponsor.id)}
                    className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 font-semibold text-sm transition flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Sil
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber === 1}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Önceki
            </button>
            <span className="px-4 py-2 text-slate-700">
              Sayfa {pageNumber} / {totalPages}
            </span>
            <button
              onClick={() => setPageNumber(Math.min(totalPages, pageNumber + 1))}
              disabled={pageNumber === totalPages}
              className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Sonraki
            </button>
          </div>
        )}

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
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Sponsor Ekle</h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}
                className="text-slate-400 hover:text-slate-600 transition"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Sponsor Adı *
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
                    Spor Türü *
                  </label>
                  <select
                    value={formData.sportType}
                    onChange={(e) => setFormData({ ...formData, sportType: Number(e.target.value) as SportType })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  >
                    <option value={SportType.Okculuk}>Okçuluk</option>
                    <option value={SportType.Basketbol}>Basketbol</option>
                    <option value={SportType.Voleybol}>Voleybol</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Açıklama *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  placeholder="Sponsor hakkında kısa açıklama"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Yerleşim *
                  </label>
                  <select
                    value={formData.placement}
                    onChange={(e) => setFormData({ ...formData, placement: Number(e.target.value) as Placement })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  >
                    <option value={Placement.Banner}>Banner</option>
                    <option value={Placement.Sidebar}>Sidebar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Durum *
                  </label>
                  <select
                    value={formData.isActive.toString()}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.value === 'true' })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  >
                    <option value="true">Aktif</option>
                    <option value="false">Pasif</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Web Sitesi URL
                </label>
                <input
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  placeholder="https://example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Fotoğraf
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-50 file:text-yellow-700 file:font-semibold hover:file:bg-yellow-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Logo
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-50 file:text-yellow-700 file:font-semibold hover:file:bg-yellow-100"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    resetForm();
                  }}
                  disabled={uploading}
                  className="flex-1 px-6 py-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-yellow-600 hover:to-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Ekleniyor...' : 'Ekle'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedSponsor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Sponsor Düzenle</h2>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setSelectedSponsor(null);
                  resetForm();
                }}
                className="text-slate-400 hover:text-slate-600 transition"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Sponsor Adı *
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
                    Spor Türü *
                  </label>
                  <select
                    value={formData.sportType}
                    onChange={(e) => setFormData({ ...formData, sportType: Number(e.target.value) as SportType })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  >
                    <option value={SportType.Okculuk}>Okçuluk</option>
                    <option value={SportType.Basketbol}>Basketbol</option>
                    <option value={SportType.Voleybol}>Voleybol</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Açıklama *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  placeholder="Sponsor hakkında kısa açıklama"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Yerleşim *
                  </label>
                  <select
                    value={formData.placement}
                    onChange={(e) => setFormData({ ...formData, placement: Number(e.target.value) as Placement })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  >
                    <option value={Placement.Banner}>Banner</option>
                    <option value={Placement.Sidebar}>Sidebar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Durum *
                  </label>
                  <select
                    value={formData.isActive.toString()}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.value === 'true' })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  >
                    <option value="true">Aktif</option>
                    <option value="false">Pasif</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Web Sitesi URL
                </label>
                <input
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900"
                  placeholder="https://example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Fotoğraf Değiştir
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-50 file:text-yellow-700 file:font-semibold hover:file:bg-yellow-100"
                  />
                  {selectedSponsor.photoUrl && (
                    <p className="text-xs text-slate-500 mt-1">Mevcut fotoğraf var</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Logo Değiştir
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-yellow-50 file:text-yellow-700 file:font-semibold hover:file:bg-yellow-100"
                  />
                  {selectedSponsor.logoUrl && (
                    <p className="text-xs text-slate-500 mt-1">Mevcut logo var</p>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setSelectedSponsor(null);
                    resetForm();
                  }}
                  disabled={uploading}
                  className="flex-1 px-6 py-3 rounded-lg border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-yellow-600 hover:to-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Güncelleniyor...' : 'Güncelle'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

