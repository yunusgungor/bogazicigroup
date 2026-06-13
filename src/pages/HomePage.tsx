import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight, ChevronRight,
  MapPin, Mail, Phone,
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fadeUp, stagger } from "@/lib/motion";
import { newsData } from "@/data/news";

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

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
  { year: "1994", title: "BOĞAZİÇİ GRUP Kuruldu" },
  { year: "1999", title: "Gölcük Deprem Konutları İnşaatı" },
  { year: "2000", title: "Ras Laffan Katar Limanı İnşaatı" },
  { year: "2007", title: "Suudi Arabistan Manifata Geçiti İnşaatı" },
  { year: "2008", title: "Katar Konteyner Limanı" },
  { year: "2009", title: "Çağlayan Adliye Sarayı İnşaatı" },
  { year: "2010", title: "Eczacıbaşı Ormanada Projesi" },
  { year: "2012", title: "Garanti Bankası Teknoloji Kampüsü İnşaatı" },
  { year: "2013", title: "İşgyo Tuzla Ticaret Merkezi İnşaatı" },
  { year: "2015", title: "Kartal Lütfi Kırdar Eğitim ve Araştırma Hastanesi İnşaatı" },
  { year: "2019", title: "Teknopark İstanbul 3.Etap İnşaatı" },
  { year: "2021", title: "Spor Toto Gençlik Merkezi, Futbol Sahası ve Basketbol Sahaları İnşaatı" },
];

const slideVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const CAROUSEL_CONFIG = {
  autoplayDelayMs: 5000,
  transitionDurationMs: 800,
};

export default function HomePage() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [newsCarouselApi, setNewsCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [newsActiveIndex, setNewsActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const TOTAL_SLIDES = 3;

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setActiveIndex(carouselApi.selectedScrollSnap());
    const onScroll = () => setScrollProgress(carouselApi.scrollProgress());
    carouselApi.on("select", onSelect);
    carouselApi.on("scroll", onScroll);
    setActiveIndex(carouselApi.selectedScrollSnap());
    setScrollProgress(carouselApi.scrollProgress());
    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("scroll", onScroll);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!newsCarouselApi) return;
    const onSelect = () => setNewsActiveIndex(newsCarouselApi.selectedScrollSnap());
    newsCarouselApi.on("select", onSelect);
    setNewsActiveIndex(newsCarouselApi.selectedScrollSnap());
    return () => {
      newsCarouselApi.off("select", onSelect);
    };
  }, [newsCarouselApi]);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Boğaziçi Grup A.Ş.",
    "url": "https://bogazicigroup.vercel.app",
    "logo": "https://bogazicigroup.vercel.app/images/bogazici/logo.png",
    "foundingDate": "1994",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-216-688-08-00",
      "contactType": "customer service",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://www.linkedin.com/company/bogazici-grup"
    ]
  };

  return (
    <div className="bg-white text-foreground antialiased">
      <Helmet>
        <title>Boğaziçi Grup A.Ş. | İnşaat Taahhüt ve Mühendislik</title>
        <meta name="description" content="1994'ten beri Boğaziçi Grup A.Ş., Türkiye'nin öncü inşaat taahhüt, anahtar teslim projeler ve mühendislik hizmetleri firmasıdır. Projelerimizi keşfedin." />
        <meta property="og:title" content="Boğaziçi Grup A.Ş. | İnşaat Taahhüt ve Mühendislik" />
        <meta property="og:description" content="1994'ten beri Türkiye'nin öncü inşaat taahhüt, anahtar teslim projeler ve mühendislik firması." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/opengraph.jpg" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <Header />

      {/* CAROUSEL SLIDER - Fullscreen */}
      <section className="relative w-full h-dvh overflow-hidden">
        <Carousel
          opts={{ loop: true, align: "center" }}
          plugins={[
            Autoplay({ delay: CAROUSEL_CONFIG.autoplayDelayMs, stopOnInteraction: false, stopOnMouseEnter: false, playOnInit: true }),
          ]}
          setApi={(api) => setCarouselApi(api)}
          className="w-full h-full"
        >
          <CarouselContent className="h-full ml-0" style={{ transitionDuration: `${CAROUSEL_CONFIG.transitionDurationMs}ms` }}>
            {[
              {
                img: "/images/bogazici/taahhut.png",
                label: "BOĞAZİÇİ GRUP",
                title: "30+ YILLIK TECRÜBE",
                desc: "İnşaat taahhüt sektöründe 30 yılı aşkın deneyimimizle yurt içi ve yurt dışında yüzlerce projeye imza atıyoruz.",
                href: "/kurumsal/hakkimizda",
              },
              {
                img: "/images/bogazici/gayrimenkul.png",
                label: "HİZMETLERİMİZ",
                title: "ANAHTAR TESLİM PROJELER",
                desc: "Projelerinizi ilk konsept aşamasından anahtar teslimine kadar eksiksiz yönetiyor, tek noktadan sorumluluk sağlıyoruz.",
                href: "/hizmetler/anahtar-teslim-projeler",
              },
              {
                img: "/images/bogazici/turizm.png",
                label: "HİZMETLERİMİZ",
                title: "MÜHENDİSLİK HİZMETLERİ",
                desc: "Proje yönetimi, yapısal mühendislik, keşif ve fizibilite çalışmaları ile projelerinize profesyonel destek sağlıyoruz.",
                href: "/hizmetler/muhendislik-hizmetleri",
              },
            ].map((slide, i) => {
              const slideScroll = scrollProgress * (TOTAL_SLIDES - 1);
              const relativePos = slideScroll - i;
              const parallaxX = relativePos * 70;
              return (
              <CarouselItem key={i} className="relative h-dvh pl-0 basis-full overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#212a3c]/80 via-[#212a3c]/50 to-[#212a3c]/90 z-10" />
                  <div
                    className="absolute inset-0 transition-transform duration-100 ease-out"
                    style={{
                      width: "calc(100% + 160px)",
                      left: "-80px",
                      transform: `translateX(${parallaxX}px)`,
                    }}
                  >
                    <motion.img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      animate={activeIndex === i ? { scale: 1.08 } : { scale: 1 }}
                      transition={{ duration: 6, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-[80px] md:pt-[88px]">
                  <motion.span
                    custom={0}
                    initial="hidden"
                    animate={activeIndex === i ? "visible" : "hidden"}
                    variants={slideVariants}
                    className="inline-block text-accent text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-5 font-heading"
                  >
                    {slide.label}
                  </motion.span>
                  <motion.h1
                    custom={0.15}
                    initial="hidden"
                    animate={activeIndex === i ? "visible" : "hidden"}
                    variants={slideVariants}
                    className="text-white font-bold leading-[1.1] mb-6 font-display"
                    style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "0.01em" }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    custom={0.3}
                    initial="hidden"
                    animate={activeIndex === i ? "visible" : "hidden"}
                    variants={slideVariants}
                    className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-sans font-medium"
                  >
                    {slide.desc}
                  </motion.p>
                  <motion.div
                    custom={0.45}
                    initial="hidden"
                    animate={activeIndex === i ? "visible" : "hidden"}
                    variants={slideVariants}
                  >
                    <Link
                      href={slide.href}
                      className="inline-flex items-center gap-2.5 bg-accent hover:bg-[#52a344] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] font-display"
                    >
                      Keşfet <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                </div>
              </CarouselItem>
            );})}
          </CarouselContent>

          <CarouselPrevious className="left-4 md:left-8 w-11 h-11 bg-white/10 hover:bg-white/25 border-0 text-white backdrop-blur-sm active:scale-90 transition-transform" />
          <CarouselNext className="right-4 md:right-8 w-11 h-11 bg-white/10 hover:bg-white/25 border-0 text-white backdrop-blur-sm active:scale-90 transition-transform" />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => carouselApi?.scrollTo(i)}
                  className={`relative w-10 h-2.5 rounded-full transition-all duration-300 overflow-hidden ${
                    (carouselApi?.selectedScrollSnap() ?? 0) === i
                      ? "bg-white/25"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                >
                  {(carouselApi?.selectedScrollSnap() ?? 0) === i && (
                    <motion.div
                      key={`progress-${i}`}
                      className="absolute inset-y-0 left-0 bg-accent rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: CAROUSEL_CONFIG.autoplayDelayMs / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
            <span className="text-white/40 text-[11px] font-mono tracking-widest">
              {String((carouselApi?.selectedScrollSnap() ?? 0) + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
            </span>
          </div>
        </Carousel>
      </section>

      {/* STATS STRIP */}
      <div className="bg-navy">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "1994", label: "Kuruluş Yılı" },
              { value: "32+", label: "Yıl Tecrübe" },
              { value: "2", label: "Hizmet Alanı" },
              { value: "100+", label: "Referans Proje" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-10 px-6 text-center">
                <span className="text-4xl md:text-5xl font-bold text-white mb-1 font-display">{s.value}</span>
                <span className="text-accent text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase font-heading">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HAKKIMIZDA */}
      <section id="kurumsal" className="py-20 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.p variants={fadeUp} className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-4 font-heading">Hakkımızda</motion.p>
              <motion.h2 variants={fadeUp} className="font-bold text-navy leading-tight mb-6 font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                BOĞAZİÇİ İNŞAAT
              </motion.h2>
              <motion.div variants={fadeUp} className="w-14 h-1 bg-accent mb-8" />
              <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5 max-w-[65ch]">
                Ülkemizde İnşaat Taahhüt Sektöründe faaliyet gösteren firmamızın temelleri 1994 yılında proje ve müteahhitlik hizmetleri ile atılmıştır.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5 max-w-[65ch]">
                <strong>BOĞAZİÇİ GRUP</strong> 1994 yılından bu yana inşaat taahhüt sektöründe faaliyet göstermekle birlikte gerek yurt içi gerekse yurt dışında birçok proje de yer almıştır.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5 max-w-[65ch]">
                Kuruluşundan günümüze kadar üstlenmiş olduğu Üstyapı İşleri, Altyapı İşleri, Endüstriyel Tesisler, Enerji Santralleri, Arıtma Tesisleri, Yol ve Köprü İşleri, Bağlantı yolları inşaatı gibi Taahhüt grubunun hemen her faaliyet alanında hizmet vermektedir.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-10 max-w-[65ch]">
                <strong>BOĞAZİÇİ GRUP</strong>, uzman ekibi ve kadrosu ile üstlendiği projeleri bütçesi içerisinde, uluslararası kalite de ve iş sağlığı ve güvenliğine büyük önem vererek sektöründe tercih edilen saygın yüklenici firmalardan biri konumuna gelmiştir.
              </motion.p>
              <Link href="/kurumsal/hakkimizda" className="inline-flex items-center gap-2 text-navy border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-wider hover:text-accent active:scale-[0.97] transition-all font-display">
                Devamını Oku <ChevronRight size={15} />
              </Link>
            </div>
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#f4f4f4] hidden sm:block" />
              <img src="/images/bogazici/project-1.png" alt="Boğaziçi Grup Yapı" className="relative z-10 w-full aspect-[4/3] object-cover shadow-2xl" loading="lazy" />
              <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 z-20 bg-accent text-white px-6 py-5 shadow-xl">
                <div className="text-4xl font-bold leading-none font-display">32+</div>
                <div className="text-xs font-bold uppercase tracking-widest mt-1 font-heading">Yıllık Deneyim</div>
              </div>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* PROJELER */}
      <section id="projeler" className="py-20 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <Section>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <div>
                <p className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-4 font-heading">Seçkin Projeler</p>
                <h2 className="font-bold text-navy font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>ÖNE ÇIKAN PROJELER</h2>
                <div className="w-14 h-1 bg-accent mt-4" />
              </div>
              <Link href="/projeler/tamamlanan" className="inline-flex items-center gap-2 text-navy border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-wider hover:text-accent active:scale-[0.97] transition-all shrink-0 font-display">
                Tüm Projeleri Gör <ArrowRight size={15} />
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {projects.map((p) => (
                <motion.div key={p.name} variants={fadeUp} className="group relative overflow-hidden shadow-md min-h-[320px]">
                  <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider font-heading">{p.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="w-7 h-0.5 bg-accent mb-3 transition-all duration-300 group-hover:w-14" />
                    <h3 className="text-white font-bold uppercase text-lg leading-tight font-display">{p.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              {otherProjects.map((p) => (
                <Link key={p} href="/projeler/tamamlanan" className="border border-gray-200 px-4 py-2 text-xs font-semibold text-[#555] uppercase tracking-wide hover:border-accent hover:text-accent transition-colors cursor-pointer font-heading">
                  {p}
                </Link>
              ))}
              <Link href="/projeler/tamamlanan" className="border border-accent bg-accent/5 px-4 py-2 text-xs font-semibold text-accent uppercase tracking-wide hover:bg-accent hover:text-white transition-all cursor-pointer font-heading">
                +25 Daha →
              </Link>
            </motion.div>
          </Section>
        </div>
      </section>

      {/* SÜRDÜRÜLEBİLİRLİK */}
      <section id="surdurulebilirlik" className="py-20 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6">
          <Section>
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
              <p className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-4 font-heading">Sürdürülebilirlik</p>
              <h2 className="font-bold text-navy mb-5 font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>SÜRDÜRÜLEBİLİRLİK</h2>
              <div className="w-14 h-1 bg-accent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14">
              <motion.div variants={fadeUp}>
                <p className="text-[#555] text-[15px] leading-7 mb-5">
                  Çalışanlarımızın ve iş ortaklarımızın sağlık ve güvenliğini en öncelikli konumuz olarak görüyor, tüm projelerimizde 
                  "sıfır kaza" hedefiyle hareket ediyoruz. ISO 9001 ve ISO 14001 standartlarına uygun olarak yürüttüğümüz 
                  faaliyetlerimizde çevresel sürdürülebilirliği iş süreçlerimizin ayrılmaz bir parçası olarak benimsiyoruz.
                </p>
                <p className="text-[#555] text-[15px] leading-7 mb-8">
                  Düzenli danışma, eğitimler ve iç & dış denetimler yoluyla çalışanlarımızın katılımını aktif olarak teşvik ediyor, 
                  topluma değer katmayı kurumsal sorumluluğumuzun temel bir parçası olarak görüyoruz.
                </p>
                <Link
                  href="/surdurulebilirlik"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-accent text-white px-8 py-3.5 text-[12px] font-bold uppercase tracking-wider transition-all active:scale-[0.97] font-heading"
                >
                  Detaylı Bilgi <ArrowRight size={14} />
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
                {[
                  { value: "0", label: "Kaza Hedefi", color: "bg-accent" },
                  { value: "ISO 14001", label: "Çevre Yönetimi", color: "bg-navy" },
                  { value: "ISO 9001", label: "Kalite Yönetimi", color: "bg-navy" },
                  { value: "%100", label: "Yasal Uyum", color: "bg-accent" },
                ].map((item) => (
                  <div key={item.label} className={`${item.color} text-white p-6 text-center`}>
                    <div className="text-3xl font-bold mb-1 font-display">{item.value}</div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-white/80 font-heading">{item.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Policy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Çevre Politikası", desc: "Doğal kaynakları verimli kullanıyor, karbon ayak izimizi azaltarak yeşil dönüşüme katkıda bulunuyoruz.", icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992z"/></svg>
                ) },
                { title: "Sosyal Sorumluluk", desc: "Faaliyet gösterdiğimiz bölgelerde sosyal ve ekonomik kalkınmaya destek oluyor, yerel istihdama katkı sağlıyoruz.", icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/></svg>
                ) },
                { title: "Kalite Anlayışı", desc: "Müşteri memnuniyetini en üst düzeyde tutarak sürekli iyileştirme prensibiyle hareket ediyoruz.", icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                ) },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="bg-[#f8f8f8] p-7 border border-gray-100 group hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-accent text-white flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-navy font-bold text-sm uppercase mb-3 font-display group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-[#555] text-[13px] leading-6">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* HABERLER */}
      <section className="py-20 md:py-32 bg-[#f8f8f8]">
        <div className="max-w-[1440px] mx-auto px-6">
          <Section>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
              <div>
                <p className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-4 font-heading">Haberler</p>
                <h2 className="font-bold text-navy font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>BİZDEN HABERLER</h2>
                <div className="w-14 h-1 bg-accent mt-4" />
              </div>
              <Link href="/haberler" className="inline-flex items-center gap-2 text-navy border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-wider hover:text-accent active:scale-[0.97] transition-all shrink-0 font-display">
                Tüm Haberler <ArrowRight size={15} />
              </Link>
            </motion.div>
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={[
                Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true, playOnInit: true }),
              ]}
              setApi={setNewsCarouselApi}
              className="w-full"
            >
              <CarouselContent>
                {newsData.map((item) => (
                  <CarouselItem key={item.slug} className="basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                    <Link
                      href={`/haberler/${item.slug}`}
                      className="group block h-full"
                    >
                      <motion.div
                        variants={fadeUp}
                        className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col"
                      >
                        <div className="relative overflow-hidden h-44 shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <span className="absolute top-3 left-3 bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider font-heading">
                            {item.category}
                          </span>
                        </div>
                        <div className="p-5 md:p-6 flex-1 flex flex-col">
                          <span className="text-[#999] text-[11px] font-medium mb-2">{item.date}</span>
                          <h3 className="text-base font-bold text-navy uppercase mb-2 font-display group-hover:text-accent transition-colors leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-[#555] text-[13px] leading-6 flex-1 line-clamp-3">
                            {item.summary}
                          </p>
                          <div className="flex items-center gap-1 text-accent text-[10px] font-bold uppercase tracking-widest transition-all font-heading mt-auto pt-3">
                            Devamını Oku
                            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation & Dots */}
              <div className="flex items-center justify-center gap-4 mt-10">
                <CarouselPrevious className="static w-10 h-10 bg-white border border-gray-200 text-navy hover:bg-accent hover:text-white hover:border-accent active:scale-90 transition-all translate-y-0" />
                <div className="flex items-center gap-2.5">
                  {newsData.map((item, i) => (
                    <button
                      key={item.slug}
                      onClick={() => newsCarouselApi?.scrollTo(i)}
                      className={`size-2 rounded-full transition-all duration-300 ${
                        newsActiveIndex === i
                          ? "bg-accent w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Habere git ${i + 1}`}
                    />
                  ))}
                </div>
                <CarouselNext className="static w-10 h-10 bg-white border border-gray-200 text-navy hover:bg-accent hover:text-white hover:border-accent active:scale-90 transition-all translate-y-0" />
              </div>
            </Carousel>
          </Section>
        </div>
      </section>

      {/* KİLOMETRE TAŞLARI */}
      <section id="tarihce" className="py-20 md:py-32 bg-[#f8f8f8]">
        <div className="max-w-[1440px] mx-auto px-6">
          <Section>
            <motion.div variants={fadeUp} className="mb-14">
              <p className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-4 font-heading">Kilometre Taşları</p>
              <h2 className="font-bold text-navy font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>KİLOMETRE TAŞLARI</h2>
              <div className="w-14 h-1 bg-accent mt-4" />
            </motion.div>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
              <div className="space-y-8 md:space-y-0">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    variants={fadeUp}
                    className={`relative md:flex md:items-center md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"} mb-4 md:mb-0`}>
                      <div className="inline-block bg-accent text-white px-4 py-1.5 text-sm font-bold mb-2 font-display">{m.year}</div>
                      <h3 className="text-navy font-bold text-base mb-1 leading-snug font-display">{m.title}</h3>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white z-10" />
                    <div className="md:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section id="iletisim" className="py-20 md:py-28 bg-[#f8f8f8]">
        <div className="max-w-[1440px] mx-auto px-6">
          <Section>
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-accent text-xs font-bold tracking-[0.25em] uppercase mb-4 font-heading">İletişim</p>
              <h2 className="font-bold text-navy mb-5 font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>BİZE ULAŞIN</h2>
              <div className="w-14 h-1 bg-accent" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              {[
                { icon: <MapPin size={22} />, title: "Adres", lines: ["Barbaros Mah. Akzambak Sok.", "Uphill Towers A Blok No: 3/A", "Ataşehir / İstanbul"] },
                { icon: <Phone size={22} />, title: "Telefon", lines: ["+90 (216) 688 08 00"] },
                { icon: <Mail size={22} />, title: "E-posta", lines: ["info@bogazicigroup.com.tr"] },
              ].map((c) => (
                <motion.div key={c.title} variants={fadeUp}>
                  <div className="w-14 h-14 bg-accent flex items-center justify-center text-white mb-5">{c.icon}</div>
                  <h4 className="text-navy font-bold uppercase tracking-widest text-sm mb-3 font-display">{c.title}</h4>
                  {c.lines.map((l, i) => <p key={i} className="text-[#666] text-sm leading-6">{l}</p>)}
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
