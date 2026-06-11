import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import SubPageLayout from "@/components/SubPageLayout";
import { fadeUp, staggerSlow } from "@/lib/motion";
import { allProjects, tagColors } from "@/data/projects";

const projects = allProjects.filter((p) => p.tag === "Gayrimenkul");

export default function Gayrimenkul() {
  return (
    <>
      <Helmet>
        <title>Gayrimenkul Geliştirme ve Projeler | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Boğaziçi Grup'un modern yaşam alanları ve prestijli gayrimenkul projeleri hakkında detaylı bilgi alın. Levent 199, Ormanada ve daha fazlası." />
      </Helmet>
      <SubPageLayout
        title="GAYRİMENKUL"
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Faaliyet Alanları" },
          { label: "Gayrimenkul" },
        ]}
      >
        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden shadow-lg">
                <img src="/images/bogazici/gayrimenkul.png" alt="Gayrimenkul Projeleri" className="w-full h-full object-cover" style={{ minHeight: "300px" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212a3c]/30 to-transparent" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-[#555] text-[15px] leading-7 mb-6">
                Yurtiçinde ve yurtdışında inşaa ettiğimiz projelerde kaliteli yapı ve zamanında teslim prensiplerimizden hiç ödün vermeden üretim yapmaya devam ediyoruz.
              </p>
            </motion.div>
          </div>

          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-[#212a3c] mb-10 uppercase font-display">
            Tamamlanan Gayrimenkul Projelerimizden Bazıları
          </motion.h2>

          <motion.div key="gayrimenkul" initial="hidden" animate="visible" variants={staggerSlow}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.name} variants={fadeUp}
                className="group bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden block"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white/80 text-[10px] font-semibold tracking-wide font-heading">{project.location}</span>
                  <span className="absolute top-3 right-3 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider font-heading" style={{ background: tagColors[project.tag] || "#6cbe59" }}>{project.tag}</span>
                </div>
                <div className="p-4">
                  <div className="w-6 h-0.5 bg-accent mb-3 transition-all duration-300 group-hover:w-12" />
                  <h3 className="text-base font-bold text-navy uppercase leading-tight group-hover:text-accent transition-colors font-display">{project.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14 bg-[#f8f8f8] border-l-4 border-[#6cbe59] px-8 py-6">
            <p className="text-[#777] text-sm leading-7 font-heading">
              Detaylı proje listesi için <Link href="/projeler/tamamlanan" className="text-[#6cbe59] font-bold hover:underline">Tamamlanan Projeler</Link> sayfamızı ziyaret edebilirsiniz.
            </p>
          </motion.div>
        </motion.div>
      </SubPageLayout>
    </>
  );
}
