import Link from "next/link";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/hooks/useNews";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function NewsCard({ item }: { item: any }) {
  // kapak görseli varsa onu al
  const coverImage =
    item.mediaFiles && item.mediaFiles.length > 0
      ? item.mediaFiles[0].s3Url
      : null;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <div
        className="
          flex flex-col h-full
          rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl
          shadow-[0_24px_60px_rgba(0,0,0,0.08)]
          hover:shadow-[0_32px_80px_rgba(0,0,0,0.12)]
          transition-shadow
        "
      >
        {/* Kapak görsel alanı */}
        <div className="h-48 md:h-56 w-full overflow-hidden rounded-t-2xl flex-shrink-0 bg-neutral-800 text-white grid place-items-center">
          {coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={coverImage}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="text-6xl">📰</div>
          )}
        </div>

        {/* İçerik alanı */}
        <div className="flex flex-col flex-1 p-6">
          {/* Üst bilgi satırı */}
          <div className="flex items-center justify-between w-full text-[11px] font-medium text-neutral-600 flex-shrink-0 mb-2">
            <span className="inline-flex items-center rounded px-2 py-1 font-semibold text-[#1E4FBC]">
              {item.sportTypeName || "Hepsi"}
            </span>

            <span className="text-neutral-500">
              {formatDate(item.publishedAt)}
            </span>
          </div>


          {/* Başlık */}
          <h3
            className="
              text-lg md:text-xl font-semibold text-neutral-900 leading-snug
              line-clamp-2 flex-shrink-0
            "
          >
            {item.title}
          </h3>

          {/* Kısa içerik */}
          <p
            className="
              text-neutral-700 text-sm md:text-base leading-relaxed
              mt-3 line-clamp-3 flex-shrink-0
            "
          >
            {item.content}
          </p>

          {/* Boşluk itici (footer link alta sabitlensin) */}
          <div className="flex-1" />

          {/* Devamını oku linki */}
          <div className="pt-4 flex-shrink-0">
            <Link
              href={`/haberler/${item.id}`}
              className="
                inline-flex items-center gap-2
                font-semibold text-neutral-900
                hover:text-[#eab308] text-sm md:text-[15px]
              "
            >
              Devamını Oku
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
