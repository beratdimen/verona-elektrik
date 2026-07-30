// Tüm hizmet verileri burada tutulur. Yeni hizmet eklemek için
// aşağıdaki listeye yeni bir nesne ekleyin. "slug" benzersiz olmalıdır ve
// detay sayfası adresini (/hizmetler/slug) belirler.

export const services = [
  {
    slug: 'cati-ges',
    title: 'Çatı GES',
    short: 'Fabrika, işletme ve konut çatılarına özel güneş enerjisi santralleri.',
    icon: 'Home',
    image: '/images/rooftop-ges.png',
    description:
      'Çatı Güneş Enerjisi Santralleri (GES), kullanılmayan çatı alanlarınızı gelir kaynağına dönüştürür. İşletmenizin elektrik ihtiyacını kendi çatınızdan karşılayarak enerji maliyetlerinizi ciddi oranda düşürür.',
    features: [
      'Statik ve taşıma kapasitesi analizi',
      'Yüksek verimli monokristal paneller',
      'İzolasyonlu ve su geçirmez montaj sistemleri',
      'Uzaktan izleme ve raporlama',
    ],
    steps: [
      { title: 'Keşif & Analiz', desc: 'Çatı ölçümü, statik değerlendirme ve tüketim analizi.' },
      { title: 'Projelendirme', desc: 'Üretim simülasyonu ve teknik projenin hazırlanması.' },
      { title: 'Kurulum', desc: 'Panel, taşıyıcı konstrüksiyon ve inverter montajı.' },
      { title: 'Devreye Alma', desc: 'Şebeke bağlantısı, test ve izleme sistemi kurulumu.' },
    ],
    stats: [
      { label: 'Amortisman', value: '4-6 Yıl' },
      { label: 'Panel Ömrü', value: '25+ Yıl' },
      { label: 'Verim Kaybı', value: '< %0.5 / yıl' },
    ],
  },
  {
    slug: 'arazi-ges',
    title: 'Arazi GES',
    short: 'Yatırım amaçlı, geniş ölçekli arazi tipi güneş enerjisi santralleri.',
    icon: 'Sun',
    image: '/images/land-ges.png',
    description:
      'Arazi tipi GES projeleri, boş arazilerinizi yüksek getirili enerji yatırımına dönüştürür. Lisanslı ve lisanssız projelerde anahtar teslim çözümler sunuyoruz.',
    features: [
      'Arazi fizibilite ve güneşlenme analizi',
      'Tek eksenli takip sistemi opsiyonu',
      'Trafo ve OG/AG dağıtım altyapısı',
      'SCADA ile merkezi izleme',
    ],
    steps: [
      { title: 'Fizibilite', desc: 'Arazi uygunluğu, güneşlenme ve şebeke kapasitesi analizi.' },
      { title: 'Ruhsat & İzin', desc: 'Bağlantı anlaşması ve gerekli izin süreçleri.' },
      { title: 'Kurulum', desc: 'Konstrüksiyon, panel ve trafo merkezi montajı.' },
      { title: 'İşletme', desc: 'Devreye alma ve uzun dönem bakım hizmeti.' },
    ],
    stats: [
      { label: 'Kapasite', value: '1 MW+' },
      { label: 'Getiri', value: 'Yüksek' },
      { label: 'Garanti', value: '10 Yıl' },
    ],
  },
  {
    slug: 'sulama-sistemleri',
    title: 'Sulama Sistemleri',
    short: 'Tarımsal sulama için güneş enerjili pompa ve sulama çözümleri.',
    icon: 'Droplets',
    image: '/images/irrigation.png',
    description:
      'Güneş enerjili sulama sistemleri ile mazot ve şebeke elektriği masrafından kurtulun. Tarlanızın enerjisini güneşten üretin, veriminizi artırın.',
    features: [
      'Güneş enerjili dalgıç ve yüzey pompaları',
      'Sürücü (drive) kontrollü otomasyon',
      'Sıfır yakıt maliyeti',
      'Bakım gerektirmeyen yapı',
    ],
    steps: [
      { title: 'Su & Debi Analizi', desc: 'Kuyu debisi ve sulama ihtiyacının belirlenmesi.' },
      { title: 'Sistem Tasarımı', desc: 'Pompa ve panel gücünün boyutlandırılması.' },
      { title: 'Kurulum', desc: 'Panel, sürücü ve pompa montajı.' },
      { title: 'Test', desc: 'Sulama performans testi ve teslim.' },
    ],
    stats: [
      { label: 'Yakıt Tasarrufu', value: '%100' },
      { label: 'Kurulum', value: '1-3 Gün' },
      { label: 'Bakım', value: 'Minimum' },
    ],
  },
  {
    slug: 'arac-sarj-istasyonlari',
    title: 'Araç Şarj İstasyonları',
    short: 'Elektrikli araçlar için AC/DC şarj istasyonu kurulumu.',
    icon: 'Zap',
    image: '/images/ev-charge.png',
    description:
      'Elektrikli araç şarj istasyonları ile işletmenize yeni bir gelir kalemi ekleyin. Güneş enerjisi ile entegre çözümlerle şarj maliyetini minimuma indirin.',
    features: [
      'AC ve DC hızlı şarj üniteleri',
      'Güneş enerjisi entegrasyonu',
      'Mobil uygulama ile ödeme',
      'OCPP uyumlu yönetim paneli',
    ],
    steps: [
      { title: 'Lokasyon Analizi', desc: 'Uygun konum ve güç altyapısı değerlendirmesi.' },
      { title: 'Projelendirme', desc: 'İstasyon tipi ve kapasite seçimi.' },
      { title: 'Kurulum', desc: 'Şarj ünitesi ve altyapı montajı.' },
      { title: 'Devreye Alma', desc: 'Yazılım entegrasyonu ve test.' },
    ],
    stats: [
      { label: 'Güç', value: '22-180 kW' },
      { label: 'Uyumluluk', value: 'OCPP' },
      { label: 'İzleme', value: '7/24' },
    ],
  },
  {
    slug: 'on-grid-sistem',
    title: 'On Grid Sistem',
    short: 'Şebeke bağlantılı güneş enerjisi sistemleri ve mahsuplaşma.',
    icon: 'PlugZap',
    image: '/images/ongrid.png',
    description:
      'On-grid sistemler şebeke ile senkronize çalışır. Ürettiğiniz fazla enerjiyi şebekeye vererek mahsuplaşmadan faydalanır, faturanızı sıfıra yaklaştırırsınız.',
    features: [
      'Şebeke ile tam senkronizasyon',
      'Mahsuplaşma (net-metering) desteği',
      'Yüksek verimli string inverterler',
      'Kesintisiz üretim izleme',
    ],
    steps: [
      { title: 'Tüketim Analizi', desc: 'Yıllık elektrik tüketiminin incelenmesi.' },
      { title: 'Boyutlandırma', desc: 'Sistem gücünün hesaplanması.' },
      { title: 'Kurulum', desc: 'Panel ve inverter montajı.' },
      { title: 'Şebeke Bağlantısı', desc: 'Dağıtım şirketi onayı ve devreye alma.' },
    ],
    stats: [
      { label: 'Fatura', value: '≈ 0 TL' },
      { label: 'Mahsuplaşma', value: 'Var' },
      { label: 'Amortisman', value: '4-6 Yıl' },
    ],
  },
  {
    slug: 'off-grid-sistem',
    title: 'Off Grid Sistem',
    short: 'Şebekeden bağımsız, bataryalı enerji depolama sistemleri.',
    icon: 'BatteryCharging',
    image: '/images/offgrid.png',
    description:
      'Off-grid sistemler şebekenin ulaşmadığı bölgeler için tam bağımsız enerji sağlar. Batarya depolama ile gece gündüz kesintisiz elektrik üretin.',
    features: [
      'Lityum / jel akü depolama',
      'Şebekeden tam bağımsızlık',
      'Hibrit inverter altyapısı',
      'Yaylalar, çiftlikler ve tiny house için ideal',
    ],
    steps: [
      { title: 'İhtiyaç Analizi', desc: 'Günlük enerji tüketiminin belirlenmesi.' },
      { title: 'Depolama Tasarımı', desc: 'Batarya ve panel kapasitesinin planlanması.' },
      { title: 'Kurulum', desc: 'Panel, akü ve inverter montajı.' },
      { title: 'Test', desc: 'Otonom çalışma testi ve teslim.' },
    ],
    stats: [
      { label: 'Bağımsızlık', value: '%100' },
      { label: 'Depolama', value: 'Lityum' },
      { label: 'Kullanım', value: '7/24' },
    ],
  },
  {
    slug: 'teknik-servis',
    title: 'Teknik Servis',
    short: 'GES bakım, onarım, temizlik ve performans izleme hizmetleri.',
    icon: 'Wrench',
    image: '/images/technical-service.png',
    description:
      'Santralinizin ilk günkü verimde çalışması için periyodik bakım, panel temizliği, termal kamera kontrolü ve arıza giderme hizmetleri sunuyoruz.',
    features: [
      'Periyodik bakım sözleşmeleri',
      'Termal kamera ile arıza tespiti',
      'Profesyonel panel temizliği',
      'Uzaktan performans izleme',
    ],
    steps: [
      { title: 'Denetim', desc: 'Sistem geneli performans denetimi.' },
      { title: 'Raporlama', desc: 'Tespit edilen sorunların raporlanması.' },
      { title: 'Müdahale', desc: 'Onarım, temizlik ve iyileştirme.' },
      { title: 'İzleme', desc: 'Sürekli uzaktan takip.' },
    ],
    stats: [
      { label: 'Destek', value: '7/24' },
      { label: 'Verim Artışı', value: '+%20' },
      { label: 'Müdahale', value: 'Hızlı' },
    ],
  },
  {
    slug: 'yasal-surecler',
    title: 'Yasal Süreçler & Ruhsatlandırma',
    short: 'Başvuru, bağlantı anlaşması ve ruhsat süreçlerinin yönetimi.',
    icon: 'FileCheck',
    image: '/images/legal.png',
    description:
      'GES projelerinin en karmaşık kısmı olan yasal süreçleri sizin için yönetiyoruz. Başvurudan devreye almaya kadar tüm bürokratik işlemleri takip ediyoruz.',
    features: [
      'Dağıtım şirketi başvuruları',
      'Bağlantı anlaşması ve TEDAŞ onayları',
      'Proje onay ve ruhsatlandırma',
      'Geçici ve kesin kabul işlemleri',
    ],
    steps: [
      { title: 'Başvuru', desc: 'Dağıtım şirketine ön başvuru.' },
      { title: 'Onay', desc: 'Bağlantı anlaşması ve proje onayı.' },
      { title: 'Ruhsat', desc: 'Gerekli izin ve ruhsatların alınması.' },
      { title: 'Kabul', desc: 'Geçici ve kesin kabul işlemleri.' },
    ],
    stats: [
      { label: 'Süreç Yönetimi', value: 'Tam' },
      { label: 'Tecrübe', value: '10+ Yıl' },
      { label: 'Takip', value: 'Uçtan uca' },
    ],
  },
]

export function getService(slug) {
  return services.find((s) => s.slug === slug)
}
