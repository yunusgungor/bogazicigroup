import { Link } from "wouter";
import { MapPin, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-[1250px] mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-white/45 text-sm leading-7 mb-6">1938'den bu yana inşaat sektörünün güvenilir ismi.</p>
          <div className="flex items-center gap-3">
            {(["Facebook", "Twitter", "Instagram", "Youtube"] as const).map((l) => (
              <a key={l} href="#" aria-label={l} className="w-9 h-9 flex items-center justify-center border border-white/15 hover:border-accent hover:text-accent text-white/40 transition-all">
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
            <li><Link href="/kurumsal/hakkimizda" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Hakkımızda</Link></li>
            <li><Link href="/kurumsal/onursal-baskan" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Onursal Başkan</Link></li>
            <li><Link href="/kurumsal/tarihce" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Tarihçe</Link></li>
            <li><Link href="/kurumsal/vizyon-misyon" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Vizyon & Misyon</Link></li>
            <li><Link href="/kurumsal/kalite-politikamiz" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Kalite Politikamız</Link></li>
            <li><Link href="/kurumsal/belgeler" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Belgeler</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>Faaliyet Alanları</h5>
          <ul className="space-y-3">
            <li><Link href="/faaliyet-alanlari/gayrimenkul" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Gayrimenkul</Link></li>
            <li><Link href="/faaliyet-alanlari/taahhut" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Taahhüt</Link></li>
            <li><Link href="/faaliyet-alanlari/turizm" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Turizm</Link></li>
          </ul>
          <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5 mt-8" style={{ fontFamily: "'Oswald', sans-serif" }}>Kariyer</h5>
          <ul className="space-y-3">
            <li><Link href="/insan-kaynaklari" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />İnsan Kaynakları</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>Projeler</h5>
          <ul className="space-y-3">
            <li><Link href="/projeler/gelecek" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Gelecek Projeler</Link></li>
            <li><Link href="/projeler/tamamlanan" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Tamamlanan Projeler</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-5" style={{ fontFamily: "'Oswald', sans-serif" }}>İletişim</h5>
          <div className="space-y-4">
            <div className="flex gap-3 items-start"><MapPin size={15} className="text-accent shrink-0 mt-0.5" /><p className="text-white/45 text-sm leading-6">Barbaros Mah. Akzambak Sok.<br />Uphill Towers A Blok No: 3/A<br />Ataşehir / İstanbul</p></div>
            <div className="flex gap-3 items-center"><Mail size={15} className="text-accent shrink-0" /><a href="mailto:info@bogazicigroup.com.tr" className="text-white/45 hover:text-accent text-sm transition-colors">info@bogazicigroup.com.tr</a></div>
          </div>
          <div className="mt-6 space-y-3">
            <Link href="/iletisim/bize-ulasin" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Bize Ulaşın</Link>
            <Link href="/iletisim/satis-ofisleri" className="text-white/45 hover:text-accent text-sm transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-accent rounded-full shrink-0" />Satış Ofisleri</Link>
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
  );
}
