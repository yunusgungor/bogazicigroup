import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { fadeUp, stagger } from "@/lib/motion";

const gelecekProjeler = [
  {
    name: "Ramada Encore",
    tag: "Otel & Konaklama",
    category: "Turizm",
    desc: "Modern mimari anlayışı ile tasarlanan, iş ve turizm amaçlı konaklamaya yönelik prestijli otel projesi.",
    img: "/images/bogazici/turizm.png",
  },
  {
    name: "Göcek Marina Resort",
    tag: "Marina & Tatil Köyü",
    category: "Turizm",
    desc: "Göcek'te lüks marina ve tatil köyü konseptiyle planlanan entegre turizm projesi.",
    img: "/images/bogazici/project-2.png",
  },
  {
    name: "Levent 199",
    tag: "Konut Projesi",
    category: "Gayrimenkul",
    desc: "Levent'te yükselen modern yaşam alanı, prestijli konut ve ticari üniteler.",
    img: "/images/bogazici/project-1.png",
  },
];

export default function GelecekProjeler() {
  return (
    <>
      <Helmet>
        <title>Gelecek Projeler | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup'un planlama ve geliştirme aşamasındaki yeni gayrimenkul ve turizm projelerini keşfedin." />
      </Helmet>
      <SubPageLayout
        title="GELECEK PROJELER"
        activeNav="Projeler"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Projeler" },
          { label: "Gelecek Projeler" },
        ]}
      >
        {/* Sub nav */}
        <div className="border-b border-gray-200 mb-12 -mt-4">
          <div className="flex items-center gap-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            <Link href="/projeler/gelecek" className="shrink-0 px-5 py-4 text-xs font-bold uppercase tracking-wider border-b-2 border-[#6cbe59] text-[#212a3c] transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Gelecek Projeler
            </Link>
            <Link href="/projeler/tamamlanan" className="shrink-0 px-5 py-4 text-xs font-bold uppercase tracking-wider border-b-2 border-transparent text-gray-500 hover:text-[#212a3c] hover:border-gray-300 transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
              Tamamlanan Projeler
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gelecekProjeler.map((project) => (
            <motion.article key={project.name} variants={fadeUp} className="group bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#6cbe59] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider" style={{ fontFamily: "'Raleway', sans-serif" }}>{project.tag}</span>
              </div>
              <div className="p-6">
                <p className="text-[#6cbe59] text-[10px] font-bold uppercase tracking-widest mb-2" style={{ fontFamily: "'Raleway', sans-serif" }}>{project.category}</p>
                <h2 className="text-xl font-bold text-[#212a3c] mb-3 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>{project.name}</h2>
                <div className="w-8 h-0.5 bg-[#6cbe59] mb-4 transition-all duration-300 group-hover:w-16" />
                <p className="text-[#666] text-sm leading-relaxed mb-6">{project.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SubPageLayout>
    </>
  );
}
