import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Menu, X, ChevronDown,
  Facebook, Twitter, Instagram, Youtube
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  sub: string[];
  subHrefs?: string[];
}

const navItems: NavItem[] = [
  { label: "Kurumsal", href: "#kurumsal", sub: ["Hakkımızda", "Onursal Başkan", "Tarihçe", "Vizyon & Misyon", "Kalite Politikamız", "Belgeler"], subHrefs: ["/kurumsal/hakkimizda", "/kurumsal/onursal-baskan", "/kurumsal/tarihce", "/kurumsal/vizyon-misyon", "/kurumsal/kalite-politikamiz", "/kurumsal/belgeler"] },
  { label: "Faaliyet Alanları", href: "#faaliyetler", sub: ["Gayrimenkul", "Taahhüt", "Turizm"], subHrefs: ["/faaliyet-alanlari/gayrimenkul", "/faaliyet-alanlari/taahhut", "/faaliyet-alanlari/turizm"] },
  { label: "Projeler", href: "#projeler", sub: ["Gelecek Projeler", "Tamamlanan Projeler"], subHrefs: ["/projeler/gelecek", "/projeler/tamamlanan"] },
  { label: "Makine Parkı", href: "/makine-parki", sub: [] },
  { label: "İletişim", href: "#iletisim", sub: ["Bize Ulaşın", "Satış Ofisleri"], subHrefs: ["/iletisim/bize-ulasin", "/iletisim/satis-ofisleri"] },
];

interface HeaderProps {
  activeNav?: string;
}

export default function Header({ activeNav }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (label: string) => {
    if (activeNav === label) return true;
    return navItems.some(item => item.label === label && item.subHrefs?.some(h => window.location.pathname === h));
  };

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : ""} bg-white`}>
        <div className="bg-[#f4f4f4] border-b border-gray-200 hidden md:block">
          <div className="max-w-[1250px] mx-auto px-4 flex items-center justify-between h-9 text-[11px] text-gray-500">
            <div className="flex items-center gap-6">
              <Link href="/kvkk-aydinlatma-metni" className="hover:text-[#6cbe59] transition-colors">KVKK Aydınlatma Metni</Link>
              <Link href="/insan-kaynaklari" className="hover:text-[#6cbe59] transition-colors">İnsan Kaynakları</Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 text-gray-500">
                <a href="#" aria-label="Facebook" className="hover:text-[#6cbe59] transition-colors"><Facebook size={13} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-[#6cbe59] transition-colors"><Twitter size={13} /></a>
                <a href="#" aria-label="Instagram" className="hover:text-[#6cbe59] transition-colors"><Instagram size={13} /></a>
                <a href="#" aria-label="Youtube" className="hover:text-[#6cbe59] transition-colors"><Youtube size={13} /></a>
              </div>
              <div className="border-l border-gray-300 pl-4 flex items-center gap-2 font-bold text-[11px]">
                <button className="text-[#6cbe59]">TR</button>
                <span className="text-gray-400">|</span>
                <button className="hover:text-[#6cbe59] transition-colors">EN</button>
              </div>
            </div>
          </div>
        </div>

        <nav>
          <div className="max-w-[1250px] mx-auto px-4 flex items-center justify-between h-[68px] md:h-[76px]">
            <Link href="/" className="shrink-0">
              <img
                src="/images/bogazici/logo.png"
                alt="Boğaziçi Grup"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.sub.length > 0 && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-[13px] font-bold tracking-wide uppercase transition-colors ${isActive(item.label) ? "text-[#6cbe59]" : "text-[#1a1a1a] hover:text-[#6cbe59]"}`}
                    style={{ fontFamily: "'Raleway', sans-serif" }}
                  >
                    {item.label}
                    {item.sub.length > 0 && <ChevronDown size={12} className="opacity-60 group-hover:opacity-100 transition-opacity" />}
                  </a>
                  {item.sub.length > 0 && (
                    <div className={`absolute top-full left-0 bg-white shadow-xl min-w-[220px] border-t-2 border-[#6cbe59] transition-all duration-200 ${openDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                      <ul className="py-2">
                        {item.sub.map((s, si) => (
                          <li key={s}>
                            {item.subHrefs ? (
                              <Link href={item.subHrefs[si]} className={`block px-5 py-2.5 text-[12px] font-semibold tracking-wide uppercase transition-colors ${window.location.pathname === item.subHrefs[si] ? "text-[#6cbe59] bg-orange-50" : "text-[#333] hover:bg-[#f8f8f8] hover:text-[#6cbe59]"}`} style={{ fontFamily: "'Raleway', sans-serif" }}>
                                {s}
                              </Link>
                            ) : (
                              <a href="#" className="block px-5 py-2.5 text-[#333] hover:bg-[#f8f8f8] hover:text-[#6cbe59] text-[12px] font-semibold tracking-wide uppercase transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                {s}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <button className="lg:hidden text-[#212a3c] p-2" onClick={() => setMobileOpen(true)} aria-label="Menüyü Aç">
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 w-[300px] max-w-full h-full bg-white flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <img
                src="/images/bogazici/logo.png"
                alt="Boğaziçi Grup"
                className="h-12 w-auto"
              />
              <button onClick={() => setMobileOpen(false)} className="text-[#212a3c]"><X size={24} /></button>
            </div>
            <ul className="flex-1 py-4">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-gray-100">
                  {item.sub.length > 0 ? (
                    <>
                      <button
                        className={`w-full flex items-center justify-between px-5 py-3.5 text-[13px] font-bold tracking-wide uppercase text-left ${isActive(item.label) ? "text-[#6cbe59]" : "text-[#1a1a1a]"}`}
                        style={{ fontFamily: "'Raleway', sans-serif" }}
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <ul className="bg-gray-50">
                          {item.sub.map((s, si) => (
                            <li key={s}>
                              {item.subHrefs ? (
                                <Link href={item.subHrefs[si]} className={`block px-8 py-2.5 text-[12px] font-bold tracking-wide uppercase transition-colors ${window.location.pathname === item.subHrefs[si] ? "text-[#6cbe59]" : "text-[#4a4a4a] hover:text-[#6cbe59]"}`} style={{ fontFamily: "'Raleway', sans-serif" }} onClick={() => setMobileOpen(false)}>
                                  {s}
                                </Link>
                              ) : (
                                <a href="#" className="block px-8 py-2.5 text-[#4a4a4a] hover:text-[#6cbe59] text-[12px] font-bold tracking-wide uppercase transition-colors" style={{ fontFamily: "'Raleway', sans-serif" }}>
                                  {s}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="block px-5 py-3.5 text-[#1a1a1a] text-[13px] font-bold tracking-wide uppercase" style={{ fontFamily: "'Raleway', sans-serif" }} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="p-5 border-t border-gray-200 flex items-center gap-4">
              <button className="text-[#6cbe59] text-sm font-bold">TR</button>
              <span className="text-gray-300">|</span>
              <button className="text-gray-500 hover:text-[#212a3c] text-sm font-bold">EN</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}