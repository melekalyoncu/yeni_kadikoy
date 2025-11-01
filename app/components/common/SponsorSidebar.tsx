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
    maxSponsors
  );

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sponsors: Sponsor[] = isMounted
    ? apiSponsors.map((s) => ({
        id: s.id,
        name: s.name,
        photo: s.photoUrl || undefined,
        logo: s.logoUrl || s.photoUrl || undefined,
        url: s.websiteUrl || undefined,
      }))
    : [];

  return (
    <aside
      className={`
        flex flex-col gap-6
        w-full
        /* mobilde full genişlik, md ve üstünde dar kolon */
        md:w-[220px] lg:w-[230px] xl:w-[230px]
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
          rounded-2xl
          bg-white/90 dark:bg-slate-900/70
          backdrop-blur-xl
          border border-slate-200/70 dark:border-slate-700
          shadow-[0_16px_48px_-12px_rgba(0,0,0,0.45)]
          px-3 py-3
        "
      >
        {/* Header */}
        <header className="flex items-start justify-between">
          <div className="flex flex-col">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-700 dark:text-slate-200 leading-none">
              Sponsorlarımız
            </h3>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight line-clamp-1">
              Kulübümüze destek verenler
            </span>
          </div>

          <span className="h-[3px] w-14 rounded-full bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#ea580c]" />
        </header>

        <div className="mt-4">
          {isLoading ? (
            <div className="text-center py-6">
              <div className="inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-solid border-[#2563eb] border-r-transparent" />
              <p className="mt-2 text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                Yükleniyor...
              </p>
            </div>
          ) : sponsors.length > 0 ? (
            <>
              <ul className="flex flex-col gap-3">
                {sponsors.map((s) => (
                  <li key={s.id}>
                    <SponsorTile sponsor={s} />
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-dashed border-slate-300/80 dark:border-slate-600/70 bg-slate-50/60 dark:bg-slate-800/40 text-center text-[10px] text-slate-600 dark:text-slate-300 px-3 py-4 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors">
                <p className="font-medium text-slate-700 dark:text-slate-100 text-[11px] leading-tight">
                  Markanızı burada görmek ister misiniz?
                </p>
                <Link
                  href="/iletisim"
                  className="mt-1 inline-block text-[10px] font-semibold text-[#2563eb] dark:text-[#60a5fa] hover:underline underline-offset-2"
                >
                  İletişime geçin →
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                Henüz sponsor bulunmuyor
              </p>
              <Link
                href="/iletisim"
                className="mt-2 inline-block text-[10px] font-semibold text-[#2563eb] dark:text-[#60a5fa] hover:underline underline-offset-2"
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
        group flex items-center gap-3
        rounded-xl
        border border-slate-200/70 dark:border-slate-700
        bg-white/80 dark:bg-slate-800/60
        px-3 py-3
        shadow-[0_6px_20px_rgba(0,0,0,0.08)]
        hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)]
        hover:border-[#2563eb]/40 dark:hover:border-[#2563eb]/60
        transition-all
      "
    >
      {/* Logo kutusu */}
      <div
        className="
          flex-shrink-0 h-9 w-9 rounded-lg
          bg-white dark:bg-slate-900
          ring-1 ring-slate-200/80 dark:ring-slate-700
          shadow-[0_4px_12px_rgba(0,0,0,0.08)]
          grid place-items-center overflow-hidden
        "
      >
        {sponsor.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className="object-contain h-6 w-6"
          />
        ) : (
          <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium leading-none">
            LOGO
          </span>
        )}
      </div>

      {/* Metin */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px] font-semibold text-slate-800 dark:text-slate-100 leading-tight">
          {sponsor.name}
        </p>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight font-medium">
          Resmi Sponsor
        </p>
      </div>

      {/* Arrow */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[#2563eb] dark:text-[#60a5fa] text-[10px] font-semibold">
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
    1
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const ad: Sponsor | undefined = mounted
    ? bannerSponsors.slice(0, 1).map((s) => ({
        id: s.id,
        name: s.name,
        photo: s.photoUrl || undefined,
        logo: s.logoUrl || s.photoUrl || undefined,
        url: s.websiteUrl || undefined,
      }))[0]
    : undefined;

  return (
    <section
      className={`
        relative overflow-hidden
        rounded-2xl
        border border-slate-200/70 dark:border-slate-700
        bg-gradient-to-br from-white via-slate-50 to-slate-100
        dark:from-slate-900 dark:via-slate-800/80 dark:to-slate-900
        shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]
        ring-1 ring-white/40 dark:ring-white/5
        px-3 py-3
      `}
      aria-label="Sponsor Reklam Alanı"
    >
      {/* hafif glow */}
      <div
        className="
          pointer-events-none absolute -top-16 -right-16 h-28 w-28 rounded-full
          bg-[#2563eb]/20 blur-3xl opacity-40
          dark:bg-[#2563eb]/40 dark:opacity-30
        "
      />

      {/* header */}
      <header className="relative flex items-start justify-between">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-700 dark:text-slate-200 leading-none">
            Öne Çıkan Sponsor
          </span>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight line-clamp-1">
            Kulübümüze özel destek
          </span>
        </div>

        <span className="inline-flex h-5 items-center rounded-full bg-yellow-100 text-[9px] font-semibold text-yellow-700 px-2 ring-1 ring-yellow-400/40 dark:bg-yellow-300/20 dark:text-yellow-300 dark:ring-yellow-300/30">
          Reklam
        </span>
      </header>

      <div className="relative mt-4">
        {isLoading ? (
          <div className="aspect-[4/3] w-full rounded-xl border border-dashed border-slate-300/80 dark:border-slate-600/70 bg-white/50 dark:bg-slate-800/40 grid place-items-center text-center text-[10px] text-slate-500 dark:text-slate-400 font-medium py-4">
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
                rounded-xl
                ring-1 ring-slate-200 dark:ring-slate-700
                bg-white dark:bg-slate-900
                shadow-[0_16px_48px_rgba(0,0,0,0.25)]
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
                <div className="text-[10px] text-slate-500 dark:text-slate-400 text-center p-4">
                  Görsel bulunamadı
                </div>
              )}
            </div>

            {/* alt bilgi */}
            <div className="mt-4 flex items-start gap-3">
              <div
                className="
                  h-9 w-9 rounded-lg bg-white dark:bg-slate-900
                  ring-1 ring-slate-200 dark:ring-slate-700
                  grid place-items-center overflow-hidden
                  shadow-[0_10px_24px_rgba(0,0,0,0.3)]
                  flex-shrink-0
                "
              >
                {ad.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={ad.logo}
                    alt={ad.name}
                    className="w-7 h-7 object-contain"
                  />
                ) : (
                  <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium leading-none">
                    LOGO
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-slate-800 dark:text-slate-100 leading-tight">
                  {ad.name}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight font-medium">
                  Resmi İş Ortağı
                </p>

                <p className="mt-2 text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  Bu alan kulübümüzün ana sponsorları için ayrılmıştır.
                </p>
              </div>

              <div className="text-[#2563eb] dark:text-[#60a5fa] text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap flex-shrink-0 leading-none pt-1">
                {ad.url ? "Siteyi gör →" : ""}
              </div>
            </div>
          </a>
        ) : (
          <div className="text-center">
            <div
              className="
                relative aspect-[4/3] w-full
                rounded-xl border-2 border-dashed
                border-slate-300/80 dark:border-slate-600/70
                bg-white/40 dark:bg-slate-800/30
                grid place-items-center text-slate-600 dark:text-slate-400
                shadow-[0_16px_48px_rgba(0,0,0,0.25)]
              "
            >
              <div className="text-center p-3">
                <p className="text-[9px] font-semibold tracking-[0.14em] uppercase text-slate-700 dark:text-slate-300">
                  Reklam Alanı
                </p>
                <p className="mt-1 text-[9px] text-slate-500 dark:text-slate-400 font-medium">
                  220 × 200
                </p>
              </div>
            </div>

            <p className="mt-3 text-[10px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Bu alan reklam için ayrılmıştır.
            </p>

            <Link
              href="/iletisim"
              className="mt-2 inline-block text-[10px] font-semibold text-[#2563eb] dark:text-[#60a5fa] hover:underline underline-offset-2"
            >
              İş birliği için iletişime geçin →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
