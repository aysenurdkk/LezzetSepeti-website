import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Siparislerim.css';

const Siparislerim = () => {
    const [siparisler, setSiparisler] = useState([]);
    const navigate = useNavigate();

    // Siparişleri localStorage'dan al
    useEffect(() => {
        const kaydedilmisSiparisler = JSON.parse(localStorage.getItem('siparisler')) || [];
        setSiparisler(kaydedilmisSiparisler);
    }, []);

    // Sipariş durumu açıklaması
    const durumAciklama = (durum) => {
        switch (durum) {
            case 'Hazırlanıyor':
                return 'Siparişiniz hazırlanıyor';
            case 'Yolda':
                return 'Siparişiniz yolda';
            case 'Teslim Edildi':
                return 'Siparişiniz teslim edildi';
            default:
                return durum;
        }
    };

    // Sipariş detayına git
    const siparisDetayGit = (siparis) => {
        // Detaya gitmek için state'i localStorage'a kaydedebiliriz
        localStorage.setItem('seciliSiparis', JSON.stringify(siparis));
        // Şimdilik sadece alert ile bilgi verelim
        alert(`Sipariş detayları:

Tarih: ${siparis.tarih}
Durum: ${siparis.durum}
Toplam: ${siparis.toplamTutar.toFixed(2)}₺`);
    };

    // Tekrar sipariş ver
    const tekrarSiparisVer = (siparis) => {
        alert('Tekrar sipariş verme özelliği henüz aktif değil.');
    };

    return (
        <div className="siparislerim-sayfa container full-width">
            <h1>Siparişlerim</h1>

            {siparisler.length === 0 ? (
                <div className="bos-siparis">
                    <p>Henüz siparişiniz bulunmamaktadır.</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('/menu')}
                    >
                        Sipariş Ver
                    </button>
                </div>
            ) : (
                <div className="siparis-listesi">
                    {siparisler.map((siparis) => (
                        <div className="siparis-kart" key={siparis.id}>
                            <div className="siparis-baslik">
                                <div>
                                    <h3>Sipariş #{siparis.id.toString().slice(-6)}</h3>
                                    <p className="siparis-tarih">{siparis.tarih}</p>
                                </div>
                                <div className="siparis-durum">
                                    <span className={`durum ${siparis.durum.toLowerCase().replace(' ', '-')}`}>
                                        {durumAciklama(siparis.durum)}
                                    </span>
                                </div>
                            </div>

                            <div className="siparis-ozet">
                                <div className="urunler">
                                    {siparis.urunler.slice(0, 3).map((urun, index) => (
                                        <span key={index} className="urun-etiket">
                                            {urun.ad} x {urun.adet}
                                        </span>
                                    ))}
                                    {siparis.urunler.length > 3 && (
                                        <span className="urun-etiket">
                                            +{siparis.urunler.length - 3} daha
                                        </span>
                                    )}
                                </div>

                                <div className="siparis-tutar">
                                    <strong>{siparis.toplamTutar.toFixed(2)}₺</strong>
                                </div>
                            </div>

                            <div className="siparis-islem">
                                <button
                                    className="btn btn-outline btn-sm"
                                    onClick={() => siparisDetayGit(siparis)}
                                >
                                    Detay Görüntüle
                                </button>
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => tekrarSiparisVer(siparis)}
                                >
                                    Tekrar Sipariş Ver
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Siparislerim;