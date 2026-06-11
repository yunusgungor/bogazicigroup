import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export default function OnursalBaskan() {
  return (
    <>
      <Helmet>
        <title>Onursal Başkan | Yusuf Yılmaz Beyaz | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup Onursal Başkanı Yusuf Yılmaz Beyaz'ın mesajını okuyun. İnşaat sektöründeki vizyonu ve gelecek hedefleri." />
      </Helmet>
      <SubPageLayout
        title="ONURSAL BAŞKAN"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal" },
          { label: "Onursal Başkan" },
        ]}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-[#212a3c] rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0" style={{ fontFamily: "'Oswald', sans-serif" }}>YB</div>
              <div>
                <h2 className="text-xl font-bold text-[#212a3c]" style={{ fontFamily: "'Oswald', sans-serif" }}>Yusuf Yılmaz BEYAZ</h2>
                <p className="text-[#6cbe59] text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Raleway', sans-serif" }}>Onursal Başkan</p>
              </div>
            </div>

            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              Covid-19 pandemisi ile başlayan gelişmeler, tüm dünyada olduğu gibi ülkemizde de zorlu bir sürecin yaşanmasına neden oldu. Salgının yarattığı şok dalgasının üzerinden geçen iki yılın sonunda, enflasyonun tetiklenmesi ve üreticilerin sipariş modellerinde değişikliğe gitmeleri ekonomik durgunluk riskini beraberinde getirdi.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              2023 yılında muhtemelen gelişmiş ülke merkez bankaları, faiz oranlarını yükseltmekle birlikte para arzını da azaltarak enflasyonla mücadelenin çözümlerini üretmeye çalışacaklar. Yılın ortasından itibaren enflasyonun dünya genelinde düşmeye başlayacağı beklense de, küresel emtia, tarım-gıda, enerji fiyatları ve lojistik maliyetlere bağlı olarak küresel enflasyon riskinin yine de çok önemli bir sorun teşkil edeceği görülüyor.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              Tüm dünyayı etkisi altına alan "enerji krizi" ile, Rusya-Ukrayna savaşı enerji ve doğalgaz tüketim maliyetlerinin artmasıyla birlikte başta Avrupa Birliği olmak üzere bütün ülkelerin sıkıntı yaşamasına neden oldu. Bu kapsamda hızla yenilenebilir enerji yatırımlarına yönelinmesi yanında bu sektörde de kritik değişimlerin yaşanması bekleniyor.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              Bunun yanı sıra küresel iklim krizi ve küresel iklim güvenliği, gelecek yılların en önemli dikkat çekecek gündemi olacaktır. Bunun sebebi ile enerji, ulaştırma, konut, tarım gibi sektörlerde ve imalat sanayiinde yeni yaklaşımları öncelikli hale getirecektir. Türkiye'nin bu konu üzerinde durarak gelişmeleri yakından takip etmesi ile Paris Antlaşması'nın bir parçası oldu ve 2053 yılı hedefini "net sıfır karbon" olarak açıkladı.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              2022 yılında gayrimenkul sektöründe beklenen konut maliyetlerindeki artışa rağmen, döviz yatırımı bulunan yerli ve yabancı yatırımcıların bir kısmının döviz pozisyonundan çıkarak gayrimenkule yönelmesini umuyoruz.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-5">
              Önceliklerimiz arasında güçlü nakit akışını sağlayan etkin bir finansal yönetim, kaynakların verimli kullanımına yönelik stratejik planlama ve sağlıklı istihdam artışıyla çalışan memnuniyetini artırmak yer almaktadır.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#555] text-[15px] leading-7 mb-8 italic">
              Sevgi ve Saygılarımla,<br />
              <strong>Yusuf Yılmaz BEYAZ</strong>
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#f4f4f4] hidden sm:block" />
              <img src="/images/bogazici/project-1.png" alt="Yusuf Yılmaz Beyaz" className="relative z-10 w-full aspect-[4/3] object-cover shadow-2xl" />
            </div>
            <div className="mt-10 bg-[#f8f8f8] border-l-4 border-[#6cbe59] p-6">
              <h3 className="text-lg font-bold text-[#212a3c] mb-2 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>Tarihçe</h3>
              <p className="text-[#555] text-sm leading-7 mb-4">
                BOĞAZİÇİ GRUP temelleri 38'li yıllarda İstanbul merkezli olarak atılmış olup, esas olarak inşaat sektöründe faaliyetlere başlanmıştır. Gelişen organizasyon yapısı ve ulaşılan performans seviyesi ile ulusal olduğu kadar uluslararası platformlarda da özellikle inşaat ve ticaret alanlarında önemli yerlere ulaşmışlardır.
              </p>
              <Link href="/kurumsal/tarihce" className="inline-flex items-center gap-1 text-[#6cbe59] text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all" style={{ fontFamily: "'Raleway', sans-serif" }}>
                Bilgi için tıklayın <ChevronRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </SubPageLayout>
    </>
  );
}