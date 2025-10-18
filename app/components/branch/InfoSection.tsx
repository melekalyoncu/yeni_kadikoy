type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function InfoSection({ title, children, className }: Props) {
  return (
    <section className={["mb-8 md:mb-12 bg-slate-50 rounded-xl shadow-sm border border-slate-200 p-6 md:p-8", className ?? ""].join(" ")}>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 md:mb-6">{title}</h2>
      {children}
    </section>
  );
}
