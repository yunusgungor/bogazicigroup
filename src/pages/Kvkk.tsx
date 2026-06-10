import { motion } from "framer-motion";
import SubPageLayout from "@/components/SubPageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Kvkk() {
  return (
    <SubPageLayout
      title="KVKK AYDINLATMA METNİ"
      breadcrumbs={[
        { label: "Ana Sayfa", href: "/" },
        { label: "KVKK Aydınlatma Metni" },
      ]}
    >
      <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="max-w-4xl">
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
          Boğaziçi Grup A.Ş. olarak, kişisel verilerinizin güvenliğine önem vermekteyiz. Bu kapsamda, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, şirketimiz tarafından kişisel verilerinizin işlenmesine ilişkin sizleri bilgilendirmek isteriz.
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-xl font-bold text-[#212a3c] mt-10 mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Veri Sorumlusu
        </motion.h2>
        <motion.div variants={fadeUp} className="w-10 h-1 bg-[#ee7514] mb-6" />
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
          Kişisel verileriniz, veri sorumlusu olarak Boğaziçi Grup A.Ş. ("Şirket") tarafından aşağıda açıklanan kapsamda işlenebilecektir.
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-xl font-bold text-[#212a3c] mt-10 mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Kişisel Verilerin Hangi Amaçla İşleneceği
        </motion.h2>
        <motion.div variants={fadeUp} className="w-10 h-1 bg-[#ee7514] mb-6" />
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
          Kişisel verileriniz, şirketimizin ticari faaliyetlerinin yürütülmesi, müşteri memnuniyetinin sağlanması, hukuki yükümlülüklerin yerine getirilmesi ve ilgili mevzuata uygun olarak işlenmektedir.
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-xl font-bold text-[#212a3c] mt-10 mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Kişisel Verilerin Aktarılması
        </motion.h2>
        <motion.div variants={fadeUp} className="w-10 h-1 bg-[#ee7514] mb-6" />
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
          Kişisel verileriniz, hukuki yükümlülüklerimizi yerine getirmek amacıyla yasal düzenlemeler çerçevesinde talep edilmesi halinde adli makamlar ve ilgili kolluk kuvvetleri ile paylaşılabilir.
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-xl font-bold text-[#212a3c] mt-10 mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Kişisel Verilerin Toplanma Yöntemi
        </motion.h2>
        <motion.div variants={fadeUp} className="w-10 h-1 bg-[#ee7514] mb-6" />
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
          Kişisel verileriniz, şirketimiz ile iletişime geçtiğiniz kanallar (web sitesi, e-posta, telefon, ofis ziyareti) aracılığıyla otomatik veya otomatik olmayan yöntemlerle toplanmaktadır.
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-xl font-bold text-[#212a3c] mt-10 mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          KVKK Kapsamında Haklarınız
        </motion.h2>
        <motion.div variants={fadeUp} className="w-10 h-1 bg-[#ee7514] mb-6" />
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
          KVKK'nın 11. maddesi uyarınca, kişisel verilerinizin işlenmesiyle ilgili olarak aşağıdaki haklara sahipsiniz:
        </motion.p>
        <motion.div variants={fadeUp} className="bg-[#f8f8f8] p-6 mb-8">
          <ul className="space-y-2 text-[#555] text-[15px]">
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2">•</span>Kişisel verinizin işlenip işlenmediğini öğrenme</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2">•</span>Kişisel verileriniz işlenmişse bilgi talep etme</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2">•</span>Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2">•</span>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2">•</span>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2">•</span>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2">•</span>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2">•</span>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
          </ul>
        </motion.div>

        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7">
          Taleplerinizi, kimliğinizi tespit edici belgelerle birlikte merkez ofis adresimize iletebilir veya info@bogazicigroup.com.tr e-posta adresine gönderebilirsiniz.
        </motion.p>
      </motion.div>
    </SubPageLayout>
  );
}