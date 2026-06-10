import { motion } from "framer-motion";
import SubPageLayout from "@/components/SubPageLayout";
import { MapPin, Phone, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function SatisOfisleri() {
  return (
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
          Satış ofislerimiz ile ilgili detaylı bilgi için merkez ofisimiz ile iletişime geçebilirsiniz.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <motion.div variants={fadeUp} className="bg-[#f8f8f8] p-8 border-l-4 border-[#ee7514]">
            <h3 className="text-lg font-bold text-[#212a3c] mb-5 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Merkez Ofis</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#ee7514] shrink-0 mt-0.5" />
                <p className="text-[#555] text-sm leading-6">Barbaros Mah. Akzambak Sok. Uphill Towers A Blok No: 3/A Ataşehir / İstanbul</p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-[#ee7514] shrink-0" />
                <p className="text-[#555] text-sm">0216 821 34 34</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-[#ee7514] shrink-0" />
                <a href="mailto:info@bogazicigroup.com.tr" className="text-[#ee7514] text-sm hover:underline">info@bogazicigroup.com.tr</a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SubPageLayout>
  );
}