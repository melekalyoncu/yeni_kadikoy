import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroBand
        pill="Hakkımızda • Kulüp Kimliği"
        title="HAKKIMIZDA"
        subtitle="Kadıköy Spor Kulübü — Geleceğin Şampiyonlarını Yetiştiriyoruz"
      />

      <GridShell>

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
            <section className="mb-12">
              {/* Section Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 md:gap-4">
                  <span className="h-[2px] w-8 md:w-10 rounded-full bg-gradient-to-r from-[#eab308] to-[#c2410c]" />
                  <h2
                    className="
          text-2xl md:text-4xl
          font-medium italic
          tracking-[-0.03em]
          bg-gradient-to-r from-[#eab308] to-[#c2410c]
          text-transparent bg-clip-text
          drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]
        "
                  >
                    Yönetim Kadromuz
                  </h2>
                  <span className="h-[2px] w-8 md:w-10 rounded-full bg-gradient-to-r from-[#eab308] to-[#c2410c]" />
                </div>
                <p className="mt-4 text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
                  Kulübümüzün yönetim kadrosu; spor kültürünü geliştirmeyi, altyapıyı güçlendirmeyi
                  ve sürdürülebilir başarıyı hedefler.
                </p>
              </div>

              {/* Card Grid */}
              <div
                className="
      grid grid-cols-1 md:grid-cols-3 gap-6
      max-w-5xl mx-auto
    "
              >
                {[
                  {
                    name: "Ahmet Yılmaz",
                    role: "Kulüp Başkanı",
                    photoUrl: "", // örn: "/images/yonetim/ahmet.jpg"
                  },
                  {
                    name: "Mehmet Demir",
                    role: "Genel Koordinatör",
                    photoUrl: "", // eğer yoksa boş bırak
                  },
                  {
                    name: "Ayşe Kaya",
                    role: "Spor Direktörü",
                    photoUrl: "",
                  },
                ].map((p) => {
                  // fallback avatar için baş harfleri çıkaralım:
                  const initials = p.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("");

                  return (
                    <div
                      key={p.name}
                      className="
            relative rounded-2xl p-6 text-center
            shadow-[0_24px_60px_rgba(0,0,0,0.3)]
            ring-1 ring-slate-200/60
            bg-white/80 backdrop-blur-xl
            border border-white
            hover:shadow-[0_32px_80px_rgba(0,0,0,0.4)]
            transition-shadow
          "
                    >
                      {/* profil resmi alanı */}
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        {p.photoUrl ? (
                          // gerçek foto varsa
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={p.photoUrl}
                            alt={p.name}
                            className="
                  w-24 h-24 rounded-full object-cover
                  ring-2 ring-[#eab308]
                  shadow-[0_16px_40px_rgba(234,179,8,0.4)]
                "
                          />
                        ) : (
                          // fallback avatar (kulüp renkleri ile)
                          <div
                            className="
                  w-24 h-24 rounded-full
                  bg-gradient-to-br from-[#1E4FBC] via-[#003580] to-[#0a1a3a]
                  flex items-center justify-center
                  text-white font-semibold text-xl
                  ring-2 ring-[#eab308]
                  shadow-[0_16px_40px_rgba(234,179,8,0.4)]
                  relative overflow-hidden
                "
                          >
                            {/* hafif glow dekor */}
                            <div className="absolute -top-8 -right-8 h-16 w-16 bg-[#eab308]/30 blur-2xl opacity-40 rounded-full" />
                            <div className="absolute -bottom-8 -left-8 h-16 w-16 bg-[#1E4FBC]/30 blur-2xl opacity-30 rounded-full" />
                            <span className="relative z-10 tracking-[-0.03em]">{initials}</span>
                          </div>
                        )}
                      </div>

                      {/* isim / rol */}
                      <h3 className="font-semibold text-lg text-slate-900 tracking-[-0.02em]">
                        {p.name}
                      </h3>
                      <p className="text-slate-600 text-sm font-medium">{p.role}</p>

                      {/* opsiyonel alt bilgi alanı */}
                      <p className="text-[12px] text-slate-500 leading-relaxed mt-3">
                        {/* bunu ister silersin ister doldurursun */}
                        {/* örnek: "Kadıköy altyapı yapılanması sorumlusu" */}
                      </p>

                      {/* iletişim / buton gibi bir şey istersen ileride buraya */}
                      {/* <button className="mt-4 text-[12px] font-semibold text-[#1E4FBC] hover:text-[#0f2c6d] transition-colors">
            İletişim →
          </button> */}
                    </div>
                  );
                })}
              </div>
            </section>


            {/* Stats */}
            <section className="mb-12">
              <div className="grid md:grid-cols-4 gap-6">
                {/* Kart 1 */}
                <div className="
      relative rounded-2xl p-6 text-center
      shadow-[0_24px_60px_rgba(0,0,0,0.6)]
      ring-1 ring-white/10
      bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.18)_0%,rgba(0,0,0,0)_60%),radial-gradient(circle_at_80%_80%,rgba(30,79,188,0.22)_0%,rgba(0,0,0,0)_60%)]
      "
                  style={{ backgroundColor: "#0a1a3a" }}
                >
                  {/* glow dekor */}
                  <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#eab308]/30 blur-3xl opacity-40" />
                  <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#1E4FBC]/30 blur-3xl opacity-30" />

                  <div className="relative z-10 text-[#eab308] text-4xl font-semibold leading-none tracking-[-0.03em] mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                    500+
                  </div>
                  <p className="relative z-10 text-[13px] font-medium text-white/80 leading-snug">
                    Aktif Sporcu
                  </p>
                </div>

                {/* Kart 2 */}
                <div className="
      relative rounded-2xl p-6 text-center
      shadow-[0_24px_60px_rgba(0,0,0,0.6)]
      ring-1 ring-white/10
      bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.18)_0%,rgba(0,0,0,0)_60%),radial-gradient(circle_at_80%_80%,rgba(30,79,188,0.22)_0%,rgba(0,0,0,0)_60%)]
      "
                  style={{ backgroundColor: "#0a1a3a" }}
                >
                  <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#eab308]/30 blur-3xl opacity-40" />
                  <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#1E4FBC]/30 blur-3xl opacity-30" />

                  <div className="relative z-10 text-[#eab308] text-4xl font-semibold leading-none tracking-[-0.03em] mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                    15+
                  </div>
                  <p className="relative z-10 text-[13px] font-medium text-white/80 leading-snug">
                    Deneyimli Antrenör
                  </p>
                </div>

                {/* Kart 3 */}
                <div className="
      relative rounded-2xl p-6 text-center
      shadow-[0_24px_60px_rgba(0,0,0,0.6)]
      ring-1 ring-white/10
      bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.18)_0%,rgba(0,0,0,0)_60%),radial-gradient(circle_at_80%_80%,rgba(30,79,188,0.22)_0%,rgba(0,0,0,0)_60%)]
      "
                  style={{ backgroundColor: "#0a1a3a" }}
                >
                  <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#eab308]/30 blur-3xl opacity-40" />
                  <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#1E4FBC]/30 blur-3xl opacity-30" />

                  <div className="relative z-10 text-[#eab308] text-4xl font-semibold leading-none tracking-[-0.03em] mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                    3
                  </div>
                  <p className="relative z-10 text-[13px] font-medium text-white/80 leading-snug">
                    Spor Branşı
                  </p>
                </div>

                {/* Kart 4 */}
                <div className="
      relative rounded-2xl p-6 text-center
      shadow-[0_24px_60px_rgba(0,0,0,0.6)]
      ring-1 ring-white/10
      bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.18)_0%,rgba(0,0,0,0)_60%),radial-gradient(circle_at_80%_80%,rgba(30,79,188,0.22)_0%,rgba(0,0,0,0)_60%)]
      "
                  style={{ backgroundColor: "#0a1a3a" }}
                >
                  <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-[#eab308]/30 blur-3xl opacity-40" />
                  <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#1E4FBC]/30 blur-3xl opacity-30" />

                  <div className="relative z-10 text-[#eab308] text-4xl font-semibold leading-none tracking-[-0.03em] mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                    50+
                  </div>
                  <p className="relative z-10 text-[13px] font-medium text-white/80 leading-snug">
                    Kazanılan Ödül
                  </p>
                </div>
              </div>
            </section>

          </div>
        </main>
      </GridShell>
    </div>
  );
}
