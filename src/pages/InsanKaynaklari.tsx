import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { fadeUp } from "@/lib/motion";

export default function InsanKaynaklari() {
  return (
    <>
      <Helmet>
        <title>Kariyer ve İnsan Kaynakları | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup ailesine katılın. Açık pozisyonlar ve kariyer fırsatları için başvuru formunu doldurun." />
      </Helmet>
      <SubPageLayout
        title="KARİYER"
        activeNav="Kariyer"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kariyer" },
        ]}
      >
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-3xl">
          {/* Açık Pozisyonlar */}
          <motion.div variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-accent" />
              <h2 className="text-xl font-bold text-navy uppercase font-display">Açık Pozisyonlar</h2>
            </div>
            <div className="bg-[#f8f8f8] border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-navy flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-[#888] text-sm font-medium">
                Açık pozisyon bulunmamaktadır.
              </p>
              <p className="text-[#aaa] text-[13px] mt-2">
                Kariyer fırsatları için bizi takip etmeye devam edin.
              </p>
            </div>
          </motion.div>

          {/* Başvuru Formu */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-accent" />
              <h2 className="text-xl font-bold text-navy uppercase font-display">Başvuru Formu</h2>
            </div>
            <p className="text-[#555] text-[15px] leading-7 mb-8">
              Açık pozisyon bulunmaması durumunda dahi, gelecekteki fırsatlar için başvurunuzu
              aşağıdaki form aracılığıyla iletebilirsiniz.
            </p>
            <form className="bg-[#f8f8f8] p-8 border-l-4 border-accent" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5 font-heading">Ad *</label>
                  <input type="text" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5 font-heading">Soyad *</label>
                  <input type="text" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5 font-heading">E-posta *</label>
                  <input type="email" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5 font-heading">Telefon</label>
                  <input type="tel" className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5 font-heading">İlgilendiğiniz Pozisyon</label>
                  <select className="w-full border border-gray-200 px-4 py-2.5 text-sm text-[#555] focus:border-accent focus:outline-none transition-colors bg-white">
                    <option value="">Seçiniz</option>
                    <option value="insaat">İnşaat Mühendisi</option>
                    <option value="mekanik">Mekanik Mühendisi</option>
                    <option value="elektrik">Elektrik Mühendisi</option>
                    <option value="proje">Proje Yöneticisi</option>
                    <option value="saha">Saha Şefi</option>
                    <option value="ofis">Ofis Personeli</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5 font-heading">Mesaj</label>
                  <textarea rows={4} className="w-full border border-gray-200 px-4 py-2.5 text-sm focus:border-accent focus:outline-none transition-colors" placeholder="Kendinizi kısaca tanıtın..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#333] uppercase tracking-wider mb-1.5 font-heading">CV (PDF)</label>
                  <input type="file" accept=".pdf" className="w-full text-sm text-[#555] file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:font-bold file:bg-navy file:text-white hover:file:bg-accent transition-colors cursor-pointer" />
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
              <button type="submit" className="mt-6 bg-navy hover:bg-accent text-white px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.97] font-display">
                Gönder
              </button>
            </form>
          </motion.div>
        </motion.div>
      </SubPageLayout>
    </>
  );
}
