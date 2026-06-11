import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { fadeUp } from "@/lib/motion";

const machines = [
  { name: "Ekskavatör", brand: "Komatsu", model: "PC220", year: "2011" },
  { name: "Ekskavatör", brand: "Komatsu", model: "PC300", year: "2008" },
  { name: "Ekskavatör", brand: "Hidromek", model: "HDM300", year: "2013" },
  { name: "Ekskavatör", brand: "Simitumo", model: "SH350", year: "2012" },
  { name: "Ekskavatör", brand: "Hidromek", model: "HDM 370", year: "2013" },
  { name: "Ekskavatör", brand: "Caterpillar", model: "CAT336", year: "2012" },
  { name: "Ekskavatör", brand: "Caterpillar", model: "CAT336", year: "2015" },
  { name: "Ekskavatör", brand: "Caterpillar", model: "CAT329", year: "2015" },
  { name: "Greyder", brand: "Caterpillar", model: "CAT120 M", year: "2011" },
  { name: "Greyder", brand: "Caterpillar", model: "CAT120 M", year: "2015" },
  { name: "Silindir", brand: "Bomag", model: "D-4", year: "2013" },
  { name: "Silindir", brand: "Bomag", model: "D-4", year: "2013" },
  { name: "Yükleyici", brand: "Caterpillar", model: "CAT950 H", year: "2014" },
  { name: "Yükleyici", brand: "Hidromek", model: "HMK 102S", year: "2013" },
  { name: "Yükleyici", brand: "Hidromek", model: "HMK 102S", year: "2015" },
  { name: "Kamyon", brand: "Mercedes", model: "3340", year: "2012" },
  { name: "Kamyon", brand: "Mercedes", model: "3340", year: "2012" },
  { name: "Kamyon", brand: "Mercedes", model: "3340", year: "2013" },
  { name: "Kamyon", brand: "Man", model: "41400", year: "2013" },
  { name: "Kamyon", brand: "Man", model: "41400", year: "2013" },
  { name: "Kamyon", brand: "Man", model: "41400", year: "2015" },
  { name: "Kamyon", brand: "Man", model: "41400", year: "2015" },
  { name: "Kamyon", brand: "Man", model: "41400", year: "2015" },
  { name: "Kamyon", brand: "Man", model: "41400", year: "2015" },
  { name: "Kamyon", brand: "Man", model: "41400", year: "2015" },
  { name: "Çekici & Doli", brand: "Man", model: "33480", year: "2015" },
  { name: "Dozer", brand: "Caterpillar", model: "D8", year: "2015" },
];

export default function MakineParki() {
  return (
    <>
      <Helmet>
        <title>Geniş Makine Parkı ve Ekipman Filosu | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup'un modern ve güçlü makine parkı; ekskavatörler, greyderler, vinçler ve ağır taşıma araçları listesi." />
      </Helmet>
      <SubPageLayout
        title="MAKİNE PARKI"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Makine Parkı" },
        ]}
      >
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#212a3c] text-white text-xs uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>
                  <th className="text-left px-4 py-3 font-semibold">Makine Cinsi</th>
                  <th className="text-left px-4 py-3 font-semibold">Marka</th>
                  <th className="text-left px-4 py-3 font-semibold">Model</th>
                  <th className="text-left px-4 py-3 font-semibold">Yılı</th>
                </tr>
              </thead>
              <tbody>
                {machines.map((m, i) => (
                  <motion.tr key={i} variants={fadeUp} className="border-b border-gray-100 hover:bg-[#f8f8f8] transition-colors text-sm text-[#555]">
                    <td className="px-4 py-3 font-medium text-[#333]">{m.name}</td>
                    <td className="px-4 py-3">{m.brand}</td>
                    <td className="px-4 py-3">{m.model}</td>
                    <td className="px-4 py-3">{m.year}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#999] text-xs mt-6 italic">*Güncel makine parkı listesi yansıtılmıştır.</p>
        </motion.div>
      </SubPageLayout>
    </>
  );
}