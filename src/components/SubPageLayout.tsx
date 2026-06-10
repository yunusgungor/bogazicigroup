import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ChevronRight,
  MapPin, Mail, Facebook, Twitter, Instagram, Youtube
} from "lucide-react";
import Header from "@/components/Header";

interface SubPageLayoutProps {
  title: string;
  children: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  activeNav?: string;
}

export default function SubPageLayout({ title, children, breadcrumbs, activeNav }: SubPageLayoutProps) {
  return (
    <div className="bg-white text-[#1a1a1a] antialiased" style={{ fontFamily: "'Montserrat','Geneva',Arial,sans-serif" }}>
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

      <footer className="bg-[#212a3c] text-white">
        <div className="max-w-[1250px] mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <img src="/images/bogazici/logo.png" alt="Boğaziçi Grup" className="h-11 w-auto mb-6 opacity-90" />
            <p className="text-white/45 text-sm leading-7 mb-6">1938'den bu yana inşaat sektörünün güvenilir ismi.</p>
            <div className="flex items-center gap-3">
              {(["Facebook", "Twitter", "Instagram", "Youtube"] as const).map((l) => (
                <a key={l} href="#" aria-label={l} className="w-9 h-9 flex items-center justify-center border border-white/15 hover:border-[#6cbe59] hover:text-[#6cbe59] text-white/40 transition-all">
                  {l === "Facebook" && <Facebook size={14} />}
                  {l === "Twitter" && <Twitter size={14} />}
                  {l === "Instagram" && <Instagram size={14} />}
                  {l === "Youtube" && <Youtube size={14} />}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>Kurumsal</h5>
            <ul className="space-y-3">
              <li><Link href="/kurumsal/hakkimizda" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Hakkımızda</Link></li>
              <li><Link href="/kurumsal/onursal-baskan" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Onursal Başkan</Link></li>
              <li><Link href="/kurumsal/tarihce" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Tarihçe</Link></li>
              <li><Link href="/kurumsal/vizyon-misyon" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Vizyon & Misyon</Link></li>
              <li><Link href="/kurumsal/kalite-politikamiz" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Kalite Politikamız</Link></li>
              <li><Link href="/kurumsal/belgeler" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Belgeler</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>Faaliyet Alanları</h5>
            <ul className="space-y-3">
              <li><Link href="/faaliyet-alanlari/gayrimenkul" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Gayrimenkul</Link></li>
              <li><Link href="/faaliyet-alanlari/taahhut" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Taahhüt</Link></li>
              <li><Link href="/faaliyet-alanlari/turizm" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Turizm</Link></li>
            </ul>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5 mt-8" style={{ fontFamily: "'Oswald', sans-serif" }}>Kariyer</h5>
            <ul className="space-y-3">
              <li><Link href="/insan-kaynaklari" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />İnsan Kaynakları</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>Projeler</h5>
            <ul className="space-y-3">
              <li><Link href="/projeler/gelecek" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Gelecek Projeler</Link></li>
              <li><Link href="/projeler/tamamlanan" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Tamamlanan Projeler</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>İletişim</h5>
            <div className="space-y-4">
              <div className="flex gap-3 items-start"><MapPin size={15} className="text-[#6cbe59] shrink-0 mt-0.5" /><p className="text-white/45 text-sm leading-6">Barbaros Mah. Akzambak Sok.<br />Uphill Towers A Blok No: 3/A<br />Ataşehir / İstanbul</p></div>
              <div className="flex gap-3 items-center"><Mail size={15} className="text-[#6cbe59] shrink-0" /><a href="mailto:info@bogazicigroup.com.tr" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors">info@bogazicigroup.com.tr</a></div>
            </div>
            <div className="mt-6 space-y-3">
              <Link href="/iletisim/bize-ulasin" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Bize Ulaşın</Link>
              <Link href="/iletisim/satis-ofisleri" className="text-white/45 hover:text-[#6cbe59] text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#6cbe59] rounded-full shrink-0" />Satış Ofisleri</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8">
          <div className="max-w-[1250px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/30">
            <span>© 2026 Boğaziçi Grup A.Ş. — Tüm Hakları Saklıdır.</span>
            <div className="flex items-center gap-5">
              <a href="/kvkk-aydinlatma-metni" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}