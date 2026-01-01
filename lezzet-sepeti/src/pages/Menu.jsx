import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import urunler from '../data/urunler';
import UrunKart from '../components/UrunKart';
import '../styles/Menu.css';

const Menu = () => {
    const [aramaParametreleri] = useSearchParams();
    const [aramaMetni, setAramaMetni] = useState('');
    const [secilenKategori, setSecilenKategori] = useState(aramaParametreleri.get('kategori') || 'tum');
    const [siralama, setSiralama] = useState('varsayilan');

    // Kategoriler
    const kategoriler = [
        { id: 'tum', ad: 'Tüm Ürünler' },
        { id: 'anaYemek', ad: 'Ana Yemekler' },
        { id: 'burger', ad: 'Burgerler' },
        { id: 'pizza', ad: 'Pizzalar' },
        { id: 'salata', ad: 'Salatalar' },
        { id: 'icecek', ad: 'İçecekler' },
        { id: 'tatli', ad: 'Tatlılar' }
    ];

    // Filtrelenmiş ve sıralanmış ürünleri hesapla
    const filtrelenmisUrunler = useMemo(() => {
        let sonuc = urunler;

        // Arama filtresi
        if (aramaMetni) {
            const aramaKucuk = aramaMetni.toLowerCase();
            sonuc = sonuc.filter(urun =>
                urun.ad.toLowerCase().includes(aramaKucuk) ||
                urun.aciklama.toLowerCase().includes(aramaKucuk)
            );
        }

        // Kategori filtresi
        if (secilenKategori !== 'tum') {
            sonuc = sonuc.filter(urun => urun.kategori === secilenKategori);
        }

        // Sıralama
        switch (siralama) {
            case 'fiyatArtan':
                return [...sonuc].sort((a, b) => a.fiyat - b.fiyat);
            case 'fiyatAzalan':
                return [...sonuc].sort((a, b) => b.fiyat - a.fiyat);
            default:
                return sonuc;
        }
    }, [aramaMetni, secilenKategori, siralama]);

    return (
        <div className="menu-sayfa">
            <div className="full-width-menu">
                <h1>Menü</h1>

                {/* Arama Çubuğu */}
                <div className="arama-alani">
                    <input
                        type="text"
                        placeholder="Ürün ara..."
                        value={aramaMetni}
                        onChange={(e) => setAramaMetni(e.target.value)}
                        className="arama-input"
                    />
                </div>

                <div className="menu-icerik">
                    {/* Sidebar - Kategoriler */}
                    <aside className="sidebar">
                        <h2>
                            Kategoriler
                        </h2>
                        <ul className="kategori-listesi">
                            {kategoriler.map(kategori => (
                                <li key={kategori.id}>
                                    <button
                                        className={secilenKategori === kategori.id ? 'aktif' : ''}
                                        onClick={() => setSecilenKategori(kategori.id)}
                                    >
                                        {kategori.ad}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Ana İçerik */}
                    <main className="menu-ana-icerik">
                        {/* Filtreleme ve Sonuç Sayısı */}
                        <div className="menu-header">
                            <div className="filter-info">
                                <p>{filtrelenmisUrunler.length} ürün bulundu</p>
                            </div>
                            <div className="filter-dropdown">
                                <select
                                    value={siralama}
                                    onChange={(e) => setSiralama(e.target.value)}
                                    className="siralama-select"
                                >
                                    <option value="varsayilan">Filtrele</option>
                                    <option value="fiyatArtan">Fiyata Göre (Artan)</option>
                                    <option value="fiyatAzalan">Fiyata Göre (Azalan)</option>
                                </select>
                            </div>
                        </div>

                        {/* Ürün Listesi */}
                        {filtrelenmisUrunler.length > 0 ? (
                            <div className="urun-grid">
                                {filtrelenmisUrunler.map(urun => (
                                    <UrunKart key={urun.id} urun={urun} />
                                ))}
                            </div>
                        ) : (
                            <div className="bos-sonuc">
                                <p>Aradığınız kriterlere uygun ürün bulunamadı.</p>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Menu;