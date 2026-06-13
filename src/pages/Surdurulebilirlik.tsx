import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { fadeUp } from "@/lib/motion";

const sectionIds = ["isg", "cevre", "sosyal", "kalite"];

const sustainabilityTabs = [
  { label: "İş Sağlığı ve Güvenliği", sectionId: "isg" },
  { label: "Çevre Politikası", sectionId: "cevre" },
  { label: "Sosyal Sorumluluk", sectionId: "sosyal" },
  { label: "Kalite Anlayışı", sectionId: "kalite" },
];

const sections = [
  {
    id: "isg",
    title: "İş Sağlığı ve Güvenliği",
    content: [
      "Çalışanlarımızın ve iş ortaklarımızın sağlık ve güvenliğini en öncelikli konumuz olarak görüyoruz. Tüm projelerimizde 'sıfır kaza' hedefiyle hareket ediyor, ulusal ve uluslararası iş sağlığı ve güvenliği standartlarına tam uyum sağlıyoruz.",
      "Dikkatli bir şekilde planlanmış ve benimsenmiş kurumsal sağlık ve güvenlik politikalarımız tüm çalışanlara etkili bir şekilde aktarılmaktadır. Düzenli danışma, eğitimler ve iç & dış denetimler yoluyla çalışanların sağlık ve güvenlik politikası yönetimine katılımları aktif olarak teşvik edilmektedir.",
    ],
    stats: [
      { value: "0", label: "Kaza Hedefi" },
      { value: "500+", label: "İSG Eğitimi / Yıl" },
      { value: "%100", label: "Yasal Uyum" },
    ],
  },
  {
    id: "cevre",
    title: "Çevre Politikası",
    content: [
      "Çevresel sürdürülebilirliği iş süreçlerimizin ayrılmaz bir parçası olarak benimsiyoruz. Projelerimizin her aşamasında çevresel etkileri minimize etmek, doğal kaynakları verimli kullanmak ve atık yönetimini etkin bir şekilde uygulamak için çalışıyoruz.",
      "ISO 14001 Çevre Yönetim Sistemi standartlarına uygun olarak yürüttüğümüz faaliyetlerimizde, karbon ayak izimizi azaltmak ve yeşil dönüşüme katkıda bulunmak önceliklerimiz arasındadır.",
    ],
    stats: [
      { value: "ISO 14001", label: "Çevre Yönetim Sistemi" },
      { value: "30%", label: "Karbon Azaltma Hedefi" },
      { value: "Geri Dönüşüm", label: "Atık Yönetimi" },
    ],
  },
  {
    id: "sosyal",
    title: "Sosyal Sorumluluk",
    content: [
      "Topluma değer katmayı kurumsal sorumluluğumuzun temel bir parçası olarak görüyoruz. Faaliyet gösterdiğimiz bölgelerde sosyal ve ekonomik kalkınmaya destek oluyor, yerel istihdama katkı sağlıyor, eğitim ve kültür projelerine destek veriyoruz.",
      "Çalışanlarımızın gelişimine yatırım yapıyor, eşit fırsatlar sunuyor ve kapsayıcı bir iş ortamı oluşturmak için çalışıyoruz. İş etiği kurallarımız ve insan haklarına saygı prensiplerimizle tüm paydaşlarımıza karşı sorumluluklarımızı yerine getiriyoruz.",
    ],
    stats: [
      { value: "100+", label: "İstihdam" },
      { value: "5 Kıta", label: "Küresel Etki" },
      { value: "Eşitlik", label: "Kapsayıcı İş Ortamı" },
    ],
  },
  {
    id: "kalite",
    title: "Kalite Anlayışı",
    content: [
      "Tüm projelerimizde kaliteyi bir yaşam biçimi olarak benimsiyoruz. ISO 9001 Kalite Yönetim Sistemi çerçevesinde yürüttüğümüz çalışmalarımızda, müşteri memnuniyetini en üst düzeyde tutarak sürekli iyileştirme prensibiyle hareket ediyoruz.",
      "Her proje aşamasında uyguladığımız sıkı kalite kontrol prosedürlerimiz, uluslararası standartlara uygunluğumuzu garanti altına almakta ve müşterilerimize güvenilir çözümler sunmamızı sağlamaktadır.",
    ],
    stats: [
      { value: "ISO 9001", label: "Kalite Yönetim Sistemi" },
      { value: "%98", label: "Müşteri Memnuniyeti" },
      { value: "30+ Yıl", label: "Kaliteli Hizmet" },
    ],
  },
];

export default function Surdurulebilirlik() {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash?.replace("#", "");
    return sectionIds.includes(hash || "") ? hash! : "isg";
  });
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    sectionIds.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sürdürülebilirlik | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup sürdürülebilirlik politikaları: iş sağlığı ve güvenliği, çevre politikası, sosyal sorumluluk ve kalite yönetimi." />
      </Helmet>
      <SubPageLayout
        title="SÜRDÜRÜLEBİLİRLİK"
        activeNav="Sürdürülebilirlik"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Sürdürülebilirlik" },
        ]}
      >
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-64 shrink-0"
          >
            <div className="bg-[#f8f8f8] border border-gray-200 overflow-hidden lg:sticky lg:top-24">
              <div className="bg-navy px-5 py-4">
                <h3 className="text-white text-sm font-bold uppercase tracking-widest font-display">Sürdürülebilirlik</h3>
              </div>
              <ul>
                {sustainabilityTabs.map((tab) => {
                  const isActive = activeSection === tab.sectionId;
                  return (
                    <li key={tab.label}>
                      <button
                        onClick={() => scrollToSection(tab.sectionId)}
                        className={`w-full text-left px-5 py-3.5 text-[13px] font-bold uppercase tracking-wide border-l-4 transition-all font-heading ${
                          isActive
                            ? "border-accent bg-white text-accent"
                            : "border-transparent text-[#555] hover:bg-white hover:text-accent hover:border-accent"
                        }`}
                      >
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 min-w-0"
          >
            {sections.map((section, si) => (
              <motion.div
                key={section.id}
                id={section.id}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-14 last:mb-0"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-accent" />
                  <h2 className="text-xl font-bold text-navy uppercase font-display">{section.title}</h2>
                </div>

                {section.content.map((p, pi) => (
                  <p key={pi} className="text-[#555] text-[15px] leading-7 mb-5 last:mb-8">
                    {p}
                  </p>
                ))}

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4">
                  {section.stats.map((stat) => (
                    <div key={stat.label} className="bg-[#f8f8f8] p-5 text-center border border-gray-100">
                      <div className="text-2xl font-bold text-navy mb-1 font-display">{stat.value}</div>
                      <div className="text-accent text-[11px] font-bold uppercase tracking-widest font-heading">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Documents Section */}
            <motion.div variants={fadeUp} className="mt-10 bg-[#f8f8f8] border-l-4 border-accent p-8">
              <h3 className="text-navy font-bold text-base uppercase mb-3 font-display">İlgili Belgeler</h3>
              <p className="text-[#777] text-sm mb-5">Sürdürülebilirlik politikalarımıza ait belgeleri ve sertifikaları inceleyebilirsiniz.</p>
              <Link
                href="/kurumsal/belgeler"
                className="inline-flex items-center gap-2 bg-navy hover:bg-accent text-white px-6 py-3 text-[12px] font-bold uppercase tracking-wider transition-all active:scale-[0.97] font-heading"
              >
                Belgeleri Görüntüle
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </SubPageLayout>
    </>
  );
}
