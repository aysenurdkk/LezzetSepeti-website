import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>LezzetSepeti</h3>
                    <p>En lezzetli yemekler kapınızda!</p>
                </div>

                <div className="footer-section">
                    <h4>İletişim</h4>
                    <p>📞 444 1 444</p>
                    <p>📧 info@lezzetsepeti.com</p>
                </div>

                <div className="footer-section">
                    <h4>Adres</h4>
                    <p>Lezzet Mah. Sepet Cad. No: 1</p>
                    <p>İstanbul, Türkiye</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} LezzetSepeti. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;