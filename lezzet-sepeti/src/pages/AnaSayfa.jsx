import React from 'react';
import { Link } from 'react-router-dom';
import { useSepet } from '../context/SepetContext';
import { urunler } from '../data/urunler';
import '../styles/AnaSayfa.css';

const AnaSayfa = () => {
    const { sepeteEkle } = useSepet();
    // Popüler ürünleri al (ilk 6 ürün)
    const populerUrunler = urunler.slice(0, 6);

    // Kategoriler
    const kategoriler = [
        { ad: 'Ana Yemekler', yol: '/menu?kategori=anaYemek', renk: '#e74c3c' },
        { ad: 'Burgerler', yol: '/menu?kategori=burger', renk: '#3498db' },
        { ad: 'Pizzalar', yol: '/menu?kategori=pizza', renk: '#f1c40f' },
        { ad: 'Salatalar', yol: '/menu?kategori=salata', renk: '#2ecc71' },
        { ad: 'İçecekler', yol: '/menu?kategori=icecek', renk: '#9b59b6' },
        { ad: 'Tatlılar', yol: '/menu?kategori=tatli', renk: '#e67e22' }
    ];

    return (
        <div className="ana-sayfa">
            {/* Tanıtım Banner */}
            <section className="banner" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/pictures/anaresim.jpg')" }}>
                <div className="banner-icerik">
                    <h2>LezzetSepeti'ne Hoşgeldiniz!</h2>
                    <p>En taze ve lezzetli yemekler şimdi kapınızda</p>
                    <Link to="/menu" className="btn btn-primary">Sipariş Ver</Link>
                </div>
            </section>

            {/* Günün Fırsatı */}
            <section className="gunun-firsati">
                <div className="full-width-section">
                    <h2>🔥 Günün Fırsatı</h2>
                    <div className="firsat-icerik">
                        <div className="firsat-resim">
                            <img src="/pictures/urun16.jpg" alt="Double Whopper" />
                        </div>
                        <div className="firsat-detay">
                            <h3>Double Whopper</h3>
                            <p>İki kat dana köfte, cheddar peyniri, marul, domates ve özel sos</p>
                            <div className="fiyatlar">
                                <span className="eski-fiyat">140₺</span>
                                <span className="yeni-fiyat">125₺</span>
                            </div>
                            <Link to="/urun/16" className="btn btn-sm btn-primary">İncele</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kategorilere Hızlı Erişim */}
            <section className="kategoriler">
                <div className="full-width-section">
                    <h2>Hızlı Erişim</h2>
                    <div className="kategori-grid">
                        {kategoriler.map((kategori, index) => (
                            <Link
                                to={kategori.yol}
                                key={index}
                                className="kategori-kart"
                                style={{ backgroundColor: kategori.renk }}
                            >
                                <h3>{kategori.ad}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popüler Ürünler */}
            <section className="populer-urunler">
                <div className="full-width-section">
                    <h2>Popüler Ürünler</h2>
                    <div className="urun-grid">
                        {populerUrunler.map((urun) => (
                            <div className="urun-kart" key={urun.id}>
                                <img src={urun.resim} alt={urun.ad} />
                                <div className="urun-bilgi">
                                    <h3>{urun.ad}</h3>
                                    <p>{urun.aciklama}</p>
                                    <div className="urun-alt">
                                        <span className="fiyat">{urun.fiyat}₺</span>
                                        <Link to={`/urun/${urun.id}`} className="btn btn-sm btn-primary">İncele</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AnaSayfa;