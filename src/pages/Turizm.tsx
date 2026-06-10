import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Turizm() {
  return (
    <>
      <Helmet>
        <title>Turizm Yatırımları ve Marina Projeleri | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Lüks otel ve marina yatırımlarımızla Türkiye'nin turizm potansiyeline değer katıyoruz. Ramada Encore ve daha fazlası." />
      </Helmet>
      <SubPageLayout
        title="TURİZM"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Faaliyet Alanları" },
          { label: "Turizm" },
        ]}
      >
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden shadow-lg">
                <img src="/images/bogazici/turizm.png" alt="Turizm Projeleri" className="w-full h-full object-cover" style={{ minHeight: "300px" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212a3c]/30 to-transparent" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-[#555] text-[15px] leading-7 mb-6">
                Boğaziçi Grup 1938 yılından beri inşaatın yanı sıra turizm sektörüyle de iç içe bulunuyor. Sektörün önde gelen şehirlerinden sayılan İzmir'de başlanan turizm yatırımları ilerleyen dönemlerde çeşitlenerek artırmayı planlıyoruz.
              </p>
            </motion.div>
          </div>

          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-[#212a3c] mb-10 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Projeler
          </motion.h2>

          <motion.div variants={fadeUp} className="group bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden max-w-md">
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img src="/images/bogazici/turizm.png" alt="Ramada Encore" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-4 left-4 bg-[#6cbe59] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>Otel & Konaklama</span>
            </div>
            <div className="p-5">
              <div className="w-8 h-0.5 bg-[#6cbe59] mb-3 transition-all duration-300 group-hover:w-16" />
              <h3 className="text-base font-bold text-[#212a3c] uppercase leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>Ramada Encore</h3>
            </div>
          </motion.div>
        </motion.div>
      </SubPageLayout>
    </>
  );
}