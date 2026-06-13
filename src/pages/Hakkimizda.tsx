import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { fadeUp } from "@/lib/motion";

export default function Hakkimizda() {
  return (
    <>
      <Helmet>
        <title>Hakkımızda | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="1994'ten günümüze Boğaziçi Grup'un tarihçesi, değerleri ve inşaat sektöründeki 32 yıllık tecrübesi hakkında bilgi edinin." />
      </Helmet>
      <SubPageLayout
        title="HAKKIMIZDA"
        activeNav="Kurumsal"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal" },
          { label: "Hakkımızda" },
        ]}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              Ülkemizde İnşaat Taahhüt Sektöründe faaliyet gösteren firmamızın temelleri 1994 yılında proje ve müteahhitlik hizmetleri ile atılmıştır.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              <strong className="text-[#212a3c]">BOĞAZİÇİ GRUP</strong> 1994 yılından bu yana inşaat taahhüt sektöründe faaliyet göstermekle birlikte gerek yurt içi gerekse yurt dışında birçok proje de yer almıştır.
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
              BOĞAZİÇİ, uzun yıllar çalışmakta olduğu daimî personeli, her biri kendi dalında profesyonelleşmiş alt yüklenici ağı, güçlü makine ekipman parkı, mali yapısı ve 32 yılı aşkın tecrübesi ile Yurt içi ve Yurt Dışı inşaat sektörünün her disiplinindeki imalatların yapımına daima hazırdır.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#f4f4f4] hidden sm:block" />
              <img src="/images/bogazici/project-1.png" alt="Boğaziçi Grup" className="relative z-10 w-full aspect-[4/3] object-cover shadow-2xl" />
            </div>

          </motion.div>
        </div>
      </SubPageLayout>
    </>
  );
}