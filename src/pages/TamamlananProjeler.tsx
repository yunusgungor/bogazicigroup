import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Menu, X, ChevronDown, ChevronRight,
  Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Search, SlidersHorizontal
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

const navItems = [
  { label: "Kurumsal", href: "#", sub: ["Hakkımızda", "Onursal Başkan", "Tarihçe", "Vizyon & Misyon", "Kalite Politikamız", "Belgeler"] },
  { label: "Faaliyet Alanları", href: "#", sub: ["Gayrimenkul", "Taahhüt", "Turizm"] },
  { label: "Projeler", href: "#", sub: ["Gelecek Projeler", "Tamamlanan Projeler"], subHrefs: ["/projeler/gelecek", "/projeler/tamamlanan"], active: true },
  { label: "Makine Parkı", href: "#", sub: [] },
  { label: "İletişim", href: "#", sub: ["Bize Ulaşın", "Satış Ofisleri"] },
];

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
  { name: "One Madison", tag: "Uluslararası", location: "New York, ABD", img: "/images/bogazici/project-2.png" },
  { name: "Van Names", tag: "Uluslararası", location: "Rusya", img: "/images/bogazici/project-3.png" },
  { name: "Gölcük Deprem Konutları", tag: "Taahhüt", location: "Kocaeli, TR", img: "/images/bogazici/project-4.png" },
  { name: "Sakarya Deprem Konutları", tag: "Taahhüt", location: "Sakarya, TR", img: "/images/bogazici/taahhut.png" },
  { name: "The Spiral", tag: "Uluslararası", location: "New York, ABD", img: "/images/bogazici/project-1.png" },
  { name: "Al Hitmi Doha", tag: "Uluslararası", location: "Doha, Katar", img: "/images/bogazici/project-2.png" },
  { name: "Tempo Scan Tower", tag: "Uluslararası", location: "Endonezya", img: "/images/bogazici/project-3.png" },
  { name: "Vivelva Orebro", tag: "Uluslararası", location: "İsveç", img: "/images/bogazici/project-4.png" },
  { name: "Kartal Lütfi Kırdar Hastanesi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Garanti Bankası Teknoloji Kampüsü", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
];

const categories: Category[] = ["Tümü", "Gayrimenkul", "Taahhüt", "Turizm", "Uluslararası"];

const tagColors: Record<string, string> = {
  Gayrimenkul: "#ee7514",
  Taahhüt: "#212a3c",
  Turizm: "#0ea5e9",
  Uluslararası: "#6366f1",
};

export default function TamamlananProjeler() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("Tümü");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const filtered = allProjects.filter((p) => {
    const catMatch = activeCategory === "Tümü" || p.tag === activeCategory;
    const searchMatch = p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <div className="bg-white text-[#1a1a1a] antialiased" style={{ fontFamily: "'Montserrat','Geneva',Arial,sans-serif" }}>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}>
        <div className="bg-[#f4f4f4] border-b border-gray-200 hidden md:block">
          <div className="max-w-[1250px] mx-auto px-4 flex items-center justify-between h-9 text-[11px] text-gray-500">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#ee7514] transition-colors">KVKK Aydınlatma Metni</a>
              <a href="#" className="hover:text-[#ee7514] transition-colors">İnsan Kaynakları</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 text-gray-400">
                <a href="#" className="hover:text-[#ee7514]"><Facebook size={13} /></a>
                <a href="#" className="hover:text-[#ee7514]"><Twitter size={13} /></a>
                <a href="#" className="hover:text-[#ee7514]"><Instagram size={13} /></a>
                <a href="#" className="hover:text-[#ee7514]"><Youtube size={13} /></a>
              </div>
              <div className="border-l border-gray-300 pl-4 flex items-center gap-2 font-bold text-[11px]">
                <button className="text-[#ee7514]">TR</button>
                <span className="text-gray-300">|</span>
                <button className="hover:text-[#ee7514]">EN</button>
              </div>
            </div>
          </div>
        </div>
        <nav className="bg-[#212a3c]">
          <div className="max-w-[1250px] mx-auto px-4 flex items-center justify-between h-[68px] md:h-[76px]">
            <Link href="/" className="shrink-0">
              <img src="/images/bogazici/logo.png" alt="Boğaziçi Grup" className="h-10 md:h-12 w-auto" />
            </Link>
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.label} className="relative group"
                  onMouseEnter={() => item.sub.length > 0 && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a href={item.href} className={`flex items-center gap-1 px-4 py-2 text-[13px] font-semibold tracking-wide uppercase transition-colors ${item.active ? "text-[#ee7514]" : "text-white/85 hover:text-white"}`} style={{ fontFamily: "'Raleway',sans-serif" }}>
                    {item.label}
                    {item.sub.length > 0 && <ChevronDown size={12} className="opacity-60 group-hover:opacity-100" />}
                  </a>
                  {item.sub.length > 0 && (
                    <div className={`absolute top-full left-0 bg-white shadow-xl min-w-[220px] border-t-2 border-[#ee7514] transition-all duration-200 ${openDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                      <ul className="py-2">
                        {item.sub.map((s, si) => (
                          <li key={s}>
                            {item.subHrefs ? (
                              <Link href={item.subHrefs[si]} className={`block px-5 py-2.5 text-[12px] font-semibold tracking-wide uppercase transition-colors ${s === "Tamamlanan Projeler" ? "text-[#ee7514] bg-orange-50" : "text-[#333] hover:bg-[#f8f8f8] hover:text-[#ee7514]"}`} style={{ fontFamily: "'Raleway',sans-serif" }}>{s}</Link>
                            ) : (
                              <a href="#" className="block px-5 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#ee7514] text-[12px] font-semibold tracking-wide uppercase transition-colors" style={{ fontFamily: "'Raleway',sans-serif" }}>{s}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(true)}><Menu size={26} /></button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 w-[300px] max-w-full h-full bg-[#212a3c] flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <img src="/images/bogazici/logo.png" alt="Boğaziçi Grup" className="h-10 w-auto" />
              <button onClick={() => setMobileOpen(false)} className="text-white"><X size={24} /></button>
            </div>
            <ul className="flex-1 py-4">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-white/5">
                  {item.sub.length > 0 ? (
                    <>
                      <button className={`w-full flex items-center justify-between px-5 py-3.5 text-[13px] font-semibold tracking-wide uppercase text-left ${item.active ? "text-[#ee7514]" : "text-white/85"}`} style={{ fontFamily: "'Raleway',sans-serif" }} onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}>
                        {item.label} <ChevronDown size={14} className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <ul className="bg-black/20">
                          {item.sub.map((s, si) => (
                            <li key={s}>
                              {item.subHrefs ? (
                                <Link href={item.subHrefs[si]} className={`block px-8 py-2.5 text-[12px] font-semibold tracking-wide uppercase transition-colors ${s === "Tamamlanan Projeler" ? "text-[#ee7514]" : "text-white/60 hover:text-[#ee7514]"}`} style={{ fontFamily: "'Raleway',sans-serif" }} onClick={() => setMobileOpen(false)}>{s}</Link>
                              ) : (
                                <a href="#" className="block px-8 py-2.5 text-white/60 hover:text-[#ee7514] text-[12px] font-semibold tracking-wide uppercase transition-colors" style={{ fontFamily: "'Raleway',sans-serif" }}>{s}</a>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a href={item.href} className="block px-5 py-3.5 text-white/85 text-[13px] font-semibold tracking-wide uppercase" style={{ fontFamily: "'Raleway',sans-serif" }} onClick={() => setMobileOpen(false)}>{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
            <div className="p-5 border-t border-white/10 flex items-center gap-4">
              <button className="text-[#ee7514] text-sm font-bold">TR</button>
              <span className="text-white/30">|</span>
              <button className="text-white/60 text-sm font-bold">EN</button>
            </div>
          </div>
        </div>
      )}

      {/* Page Banner */}
      <div className="relative pt-[68px] md:pt-[112px]">
        <div className="relative h-[260px] md:h-[340px] flex items-end overflow-hidden" style={{ background: "linear-gradient(135deg, #212a3c 0%, #2e3d55 100%)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)" }} />
          <div className="absolute top-0 left-0 w-full h-1 bg-[#ee7514]" />
          <div className="max-w-[1250px] mx-auto px-4 pb-10 md:pb-14 w-full">
            <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-widest mb-5" style={{ fontFamily: "'Raleway',sans-serif" }}>
              <Link href="/" className="hover:text-[#ee7514] transition-colors">Ana Sayfa</Link>
              <ChevronRight size={12} />
              <span>Projeler</span>
              <ChevronRight size={12} />
              <span className="text-[#ee7514]">Tamamlanan Projeler</span>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white" style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              TAMAMLANAN PROJELER
            </motion.h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 56 }} transition={{ duration: 0.6, delay: 0.4 }} className="h-1 bg-[#ee7514] mt-4" />
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
                  <span className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider" style={{ background: tagColors[project.tag] || "#ee7514", fontFamily: "'Raleway',sans-serif" }}>{project.tag}</span>
                </div>
                <div className="p-4">
                  <div className="w-6 h-0.5 bg-[#ee7514] mb-3 transition-all duration-300 group-hover:w-12" />
                  <h3 className="text-base font-bold text-[#212a3c] uppercase leading-tight group-hover:text-[#ee7514] transition-colors" style={{ fontFamily: "'Oswald',sans-serif" }}>{project.name}</h3>
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
                <div className="text-[#ee7514] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Raleway',sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1b1b1b] text-white mt-8">
        <div className="max-w-[1250px] mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/images/bogazici/logo.png" alt="Boğaziçi Grup" className="h-11 w-auto mb-6 opacity-90" />
            <p className="text-white/45 text-sm leading-7 mb-6">1938'den bu yana inşaat sektörünün güvenilir ismi.</p>
            <div className="flex items-center gap-3">
              {(["Facebook", "Twitter", "Instagram", "Youtube"] as const).map((l) => (
                <a key={l} href="#" aria-label={l} className="w-9 h-9 flex items-center justify-center border border-white/15 hover:border-[#ee7514] hover:text-[#ee7514] text-white/40 transition-all">
                  {l === "Facebook" && <Facebook size={14} />}
                  {l === "Twitter" && <Twitter size={14} />}
                  {l === "Instagram" && <Instagram size={14} />}
                  {l === "Youtube" && <Youtube size={14} />}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald',sans-serif" }}>Projeler</h5>
            <ul className="space-y-3">
              <li><Link href="/projeler/gelecek" className="text-white/45 hover:text-[#ee7514] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#ee7514] rounded-full shrink-0" />Gelecek Projeler</Link></li>
              <li><Link href="/projeler/tamamlanan" className="text-[#ee7514] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#ee7514] rounded-full shrink-0" />Tamamlanan Projeler</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald',sans-serif" }}>Kurumsal</h5>
            <ul className="space-y-3">
              {["Hakkımızda", "Tarihçe", "Vizyon & Misyon", "Belgeler"].map((l) => (
                <li key={l}><Link href="/" className="text-white/45 hover:text-[#ee7514] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#ee7514] rounded-full shrink-0" />{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald',sans-serif" }}>İletişim</h5>
            <div className="space-y-4">
              <div className="flex gap-3 items-start"><MapPin size={15} className="text-[#ee7514] shrink-0 mt-0.5" /><p className="text-white/45 text-sm leading-6">Barbaros Mah. Akzambak Sok.<br />Uphill Towers A Blok No: 3/A<br />Ataşehir / İstanbul</p></div>
              <div className="flex gap-3 items-center"><Mail size={15} className="text-[#ee7514] shrink-0" /><a href="mailto:info@bogazicigroup.com.tr" className="text-white/45 hover:text-[#ee7514] text-sm transition-colors">info@bogazicigroup.com.tr</a></div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8">
          <div className="max-w-[1250px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30">
            <span>© 2026 Boğaziçi Grup A.Ş. — Tüm Hakları Saklıdır.</span>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
