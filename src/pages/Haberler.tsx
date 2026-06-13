import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { fadeUp } from "@/lib/motion";
import { newsData, categories } from "@/data/news";

export default function Haberler() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered = activeCategory === "Tümü"
    ? newsData
    : newsData.filter((n) => n.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Haberler | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup güncel haberler, projeler, duyurular ve sektör gelişmeleri. Şirketimizin son faaliyetleri hakkında bilgi alın." />
      </Helmet>
      <SubPageLayout
        title="HABERLER"
        activeNav="Haberler"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Haberler" },
        ]}
      >
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}>
          {/* Kategori filtreleri */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all font-heading ${
                  activeCategory === cat
                    ? "bg-navy text-white"
                    : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Haber Listesi */}
          {filtered.length === 0 ? (
            <motion.p variants={fadeUp} className="text-[#888] text-sm py-10 text-center">
              Bu kategoride henüz haber bulunmamaktadır.
            </motion.p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((news, i) => (
                <Link
                  key={news.slug}
                  href={`/haberler/${news.slug}`}
                  className="group block h-full"
                >
                  <motion.div
                    variants={fadeUp}
                    className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col"
                  >
                    {news.image && (
                      <div className="relative overflow-hidden h-44 shrink-0">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider font-heading">
                          {news.category}
                        </span>
                      </div>
                    )}
                    <div className="p-5 md:p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        {!news.image && (
                          <span className="bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider font-heading">
                            {news.category}
                          </span>
                        )}
                        <span className="text-[#999] text-[11px] font-medium">{news.date}</span>
                      </div>
                      <h3 className="text-base font-bold text-navy uppercase mb-2 font-display group-hover:text-accent transition-colors leading-snug">
                        {news.title}
                      </h3>
                      <p className="text-[#555] text-[13px] leading-6 mb-4 flex-1 line-clamp-3">
                        {news.summary}
                      </p>
                      <div className="flex items-center gap-1 text-accent text-[10px] font-bold uppercase tracking-widest transition-all font-heading mt-auto">
                        Devamını Oku
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </SubPageLayout>
    </>
  );
}
