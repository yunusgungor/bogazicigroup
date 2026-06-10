import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Tarihce() {
  return (
    <>
      <Helmet>
        <title>Tarihçe ve 85 Yıllık Tecrübe | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="1938'den günümüze Boğaziçi Grup'un başarı hikayesi, uluslararası projeleri ve inşaat sektöründeki köklü geçmişi." />
      </Helmet>
      <SubPageLayout
        title="TARİHÇE"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal" },
          { label: "Tarihçe" },
        ]}
      >
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }} className="max-w-4xl">
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
            <strong className="text-[#212a3c]">BOĞAZİÇİ GRUP</strong> temelleri 38'li yıllarda İstanbul merkezli olarak atılmış olup, esas olarak inşaat sektöründe faaliyetlere başlanmıştır. Gelişen organizasyon yapısı ve ulaşılan performans seviyesi ile ulusal olduğu kadar uluslararası platformlarda da özellikle inşaat ve ticaret alanlarında önemli yerlere ulaşmışlardır.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
            <strong className="text-[#212a3c]">BOĞAZİÇİ GRUP</strong>, İnşaat ve Ticaret, Otomotiv, Turizm ve Otel Yönetimi, Gıda ve Tarım Ürünleri olarak dört ana faaliyet alanına yayılmıştır.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
            1938 yılında Komandit şirket olarak uluslararası bir genel müteahhitlik firması olma yolunda kurulmuş ve faaliyetinin başlangıcından bu yana büyük çaplı ve yüksek teknoloji ürünü birçok uluslararası proje ile adını duyurmuştur.
          </motion.p>

          <motion.h3 variants={fadeUp} className="text-lg font-bold text-[#212a3c] mt-10 mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>1940-1970 Dönemi</motion.h3>
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
            Yurt içinde birçok konut, kamu ve iktisadi binaları, köprü yapımı, enerji nakil hatları ile telefon hat bağlantıları çalışmalarında faaliyetlerde bulunmuştur. Bu dönemde göze çarpan projelerin başında Malatya Köprü İnşaatları, Türkiye 154 Kv Enerji Nakil Hatları ve Nato Altyapı Projesi Türkiye'nin ilk telefon hat bağlantı projeleri olmuştur.
          </motion.p>

          <motion.h3 variants={fadeUp} className="text-lg font-bold text-[#212a3c] mt-10 mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>1970-2000 Dönemi</motion.h3>
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
            Türk Ekonomisi'nde yaşanan gelişme paralelinde BOĞAZİÇİ, gemi nakliyeciliğinin popülaritesini artmasını fırsat bilerek uluslararası platformlardaki faaliyetlerine başlamış ve faaliyet noktasını Libya, Suudi Arabistan, Mısır ve Tunus ülkelerine kaydırmış ve ulaşılan başarı seviyesi ile Uluslararası Türk Müteahhitler arasında hak edilen pozisyonlara ulaşmıştır.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
            1970-2000 döneminin göze çarpan bazı projeleri, Libya Trablus Limanı Projesi, Suudi Arabistan Mekke Muna Tünelleri, Mısır Liman Genişletme Projeleri, Tunus Gabes Limanı Projesi ve Pakistan'daki İndus Karayolu Projesi olarak sıralanmaktadır.
          </motion.p>

          <motion.h3 variants={fadeUp} className="text-lg font-bold text-[#212a3c] mt-10 mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>2000'li Yıllar</motion.h3>
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
            Ulaşılan pozisyonun da bir sonucu olarak, BOĞAZİÇİ uluslararası faaliyetlerini Arap ülkelerine yöneltmiştir. Bu dönemde Suudi Arabistan'da Manifa Geçit Yolu Projesi, Umman Limanı, Katar'da Konteyner Limanı taahhütlerinde bulunmuştur.
          </motion.p>

          <motion.h3 variants={fadeUp} className="text-lg font-bold text-[#212a3c] mt-10 mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>21. Yüzyıl</motion.h3>
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
            İngiltere, Amerika Birleşik Devletleri gibi Avrupa şirketlerinde konut, villa üretimi yanı sıra Türkiye'de birçok taahhüt işlerinde bulunmuştur.
          </motion.p>
          <motion.div variants={fadeUp} className="bg-[#f8f8f8] p-6 mb-8 border-l-4 border-[#6cbe59]">
            <ul className="space-y-2 text-[#555] text-[15px]">
              <li className="flex items-start gap-2"><span className="text-[#6cbe59] mt-2">•</span>Çağlayan Adliye Sarayı</li>
              <li className="flex items-start gap-2"><span className="text-[#6cbe59] mt-2">•</span>Eczacıbaşı Ormanada Villaları</li>
              <li className="flex items-start gap-2"><span className="text-[#6cbe59] mt-2">•</span>Garanti Bankası Teknoloji Kampüsü</li>
              <li className="flex items-start gap-2"><span className="text-[#6cbe59] mt-2">•</span>İŞGYO Tuzla Ticaret Merkezi</li>
              <li className="flex items-start gap-2"><span className="text-[#6cbe59] mt-2">•</span>Kartal Lütfi Kırdar Eğitim ve Araştırma Hastanesi</li>
              <li className="flex items-start gap-2"><span className="text-[#6cbe59] mt-2">•</span>Teknopark İstanbul 3.Etap İnşaatı</li>
              <li className="flex items-start gap-2"><span className="text-[#6cbe59] mt-2">•</span>Yılda 500.000 m² inşaat hedefi ile üretilen İstanbul'un çeşitli ilçelerinde üretilen gayrimenkul inşaatları</li>
            </ul>
          </motion.div>

          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
            BOĞAZİÇİ A.Ş. yukarıda kısaca değinilen kabiliyetleri ile fizibilite çalışmalarından yüksek teknoloji gereksinimli anahtar teslim endüstriyel tesis projelerine kadar her türlü müteahhitlik işini büyük bir başarı ile gerçekleştirecek kapasitedir.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 italic">
            Başarılarla dolu geçmişi, liderlik ve güvenilirliğin sembolü haline gelen ismi, BOĞAZİÇİ'nin 21. Yüzyıl'da da gelişme sürecine ve büyük çaplı projelerde oynadığı lider rolüne aynı hızla devam edeceğinin en büyük kanıtıdır.
          </motion.p>
        </motion.div>
      </SubPageLayout>
    </>
  );
}