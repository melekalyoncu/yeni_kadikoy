import HeroBand from '@/app/components/sections/HeroBand';
import GridShell from '@/app/components/layout/GridShell';

export default function TuzukPage() {
  const pdfUrl = '/documents/yeni-kadikoy-spor-kulubu-tuzuk.pdf';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <HeroBand
        pill="Hakkımızda • Yasal Belgeler"
        title="KULÜP TÜZÜĞÜ"
        subtitle="Yeni Kadıköy Spor Kulübü Ana Tüzüğü"
      />

      <GridShell>
        {/* ANA İÇERİK */}
        <main className="lg:col-span-8">
          <div className="w-full max-w-screen-lg">
            {/* PDF Viewer */}
            <section className="mb-8">
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#1E4FBC] to-[#2563eb] p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div>
                      <h2 className="text-white font-bold text-lg">
                        Kulüp Tüzüğü
                      </h2>
                      <p className="text-white/80 text-sm">
                        Güncel PDF dokümanını aşağıdan görüntüleyebilirsiniz.
                      </p>
                    </div>
                  </div>
                  <a
                    href={pdfUrl}
                    download="Yeni-Kadikoy-Spor-Kulubu-Tuzuk.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#1E4FBC] font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    İndir
                  </a>
                </div>

                {/* PDF Embed */}
                <div className="w-full" style={{ height: '800px' }}>
                  <iframe
                    src={pdfUrl}
                    className="w-full h-full"
                    title="Kulüp Tüzüğü"
                  />
                </div>

                {/* Fallback mesajı */}
                <div className="bg-slate-50 p-4 text-center border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    PDF görüntülenemiyorsa{' '}
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E4FBC] font-semibold hover:underline"
                    >
                      buraya tıklayarak
                    </a>{' '}
                    yeni sekmede açabilirsiniz.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* SAĞ SÜTUN */}
        <aside className="lg:col-span-4 space-y-6">
          {/* İndirme kartı */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
              Belgeler
            </h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-[#1E4FBC]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Kulüp Tüzüğü</p>
                <p className="text-xs text-slate-500">
                  PDF • Güncel sürüm
                </p>
              </div>
            </div>
            <a
              href={pdfUrl}
              download="Yeni-Kadikoy-Spor-Kulubu-Tuzuk.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1E4FBC] text-white font-semibold rounded-lg hover:bg-[#18408f] transition"
            >
              PDF&apos;yi İndir
            </a>
          </div>

          {/* İleride başka belgeler için placeholder */}
          <div className="bg-slate-50 rounded-xl border border-dashed border-slate-200 p-4">
            <p className="text-sm text-slate-600">
              Diğer resmi belgeler bu alanda listelenebilir
              (kararlar, genel kurul çağrıları vb.).
            </p>
          </div>
        </aside>
      </GridShell>
    </div>
  );
}
