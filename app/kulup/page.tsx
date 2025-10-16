import Link from 'next/link';
import SponsorSidebar from '@/app/components/SponsorSidebar';

export default function KulupPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO — marka mavisi + sarı vurgulu daha kompakt başlık */}
      <section
        className="text-white border-b"
        style={{
          background:
            `linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)`,
          borderColor: 'rgba(0,0,0,.15)',
        }}
      >
        <div className="mx-auto w-full max-w-screen-xl px-4 py-14 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">KULÜP</h1>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
            Tesislerimiz, Branşlarımız ve Faaliyetlerimiz
          </p>
          <div className="mt-6 mx-auto h-1 w-24 rounded-full" style={{ background: 'var(--primary-yellow)' }} />
        </div>
      </section>

      {/* DIŞ SARMAL: tam genişlik + 12 kolon GRID */}
      <div className="w-full py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Sol Sponsor (kenara yakın görünüm için sadece iç padding) */}
          <aside className="lg:col-span-2 px-4">
            <div className="lg:sticky lg:top-6">
              <SponsorSidebar />
            </div>
          </aside>

          {/* Orta içerik — okunabilirlik için max width */}
          <main className="lg:col-span-8">
            <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
              {/* Tesisler */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-800 mb-8">Tesislerimiz</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 flex items-center justify-center text-7xl"
                         style={{ background: 'linear-gradient(135deg,#ea580c,#c2410c)' }}>
                      🏐
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-slate-800 mb-3">Voleybol Salonu</h3>
                      <p className="text-slate-700 mb-4">
                        Uluslararası standartlarda voleybol salonu, modern ekipmanlar ve profesyonel zemin.
                      </p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>✓ 2 adet profesyonel saha</li>
                        <li>✓ 500 kişilik seyirci kapasitesi</li>
                        <li>✓ Soyunma odaları ve duşlar</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 flex items-center justify-center text-7xl"
                         style={{ background: 'linear-gradient(135deg,#ea580c,#7c2d12)' }}>
                      🏀
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-slate-900 mb-3">Basketbol Sahası</h3>
                      <p className="text-slate-700 mb-4">
                        Kapalı ve açık basketbol sahaları, profesyonel potalar ve antrenman ekipmanları.
                      </p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>✓ 1 kapalı, 1 açık saha</li>
                        <li>✓ LED aydınlatma sistemi</li>
                        <li>✓ Antrenman ekipmanları</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 flex items-center justify-center text-7xl"
                         style={{ background: 'linear-gradient(135deg,#16a34a,#065f46)' }}>
                      🎯
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-slate-900 mb-3">Okçuluk Alanı</h3>
                      <p className="text-slate-700 mb-4">
                        Uluslararası standartlarda atış alanı, güvenlik önlemleri ve profesyonel ekipmanlar.
                      </p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>✓ 20 atış hattı</li>
                        <li>✓ 18m – 70m mesafe seçenekleri</li>
                        <li>✓ Profesyonel yaylar ve oklar</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-48 flex items-center justify-center text-7xl"
                         style={{ background: 'linear-gradient(135deg,#2563eb,#1e3a8a)' }}>
                      💪
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-slate-900 mb-3">Fitness Salonu</h3>
                      <p className="text-slate-700 mb-4">
                        Kondisyon çalışmaları için modern fitness salonu ve ekipmanlar.
                      </p>
                      <ul className="text-sm text-slate-600 space-y-1">
                        <li>✓ Kardiyo ekipmanları</li>
                        <li>✓ Ağırlık çalışma alanı</li>
                        <li>✓ Kişisel antrenör desteği</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Branşlar */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Branşlarımız</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Link href="/branslar/voleybol" className="group">
                    <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
                      <div className="h-40 flex items-center justify-center text-6xl"
                           style={{ background: 'linear-gradient(135deg,#ea580c,#c2410c)' }}>
                        🏐
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-bold text-xl text-slate-900 group-hover:text-[var(--primary-yellow)] transition mb-2">
                          VOLEYBOL
                        </h3>
                        <p className="text-sm text-slate-600">4 yaş grubu, 100+ sporcu</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/branslar/basketbol" className="group">
                    <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
                      <div className="h-40 flex items-center justify-center text-6xl"
                           style={{ background: 'linear-gradient(135deg,#ea580c,#7c2d12)' }}>
                        🏀
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-bold text-xl text-slate-900 group-hover:text-[var(--primary-yellow)] transition mb-2">
                          BASKETBOL
                        </h3>
                        <p className="text-sm text-slate-600">4 yaş grubu, 120+ sporcu</p>
                      </div>
                    </div>
                  </Link>

                  <Link href="/branslar/okculuk" className="group">
                    <div className="bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
                      <div className="h-40 flex items-center justify-center text-6xl"
                           style={{ background: 'linear-gradient(135deg,#16a34a,#065f46)' }}>
                        🎯
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-bold text-xl text-slate-900 group-hover:text-[var(--primary-yellow)] transition mb-2">
                          OKÇULUK
                        </h3>
                        <p className="text-sm text-slate-600">4 yaş grubu, 80+ sporcu</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>

              {/* Faaliyetler */}
              <section className="mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Faaliyetlerimiz</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: '🏆', title: 'Turnuvalar', text: 'Bölgesel ve ulusal turnuvalara düzenli katılım.' },
                    { icon: '🏕️', title: 'Kamplar', text: 'Yaz/kış yoğun antrenman kampları.' },
                    { icon: '📚', title: 'Seminerler', text: 'Beslenme, spor psikolojisi ve sağlık seminerleri.' },
                    { icon: '🎉', title: 'Sosyal Etkinlikler', text: 'Piknik, gezi ve kutlamalarla güçlü topluluk.' },
                  ].map((a) => (
                    <div key={a.title} className="p-4 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg text-slate-900 mb-3">{a.icon} {a.title}</h3>
                      <p className="text-slate-600 text-sm">{a.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA — mavi blok + sarı buton */}
              <section
                className="rounded-xl shadow-lg p-8 text-center border"
                style={{
                  background: `linear-gradient(135deg, var(--primary-blue), var(--secondary-blue))`,
                  borderColor: 'rgba(0,0,0,.15)',
                }}
              >
                <h2 className="text-3xl font-bold text-white mb-4">Kulübümüze Katılın!</h2>
                <p className="text-lg mb-6 text-white/85">Modern tesislerimizde profesyonel eğitim alın</p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link
                    href="/kayit"
                    className="px-8 py-3 rounded-lg font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    style={{ background: 'var(--primary-yellow)', color: '#111827' }}
                  >
                    KAYIT OL
                  </Link>
                  <Link
                    href="/iletisim"
                    className="px-8 py-3 rounded-lg font-bold bg-white text-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    BİLGİ AL
                  </Link>
                </div>
              </section>
            </div>
          </main>

          {/* Sağ Sponsor */}
          <aside className="lg:col-span-2 px-4">
            <div className="lg:sticky lg:top-6">
              <SponsorSidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
