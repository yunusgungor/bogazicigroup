import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  ChevronRight,
  Facebook, Twitter, Instagram, Youtube
} from "lucide-react";
import Header from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const gelecekProjeler = [
  {
    name: "Ramada Encore",
    tag: "Otel",
    category: "Turizm",
    desc: "Modern mimari anlayışı ile tasarlanan, iş ve turizm amaçlı konaklamaya yönelik prestijli otel projesi.",
    img: "/images/bogazici/turizm.png",
  },
];

export default function GelecekProjeler() {
  return (
    <div className="bg-white text-[#1a1a1a] antialiased" style={{ fontFamily: "'Montserrat','Geneva',Arial,sans-serif" }}>
      <Helmet>
        <title>Gelecek Projeler | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup'un planlama ve geliştirme aşamasındaki yeni gayrimenkul ve turizm projelerini keşfedin." />
      </Helmet>
      <Header activeNav="Projeler" />

      {/* Page Banner */}
      <div className="relative pt-[68px] md:pt-[112px]">
        <div className="relative h-[260px] md:h-[340px] flex items-end overflow-hidden" style={{ background: "linear-gradient(135deg, #212a3c 0%, #2e3d55 100%)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)" }} />
          <div className="absolute top-0 left-0 w-full h-1 bg-[#6cbe59]" />
          <div className="max-w-[1250px] mx-auto px-4 pb-10 md:pb-14 w-full">
            <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-widest mb-5" style={{ fontFamily: "'Raleway', sans-serif" }}>
              <Link href="/" className="hover:text-[#6cbe59] transition-colors">Ana Sayfa</Link>
              <ChevronRight size={12} />
              <span className="hover:text-[#6cbe59] cursor-pointer transition-colors">Projeler</span>
              <ChevronRight size={12} />
              <span className="text-[#6cbe59]">Gelecek Projeler</span>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              GELECEK PROJELER
            </motion.h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 56 }} transition={{ duration: 0.6, delay: 0.4 }} className="h-1 bg-[#6cbe59] mt-4" />
          </div>
        </div>
      </div>

      {/* Sub nav */}
      <div className="bg-white border-b border-gray-200 sticky top-[68px] md:top-[112px] z-40 shadow-sm">
        <div className="max-w-[1250px] mx-auto px-4 flex items-center gap-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <Link href="/projeler/gelecek" className="shrink-0 px-5 py-4 text-xs font-bold uppercase tracking-wider border-b-2 border-[#6cbe59] text-[#212a3c] transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Gelecek Projeler
          </Link>
          <Link href="/projeler/tamamlanan" className="shrink-0 px-5 py-4 text-xs font-bold uppercase tracking-wider border-b-2 border-transparent text-gray-500 hover:text-[#212a3c] hover:border-gray-300 transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Tamamlanan Projeler
          </Link>
        </div>
      </div>

      {/* Projects Grid */}
      <main className="max-w-[1250px] mx-auto px-4 py-14 md:py-20">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gelecekProjeler.map((project) => (
            <motion.article key={project.name} variants={fadeUp} className="group bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#6cbe59] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>{project.tag}</span>
              </div>
              <div className="p-6">
                <p className="text-[#6cbe59] text-[10px] font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>{project.category}</p>
                <h2 className="text-xl font-bold text-[#212a3c] mb-3 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>{project.name}</h2>
                <div className="w-8 h-0.5 bg-[#6cbe59] mb-4 transition-all duration-300 group-hover:w-16" />
                <p className="text-[#666] text-sm leading-relaxed mb-6">{project.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-[#212a3c] text-white mt-8">
        <div className="max-w-[1250px] mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/images/bogazici/logo.png" alt="Boğaziçi Grup" className="h-11 w-auto mb-6 opacity-90" />
            <p className="text-white/45 text-sm leading-7 mb-6">1938'den bu yana inşaat sektörünün güvenilir ismi.</p>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>Projeler</h5>
            <ul className="space-y-3">
              <li><Link href="/projeler/gelecek" className="text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Gelecek Projeler</Link></li>
              <li><Link href="/projeler/tamamlanan" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Tamamlanan Projeler</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>Kurumsal</h5>
            <ul className="space-y-3">
              <li><Link href="/kurumsal/hakkimizda" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Hakkımızda</Link></li>
              <li><Link href="/kurumsal/tarihce" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Tarihçe</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>İletişim</h5>
            <div className="mt-6 space-y-3">
              <Link href="/iletisim/bize-ulasin" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Bize Ulaşın</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8">
          <div className="max-w-[1250px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30">
            <span>© 2026 Boğaziçi Grup A.Ş. — Tüm Hakları Saklıdır.</span>
            <div className="flex items-center gap-3">
              {(["Facebook", "Twitter", "Instagram", "Youtube"] as const).map((l) => (
                <a key={l} href="#" aria-label={l} className="w-9 h-9 flex items-center justify-center border border-white/15 hover:border-[#6cbe59] hover:text-[#6cbe59] text-white/40 transition-all">
                  {l === "Facebook" && <Facebook size={14} />}
                  {l === "Twitter" && <Twitter size={14} />}
                  {l === "Instagram" && <Instagram size={14} />}
                  {l === "Youtube" && <Youtube size={14} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}