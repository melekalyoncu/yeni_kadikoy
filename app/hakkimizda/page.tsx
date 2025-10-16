import SponsorSidebar from '@/app/components/SponsorSidebar';

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-20 border-b border-slate-600">
        <div className="mx-auto w-full max-w-screen-xl px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">HAKKIMIZDA</h1>
          <p className="text-lg max-w-2xl mx-auto text-slate-300">
            Kadıköy Spor Kulübü - Geleceğin Şampiyonlarını Yetiştiriyoruz
          </p>
        </div>
      </div>

      {/* Dış sarmal: tam genişlik */}
      <div className="w-full py-12">
        {/* 12 kolon grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Sol sponsor */}
          <aside className="lg:col-span-2 px-4">
            <div className="lg:sticky lg:top-6">
              <SponsorSidebar />
            </div>
          </aside>

          {/* Orta içerik: max width ile sınırlı */}
          <main className="lg:col-span-8">
            <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
              {/* Mission */}
              <section className="mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-8 hover:shadow-md transition-shadow">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Misyonumuz</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Kadıköy Spor Kulübü olarak, gençlerimize spor yapma imkanı sunarak sağlıklı
                  nesiller yetiştirmeyi hedefliyoruz. Voleybol, basketbol ve okçuluk branşlarında
                  profesyonel eğitim vererek sporcularımızın hem fiziksel hem de zihinsel
                  gelişimlerine katkı sağlıyoruz.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Modern tesislerimiz, deneyimli antrenör kadromuz ve kaliteli eğitim anlayışımızla
                  gençlerimizin spor kariyerlerinde başarılı olmalarını destekliyoruz. Fair play,
                  takım ruhu ve disiplin değerlerini benimseyen bireyler yetiştirmeyi amaçlıyoruz.
                </p>
              </section>

              {/* Vision */}
              <section className="mb-12 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl shadow-sm border border-blue-200 p-8 hover:shadow-md transition-shadow">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Vizyonumuz</h2>
                <p className="text-slate-700 leading-relaxed">
                  Türkiye'nin önde gelen spor kulüplerinden biri olmak ve yetiştirdiğimiz
                  sporcularla ulusal ve uluslararası arenada başarılar elde etmek. Gençlerimize
                  sadece spor eğitimi değil, aynı zamanda hayata dair değerler kazandırarak
                  topluma faydalı bireyler yetiştirmek en büyük hedefimizdir.
                </p>
              </section>

              {/* Values */}
              <section className="mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Değerlerimiz</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="text-4xl flex-shrink-0">🏆</div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">Başarı</h3>
                      <p className="text-slate-600 text-sm">Sporcularımızın her alanda başarılı olmalarını destekliyoruz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="text-4xl flex-shrink-0">🤝</div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">Takım Ruhu</h3>
                      <p className="text-slate-600 text-sm">Birlikte çalışma ve dayanışma değerlerini önemsiyoruz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="text-4xl flex-shrink-0">⚖️</div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">Fair Play</h3>
                      <p className="text-slate-600 text-sm">Dürüst ve adil oyun anlayışını benimsiyoruz</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="text-4xl flex-shrink-0">📚</div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 mb-2">Eğitim</h3>
                      <p className="text-slate-600 text-sm">Sürekli gelişim ve öğrenmeyi destekliyoruz</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* History */}
              <section className="mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">Tarihçemiz</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#EAB308] pl-6 py-2">
                    <h3 className="font-bold text-xl text-slate-900 mb-2">2020</h3>
                    <p className="text-slate-700">Kulübümüz kuruldu ve ilk branş olarak voleybol başladı.</p>
                  </div>
                  <div className="border-l-4 border-[#EAB308] pl-6 py-2">
                    <h3 className="font-bold text-xl text-slate-900 mb-2">2021</h3>
                    <p className="text-slate-700">Basketbol branşı açıldı ve modern saha hizmete girdi.</p>
                  </div>
                  <div className="border-l-4 border-[#EAB308] pl-6 py-2">
                    <h3 className="font-bold text-xl text-slate-900 mb-2">2022</h3>
                    <p className="text-slate-700">Okçuluk eklendi ve ilk ulusal dereceler geldi.</p>
                  </div>
                  <div className="border-l-4 border-[#EAB308] pl-6 py-2">
                    <h3 className="font-bold text-xl text-slate-900 mb-2">2023–2025</h3>
                    <p className="text-slate-700">Tüm branşlarda başarılar; üye sayısı 500’ü aştı.</p>
                  </div>
                </div>
              </section>

              {/* Team */}
              <section className="mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Yönetim Kadromuz</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: 'Ahmet Yılmaz', role: 'Kulüp Başkanı' },
                    { name: 'Mehmet Demir', role: 'Genel Koordinatör' },
                    { name: 'Ayşe Kaya', role: 'Spor Direktörü' },
                  ].map((p) => (
                    <div key={p.name} className="text-center p-6 rounded-lg bg-white border border-slate-100 hover:shadow-md transition-shadow">
                      <div className="w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl shadow-lg">
                        👤
                      </div>
                      <h3 className="font-bold text-lg text-slate-900">{p.name}</h3>
                      <p className="text-slate-600 text-sm">{p.role}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Stats */}
              <section className="mb-12">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <p className="text-sm font-medium">Aktif Sporcu</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl font-bold mb-2">15+</div>
                    <p className="text-sm font-medium">Deneyimli Antrenör</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl font-bold mb-2">3</div>
                    <p className="text-sm font-medium">Spor Branşı</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#EAB308] to-[#FACC15] text-slate-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <p className="text-sm font-medium">Kazanılan Ödül</p>
                  </div>
                </div>
              </section>
            </div>
          </main>

          {/* Sağ sponsor */}
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
