import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

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

const allSubRoutes = navItems.flatMap((item) => item.subHrefs || []);
const socialLinks = [
  { name: "Facebook", url: "https://facebook.com/bogazicigrup", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { name: "X", url: "https://x.com/bogazicigrup", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
  { name: "Instagram", url: "https://instagram.com/bogazicigrup", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  )},
  { name: "LinkedIn", url: "https://linkedin.com/company/bogazici-grup", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
];

interface HeaderProps {
  activeNav?: string;
}

export default function Header({ activeNav }: HeaderProps) {
  const [location] = useLocation();
  const isHome = location === "/";
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
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl bg-white/98 backdrop-blur-sm" : isHome ? "bg-transparent" : "bg-white"}`}>
        {/* Ana nav */}
        <nav>
          <div className="max-w-[1250px] mx-auto px-4 flex items-center justify-between h-[68px] md:h-[76px]">
            <Link href="/" className="shrink-0 block">
              <img
                src="/images/bogazici/logo.png"
                alt="Boğaziçi Grup"
                className={`h-11 md:h-14 w-auto transition-all duration-300 ${isHome && !scrolled ? "brightness-0 invert" : ""}`}
              />
            </Link>

            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.sub.length > 0 && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.sub.length > 0 ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-[13px] font-bold tracking-wide uppercase transition-colors font-heading ${isActive(item.label) ? "text-accent" : isHome && !scrolled ? "text-white/90 hover:text-white" : "text-[#1a1a1a] hover:text-accent"}`}
                    >
                      {item.label}
                      <ChevronDown size={12} className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-4 py-2 text-[13px] font-bold tracking-wide uppercase transition-colors font-heading ${isActive(item.label) ? "text-accent" : isHome && !scrolled ? "text-white/90 hover:text-white" : "text-[#1a1a1a] hover:text-accent"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.sub.length > 0 && (
                    <div className={`absolute top-full left-0 bg-white shadow-xl shadow-black/5 min-w-[220px] border-t-2 border-accent transition-all duration-200 ${openDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                      <ul className="py-2">
                        {item.sub.map((s, si) => (
                          <li key={s}>
                            {item.subHrefs ? (
                              <Link
                                href={item.subHrefs[si]}
                                className={`block px-5 py-2.5 text-[12px] font-semibold tracking-wide uppercase transition-colors font-heading ${window.location.pathname === item.subHrefs[si] ? "text-accent bg-[#f0f9ee]" : "text-[#333] hover:bg-[#f8f8f8] hover:text-accent"}`}
                              >
                                {s}
                              </Link>
                            ) : (
                              <span className="block px-5 py-2.5 text-[#333] text-[12px] font-semibold tracking-wide uppercase transition-colors font-heading">{s}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <button className={`lg:hidden p-2 transition-colors ${isHome && !scrolled ? "text-white" : "text-navy"}`} onClick={() => setMobileOpen(true)} aria-label="Menüyü Aç">
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobil menü */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 w-[300px] max-w-full h-full bg-white flex flex-col overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <img src="/images/bogazici/logo.png" alt="Boğaziçi Grup" className="h-12 w-auto" />
              <button onClick={() => setMobileOpen(false)} className="text-navy hover:text-accent p-1"><X size={24} /></button>
            </div>
            <ul className="flex-1 py-4">
              {navItems.map((item) => (
                <li key={item.label} className="border-b border-gray-100">
                  {item.sub.length > 0 ? (
                    <>
                      <button
                        className={`w-full flex items-center justify-between px-5 py-3.5 text-[13px] font-bold tracking-wide uppercase text-left font-heading ${isActive(item.label) ? "text-accent" : "text-[#1a1a1a]"}`}
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <ul className="bg-gray-50">
                          {item.sub.map((s, si) => (
                            <li key={s}>
                              {item.subHrefs ? (
                                <Link
                                  href={item.subHrefs[si]}
                                  className={`block px-8 py-2.5 text-[12px] font-bold tracking-wide uppercase transition-colors font-heading ${window.location.pathname === item.subHrefs[si] ? "text-accent" : "text-[#4a4a4a] hover:text-accent"}`}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {s}
                                </Link>
                              ) : (
                                <span className="block px-8 py-2.5 text-[#4a4a4a] text-[12px] font-bold tracking-wide uppercase font-heading">{s}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-5 py-3.5 text-[13px] font-bold tracking-wide uppercase font-heading ${isActive(item.label) ? "text-accent" : "text-[#1a1a1a]"}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="p-5 border-t border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-gray-500 hover:text-accent transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Link href="/kvkk-aydinlatma-metni" className="text-gray-400 hover:text-accent transition-colors">KVKK</Link>
                <span className="text-gray-300">|</span>
                <Link href="/insan-kaynaklari" className="text-gray-400 hover:text-accent transition-colors">Kariyer</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
