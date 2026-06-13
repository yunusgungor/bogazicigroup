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
    slug: "levent-199-tamamlandi",
    title: "Levent 199 Projesi Başarıyla Tamamlandı",
    date: "2015",
    category: "Projeler",
    summary: "Boğaziçi Group tarafından inşa edilen Levent 199 projesi, 2015 yılında başarıyla tamamlandı.",
    content: [
      "Boğaziçi Group tarafından inşa edilen Levent 199 projesi, 2011 yılında başlayıp 2015 yılında başarıyla tamamlandı. Proje, İstanbul Levent bölgesinin önemli A+ ofis projelerinden biri oldu.",
      "Projenin baza kısmı 7 bodrum+zemin+2 normal kat, kule kısmı ise 7 bodrum+zemin+43 kattan oluşmaktadır. Baza kısmında alışveriş merkezi ve sosyo kültürel alanları bulunan proje, 10.000 m²'lik peyzaj alanı ile bölgede fark yaratmaktadır.",
      "Zorlu Levent'in kulesinin normal katlarında 'A+ Ofis', en üst dört katında 'Executive Ofisler', çatısında ise bir helikopter pisti bulunmaktadır. Proje, 123.000 m² arsa alanı üzerinde inşa edilmiştir.",
      "Boğaziçi Group, 1994'den bu yana edindiği tecrübe ile bu prestijli projeyi başarıyla tamamlayarak sektördeki konumunu güçlendirmiştir.",
    ],
    image: "/images/bogazici/project-1.png",
  },
  {
    slug: "bgz-istanbul-projesi",
    title: "BGZ İstanbul Projesi",
    date: "2018",
    category: "Projeler",
    summary: "Boğaziçi Group'un BGZ İstanbul projesi, 44 katlı iki kulede 731 konut ve 12 ticari üniteden meydana geliyor.",
    content: [
      "Boğaziçi Group'un BGZ İstanbul projesi, 105.000 m² arsa alanı üzerinde hayata geçirildi. Proje, 44 katlı iki kulede 731 konut ve 12 ticari üniteden meydana geliyor.",
      "Projede 1+1'ler brüt 74,69-88,62 metrekare, 1,5+1'ler brüt 100,69-111,51 metrekare, 2+1'ler brüt 128,15-180,93 metrekare, 2+1 dubleksler 128,11-171,42 metrekare, 3+1'ler brüt 186,58-236,56 metrekare, 4+1'ler 244,84-314,23 metrekare, 5+1'ler ise 697,91 metrekare olarak tasarlandı.",
      "Modern mimari anlayışı ile tasarlanan proje, İstanbul'un siluetine değer katıyor. Projede akıllı ev teknolojileri, enerji verimli sistemler ve yüksek kalite malzemeler kullanıldı.",
      "Boğaziçi Group, 30 yılı aşkın tecrübesi ile bu önemli projeyi başarıyla hayata geçirerek gayrimenkul sektöründeki gücünü kanıtlamıştır.",
    ],
    image: "/images/bogazici/project-2.png",
  },
  {
    slug: "koc-kuleleri-projesi",
    title: "Koç Kuleleri Projesi Ankara'da Hayat Geçirildi",
    date: "2016",
    category: "Projeler",
    summary: "Boğaziçi Group tarafından inşa edilen Koç Kuleleri projesi, Ankara Söğütözü'nde başarıyla tamamlandı.",
    content: [
      "Boğaziçi Group tarafından inşa edilen Koç Kuleleri projesi, Ankara Söğütözü Mahallesi'nde hayata geçirildi. Projenin 17.780 metrekarelik arsası Koç Holding'e ait.",
      "100.000 metrekarelik inşaat alanına sahip olan Koç Kuleleri projesinde toplam 172 ofis bulunuyor. Bu ofislerin 86'sı satışa sunuldu. Ofislerin brüt alanı 214 ile 266 metrekare arasında değişirken, net metrekareleri 165 ila 220 metrekare.",
      "Projedeki 32 adet mağaza kiraya verilecek. Modern ofis tasarımı ve yüksek standartları ile Ankara'nın iş dünyasına değer katan proje, Boğaziçi Group'un taahhüt alanındaki başarısını göstermektedir.",
      "Boğaziçi Group, 1994'den bu yana edindiği tecrübe ile bu önemli projeyi başarıyla tamamlamıştır.",
    ],
    image: "/images/bogazici/project-4.png",
  },
  {
    slug: "isg-egitimleri-devam-ediyor",
    title: "İş Sağlığı ve Güvenliği Eğitimleri Aralıksız Devam Ediyor",
    date: "2020",
    category: "Sürdürülebilirlik",
    summary: "Boğaziçi Group, 'sıfır kaza' hedefi doğrultusunda düzenlediği iş sağlığı ve güvenliği eğitimlerine aralıksız devam ediyor.",
    content: [
      "Boğaziçi Group, 'sıfır kaza' hedefi doğrultusunda düzenlediği iş sağlığı ve güvenliği eğitimlerine aralıksız devam ediyor. Yılın ilk çeyreğinde 150'den fazla çalışan eğitim aldı.",
      "Şirket bünyesinde uygulanan kapsamlı İSG programı kapsamında, tüm şantiye çalışanlarına düzenli olarak iş sağlığı ve güvenliği eğitimleri veriliyor. Eğitimler; yangın güvenliği, ilk yardım, yüksekte çalışma, kimyasal maddelerle güvenli çalışma ve acil durum yönetimi konularını kapsıyor.",
      "Ayrıca her ay düzenlenen İSG toplantılarında, saha denetim raporları değerlendiriliyor ve iyileştirme aksiyonları belirleniyor. Şirket, tüm projelerinde bağımsız İSG denetimleri gerçekleştirerek ulusal ve uluslararası standartlara tam uyum sağlıyor.",
      "Boğaziçi Group'un İSG politikası, çalışan katılımını teşvik eden ve sürekli iyileştirmeyi hedefleyen bir yaklaşımla yürütülüyor. Şirket, bu alandaki başarılı çalışmalarıyla sektörde örnek gösterilen firmalar arasında yer alıyor.",
    ],
    image: "/images/bogazici/project-1.png",
  },
  {
    slug: "gocek-marina-resort",
    title: "Göcek Marina Resort Portville Villaları Projesi",
    date: "2019",
    category: "Projeler",
    summary: "Boğaziçi Group'un Göcek Marina Resort Portville Villaları projesi, turizm sektöründeki başarısını gösteriyor.",
    content: [
      "Boğaziçi Group, turizm sektöründeki varlığını güçlendirmek amacıyla Göcek Marina Resort Portville Villaları projesini hayata geçirdi. Proje, lüks tatil villaları ve marina olanakları sunuyor.",
      "Göcek'in doğal güzellikleriyle bütünleşen proje, yüksek standartlı mimari tasarımı ve çevre dostu yaklaşımıyla dikkat çekiyor. Villalar, modern yaşam alanları ve özel havuz imkanlarıyla donatıldı.",
      "Proje kapsamında marina, restoran, spor tesisleri ve sosyal alanlar da yer alıyor. Boğaziçi Group, turizm sektöründeki bu önemli proje ile portföyünü çeşitlendirmiştir.",
      "Boğaziçi Group, 1994'den bu yana edindiği tecrübe ile turizm sektöründe de başarılı projelere imza atmaya devam etmektedir.",
    ],
    image: "/images/bogazici/project-3.png",
  },
  {
    slug: "cevre-dostu-projelere-destek",
    title: "Boğaziçi Group'tan Çevre Dostu Projelere Destek",
    date: "2019",
    category: "Sürdürülebilirlik",
    summary: "Boğaziçi Group, çevre dostu projelere verdiği desteği artırarak sürdürülebilirlik alanındaki çalışmalarına hız kesmeden devam ediyor.",
    content: [
      "Boğaziçi Group, çevre dostu projelere verdiği desteği artırarak sürdürülebilirlik alanındaki çalışmalarına hız kesmeden devam ediyor. Şirket, tüm projelerinde çevresel etkileri minimize etmeyi hedefliyor.",
      "2019 yılı içerisinde hayata geçirilen çevre yönetim sistemi kapsamında, tüm şantiyelerde atık ayrıştırma ve geri dönüşüm uygulamaları başlatıldı. Ayrıca, projelerde kullanılan malzemelerin çevre dostu alternatifleri tercih edilmeye başlandı.",
      "Şirket, karbon ayak izini azaltmak amacıyla enerji verimliliği çalışmalarına da hız verdi. Makine parkındaki araçların düzenli bakımlarıyla yakıt tüketiminde %15 oranında azalma sağlanırken, ofislerde enerji tasarrufu uygulamaları hayata geçirildi.",
      "Boğaziçi Group, çevre dostu projelere verdiği destekle sektörde farkındalık yaratmayı ve sürdürülebilir bir gelecek için üzerine düşen sorumluluğu yerine getirmeyi amaçlıyor.",
    ],
    image: "/images/bogazici/gayrimenkul.png",
  },
  {
    slug: "80-yillik-tecrube",
    title: "80 Yıllık Tecrübe ile Sektör Liderliği",
    date: "2018",
    category: "Kurumsal",
    summary: "Boğaziçi Group, 1938'den bu yana süregelen tecrübesi ile inşaat sektöründeki lider konumunu koruyor.",
    content: [
      "Boğaziçi Group, 1994 yılında atılan temellerden bu yana inşaat taahhüt sektöründe faaliyet göstermektedir. 30 yılı aşkın tecrübesi ile sektörün saygın yüklenici firmalarından biri olmuştur.",
      "Kuruşundan günümüze kadar üstlenmiş olduğu üstyapı işleri, altyapı işleri, endüstriyel tesisler, enerji santralleri, arıtma tesisleri, yol ve köprü işleri gibi taahhüt grubunun hemen her faaliyet alanında hizmet vermektedir.",
      "Boğaziçi Group, uzman ekibi ve kadrosu ile üstlendiği projeleri bütçesi içerisinde, uluslararası kalite standartlarına ve iş sağlığı güvenliğine büyük önem vererek sektöründe tercih edilen firmalardan biri konumuna gelmiştir.",
      "Yurt içi ve yurt dışında yaptığı işler ile referanslarını güçlendiren Boğaziçi Group, uzun yıllar çalışmakta olduğu daimi personeli, profesyonelleşmiş alt yüklenici ağı ve güçlü makine ekipman parkı ile her zaman hazırdır.",
    ],
    image: "/images/bogazici/project-4.png",
  },
  {
    slug: "eczacibasi-ormanda",
    title: "Eczacıbaşı Ormanda Projesi",
    date: "2017",
    category: "Projeler",
    summary: "Boğaziçi Group'un Eczacıbaşı Ormanda projesi, modern konut anlayışını yansıtıyor.",
    content: [
      "Boğaziçi Group, Eczacıbaşı Ormanda projesi ile modern konut anlayışını hayata geçirdi. Proje, yüksek standartlı yaşam alanları ve çevre dostu tasarımıyla dikkat çekiyor.",
      "Proje, modern mimari anlayışı ile tasarlandı ve şehrin siluetine değer katıyor. Projede akıllı ev teknolojileri, enerji verimli sistemler ve yüksek kalite malzemeler kullanıldı.",
      "Eczacıbaşı Ormanda, yeşil alanları ve sosyal tesisleri ile sakinlerine konforlu bir yaşam sunuyor. Boğaziçi Group, gayrimenkul sektöründeki bu önemli proje ile portföyünü güçlendirmiştir.",
      "Boğaziçi Group, 1938'den bu yana edindiği tecrübe ile gayrimenkul sektöründe de başarılı projelere imza atmaya devam etmektedir.",
    ],
    image: "/images/bogazici/gayrimenkul.png",
  },
];

export const categories = ["Tümü", "Kurumsal", "Projeler", "Uluslararası", "Sürdürülebilirlik"];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsData.find((n) => n.slug === slug);
}
