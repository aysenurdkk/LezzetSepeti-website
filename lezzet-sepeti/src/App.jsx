import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SepetProvider } from './context/SepetContext';
import AnaSayfa from './pages/AnaSayfa';
import Menu from './pages/Menu';
import UrunDetay from './pages/UrunDetay';
import Sepet from './pages/Sepet';
import Siparis from './pages/Siparis';
import SiparisOnay from './pages/SiparisOnay';
import Siparislerim from './pages/Siparislerim';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <SepetProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<AnaSayfa />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/urun/:id" element={<UrunDetay />} />
              <Route path="/sepet" element={<Sepet />} />
              <Route path="/siparis" element={<Siparis />} />
              <Route path="/siparis-onay" element={<SiparisOnay />} />
              <Route path="/siparislerim" element={<Siparislerim />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SepetProvider>
  );
}

export default App;