import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { fadeUp } from "@/lib/motion";

interface ProjectGroup {
  title: string;
  description: string;
  icon: string;
  projects: { name: string; location: string; img: string }[];
}

const projectGroups: ProjectGroup[] = [
  {
    title: "Üstyapı Projeleri",
    description: "Konut, ofis, ticari merkez ve kamu binaları inşaatında uzman çözümler.",
    icon: "🏗️",
    projects: [
      { name: "Levent 199", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
      { name: "Eczacıbaşı Ormanada", location: "İstanbul, TR", img: "/images/bogazici/project-3.png" },
      { name: "Kasaba Ömerli", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
      { name: "Koç Kuleleri", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
      { name: "Sabancı Center", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
      { name: "Varyap Meridyen", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
    ],
  },
  {
    title: "Altyapı Projeleri",
    description: "Karayolu, köprü, tünel ve altyapı sistemleri inşaatı.",
    icon: "🛣️",
    projects: [
      { name: "Tekirdağ Karayolu İnşaatı", location: "Tekirdağ, TR", img: "/images/bogazici/taahhut.png" },
      { name: "İstanbul Ankara Hızlı Tren", location: "Türkiye", img: "/images/bogazici/project-3.png" },
      { name: "Çayırova Altyapısı", location: "Kocaeli, TR", img: "/images/bogazici/gayrimenkul.png" },
      { name: "Adıyaman Kahta Doğalgaz Hattı", location: "Adıyaman, TR", img: "/images/bogazici/project-2.png" },
      { name: "İGDAŞ Anadolu Doğalgaz", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
    ],
  },
  {
    title: "Endüstriyel Tesisler",
    description: "Fabrika, enerji santrali ve endüstriyel yapı projeleri.",
    icon: "🏭",
    projects: [
      { name: "İsken Su Gözü Enerji Santrali", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
      { name: "Germencik Enerji Santrali", location: "Aydın, TR", img: "/images/bogazici/gayrimenkul.png" },
      { name: "Desbaş Endüstriyel Tesis", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
      { name: "Sarphan Finanspark", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
    ],
  },
  {
    title: "Sosyal Yapılar",
    description: "Hastane, adliye, eğitim ve kamu binaları inşaatı.",
    icon: "🏥",
    projects: [
      { name: "Kartal Lütfi Kırdar Hastanesi", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
      { name: "Çağlayan Adliye Sarayı", location: "İstanbul, TR", img: "/images/bogazici/project-2.png" },
      { name: "Hükümet Konağı", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
      { name: "Teknopark İstanbul", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
      { name: "Garanti Bankası Teknoloji Kampüsü", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
      { name: "Dolphin AVM Center", location: "İstanbul, TR", img: "/images/bogazici/project-3.png" },
    ],
  },
  {
    title: "Uluslararası Projeler",
    description: "Yurt dışında üstlenilen prestijli inşaat projeleri.",
    icon: "🌍",
    projects: [
      { name: "190 Strand London", location: "Londra, UK", img: "/images/bogazici/taahhut.png" },
      { name: "The Knightsbridge", location: "Londra, UK", img: "/images/bogazici/project-3.png" },
      { name: "One Madison ABD", location: "New York, ABD", img: "/images/bogazici/project-2.png" },
      { name: "Nursultan Otel Kazakistan", location: "Kazakistan", img: "/images/bogazici/taahhut.png" },
      { name: "Al Hitmi Doha", location: "Katar", img: "/images/bogazici/project-2.png" },
      { name: "E45 İsveç Otoyolu", location: "İsveç", img: "/images/bogazici/project-4.png" },
    ],
  },
];

const serviceTabs = [
  { label: "Anahtar Teslim Projeler", href: "/hizmetler/anahtar-teslim-projeler", active: true },
  { label: "Mühendislik Hizmetleri", href: "/hizmetler/muhendislik-hizmetleri", active: false },
];

export default function AnahtarTeslimProjeler() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Anahtar Teslim Projeler | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup anahtar teslim projeleri: üstyapı, altyapı, endüstriyel tesisler, sosyal yapılar ve uluslararası projeler. 30+ yıllık tecrübe." />
      </Helmet>
      <SubPageLayout
        title="ANAHTAR TESLİM PROJELER"
        activeNav="Hizmetler"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler" },
          { label: "Anahtar Teslim Projeler" },
        ]}
      >
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar - Service Tabs */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-64 shrink-0"
          >
            <div className="bg-[#f8f8f8] border border-gray-200 overflow-hidden">
              <div className="bg-navy px-5 py-4">
                <h3 className="text-white text-sm font-bold uppercase tracking-widest font-display">Hizmetler</h3>
              </div>
              <ul>
                {serviceTabs.map((tab) => (
                  <li key={tab.label}>
                    {tab.active ? (
                      <span className="block px-5 py-3.5 text-[13px] font-bold uppercase tracking-wide border-l-4 border-accent bg-white text-accent font-heading">
                        {tab.label}
                      </span>
                    ) : (
                      <Link
                        href={tab.href}
                        className="block px-5 py-3.5 text-[13px] font-bold uppercase tracking-wide border-l-4 border-transparent text-[#555] hover:bg-white hover:text-accent hover:border-accent transition-all font-heading"
                      >
                        {tab.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 bg-navy p-6">
              <div className="space-y-5">
                <div>
                  <div className="text-3xl font-bold text-white font-display">100+</div>
                  <div className="text-accent text-[11px] font-bold uppercase tracking-widest mt-1 font-heading">Tamamlanan Proje</div>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <div className="text-3xl font-bold text-white font-display">30+</div>
                  <div className="text-accent text-[11px] font-bold uppercase tracking-widest mt-1 font-heading">Yıllık Deneyim</div>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <div className="text-3xl font-bold text-white font-display">5</div>
                  <div className="text-accent text-[11px] font-bold uppercase tracking-widest mt-1 font-heading">Kıta</div>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 min-w-0"
          >
            {/* Intro */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
              <p className="text-[#555] text-[15px] leading-7 mb-5">
                Boğaziçi Grup olarak, projelerinizi ilk konsept aşamasından anahtar teslimine kadar eksiksiz yönetiyoruz. 
                Mühendislik, tedarik, inşaat ve devreye alma süreçlerinin tamamını üstlenerek müşterilerimize 
                tek noktadan sorumluluk ve güvence sağlıyoruz.
              </p>
              <p className="text-[#555] text-[15px] leading-7">
                30 yılı aşkın tecrübemiz ve güçlü referanslarımızla, her ölçekteki projeyi zamanında, 
                bütçeye uygun ve uluslararası kalite standartlarında teslim ediyoruz.
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-all font-heading ${activeCategory === null ? "bg-navy text-white" : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"}`}
              >
                Tümü
              </button>
              {projectGroups.map((g) => (
                <button
                  key={g.title}
                  onClick={() => setActiveCategory(g.title)}
                  className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-all font-heading ${activeCategory === g.title ? "bg-navy text-white" : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"}`}
                >
                  {g.title}
                </button>
              ))}
            </div>

            {/* Project Groups */}
            {projectGroups
              .filter((g) => !activeCategory || g.title === activeCategory)
              .map((group, gi) => (
                <motion.div
                  key={group.title}
                  initial="hidden"
                  animate="visible"
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
                  className="mb-14 last:mb-0"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-accent" />
                    <div>
                      <h2 className="text-xl font-bold text-navy uppercase font-display">{group.title}</h2>
                      <p className="text-[#888] text-[12px] mt-0.5">{group.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {group.projects.map((project) => (
                      <motion.div
                        key={project.name}
                        variants={fadeUp}
                        className="group bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-default"
                      >
                        <div className="relative overflow-hidden" style={{ aspectRatio: "16/11" }}>
                          <img
                            src={project.img}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-3 left-3 text-white/0 group-hover:text-white/80 text-[10px] font-semibold tracking-wide transition-all duration-300 font-heading">
                            {project.location}
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="w-6 h-0.5 bg-accent mb-3 transition-all duration-300 group-hover:w-12" />
                          <h3 className="text-sm font-bold text-navy uppercase leading-tight group-hover:text-accent transition-colors font-display">
                            {project.name}
                          </h3>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}

            {/* Bottom CTA */}
            <motion.div variants={fadeUp} className="mt-10 bg-[#f8f8f8] border-l-4 border-accent p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-navy font-bold text-base uppercase font-display">Tüm Projelerimizi İnceleyin</h3>
                  <p className="text-[#777] text-sm mt-1">Tamamlanan projelerimizin detaylı listesine göz atın.</p>
                </div>
                <Link
                  href="/projeler/tamamlanan"
                  className="inline-flex items-center gap-2 bg-navy hover:bg-accent text-white px-6 py-3 text-[12px] font-bold uppercase tracking-wider transition-all active:scale-[0.97] shrink-0 font-heading"
                >
                  Tüm Projeler
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SubPageLayout>
    </>
  );
}
