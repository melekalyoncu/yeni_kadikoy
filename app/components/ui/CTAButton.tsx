'use client';
import Link from 'next/link';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'lg';

type Props = {
  href: string;
  children: string; // kısa CTA metinleri (örn: "KAYIT OL")
  variant?: Variant;
  size?: Size;
  className?: string;
};

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
}: Props) {
  const sizing =
    size === 'lg'
      ? 'px-8 py-3 text-sm'
      : 'px-6 py-2 text-xs md:text-sm';

  const base = clsx(
    'group relative inline-flex items-center justify-center gap-2',
    'rounded-xl font-semibold uppercase tracking-wide',
    'ring-1 ring-black/5 shadow-md',
    'transition duration-200 [transition-property:transform,box-shadow,background-color]',
    'will-change-transform overflow-hidden',
    'hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:shadow-md',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'focus-visible:ring-offset-white',
    sizing
  );

  const styles =
    variant === 'primary'
      ? // Sarı zemin, mavi metin
        'bg-[#facc15] text-[#1e3a8a] hover:bg-yellow-400 focus-visible:ring-[#facc15]'
      : // Secondary: beyaz zemin, koyu metin (hero gibi koyu zeminlerde ideal)
        'bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-blue-400';

  const shine =
    // üstte ince parıltı ve geçişli şerit
    'before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-white/40 before:to-transparent before:opacity-0 hover:before:opacity-10 ' +
    'after:absolute after:top-0 after:left-[-120%] after:h-full after:w-[120%] after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)] ' +
    'after:opacity-0 motion-safe:hover:after:opacity-100 motion-safe:hover:after:animate-[shine_700ms_ease]';

  return (
    <Link href={href} className={clsx(base, styles, shine, className)}>
      {children}
    </Link>
  );
}
