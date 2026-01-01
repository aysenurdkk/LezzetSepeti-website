import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import urunler from '../data/urunler';
import { useSepet } from '../context/SepetContext';
import '../styles/UrunDetay.css';

const UrunDetay = () => {
    const { id } = useParams();
    const { sepeteEkle } = useSepet();
    const [adet, setAdet] = useState(1);
    const [secilenPorsiyon, setSecilenPorsiyon] = useState('');
    const [secilenExtraMalzemeler, setSecilenExtraMalzemeler] = useState([]);
    const [siparisNotu, setSiparisNotu] = useState('');

    // Ürünü bul
    const urun = urunler.find(u => u.id === parseInt(id));

    // Ürün yoksa 404 sayfası
    if (!urun) {
        return (
            <div className="urun-detay container full-width text-center mt-4">
                <h2>Ürün Bulunamadı</h2>
                <p>Aradığınız ürün mevcut değil.</p>
                <a href="/menu" className="btn btn-primary">Menüye Dön</a>
            </div>
        );
    }

    // Porsiyon seçimi handler
    const porsiyonSecHandler = (porsiyon) => {
        setSecilenPorsiyon(porsiyon);
    };

    // Extra malzeme seçimi handler
    const extraMalzemeSecHandler = (malzeme) => {
        if (secilenExtraMalzemeler.includes(malzeme)) {
            setSecilenExtraMalzemeler(secilenExtraMalzemeler.filter(m => m !== malzeme));
        } else {
            setSecilenExtraMalzemeler([...secilenExtraMalzemeler, malzeme]);
        }
    };

    // Sepete ekle handler
    const sepeteEkleHandler = () => {
        // Porsiyon seçimi zorunluluğu kontrolü
        if (urun.porsiyonSecenekleri && !secilenPorsiyon) {
            alert('Lütfen bir porsiyon seçiniz!');
            return;
        }

        const secenekler = {
            porsiyon: secilenPorsiyon,
            extraMalzemeler: secilenExtraMalzemeler,
            siparisNotu: siparisNotu
        };

        sepeteEkle(urun, secenekler);
        alert(`${urun.ad} sepete eklendi!`);
    };

    return (
        <div className="urun-detay container full-width">
            <div className="urun-detay-icerik">
                <div className="urun-gorsel">
                    <div className="urun-gorsel-icerik">
                        <img src={urun.resim} alt={urun.ad} />
                    </div>
                </div>

                <div className="urun-bilgileri">
                    <h1>{urun.ad}</h1>
                    <p className="urun-aciklama">{urun.aciklama}</p>

                    <div className="urun-fiyat">
                        <span>{urun.fiyat}₺</span>
                    </div>

                    {/* Porsiyon Seçimi */}
                    {urun.porsiyonSecenekleri && (
                        <div className="secenek-bolumu">
                            <h3>Porsiyon Seçimi</h3>
                            <div className="porsiyon-secenekleri">
                                {urun.porsiyonSecenekleri.map((porsiyon, index) => (
                                    <button
                                        key={index}
                                        className={`secenek-btn ${secilenPorsiyon === porsiyon ? 'aktif' : ''}`}
                                        onClick={() => porsiyonSecHandler(porsiyon)}
                                    >
                                        {porsiyon.charAt(0).toUpperCase() + porsiyon.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Extra Malzeme Seçimi */}
                    {urun.extraMalzemeler && (
                        <div className="secenek-bolumu">
                            <h3>Extra Malzeme</h3>
                            <div className="extra-malzemeler">
                                {urun.extraMalzemeler.map((malzeme, index) => (
                                    <label key={index} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={secilenExtraMalzemeler.includes(malzeme)}
                                            onChange={() => extraMalzemeSecHandler(malzeme)}
                                        />
                                        <span>{malzeme}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Adet Seçici */}
                    <div className="adet-secici">
                        <h3>Adet</h3>
                        <div className="adet-butonlari">
                            <button
                                className="adet-btn"
                                onClick={() => setAdet(Math.max(1, adet - 1))}
                            >
                                -
                            </button>
                            <span className="adet-goster">{adet}</span>
                            <button
                                className="adet-btn"
                                onClick={() => setAdet(adet + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Sipariş Notu */}
                    <div className="form-group">
                        <label htmlFor="siparisNotu">Sipariş Notu</label>
                        <textarea
                            id="siparisNotu"
                            className="form-control"
                            rows="3"
                            value={siparisNotu}
                            onChange={(e) => setSiparisNotu(e.target.value)}
                            placeholder="Özel isteklerinizi buraya yazabilirsiniz..."
                        ></textarea>
                    </div>

                    {/* Sepete Ekle Butonu */}
                    <button
                        className="btn btn-primary btn-lg sepete-ekle-btn"
                        onClick={sepeteEkleHandler}
                    >
                        Sepete Ekle - {(urun.fiyat * adet).toFixed(2)}₺
                    </button>
                </div>
            </div>

            {/* Besin Değerleri */}
            <div className="besin-degerleri">
                <h2>Besin Değerleri</h2>
                <div className="degerler-grid">
                    <div className="deger-item">
                        <span className="deger-baslik">Kalori</span>
                        <span className="deger-miktar">{urun.besinDegerleri.kalori} kcal</span>
                    </div>
                    <div className="deger-item">
                        <span className="deger-baslik">Protein</span>
                        <span className="deger-miktar">{urun.besinDegerleri.protein}g</span>
                    </div>
                    <div className="deger-item">
                        <span className="deger-baslik">Karbonhidrat</span>
                        <span className="deger-miktar">{urun.besinDegerleri.karbonhidrat}g</span>
                    </div>
                    <div className="deger-item">
                        <span className="deger-baslik">Yağ</span>
                        <span className="deger-miktar">{urun.besinDegerleri.yag}g</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UrunDetay;