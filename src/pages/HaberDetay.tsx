import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { fadeUp } from "@/lib/motion";
import { getNewsBySlug, newsData } from "@/data/news";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export default function HaberDetay() {
  const params = useParams();
  const slug = params?.slug;
  const news = slug ? getNewsBySlug(slug) : undefined;

  if (!news) {
    return (
      <>
        <Helmet>
          <title>Haber Bulunamadı | Boğaziçi Grup A.Ş.</title>
        </Helmet>
        <SubPageLayout
          title="HABER BULUNAMADI"
          activeNav="Haberler"
          breadcrumbs={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Haberler", href: "/haberler" },
            { label: "Bulunamadı" },
          ]}
        >
          <div className="text-center py-16">
            <p className="text-[#888] text-lg mb-6">Aradığınız haber bulunamadı.</p>
            <Link
              href="/haberler"
              className="inline-flex items-center gap-2 bg-navy hover:bg-accent text-white px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all font-display"
            >
              <ArrowLeft size={16} />
              Haberlere Dön
            </Link>
          </div>
        </SubPageLayout>
      </>
    );
  }

  // Diğer haberler (şu anki hariç, en fazla 3)
  const otherNews = newsData.filter((n) => n.slug !== slug).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{news.title} | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content={news.summary} />
      </Helmet>
      <SubPageLayout
        title={news.title}
        activeNav="Haberler"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Haberler", href: "/haberler" },
          { label: news.title },
        ]}
      >
        <div className="max-w-4xl">
          {/* Geri Dön */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
            <Link
              href="/haberler"
              className="inline-flex items-center gap-2 text-accent text-[12px] font-bold uppercase tracking-wider hover:gap-3 transition-all font-heading"
            >
              <ArrowLeft size={14} />
              Haberlere Dön
            </Link>
          </motion.div>

          {/* Haber Detay */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            {/* Üst Bilgi */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-accent text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider font-heading">
                <Tag size={11} />
                {news.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#999] text-[12px]">
                <Calendar size={12} />
                {news.date}
              </span>
            </div>

            {/* Görsel */}
            {news.image && (
              <div className="relative overflow-hidden shadow-lg mb-10">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full aspect-[21/9] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            )}

            {/* İçerik */}
            <div className="prose prose-gray max-w-none">
              {news.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[#555] text-[15px] leading-7 mb-6 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Alt Bilgi - Paylaş / Yazdır */}
            <div className="flex items-center gap-4 mt-10 pt-8 border-t border-gray-200">
              <span className="text-[#999] text-[12px] font-semibold uppercase tracking-wider font-heading">Paylaş:</span>
              <div className="flex items-center gap-3">
                {["Facebook", "X", "LinkedIn"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:border-accent hover:text-accent text-[#999] transition-all text-[11px] font-bold uppercase tracking-wider font-heading"
                  >
                    {platform.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Diğer Haberler */}
          {otherNews.length > 0 && (
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-accent" />
                <h2 className="text-xl font-bold text-navy uppercase font-display">Diğer Haberler</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {otherNews.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/haberler/${item.slug}`}
                    className="group block"
                  >
                    <div className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full">
                      {item.image && (
                        <div className="relative overflow-hidden h-40">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <span className="absolute top-3 left-3 bg-accent text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider font-heading">
                            {item.category}
                          </span>
                        </div>
                      )}
                      <div className="p-5">
                        <span className="text-[#999] text-[11px]">{item.date}</span>
                        <h3 className="text-sm font-bold text-navy uppercase mt-2 mb-2 font-display group-hover:text-accent transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[#777] text-[12px] leading-6 line-clamp-2">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </SubPageLayout>
    </>
  );
}
