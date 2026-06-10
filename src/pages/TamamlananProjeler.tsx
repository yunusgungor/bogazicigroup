import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  ChevronRight, Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Search, SlidersHorizontal
} from "lucide-react";
import Header from "@/components/Header";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

type Category = "Tümü" | "Gayrimenkul" | "Taahhüt" | "Turizm" | "Uluslararası";

const allProjects: { name: string; tag: Category; location: string; img: string }[] = [
  { name: "Levent 199", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Göcek Marina Resort Portville Villaları", tag: "Turizm", location: "Fethiye, TR", img: "/images/bogazici/project-2.png" },
  { name: "Eczacıbaşı Ormanada", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-3.png" },
  { name: "Kasaba Ömerli", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Kozapark", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Yenitepe Kadıköy", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Evidea Konutları", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-3.png" },
  { name: "BGZ İstanbul", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-2.png" },
  { name: "The İstanbul Veliefendi", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Koç Kuleleri", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Sabancı Center", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Kiptaş-Yeşilce Aydos", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Kiptaş Hilal Toplu Konutları", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Kiptaş İkitelli", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-2.png" },
  { name: "Park Joven", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-3.png" },
  { name: "Metropol İstanbul", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Sarphan Finanspark", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Varyap Meridyen", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Mytowerland", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Ege Perla Residence", tag: "Gayrimenkul", location: "İzmir, TR", img: "/images/bogazici/project-2.png" },
  { name: "The Knightsbridge Apartments", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/project-3.png" },
  { name: "Abell and Cleland", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/project-4.png" },
  { name: "190 Strand London", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/taahhut.png" },
  { name: "Goodman's Fields London", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Lantern House", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/project-1.png" },
  { name: "One Madison ABD", tag: "Uluslararası", location: "New York, ABD", img: "/images/bogazici/project-2.png" },
  { name: "Van Names - Rusya", tag: "Uluslararası", location: "Rusya", img: "/images/bogazici/project-3.png" },
  { name: "Gölcük Deprem Konutları", tag: "Taahhüt", location: "Kocaeli, TR", img: "/images/bogazici/project-4.png" },
  { name: "Sakarya Deprem Konutları", tag: "Taahhüt", location: "Sakarya, TR", img: "/images/bogazici/taahhut.png" },
  { name: "The Spiral ABD", tag: "Uluslararası", location: "New York, ABD", img: "/images/bogazici/project-1.png" },
  { name: "Al Hitmi Doha Katar", tag: "Uluslararası", location: "Doha, Katar", img: "/images/bogazici/project-2.png" },
  { name: "Tempo Scan Tower - Endonezya", tag: "Uluslararası", location: "Endonezya", img: "/images/bogazici/project-3.png" },
  { name: "Vivelva Orebro - İsveç", tag: "Uluslararası", location: "İsveç", img: "/images/bogazici/project-4.png" },
  { name: "Kartal Lütfi Kırdar Eğitim Araştırma Hastanesi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Garanti Bankası Teknoloji Kampüsü", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Tuzla Ticaret Merkezi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Çağlayan Adliye Sarayı", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-2.png" },
  { name: "Dolphin AVM Center", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-3.png" },
  { name: "Teknopark İstanbul", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Hükümet Konağı", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Desbaş Endüstriyel Tesis", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "İ.E.T.T. Otogar Yapımı", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "İsken Su Gözü Enerji Santrali", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Adıyaman Kahta Doğalgaz Boru Hattı", tag: "Taahhüt", location: "Adıyaman, TR", img: "/images/bogazici/project-2.png" },
  { name: "İstanbul Ankara Hızlı Tren", tag: "Taahhüt", location: "Türkiye", img: "/images/bogazici/project-3.png" },
  { name: "İGDAŞ Anadolu Doğalgaz İşi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Çayırova Atatürk ve Özgürlük Mahallesi Altyapısı", tag: "Taahhüt", location: "Kocaeli, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Tekirdağ Karayolu İnşaatı", tag: "Taahhüt", location: "Tekirdağ, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Maltepe Sosyal Güvenlik Merkezi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Küçükçekmece Kalp Damar Cerrahisi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Otobüs Terminali", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Germencik Enerji Santrali", tag: "Taahhüt", location: "Aydın, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Borabay-Kazakistan Yol İnşaatı", tag: "Uluslararası", location: "Kazakistan", img: "/images/bogazici/project-2.png" },
  { name: "Blue Line Estantion ABD", tag: "Uluslararası", location: "ABD", img: "/images/bogazici/project-3.png" },
  { name: "E45 İsveç Otoyolu", tag: "Uluslararası", location: "İsveç", img: "/images/bogazici/project-4.png" },
  { name: "Usti Nab Ladem Üstgeçit", tag: "Uluslararası", location: "Almanya", img: "/images/bogazici/taahhut.png" },
  { name: "I5 Amerika Birleşik Devletler Yolu ABD", tag: "Uluslararası", location: "ABD", img: "/images/bogazici/gayrimenkul.png" },
  { name: "The Sibellus Academy - Finlandiya", tag: "Uluslararası", location: "Finlandiya", img: "/images/bogazici/project-1.png" },
  { name: "Bat Spa Üniversitesi London", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/project-2.png" },
  { name: "Business Center Macaristan", tag: "Uluslararası", location: "Macaristan", img: "/images/bogazici/project-3.png" },
  { name: "Çalık Enerji Taşkent Business Center Özbekistan", tag: "Uluslararası", location: "Özbekistan", img: "/images/bogazici/project-4.png" },
  { name: "Nursultan Kazakistan Ahunbay Wintergarden Otel", tag: "Uluslararası", location: "Kazakistan", img: "/images/bogazici/taahhut.png" },
];

const categories: Category[] = ["Tümü", "Gayrimenkul", "Taahhüt", "Turizm", "Uluslararası"];

const tagColors: Record<string, string> = {
  Gayrimenkul: "#6cbe59",
  Taahhüt: "#212a3c",
  Turizm: "#0ea5e9",
  Uluslararası: "#6366f1",
};

export default function TamamlananProjeler() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tümü");
  const [search, setSearch] = useState("");

  const filtered = allProjects.filter((p) => {
    const catMatch = activeCategory === "Tümü" || p.tag === activeCategory;
    const searchMatch = p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div className="bg-white text-[#1a1a1a] antialiased" style={{ fontFamily: "'Montserrat','Geneva',Arial,sans-serif" }}>
      <Helmet>
        <title>Tamamlanan Projeler | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup tarafından başarıyla tamamlanan üst yapı, alt yapı, endüstriyel tesis ve uluslararası projelerimizi inceleyin." />
      </Helmet>
      <Header activeNav="Projeler" />

      {/* Page Banner */}
      <div className="relative pt-[68px] md:pt-[112px]">
        <div className="relative h-[260px] md:h-[340px] flex items-end overflow-hidden" style={{ background: "linear-gradient(135deg, #212a3c 0%, #2e3d55 100%)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)" }} />
          <div className="absolute top-0 left-0 w-full h-1 bg-[#6cbe59]" />
          <div className="max-w-[1250px] mx-auto px-4 pb-10 md:pb-14 w-full">
            <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-widest mb-5" style={{ fontFamily: "'Raleway',sans-serif" }}>
              <Link href="/" className="hover:text-[#6cbe59] transition-colors">Ana Sayfa</Link>
              <ChevronRight size={12} />
              <span>Projeler</span>
              <ChevronRight size={12} />
              <span className="text-[#6cbe59]">Tamamlanan Projeler</span>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white" style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              TAMAMLANAN PROJELER
            </motion.h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 56 }} transition={{ duration: 0.6, delay: 0.4 }} className="h-1 bg-[#6cbe59] mt-4" />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/50 text-sm mt-4" style={{ fontFamily: "'Raleway',sans-serif" }}>
              {allProjects.length} referans proje — yurt içi ve yurt dışı
            </motion.p>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-white border-b border-gray-200 sticky top-[68px] md:top-[112px] z-40 shadow-sm">
        <div className="max-w-[1250px] mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 py-3">
            <div className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all active:scale-[0.97] ${activeCategory === cat ? "bg-[#212a3c] text-white" : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"}`}
                  style={{ fontFamily: "'Raleway',sans-serif" }}
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
                className="pl-9 pr-4 py-2 text-xs border border-gray-200 focus:border-[#212a3c] focus:outline-none w-full sm:w-56 transition-colors"
                style={{ fontFamily: "'Raleway',sans-serif" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <main className="max-w-[1250px] mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <p className="text-[#777] text-sm" style={{ fontFamily: "'Raleway',sans-serif" }}>
            <span className="font-bold text-[#212a3c]">{filtered.length}</span> proje gösteriliyor
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-xs" style={{ fontFamily: "'Raleway',sans-serif" }}>
            <SlidersHorizontal size={14} /><span>Filtrele</span>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg" style={{ fontFamily: "'Oswald',sans-serif" }}>Aranan kriterlere uygun proje bulunamadı.</p>
          </div>
        ) : (
          <motion.div key={activeCategory + search} initial="hidden" animate="visible" variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project) => (
              <motion.a key={project.name} href="#" variants={fadeUp}
                className="group bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden block">
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white/80 text-[10px] font-semibold tracking-wide" style={{ fontFamily: "'Raleway',sans-serif" }}>{project.location}</span>
                  <span className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider" style={{ background: tagColors[project.tag] || "#6cbe59", fontFamily: "'Raleway',sans-serif" }}>{project.tag}</span>
                </div>
                <div className="p-4">
                  <div className="w-6 h-0.5 bg-[#6cbe59] mb-3 transition-all duration-300 group-hover:w-12" />
                  <h3 className="text-base font-bold text-[#212a3c] uppercase leading-tight group-hover:text-[#6cbe59] transition-colors" style={{ fontFamily: "'Oswald',sans-serif" }}>{project.name}</h3>
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
              { value: "85+", label: "Yıl Tecrübe" },
              { value: "100%", label: "Müşteri Memnuniyeti" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-[#212a3c] mb-1" style={{ fontFamily: "'Oswald',sans-serif" }}>{s.value}</div>
                <div className="text-[#6cbe59] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Raleway',sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#212a3c] text-white mt-8">
        <div className="max-w-[1250px] mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/images/bogazici/logo.png" alt="Boğaziçi Grup" className="h-11 w-auto mb-6 opacity-90" />
            <p className="text-white/45 text-sm leading-7 mb-6">1938'den bu yana inşaat sektörünün güvenilir ismi.</p>
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
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald',sans-serif" }}>Kurumsal</h5>
            <ul className="space-y-3">
              <li><Link href="/kurumsal/hakkimizda" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Hakkımızda</Link></li>
              <li><Link href="/kurumsal/onursal-baskan" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Onursal Başkan</Link></li>
              <li><Link href="/kurumsal/tarihce" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Tarihçe</Link></li>
              <li><Link href="/kurumsal/vizyon-misyon" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Vizyon & Misyon</Link></li>
              <li><Link href="/kurumsal/kalite-politikamiz" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Kalite Politikamız</Link></li>
              <li><Link href="/kurumsal/belgeler" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Belgeler</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald',sans-serif" }}>Faaliyet Alanları</h5>
            <ul className="space-y-3">
              <li><Link href="/faaliyet-alanlari/gayrimenkul" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Gayrimenkul</Link></li>
              <li><Link href="/faaliyet-alanlari/taahhut" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Taahhüt</Link></li>
              <li><Link href="/faaliyet-alanlari/turizm" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Turizm</Link></li>
            </ul>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5 mt-8" style={{ fontFamily: "'Oswald',sans-serif" }}>Kariyer</h5>
            <ul className="space-y-3">
              <li><Link href="/insan-kaynaklari" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />İnsan Kaynakları</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald',sans-serif" }}>Projeler</h5>
            <ul className="space-y-3">
              <li><Link href="/projeler/gelecek" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Gelecek Projeler</Link></li>
              <li><Link href="/projeler/tamamlanan" className="text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Tamamlanan Projeler</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald',sans-serif" }}>İletişim</h5>
            <div className="space-y-4">
              <div className="flex gap-3 items-start"><MapPin size={15} className="text-[#6cbe59] shrink-0 mt-0.5" /><p className="text-white/45 text-sm leading-6">Barbaros Mah. Akzambak Sok.<br />Uphill Towers A Blok No: 3/A<br />Ataşehir / İstanbul</p></div>
              <div className="flex gap-3 items-center"><Mail size={15} className="text-[#6cbe59] shrink-0" /><a href="mailto:info@bogazicigroup.com.tr" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors">info@bogazicigroup.com.tr</a></div>
            </div>
            <div className="mt-6 space-y-3">
              <Link href="/iletisim/bize-ulasin" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Bize Ulaşın</Link>
              <Link href="/iletisim/satis-ofisleri" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Satış Ofisleri</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8">
          <div className="max-w-[1250px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30">
            <span>© 2026 Boğaziçi Grup A.Ş. — Tüm Hakları Saklıdır.</span>
            <div className="flex items-center gap-5">
              <a href="/kvkk-aydinlatma-metni" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}