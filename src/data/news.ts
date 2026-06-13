export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
  image?: string;
}

export const newsData: NewsItem[] = [
  {
    slug: "yeni-projelerle-buyume",
    title: "Boğaziçi Grup, Yeni Projelerle Büyümesini Sürdürüyor",
    date: "15 Mayıs 2026",
    category: "Kurumsal",
    summary: "İstanbul'un önde gelen inşaat firmalarından Boğaziçi Grup, 2026 yılında üstlendiği yeni projelerle büyümesini sürdürüyor.",
    content: [
      "İstanbul'un önde gelen inşaat firmalarından Boğaziçi Grup, 2026 yılında üstlendiği yeni projelerle büyümesini sürdürüyor. Şirket, özellikle anahtar teslim projeler ve mühendislik hizmetleri alanında önemli başarılara imza atıyor.",
      "Boğaziçi Grup CEO'su konuyla ilgili yaptığı açıklamada, '2026 yılı bizim için büyüme ve genişleme yılı oldu. Yeni üstlendiğimiz projelerle hem yurt içinde hem de yurt dışında varlığımızı güçlendiriyoruz. Özellikle anahtar teslim projeler alanında artan talep, bizi sektördeki konumumuzu daha da sağlamlaştırmaya yöneltti.' dedi.",
      "Şirket, 2026 yılının ilk çeyreğinde 3 yeni anahtar teslim proje sözleşmesi imzalarken, mühendislik hizmetleri alanında da 5 farklı projede danışmanlık hizmeti vermeye başladı. Ayrıca, uluslararası pazarda büyüme hedefi doğrultusunda yeni ülkelerde proje geliştirme çalışmalarına hız verildi.",
      "Boğaziçi Grup, 30 yılı aşkın tecrübesi ve güçlü referanslarıyla inşaat sektöründeki lider konumunu korurken, sürdürülebilir büyüme stratejisi doğrultusunda yatırımlarına devam ediyor.",
    ],
    image: "/images/bogazici/taahhut.png",
  },
  {
    slug: "kartal-lutfi-kirdar-hastanesi-tamamlandi",
    title: "Kartal Lütfi Kırdar Hastanesi Projesi Tamamlandı",
    date: "28 Nisan 2026",
    category: "Projeler",
    summary: "Boğaziçi Grup tarafından üstlenilen Kartal Lütfi Kırdar Eğitim ve Araştırma Hastanesi inşaatı başarıyla tamamlanarak sağlık hizmetine açıldı.",
    content: [
      "Boğaziçi Grup tarafından üstlenilen Kartal Lütfi Kırdar Eğitim ve Araştırma Hastanesi inşaatı başarıyla tamamlanarak sağlık hizmetine açıldı. Proje, modern hastane standartlarında tasarlandı.",
      "Modern hastane standartlarına uygun olarak tasarlanan proje, 500 yatak kapasitesi, son teknoloji tıbbi ekipmanları ve hasta odaklı yaklaşımıyla bölgenin sağlık altyapısına önemli bir katkı sağlıyor. Hastane kompleksi; acil servis, yoğun bakım üniteleri, ameliyathaneler, poliklinikler ve idari ofisler olmak üzere toplam 45.000 m² kapalı alana sahip.",
      "Proje kapsamında ayrıca 300 araçlık kapalı otopark, helikopter pisti ve yeşil alan düzenlemeleri de yer alıyor. Çevre dostu teknolojilerle inşa edilen hastane, enerji verimliliği ve sürdürülebilirlik kriterlerine uygun olarak tasarlandı.",
      "Boğaziçi Grup, hastane projesinin zamanında ve bütçeye uygun şekilde teslim edilmesinden dolayı büyük memnuniyet duyduklarını belirterek, sağlık sektöründe de referans projelere imza atmaya devam edeceklerini açıkladı.",
    ],
    image: "/images/bogazici/project-2.png",
  },
  {
    slug: "uluslararasi-basari-190-strand-london",
    title: "Uluslararası Projelerde Yeni Başarı: 190 Strand London",
    date: "10 Mart 2026",
    category: "Uluslararası",
    summary: "Boğaziçi Grup'un Londra'da üstlendiği 190 Strand London projesi, İngiltere'deki başarılı projeler zincirine bir yenisini ekledi.",
    content: [
      "Boğaziçi Grup'un Londra'da üstlendiği 190 Strand London projesi, İngiltere'deki başarılı projeler zincirine bir yenisini ekledi. Proje, lüks konut ve ticari alanlardan oluşuyor.",
      "Londra'nın merkezi Westminster bölgesinde yer alan proje, lüks konut daireleri ve premium ticari alanlardan oluşuyor. Çağdaş mimari anlayışıyla tasarlanan bina, şehrin siluetine modern bir dokunuş katıyor.",
      "Proje kapsamında 65 lüks konut dairesi, 3 adet ticari ünite ve ortak kullanım alanları yer alıyor. Her dairede akıllı ev teknolojileri, enerji verimli sistemler ve yüksek kalite malzemeler kullanıldı.",
      "190 Strand London, Boğaziçi Grup'un İngiltere'de tamamladığı 5. proje olma özelliğini taşıyor. Şirket, uluslararası pazarda büyümeye devam ederek Avrupa ve Amerika'da yeni projeler geliştirmeyi hedefliyor.",
    ],
    image: "/images/bogazici/project-4.png",
  },
  {
    slug: "isg-egitimleri-devam-ediyor",
    title: "İş Sağlığı ve Güvenliği Eğitimleri Aralıksız Devam Ediyor",
    date: "22 Şubat 2026",
    category: "Sürdürülebilirlik",
    summary: "Boğaziçi Grup, 'sıfır kaza' hedefi doğrultusunda düzenlediği iş sağlığı ve güvenliği eğitimlerine aralıksız devam ediyor.",
    content: [
      "Boğaziçi Grup, 'sıfır kaza' hedefi doğrultusunda düzenlediği iş sağlığı ve güvenliği eğitimlerine aralıksız devam ediyor. Yılın ilk çeyreğinde 150'den fazla çalışan eğitim aldı.",
      "Şirket bünyesinde uygulanan kapsamlı İSG programı kapsamında, tüm şantiye çalışanlarına düzenli olarak iş sağlığı ve güvenliği eğitimleri veriliyor. Eğitimler; yangın güvenliği, ilk yardım, yüksekte çalışma, kimyasal maddelerle güvenli çalışma ve acil durum yönetimi konularını kapsıyor.",
      "Ayrıca her ay düzenlenen İSG toplantılarında, saha denetim raporları değerlendiriliyor ve iyileştirme aksiyonları belirleniyor. Şirket, tüm projelerinde bağımsız İSG denetimleri gerçekleştirerek ulusal ve uluslararası standartlara tam uyum sağlıyor.",
      "Boğaziçi Grup'un İSG politikası, çalışan katılımını teşvik eden ve sürekli iyileştirmeyi hedefleyen bir yaklaşımla yürütülüyor. Şirket, bu alandaki başarılı çalışmalarıyla sektörde örnek gösterilen firmalar arasında yer alıyor.",
    ],
    image: "/images/bogazici/project-1.png",
  },
  {
    slug: "teknopark-istanbul-3-etap",
    title: "Teknopark İstanbul 3. Etap İnşaatında Sona Yaklaşıldı",
    date: "5 Ocak 2026",
    category: "Projeler",
    summary: "Boğaziçi Grup'un üstlendiği Teknopark İstanbul 3. Etap inşaatında sona yaklaşıldı.",
    content: [
      "Boğaziçi Grup'un üstlendiği Teknopark İstanbul 3. Etap inşaatında sona yaklaşıldı. Teknoloji ve inovasyon merkezi olarak tasarlanan proje, İstanbul'un önemli teknoloji kampüslerinden biri olacak.",
      "Pendik bölgesinde yer alan Teknopark İstanbul 3. Etap projesi, toplam 60.000 m² kapalı alana sahip olacak. Proje kapsamında Ar-Ge ofisleri, laboratuvarlar, ortak çalışma alanları, konferans salonları ve sosyal tesisler yer alıyor.",
      "Tamamlandığında 200'den fazla teknoloji firmasına ev sahipliği yapması beklenen kampüs, 5.000'den fazla Ar-Ge personelinin çalışmasına olanak sağlayacak. Projede ayrıca yeşil bina sertifikası hedefleniyor.",
      "Boğaziçi Grup, teknoloji ve inovasyon merkezlerinin inşasında uzmanlaşmış ekibiyle bu önemli projeyi de başarıyla tamamlamaya hazırlanıyor.",
    ],
    image: "/images/bogazici/project-3.png",
  },
  {
    slug: "cevre-dostu-projelere-destek",
    title: "Boğaziçi Grup'tan Çevre Dostu Projelere Destek",
    date: "18 Aralık 2025",
    category: "Sürdürülebilirlik",
    summary: "Boğaziçi Grup, çevre dostu projelere verdiği desteği artırarak sürdürülebilirlik alanındaki çalışmalarına hız kesmeden devam ediyor.",
    content: [
      "Boğaziçi Grup, çevre dostu projelere verdiği desteği artırarak sürdürülebilirlik alanındaki çalışmalarına hız kesmeden devam ediyor. Şirket, tüm projelerinde çevresel etkileri minimize etmeyi hedefliyor.",
      "2025 yılı içerisinde hayata geçirilen çevre yönetim sistemi kapsamında, tüm şantiyelerde atık ayrıştırma ve geri dönüşüm uygulamaları başlatıldı. Ayrıca, projelerde kullanılan malzemelerin çevre dostu alternatifleri tercih edilmeye başlandı.",
      "Şirket, karbon ayak izini azaltmak amacıyla enerji verimliliği çalışmalarına da hız verdi. Makine parkındaki araçların düzenli bakımlarıyla yakıt tüketiminde %15 oranında azalma sağlanırken, ofislerde enerji tasarrufu uygulamaları hayata geçirildi.",
      "Boğaziçi Grup, çevre dostu projelere verdiği destekle sektörde farkındalık yaratmayı ve sürdürülebilir bir gelecek için üzerine düşen sorumluluğu yerine getirmeyi amaçlıyor.",
    ],
    image: "/images/bogazici/gayrimenkul.png",
  },
  {
    slug: "fortune-500-turkiye",
    title: "Fortune 500 Türkiye Listesinde Yer Aldık",
    date: "1 Kasım 2025",
    category: "Kurumsal",
    summary: "Boğaziçi Grup, Türkiye'nin en büyük 500 şirketinin listelendiği Fortune 500 Türkiye araştırmasında yer almanın gururunu yaşıyor.",
    content: [
      "Boğaziçi Grup, Türkiye'nin en büyük 500 şirketinin listelendiği Fortune 500 Türkiye araştırmasında yer almanın gururunu yaşıyor. Bu başarı, şirketin güçlü büyüme performansını teyit ediyor.",
      "Fortune dergisi tarafından her yıl yayımlanan ve Türkiye'nin en büyük 500 şirketini belirleyen araştırmada, Boğaziçi Grup inşaat sektöründeki güçlü performansıyla listeye girmeyi başardı. Şirket, son 3 yılda gösterdiği istikrarlı büyüme ile dikkat çekiyor.",
      "Elde edilen bu başarı, şirketin doğru stratejik hamlelerinin ve çalışanlarının özverili çalışmalarının bir sonucu olarak değerlendiriliyor. Boğaziçi Grup, önümüzdeki dönemde de büyüme hedeflerine kararlılıkla ilerlemeye devam edecek.",
      "Fortune 500 Türkiye listesinde yer almak, Boğaziçi Grup için hem bir gurur kaynağı hem de gelecek hedefleri doğrultusunda önemli bir motivasyon kaynağı oluşturuyor.",
    ],
    image: "/images/bogazici/project-4.png",
  },
  {
    slug: "yeni-ofis-ticari-projeler",
    title: "Yeni Ofis ve Ticari Projeler İçin Çalışmalar Başladı",
    date: "15 Eylül 2025",
    category: "Projeler",
    summary: "Boğaziçi Grup, İstanbul'un çeşitli bölgelerinde yeni ofis ve ticari projeler için çalışmalara başladı.",
    content: [
      "Boğaziçi Grup, İstanbul'un çeşitli bölgelerinde yeni ofis ve ticari projeler için çalışmalara başladı. Modern mimari anlayışı ile tasarlanan projeler, şehrin siluetine değer katacak.",
      "Ataşehir, Kağıthane ve Başakşehir bölgelerinde toplam 3 yeni proje için çalışmalara başlayan Boğaziçi Grup, bu projelerin toplam yatırım bedelinin 500 milyon TL'yi aşması bekleniyor. Projelerde modern ofis tasarımları ve akıllı bina teknolojileri kullanılacak.",
      "Her bir proje, LEED sertifikası hedefiyle tasarlanıyor. Enerji verimliliği, su tasarrufu ve çevre dostu malzeme kullanımı gibi sürdürülebilirlik kriterleri projelerin temel prensipleri arasında yer alıyor.",
      "Boğaziçi Grup, yeni ofis ve ticari projelerle İstanbul'un iş dünyasına modern ve fonksiyonel çalışma alanları kazandırmayı hedefliyor.",
    ],
    image: "/images/bogazici/gayrimenkul.png",
  },
];

export const categories = ["Tümü", "Kurumsal", "Projeler", "Uluslararası", "Sürdürülebilirlik"];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find((n) => n.slug === slug);
}
