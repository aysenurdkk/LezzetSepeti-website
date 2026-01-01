# Lezzet Sepeti

Lezzet Sepeti, modern bir yemek sipariş uygulamasıdır. Kullanıcıların favori yemeklerini seçip sipariş verebileceği, sepetlerini yönetebilecekleri ve geçmiş siparişlerini görüntüleyebilecekleri kapsamlı bir e-ticaret platformudur.

## Özellikler

- **Ana Sayfa**: Ana sayfada kampanyalar, kategorilere hızlı erişim ve popüler ürünler yer alır.
- **Ürün Listeleme**: Farklı kategorilerdeki ürünleri listeleyebilme (Ana Yemekler, Burgerler, Pizzalar, Salatalar, İçecekler, Tatlılar).
- **Ürün Detayı**: Her ürün için detaylı bilgi, besin değerleri, porsiyon seçenekleri ve ekstra malzeme seçimi.
- **Sepet Yönetimi**: Kullanıcılar sepetlerine ürün ekleyebilir, miktarlarını değiştirebilir ve ürünleri silebilir.
- **Kupon Sistemi**: Sepette kupon uygulama ve indirim hesaplama.
- **Sipariş İşlemleri**: Sipariş bilgilerini doldurma, ödeme yöntemi seçme ve sipariş onayı.
- **Geçmiş Siparişler**: Kullanıcıların geçmiş siparişlerini görüntüleyebilmesi.

## Teknolojiler

- **React**: Frontend uygulaması için
- **React Router DOM**: Sayfalar arası yönlendirme için
- **Vite**: Derleme ve geliştirme sunucusu için

## Kurulum

1. Projeyi klonlayın veya indirin
2. Proje dizinine gidin: `cd lezzet-sepeti`
3. Gerekli bağımlılıkları yükleyin: `npm install`
4. Uygulamayı başlatın: `npm run dev`

Uygulama varsayılan olarak http://localhost:5173 adresinde açılacaktır.

## Kullanım

- Ana sayfada popüler ürünleri görebilirsiniz
- Menü sayfasından kategorilere göre ürünleri inceleyebilirsiniz
- Her ürün için detay sayfasında porsiyon ve ekstra malzeme seçebilirsiniz
- "İncele" butonu ile ürün detay sayfasına gidebilirsiniz
- Ürün detay sayfasından sepete ekleyebilirsiniz
- Sepet sayfasında siparişinizi gözden geçirebilir ve siparişi tamamlayabilirsiniz
- Sipariş sayfasında teslimat bilgilerinizi girip ödeme yapabilirsiniz
- Siparişlerim sayfasından geçmiş siparişlerinizi görüntüleyebilirsiniz

## Dosya Yapısı

```
src/
├── components/     # Yeniden kullanılabilir bileşenler
├── context/        # Sepet yönetimi için global durum
├── data/           # Ürün ve kupon verileri
├── pages/          # Uygulama sayfaları
├── styles/         # CSS stilleri
```

## Bileşenler

- `Header`: Uygulama başlığı ve gezinme
- `Footer`: Uygulama alt bilgisi
- `UrunKart`: Ürün kartı bileşeni
- `SepetContext`: Sepet yönetimi için global durum

## Sayfalar

- `AnaSayfa`: Ana sayfa
- `Menu`: Menü sayfası
- `UrunDetay`: Ürün detay sayfası
- `Sepet`: Sepet sayfası
- `Siparis`: Sipariş sayfası
- `SiparisOnay`: Sipariş onay sayfası
- `Siparislerim`: Geçmiş siparişler sayfası

## Katkıda Bulunma

Projeye katkıda bulunmak isterseniz, lütfen önce bir issue oluşturun veya mevcut issue'ları inceleyin.

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
