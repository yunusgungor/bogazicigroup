import { motion } from "framer-motion";
import SubPageLayout from "@/components/SubPageLayout";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function VizyonMisyon() {
  return (
    <SubPageLayout
      title="VİZYON & MİSYON"
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Kurumsal" },
        { label: "Vizyon & Misyon" },
      ]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-[#212a3c] mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Vizyon
          </motion.h2>
          <motion.div variants={fadeUp} className="w-12 h-1 bg-[#ee7514] mb-6" />
          <ul className="space-y-4 mb-10">
            {[
              "Yüksek müşteri memnuniyetini piyasa koşulları içerisinde sunarak en geniş müşteri potansiyeline ulaşmak.",
              "Müşterilerimizin daima öncelikli tercihi ve çözüm ortağı olmasını sağlamak.",
              "Uluslararası inşaat piyasasında söz sahibi, bilgi üreten ve çözüm ortaklı çalışmanın vermiş olduğu güven ile prestijli büyük ölçekli projelerde yer almak.",
            ].map((item, i) => (
              <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-[#555] text-[15px] leading-7">
                <span className="w-2 h-2 bg-[#ee7514] rounded-full shrink-0 mt-2.5" />
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-[#212a3c] mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Misyon
          </motion.h2>
          <motion.div variants={fadeUp} className="w-12 h-1 bg-[#ee7514] mb-6" />
          <ul className="space-y-4">
            {[
              "Çalışanları başta olmak üzere inşaatın çevreye saygı prensipleri içerisinde işçi sağlığı ve iş güvenliğini tesis etmek.",
              "En iyi inşaat teknolojisini ve yöntemlerini uygulamak.",
              "Başladığı her projeyi kaliteden ödün vermeksizin hangi şartta olursa olsun teklif ettiği iş süresinden önce tamamlamak.",
              "Yüksek müşteri memnuniyeti sunmak.",
            ].map((item, i) => (
              <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-[#555] text-[15px] leading-7">
                <span className="w-2 h-2 bg-[#ee7514] rounded-full shrink-0 mt-2.5" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#f4f4f4] hidden sm:block" />
            <img src="/images/bogazici/project-3.png" alt="Vizyon & Misyon" className="relative z-10 w-full aspect-[4/3] object-cover shadow-2xl" />
          </div>
          <div className="mt-10 bg-[#f8f8f8] border-l-4 border-[#ee7514] p-6">
            <h3 className="text-lg font-bold text-[#212a3c] mb-2 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Kalite Politikamız</h3>
            <p className="text-[#555] text-sm leading-7 mb-4">
              BOĞAZİÇİ GRUP yürürlükte bulunan çevreyle ilgili mevzuat ve idari düzenlemelere, kendiliğinden tabi olduğu şartlara uyarak altyapı, üstyapı inşaatları ve yapı elemanları üretiminde havanın, suyun ve toprağın kirlenmesinin önlenmesi için gerekli kaynaklarını kullanmaya özen gösterir.
            </p>
            <Link href="/kurumsal/kalite-politikamiz" className="inline-flex items-center gap-1 text-[#ee7514] text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Bilgi için tıklayın <ChevronRight size={13} />
            </Link>
          </div>
        </motion.div>
      </div>
    </SubPageLayout>
  );
}