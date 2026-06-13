import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { fadeUp } from "@/lib/motion";

const serviceTabs = [
  { label: "Anahtar Teslim Projeler", href: "/hizmetler/anahtar-teslim-projeler", active: false },
  { label: "Mühendislik Hizmetleri", href: "/hizmetler/muhendislik-hizmetleri", active: true },
];

const engineeringServices = [
  {
    title: "Proje Yönetimi",
    desc: "Projelerinizin planlama, koordinasyon ve kontrol süreçlerinin profesyonel yönetimi. Risk analizi, zaman çizelgesi oluşturma ve bütçe yönetimi dahil kapsamlı hizmet.",
    items: ["İş programı hazırlama", "Kaynak yönetimi", "Risk analizi ve yönetimi", "Kalite kontrol ve dokümantasyon"],
  },
  {
    title: "Yapısal Mühendislik",
    desc: "Betonarme, çelik ve kompozit yapıların statik ve dinamik analizleri, yapısal tasarım ve mühendislik hesaplamaları.",
    items: ["Statik ve dinamik analiz", "Betonarme tasarım", "Çelik yapı tasarımı", "Deprem mühendisliği"],
  },
  {
    title: "Keşif ve Fizibilite",
    desc: "Proje öncesi fizibilite çalışmaları, maliyet analizi, metraj ve keşif hazırlıkları ile yatırım kararlarınıza destek.",
    items: ["Fizibilite raporları", "Maliyet analizi", "Metraj ve keşif", "Yatırım fizibilitesi"],
  },
  {
    title: "Teknik Danışmanlık",
    desc: "İnşaat süreçleri boyunca teknik destek, danışmanlık ve süpervizyon hizmetleri ile projelerinizin başarıyla tamamlanmasını sağlıyoruz.",
    items: ["Teknik destek", "Saha süpervizyonu", "Malzeme test ve analiz", "Kabul ve devreye alma"],
  },
];

export default function MuhendislikHizmetleri() {
  return (
    <>
      <Helmet>
        <title>Mühendislik Hizmetleri | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup mühendislik hizmetleri: proje yönetimi, yapısal mühendislik, keşif ve fizibilite, teknik danışmanlık. Profesyonel mühendislik çözümleri." />
      </Helmet>
      <SubPageLayout
        title="MÜHENDİSLİK HİZMETLERİ"
        activeNav="Hizmetler"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler" },
          { label: "Mühendislik Hizmetleri" },
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
                  <div className="text-3xl font-bold text-white font-display">150+</div>
                  <div className="text-accent text-[11px] font-bold uppercase tracking-widest mt-1 font-heading">Uzman Personel</div>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <div className="text-3xl font-bold text-white font-display">30+</div>
                  <div className="text-accent text-[11px] font-bold uppercase tracking-widest mt-1 font-heading">Yıllık Deneyim</div>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <div className="text-3xl font-bold text-white font-display">100+</div>
                  <div className="text-accent text-[11px] font-bold uppercase tracking-widest mt-1 font-heading">Tamamlanan Proje</div>
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
                Boğaziçi Grup mühendislik ekibi, projelerinizin her aşamasında size profesyonel destek sağlar.
                İlk fizibilite çalışmalarından detaylı mühendislik tasarımına, proje yönetiminden teknik danışmanlığa
                kadar geniş bir yelpazede hizmet sunuyoruz.
              </p>
              <p className="text-[#555] text-[15px] leading-7">
                Deneyimli mühendis kadromuz ve güncel teknolojik altyapımız ile projelerinizi en verimli şekilde
                hayata geçiriyor, müşterilerimize sürdürülebilir ve yenilikçi çözümler sunuyoruz.
              </p>
            </motion.div>

            {/* Service Cards */}
            <div className="space-y-8 mb-12">
              {engineeringServices.map((service, si) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="bg-white border border-gray-100 shadow-sm overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    <div className="bg-navy text-white px-6 py-5 sm:w-48 shrink-0 flex flex-col justify-center">
                      <span className="text-3xl font-bold font-display">0{si + 1}</span>
                      <h3 className="text-sm font-bold uppercase tracking-wider mt-2 font-display">{service.title}</h3>
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-[#555] text-[14px] leading-7 mb-4">{service.desc}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-[13px] text-[#666]">
                            <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Approach Section */}
            <motion.div variants={fadeUp} className="bg-navy text-white p-8">
              <h3 className="text-lg font-bold mb-6 uppercase font-display">Mühendislik Yaklaşımımız</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { title: "Müşteri Odaklı", desc: "Her projeye özel çözümler geliştiriyor, müşteri beklentilerini en üst düzeyde karşılıyoruz." },
                  { title: "Sürdürülebilir Tasarım", desc: "Çevre dostu ve enerji verimli yapı tasarımları ile geleceğe yatırım yapıyoruz." },
                  { title: "Yenilikçi Yaklaşım", desc: "Güncel teknolojileri ve modern mühendislik yöntemlerini projelerimize entegre ediyoruz." },
                  { title: "Kalite Güvencesi", desc: "Ulusal ve uluslararası standartlara uygun, yüksek kaliteli mühendislik hizmeti sunuyoruz." },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-accent pl-4">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1 font-display">{item.title}</h4>
                    <p className="text-white/60 text-[13px] leading-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div variants={fadeUp} className="mt-8 bg-[#f8f8f8] border-l-4 border-accent p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-navy font-bold text-base uppercase font-display">Projelerimizi Keşfedin</h3>
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
