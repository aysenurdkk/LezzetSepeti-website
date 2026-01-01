import React from 'react';
import { Link } from 'react-router-dom';
import { useSepet } from '../context/SepetContext';

const UrunKart = ({ urun }) => {
    const { sepeteEkle } = useSepet();

    const sepeteEkleHandler = () => {
        sepeteEkle(urun);
    };

    return (
        <div className="urun-kart">
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
    );
};

export default UrunKart;