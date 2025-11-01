import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function CardShell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-[#2563eb]/15 via-[#eab308]/25 to-[#16a34a]/15 ${className}`}>
      <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm">
        {children}
      </div>
    </div>
  );
}

export default function BranchCard({ 
  href, 
  title, 
  stats, 
  emoji, 
  gradient 
}: { 
  href: string; 
  title: string; 
  stats: string; 
  emoji: string; 
  gradient: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="h-full">
        <CardShell className="h-full">
          <div className="overflow-hidden rounded-2xl h-full flex flex-col">
            <div className={`h-60 flex items-center justify-center text-8xl ${gradient} text-white flex-shrink-0`}>
              {emoji}
            </div>
            <div className="p-8 text-center space-y-2 flex flex-col justify-between flex-grow">
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-neutral-900 group-hover:text-[#eab308] transition-colors line-clamp-2">
                  {title}
                </h3>
                <p className="text-neutral-700 line-clamp-2">
                  {stats}
                </p>
              </div>
              <div className="pt-3">
                <span className="inline-flex items-center gap-2 font-semibold text-neutral-900 group-hover:text-[#eab308]">
                  Detayları Gör
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </CardShell>
      </motion.div>
    </Link>
  );
}

