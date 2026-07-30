// Genel site & şirket bilgileri. Buradaki değerleri güncelleyerek
// iletişim bilgilerini ve WhatsApp yönlendirmesini kolayca değiştirebilirsiniz.

export const site = {
  name: "Verona Elektrik Enerji",
  shortName: "Verona Elektrik",
  slogan: "Güneşten Geleceğe Enerji",
  description:
    "Anahtar teslim güneş enerjisi santralleri, çatı ve arazi GES, sulama sistemleri, araç şarj istasyonları ve teknik servis çözümleri.",

  // WhatsApp numarası (uluslararası format, + ve boşluk olmadan)
  whatsappNumber: "905333588909",
  whatsappMessage:
    "Merhaba, güneş enerjisi çözümleriniz hakkında teklif almak istiyorum.",

  phone: "+90 533 358 89 09",
  email: "info@veronaelektrik.com",
  address: "Ekinoba, Hürriyet Cad. No:41 D:1D, 34535 Büyükçekmece/İstanbul",

  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },

  // İletişim sayfasındaki harita gömme adresi.
  // Konumu daha sonra Google Haritalar > Paylaş > Harita Yerleştir bölümünden
  // aldığınız "src" bağlantısı ile değiştirebilirsiniz.
};

export function whatsappLink(customMessage) {
  const msg = encodeURIComponent(customMessage || site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${msg}`;
}
