import { motion } from "framer-motion";
import SubPageLayout from "@/components/SubPageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function InsanKaynaklari() {
  return (
    <SubPageLayout
      title="İNSAN KAYNAKLARI"
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "İnsan Kaynakları" },
      ]}
    >
      <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-3xl">
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-10">
          Kariyer fırsatlarımız hakkında bilgi almak ve başvuru yapmak için aşağıdaki formu doldurmanızı rica ederiz.
        </motion.p>

        <motion.form variants={fadeUp} className="bg-[#f8f8f8] p-8 border-l-4 border-[#6cbe59]" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-lg font-bold text-[#212a3c] mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>İnsan Kaynakları Formu</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>Ad *</label>
              <input type="text" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-[#6cbe59] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>Soyad *</label>
              <input type="text" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-[#6cbe59] focus:outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>E-posta *</label>
              <input type="email" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-[#6cbe59] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>Telefon *</label>
              <input type="tel" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-[#6cbe59] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>Pozisyon *</label>
              <input type="text" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-[#6cbe59] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>Mesaj</label>
              <textarea rows={4} className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-[#6cbe59] focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>CV (PDF)</label>
              <input type="file" accept=".pdf" className="w-full text-sm text-[#555] file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-bold file:bg-[#212a3c] file:text-white hover:file:bg-[#6cbe59] transition-colors" />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="kvkk-okudum" className="mt-1 shrink-0" />
              <label htmlFor="kvkk-okudum" className="text-[#777] text-xs leading-5">Aydınlatma Metni'ni okudum.</label>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="kvkk-riza" className="mt-1 shrink-0" />
              <label htmlFor="kvkk-riza" className="text-[#777] text-xs leading-5">Kişisel verilerimin aydınlatma metni doğrultusunda işlenmesine rızam vardır.</label>
            </div>
          </div>
          <button type="submit" className="mt-6 bg-[#212a3c] hover:bg-[#6cbe59] text-white px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.97]" style={{ fontFamily: "'Oswald', sans-serif" }}>
            Gönder
          </button>
        </motion.form>
      </motion.div>
    </SubPageLayout>
  );
}