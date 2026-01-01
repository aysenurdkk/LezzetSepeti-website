import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found container full-width">
            <div className="not-found-icerik">
                <h1>404</h1>
                <h2>Sayfa Bulunamadı</h2>
                <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
                <Link to="/" className="btn btn-primary">
                    Ana Sayfaya Dön
                </Link>
            </div>
        </div>
    );
};

export default NotFound;