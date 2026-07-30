// Tüm proje verileri burada tutulur. Yeni proje eklemek için listeye
// yeni bir nesne ekleyin. "status" değeri "tamamlanan" veya "devam-eden"
// olmalıdır. "slug" benzersiz olmalı ve /projeler/slug adresini belirler.

export const projects = [
  {
    slug: "oner-un-fabrikasi-mardin",
    title: "Öner Un Fabrikası",
    location: "Mardin",
    status: "tamamlanan",
    year: "2023",
    power: "1.2 MW",
    type: "Çatı GES",
    image: "/images/project-factory.png",
    summary:
      "Un fabrikasının çatısına kurulan yüksek kapasiteli GES ile üretim enerjisi güneşten karşılanıyor.",
    description:
      "Öner Un Fabrikası için gerçekleştirdiğimiz çatı GES projesi, fabrikanın yıllık elektrik ihtiyacının büyük bölümünü karşılayacak şekilde tasarlandı. Yüksek verimli monokristal paneller ve string inverterler ile kurulan sistem, işletmenin enerji maliyetlerini ciddi oranda düşürdü.",
    highlights: [
      "Fabrika çatısının verimli kullanımı",
      "Yıllık yüksek enerji tasarrufu",
      "Uzaktan izleme sistemi entegrasyonu",
    ],
    stats: [
      { label: "Kurulu Güç", value: "1.2 MW" },
      { label: "Panel Sayısı", value: "2.180" },
      { label: "Yıllık Üretim", value: "1.9 GWh" },
      { label: "CO₂ Tasarrufu", value: "900 ton/yıl" },
    ],
    images: [
      "/images/project-factory.png",
      "/images/project/placeholder1.svg",
      "/images/project/placeholder3.jpg",
    ],
  },
  {
    slug: "turkoglu-pamuk-entegre-sanliurfa",
    title: "Türkoğlu Pamuk Entegre Tesisi",
    location: "Şanlıurfa",
    status: "tamamlanan",
    year: "2023",
    power: "2.5 MW",
    type: "Çatı & Arazi GES",
    image: "/images/project-factory.png",
    summary:
      "Pamuk entegre tesisi için hibrit çatı ve arazi GES çözümü ile maksimum üretim.",
    description:
      "Türkoğlu Pamuk Entegre Tesisi için hem çatı hem arazi alanlarını değerlendirerek hibrit bir GES projesi hayata geçirdik. Yüksek güneşlenme değerine sahip Şanlıurfa bölgesinde, tesisin enerji ihtiyacının önemli bir kısmı yenilenebilir kaynaktan sağlanıyor.",
    highlights: [
      "Hibrit çatı + arazi kurulumu",
      "Yüksek güneşlenmeden maksimum verim",
      "SCADA ile merkezi izleme",
    ],
    stats: [
      { label: "Kurulu Güç", value: "2.5 MW" },
      { label: "Panel Sayısı", value: "4.500" },
      { label: "Yıllık Üretim", value: "4.2 GWh" },
      { label: "CO₂ Tasarrufu", value: "2.000 ton/yıl" },
    ],
    images: [
      "/images/project-factory.png",
      "/images/project/placeholder1.svg",
      "/images/project/placeholder3.jpg",
    ],
  },
  {
    slug: "azunlar-tekstil-mardin",
    title: "Azunlar Tekstil",
    location: "Mardin",
    status: "tamamlanan",
    year: "2022",
    power: "900 kW",
    type: "Çatı GES",
    image: "/images/project-textile.png",
    summary:
      "Tekstil üretim tesisinin çatısına kurulan GES ile enerjide öz tüketim.",
    description:
      "Azunlar Tekstil için gerçekleştirdiğimiz çatı GES projesi, tesisin gündüz üretim saatlerindeki enerji ihtiyacını önemli ölçüde karşılıyor. Öz tüketim modeliyle işletme, elektrik faturalarında kayda değer bir düşüş yaşadı.",
    highlights: [
      "Gündüz öz tüketim optimizasyonu",
      "Su geçirmez montaj sistemi",
      "Hızlı amortisman",
    ],
    stats: [
      { label: "Kurulu Güç", value: "900 kW" },
      { label: "Panel Sayısı", value: "1.630" },
      { label: "Yıllık Üretim", value: "1.4 GWh" },
      { label: "CO₂ Tasarrufu", value: "670 ton/yıl" },
    ],
    images: [
      "/images/project-textile.png",
      "/images/project/placeholder1.svg",
      "/images/project/placeholder3.jpg",
    ],
  },
  {
    slug: "aydogan-tekstil-istanbul",
    title: "Aydoğan Tekstil",
    location: "İstanbul",
    status: "tamamlanan",
    year: "2022",
    power: "750 kW",
    type: "Çatı GES",
    image: "/images/project-textile.png",
    summary: "İstanbul’daki tekstil tesisinin çatısında modern GES kurulumu.",
    description:
      "Aydoğan Tekstil için İstanbul’da gerçekleştirdiğimiz çatı GES projesi, sınırlı çatı alanının en verimli şekilde değerlendirilmesiyle tasarlandı. Yüksek verimli paneller ile şehir içi bir tesiste dahi güçlü bir üretim sağlandı.",
    highlights: [
      "Sınırlı alanda maksimum verim",
      "Şehir içi kurulum tecrübesi",
      "Uzaktan performans takibi",
    ],
    stats: [
      { label: "Kurulu Güç", value: "750 kW" },
      { label: "Panel Sayısı", value: "1.360" },
      { label: "Yıllık Üretim", value: "1.1 GWh" },
      { label: "CO₂ Tasarrufu", value: "520 ton/yıl" },
    ],
    images: [
      "/images/project-textile.png",
      "/images/project/placeholder1.svg",
      "/images/project/placeholder3.jpg",
    ],
  },
  {
    slug: "altunhan-enez-kamp-alani-edirne",
    title: "Altunhan Enez Kamp Alanı",
    location: "Edirne",
    status: "tamamlanan",
    year: "2023",
    power: "120 kW",
    type: "Off Grid Sistem",
    image: "/images/project-camp.png",
    summary:
      "Doğa içindeki kamp alanı için şebekeden bağımsız bataryalı enerji sistemi.",
    description:
      "Altunhan Enez Kamp Alanı için tasarladığımız off-grid sistem, şebekenin ulaşmadığı doğal bir alanda kesintisiz elektrik sağlıyor. Batarya depolama sayesinde gece gündüz temiz enerji üretiliyor.",
    highlights: [
      "Şebekeden tam bağımsız çalışma",
      "Lityum batarya depolama",
      "Doğaya duyarlı kurulum",
    ],
    stats: [
      { label: "Kurulu Güç", value: "120 kW" },
      { label: "Depolama", value: "Lityum Akü" },
      { label: "Bağımsızlık", value: "%100" },
      { label: "Kullanım", value: "7/24" },
    ],
    images: [
      "/images/project-camp.png",
      "/images/project/placeholder1.svg",
      "/images/project/placeholder3.jpg",
    ],
  },
  {
    slug: "canakkale-geyikli-tinykoy",
    title: "Çanakkale Geyikli TinyKöy",
    location: "Çanakkale",
    status: "devam-eden",
    year: "2024",
    power: "300 kW",
    type: "Off Grid & Sulama",
    image: "/images/project-tinyhouse.png",
    summary:
      "Sürdürülebilir tiny house köyü için hibrit güneş enerjisi ve depolama projesi.",
    description:
      "Çanakkale Geyikli’de kurulmakta olan TinyKöy projesi, sürdürülebilir yaşamı benimseyen bir tiny house yerleşimi için tamamen yenilenebilir enerji altyapısı sağlıyor. Off-grid depolama ve güneş enerjili sulama sistemleri ile kendi kendine yeten bir yaşam alanı hedefleniyor.",
    highlights: [
      "Tiny house yerleşimi için hibrit sistem",
      "Off-grid depolama + güneş enerjili sulama",
      "Sürdürülebilir, kendi kendine yeten yerleşim",
    ],
    stats: [
      { label: "Kurulu Güç", value: "300 kW" },
      { label: "Depolama", value: "Hibrit" },
      { label: "Durum", value: "Devam Ediyor" },
      { label: "Tamamlanma", value: "2024" },
    ],
    images: [
      "/images/project-tinyhouse.png",
      "/images/project/placeholder1.svg",
      "/images/project/placeholder3.jpg",
    ],
  },
];

export const projectFilters = [
  { key: "hepsi", label: "Hepsi" },
  { key: "tamamlanan", label: "Tamamlanan" },
  { key: "devam-eden", label: "Devam Eden" },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
