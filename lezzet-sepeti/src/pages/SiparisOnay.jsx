import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SiparisOnay.css';

const SiparisOnay = () => {
    const navigate = useNavigate();

    // Sipariş numarası oluştur (son 6 hane)
    const siparisNo = Math.floor(100000 + Math.random() * 900000);

    // Tahmini teslimat süresi (30-45 dakika)
    const tahminiSure = Math.floor(30 + Math.random() * 15);

    return (
        <div className="siparis-onay container full-width">
            <div className="onay-icerik">
                {/* Başarılı animasyonu */}
                <div className="animasyon">
                    <div className="checkmark">&#10003;</div>
                </div>

                <h1>Siparişiniz Alındı!</h1>

                <div className="onay-bilgi">
                    <p>Sipariş numaranız: <strong>#{siparisNo}</strong></p>
                    <p>Tahmini teslimat süresi: <strong>{tahminiSure} dakika</strong></p>
                </div>

                <div className="onay-not">
                    <p>Siparişinizin durumunu <a href="/siparislerim">Siparişlerim</a> sayfasından takip edebilirsiniz.</p>
                </div>

                <div className="onay-butonlar">
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('/siparislerim')}
                    >
                        Siparişimi Görüntüle
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate('/')}
                    >
                        Ana Sayfa
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SiparisOnay;