import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface SubPageLayoutProps {
  title: string;
  children: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  activeNav?: string;
}

export default function SubPageLayout({ title, children, breadcrumbs, activeNav }: SubPageLayoutProps) {
  return (
    <div className="bg-white text-foreground antialiased">
      <Header activeNav={activeNav} />

      <div className="relative pt-[68px] md:pt-[112px]">
        <div className="relative flex items-end overflow-hidden min-h-[200px] md:min-h-[260px]" style={{ background: "linear-gradient(135deg, #1a2332 0%, #212a3c 40%, #2e3d55 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
          <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
          <div className="max-w-[1250px] mx-auto px-4 pb-8 md:pb-10 w-full relative z-10">
            {breadcrumbs && (
              <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                {breadcrumbs.map((crumb, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {i > 0 && <ChevronRight size={12} />}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-accent transition-colors">{crumb.label}</Link>
                    ) : (
                      <span className={crumb.label === breadcrumbs[breadcrumbs.length - 1]?.label ? "text-accent" : ""}>{crumb.label}</span>
                    )}
                  </span>
                ))}
              </div>
            )}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white font-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              {title}
            </motion.h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 56 }} transition={{ duration: 0.6, delay: 0.4 }} className="h-1 bg-accent mt-3" />
          </div>
        </div>
      </div>

      <main className="max-w-[1250px] mx-auto px-4 py-12 md:py-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
