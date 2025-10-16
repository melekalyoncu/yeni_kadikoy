'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSlider from './components/HeroSlider';
import SponsorSidebar from './components/SponsorSidebar';

// --- Animasyon preset ---
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10 md:mb-14">
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900"
      >
        {title}
      </motion.h2>
      <motion.div variants={fadeUp} className="mt-4 flex items-center justify-center gap-2 text-neutral-500">
        <span className="h-1 w-20 rounded-full bg-[#eab308]" />
        {subtitle && <p className="text-sm md:text-base max-w-xl">{subtitle}</p>}
        <span className="h-1 w-20 rounded-full bg-[#eab308]" />
      </motion.div>
    </div>
  );
}

function CardShell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-[#2563eb]/15 via-[#eab308]/25 to-[#16a34a]/15 ${className}`}>
      <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm">
        {children}
      </div>
    </div>
  );
}

function NewsCard({ item }: { item: any }) {
  return (
    <motion.article variants={fadeUp} className="group h-full" whileHover={{ y: -6 }}>
      <CardShell>
        <div className="overflow-hidden rounded-2xl">
          <div className="h-48 md:h-56 flex items-center justify-center text-7xl bg-gradient-to-br from-neutral-800 to-neutral-700 text-white">
            {item.image}
          </div>
          <div className="p-6 space-y-3">
            <p className="text-xs font-medium text-neutral-500">{item.date}</p>
            <h3 className="text-xl font-bold text-neutral-900 leading-snug">{item.title}</h3>
            <p className="text-neutral-700">{item.excerpt}</p>
            <Link href={`/haberler/${item.id}`} className="inline-flex items-center gap-2 font-semibold text-neutral-900 hover:text-[#eab308]">
              Devamını Oku
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </CardShell>
    </motion.article>
  );
}

function BranchCard({ href, title, stats, emoji, gradient }: { href: string; title: string; stats: string; emoji: string; gradient: string }) {
  return (
    <Link href={href} className="group block">
      <motion.div variants={fadeUp} whileHover={{ y: -6 }}>
        <CardShell>
          <div className="overflow-hidden rounded-2xl">
            <div className={`h-60 flex items-center justify-center text-8xl ${gradient} text-white`}>{emoji}</div>
            <div className="p-8 text-center space-y-2">
              <h3 className="text-2xl font-extrabold text-neutral-900 group-hover:text-[#eab308] transition-colors">{title}</h3>
              <p className="text-neutral-700">{stats}</p>
              <div className="pt-3">
                <span className="inline-flex items-center gap-2 font-semibold text-neutral-900 group-hover:text-[#eab308]">
                  Detayları Gör
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </CardShell>
      </motion.div>
    </Link>
  );
}

function MediaTile({ emoji }: { emoji: string }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ scale: 1.04 }}>
      <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-neutral-800 to-neutral-700 text-white aspect-square grid place-content-center text-6xl">
        {emoji}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const news = [
    { id: 1, title: 'Voleybol Takımımız Şampiyonlukta', date: '15 Ekim 2025', excerpt: 'U16 voleybol takımımız bölge şampiyonluğunu kazandı...', image: '🏐' },
    { id: 2, title: 'Yeni Basketbol Sahası Açıldı', date: '12 Ekim 2025', excerpt: 'Modern basketbol sahamız sporcularımızın hizmetine açıldı...', image: '🏀' },
    { id: 3, title: 'Okçuluk Branşında Başarı', date: '10 Ekim 2025', excerpt: 'Sporcularımız ulusal yarışmada derece aldı...', image: '🎯' },
  ];

  const mediaGallery = [
    { id: 1, type: 'image', emoji: '📸' },
    { id: 2, type: 'image', emoji: '🏆' },
    { id: 3, type: 'image', emoji: '⚽' },
    { id: 4, type: 'image', emoji: '🎖️' },
    { id: 5, type: 'image', emoji: '🏅' },
    { id: 6, type: 'image', emoji: '🥇' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* HERO */}
      <HeroSlider />

      <div className="w-full py-16 md:py-24">
        {/* 12 kolon grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Sol sponsor kolonu: kenara yakın olsun diye yalnızca iç padding veriyoruz */}
          <aside className="lg:col-span-2 px-4">
            <SponsorSidebar />
          </aside>

          {/* Orta İçerik */}
          <main className="lg:col-span-8">
            <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
              <section>
                <SectionHeader title="Hakkımızda" />
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <motion.div variants={fadeUp} className="space-y-5">
                    <p className="text-lg leading-relaxed text-neutral-700">
                      Kadıköy Spor Kulübü olarak, gençlerimize spor yapma imkanı sunuyor ve sağlıklı nesiller yetiştirmeyi hedefliyoruz.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-700">
                      Deneyimli antrenörlerimiz eşliğinde voleybol, basketbol ve okçuluk branşlarında profesyonel eğitim veriyoruz.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-700">
                      Modern tesislerimiz ve kaliteli eğitim anlayışımızla sporcularımızın gelişimine katkı sağlıyoruz.
                    </p>
                    <Link href="/hakkimizda" className="inline-flex items-center gap-2 rounded-xl bg-[#2563eb] px-6 py-3 font-semibold text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition">
                      Devamını Oku
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <CardShell>
                      <div className="rounded-2xl p-10 text-center bg-gradient-to-br from-neutral-800 to-neutral-700 text-white">
                        <div className="text-8xl">🏆</div>
                        <h3 className="mt-6 text-2xl font-extrabold">Başarı Hikayemiz</h3>
                        <p className="mt-2 text-neutral-200">500+ aktif sporcu, 50+ ödül</p>
                      </div>
                    </CardShell>
                  </motion.div>
                </motion.div>
              </section>

              {/* Haberler */}
              <section>
                <SectionHeader title="Son Haberler" />
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6 md:gap-8">
                  {news.map((n) => (
                    <NewsCard key={n.id} item={n} />
                  ))}
                </motion.div>
                <div className="text-center mt-10">
                  <Link href="/haberler" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-7 py-3 font-semibold text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition">
                    Tüm Haberleri Gör
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </section>

              {/* Medya Galerisi */}
              <section>
                <SectionHeader title="Medya Galerisi" />
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {mediaGallery.map((m) => (
                    <MediaTile key={m.id} emoji={m.emoji} />
                  ))}
                </motion.div>
              </section>

              {/* Branşlar */}
              <section>
                <SectionHeader title="Branşlarımız" subtitle="Profesyonel antrenörlerimiz eşliğinde üç farklı branşta eğitim veriyoruz" />
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-3 gap-6 md:gap-8">
                  <BranchCard href="/branslar/voleybol" title="Voleybol" stats="4 yaş grubu • 100+ sporcu" emoji="🏐" gradient="bg-gradient-to-br from-[#ea580c] to-[#c2410c]" />
                  <BranchCard href="/branslar/basketbol" title="Basketbol" stats="4 yaş grubu • 120+ sporcu" emoji="🏀" gradient="bg-gradient-to-br from-[#ea580c] to-[#7c2d12]" />
                  <BranchCard href="/branslar/okculuk" title="Okçuluk" stats="4 yaş grubu • 80+ sporcu" emoji="🎯" gradient="bg-gradient-to-br from-[#16a34a] to-[#065f46]" />
                </motion.div>
              </section>
            </div>

          </main>

          {/* Sağ Sponsor */}
          <aside className="lg:col-span-2 px-4">
              <SponsorSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
