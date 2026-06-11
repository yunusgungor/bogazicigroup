export type ProjectCategory = "Tümü" | "Gayrimenkul" | "Taahhüt" | "Turizm" | "Uluslararası";

export interface Project {
  name: string;
  tag: ProjectCategory;
  location: string;
  img: string;
}

export const allProjects: Project[] = [
  { name: "Levent 199", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Göcek Marina Resort Portville Villaları", tag: "Turizm", location: "Fethiye, TR", img: "/images/bogazici/project-2.png" },
  { name: "Eczacıbaşı Ormanada", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-3.png" },
  { name: "Kasaba Ömerli", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Kozapark", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Yenitepe Kadıköy", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Evidea Konutları", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-3.png" },
  { name: "BGZ İstanbul", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-2.png" },
  { name: "The İstanbul Veliefendi", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Koç Kuleleri", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Sabancı Center", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Kiptaş-Yeşilce Aydos", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Kiptaş Hilal Toplu Konutları", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Kiptaş İkitelli", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-2.png" },
  { name: "Park Joven", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-3.png" },
  { name: "Metropol İstanbul", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Sarphan Finanspark", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Varyap Meridyen", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Mytowerland", tag: "Gayrimenkul", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Ege Perla Residence", tag: "Gayrimenkul", location: "İzmir, TR", img: "/images/bogazici/project-2.png" },
  { name: "The Knightsbridge Apartments", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/project-3.png" },
  { name: "Abell and Cleland", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/project-4.png" },
  { name: "190 Strand London", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/taahhut.png" },
  { name: "Goodman's Fields London", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Lantern House", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/project-1.png" },
  { name: "One Madison ABD", tag: "Uluslararası", location: "New York, ABD", img: "/images/bogazici/project-2.png" },
  { name: "Van Names - Rusya", tag: "Uluslararası", location: "Rusya", img: "/images/bogazici/project-3.png" },
  { name: "Gölcük Deprem Konutları", tag: "Taahhüt", location: "Kocaeli, TR", img: "/images/bogazici/project-4.png" },
  { name: "Sakarya Deprem Konutları", tag: "Taahhüt", location: "Sakarya, TR", img: "/images/bogazici/taahhut.png" },
  { name: "The Spiral ABD", tag: "Uluslararası", location: "New York, ABD", img: "/images/bogazici/project-1.png" },
  { name: "Al Hitmi Doha Katar", tag: "Uluslararası", location: "Doha, Katar", img: "/images/bogazici/project-2.png" },
  { name: "Tempo Scan Tower - Endonezya", tag: "Uluslararası", location: "Endonezya", img: "/images/bogazici/project-3.png" },
  { name: "Vivelva Orebro - İsveç", tag: "Uluslararası", location: "İsveç", img: "/images/bogazici/project-4.png" },
  { name: "Kartal Lütfi Kırdar Eğitim Araştırma Hastanesi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Garanti Bankası Teknoloji Kampüsü", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Tuzla Ticaret Merkezi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Çağlayan Adliye Sarayı", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-2.png" },
  { name: "Dolphin AVM Center", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-3.png" },
  { name: "Teknopark İstanbul", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Hükümet Konağı", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Desbaş Endüstriyel Tesis", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "İ.E.T.T. Otogar Yapımı", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "İsken Su Gözü Enerji Santrali", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Adıyaman Kahta Doğalgaz Boru Hattı", tag: "Taahhüt", location: "Adıyaman, TR", img: "/images/bogazici/project-2.png" },
  { name: "İstanbul Ankara Hızlı Tren", tag: "Taahhüt", location: "Türkiye", img: "/images/bogazici/project-3.png" },
  { name: "İGDAŞ Anadolu Doğalgaz İşi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Çayırova Atatürk ve Özgürlük Mahallesi Altyapısı", tag: "Taahhüt", location: "Kocaeli, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Tekirdağ Karayolu İnşaatı", tag: "Taahhüt", location: "Tekirdağ, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Maltepe Sosyal Güvenlik Merkezi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-4.png" },
  { name: "Küçükçekmece Kalp Damar Cerrahisi", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/project-1.png" },
  { name: "Otobüs Terminali", tag: "Taahhüt", location: "İstanbul, TR", img: "/images/bogazici/taahhut.png" },
  { name: "Germencik Enerji Santrali", tag: "Taahhüt", location: "Aydın, TR", img: "/images/bogazici/gayrimenkul.png" },
  { name: "Borabay-Kazakistan Yol İnşaatı", tag: "Uluslararası", location: "Kazakistan", img: "/images/bogazici/project-2.png" },
  { name: "Blue Line Estantion ABD", tag: "Uluslararası", location: "ABD", img: "/images/bogazici/project-3.png" },
  { name: "E45 İsveç Otoyolu", tag: "Uluslararası", location: "İsveç", img: "/images/bogazici/project-4.png" },
  { name: "Usti Nab Ladem Üstgeçit", tag: "Uluslararası", location: "Almanya", img: "/images/bogazici/taahhut.png" },
  { name: "I5 Amerika Birleşik Devletler Yolu ABD", tag: "Uluslararası", location: "ABD", img: "/images/bogazici/gayrimenkul.png" },
  { name: "The Sibellus Academy - Finlandiya", tag: "Uluslararası", location: "Finlandiya", img: "/images/bogazici/project-1.png" },
  { name: "Bat Spa Üniversitesi London", tag: "Uluslararası", location: "Londra, UK", img: "/images/bogazici/project-2.png" },
  { name: "Business Center Macaristan", tag: "Uluslararası", location: "Macaristan", img: "/images/bogazici/project-3.png" },
  { name: "Çalık Enerji Taşkent Business Center Özbekistan", tag: "Uluslararası", location: "Özbekistan", img: "/images/bogazici/project-4.png" },
  { name: "Nursultan Kazakistan Ahunbay Wintergarden Otel", tag: "Uluslararası", location: "Kazakistan", img: "/images/bogazici/taahhut.png" },
];

export const categories: ProjectCategory[] = ["Tümü", "Gayrimenkul", "Taahhüt", "Turizm", "Uluslararası"];

export const tagColors: Record<string, string> = {
  Gayrimenkul: "#6cbe59",
  Taahhüt: "#212a3c",
  Turizm: "#0ea5e9",
  Uluslararası: "#6366f1",
};

export function getProjectsByTag(tag: ProjectCategory): Project[] {
  if (tag === "Tümü") return allProjects;
  return allProjects.filter((p) => p.tag === tag);
}
