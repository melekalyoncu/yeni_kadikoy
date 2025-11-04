import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';
import CTAButton from '@/app/components/ui/CTAButton';

export default function NedenYeniKadikoyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroBand
        pill="Hakkımızda • Neden Biz"
        title="NEDEN YENİ KADIKÖY?"
        subtitle="Gençlerimize en iyi spor eğitimini sunmak için buradayız"
        actions={
          <>
            <CTAButton href="/kayit" variant="primary" size="md">
              KAYIT OL
            </CTAButton>
            <CTAButton href="/iletisim" variant="secondary" size="md">
              BİLGİ AL
            </CTAButton>
          </>
        }
      />

      <GridShell>
        <main className="lg:col-span-8">
          <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
            
            {/* Giriş */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl shadow-sm border border-blue-200 p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Neden Yeni Kadıköy Spor Kulübü?
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg mb-4">
                  Yeni Kadıköy Spor Kulübü, sadece bir spor kulübü değil; gençlerimizin 
                  hayallerini gerçeğe dönüştürdüğü, yeteneklerini keşfettiği ve karakterlerini 
                  geliştirdiği bir yaşam okuludur.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Modern tesislerimiz, deneyimli antrenör kadromuz ve kaliteli eğitim 
                  anlayışımızla sporcularımızın hem sportif hem de kişisel gelişimlerine 
                  katkı sağlıyoruz.
                </p>
              </div>
            </section>

            {/* Öne Çıkan Özellikler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Bizi Farklı Kılan Özellikler
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Özellik 1 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🏆</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Profesyonel Antrenör Kadrosu
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        15+ deneyimli ve sertifikalı antrenörümüz, her yaş grubuna özel 
                        eğitim programları ile sporcularımızın gelişimini yakından takip eder.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Özellik 2 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🏢</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Modern Tesisler
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Son teknoloji ekipmanlarla donatılmış salonlarımız, açık ve kapalı 
                        sahalarımız ile sporcularımıza en iyi ortamı sunuyoruz.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Özellik 3 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">📚</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Kapsamlı Eğitim Programı
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Sadece teknik beceriler değil; beslenme, spor psikolojisi ve 
                        kişisel gelişim konularında da eğitimler sunuyoruz.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Özellik 4 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🎯</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Bireysel Gelişim Takibi
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Her sporcumuzun gelişimini bireysel olarak takip eder, 
                        güçlü ve geliştirilmesi gereken yönlerini belirleriz.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Özellik 5 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🏅</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Turnuva ve Müsabaka Deneyimi
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Düzenli olarak bölgesel ve ulusal turnuvalara katılım sağlayarak 
                        sporcularımıza yarışma deneyimi kazandırıyoruz.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Özellik 6 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">🤝</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Güçlü Topluluk
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        500+ aktif sporcumuz ve aileleriyle oluşturduğumuz güçlü 
                        topluluk, sosyal etkinlikler ve kamplarla bir arada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Başarı Hikayeleri */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Başarı Hikayeleri
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-sm border border-yellow-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🥇</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Ulusal Şampiyonluklar
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Voleybol ve basketbol takımlarımız, son 3 yılda 15+ ulusal 
                        şampiyonluk ve derece elde etti.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🎯</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Milli Takım Sporcuları
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Kulübümüzden yetişen 10+ sporcu, milli takımlarda ülkemizi 
                        temsil etme başarısı gösterdi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">📈</div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        Sürekli Gelişim
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Sporcularımızın %95'i, kulübümüze katıldıktan sonraki ilk 
                        yıl içinde belirgin performans artışı gösteriyor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#1E4FBC] to-[#003580] rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Siz de Aramıza Katılın!
                </h2>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Yeni Kadıköy Spor Kulübü ailesinin bir parçası olun ve 
                  spor kariyerinize profesyonel bir başlangıç yapın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="/kayit" variant="primary" size="lg">
                    HEMEN KAYIT OL
                  </CTAButton>
                  <CTAButton href="/iletisim" variant="secondary" size="lg">
                    BİLGİ ALIN
                  </CTAButton>
                </div>
              </div>
            </section>

          </div>
        </main>
      </GridShell>
    </div>
  );
}

