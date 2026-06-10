import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hakkimizda() {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="1938'den günümüze Boğaziçi Grup'un tarihçesi, değerleri ve inşaat sektöründeki 85 yıllık tecrübesi hakkında bilgi edinin." />
      </Helmet>
      <SubPageLayout
        title="HAKKIMIZDA"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal" },
          { label: "Hakkımızda" },
        ]}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              Ülkemizde İnşaat Taahhüt Sektöründe faaliyet gösteren firmamızın temelleri 1938 yılında proje ve müteahhitlik hizmetleri ile atılmıştır.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              <strong className="text-[#212a3c]">BOĞAZİÇİ GRUP</strong> 1938 yılından bu yana inşaat taahhüt sektöründe faaliyet göstermekle birlikte gerek yurt içi gerekse yurt dışında birçok proje de yer almıştır.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              Kuruluşundan günümüze kadar üstlenmiş olduğu Üstyapı İşleri, Altyapı İşleri, Endüstriyel Tesisler, Enerji Santralleri, Arıtma Tesisleri, Yol ve Köprü İşleri, Bağlantı yolları inşaatı gibi Taahhüt grubunun hemen her faaliyet alanında hizmet vermektedir.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              <strong className="text-[#212a3c]">BOĞAZİÇİ GRUP</strong>, uzman ekibi ve kadrosu ile üstlendiği projeleri bütçesi içerisinde, uluslararası kalite de ve iş sağlığı ve güvenliğine büyük önem vererek sektöründe tercih edilen saygın yüklenici firmalardan biri konumuna gelmiştir.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              Yurt içi ve Yurt dışında yaptığı işler ile referanslarını güçlendiren BOĞAZİÇİ, İşveren Yüklenici, Yüklenici Altyüklenici ve Teknik Personelleri ile ortak akılda buluşarak çok ciddi know-how potansiyeline ulaşmıştır.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              BOĞAZİÇİ, Ülkemizde ve Dünyada düzenlenen inşaat fuarlarına sürekli katılım göstererek her gün yenilenen inşaat teknolojisini yakından takip etmektedir.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-8">
              BOĞAZİÇİ, uzun yıllar çalışmakta olduğu daimî personeli, her biri kendi dalında profesyonelleşmiş alt yüklenici ağı, güçlü makine ekipman parkı, mali yapısı ve 43 yılı aşkın tecrübesi ile Yurt içi ve Yurt Dışı inşaat sektörünün her disiplinindeki imalatların yapımına daima hazırdır.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#f4f4f4] hidden sm:block" />
              <img src="/images/bogazici/project-1.png" alt="Boğaziçi Grup" className="relative z-10 w-full aspect-[4/3] object-cover shadow-2xl" />
            </div>
            <div className="mt-10 bg-[#f8f8f8] border-l-4 border-[#6cbe59] p-6">
              <h3 className="text-lg font-bold text-[#212a3c] mb-2 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Onursal Başkan</h3>
              <p className="text-[#555] text-sm leading-7 mb-4">
                Covid-19 pandemisi ile başlayan gelişmeler, tüm dünyada olduğu gibi ülkemizde de zorlu bir sürecin yaşanmasına neden oldu. Salgının yarattığı şok dalgasının üzerinden geçen iki yılın sonunda, enflasyonun tetiklenmesi ve üreticilerin sipariş modellerinde değişikliğe gitmeleri ekonomik durgunluk riskini beraberinde getirdi.
              </p>
              <Link href="/kurumsal/onursal-baskan" className="inline-flex items-center gap-1 text-[#6cbe59] text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Bilgi için tıklayın <ChevronRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </SubPageLayout>
    </>
  );
}