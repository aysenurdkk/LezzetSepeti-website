import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSepet } from '../context/SepetContext';
import '../styles/Header.css';

const Header = () => {
    const { sepet } = useSepet();
    const [mobilMenuAcik, setMobilMenuAcik] = useState(false);
    const location = useLocation();

    // Sepetteki toplam ürün sayısını hesapla
    const toplamUrunSayisi = sepet.urunler.reduce((toplam, item) => toplam + item.adet, 0);

    // Mobil menü toggle
    const toggleMobilMenu = () => {
        setMobilMenuAcik(!mobilMenuAcik);
    };

    // Menü öğeleri
    const menuOgeleri = [
        { ad: 'Ana Sayfa', yol: '/' },
        { ad: 'Menü', yol: '/menu' },
        { ad: 'Siparişlerim', yol: '/siparislerim' }
    ];

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <h1>LezzetSepeti</h1>
                </Link>

                {/* Masaüstü Menü */}
                <nav className="desktop-menu">
                    <ul className="menu-list">
                        {menuOgeleri.map((item) => (
                            <li key={item.yol}>
                                <Link
                                    to={item.yol}
                                    className={location.pathname === item.yol ? 'active' : ''}
                                >
                                    {item.ad}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Sağ taraf - Sepet ve Mobil Menü Butonu */}
                <div className="header-right">
                    <Link to="/sepet" className="sepet-link">
                        <span className="sepet-icon">🛒</span>
                        {toplamUrunSayisi > 0 && (
                            <span className="sepet-sayac">{toplamUrunSayisi}</span>
                        )}
                    </Link>

                    {/* Mobil Menü Butonu */}
                    <button
                        className="mobil-menu-toggle"
                        onClick={toggleMobilMenu}
                        aria-label="Menüyü aç/kapat"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobil Menü */}
            <div className={`mobil-menu ${mobilMenuAcik ? 'acik' : ''}`}>
                <ul className="mobil-menu-list">
                    {menuOgeleri.map((item) => (
                        <li key={item.yol}>
                            <Link
                                to={item.yol}
                                className={location.pathname === item.yol ? 'active' : ''}
                                onClick={() => setMobilMenuAcik(false)}
                            >
                                {item.ad}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;