import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { MapPin, Phone, Mail } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export default function BizeUlasin() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Boğaziçi Grup A.Ş.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barbaros Mah. Akzambak Sok. Uphill Towers A Blok No: 3/A İç Kapı No: 122",
      "addressLocality": "Ataşehir",
      "addressRegion": "İstanbul",
      "postalCode": "34746",
      "addressCountry": "TR"
    },
    "telephone": "+90-216-688-08-00",
    "email": "info@bogazicigroup.com.tr",
    "url": "https://bogazicigroup.vercel.app/iletisim/bize-ulasin"
  };

  return (
    <>
      <Helmet>
        <title>İletişim ve Bize Ulaşın | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup merkez ofis iletişim bilgileri, adres, telefon ve e-posta bilgilerine buradan ulaşabilirsiniz. Bize mesaj gönderin." />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>
      <SubPageLayout
        title="MERKEZ OFİS"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
          { label: "Bize Ulaşın" },
        ]}
      >
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <motion.div variants={fadeUp} className="bg-[#f8f8f8] p-8 border-l-4 border-[#6cbe59]">
                <h3 className="text-lg font-bold text-[#212a3c] mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Merkez Ofis</h3>
                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <MapPin size={18} className="text-[#6cbe59] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#333] text-sm font-semibold">Adres</p>
                      <p className="text-[#555] text-sm leading-6">Barbaros Mah. Akzambak Sok. Uphill Towers A Blok No: 3/A İç Kapı No: 122 Ataşehir / İstanbul</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone size={18} className="text-[#6cbe59] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#333] text-sm font-semibold">Telefon</p>
                      <p className="text-[#555] text-sm">0216 688 08 00</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone size={18} className="text-[#6cbe59] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#333] text-sm font-semibold">Faks</p>
                      <p className="text-[#555] text-sm">0850 522 34 03</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Mail size={18} className="text-[#6cbe59] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#333] text-sm font-semibold">E-posta</p>
                      <a href="mailto:info@bogazicigroup.com.tr" className="text-[#6cbe59] text-sm hover:underline">info@bogazicigroup.com.tr</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="bg-[#f8f8f8] p-8">
              <h3 className="text-lg font-bold text-[#212a3c] mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>İletişim Formu</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>Ad Soyad *</label>
                  <input type="text" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-[#6cbe59] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>E-posta *</label>
                  <input type="email" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-[#6cbe59] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>Telefon</label>
                  <input type="tel" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-[#6cbe59] focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>Mesajınız *</label>
                  <textarea rows={4} className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-[#6cbe59] focus:outline-none transition-colors" />
                </div>
                <div className="flex items-start gap-2 mt-2">
                  <input type="checkbox" id="kvkk-iletisim" className="mt-1 shrink-0" />
                  <label htmlFor="kvkk-iletisim" className="text-[#777] text-xs leading-5">Aydınlatma Metni'ni okudum, anladım.</label>
                </div>
                <button type="submit" className="bg-[#212a3c] hover:bg-[#6cbe59] text-white px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.97]" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  Gönder
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </SubPageLayout>
    </>
  );
}