"use client";

import Image from "next/image";
import Link from "next/link";

type Sponsor = {
  id: number | string;
  name: string;
  logo?: string;
  url?: string;
};

export default function SponsorSidebar() {
  const sponsors: Sponsor[] = [
    { id: 1, name: "Sponsor 1", logo: "🏆", url: "#" },
    { id: 2, name: "Sponsor 2", logo: "⚽", url: "#" },
    { id: 3, name: "Sponsor 3", logo: "🎯", url: "#" },
  ];

  return (
    <aside className="space-y-6" aria-label="Sponsor Paneli">
      <section className="rounded-2xl bg-white/80  backdrop-blur-md shadow-md border border-slate-200 mt-6">
        <header className="flex items-center justify-between px-5 pt-5">
          <h3 className="text-xs font-bold  uppercase tracking-wider text-blue-600 ">
            Sponsorlarımız
          </h3>
          <span className="h-[3px] w-20 rounded-full bg-gradient-to-r from-[#EAB308] via-[#FACC15] to-[#0a0f58]" />
        </header>

        <div className="p-5">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sponsors.map((s) => (
              <li key={s.id}>
                <SponsorTile sponsor={s} />
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-xl border border-dashed text-center text-xs py-3 px-4 hover:bg-slate-50  transition-colors border-slate-300  text-slate-600">
            Sponsorumuz olmak ister misiniz?{" "}
            <Link
              href="/iletisim"
              className="font-medium text-[#2563eb] hover:underline underline-offset-2"
            >
              İletişime geçin
            </Link>
          </div>
        </div>
      </section>

      <AdSlot />
    </aside>
  );
}

function SponsorTile({ sponsor }: { sponsor: Sponsor }) {
  const content = (
    <div className="group flex items-center gap-3 rounded-xl p-4 transition-all bg-white hover:ring-2 ring-[#2563eb]/40">
      <div className="h-10 w-10 grid place-items-center rounded-lg bg-white ring-1 ring-slate-200 ">
        {isEmoji(sponsor.logo) ? (
          <span className="text-2xl">{sponsor.logo}</span>
        ) : sponsor.logo ? (
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={28}
            height={28}
            className="object-contain h-7 w-7"
          />
        ) : (
          <span className="text-[10px] text-slate-400">LOGO</span>
        )}
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-slate-800">
          {sponsor.name}
        </p>
        <p className="text-xs text-slate-500 ">Resmî sponsor</p>
      </div>
    </div>
  );

  return sponsor.url ? (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={sponsor.name}
      className="block"
    >
      {content}
    </a>
  ) : (
    content
  );
}

function AdSlot() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl border-2 border-dashed bg-white/80 border-[#eab308]/30 text-center"
      aria-label="Reklam Alanı"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] "
        style={{
          background:
            "repeating-linear-gradient(135deg, #000 0, #000 6px, transparent 6px, transparent 12px)",
        }}
      />
      <div className="relative grid place-items-center p-6">
        <div className="aspect-[6/5] w-full max-w-[300px] rounded-xl bg-slate-50 ring-1 ring-inset ring-slate-200">
          <div className="h-full grid place-items-center text-xs text-slate-500 ">
            <div className="text-center">
              <p className="font-semibold tracking-widest text-[11px] uppercase">Reklam Alanı</p>
              <p className="mt-1 text-[10px]">300 × 250</p>
            </div>
          </div>
        </div>
        <p className="mt-3 text-[11px] text-slate-500">
          Bu alan reklam için ayrılmıştır.
        </p>
      </div>
    </section>
  );
}

function isEmoji(val?: string) {
  if (!val) return false;
  return /\p{Extended_Pictographic}/u.test(val);
}
