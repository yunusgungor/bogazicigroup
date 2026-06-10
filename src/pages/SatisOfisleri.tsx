import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function SatisOfisleri() {
  return (
    <>
      <Helmet>
        <title>Satış Ofisleri | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup satış ofisleri hakkında bilgi alın. Şu anda aktif bir satış ofisimiz bulunmamaktadır." />
      </Helmet>
      <SubPageLayout
        title="SATIŞ OFİSLERİ"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
          { label: "Satış Ofisleri" },
        ]}
      >
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-10 max-w-3xl">
            Satış ofisi bulunmamaktadır.
          </motion.p>
        </motion.div>
      </SubPageLayout>
    </>
  );
}