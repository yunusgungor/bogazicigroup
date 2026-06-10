import { motion } from "framer-motion";
import SubPageLayout from "@/components/SubPageLayout";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function KalitePolitikamiz() {
  return (
    <SubPageLayout
      title="KALİTE POLİTİKAMIZ"
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Kurumsal" },
        { label: "Kalite Politikamız" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h2 variants={fadeUp} className="text-xl font-bold text-[#212a3c] mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Çevre Politikası
          </motion.h2>
          <motion.div variants={fadeUp} className="w-10 h-1 bg-[#6cbe59] mb-6" />
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-8">
            BOĞAZİÇİ GRUP yürürlükte bulunan çevreyle ilgili mevzuat ve idari düzenlemelere, kendiliğinden tabi olduğu şartlara uyarak altyapı, üstyapı inşaatları ve yapı elemanları üretiminde havanın, suyun ve toprağın kirlenmesinin önlenmesi için gerekli kaynaklarını kullanmaya özen gösterir. Planlama ve üretimde bilinçli personel kullanarak çevre değerlerinin korunmasına ve sürdürülebilirliğin sağlanmasına, uygulanabilir şartları yerine getirerek sürekli gelişme ve ilerleme anlayışı içerisinde katkıda bulunur.
          </motion.p>

          <motion.h2 variants={fadeUp} className="text-xl font-bold text-[#212a3c] mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
            İSG Politikası
          </motion.h2>
          <motion.div variants={fadeUp} className="w-10 h-1 bg-[#6cbe59] mb-6" />
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
            BOĞAZİÇİ GRUP yürürlükteki İSG mevzuatına ve üyesi olduğu kuruluşların şartlarına uyarak iş sağlığı ve güvenliği için gerekli tüm önlemleri alır. Çalışanların kendi bireysel ISG sorumluluklarının farkında olmalarını, iş sağlığı ve güvenliği ile ilgili faaliyetlerin uygulanabilir şartlarını yerine getirerek sürekli iyileştirilmesini sağlar.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-8">
            BOĞAZİÇİ GRUP yukarıda belirttiği koşulları sahip olduğu İSO 9001 ve İSO 14001 belgeleri ve OHSAS 18001 belgesi ile desteklemektedir.
          </motion.p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#f4f4f4] hidden sm:block" />
            <img src="/images/bogazici/project-4.png" alt="Kalite Politikamız" className="relative z-10 w-full aspect-[4/3] object-cover shadow-2xl" />
          </div>
          <div className="mt-10 bg-[#f8f8f8] border-l-4 border-[#6cbe59] p-6">
            <h3 className="text-lg font-bold text-[#212a3c] mb-2 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Belgeler</h3>
            <p className="text-[#555] text-sm leading-7 mb-4">
              BOĞAZİÇİ GRUP, uzman ekibi ve kadrosu ile üstlendiği projeleri bütçesi içerisinde, uluslararası kalite de ve iş sağlığı ve güvenliğine büyük önem vererek sektöründe tercih edilen saygın yüklenici firmalardan biri konumuna gelmiştir.
            </p>
            <Link href="/kurumsal/belgeler" className="inline-flex items-center gap-1 text-[#6cbe59] text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Bilgi için tıklayın <ChevronRight size={13} />
            </Link>
          </div>
        </motion.div>
      </div>
    </SubPageLayout>
  );
}