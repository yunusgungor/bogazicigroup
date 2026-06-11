import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export default function SatisOfisleri() {
  return (
    <>
      <Helmet>
        <title>Satış Ofisleri | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup satış ofisleri. Projelerimiz hakkında bilgi almak için merkez ofisimiz veya iletişim formu aracılığıyla bize ulaşabilirsiniz." />
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
          <motion.div variants={fadeUp} className="bg-[#f8f8f8] border-l-4 border-[#6cbe59] p-8 mb-12 max-w-3xl">
            <h3 className="text-lg font-bold text-[#212a3c] mb-3 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Aktif Satış Ofisi Bulunmamaktadır</h3>
            <p className="text-[#555] text-[15px] leading-7">
              Şu anda aktif bir satış ofisimiz bulunmamaktadır. Projelerimiz ve satış süreçlerimiz hakkında detaylı bilgi almak için aşağıdaki kanallar aracılığıyla merkez ofisimiz ile iletişime geçebilirsiniz.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-[#212a3c] p-8 max-w-3xl">
            <h3 className="text-lg font-bold text-white mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Merkez Ofis</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <MapPin size={18} className="text-[#6cbe59] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm font-semibold">Adres</p>
                  <p className="text-white/50 text-sm leading-6">Barbaros Mah. Akzambak Sok. Uphill Towers A Blok No: 3/A İç Kapı No: 122 Ataşehir / İstanbul</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone size={18} className="text-[#6cbe59] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm font-semibold">Telefon</p>
                  <p className="text-white/50 text-sm">+90 (216) 688 08 00</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail size={18} className="text-[#6cbe59] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm font-semibold">E-posta</p>
                  <a href="mailto:info@bogazicigroup.com.tr" className="text-[#6cbe59] text-sm hover:underline">info@bogazicigroup.com.tr</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Link href="/iletisim/bize-ulasin" className="inline-flex items-center gap-2 bg-[#6cbe59] hover:bg-[#52a344] text-white px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all active:scale-[0.97]" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Bize Ulaşın <ChevronRight size={15} />
            </Link>
            <Link href="/projeler/tamamlanan" className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#6cbe59] hover:text-[#6cbe59] text-[#555] px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all active:scale-[0.97]" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Projeleri İncele <ChevronRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      </SubPageLayout>
    </>
  );
}
