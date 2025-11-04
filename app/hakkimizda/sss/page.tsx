'use client';

import { useState } from 'react';
import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';
import CTAButton from '@/app/components/ui/CTAButton';

// SSS verileri
const faqData = [
  {
    category: 'Genel',
    questions: [
      {
        q: 'Yeni Kadıköy Spor Kulübü hangi branşlarda eğitim veriyor?',
        a: 'Kulübümüz voleybol, basketbol ve okçuluk branşlarında profesyonel eğitim vermektedir. Her branşta farklı yaş grupları için özel programlar sunuyoruz.',
      },
      {
        q: 'Kulüp ne zaman kuruldu?',
        a: 'Yeni Kadıköy Spor Kulübü 2020 yılında kurulmuştur. İlk olarak voleybol branşıyla başlayan kulübümüz, 2021\'de basketbol, 2022\'de ise okçuluk branşlarını eklemiştir.',
      },
      {
        q: 'Tesisleriniz nerede bulunuyor?',
        a: 'Tesislerimiz İstanbul, Kadıköy ilçesinde bulunmaktadır. Modern salonlarımız ve açık sahalarımız ile sporcularımıza en iyi ortamı sunuyoruz.',
      },
    ],
  },
  {
    category: 'Kayıt ve Üyelik',
    questions: [
      {
        q: 'Kulübe nasıl kayıt olabilirim?',
        a: 'Kayıt olmak için web sitemizin "Kayıt Ol" sayfasından online başvuru yapabilir veya tesislerimizi ziyaret ederek yerinde kayıt olabilirsiniz. 18 yaşından küçükler için veli/vasi onayı gerekmektedir.',
      },
      {
        q: 'Kayıt için hangi belgeler gerekli?',
        a: 'Kayıt için kimlik fotokopisi, 2 adet vesikalık fotoğraf, sağlık raporu ve 18 yaşından küçükler için veli onay formu gerekmektedir.',
      },
      {
        q: 'Üyelik ücretleri nedir?',
        a: 'Üyelik ücretleri branş ve yaş grubuna göre değişiklik göstermektedir. Detaylı fiyat bilgisi için iletişim sayfamızdan bize ulaşabilir veya 0216 123 45 67 numaralı telefondan bilgi alabilirsiniz.',
      },
      {
        q: 'Deneme dersi alabiliyor muyuz?',
        a: 'Evet, tüm branşlarımızda ücretsiz deneme dersi imkanı sunuyoruz. Deneme dersi için önceden randevu almanız gerekmektedir.',
      },
    ],
  },
  {
    category: 'Eğitim ve Antrenmanlar',
    questions: [
      {
        q: 'Antrenmanlar haftada kaç gün yapılıyor?',
        a: 'Antrenman sıklığı yaş grubu ve seviyeye göre değişmektedir. Genellikle haftada 2-4 gün arası antrenman yapılmaktadır. Detaylı program için antrenörlerimizle görüşebilirsiniz.',
      },
      {
        q: 'Antrenörleriniz sertifikalı mı?',
        a: 'Evet, tüm antrenörlerimiz ilgili federasyonlardan sertifikalı ve deneyimli profesyonellerdir. Ayrıca düzenli olarak eğitim ve gelişim programlarına katılmaktadırlar.',
      },
      {
        q: 'Hangi yaş gruplarına eğitim veriyorsunuz?',
        a: 'Kulübümüz 6 yaş ve üzeri tüm yaş gruplarına eğitim vermektedir. Her yaş grubu için özel olarak tasarlanmış programlarımız bulunmaktadır.',
      },
      {
        q: 'Müsabaka ve turnuvalara katılım var mı?',
        a: 'Evet, sporcularımız düzenli olarak bölgesel ve ulusal turnuvalara katılmaktadır. Turnuva katılımları, sporcuların seviyesine ve hazırlık durumuna göre antrenörlerimiz tarafından belirlenir.',
      },
    ],
  },
  {
    category: 'Tesisler ve Ekipman',
    questions: [
      {
        q: 'Tesislerinizde neler var?',
        a: 'Tesislerimizde kapalı voleybol ve basketbol salonları, açık basketbol sahası, okçuluk poligonu, soyunma odaları, duşlar ve kafeterya bulunmaktadır. Tüm alanlarımız modern ekipmanlarla donatılmıştır.',
      },
      {
        q: 'Ekipmanları kendimiz mi temin etmeliyiz?',
        a: 'Temel antrenman ekipmanları kulübümüz tarafından sağlanmaktadır. Ancak kişisel spor ayakkabısı ve kıyafetlerin sporcular tarafından temin edilmesi gerekmektedir.',
      },
      {
        q: 'Tesisler engelli erişimine uygun mu?',
        a: 'Evet, tesislerimiz engelli bireylerin rahatça erişebileceği şekilde tasarlanmıştır. Rampa, asansör ve engelli tuvaletleri mevcuttur.',
      },
    ],
  },
  {
    category: 'Diğer',
    questions: [
      {
        q: 'Sosyal sorumluluk projeleriniz var mı?',
        a: 'Evet, kulübümüz dezavantajlı çocuklara ücretsiz spor eğitimi, çevre projeleri, engelli bireylere spor imkanı ve sağlık kampanyaları gibi birçok sosyal sorumluluk projesi yürütmektedir.',
      },
      {
        q: 'Veli toplantıları yapılıyor mu?',
        a: 'Evet, dönem başı ve dönem sonu olmak üzere düzenli veli toplantıları yapılmaktadır. Ayrıca veliler istedikleri zaman antrenörlerle görüşme talep edebilirler.',
      },
      {
        q: 'Beslenme danışmanlığı hizmeti var mı?',
        a: 'Evet, sporcularımıza ve ailelerine yönelik düzenli olarak beslenme seminerleri düzenlenmekte ve talep edilmesi halinde bireysel beslenme danışmanlığı hizmeti verilmektedir.',
      },
      {
        q: 'Yaz kampları düzenliyor musunuz?',
        a: 'Evet, her yıl yaz ve kış dönemlerinde yoğun antrenman kampları düzenliyoruz. Kamplar hakkında detaylı bilgi için "Kamplarımız" sayfamızı ziyaret edebilirsiniz.',
      },
    ],
  },
];

export default function SSSPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroBand
        pill="Hakkımızda • Yardım"
        title="SIK SORULAN SORULAR"
        subtitle="Merak ettiğiniz soruların cevapları burada"
        actions={
          <>
            <CTAButton href="/iletisim" variant="primary" size="md">
              BİZE ULAŞIN
            </CTAButton>
          </>
        }
      />

      <GridShell>
        <main className="lg:col-span-8">
          <div className="mx-auto w-full max-w-screen-lg px-4 md:px-6">
            
            {/* Giriş */}
            <section className="mb-8">
              <div className="bg-blue-50 rounded-xl shadow-sm border border-blue-200 p-6">
                <p className="text-slate-700 leading-relaxed">
                  Aşağıda sık sorulan sorulara verdiğimiz cevapları bulabilirsiniz. 
                  Sorunuzun cevabını bulamadıysanız, bizimle iletişime geçmekten çekinmeyin.
                </p>
              </div>
            </section>

            {/* SSS Kategorileri */}
            <section className="mb-12 space-y-8">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <span className="h-1 w-12 bg-gradient-to-r from-[#1E4FBC] to-[#EAB308] rounded-full"></span>
                    {category.category}
                  </h2>
                  
                  <div className="space-y-3">
                    {category.questions.map((item, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isOpen = openIndex === key;
                      
                      return (
                        <div
                          key={questionIndex}
                          className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <button
                            onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                            className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                          >
                            <span className="font-semibold text-slate-900 pr-4">
                              {item.q}
                            </span>
                            <svg
                              className={`w-5 h-5 text-[#1E4FBC] flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          
                          {isOpen && (
                            <div className="px-5 pb-5 pt-0">
                              <div className="border-t border-slate-200 pt-4">
                                <p className="text-slate-700 leading-relaxed">
                                  {item.a}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>

            {/* Hala Sorunuz Var mı? */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#1E4FBC] to-[#003580] rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                <div className="text-5xl mb-4">💬</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Hala Sorunuz Var mı?
                </h2>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Cevabını bulamadığınız sorular için bizimle iletişime geçebilirsiniz. 
                  Size yardımcı olmaktan mutluluk duyarız.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="/iletisim" variant="primary" size="lg">
                    İLETİŞİME GEÇİN
                  </CTAButton>
                  <CTAButton href="tel:+902161234567" variant="secondary" size="lg">
                    HEMEN ARAYIN
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

