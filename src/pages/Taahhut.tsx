import { motion } from "framer-motion";
import { Link } from "wouter";
import SubPageLayout from "@/components/SubPageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Taahhut() {
  return (
    <SubPageLayout
      title="TAAHHÜT"
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Faaliyet Alanları" },
        { label: "Taahhüt" },
      ]}
    >
      <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
          <motion.div variants={fadeUp}>
            <div className="relative overflow-hidden shadow-lg">
              <img src="/images/bogazici/taahhut.png" alt="Taahhüt Projeleri" className="w-full h-full object-cover" style={{ minHeight: "300px" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#212a3c]/30 to-transparent" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-[#555] text-[15px] leading-7 mb-6">
              İlk proje aşamasından anahtar teslimine ve işletme destek hizmetlerine kadar uzanan sürecin her bölümünde, ileri seviye standartlarda hizmet veren Boğaziçi Grup, sürekli bir şekilde artış gösteren iş hacmiyle sektörünün önde gelen firmalarından biri haline gelmiştir.
            </p>
          </motion.div>
        </div>

        <motion.h2 variants={fadeUp} className="text-2xl font-bold text-[#212a3c] mb-10 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Tamamlanan Taahhüt Projelerimizden Bazıları
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Kartal Lütfi Kırdar Eğitim Araştırma Hastanesi", "Garanti Bankası Teknoloji Kampüsü",
            "Tuzla Ticaret Merkezi", "Çağlayan Adliye Sarayı", "Dolphin AVM Center",
            "Teknopark İstanbul", "Hükümet Konağı", "Desbaş Endüstriyel Tesis",
            "İ.E.T.T. Otogar Yapımı", "İsken Su Gözü Enerji Santrali",
            "Adıyaman Kahta Doğalgaz Boru Hattı", "İstanbul Ankara Hızlı Tren",
            "İGDAŞ Anadolu Doğalgaz İşi", "Çayırova Atatürk ve Özgürlük Mahallesi Altyapısı",
            "Tekirdağ Karayolu İnşaatı", "Maltepe Sosyal Güvenlik Merkezi",
            "Küçükçekmece Kalp Damar Cerrahisi", "Germencik Enerji Santrali",
          ].map((proje) => (
            <div key={proje} className="border border-gray-200 px-4 py-3.5 text-xs font-semibold text-[#555] uppercase tracking-wide hover:border-[#ee7514] hover:text-[#ee7514] hover:bg-orange-50 transition-colors cursor-pointer text-center" style={{ fontFamily: "'Raleway', sans-serif" }}>
              {proje}
            </div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-14 bg-[#f8f8f8] border-l-4 border-[#ee7514] px-8 py-6">
          <p className="text-[#777] text-sm leading-7" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Detaylı proje listesi için <Link href="/projeler/tamamlanan" className="text-[#ee7514] font-bold hover:underline">Tamamlanan Projeler</Link> sayfamızı ziyaret edebilirsiniz.
          </p>
        </motion.div>
      </motion.div>
    </SubPageLayout>
  );
}