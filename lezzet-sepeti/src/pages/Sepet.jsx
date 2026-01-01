import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSepet } from '../context/SepetContext';
import kuponlar from '../data/kuponlar';
import '../styles/Sepet.css';

const Sepet = () => {
    const { sepet, adetGuncelle, urunSil, sepetiTemizle, kuponUygula, kuponKaldir, toplamHesapla } = useSepet();
    const [kuponKodu, setKuponKodu] = useState('');
    const navigate = useNavigate();

    // Toplam hesapla
    const { araToplam, indirim, kdv, toplam } = toplamHesapla();

    // Kupon uygula handler
    const kuponUygulaHandler = () => {
        const kupon = kuponlar.find(k => k.kod === kuponKodu.toUpperCase());
        if (kupon) {
            kuponUygula(kupon);
            alert(`Kupon uygulandı: ${kupon.aciklama}`);
        } else {
            alert('Geçersiz kupon kodu!');
        }
    };

    // Siparişi tamamla
    const siparisiTamamla = () => {
        if (sepet.urunler.length === 0) {
            alert('Sepetiniz boş!');
            return;
        }
        navigate('/siparis');
    };

    return (
        <div className="sepet-sayfa container full-width">
            <h1>Sepetim</h1>

            {sepet.urunler.length === 0 ? (
                <div className="bos-sepet">
                    <p>Sepetiniz boş</p>
                    <a href="/menu" className="btn btn-primary">Menüye Git</a>
                </div>
            ) : (
                <>
                    <div className="sepet-icerik">
                        {/* Ürün Listesi */}
                        <div className="urun-listesi">
                            {sepet.urunler.map((item) => (
                                <div className="sepet-urun" key={item.id}>
                                    <div className="urun-gorsel">
                                        <img src={item.resim} alt={item.ad} />
                                    </div>

                                    <div className="urun-bilgi">
                                        <h3>{item.ad}</h3>

                                        {/* Seçenekler */}
                                        {item.secenekler.porsiyon && (
                                            <p><strong>Porsiyon:</strong> {item.secenekler.porsiyon}</p>
                                        )}

                                        {item.secenekler.extraMalzemeler.length > 0 && (
                                            <p><strong>Extra Malzemeler:</strong> {item.secenekler.extraMalzemeler.join(', ')}</p>
                                        )}

                                        {item.secenekler.siparisNotu && (
                                            <p><strong>Not:</strong> {item.secenekler.siparisNotu}</p>
                                        )}

                                        <div className="urun-fiyat">
                                            <span>{item.fiyat}₺ x {item.adet} = {(item.fiyat * item.adet).toFixed(2)}₺</span>
                                        </div>
                                    </div>

                                    <div className="urun-islem">
                                        {/* Adet Güncelle */}
                                        <div className="adet-guncelle">
                                            <button
                                                className="adet-btn"
                                                onClick={() => adetGuncelle(item.id, item.adet - 1)}
                                            >
                                                -
                                            </button>
                                            <span className="adet">{item.adet}</span>
                                            <button
                                                className="adet-btn"
                                                onClick={() => adetGuncelle(item.id, item.adet + 1)}
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Ürün Sil */}
                                        <button
                                            className="btn btn-outline btn-sm"
                                            onClick={() => urunSil(item.id)}
                                        >
                                            Sil
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {/* Sepeti Temizle */}
                            <div className="sepet-islem">
                                <button
                                    className="btn btn-outline"
                                    onClick={sepetiTemizle}
                                >
                                    Sepeti Temizle
                                </button>
                            </div>
                        </div>

                        {/* Sipariş Özeti */}
                        <div className="siparis-ozet">
                            <h2>Sipariş Özeti</h2>

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

                            {/* Kupon Kodu */}
                            <div className="kupon-alani">
                                <div className="form-group">
                                    <label htmlFor="kuponKodu">Kupon Kodu</label>
                                    <div className="kupon-input">
                                        <input
                                            type="text"
                                            id="kuponKodu"
                                            value={kuponKodu}
                                            onChange={(e) => setKuponKodu(e.target.value)}
                                            placeholder="Kupon kodunu girin"
                                            className="form-control"
                                        />
                                        <button
                                            className="btn btn-secondary"
                                            onClick={kuponUygulaHandler}
                                        >
                                            Uygula
                                        </button>
                                    </div>
                                </div>

                                {sepet.uygulananKupon && (
                                    <div className="uygulanan-kupon">
                                        <span>{sepet.uygulananKupon.kod} - {sepet.uygulananKupon.aciklama}</span>
                                        <button
                                            className="btn btn-outline btn-sm"
                                            onClick={kuponKaldir}
                                        >
                                            Kaldır
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Siparişi Tamamla */}
                            <button
                                className="btn btn-primary btn-lg siparisi-tamamla"
                                onClick={siparisiTamamla}
                            >
                                Siparişi Tamamla
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sepet;