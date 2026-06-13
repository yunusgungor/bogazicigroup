import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Search, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fadeUp, staggerSlow } from "@/lib/motion";
import { allProjects, categories, tagColors } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";

export default function TamamlananProjeler() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Tümü");
  const [search, setSearch] = useState("");

  const filtered = allProjects.filter((p) => {
    const catMatch = activeCategory === "Tümü" || p.tag === activeCategory;
    const searchMatch = p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div className="bg-white text-foreground antialiased">
      <Helmet>
        <title>Tamamlanan Projeler | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup tarafından başarıyla tamamlanan üst yapı, alt yapı, endüstriyel tesis ve uluslararası projelerimizi inceleyin." />
        <meta property="og:title" content="Tamamlanan Projeler | Boğaziçi Grup A.Ş." />
        <meta property="og:description" content="Boğaziçi Grup tarafından başarıyla tamamlanan 60+ referans proje." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header activeNav="Projeler" />

      {/* Page Banner */}
      <div className="relative pt-[60px] md:pt-[68px]">
        <div className="relative flex items-end overflow-hidden min-h-[260px] md:min-h-[340px]" style={{ background: "linear-gradient(135deg, #1a2332 0%, #212a3c 40%, #2e3d55 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
          <div className="max-w-[1440px] mx-auto px-6 pb-10 md:pb-14 w-full relative z-10">
            <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
              <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
              <ChevronRight size={12} />
              <span>Projeler</span>
              <ChevronRight size={12} />
              <span className="text-accent">Tamamlanan Projeler</span>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white font-display" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              TAMAMLANAN PROJELER
            </motion.h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 56 }} transition={{ duration: 0.6, delay: 0.4 }} className="h-1 bg-accent mt-4" />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/50 text-sm mt-4 font-heading">
              {allProjects.length} referans proje — yurt içi ve yurt dışı
            </motion.p>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-white border-b border-gray-200 sticky top-[60px] md:top-[68px] z-40 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 py-3">
            <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.97] font-heading ${activeCategory === cat ? "bg-navy text-white" : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"}`}
                >
                  {cat}
                  {cat !== "Tümü" && (
                    <span className={`ml-1.5 text-[10px] ${activeCategory === cat ? "text-white/60" : "text-gray-400"}`}>
                      ({allProjects.filter(p => p.tag === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="relative sm:ml-auto">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Proje Ara..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-xs border border-gray-200 focus:border-navy focus:outline-none w-full sm:w-56 transition-colors font-heading" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <main className="max-w-[1440px] mx-auto px-6 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[#777] text-sm font-heading">
            <span className="font-bold text-navy">{filtered.length}</span> proje gösteriliyor
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-xs font-heading">
            <SlidersHorizontal size={14} /><span>Filtrele</span>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg font-display">Aranan kriterlere uygun proje bulunamadı.</p>
          </div>
        ) : (
          <motion.div key={activeCategory + search} initial="hidden" animate="visible" variants={staggerSlow}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project) => (
              <motion.a key={project.name} href="#" variants={fadeUp}
                className="group bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden block">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white/80 text-[10px] font-semibold tracking-wide font-heading">{project.location}</span>
                  <span className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider font-heading" style={{ background: tagColors[project.tag] || "#6cbe59" }}>{project.tag}</span>
                </div>
                <div className="p-4">
                  <div className="w-6 h-0.5 bg-accent mb-3 transition-all duration-300 group-hover:w-12" />
                  <h3 className="text-base font-bold text-navy uppercase leading-tight group-hover:text-accent transition-colors font-display">{project.name}</h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}

        <div className="mt-16 pt-12 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: allProjects.length + "+", label: "Tamamlanan Proje" },
              { value: "10+", label: "Farklı Ülke" },
              { value: "88+", label: "Yıl Tecrübe" },
              { value: "100%", label: "Müşteri Memnuniyeti" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-navy mb-1 font-display">{s.value}</div>
                <div className="text-accent text-xs font-bold uppercase tracking-widest font-heading">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
