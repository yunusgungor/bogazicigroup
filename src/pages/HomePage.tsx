import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import {
  Menu, X, ArrowRight, ChevronRight, ChevronDown,
  Facebook, Twitter, Instagram, Youtube, MapPin, Mail, Phone
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";



const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

const navItems = [
  { label: "Kurumsal", href: "#kurumsal", sub: ["Hakkımızda", "Onursal Başkan", "Tarihçe", "Vizyon & Misyon", "Kalite Politikamız", "Belgeler"] },
  { label: "Faaliyet Alanları", href: "#faaliyetler", sub: ["Gayrimenkul", "Taahhüt", "Turizm"] },
  { label: "Projeler", href: "#projeler", sub: ["Gelecek Projeler", "Tamamlanan Projeler"], subHrefs: ["/projeler/gelecek", "/projeler/tamamlanan"] },
  { label: "Makine Parkı", href: "#makine-parki", sub: [] },
  { label: "İletişim", href: "#iletisim", sub: ["Bize Ulaşın", "Satış Ofisleri"] },
];

const projects = [
  { name: "Levent 199", tag: "Gayrimenkul", img: "/images/bogazici/project-1.png" },
  { name: "Göcek Marina Resort", tag: "Turizm", img: "/images/bogazici/project-2.png" },
  { name: "Eczacıbaşı Ormanada", tag: "Taahhüt", img: "/images/bogazici/project-3.png" },
  { name: "Koç Kuleleri", tag: "Gayrimenkul", img: "/images/bogazici/project-4.png" },
];

const otherProjects = [
  "Kasaba Ömerli", "Kozapark", "Yenitepe Kadıköy",
  "Evidea Konutları", "BGZ İstanbul", "The İstanbul Veliefendi",
];

const milestones = [
  { year: "1938", title: "Kuruluş", desc: "Proje ve müteahhitlik hizmetleriyle temeller atıldı." },
  { year: "1952", title: "İlk Büyük Taahhüt", desc: "Devlet ihalelerinde ilk büyük başarı kazanıldı." },
  { year: "1972", title: "Altyapı Atılımı", desc: "Yol, köprü ve altyapı projelerinde güç gösterildi." },
  { year: "1984", title: "Kurumsallaşma", desc: "A.Ş. statüsüne geçiş ve kurumsal yapının pekişmesi." },
  { year: "1999", title: "Turizm Yatırımı", desc: "Turizm sektörüne stratejik adım atıldı." },
  { year: "2007", title: "Uluslararası Projeler", desc: "Yurt dışı taahhüt iş hacmi büyütüldü." },
  { year: "2013", title: "Levent 199", desc: "İstanbul'un prestijli Levent 199 projesi tamamlandı." },
  { year: "2021", title: "Yeni Vizyon", desc: "Sürdürülebilir ve yeşil bina standartlarına odaklanma." },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <div className="bg-white text-[#1a1a1a] antialiased" style={{ fontFamily: "'Montserrat', 'Geneva', Arial, sans-serif" }}>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : ""} bg-white`}>
        <div className="bg-[#f4f4f4] border-b border-gray-200 hidden md:block">
          <div className="max-w-[1250px] mx-auto px-4 flex items-center justify-between h-9 text-[11px] text-gray-700 font-semibold">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#ee7514] transition-colors">KVKK Aydınlatma Metni</a>
              <a href="#" className="hover:text-[#ee7514] transition-colors">İnsan Kaynakları</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 text-gray-500">
                <a href="#" aria-label="Facebook" className="hover:text-[#ee7514] transition-colors"><Facebook size={13} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-[#ee7514] transition-colors"><Twitter size={13} /></a>
                <a href="#" aria-label="Instagram" className="hover:text-[#ee7514] transition-colors"><Instagram size={13} /></a>
                <a href="#" aria-label="Youtube" className="hover:text-[#ee7514] transition-colors"><Youtube size={13} /></a>
              </div>
              <div className="border-l border-gray-300 pl-4 flex items-center gap-2 font-bold text-[11px]">
                <button className="text-[#ee7514]">TR</button>
                <span className="text-gray-400">|</span>
                <button className="hover:text-[#ee7514] transition-colors">EN</button>
              </div>
            </div>
          </div>
        </div>

        <nav className="">
          <div className="max-w-[1250px] mx-auto px-4 flex items-center justify-between h-[68px] md:h-[76px]">
            <Link href="/" className="shrink-0">
              <img 
                src="/images/bogazici/logo.png" 
                alt="Boğaziçi Grup" 
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.sub.length > 0 && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-[#1a1a1a] hover:text-[#ee7514] text-[13px] font-bold tracking-wide uppercase transition-colors"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {item.label}
                    {item.sub.length > 0 && <ChevronDown size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />}
                  </a>
                  {item.sub.length > 0 && (
                    <div className={`absolute top-full left-0 bg-white shadow-xl min-w-[220px] border-t-2 border-[#ee7514] transition-all duration-200 ${openDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                      <ul className="py-2">
                        {item.sub.map((s, si) => (
                          <li key={s}>
                            {item.subHrefs ? (
                              <Link href={item.subHrefs[si]} className="block px-5 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#ee7514] text-[12px] font-semibold tracking-wide uppercase transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                {s}
                              </Link>
                            ) : (
                              <a href="#" className="block px-5 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#ee7514] text-[12px] font-semibold tracking-wide uppercase transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                {s}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <button className="lg:hidden text-[#212a3c] p-2" onClick={() => setMobileOpen(true)} aria-label="Menüyü Aç">
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 w-[300px] max-w-full h-full bg-white flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <img 
                src="/images/bogazici/logo.png" 
                alt="Boğaziçi Grup" 
                className="h-12 w-auto"
              />
              <button onClick={() => setMobileOpen(false)} className="text-[#212a3c]"><X size={24} /></button>
            </div>
            <ul className="flex-1 py-4">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-gray-100">
                  {item.sub.length > 0 ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-5 py-3.5 text-[#1a1a1a] text-[13px] font-bold tracking-wide uppercase text-left"
                        style={{ fontFamily: "'Raleway', sans-serif" }}
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <ul className="bg-gray-50">
                          {item.sub.map((s, si) => (
                            <li key={s}>
                              {item.subHrefs ? (
                                <Link href={item.subHrefs[si]} className="block px-8 py-2.5 text-[#4a4a4a] hover:text-[#ee7514] text-[12px] font-bold tracking-wide uppercase transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }} onClick={() => setMobileOpen(false)}>
                                  {s}
                                </Link>
                              ) : (
                                <a href="#" className="block px-8 py-2.5 text-[#4a4a4a] hover:text-[#ee7514] text-[12px] font-bold tracking-wide uppercase transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                  {s}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a href={item.href} className="block px-5 py-3.5 text-[#1a1a1a] text-[13px] font-bold tracking-wide uppercase" style={{ fontFamily: "'Raleway', sans-serif" }} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="p-5 border-t border-gray-200 flex items-center gap-4">
              <button className="text-[#ee7514] text-sm font-bold">TR</button>
              <span className="text-gray-300">|</span>
              <button className="text-gray-500 hover:text-[#212a3c] text-sm font-bold">EN</button>
            </div>
          </div>
        </div>
      )}

      {/* CAROUSEL SLIDER */}
      <section className="relative w-full mt-[68px] md:mt-[112px] h-[calc(100vh-68px)] md:h-[calc(100vh-112px)] min-h-[640px] overflow-hidden">
        <Carousel
          opts={{ loop: true, align: "center" }}
          plugins={[
            Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
          ]}
          setApi={(api) => setCarouselApi(api)}
          className="w-full h-full"
        >
          <CarouselContent className="h-full ml-0">
            {[
              {
                img: "/images/bogazici/gayrimenkul.png",
                label: "FAALİYET ALANLARI",
                title: "GAYRİMENKUL",
                desc: "Modern yaşam alanları ve prestijli ticari projeler ile şehrin siluetini yeniden şekillendiriyoruz.",
                href: "#faaliyetler",
              },
              {
                img: "/images/bogazici/taahhut.png",
                label: "FAALİYET ALANLARI",
                title: "TAAHHÜT",
                desc: "Altyapı ve üstyapı projelerinde, mühendislik gücümüz ile devasa yapılar inşa ediyoruz.",
                href: "#faaliyetler",
              },
              {
                img: "/images/bogazici/turizm.png",
                label: "FAALİYET ALANLARI",
                title: "TURİZM",
                desc: "Lüks otel ve marina yatırımlarımızla Türkiye'nin turizm potansiyeline dünya standartlarında değer katıyoruz.",
                href: "#faaliyetler",
              },
            ].map((slide, i) => (
              <CarouselItem key={i} className="relative h-[calc(100vh-68px)] md:h-[calc(100vh-112px)] min-h-[640px] pl-0 basis-full overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#212a3c]/80 via-[#212a3c]/50 to-[#212a3c]/90 z-10" />
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 pt-[120px] md:pt-[130px]">
                  <span className="inline-block text-[#ee7514] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-5" style={{ fontFamily: "'Raleway', sans-serif" }}>
                    {slide.label}
                  </span>
                  <h1 className="text-white font-bold leading-[1.1] mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "0.01em" }}>
                    {slide.title}
                  </h1>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {slide.desc}
                  </p>
                  <a
                    href={slide.href}
                    className="inline-flex items-center gap-2.5 bg-[#ee7514] hover:bg-[#d66810] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    Keşfet <ArrowRight size={16} />
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4 md:left-8 w-11 h-11 bg-white/10 hover:bg-white/25 border-0 text-white backdrop-blur-sm" />
          <CarouselNext className="right-4 md:right-8 w-11 h-11 bg-white/10 hover:bg-white/25 border-0 text-white backdrop-blur-sm" />

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => carouselApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  (carouselApi?.selectedScrollSnap() ?? 0) === i
                    ? "bg-[#ee7514] w-7"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </Carousel>
      </section>

      {/* STATS STRIP */}
      <div className="bg-[#212a3c]">
        <div className="max-w-[1250px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "1938", label: "Kuruluş Yılı" },
              { value: "85+", label: "Yıl Tecrübe" },
              { value: "3", label: "Faaliyet Alanı" },
              { value: "100+", label: "Referans Proje" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-10 px-4 text-center">
                <span className="text-4xl md:text-5xl font-bold text-white mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>{s.value}</span>
                <span className="text-[#ee7514] text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase" style={{ fontFamily: "'Raleway', sans-serif" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HAKKIMIZDA */}
      <section id="kurumsal" className="py-20 md:py-32 bg-white">
        <div className="max-w-[1250px] mx-auto px-4">
          <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.p variants={fadeUp} className="text-[#ee7514] text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>Hakkımızda</motion.p>
              <motion.h2 variants={fadeUp} className="font-bold text-[#212a3c] leading-tight mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                YARINI İNŞA EDEN<br />KÖKLÜ BİR MİRAS
              </motion.h2>
              <motion.div variants={fadeUp} className="w-14 h-1 bg-[#ee7514] mb-8" />
              <motion.p variants={fadeUp} className="text-[#333] text-base leading-7 mb-5">
                <strong>BOĞAZİÇİ GRUP</strong> 1938 yılından bu yana inşaat taahhüt sektöründe faaliyet göstermekte olup gerek yurt içi gerekse yurt dışında birçok projede yer almıştır.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
                Kuruluşundan günümüze kadar üstlendiği Üstyapı İşleri, Altyapı İşleri, Endüstriyel Tesisler, Enerji Santralleri, Arıtma Tesisleri, Yol ve Köprü İşleri başta olmak üzere taahhüt grubunun hemen her faaliyet alanında hizmet vermektedir.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-10">
                Uzman ekibi ile üstlendiği projeleri bütçesi içerisinde, uluslararası kalite standartlarında ve iş sağlığı güvenliğine büyük önem vererek sektöründe tercih edilen saygın yüklenici konumuna gelmiştir.
              </motion.p>
              <motion.a variants={fadeUp} href="#" className="inline-flex items-center gap-2 text-[#212a3c] border-b-2 border-[#ee7514] pb-1 text-sm font-bold uppercase tracking-wider hover:text-[#ee7514] transition-colors" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Devamını Oku <ChevronRight size={15} />
              </motion.a>
            </div>
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#f4f4f4] hidden sm:block" />
              <img src="/images/bogazici/project-1.png" alt="Boğaziçi Grup Yapı" className="relative z-10 w-full aspect-[4/3] object-cover shadow-2xl" />
              <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 z-20 bg-[#ee7514] text-white px-6 py-5 shadow-xl">
                <div className="text-4xl font-bold leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>85+</div>
                <div className="text-xs font-bold uppercase tracking-widest mt-1" style={{ fontFamily: "'Raleway', sans-serif" }}>Yıllık Deneyim</div>
              </div>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* FAHALİYET ALANLARI */}
      <section id="faaliyetler" className="py-20 md:py-32 bg-[#f8f8f8]">
        <div className="max-w-[1250px] mx-auto px-4">
          <Section>
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
              <p className="text-[#ee7514] text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>Faaliyet Alanları</p>
              <h2 className="font-bold text-[#212a3c] mb-5" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>ÜÇ ANA SEKTÖRDE GÜÇLÜ VARLIK</h2>
              <div className="w-14 h-1 bg-[#ee7514] mx-auto" />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {[
                { title: "Gayrimenkul", desc: "Modern yaşam alanları ve prestijli ticari projeler ile şehrin siluetini yeniden şekillendiriyoruz.", img: "/images/bogazici/gayrimenkul.png" },
                { title: "Taahhüt", desc: "Altyapı ve üstyapı projelerinde, mühendislik gücümüz ile devasa yapılar inşa ediyoruz.", img: "/images/bogazici/taahhut.png" },
                { title: "Turizm", desc: "Lüks otel ve marina yatırımlarımızla Türkiye'nin turizm potansiyeline dünya standartlarında değer katıyoruz.", img: "/images/bogazici/turizm.png" },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="group relative overflow-hidden block bg-[#212a3c] shadow-lg" style={{ minHeight: 400 }}>
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#212a3c] via-[#212a3c]/60 to-transparent" />
                  <div className="relative h-full flex flex-col justify-end p-7 md:p-9" style={{ minHeight: 400 }}>
                    <div className="w-8 h-0.5 bg-[#ee7514] mb-4 transition-all duration-300 group-hover:w-16" />
                    <h3 className="text-3xl font-bold text-white uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>{item.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500">{item.desc}</p>
                    <div className="flex items-center gap-2 text-[#ee7514] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      Keşfet <ChevronRight size={14} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* PROJELER */}
      <section id="projeler" className="py-20 md:py-32 bg-white">
        <div className="max-w-[1250px] mx-auto px-4">
          <Section>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <div>
                <p className="text-[#ee7514] text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>Seçkin Projeler</p>
                <h2 className="font-bold text-[#212a3c]" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>ÖNE ÇIKAN PROJELER</h2>
                <div className="w-14 h-1 bg-[#ee7514] mt-4" />
              </div>
              <Link href="/projeler/tamamlanan" className="inline-flex items-center gap-2 text-[#212a3c] border-b-2 border-[#ee7514] pb-1 text-sm font-bold uppercase tracking-wider hover:text-[#ee7514] transition-colors shrink-0" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Tüm Projeleri Gör <ArrowRight size={15} />
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {projects.map((p) => (
                <motion.div key={p.name} variants={fadeUp} className="group relative overflow-hidden shadow-md" style={{ minHeight: 320 }}>
                  <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ee7514] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>{p.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-7 h-0.5 bg-[#ee7514] mb-3 transition-all duration-300 group-hover:w-14" />
                    <h3 className="text-white font-bold uppercase text-lg leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>{p.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              {otherProjects.map((p) => (
                <span key={p} className="border border-gray-200 px-4 py-2 text-xs font-semibold text-[#555] uppercase tracking-wide hover:border-[#ee7514] hover:text-[#ee7514] transition-colors cursor-pointer" style={{ fontFamily: "'Raleway', sans-serif" }}>{p}</span>
              ))}
              <Link href="/projeler/tamamlanan" className="border border-[#ee7514] bg-[#ee7514]/5 px-4 py-2 text-xs font-semibold text-[#ee7514] uppercase tracking-wide hover:bg-[#ee7514] hover:text-white transition-all cursor-pointer" style={{ fontFamily: "'Raleway', sans-serif" }}>
                +25 Daha →
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* KİLOMETRE TAŞLARI */}
      <section id="tarihce" className="py-20 md:py-32 bg-[#212a3c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255,255,255,0.05) 60px, rgba(255,255,255,0.05) 120px)" }} />
        <div className="max-w-[1250px] mx-auto px-4 relative z-10">
          <Section>
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#ee7514] text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>Kilometre Taşları</p>
              <h2 className="font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>86 YILLIK KÖKLÜ TARİH</h2>
              <div className="w-14 h-1 bg-[#ee7514] mx-auto mt-5" />
            </motion.div>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
              <div className="space-y-8 md:space-y-0">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    variants={fadeUp}
                    className={`relative md:flex md:items-center md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"} mb-4 md:mb-0`}>
                      <div className="inline-block bg-[#ee7514] text-white px-4 py-1.5 text-sm font-bold mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{m.year}</div>
                      <h3 className="text-white font-bold text-lg mb-1 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>{m.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#ee7514] border-4 border-[#212a3c] z-10" />
                    <div className="md:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ONURSAL BAŞKAN */}
      <section className="py-20 md:py-32 bg-[#f8f8f8]">
        <div className="max-w-[1250px] mx-auto px-4">
          <Section>
            <div className="max-w-3xl mx-auto text-center">
              <motion.p variants={fadeUp} className="text-[#ee7514] text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>Onursal Başkan</motion.p>
              <motion.div variants={fadeUp} className="w-24 h-24 bg-[#212a3c] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>YB</motion.div>
              <motion.h2 variants={fadeUp} className="font-bold text-[#212a3c] mb-2" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}>YUSUF YILMAZ BEYAZ</motion.h2>
              <motion.p variants={fadeUp} className="text-[#ee7514] text-xs font-bold tracking-widest uppercase mb-8" style={{ fontFamily: "'Raleway', sans-serif" }}>Onursal Başkan</motion.p>
              <motion.div variants={fadeUp} className="w-12 h-1 bg-[#ee7514] mx-auto mb-8" />
              <motion.p variants={fadeUp} className="text-[#555] text-base leading-8 italic">
                "Boğaziçi Grup olarak 1938'den bu yana her projemizde en yüksek kalite standartlarını ve müşteri memnuniyetini esas almaktayız. Ülkemizin kalkınmasına katkıda bulunmak, bizim en büyük gururumuzdur."
              </motion.p>
            </div>
          </Section>
        </div>
      </section>

      {/* MAKİNE PARKI */}
      <section id="makine-parki" className="py-20 md:py-32 bg-white">
        <div className="max-w-[1250px] mx-auto px-4">
          <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeUp} className="relative order-2 lg:order-1">
              <div className="absolute inset-0 -translate-x-4 -translate-y-4 bg-[#f4f4f4] hidden sm:block" />
              <img src="/images/bogazici/makine.png" alt="Makine Parkı" className="relative z-10 w-full aspect-[4/3] object-cover shadow-2xl" />
              <div className="absolute -bottom-5 -right-5 sm:-bottom-6 sm:-right-6 z-20 bg-[#212a3c] text-white px-6 py-5 shadow-xl">
                <div className="text-3xl font-bold leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>200+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1 text-white/60" style={{ fontFamily: "'Raleway', sans-serif" }}>İş Makinesi</div>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.p variants={fadeUp} className="text-[#ee7514] text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>Makine Parkı</motion.p>
              <motion.h2 variants={fadeUp} className="font-bold text-[#212a3c] leading-tight mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                GÜÇLÜ MAKİNE PARKI<br />BÜYÜK PROJELER
              </motion.h2>
              <motion.div variants={fadeUp} className="w-14 h-1 bg-[#ee7514] mb-8" />
              <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-8">
                Modern ve güçlü makine parkımız ile en zorlu inşaat projelerini bile başarıyla tamamlıyoruz. Sürekli güncellenen ekipman filosumuz ile sektörün en yüksek standartlarını karşılıyoruz.
              </motion.p>
              {[["Hafriyat & Kazı Ekipmanları", "50+"], ["Beton & Çelik İşleme", "80+"], ["Ağır Taşıma & Vinçler", "40+"], ["Özel Mühendislik Ekipmanları", "30+"]].map(([label, count]) => (
                <motion.div key={label} variants={fadeUp} className="flex items-center justify-between border-b border-gray-100 py-3">
                  <span className="text-[#333] text-sm font-medium">{label}</span>
                  <span className="text-[#ee7514] font-bold text-sm" style={{ fontFamily: "'Oswald', sans-serif" }}>{count}</span>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section id="iletisim" className="py-20 md:py-28 bg-[#212a3c]">
        <div className="max-w-[1250px] mx-auto px-4">
          <Section>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-[#ee7514] text-xs font-bold tracking-[0.25em] uppercase mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>İletişim</p>
              <h2 className="font-bold text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>BİZE ULAŞIN</h2>
              <div className="w-14 h-1 bg-[#ee7514] mx-auto" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { icon: <MapPin size={22} />, title: "Adres", lines: ["Barbaros Mah. Akzambak Sok.", "Uphill Towers A Blok No: 3/A", "Ataşehir / İstanbul"] },
                { icon: <Phone size={22} />, title: "Telefon", lines: ["+90 (216) 688 08 00"] },
                { icon: <Mail size={22} />, title: "E-posta", lines: ["info@bogazicigroup.com.tr"] },
              ].map((c) => (
                <motion.div key={c.title} variants={fadeUp} className="text-center">
                  <div className="w-14 h-14 bg-[#ee7514] flex items-center justify-center text-white mx-auto mb-5">{c.icon}</div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>{c.title}</h4>
                  {c.lines.map((l, i) => <p key={i} className="text-white/50 text-sm leading-6">{l}</p>)}
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1b1b1b] text-white">
        <div className="max-w-[1250px] mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">

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
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>Projeler</h5>
            <ul className="space-y-3">
              <li><Link href="/projeler/gelecek" className="text-white/45 hover:text-[#ee7514] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#ee7514] rounded-full shrink-0" />Gelecek Projeler</Link></li>
              <li><Link href="/projeler/tamamlanan" className="text-white/45 hover:text-[#ee7514] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#ee7514] rounded-full shrink-0" />Tamamlanan Projeler</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>Kurumsal</h5>
            <ul className="space-y-3">
              {["Hakkımızda", "Tarihçe", "Vizyon & Misyon", "Belgeler"].map((l) => (
                <li key={l}><a href="#kurumsal" className="text-white/45 hover:text-[#ee7514] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#ee7514] rounded-full shrink-0" />{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>İletişim</h5>
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
