'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { logout } from '@/app/store/authSlice';
import {
  useRegistrationList,
  useRegistrationStats,
  approveRegistration,
  deleteRegistration,
  getBranchName,
  getAgeGroupName,
  getProgramTypeName,
  formatDate,
} from '@/lib/hooks/useRegistration';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AdminRegistrationsPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const [page, setPage] = useState(1);
  const pageSize = 10;

  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Fetch registrations and stats
  const { registrations, totalCount, totalPages, isLoading, isError, mutate } = useRegistrationList(page, pageSize);
  const { stats, isLoading: statsLoading } = useRegistrationStats();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/admin');
  };

  const handleApprove = async (id: number) => {
    if (!confirm('Bu kaydı onaylamak istediğinizden emin misiniz?')) {
      return;
    }

    try {
      await approveRegistration(id);
      alert('Kayıt başarıyla onaylandı!');
      mutate();
    } catch (error: any) {
      console.error('Onaylama hatası:', error);
      alert(error.message || 'Kayıt onaylanamadı');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu kaydı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz!')) {
      return;
    }

    try {
      await deleteRegistration(id);
      alert('Kayıt başarıyla silindi!');
      mutate();
    } catch (error: any) {
      console.error('Silme hatası:', error);
      alert(error.message || 'Kayıt silinemedi');
    }
  };

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Kayıt Yönetimi</h1>
              <p className="text-slate-300">Sporcu kayıtlarını görüntüle, onayla ve yönet</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Link
                href="/admin/dashboard"
                className="rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 font-medium transition"
              >
                ← Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-xl bg-red-500 hover:bg-red-600 text-white px-4 py-2 font-semibold transition flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Çıkış
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        {!statsLoading && stats && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Toplam Kayıt</p>
                  <p className="text-3xl font-bold text-slate-900">{stats.totalCount}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                  📋
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Onaylanan</p>
                  <p className="text-3xl font-bold text-green-600">{stats.approvedCount}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-2xl">
                  ✅
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Bekleyen</p>
                  <p className="text-3xl font-bold text-yellow-600">{stats.pendingCount}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center text-2xl">
                  ⏳
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Aktif</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.activeCount}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                  🏃
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Registrations Table */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
        >
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Kayıtlar</h2>
            <p className="text-sm text-slate-600 mt-1">
              Toplam {totalCount} kayıt bulundu
            </p>
          </div>

          {isLoading ? (
            <div className="p-12 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
              <p className="mt-4 text-slate-600">Kayıtlar yükleniyor...</p>
            </div>
          ) : isError ? (
            <div className="p-12 text-center">
              <p className="text-red-600">Kayıtlar yüklenirken bir hata oluştu.</p>
            </div>
          ) : registrations.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-slate-600">Henüz kayıt bulunmuyor.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Sporcu</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Branş</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Yaş Grubu</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Program</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Durum</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase">Tarih</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-slate-700 uppercase">İşlemler</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {registrations.map((registration) => (
                    <>
                      <tr key={registration.id} className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4">
                          <div className="font-medium text-slate-900">{registration.athleteFullName}</div>
                          <div className="text-sm text-slate-500">{registration.parentFullName}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm">{getBranchName(registration.branch)}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm">{getAgeGroupName(registration.ageGroup)}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm">{getProgramTypeName(registration.programType)}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              registration.isApproved
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {registration.isApproved ? '✅ Onaylandı' : '⏳ Bekliyor'}
                            </span>
                            {registration.isActive && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                🏃 Aktif
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-slate-900">{formatDate(registration.createdAt)}</div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => toggleExpand(registration.id)}
                              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                              title="Detayları Göster"
                            >
                              {expandedId === registration.id ? '▲ Gizle' : '▼ Detay'}
                            </button>
                            {!registration.isApproved && (
                              <button
                                onClick={() => handleApprove(registration.id)}
                                className="text-green-600 hover:text-green-800 font-medium text-sm"
                                title="Onayla"
                              >
                                ✓ Onayla
                              </button>
                            )}
                            <button
                              onClick={() => handleDelete(registration.id)}
                              className="text-red-600 hover:text-red-800 font-medium text-sm"
                              title="Sil"
                            >
                              ✕ Sil
                            </button>
                          </div>
                        </td>
                      </tr>
                      {expandedId === registration.id && (
                        <tr>
                          <td colSpan={7} className="px-6 py-4 bg-slate-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Veli Bilgileri</h4>
                                <div className="space-y-1 text-sm">
                                  <p><span className="font-medium">Ad Soyad:</span> {registration.parentFullName}</p>
                                  <p><span className="font-medium">Telefon:</span> {registration.parentPhone}</p>
                                  <p><span className="font-medium">E-posta:</span> {registration.parentEmail}</p>
                                  <p><span className="font-medium">Adres:</span> {registration.parentAddress}</p>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Diğer Bilgiler</h4>
                                <div className="space-y-1 text-sm">
                                  <p><span className="font-medium">Doğum Tarihi:</span> {formatDate(registration.birthDate)}</p>
                                  <p><span className="font-medium">Sağlık Notları:</span> {registration.healthNotes || 'Yok'}</p>
                                  {registration.approvedAt && (
                                    <p><span className="font-medium">Onay Tarihi:</span> {formatDate(registration.approvedAt)}</p>
                                  )}
                                  {registration.updatedAt && (
                                    <p><span className="font-medium">Güncelleme:</span> {formatDate(registration.updatedAt)}</p>
                                  )}
                                </div>
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
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="p-6 border-t border-slate-200 flex items-center justify-between">
              <p className="text-sm text-slate-600">
                Sayfa {page} / {totalPages}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  ← Önceki
                </button>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Sonraki →
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

