'use client';
import type { ReactNode } from 'react';
import clsx from 'clsx';

type HeroBandProps = {
  title: string;
  subtitle?: string;
  pill?: string;
  className?: string;
  center?: boolean;           // true: metinler ortalı
  showGrid?: boolean;         // ince grid dokusu
  showOrbs?: boolean;         // köşe orb efektleri
  accent?: 'warm' | 'none';   // alt sıcak ayraç
  actions?: ReactNode;        // butonlar vb.
};

export default function HeroBand({
  title,
  subtitle,
  pill,
  className,
  center = true,
  showGrid = true,
  showOrbs = true,
  accent = 'warm',
  actions,
}: HeroBandProps) {
  const paddings = 'py-6 md:py-8';
  const titleSizes = 'text-xl md:text-2xl lg:text-3xl';
  const subtitleSizes = 'text-xs md:text-sm lg:text-base';

  return (
    <section
      className={clsx(
        'relative isolate text-white border-b border-black/10',
        'bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#1e40af]',
        className
      )}
    >
      {/* radial highlight */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(900px_600px_at_50%_-200px,rgba(255,255,255,0.14),transparent)]
        "
      />
      {/* ince grid doku (opsiyonel) */}
      {showGrid && (
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-0 -z-10 opacity-[0.08]
            bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
            bg-[size:28px_28px]
            [mask-image:radial-gradient(85%_70%_at_50%_40%,#000_60%,transparent_100%)]
          "
        />
      )}

      {/* üst/alt parlak çizgiler */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className={clsx('mx-auto w-full max-w-screen-xl px-4', paddings, center && 'text-center')}>
        {pill && (
          <span
            className="
              inline-flex items-center justify-center px-3 py-1 mb-3 rounded-full
              text-[10px] md:text-xs font-medium tracking-wide italic
              bg-white/10 backdrop-blur-sm ring-1 ring-white/20
            "
          >
            {pill}
          </span>
        )}

        <h1
          className={clsx(
            titleSizes,
            'italic font-semibold tracking-tight drop-shadow-[0_1px_0_rgba(0,0,0,.25)]'
          )}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={clsx(
              'opacity-90 max-w-2xl mt-2 italic font-normal',
              subtitleSizes,
              center ? 'mx-auto' : 'mx-0'
            )}
          >
            {subtitle}
          </p>
        )}

        {accent === 'warm' && (
          <div
            className="mt-4 mx-auto h-[3px] w-16 rounded-full
                       bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-[#ea580c]
                       shadow-[0_0_24px_rgba(250,204,21,.25)]"
          />
        )}

        {actions && (
          <div className={clsx('mt-5', center ? 'flex justify-center gap-3' : 'flex gap-3')}>
            {actions}
          </div>
        )}
      </div>

      {/* dekoratif köşe orbları (opsiyonel) */}
      {showOrbs && (
        <>
          <div aria-hidden className="pointer-events-none absolute -top-16 -left-16 h-48 w-48 rounded-full blur-2xl opacity-30 bg-white/20 mix-blend-soft-light" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full blur-3xl opacity-25 bg-white/20 mix-blend-soft-light" />
        </>
      )}
    </section>
  );
}
