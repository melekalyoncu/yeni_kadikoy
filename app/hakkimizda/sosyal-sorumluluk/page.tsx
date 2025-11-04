import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';
import CTAButton from '@/app/components/ui/CTAButton';

export default function SosyalSorumlulukPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroBand
        pill="Hakkımızda • Topluma Katkı"
        title="SOSYAL SORUMLULUK"
        subtitle="Topluma değer katan projelerle geleceği birlikte inşa ediyoruz"
        actions={
          <>
            <CTAButton href="/iletisim" variant="primary" size="md">
              DESTEK OLUN
            </CTAButton>
          </>
        }
      />

      <GridShell>
        <main className="lg:col-span-8">
          <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
            
            {/* Giriş */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-200 p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Sosyal Sorumluluk Anlayışımız
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg mb-4">
                  Yeni Kadıköy Spor Kulübü olarak, sadece sporcularımıza değil tüm topluma 
                  karşı sorumluluklarımızın bilincindeyiz. Sporun birleştirici gücüne inanıyor 
                  ve bu gücü toplumsal fayda için kullanıyoruz.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Eğitim, sağlık, çevre ve sosyal içerme alanlarında yürüttüğümüz projelerle 
                  topluma değer katmayı ve geleceği birlikte inşa etmeyi hedefliyoruz.
                </p>
              </div>
            </section>

            {/* Projelerimiz */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Sosyal Sorumluluk Projelerimiz
              </h2>
              
              <div className="space-y-6">
                
                {/* Proje 1 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-700 p-8 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-3">🏀</div>
                        <h3 className="text-xl font-bold">Spor Herkes İçin</h3>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Dezavantajlı Çocuklara Ücretsiz Spor Eğitimi
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        Ekonomik imkanları kısıtlı ailelerin çocuklarına ücretsiz spor eğitimi 
                        sunuyoruz. Her yıl 50+ çocuk bu program kapsamında profesyonel antrenman 
                        alma fırsatı buluyor.
                      </p>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Ücretsiz antrenman ve ekipman desteği</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Beslenme danışmanlığı</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Turnuva ve kamp katılım desteği</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Proje 2 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-green-500 to-green-700 p-8 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-3">🌱</div>
                        <h3 className="text-xl font-bold">Yeşil Kulüp</h3>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Çevre Bilinci ve Sürdürülebilirlik
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        Tesislerimizde enerji verimliliği, geri dönüşüm ve çevre dostu 
                        uygulamalarla sürdürülebilir bir gelecek için çalışıyoruz.
                      </p>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Sıfır atık hedefi ve geri dönüşüm programı</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Enerji tasarruflu LED aydınlatma</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Çevre bilinci eğitimleri ve ağaç dikimi kampanyaları</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Proje 3 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-purple-500 to-purple-700 p-8 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-3">👥</div>
                        <h3 className="text-xl font-bold">Engelsiz Spor</h3>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Engelli Bireylere Spor İmkanı
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        Engelli bireylerin spora erişimini kolaylaştırmak için tesislerimizi 
                        erişilebilir hale getiriyor ve özel eğitim programları sunuyoruz.
                      </p>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Engelsiz tesis altyapısı</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Özel eğitimli antrenörler</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Entegre spor programları</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Proje 4 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-orange-500 to-orange-700 p-8 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-3">📚</div>
                        <h3 className="text-xl font-bold">Eğitim Desteği</h3>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Spor ve Eğitim Birlikteliği
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        Sporcularımızın akademik başarılarını da önemsiyoruz. Eğitim desteği 
                        ve ders çalışma programlarıyla spor-eğitim dengesini sağlıyoruz.
                      </p>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Ücretsiz ders desteği programı</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Burs ve eğitim materyali yardımı</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Kariyer danışmanlığı</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Proje 5 */}
                <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-pink-500 to-pink-700 p-8 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-3">❤️</div>
                        <h3 className="text-xl font-bold">Sağlık Kampanyaları</h3>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Toplum Sağlığı İçin Farkındalık
                      </h3>
                      <p className="text-slate-700 leading-relaxed mb-4">
                        Düzenli olarak sağlık taramaları, beslenme seminerleri ve farkındalık 
                        kampanyaları düzenleyerek toplum sağlığına katkı sağlıyoruz.
                      </p>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Ücretsiz sağlık taramaları</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Beslenme ve sağlıklı yaşam seminerleri</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>Kan bağışı kampanyaları</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* İstatistikler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Sosyal Etki Rakamlarımız
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-center text-white shadow-lg">
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <p className="text-sm text-blue-100">Desteklenen Çocuk</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-6 text-center text-white shadow-lg">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p className="text-sm text-green-100">Dikilen Ağaç</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-center text-white shadow-lg">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <p className="text-sm text-purple-100">Sosyal Proje</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-6 text-center text-white shadow-lg">
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <p className="text-sm text-orange-100">Faydalanan Kişi</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#1E4FBC] to-[#003580] rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Siz de Destek Olun!
                </h2>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Sosyal sorumluluk projelerimize destek olmak ve topluma birlikte 
                  değer katmak için bizimle iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="/iletisim" variant="primary" size="lg">
                    İLETİŞİME GEÇİN
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

