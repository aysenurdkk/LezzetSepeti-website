import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSepet } from '../context/SepetContext';
import '../styles/Siparis.css';

const Siparis = () => {
    const { sepet, toplamHesapla } = useSepet();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        ad: '',
        soyad: '',
        telefon: '',
        adresIl: '',
        adresIlce: '',
        adresMahalle: '',
        adresDetay: '',
        teslimatZamani: 'hemen',
        odemeYontemi: 'nakit',
        siparisNotu: ''
    });

    // Toplam hesapla
    const { araToplam, indirim, kdv, toplam } = toplamHesapla();

    // Form değişikliği handler
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Form gönderimi
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasyon
        if (!formData.ad || !formData.soyad || !formData.telefon ||
            !formData.adresIl || !formData.adresIlce || !formData.adresDetay) {
            alert('Lütfen tüm alanları doldurun!');
            return;
        }

        // Siparişi localStorage'a kaydet
        const siparis = {
            id: Date.now(),
            tarih: new Date().toLocaleString('tr-TR'),
            durum: 'Hazırlanıyor',
            urunler: sepet.urunler,
            toplamTutar: toplam,
            teslimatBilgileri: formData
        };

        // Önceki siparişleri al
        const oncekiSiparisler = JSON.parse(localStorage.getItem('siparisler')) || [];
        // Yeni siparişi ekle
        const yeniSiparisler = [...oncekiSiparisler, siparis];
        // LocalStorage'a kaydet
        localStorage.setItem('siparisler', JSON.stringify(yeniSiparisler));

        // Sipariş onay sayfasına yönlendir
        navigate('/siparis-onay');
    };

    return (
        <div className="siparis-sayfa container full-width">
            <h1>Sipariş Bilgileri</h1>

            <div className="siparis-icerik">
                {/* Teslimat Bilgileri Formu */}
                <div className="teslimat-formu">
                    <form onSubmit={handleSubmit}>
                        <h2>Teslimat Bilgileri</h2>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="ad">Ad*</label>
                                <input
                                    type="text"
                                    id="ad"
                                    name="ad"
                                    value={formData.ad}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="soyad">Soyad*</label>
                                <input
                                    type="text"
                                    id="soyad"
                                    name="soyad"
                                    value={formData.soyad}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefon">Telefon*</label>
                            <input
                                type="tel"
                                id="telefon"
                                name="telefon"
                                value={formData.telefon}
                                onChange={handleChange}
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="adresIl">İl*</label>
                                <input
                                    type="text"
                                    id="adresIl"
                                    name="adresIl"
                                    value={formData.adresIl}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="adresIlce">İlçe*</label>
                                <input
                                    type="text"
                                    id="adresIlce"
                                    name="adresIlce"
                                    value={formData.adresIlce}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="adresMahalle">Mahalle</label>
                                <input
                                    type="text"
                                    id="adresMahalle"
                                    name="adresMahalle"
                                    value={formData.adresMahalle}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="adresDetay">Açık Adres*</label>
                            <textarea
                                id="adresDetay"
                                name="adresDetay"
                                value={formData.adresDetay}
                                onChange={handleChange}
                                className="form-control"
                                rows="3"
                                required
                            ></textarea>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="teslimatZamani">Teslimat Zamanı</label>
                                <select
                                    id="teslimatZamani"
                                    name="teslimatZamani"
                                    value={formData.teslimatZamani}
                                    onChange={handleChange}
                                    className="form-control"
                                >
                                    <option value="hemen">Hemen</option>
                                    <option value="30dk">30 Dakika</option>
                                    <option value="1saat">1 Saat</option>
                                    <option value="2saat">2 Saat</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="odemeYontemi">Ödeme Yöntemi</label>
                                <select
                                    id="odemeYontemi"
                                    name="odemeYontemi"
                                    value={formData.odemeYontemi}
                                    onChange={handleChange}
                                    className="form-control"
                                >
                                    <option value="nakit">Kapıda Nakit</option>
                                    <option value="krediKarti">Kapıda Kredi Kartı</option>
                                    <option value="online">Online Ödeme</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="siparisNotu">Sipariş Notu</label>
                            <textarea
                                id="siparisNotu"
                                name="siparisNotu"
                                value={formData.siparisNotu}
                                onChange={handleChange}
                                className="form-control"
                                rows="3"
                                placeholder="Özel isteklerinizi buraya yazabilirsiniz..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-lg">
                            Siparişi Onayla
                        </button>
                    </form>
                </div>

                {/* Sipariş Özeti */}
                <div className="siparis-ozet">
                    <h2>Sipariş Özeti</h2>

                    <div className="urun-listesi">
                        {sepet.urunler.map((item) => (
                            <div className="ozet-urun" key={item.id}>
                                <div className="urun-bilgi">
                                    <h3>{item.ad} x {item.adet}</h3>
                                    {item.secenekler.porsiyon && (
                                        <p><strong>Porsiyon:</strong> {item.secenekler.porsiyon}</p>
                                    )}
                                    {item.secenekler.extraMalzemeler.length > 0 && (
                                        <p><strong>Extra:</strong> {item.secenekler.extraMalzemeler.join(', ')}</p>
                                    )}
                                </div>
                                <div className="urun-fiyat">
                                    {(item.fiyat * item.adet).toFixed(2)}₺
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ozet-detay">
                        <div className="ozet-satir">
                            <span>Ara Toplam:</span>
                            <span>{araToplam.toFixed(2)}₺</span>
                        </div>

                        {indirim > 0 && (
                            <div className="ozet-satir indirim">
                                <span>İndirim:</span>
                                <span>-{indirim.toFixed(2)}₺</span>
                            </div>
                        )}

                        <div className="ozet-satir">
                            <span>KDV (%18):</span>
                            <span>{kdv.toFixed(2)}₺</span>
                        </div>

                        <div className="ozet-satir toplam">
                            <span>Toplam:</span>
                            <span>{toplam.toFixed(2)}₺</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Siparis;