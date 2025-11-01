import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDate } from '@/lib/hooks/useNews';

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

export default function NewsCard({ item }: { item: any }) {
  // Get first media file if available
  const coverImage = item.mediaFiles && item.mediaFiles.length > 0
    ? item.mediaFiles[0].s3Url
    : null;

  return (
    <motion.article variants={fadeUp} className="group h-full flex flex-col" whileHover={{ y: -6 }}>
      <CardShell className="h-full">
        <div className="overflow-hidden rounded-2xl h-full flex flex-col">
          {coverImage ? (
            <div className="h-48 md:h-56 overflow-hidden flex-shrink-0">
              <img
                src={coverImage}
                alt={item.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ) : (
            <div className="h-48 md:h-56 flex items-center justify-center text-7xl bg-gradient-to-br from-neutral-800 to-neutral-700 text-white flex-shrink-0">
              📰
            </div>
          )}
          <div className="p-6 space-y-3 flex flex-col flex-grow">
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                {item.sportTypeName}
              </span>
              <p className="text-xs font-medium text-neutral-500">{formatDate(item.publishedAt)}</p>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 leading-snug line-clamp-2 flex-shrink-0">
              {item.title}
            </h3>
            <p className="text-neutral-700 line-clamp-3 flex-grow">
              {item.content}
            </p>
            <div className="flex-shrink-0">
              <Link href={`/haberler/${item.id}`} className="inline-flex items-center gap-2 font-semibold text-neutral-900 hover:text-[#eab308]">
                Devamını Oku
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </CardShell>
    </motion.article>
  );
}

