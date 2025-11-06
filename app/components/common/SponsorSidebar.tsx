"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSponsorList, Placement } from "@/lib/hooks/useSponsor";

type Sponsor = {
  id: number;
  name: string;
  photo?: string;
  logo?: string;
  url?: string;
};

type SponsorSidebarProps = {
  placement?: Placement;
  maxSponsors?: number;
};

export default function SponsorSidebar({
  placement = 1,
  maxSponsors = 6,
}: SponsorSidebarProps) {
  const { sponsors: apiSponsors, isLoading } = useSponsorList(
    undefined,
    placement,
    true,
    1,
    100 // Fetch more sponsors to enable rotation
  );

  const [isMounted, setIsMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-rotate sponsors every 5 seconds
  useEffect(() => {
    if (!isMounted || apiSponsors.length <= maxSponsors) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + maxSponsors;
        // If we've reached the end, start over
        if (nextIndex >= apiSponsors.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isMounted, apiSponsors.length, maxSponsors]);

  const allSponsors: Sponsor[] = isMounted
    ? apiSponsors.map((s) => ({
        id: s.id,
        name: s.name,
        photo: s.photoUrl || undefined,
        logo: s.logoUrl || s.photoUrl || undefined,
        url: s.websiteUrl || undefined,
      }))
    : [];

  // Get the current slice of sponsors to display
  const sponsors = allSponsors.slice(currentIndex, currentIndex + maxSponsors);

  return (
    <aside
      className={`
        flex flex-col gap-4
        w-full
        /* mobilde full genişlik, md ve üstünde dar kolon */
        md:w-[170px] lg:w-[180px] xl:w-[200px]
        mx-auto md:mx-0
        md:sticky md:top-24
      `}
      aria-label="Sponsor Paneli"
    >
      {/* Banner / reklam alanı */}
      <AdSlot />

      {/* Sponsor listesi */}
      <section
        className="
          rounded-xl
          bg-white/90 
          backdrop-blur-xl
          border border-slate-200/70 
          shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)]
          px-2.5 py-2.5
        "
      >
        {/* Header */}
        <header className="flex items-start justify-between mb-2">
          <div className="flex flex-col">
            <h3 className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-700  leading-none">
              Sponsorlarımız
            </h3>
            <span className="text-[9px] text-slate-500  font-medium leading-tight line-clamp-1">
              Kulübümüze destek verenler
            </span>
          </div>

          <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#ea580c]" />
        </header>

        <div className="mt-2">
          {isLoading ? (
            <div className="text-center py-4">
              <div className="inline-block h-4 w-4 animate-spin rounded-full border-[2px] border-solid border-[#2563eb] border-r-transparent" />
              <p className="mt-1.5 text-[9px] text-slate-500 font-medium">
                Yükleniyor...
              </p>
            </div>
          ) : sponsors.length > 0 ? (
            <>
              <ul className="flex flex-col gap-2">
                {sponsors.map((s) => (
                  <li key={s.id}>
                    <SponsorTile sponsor={s} />
                  </li>
                ))}
              </ul>

              <div className="mt-3 rounded-lg border border-dashed border-slate-300/80  bg-slate-50/60 text-center text-[9px] text-slate-600 px-2 py-2.5 hover:bg-slate-100 transition-colors">
                <p className="font-medium text-slate-700  text-[10px] leading-tight">
                  Markanızı burada görmek ister misiniz?
                </p>
                <Link
                  href="/iletisim"
                  className="mt-1 inline-block text-[9px] font-semibold text-[#2563eb]  hover:underline underline-offset-2"
                >
                  İletişime geçin →
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <p className="text-[9px] text-slate-500 font-medium">
                Henüz sponsor bulunmuyor
              </p>
              <Link
                href="/iletisim"
                className="mt-1.5 inline-block text-[9px] font-semibold text-[#2563eb]  hover:underline underline-offset-2"
              >
                İlk sponsor siz olun →
              </Link>
            </div>
          )}
        </div>
      </section>
    </aside>
  );
}

// Küçük sponsor kartı (kompakt, dar kolon uyumlu)
function SponsorTile({ sponsor }: { sponsor: Sponsor }) {
  const Card = (
    <div
      className="
        group flex items-center gap-2
        rounded-lg
        border border-slate-200/70 
        bg-white/80 
        px-2 py-2
        shadow-[0_4px_12px_rgba(0,0,0,0.06)]
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]
        hover:border-[#2563eb]/40 
        transition-all
      "
    >
      {/* Logo kutusu */}
      <div
        className="
          flex-shrink-0 h-7 w-7 rounded-md
          bg-white 
          ring-1 ring-slate-200/80 
          shadow-[0_2px_8px_rgba(0,0,0,0.06)]
          grid place-items-center overflow-hidden
        "
      >
        {sponsor.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="object-contain h-5 w-5"
          />
        ) : (
          <span className="text-[8px] text-slate-400 font-medium leading-none">
            LOGO
          </span>
        )}
      </div>

      {/* Metin */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px] font-semibold text-slate-800 leading-tight">
          {sponsor.name}
        </p>
        <p className="text-[8px] text-slate-500 leading-tight font-medium">
          Resmi Sponsor
        </p>
      </div>

      {/* Arrow */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#2563eb]  text-[9px] font-semibold">
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

// Banner alanı, dar versiyon + kompakt padding
function AdSlot() {
  const { sponsors: bannerSponsors, isLoading } = useSponsorList(
    undefined,
    0, // Placement.Banner
    true,
    1,
    100 // Fetch all banner sponsors
  );

  const [mounted, setMounted] = useState(false);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-rotate banner sponsors every 7 seconds
  useEffect(() => {
    if (!mounted || bannerSponsors.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => {
        const nextIndex = prev + 1;
        // If we've reached the end, start over
        if (nextIndex >= bannerSponsors.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 7000); // Rotate every 7 seconds

    return () => clearInterval(interval);
  }, [mounted, bannerSponsors.length]);

  const allBannerAds: Sponsor[] = mounted
    ? bannerSponsors.map((s) => ({
        id: s.id,
        name: s.name,
        photo: s.photoUrl || undefined,
        logo: s.logoUrl || s.photoUrl || undefined,
        url: s.websiteUrl || undefined,
      }))
    : [];

  const ad: Sponsor | undefined = allBannerAds[currentBannerIndex];

  return (
    <section
      className={`
        relative overflow-hidden
        rounded-xl
        border border-slate-200/70
        bg-gradient-to-br from-white via-slate-50 to-slate-100
        shadow-[0_12px_32px_-8px_rgba(0,0,0,0.35)]
        ring-1 ring-white/40
        px-2.5 py-2.5
      `}
      aria-label="Sponsor Reklam Alanı"
    >
      {/* hafif glow */}
      <div
        className="
          pointer-events-none absolute -top-12 -right-12 h-20 w-20 rounded-full
          bg-[#2563eb]/20 blur-2xl opacity-40
        "
      />

      {/* header */}
      <header className="relative flex items-start justify-between mb-2">
        <div className="flex flex-col">
          <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-700  leading-none">
            Öne Çıkan Sponsor
          </span>
          <span className="text-[9px] text-slate-500font-medium leading-tight line-clamp-1">
            Kulübümüze özel destek
          </span>
        </div>

        <span className="inline-flex h-4 items-center rounded-full bg-yellow-100 text-[8px] font-semibold text-yellow-700 px-1.5 ring-1 ring-yellow-400/40 ">
          Reklam
        </span>
      </header>

      <div className="relative mt-2">
        {isLoading ? (
          <div className="aspect-[4/3] w-full rounded-lg border border-dashed border-slate-300/80 bg-white/50 grid place-items-center text-center text-[9px] text-slate-500 font-medium py-3">
            Yükleniyor...
          </div>
        ) : ad ? (
          <a
            href={ad.url || "#"}
            target={ad.url ? "_blank" : undefined}
            rel={ad.url ? "noopener noreferrer" : undefined}
            aria-label={ad.name}
            className="group block"
          >
            {/* görsel */}
            <div
              className="
                relative aspect-[4/3] w-full overflow-hidden
                rounded-lg
                ring-1 ring-slate-200
                bg-white
                shadow-[0_8px_24px_rgba(0,0,0,0.2)]
                grid place-items-center
              "
            >
              {ad.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={ad.photo}
                  alt={ad.name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                />
              ) : (
                <div className="text-[9px] text-slate-500 text-center p-3">
                  Görsel bulunamadı
                </div>
              )}
            </div>

            {/* alt bilgi */}
            <div className="mt-2.5 flex items-start gap-2">
              <div
                className="
                  h-7 w-7 rounded-md bg-white 
                  ring-1 ring-slate-200
                  grid place-items-center overflow-hidden
                  shadow-[0_6px_16px_rgba(0,0,0,0.2)]
                  flex-shrink-0
                "
              >
                {ad.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={ad.logo}
                    alt={ad.name}
                    className="w-5 h-5 object-contain"
                  />
                ) : (
                  <span className="text-[8px] text-slate-400 font-medium leading-none">
                    LOGO
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-semibold text-slate-800 leading-tight">
                  {ad.name}
                </p>
                <p className="text-[8px] text-slate-500 leading-tight font-medium">
                  Resmi İş Ortağı
                </p>

                <p className="mt-1.5 text-[9px] text-slate-600leading-relaxed line-clamp-2">
                  Bu alan kulübümüzün ana sponsorları için ayrılmıştır.
                </p>
              </div>

              <div className="text-[#2563eb] text-[9px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap flex-shrink-0 leading-none pt-0.5">
                {ad.url ? "→" : ""}
              </div>
            </div>
          </a>
        ) : (
          <div className="text-center">
            <div
              className="
                relative aspect-[4/3] w-full
                rounded-lg border-2 border-dashed
                border-slate-300/80 
                bg-white/4
                grid place-items-center text-slate-600
                shadow-[0_8px_24px_rgba(0,0,0,0.2)]
              "
            >
              <div className="text-center p-2">
                <p className="text-[8px] font-semibold tracking-[0.14em] uppercase text-slate-700 ">
                  Reklam Alanı
                </p>
                <p className="mt-0.5 text-[8px] text-slate-500  font-medium">
                  180 × 160
                </p>
              </div>
            </div>

            <p className="mt-2 text-[9px] text-slate-600 leading-relaxed">
              Bu alan reklam için ayrılmıştır.
            </p>

            <Link
              href="/iletisim"
              className="mt-1.5 inline-block text-[9px] font-semibold text-[#2563eb] hover:underline underline-offset-2"
            >
              İş birliği için iletişime geçin →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
