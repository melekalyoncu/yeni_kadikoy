import Link from "next/link";

type Props = {
  title: string;
  period: string;
  description: string;
  ages: string;
  gradientFrom: string; // e.g. "from-green-600"
  gradientTo: string;   // e.g. "to-green-800"
  buttonHref: string;
  buttonLabel?: string;
  badgeTextClass?: string; // e.g. "text-emerald-700"
};

export default function ProgramCard({
  title,
  period,
  description,
  ages,
  gradientFrom,
  gradientTo,
  buttonHref,
  buttonLabel = "Kayıt Ol",
  badgeTextClass = "text-emerald-700",
}: Props) {
  return (
    <div className={["bg-gradient-to-br text-white rounded-xl shadow-lg p-5 md:p-6 hover:shadow-xl transition-shadow", gradientFrom, gradientTo].join(" ")}>
      <h3 className="text-xl md:text-2xl font-bold mb-1.5 md:mb-2">{title}</h3>
      <p className="text-white/80 mb-3 md:mb-4 font-medium">{period}</p>
      <p className="mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className={["bg-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-md", badgeTextClass].join(" ")}>
          {ages}
        </span>
        <Link
          href={buttonHref}
          className="bg-gradient-to-r from-[#EAB308] to-[#FACC15] text-slate-900 px-5 md:px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-0.5"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
