import Link from "next/link";

type Props = {
    emoji: string;
    title: string;
    subtitle?: string;
    from: string;   // tailwind color token e.g. "from-green-600"
    to: string;     // e.g. "to-green-800"
    border?: string; // e.g. "border-green-700/50"
    primary?: { href: string; label: string };
    secondary?: { href: string; label: string };
    secondaryTextClass?: string;
    statChip?: string; // e.g. "4 takım • 2 spor okulu"
};

export default function BranchHero({
    emoji,
    title,
    subtitle,
    from,
    to,
    border,
    primary,
    secondary,
    secondaryTextClass = "text-emerald-700",
    statChip,
}: Props) {
    return (
        <div className="container mx-auto px-4 pt-8 md:pt-10">
            <div
                className={[
                    "relative overflow-hidden rounded-2xl border bg-gradient-to-r text-white shadow-lg",
                    from,
                    to,
                    border ?? "",
                ].join(" ")}
            >
                <div
                    className="absolute inset-0 opacity-15
            [background-image:radial-gradient(circle_at_20%_20%,white_2px,transparent_2px)]
            [background-size:20px_20px]"
                    aria-hidden
                />
                <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-8 px-6 py-8 md:px-10 md:py-10">
                    <div className="text-6xl md:text-7xl" aria-hidden>
                        {emoji}
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
                        {subtitle && (
                            <p className="mt-2 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                        {statChip && (
                            <span className="mt-3 inline-block rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                                {statChip}
                            </span>
                        )}
                    </div>
                    {(primary || secondary) && (
                        <div className="mt-4 md:mt-0 md:ml-auto flex gap-3">
                            {primary && (
                                <Link
                                    href={primary.href}
                                    className="rounded-lg bg-gradient-to-r from-[#EAB308] to-[#FACC15] px-4 md:px-6 py-2 font-semibold text-slate-900 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
                                >
                                    {primary.label}
                                </Link>
                            )}
                            {secondary && (
                                <Link
                                    href={secondary.href}
                                    className={["rounded-lg bg-white/95 px-4 md:px-6 py-2 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition", secondaryTextClass].join(" ")}
                                >
                                    {secondary.label}
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
