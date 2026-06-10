import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <div className="max-w-md">
        <div className="text-[#212a3c] font-bold leading-none mb-6" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(6rem, 15vw, 10rem)" }}>
          404
        </div>
        <div className="w-14 h-1 bg-[#ee7514] mx-auto mb-8" />
        <h1 className="text-2xl font-bold text-[#212a3c] mb-4 uppercase tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Sayfa Bulunamadı
        </h1>
        <p className="text-[#666] text-sm leading-relaxed mb-10">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen adresi kontrol edin veya ana sayfaya dönün.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#212a3c] hover:bg-[#ee7514] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-200 active:scale-[0.97]"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          <ArrowLeft size={16} />
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}