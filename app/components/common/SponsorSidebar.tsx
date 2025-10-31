"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSponsorList, Placement } from "@/lib/hooks/useSponsor";

type Sponsor = {
  id: number;
  name: string;
  photo?: string; // büyük görsel (reklam görseli)
  logo?: string;  // küçük logo
  url?: string;
};

type SponsorSidebarProps = {
  // varsayılan olarak kenar çubuğu sponsorlarını göster (Sidebar)
  placement?: Placement;
  maxSponsors?: number;
};

export default function SponsorSidebar({
  placement = 1, // Placement.Sidebar
  maxSponsors = 6,
}: SponsorSidebarProps) {
  // aktif sponsorları çek
  const { sponsors: apiSponsors, isLoading } = useSponsorList(
    undefined,          // sportType (hepsi)
    placement,          // sadece Sidebar sponsorlarını al
    true,               // onlyActive
    1,                  // page
    maxSponsors         // limit
  );

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // UI tarafından kullanılacak struct
  const sponsors: Sponsor[] = isMounted
    ? apiSponsors.map((s) => ({
        id: s.id,
        name: s.name,
        photo: s.photoUrl || undefined,
        logo: s.logoUrl || s.photoUrl || undefined, // logo yoksa küçük thumb olarak photo kullanırsın
        url: s.websiteUrl || undefined,
      }))
    : [];

  return (
    <aside className="space-y-6" aria-label="Sponsor Paneli">
      {/* SPONSOR LİSTESİ */}
      <section className="rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] mt-6">
        {/* Header */}
        <header className="px-5 pt-5 flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700">
              Sponsorlarımız
            </h3>
            <span className="text-[11px] text-slate-400 font-medium leading-none">
              Kulübümüze destek veren markalar
            </span>
          </div>

          <span className="h-[3px] w-20 rounded-full bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#ea580c]" />
        </header>

        {/* Body */}
        <div className="p-5">
          {isLoading ? (
            // loading state
            <div className="text-center py-8">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-[3px] border-solid border-[#2563eb] border-r-transparent" />
              <p className="mt-2 text-[11px] text-slate-500 font-medium">
                Yükleniyor...
              </p>
            </div>
          ) : sponsors.length > 0 ? (
            <>
              {/* Sponsor kartları */}
              <ul className="flex flex-col gap-3">
                {sponsors.map((s) => (
                  <li key={s.id}>
                    <SponsorTile sponsor={s} />
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 rounded-xl border border-dashed border-slate-300/80 bg-slate-50/60 text-center text-[11px] text-slate-600 px-4 py-4 hover:bg-slate-100 transition-colors">
                <p className="font-medium text-slate-700">
                  Markanızı burada görmek ister misiniz?
                </p>
                <Link
                  href="/iletisim"
                  className="mt-1 inline-block text-[11px] font-semibold text-[#2563eb] hover:underline underline-offset-2"
                >
                  İletişime geçin →
                </Link>
              </div>
            </>
          ) : (
            // boş state
            <div className="text-center py-8">
              <p className="text-[11px] text-slate-500 font-medium">
                Henüz sponsor bulunmuyor
              </p>
              <Link
                href="/iletisim"
                className="mt-2 inline-block text-[11px] font-semibold text-[#2563eb] hover:underline underline-offset-2"
              >
                İlk sponsor siz olun →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* BANNER REKLAM */}
      <AdSlot />
    </aside>
  );
}

// Sidebar'daki küçük sponsor kartı
function SponsorTile({ sponsor }: { sponsor: Sponsor }) {
  const Card = (
    <div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm hover:shadow-md hover:border-[#2563eb]/40 transition-all">
      {/* Logo kutusu */}
      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white ring-1 ring-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] grid place-items-center overflow-hidden">
        {sponsor.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="object-contain h-8 w-8"
          />
        ) : (
          <span className="text-[10px] text-slate-400 font-medium leading-none">
            LOGO
          </span>
        )}
      </div>

      {/* Metin */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-slate-800 leading-tight">
          {sponsor.name}
        </p>
        <p className="text-[11px] text-slate-500 leading-tight font-medium">
          Resmi Sponsor
        </p>
      </div>

      {/* küçük arrow */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#2563eb] text-[11px] font-semibold">
        {sponsor.url ? "→" : ""}
      </div>
    </div>
  );

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={sponsor.name}
        className="block"
      >
        {Card}
      </a>
    );
  }

  return Card;
}

/**
 * AdSlot:
 * - placement = Banner olan (0) ilk aktif sponsoru büyük görsel olarak gösteriyoruz.
 * - photoUrl ana görsel olarak full-card gidiyor.
 * - logoUrl (veya photoUrl fallback) küçük avatar olarak aşağıda tekrar gösteriliyor.
 */
function AdSlot() {
  // Banner alanı için sadece 1 sponsor çek
  const { sponsors: bannerSponsors, isLoading } = useSponsorList(
    undefined,          // sportType hepsi
    0,                  // Placement.Banner
    true,               // onlyActive
    1,                  // page
    1                   // limit 1
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const ad: Sponsor | undefined = mounted
    ? bannerSponsors.slice(0, 1).map((s) => ({
        id: s.id,
        name: s.name,
        photo: s.photoUrl || undefined, // büyük görsel
        logo: s.logoUrl || s.photoUrl || undefined, // küçük logo fallback
        url: s.websiteUrl || undefined,
      }))[0]
    : undefined;

  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.18)]"
      aria-label="Sponsor Reklam Alanı"
    >
      {/* üst başlık */}
      <header className="px-5 pt-5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700">
            Öne Çıkan Sponsor
          </span>
          <span className="text-[11px] text-slate-400 font-medium leading-none">
            Kulübümüze özel destek
          </span>
        </div>

        <span className="inline-flex h-5 items-center rounded-full bg-yellow-100 text-[10px] font-semibold text-yellow-700 px-2 ring-1 ring-yellow-400/40">
          Reklam
        </span>
      </header>

      <div className="relative p-5">
        {isLoading ? (
          // loading state
          <div className="aspect-[6/5] w-full rounded-xl border border-dashed border-slate-300/80 bg-slate-50 grid place-items-center text-center text-[11px] text-slate-500 font-medium py-6">
            Yükleniyor...
          </div>
        ) : ad ? (
          // sponsor varsa
          <a
            href={ad.url || "#"}
            target={ad.url ? "_blank" : undefined}
            rel={ad.url ? "noopener noreferrer" : undefined}
            aria-label={ad.name}
            className="group block"
          >
            {/* Ana görsel alanı */}
            <div className="relative aspect-[6/5] w-full overflow-hidden rounded-xl ring-1 ring-slate-200 bg-white grid place-items-center shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)]">
              {ad.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={ad.photo}
                  alt={ad.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform"
                />
              ) : (
                <div className="text-[11px] text-slate-500 text-center p-6">
                  Görsel bulunamadı
                </div>
              )}
            </div>

            {/* Alt bilgi */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-white ring-1 ring-slate-200 grid place-items-center overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
                {ad.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={ad.logo}
                    alt={ad.name}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <span className="text-[10px] text-slate-400 font-medium leading-none">
                    LOGO
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold text-slate-800 leading-tight">
                  {ad.name}
                </p>
                <p className="text-[11px] text-slate-500 leading-tight font-medium">
                  Resmi İş Ortağı
                </p>
              </div>

              <div className="ml-auto text-[#2563eb] text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {ad.url ? "Siteyi ziyaret et →" : ""}
              </div>
            </div>

            <p className="mt-3 text-[11px] text-slate-500 leading-relaxed">
              Bu alan kulübümüzün ana sponsorları için ayrılmıştır.
            </p>
          </a>
        ) : (
          // hiç banner sponsor yoksa fallback
          <div className="text-center">
            <div className="relative aspect-[6/5] w-full max-w-[320px] mx-auto rounded-xl border-2 border-dashed border-slate-300/80 bg-slate-50 grid place-items-center text-slate-500">
              <div className="text-center p-4">
                <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-600">
                  Reklam Alanı
                </p>
                <p className="mt-1 text-[10px] text-slate-500 font-medium">
                  300 × 250
                </p>
              </div>
            </div>

            <p className="mt-3 text-[11px] text-slate-500 leading-relaxed">
              Bu alan reklam için ayrılmıştır.
            </p>

            <Link
              href="/iletisim"
              className="mt-2 inline-block text-[11px] font-semibold text-[#2563eb] hover:underline underline-offset-2"
            >
              İş birliği için iletişime geçin →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
