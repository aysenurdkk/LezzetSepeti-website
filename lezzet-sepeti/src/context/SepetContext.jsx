import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Sepet öğesi yapısı
const sepetOgesiYapisi = (urun, adet = 1, secenekler = {}) => ({
    id: `${urun.id}-${Date.now()}`, // Benzersiz ID için timestamp ekliyoruz
    urunId: urun.id,
    ad: urun.ad,
    fiyat: urun.fiyat,
    resim: urun.resim,
    adet,
    secenekler: {
        porsiyon: secenekler.porsiyon || null,
        extraMalzemeler: secenekler.extraMalzemeler || [],
        siparisNotu: secenekler.siparisNotu || ""
    }
});

// Sepet reducer
const sepetReducer = (state, action) => {
    switch (action.tip) {
        case 'EKLE':
            // Aynı ürünü kontrol et (aynı seçeneklerle)
            const mevcutUrunIndex = state.urunler.findIndex(item =>
                item.urunId === action.urun.urunId &&
                item.secenekler.porsiyon === action.secenekler?.porsiyon &&
                JSON.stringify(item.secenekler.extraMalzemeler) === JSON.stringify(action.secenekler?.extraMalzemeler || [])
            );

            if (mevcutUrunIndex >= 0) {
                // Ürün zaten sepette varsa adedi artır
                const guncellenmisUrunler = [...state.urunler];
                guncellenmisUrunler[mevcutUrunIndex] = {
                    ...guncellenmisUrunler[mevcutUrunIndex],
                    adet: guncellenmisUrunler[mevcutUrunIndex].adet + 1
                };
                return { ...state, urunler: guncellenmisUrunler };
            } else {
                // Yeni ürün ekle
                const yeniUrun = sepetOgesiYapisi(action.urun, 1, action.secenekler);
                return { ...state, urunler: [...state.urunler, yeniUrun] };
            }

        case 'ADET_GUNCELLE':
            return {
                ...state,
                urunler: state.urunler.map(item =>
                    item.id === action.id ? { ...item, adet: action.adet } : item
                )
            };

        case 'SIL':
            return {
                ...state,
                urunler: state.urunler.filter(item => item.id !== action.id)
            };

        case 'SEPETI_TEMIZLE':
            return { ...state, urunler: [] };

        case 'KUPON_UYGULA':
            return { ...state, uygulananKupon: action.kupon };

        case 'KUPON_KALDIR':
            return { ...state, uygulananKupon: null };

        default:
            return state;
    }
};

// Başlangıç state'i
const baslangicState = {
    urunler: [],
    uygulananKupon: null
};

// Context oluşturma
const SepetContext = createContext();

// Provider bileşeni
export const SepetProvider = ({ children }) => {
    const [state, dispatch] = useReducer(sepetReducer, baslangicState, (initial) => {
        // LocalStorage'dan veri yükleme
        const kaydedilmisSepet = localStorage.getItem('sepet');
        return kaydedilmisSepet ? JSON.parse(kaydedilmisSepet) : initial;
    });

    // State her değiştiğinde localStorage'a kaydet
    useEffect(() => {
        localStorage.setItem('sepet', JSON.stringify(state));
    }, [state]);

    // Sepete ürün ekleme
    const sepeteEkle = (urun, secenekler = {}) => {
        dispatch({ tip: 'EKLE', urun, secenekler });
    };

    // Ürün adedini güncelleme
    const adetGuncelle = (id, adet) => {
        if (adet <= 0) {
            dispatch({ tip: 'SIL', id });
        } else {
            dispatch({ tip: 'ADET_GUNCELLE', id, adet });
        }
    };

    // Ürün silme
    const urunSil = (id) => {
        dispatch({ tip: 'SIL', id });
    };

    // Sepeti temizleme
    const sepetiTemizle = () => {
        dispatch({ tip: 'SEPETI_TEMIZLE' });
    };

    // Kupon uygulama
    const kuponUygula = (kupon) => {
        dispatch({ tip: 'KUPON_UYGULA', kupon });
    };

    // Kupon kaldırma
    const kuponKaldir = () => {
        dispatch({ tip: 'KUPON_KALDIR' });
    };

    // Toplam hesaplama
    const toplamHesapla = () => {
        const araToplam = state.urunler.reduce((toplam, item) => {
            return toplam + (item.fiyat * item.adet);
        }, 0);

        let indirim = 0;
        if (state.uygulananKupon) {
            indirim = (araToplam * state.uygulananKupon.indirimYuzdesi) / 100;
        }

        const kdv = ((araToplam - indirim) * 0.18); // %18 KDV
        const toplam = araToplam - indirim + kdv;

        return {
            araToplam: parseFloat(araToplam.toFixed(2)),
            indirim: parseFloat(indirim.toFixed(2)),
            kdv: parseFloat(kdv.toFixed(2)),
            toplam: parseFloat(toplam.toFixed(2))
        };
    };

    return (
        <SepetContext.Provider value={{
            sepet: state,
            sepeteEkle,
            adetGuncelle,
            urunSil,
            sepetiTemizle,
            kuponUygula,
            kuponKaldir,
            toplamHesapla
        }}>
            {children}
        </SepetContext.Provider>
    );
};

// Custom hook
export const useSepet = () => {
    const context = useContext(SepetContext);
    if (!context) {
        throw new Error('useSepet hook\'u SepetProvider içinde kullanılmalıdır');
    }
    return context;
};