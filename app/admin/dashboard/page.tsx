'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { logout } from '@/app/store/authSlice';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroBand from '@/app/components/sections/HeroBand';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AdminDashboard() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, username } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  const menuItems = [
    {
      id: 1,
      title: 'Galeri Yönetimi',
      description: 'Fotoğraf ekle, düzenle ve sil',
      icon: '📸',
      href: '/admin/galeri',
      gradient: 'from-blue-600 to-blue-800',
      stats: 'Fotoğraflar',
    },
    {
      id: 2,
      title: 'Sponsor Yönetimi',
      description: 'Reklam panoları ve sponsorlar',
      icon: '🎯',
      href: '/admin/sponsorlar',
      gradient: 'from-yellow-500 to-amber-600',
      stats: 'Sponsorlar',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <HeroBand
        pill="Yönetim • Güvenli Alan"
        title="Admin Panel"
        subtitle="Yeni Kadıköy Spor Kulübü • İçerik ve kullanıcı yönetimi"
        actions={
          <>
            <Link
              href="/admin/haberler"
              className="rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur px-4 py-2 font-medium transition"
            >
              Haberleri Yönet
            </Link>
            <Link
              href="/admin/galeri"
              className="rounded-xl bg-yellow-400 text-slate-900 hover:bg-yellow-300 px-4 py-2 font-semibold transition"
            >
              Medya Yükle
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
          </>
        }
      />


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Welcome Section */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Hoş Geldiniz, {username}!
          </h2>
          <p className="text-slate-600">
            Yönetim paneline hoş geldiniz. Aşağıdaki menülerden işlemlerinizi gerçekleştirebilirsiniz.
          </p>
        </motion.div>

        {/* Stats Cards */}
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
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {menuItems.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <Link href={item.href}>
                <div className="group relative overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${item.gradient} p-6 text-white relative`}>
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{item.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                        <p className="text-white/80 text-sm">{item.description}</p>
                      </div>
                      <svg
                        className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-600">
                        {item.stats}
                      </span>
                      <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                        Yönet →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="bg-white rounded-2xl border border-slate-200 shadow-md p-6"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-4">Hızlı İşlemler</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/admin/galeri"
              className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                📸
              </div>
              <div>
                <p className="font-semibold text-slate-900">Fotoğraf Ekle</p>
                <p className="text-sm text-slate-600">Galeriye yeni fotoğraf yükle</p>
              </div>
            </Link>
            <Link
              href="/admin/sponsorlar"
              className="flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-yellow-300 hover:bg-yellow-50 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                🎯
              </div>
              <div>
                <p className="font-semibold text-slate-900">Sponsor Ekle</p>
                <p className="text-sm text-slate-600">Yeni sponsor/reklam ekle</p>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 text-center text-sm text-slate-500"
        >
          <p>© 2025 Yeni Kadıköy Spor Kulübü - Admin Panel</p>
        </motion.div>
      </main>
    </div>
  );
}

