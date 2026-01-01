// Ürün verileri
export const urunler = [
    // Ana Yemekler
    {
        id: 1,
        ad: "Izgara Tavuk Izgara",
        aciklama: "Özel baharatlarla marine edilmiş ızgara tavuk, patates kızartması ve salata",
        fiyat: 85,
        kategori: "anaYemek",
        resim: "/pictures/urun1.jpg",
        besinDegerleri: {
            kalori: 650,
            protein: 45,
            karbonhidrat: 35,
            yag: 25
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"],
        extraMalzemeler: ["Ekstra peynir", "Acı sos", "Barbekü sos"]
    },
    {
        id: 2,
        ad: "Körili Tavuk",
        aciklama: "Körili sosla hazırlanmış tavuk göğsü, pirinç pilavı ve turşu",
        fiyat: 90,
        kategori: "anaYemek",
        resim: "/pictures/urun2.jpg",
        besinDegerleri: {
            kalori: 720,
            protein: 50,
            karbonhidrat: 40,
            yag: 30
        }
    },
    {
        id: 3,
        ad: "İskender",
        aciklama: "İnce dilimlenmiş dana eti, özel sos, rendelenmiş kaşar peyniri ve yoğurt üzerine sıcak servis",
        fiyat: 120,
        kategori: "anaYemek",
        resim: "/pictures/urun3.jpg",
        besinDegerleri: {
            kalori: 680,
            protein: 35,
            karbonhidrat: 55,
            yag: 32
        }
    },
    {
        id: 4,
        ad: "Beef Steak",
        aciklama: "Izgara dana bonfile, patates püresi ve sebzeli garnitür",
        fiyat: 180,
        kategori: "anaYemek",
        resim: "/pictures/urun4.jpg",
        besinDegerleri: {
            kalori: 950,
            protein: 65,
            karbonhidrat: 30,
            yag: 55
        },
        extraMalzemeler: ["Biberli sos", "Mantar sosu", "Patates kızartması"]
    },
    {
        id: 5,
        ad: "Lahmacun",
        aciklama: "İnce açılmış hamur üzerine kıyma, soğan, sarımsak ve baharatlarla hazırlanmış geleneksel lezzet",
        fiyat: 65,
        kategori: "anaYemek",
        resim: "/pictures/urun5.jpg",
        besinDegerleri: {
            kalori: 320,
            protein: 15,
            karbonhidrat: 35,
            yag: 12
        }
    },
    {
        id: 6,
        ad: "Izgara Somon",
        aciklama: "Limonlu ızgara somon, buğday salatası ve yoğurt sos",
        fiyat: 160,
        kategori: "anaYemek",
        resim: "/pictures/urun6.jpg",
        besinDegerleri: {
            kalori: 620,
            protein: 50,
            karbonhidrat: 20,
            yag: 35
        }
    },
    {
        id: 7,
        ad: "Kuzu Şiş",
        aciklama: "Baharatlı kuzu şiş, köz patlıcan ve yoğurtlu pilav",
        fiyat: 170,
        kategori: "anaYemek",
        resim: "/pictures/urun7.jpg",
        besinDegerleri: {
            kalori: 820,
            protein: 60,
            karbonhidrat: 50,
            yag: 40
        }
    },
    {
        id: 8,
        ad: "Tavuk Döner",
        aciklama: "Döner tadında ızgara tavuk, pilav ve cacık",
        fiyat: 75,
        kategori: "anaYemek",
        resim: "/pictures/urun8.jpg",
        besinDegerleri: {
            kalori: 580,
            protein: 40,
            karbonhidrat: 45,
            yag: 25
        }
    },
    {
        id: 9,
        ad: "Köfte Izgara",
        aciklama: "Köy usulü kıyma köfte, köz patates ve şiveydiz salata",
        fiyat: 100,
        kategori: "anaYemek",
        resim: "/pictures/urun9.jpg",
        besinDegerleri: {
            kalori: 720,
            protein: 45,
            karbonhidrat: 35,
            yag: 40
        }
    },
    {
        id: 10,
        ad: "Balık Buğulama",
        aciklama: "Mezgit buğulama, zeytinyağlı sebze ve pirinç pilavı",
        fiyat: 120,
        kategori: "anaYemek",
        resim: "/pictures/urun10.jpg",
        besinDegerleri: {
            kalori: 480,
            protein: 35,
            karbonhidrat: 40,
            yag: 20
        }
    },
    {
        id: 11,
        ad: "Lazanya",
        aciklama: "Katmanlar halinde dizilmiş hamur, kıyma sosu, béchamel sosu ve mozarella peyniriyle fırınlanmış İtalyan yemeği",
        fiyat: 110,
        kategori: "anaYemek",
        resim: "/pictures/urun11.jpg",
        besinDegerleri: {
            kalori: 720,
            protein: 35,
            karbonhidrat: 65,
            yag: 38
        }
    },
    {
        id: 12,
        ad: "Tavuklu Makarna",
        aciklama: "Krema soslu tavuklu mantar makarnası",
        fiyat: 80,
        kategori: "anaYemek",
        resim: "/pictures/urun12.jpg",
        besinDegerleri: {
            kalori: 720,
            protein: 35,
            karbonhidrat: 65,
            yag: 25
        }
    },

    // Burgerler
    {
        id: 13,
        ad: "Etli Barbekü Burger",
        aciklama: "Dana kıyma köfte, barbekü sosu, cheddar peyniri, marul ve domates",
        fiyat: 110,
        kategori: "burger",
        resim: "/pictures/urun13.jpg",
        besinDegerleri: {
            kalori: 850,
            protein: 40,
            karbonhidrat: 60,
            yag: 45
        },
        extraMalzemeler: ["Ekstra peynir", "Soğan halkası", "Patates kızartması"]
    },
    {
        id: 14,
        ad: "Cheeseburger",
        aciklama: "Dana kıyma köfte, çift katlı cheddar peyniri, özel sos",
        fiyat: 105,
        kategori: "burger",
        resim: "/pictures/urun14.jpg",
        besinDegerleri: {
            kalori: 920,
            protein: 45,
            karbonhidrat: 55,
            yag: 50
        }
    },
    {
        id: 15,
        ad: "Vegan Burger",
        aciklama: "Bitki bazlı köfte, avokado, marul ve vegan mayo",
        fiyat: 95,
        kategori: "burger",
        resim: "/pictures/urun15.jpg",
        besinDegerleri: {
            kalori: 620,
            protein: 25,
            karbonhidrat: 50,
            yag: 30
        }
    },
    {
        id: 16,
        ad: "Double Whopper",
        aciklama: "İki kat dana köfte, cheddar peyniri, marul, domates ve özel sos",
        fiyat: 125,
        kategori: "burger",
        resim: "/pictures/urun16.jpg",
        besinDegerleri: {
            kalori: 1150,
            protein: 55,
            karbonhidrat: 65,
            yag: 65
        }
    },
    {
        id: 17,
        ad: "Mantarlı Burger",
        aciklama: "Dana köfte, taze mantar, swiss peyniri ve trüflü mayo",
        fiyat: 115,
        kategori: "burger",
        resim: "/pictures/urun17.jpg",
        besinDegerleri: {
            kalori: 880,
            protein: 42,
            karbonhidrat: 58,
            yag: 48
        }
    },
    {
        id: 18,
        ad: "Texas BBQ Burger",
        aciklama: "Dana köfte, barbekü sosu, soğan halkaları ve cheddar",
        fiyat: 120,
        kategori: "burger",
        resim: "/pictures/urun18.jpg",
        besinDegerleri: {
            kalori: 950,
            protein: 45,
            karbonhidrat: 62,
            yag: 52
        }
    },
    {
        id: 19,
        ad: "Classic Burger",
        aciklama: "Dana köfte, marul, domates, turşu ve klasik burger sos",
        fiyat: 98,
        kategori: "burger",
        resim: "/pictures/urun19.jpg",
        besinDegerleri: {
            kalori: 820,
            protein: 38,
            karbonhidrat: 52,
            yag: 45
        }
    },
    {
        id: 20,
        ad: "Fish Burger",
        aciklama: "Pane kılmış levrek fileto, tartar sos ve marul",
        fiyat: 105,
        kategori: "burger",
        resim: "/pictures/urun20.jpg",
        besinDegerleri: {
            kalori: 750,
            protein: 35,
            karbonhidrat: 48,
            yag: 40
        }
    },
    {
        id: 21,
        ad: "Chicken Burger",
        aciklama: "Izgara tavuk göğsü, barbekü sos ve marul",
        fiyat: 92,
        kategori: "burger",
        resim: "/pictures/urun21.jpg",
        besinDegerleri: {
            kalori: 680,
            protein: 32,
            karbonhidrat: 45,
            yag: 38
        }
    },

    // Pizzalar
    {
        id: 22,
        ad: "Mantarlı Pizza",
        aciklama: "İnce hamur, mozzarella peyniri, taze mantar, kekik ve zeytinyağı",
        fiyat: 120,
        kategori: "pizza",
        resim: "/pictures/urun22.jpg",
        besinDegerleri: {
            kalori: 920,
            protein: 35,
            karbonhidrat: 80,
            yag: 40
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 23,
        ad: "Karışık Pizza",
        aciklama: "Sucuk, sosis, mantar, biber, mısır ve mozzarella peyniri",
        fiyat: 135,
        kategori: "pizza",
        resim: "/pictures/urun23.jpg",
        besinDegerleri: {
            kalori: 1050,
            protein: 40,
            karbonhidrat: 95,
            yag: 45
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 24,
        ad: "Vejetaryen Pizza",
        aciklama: "Kabak, patlıcan, biber, soğan, zeytin ve mozzarella peyniri",
        fiyat: 115,
        kategori: "pizza",
        resim: "/pictures/urun24.jpg",
        besinDegerleri: {
            kalori: 820,
            protein: 30,
            karbonhidrat: 75,
            yag: 35
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 25,
        ad: "Dört Peynirli Pizza",
        aciklama: "Mozzarella, cheddar, parmesan ve lor peyniri",
        fiyat: 125,
        kategori: "pizza",
        resim: "/pictures/urun25.jpg",
        besinDegerleri: {
            kalori: 980,
            protein: 40,
            karbonhidrat: 85,
            yag: 45
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 26,
        ad: "Pepperoni Pizza",
        aciklama: "İnce hamur, mozzarella ve bol pepperoni",
        fiyat: 130,
        kategori: "pizza",
        resim: "/pictures/urun26.jpg",
        besinDegerleri: {
            kalori: 1020,
            protein: 38,
            karbonhidrat: 90,
            yag: 42
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 27,
        ad: "Sucuklu Pizza",
        aciklama: "İnce hamur, mozzarella, baharatlı sucuk ve biber",
        fiyat: 128,
        kategori: "pizza",
        resim: "/pictures/urun27.jpg",
        besinDegerleri: {
            kalori: 990,
            protein: 36,
            karbonhidrat: 88,
            yag: 41
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 28,
        ad: "Ton Balıklı Pizza",
        aciklama: "İnce hamur, mozzarella, ton balığı ve mısır",
        fiyat: 135,
        kategori: "pizza",
        resim: "/pictures/urun28.jpg",
        besinDegerleri: {
            kalori: 950,
            protein: 34,
            karbonhidrat: 85,
            yag: 39
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 29,
        ad: "Vejetaryen Deluxe Pizza",
        aciklama: "İnce hamur, mozzarella, brokoli, mısır, zeytin ve biber",
        fiyat: 122,
        kategori: "pizza",
        resim: "/pictures/urun29.jpg",
        besinDegerleri: {
            kalori: 880,
            protein: 28,
            karbonhidrat: 82,
            yag: 36
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 30,
        ad: "Margarita Pizza",
        aciklama: "İnce hamur, mozzarella, taze fesleğen ve domates sosu",
        fiyat: 110,
        kategori: "pizza",
        resim: "/pictures/urun30.jpg",
        besinDegerleri: {
            kalori: 850,
            protein: 32,
            karbonhidrat: 78,
            yag: 34
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 31,
        ad: "Hawaiian Pizza",
        aciklama: "İnce hamur, mozzarella, jambon ve ananas",
        fiyat: 126,
        kategori: "pizza",
        resim: "/pictures/urun31.jpg",
        besinDegerleri: {
            kalori: 920,
            protein: 35,
            karbonhidrat: 84,
            yag: 38
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 32,
        ad: "Kavurmalı Pizza",
        aciklama: "İnce hamur, mozzarella, pastırma ve yeşil biber",
        fiyat: 145,
        kategori: "pizza",
        resim: "/pictures/urun32.jpg",
        besinDegerleri: {
            kalori: 1080,
            protein: 42,
            karbonhidrat: 92,
            yag: 48
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },
    {
        id: 33,
        ad: "Truffle Pizza",
        aciklama: "İnce hamur, mozzarella, mantar ve trüf yağı",
        fiyat: 155,
        kategori: "pizza",
        resim: "/pictures/urun33.jpg",
        besinDegerleri: {
            kalori: 1050,
            protein: 36,
            karbonhidrat: 89,
            yag: 52
        },
        porsiyonSecenekleri: ["küçük", "orta", "büyük"]
    },

    // Salatalar
    {
        id: 34,
        ad: "Ton Balıklı Salata",
        aciklama: "Taze yeşillikler, ton balığı, cherry domates, salatalık ve zeytin",
        fiyat: 75,
        kategori: "salata",
        resim: "/pictures/urun34.jpg",
        besinDegerleri: {
            kalori: 320,
            protein: 25,
            karbonhidrat: 15,
            yag: 18
        }
    },
    {
        id: 35,
        ad: "Caesar Salata",
        aciklama: "Romaine marul, tavuk göğsü, parmesan peyniri, kruton ve caesar sos",
        fiyat: 80,
        kategori: "salata",
        resim: "/pictures/urun35.jpg",
        besinDegerleri: {
            kalori: 420,
            protein: 30,
            karbonhidrat: 20,
            yag: 28
        }
    },
    {
        id: 36,
        ad: "Mevsim Salata",
        aciklama: "Taze mevsim yeşillikleri, nar ekşisi ve ceviz",
        fiyat: 65,
        kategori: "salata",
        resim: "/pictures/urun36.jpg",
        besinDegerleri: {
            kalori: 220,
            protein: 8,
            karbonhidrat: 12,
            yag: 15
        }
    },
    {
        id: 37,
        ad: "Akdeniz Salata",
        aciklama: "Yeşil salata, feta peyniri, zeytin, domates ve salatalık",
        fiyat: 70,
        kategori: "salata",
        resim: "/pictures/urun37.jpg",
        besinDegerleri: {
            kalori: 280,
            protein: 15,
            karbonhidrat: 10,
            yag: 20
        }
    },
    {
        id: 38,
        ad: "Çoban Salata",
        aciklama: "Domates, salatalık, biber, soğan ve beyaz peynir",
        fiyat: 55,
        kategori: "salata",
        resim: "/pictures/urun38.jpg",
        besinDegerleri: {
            kalori: 200,
            protein: 12,
            karbonhidrat: 8,
            yag: 14
        }
    },
    {
        id: 39,
        ad: "Tavuklu Yeşil Salata",
        aciklama: "Yeşil marul, ızgara tavuk, cherry domates ve yoğurt sos",
        fiyat: 85,
        kategori: "salata",
        resim: "/pictures/urun39.jpg",
        besinDegerleri: {
            kalori: 350,
            protein: 32,
            karbonhidrat: 12,
            yag: 22
        }
    },
    {
        id: 40,
        ad: "Quinoa Salata",
        aciklama: "Quinoa, avokado, roka, nar ve ceviz içeren sağlıklı salata",
        fiyat: 90,
        kategori: "salata",
        resim: "/pictures/urun40.jpg",
        besinDegerleri: {
            kalori: 250,
            protein: 6,
            karbonhidrat: 30,
            yag: 12
        }
    },
    {
        id: 41,
        ad: "Rus Salata",
        aciklama: "Patates, havuç, bezelye, salamura salyası ve mısır",
        fiyat: 60,
        kategori: "salata",
        resim: "/pictures/urun41.jpg",
        besinDegerleri: {
            kalori: 420,
            protein: 18,
            karbonhidrat: 35,
            yag: 25
        }
    },
    {
        id: 42,
        ad: "Havuç Salata",
        aciklama: "Havuç ve yoğurtun birleşimi",
        fiyat: 88,
        kategori: "salata",
        resim: "/pictures/urun42.jpg",
        besinDegerleri: {
            kalori: 380,
            protein: 28,
            karbonhidrat: 15,
            yag: 25
        }
    },
    {
        id: 43,
        ad: "Asya Salata",
        aciklama: "Çin lahanası, havuç, tofu ve susamlı soy sos",
        fiyat: 82,
        kategori: "salata",
        resim: "/pictures/urun43.jpg",
        besinDegerleri: {
            kalori: 280,
            protein: 15,
            karbonhidrat: 20,
            yag: 16
        }
    },

    // İçecekler
    {
        id: 44,
        ad: "Kola",
        aciklama: "0.33 lt cam şişe kola",
        fiyat: 25,
        kategori: "icecek",
        resim: "/pictures/urun44.jpg",
        besinDegerleri: {
            kalori: 140,
            protein: 0,
            karbonhidrat: 35,
            yag: 0
        }
    },
    {
        id: 45,
        ad: "Limonata",
        aciklama: "Taze sıkılmış limon suyu ve şeker",
        fiyat: 30,
        kategori: "icecek",
        resim: "/pictures/urun45.jpg",
        besinDegerleri: {
            kalori: 120,
            protein: 0,
            karbonhidrat: 30,
            yag: 0
        }
    },
    {
        id: 46,
        ad: "Portakal Suyu",
        aciklama: "Taze sıkılmış portakal suyu",
        fiyat: 35,
        kategori: "icecek",
        resim: "/pictures/urun46.jpg",
        besinDegerleri: {
            kalori: 110,
            protein: 2,
            karbonhidrat: 25,
            yag: 0
        }
    },
    {
        id: 47,
        ad: "Ayran",
        aciklama: "Geleneksel yoğurtlu içecek",
        fiyat: 20,
        kategori: "icecek",
        resim: "/pictures/urun47.jpg",
        besinDegerleri: {
            kalori: 135,
            protein: 0,
            karbonhidrat: 34,
            yag: 0
        }
    },
    {
        id: 48,
        ad: "Gazoz",
        aciklama: "Çeşitli aromalarda gazlı içecek",
        fiyat: 26,
        kategori: "icecek",
        resim: "/pictures/urun48.jpg",
        besinDegerleri: {
            kalori: 520,
            protein: 12,
            karbonhidrat: 65,
            yag: 28
        }
    },
    {
        id: 49,
        ad: "Soğuk Çay",
        aciklama: "Bergamot aromalı Earl Grey çayı",
        fiyat: 24,
        kategori: "icecek",
        resim: "/pictures/urun49.jpg",
        besinDegerleri: {
            kalori: 320,
            protein: 8,
            karbonhidrat: 45,
            yag: 12
        }
    },
    {
        id: 50,
        ad: "Smoothie",
        aciklama: "Muz, çilek ve yoğurt karışımı",
        fiyat: 42,
        kategori: "icecek",
        resim: "/pictures/urun50.jpg",
        besinDegerleri: {
            kalori: 580,
            protein: 15,
            karbonhidrat: 70,
            yag: 30
        }
    },

    // Tatlılar
    {
        id: 51,
        ad: "Çikolatalı Pasta",
        aciklama: "Yoğun çikolata aromalı sıcak pasta",
        fiyat: 50,
        kategori: "tatli",
        resim: "/pictures/urun51.jpg",
        besinDegerleri: {
            kalori: 450,
            protein: 9,
            karbonhidrat: 52,
            yag: 24
        }
    },
    {
        id: 52,
        ad: "Tiramisu",
        aciklama: "Kahve aromalı İtalyan tatlısı mascarpone kreması",
        fiyat: 55,
        kategori: "tatli",
        resim: "/pictures/urun52.jpg",
        besinDegerleri: {
            kalori: 510,
            protein: 11,
            karbonhidrat: 48,
            yag: 32
        }
    },
    {
        id: 53,
        ad: "Kazandibi",
        aciklama: "Geleneksel Osmanlı tatlısı, krema ve karamel aromalı",
        fiyat: 45,
        kategori: "tatli",
        resim: "/pictures/urun53.jpg",
        besinDegerleri: {
            kalori: 280,
            protein: 6,
            karbonhidrat: 32,
            yag: 16
        }
    },
    {
        id: 54,
        ad: "Baklava",
        aciklama: "Fistikli baklava, taze fındık ve şerbet",
        fiyat: 60,
        kategori: "tatli",
        resim: "/pictures/urun54.jpg",
        besinDegerleri: {
            kalori: 390,
            protein: 7,
            karbonhidrat: 46,
            yag: 20
        }
    },
    {
        id: 55,
        ad: "Fırın Sütlaç",
        aciklama: "Fırınlanmış kremalı sütlü pirinç tatlısı",
        fiyat: 35,
        kategori: "tatli",
        resim: "/pictures/urun55.jpg",
        besinDegerleri: {
            kalori: 320,
            protein: 8,
            karbonhidrat: 45,
            yag: 12
        }
    },
    {
        id: 56,
        ad: "Künefe",
        aciklama: "Tel kadayıflı, peynirli ve şerbetli geleneksel tatlı",
        fiyat: 65,
        kategori: "tatli",
        resim: "/pictures/urun56.jpg",
        besinDegerleri: {
            kalori: 580,
            protein: 15,
            karbonhidrat: 70,
            yag: 30
        }
    },
    {
        id: 57,
        ad: "Profiterol",
        aciklama: "Krema dolgulu ve çikolata soslu profiteroller",
        fiyat: 52,
        kategori: "tatli",
        resim: "/pictures/urun57.jpg",
        besinDegerleri: {
            kalori: 450,
            protein: 9,
            karbonhidrat: 52,
            yag: 24
        }
    },
    {
        id: 58,
        ad: "Frambuazlı Cheesecake",
        aciklama: "Krema peyniri ve frambuaz soslu cheesecake",
        fiyat: 58,
        kategori: "tatli",
        resim: "/pictures/urun58.jpg",
        besinDegerleri: {
            kalori: 510,
            protein: 11,
            karbonhidrat: 48,
            yag: 32
        }
    },
    {
        id: 59,
        ad: "Dondurma",
        aciklama: "Vanilya, çikolata ve çilekli üçlü dondurma topu",
        fiyat: 40,
        kategori: "tatli",
        resim: "/pictures/urun59.jpg",
        besinDegerleri: {
            kalori: 280,
            protein: 6,
            karbonhidrat: 32,
            yag: 16
        }
    },
    {
        id: 60,
        ad: "Mozaik Pasta",
        aciklama: "Kakaolu sütlü muhallebi ve hindistan cevizli mozaik pasta",
        fiyat: 46,
        kategori: "tatli",
        resim: "/pictures/urun60.jpg",
        besinDegerleri: {
            kalori: 390,
            protein: 7,
            karbonhidrat: 46,
            yag: 20
        }
    }
];

export default urunler;