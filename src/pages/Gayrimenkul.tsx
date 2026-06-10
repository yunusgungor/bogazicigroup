import { motion } from "framer-motion";
import { Link } from "wouter";
import SubPageLayout from "@/components/SubPageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Gayrimenkul() {
  return (
    <SubPageLayout
      title="GAYRİMENKUL"
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Faaliyet Alanları" },
        { label: "Gayrimenkul" },
      ]}
    >
      <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
          <motion.div variants={fadeUp}>
            <div className="relative overflow-hidden shadow-lg">
              <img src="/images/bogazici/gayrimenkul.png" alt="Gayrimenkul Projeleri" className="w-full h-full object-cover" style={{ minHeight: "300px" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#212a3c]/30 to-transparent" />
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-[#555] text-[15px] leading-7 mb-6">
              Yurtiçinde ve yurtdışında inşaa ettiğimiz projelerde kaliteli yapı ve zamanında teslim prensiplerimizden hiç ödün vermeden üretim yapmaya devam ediyoruz.
            </p>
          </motion.div>
        </div>

        <motion.h2 variants={fadeUp} className="text-2xl font-bold text-[#212a3c] mb-10 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Tamamlanan Gayrimenkul Projelerimizden Bazıları
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            "Levent 199", "Eczacıbaşı Ormanada", "Kasaba Ömerli", "Kozapark",
            "Yenitepe Kadıköy", "Evidea Konutları", "BGZ İstanbul", "The İstanbul Veliefendi",
            "Kiptaş-Yeşilce Aydos", "Kiptaş Hilal Toplu Konutları", "Kiptaş İkitelli", "Park Joven",
            "Metropol İstanbul", "Varyap Meridyen", "Mytowerland", "Ege Perla Residence",
          ].map((proje) => (
            <div key={proje} className="border border-gray-200 px-4 py-3.5 text-xs font-semibold text-[#555] uppercase tracking-wide hover:border-[#6cbe59] hover:text-[#6cbe59] hover:bg-orange-50 transition-colors cursor-pointer text-center" style={{ fontFamily: "'Raleway', sans-serif" }}>
              {proje}
            </div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="mt-14 bg-[#f8f8f8] border-l-4 border-[#6cbe59] px-8 py-6">
          <p className="text-[#777] text-sm leading-7" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Detaylı proje listesi için <Link href="/projeler/tamamlanan" className="text-[#6cbe59] font-bold hover:underline">Tamamlanan Projeler</Link> sayfamızı ziyaret edebilirsiniz.
          </p>
        </motion.div>
      </motion.div>
    </SubPageLayout>
  );
}