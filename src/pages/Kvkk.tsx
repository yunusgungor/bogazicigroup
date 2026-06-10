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
      <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }} className="max-w-4xl">
        <motion.p variants={fadeUp} className="text-[#212a3c] text-sm font-bold mb-8 leading-7">
          BOĞAZİÇİ GRUP ENERJİ VE GIDA SANAYİ TİCARET ANONİM ŞİRKETİ KİŞİSEL VERİLERİN İŞLENMESİ AYDINLATMA METNİ<br />
          (6698 SAYILI KANUN VE AYDINLATMA YÜKÜMLÜLÜĞÜNÜN YERİNE GETİRİLMESİNDE UYULACAK USUL VE ESASLAR HAKKINDA TEBLİĞ UYARINCA)
        </motion.p>

        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-6">
          Boğaziçi Grup Enerji ve Gıda Sanayi Ticaret Anonim Şirketi ("Şirket") olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, Şirket olarak ürün ve hizmetlerimizden faydalanan kişiler dâhil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")'na uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz. Bu sorumluluğumuzun tam idraki ile KVK'nın m. 3/ı hükmünde tanımlı şekli ile "Veri Sorumlusu" sıfatıyla, kişisel verilerinizi aşağıda açıklandığı surette ve mevzuat tarafından emredilen sınırlar çerçevesinde işlemekteyiz.
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-lg font-bold text-[#212a3c] mt-12 mb-5 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          1. Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları
        </motion.h2>
        <motion.div variants={fadeUp} className="w-10 h-1 bg-[#ee7514] mb-6" />
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
          Kişisel verileriniz, Şirketimiz tarafından sağlanan hizmet ve Şirketimizin ticari faaliyetlerine bağlı olarak değişkenlik gösterebilmekle birlikte; otomatik ya da otomatik olmayan yöntemlerle, Şirketimiz birimleri ve ofisler, internet sitesi, sosyal medya mecraları, mobil uygulamalar ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilecektir. Şirketimizin sunduğu ürün ve hizmetlerden yararlandığınız müddetçe oluşturularak ve güncellenerek kişisel verileriniz işlenebilecektir.
        </motion.p>
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
          Ayrıca, Şirket'in kullanmak amacıyla çağrı merkezlerimizi veya internet sayfamızı kullandığınızda, Şirketimizi veya internet sitemizi ziyaret ettiğinizde, Şirketimizin düzenlediği eğitim, seminer veya organizasyonlara katıldığınızda kişisel verileriniz işlenebilecektir.
        </motion.p>
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-6">
          Toplanan kişisel verileriniz, Şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, Şirketimiz tarafından sunulan ürün ve hizmetlerin sizlerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek sizlere önerilmesi, Şirketimizin ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini (Şirketimiz tarafından yürütülen iletişime yönelik idari operasyonlar, Şirkete ait konumların fiziksel güvenliğini ve denetimini sağlamak, müşterileri değerlendirme/şikâyet yönetimi süreçleri, itibar araştırma süreçleri, etkinlik yönetimi, hukuki uyum süreci, denetim, mali işler v.b.), Şirketimizin ticari ve iş stratejilerinin belirlenmesi ve uygulanması ve Şirketimizin insan kaynakları politikalarının yürütülmesinin temini amaçlarıyla KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dâhilinde işlenecektir.
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-lg font-bold text-[#212a3c] mt-12 mb-5 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          2. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği
        </motion.h2>
        <motion.div variants={fadeUp} className="w-10 h-1 bg-[#ee7514] mb-6" />
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-6">
          Toplanan kişisel verileriniz; Şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz tarafından yapılması, Şirketimiz tarafından sunulan ürün ve hizmetlerin sizlerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek sizlere önerilmesi, Şirketimizin ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini (Şirketimiz tarafından yürütülen iletişime yönelik idari operasyonlar, Şirkete ait lokasyonların fiziksel güvenliğini ve denetimini sağlamak, iş ortağı/müşteri/tedarikçi (yetkili veya çalışanları) değerlendirme süreçleri, itibar araştırma süreçleri, hukuki uyum süreci, denetim, mali işler v.b.), Şirketimizin ticari ve iş stratejilerinin belirlenmesi ve uygulanması ile Şirketimizin insan kaynakları politikalarının yürütülmesinin temini amaçlarıyla iş ortaklarımıza, tedarikçilerimize, Şirket yetkililerine, hissedarlarımıza, kanunen yetkili kamu kurumları ve özel kişilere, KVKK'nun 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-lg font-bold text-[#212a3c] mt-12 mb-5 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
        </motion.h2>
        <motion.div variants={fadeUp} className="w-10 h-1 bg-[#ee7514] mb-6" />
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-6">
          Kişisel verileriniz, her türlü sözlü, yazılı ya da elektronik ortamda, yukarıda yer verilen amaçlar doğrultusunda Şirketçe sunduğumuz ürün ve hizmetlerin belirlenen yasal çerçevede sunulabilmesi ve bu kapsamda Şirketimizin sözleşme ve yasadan doğan mesuliyetlerini eksiksiz ve doğru bir şekilde yerine getirebilmesi gayesi ile edinilir. Bu hukuki sebeple toplanan kişisel verileriniz KVKK'nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında bu metnin (1) ve (2) numaralı bentlerinde belirtilen amaçlarla da işlenebilmekte ve aktarılabilmektedir.
        </motion.p>

        <motion.h2 variants={fadeUp} className="text-lg font-bold text-[#212a3c] mt-12 mb-5 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
          4. Kişisel Veri Sahibinin KVKK'nun 11. maddesinde Sayılan Hakları
        </motion.h2>
        <motion.div variants={fadeUp} className="w-10 h-1 bg-[#ee7514] mb-6" />
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
          Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi, işbu Aydınlatma Metni'nde aşağıda düzenlenen yöntemlerle Şirketimize iletmeniz durumunda Şirketimiz talebin niteliğine göre talebi en geç otuz gün içinde ücretsiz olarak sonuçlandıracaktır. Ancak, Kişisel Verileri Koruma Kurulunca bir ücret öngörülmesi halinde, Şirketimiz tarafından belirlenen tarifedeki ücret alınacaktır. Bu kapsamda kişisel veri sahipleri;
        </motion.p>
        <motion.div variants={fadeUp} className="bg-[#f8f8f8] p-6 mb-6">
          <ul className="space-y-2 text-[#555] text-[15px]">
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2 shrink-0">•</span>Kişisel veri işlenip işlenmediğini öğrenme,</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2 shrink-0">•</span>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2 shrink-0">•</span>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2 shrink-0">•</span>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2 shrink-0">•</span>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2 shrink-0">•</span>KVKK'nun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2 shrink-0">•</span>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
            <li className="flex items-start gap-2"><span className="text-[#ee7514] mt-2 shrink-0">•</span>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir.</li>
          </ul>
        </motion.div>
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-6">
          KVKK'nun 13. maddesinin 1. fıkrası gereğince, yukarıda belirtilen haklarınızı kullanmak ile ilgili talebinizi, yazılı veya Kişisel Verileri Koruma Kurulu'nun belirlediği diğer yöntemlerle Şirketimize iletebilirsiniz. Kişisel Verileri Koruma Kurulu, şu aşamada herhangi bir yöntem belirlemediği için, başvurunuzu, KVKK gereğince, yazılı olarak Şirketimize iletmeniz gerekmektedir. Bu çerçevede Şirketimize KVKK'nun 11. maddesi kapsamında yapacağınız başvurularda yazılı olarak başvurunuzu ileteceğiniz kanallar ve usuller aşağıda açıklanmaktadır.
        </motion.p>
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-6">
          Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler ile KVKK'nun 11. maddesinde belirtilen haklardan kullanmayı talep ettiğiniz hakkınıza yönelik açıklamalarınızı içeren talebinizi; <a href="https://www.bogazicigroup.com.tr" className="text-[#ee7514] hover:underline">www.bogazicigroup.com.tr</a> adresindeki formu doldurarak, formun imzalı bir nüshasını Barbaros Mah. Akzambak Sok. Uphill Towers A Blok No: 3/A İç Kapı No: 122 Ataşehir / İstanbul adresine kimliğinizi tespit edici belgeler ile bizzat elden iletebilir, noter kanalıyla veya KVKK'nda belirtilen diğer yöntemler ile gönderebilirsiniz.
        </motion.p>
        <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 italic">
          Şirketimizin KVKK'unda olabilecek değişiklikler ve Kişisel Verileri Koruma Kurulu tarafından belirlenecek yöntemler nedeni ile bu aydınlatma bildiriminde değişiklik yapma hakkı saklıdır.
        </motion.p>
      </motion.div>
    </SubPageLayout>
  );
}