import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Sayfa Bulunamadı (404) | Boğaziçi Grup A.Ş.</title>
        <meta name="description" content="Aradığınız sayfa bulunamadı. Boğaziçi Grup ana sayfasına dönmek için tıklayın." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex items-center justify-center text-center px-4 pt-[120px]">
          <div className="max-w-md">
            <div className="text-navy font-bold leading-none mb-6 font-display" style={{ fontSize: "clamp(6rem, 15vw, 10rem)" }}>
              404
            </div>
            <div className="w-14 h-1 bg-accent mx-auto mb-8" />
            <h1 className="text-2xl font-bold text-navy mb-4 uppercase tracking-wide font-display">
              Sayfa Bulunamadı
            </h1>
            <p className="text-[#666] text-sm leading-relaxed mb-10">
              Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen adresi kontrol edin veya ana sayfaya dönün.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-navy hover:bg-accent text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.97] font-display"
              >
                <ArrowLeft size={16} />
                Ana Sayfaya Dön
              </Link>
              <Link
                href="/iletisim/bize-ulasin"
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-accent hover:text-accent text-[#555] px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all font-display"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
