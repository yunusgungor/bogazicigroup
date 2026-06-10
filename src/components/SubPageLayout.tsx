import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronRight,
} from "lucide-react";
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
        <div className="relative h-[200px] md:h-[260px] flex items-end overflow-hidden" style={{ background: "linear-gradient(135deg, #212a3c 0%, #2e3d55 100%)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)" }} />
          <div className="absolute top-0 left-0 w-full h-1 bg-[#6cbe59]" />
          <div className="max-w-[1250px] mx-auto px-4 pb-8 md:pb-10 w-full">
            {breadcrumbs && (
              <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "'Raleway', sans-serif" }}>
                {breadcrumbs.map((crumb, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <ChevronRight size={12} />}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-[#6cbe59] transition-colors">{crumb.label}</Link>
                    ) : (
                      <span className={crumb.label === breadcrumbs[breadcrumbs.length - 1]?.label ? "text-[#6cbe59]" : ""}>{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              {title}
            </motion.h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 56 }} transition={{ duration: 0.6, delay: 0.4 }} className="h-1 bg-[#6cbe59] mt-3" />
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