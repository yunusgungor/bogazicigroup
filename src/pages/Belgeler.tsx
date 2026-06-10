import { motion } from "framer-motion";
import { Link } from "wouter";
import SubPageLayout from "@/components/SubPageLayout";
import { FileText, Download, Eye } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const pdfBase = "https://bogazicigroup.com.tr/Images/PDF";

const belgeler = [
  {
    name: "Ticaret Odası Faaliyet Belgesi",
    file: "TicaretOdasiFaaliyetBelgesi.pdf",
    description: "Ticaret Odası'na kayıtlı faaliyet belgemizi görüntüleyebilir veya indirebilirsiniz.",
  },
  {
    name: "ISO 9001 - ISO 14001",
    file: "Iso9001-Iso14001.pdf",
    description: "ISO 9001 Kalite Yönetim Sistemi ve ISO 14001 Çevre Yönetim Sistemi belgelerimizi görüntüleyebilir veya indirebilirsiniz.",
  },
];

export default function Belgeler() {
  return (
    <SubPageLayout
      title="BELGELER"
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Kurumsal" },
        { label: "Belgeler" },
      ]}
    >
      <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-4xl">
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-10">
          BOĞAZİÇİ GRUP, uzman ekibi ve kadrosu ile üstlendiği projeleri bütçesi içerisinde, uluslararası kalite de ve iş sağlığı ve güvenliğine büyük önem vererek sektöründe tercih edilen saygın yüklenici firmalardan biri konumuna gelmiştir.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {belgeler.map((belge) => (
            <motion.div key={belge.file} variants={fadeUp} className="group bg-white border border-gray-200 hover:border-[#6cbe59] transition-all shadow-sm hover:shadow-md overflow-hidden">
              <div className="bg-[#f8f8f8] p-8 flex items-center justify-center border-b border-gray-100">
                <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200">
                  <FileText size={36} className="text-[#6cbe59]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-sm font-bold text-[#212a3c] uppercase mb-2" style={{ fontFamily: "'Oswald', sans-serif" }}>{belge.name}</h3>
                <p className="text-[#888] text-xs leading-relaxed mb-5">{belge.description}</p>
                <div className="flex items-center gap-3">
                  <a
                    href={`${pdfBase}/${belge.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#212a3c] hover:bg-[#6cbe59] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 transition-all active:scale-[0.97]"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    <Eye size={13} /> İncele
                  </a>
                  <a
                    href={`${pdfBase}/${belge.file}`}
                    download={belge.file}
                    className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#6cbe59] hover:text-[#6cbe59] text-[#555] text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 transition-all active:scale-[0.97]"
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    <Download size={13} /> İndir
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="border-t border-gray-200 pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <div className="shrink-0 w-full sm:w-48 h-32 bg-[#f4f4f4] flex items-center justify-center overflow-hidden rounded-sm">
              <img src="/images/bogazici/hero-bg.png" alt="Boğaziçi Grup Hakkımızda" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#212a3c] uppercase mb-3" style={{ fontFamily: "'Oswald', sans-serif" }}>Hakkımızda</h2>
              <p className="text-[#555] text-sm leading-7 mb-3">
                Ülkemizde İnşaat Taahhüt Sektöründe faaliyet gösteren firmamızın temelleri 1938 yılında proje ve müteahhitlik hizmetleri ile atılmıştır.
              </p>
              <Link href="/kurumsal/hakkimizda" className="inline-flex items-center gap-2 text-[#6cbe59] text-xs font-bold uppercase tracking-widest hover:underline" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Bilgi için tıklayın
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SubPageLayout>
  );
}