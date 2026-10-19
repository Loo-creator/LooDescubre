const PRODUCTS = [
  {
    id: "carplay-2en1",
    name: "Car Play Adaptador Inalámbrico y Android Auto Converter 2 en 1",
    category: "Tecnología",
    price: null,
    rating: null,
    reviews: null,
    badge: "Nuevo",
    emoji: "🚗",
    color: "blue",
    image: "img/carplay.png",
    url: "https://meli.la/1sjz1i9"
  },
  {
    id: "kit-taladro-wanse",
    name: "Kit Desatornillador Eléctrico + Taladro Atornillador Inalámbrico 2 Baterías Wanse Rojo",
    category: "Herramientas",
    price: null,
    rating: null,
    reviews: null,
    badge: "2 baterías",
    emoji: "🔧",
    color: "orange",
    image: "img/kit_destonillador.png",
    url: "https://meli.la/27SDoxD"
  },
  {
    id: "perchero-zapatera",
    name: "Perchero Zapatera 2 en 1 Organizador Rack Estante con Ganchos Color Negro",
    category: "Hogar",
    price: 159,
    rating: 4.7,
    reviews: 15258,
    badge: "Más vendido",
    emoji: "🧥",
    color: "purple",
    image: "img/perchero.png",
    url: "https://meli.la/1Ebv5Px"
  },
  {
    id: "especiero-giratorio",
    name: "Especiero Giratorio 12 Frascos de Vidrio Organizador de Cocina Negro/Plateado",
    category: "Cocina",
    price: null,
    rating: null,
    reviews: null,
    badge: "12 frascos",
    emoji: "🧂",
    color: "green",
    image: "img/especiero.png",
    url: "https://meli.la/2bmyv3x"
  },
  {
    id: "tv-32-tfl",
    name: "Pantalla Smart TV 32 Pulgadas TFL Android TV DLED Bluetooth",
    category: "TV y Audio",
    price: 1890.53,
    originalPrice: 2855.71,
    discount: 33,
    installment: { months: 24, amount: 114.24 },
    rating: 4.6,
    reviews: 2121,
    rank: "1º en Televisores",
    sold: "+10 mil vendidos",
    badge: "Más vendido",
    emoji: "📺",
    color: "blue",
    image: "img/tv.png",
    searchCode: "DB7X6K-X12C",
    url: "https://meli.la/1vPqc5g"
  },
  {
    id: "smartwatch-audifonos",
    name: "Reloj Inteligente Smartwatch con Audífonos para Mujer y Hombre Bluetooth Pantalla Táctil 1.9\" Correa",
    category: "Wearables",
    price: 248,
    originalPrice: 498,
    discount: 50,
    installment: { months: 24, amount: 14.99 },
    rating: 4.5,
    reviews: 1724,
    rank: "8º en Smartwatches",
    badge: "Más vendido",
    emoji: "⌚",
    color: "purple",
    image: "img/relog.png",
    url: "https://meli.la/17bA9g6"
  },
  {
    id: "mouse-inphic-a1",
    name: "Ratón Inalámbrico Gamer Bluetooth Recargable Negro USB-C 3 DPI Inphic A1",
    category: "Tecnología",
    price: 179.99,
    originalPrice: 542.83,
    discount: 66,
    rating: 4.8,
    reviews: 11911,
    rank: "2º en Mouse",
    badge: "Más vendido",
    emoji: "🖱️",
    color: "blue",
    image: "img/mouse.png",
    url: "https://meli.la/2wSHLAf"
  },
  {
    id: "dron-ourlife-akair3",
    name: "Mini Dron Ourlife AK Air3 Negro Profesional 4K Cámara Dual 2 Baterías",
    category: "Drones",
    price: 335.05,
    originalPrice: 570.17,
    discount: 41,
    rating: 4.1,
    reviews: 5008,
    rank: "3º en Drones",
    badge: "Más vendido",
    emoji: "🚁",
    color: "green",
    image: "img/dron.png",
    url: "https://meli.la/2Pbxjj4"
  },
  {
    id: "casco-spiderman",
    name: "Casco de Actividades Spider-Man con Ojos de Actividades",
    category: "Juguetes",
    price: 293.23,
    originalPrice: 497,
    discount: 41,
    rating: 4.7,
    reviews: 1133,
    rank: "5º en Máscaras y Cascos",
    badge: "Más vendido",
    emoji: "🕷️",
    color: "purple",
    image: "img/spider.png",
    url: "https://meli.la/2tTUWPW"
  },
  {
    id: "maquina-coser-wanse",
    name: "Máquina de Coser Eléctrica Portátil Mini Doméstica Multifuncional 12 Agujas Kit Costura Pedal Luz LED Mesa Wanse",
    category: "Hogar",
    price: 498.87,
    originalPrice: 1007.35,
    discount: 50,
    installment: { months: 24, amount: 30.15 },
    rating: 4.7,
    reviews: 2826,
    rank: "2º en Máquinas de Coser",
    badge: "Más vendido",
    emoji: "🧵",
    color: "purple",
    image: "img/coser.png",
    url: "https://meli.la/14THFZ8"
  },
  {
    id: "desbrozadora-ironhoof",
    name: "Desbrozadora Inalámbrica Ironhoof XSMXF002BK Cortadora de Césped",
    category: "Jardín",
    price: 749,
    originalPrice: 1499,
    discount: 50,
    installment: { months: 24, amount: 45.26 },
    rating: 4.6,
    reviews: 667,
    rank: "1º en Eléctricas",
    badge: "Popular",
    flash: true,
    emoji: "🌿",
    color: "green",
    image: "img/debrozadora.png",
    url: "https://meli.la/1r6Mcg5"
  },
  {
    id: "terminal-point-smart-2",
    name: "Terminal Point Smart 2 con Internet Gratis, Pago con Tarjetas",
    category: "Tecnología",
    price: 549,
    originalPrice: 1879.79,
    discount: 70,
    installment: { months: 3, amount: 183 },
    rating: 4.8,
    reviews: 63994,
    rank: "1º en Terminales POS",
    badge: "Más vendido",
    specs: ["Voltaje: 3V", "Acepta pagos con débito", "Con contactless", "Impresión de comprobantes"],
    emoji: "💳",
    color: "blue",
    image: "img/terminal.png",
    url: "https://meli.la/32VXwxQ"
  },
  {
    id: "playera-compresion",
    name: "Playera Licra Deportiva Correr Compresión Manga Larga",
    category: "Ropa",
    price: 88.8,
    originalPrice: 148,
    discount: 40,
    rating: 4.8,
    reviews: 20681,
    rank: "2º en Playeras",
    badge: "Más vendido",
    emoji: "👕",
    color: "purple",
    image: "img/playera.png",
    url: "https://meli.la/1opEwMd"
  },
  {
    id: "scooter-e9-pro",
    name: "Scooter Eléctrico E9 Pro 32 Km/h 500W Patín Honey Whale",
    category: "Movilidad",
    price: 4999,
    originalPrice: 9599,
    discount: 47,
    installment: { months: 15, amount: 333.27 },
    rating: 4.8,
    reviews: 6490,
    rank: "2º en Eléctricos",
    badge: "Más vendido",
    specs: [
      "Tiempo de carga: 6 h",
      "Potencia del motor: 650W",
      "Velocidad máx.: 32 km/h",
      "Soporta hasta 120 kg",
      "Autonomía: 25 km"
    ],
    colors: ["Negro", "Azul", "Blanco", "Rojo", "Rosa"],
    emoji: "🛴",
    color: "green",
    image: "img/scooter.png",
    url: "https://meli.la/2Tqzykk"
  },
  {
    id: "haylou-s30-pro",
    name: "Audífonos Haylou S30 Pro ANC -43dB Cancelación de Ruido, Diadema Gamer Bluetooth 5.4, 40mm, 80h",
    category: "Tecnología",
    price: 579,
    originalPrice: 812.86,
    discount: 28,
    installment: { months: 24, amount: 34.99 },
    rating: 4.8,
    reviews: 14547,
    badge: "Nuevo",
    specs: [
      "Cancelación de ruido adaptativa -43dB",
      "Controladores de 40mm",
      "Hasta 80 h de reproducción",
      "Bluetooth 5.4 con micrófono"
    ],
    emoji: "🎧",
    color: "purple",
    image: "img/hylou.png",
    searchCode: "DB7X6K-QAUA",
    url: "https://meli.la/1LxqXw5"
  },
  {
    id: "led-devil-eyes",
    name: "2 Piezas de Pantalla LED con Luz Devil Eyes (12 x 59.5 cm)",
    category: "Automotriz",
    price: 738,
    originalPrice: 1272.17,
    discount: 41,
    rating: 4.8,
    reviews: 1802,
    rank: "1º en Ojos de Ángel",
    badge: "Más vendido",
    specs: ["Incluye 2 piezas", "Medida: 12 x 59.5 cm"],
    emoji: "👀",
    color: "blue",
    image: "img/ojos.png",
    searchCode: "DB7X6K-QN64",
    url: "https://meli.la/2uUGCzv"
  },
  {
    id: "walkie-talkies-2pz",
    name: "Kit de 2 Radios Transmisores Walkie-talkie Inalámbricos 400-470 MHz Negro",
    category: "Tecnología",
    price: 298,
    originalPrice: 499,
    discount: 40,
    installment: { months: 24, amount: 18.01 },
    rating: 4.8,
    reviews: 4936,
    rank: "1º en Walkie-talkies",
    badge: "Más vendido",
    specs: ["Incluye 2 radios", "Bandas de frecuencia 400-470 MHz"],
    emoji: "📻",
    color: "blue",
    image: "img/radios.png",
    searchCode: "DB7X6K-3M6M",
    url: "https://meli.la/1wnJgVq"
  },
  {
    id: "kit-rotomartillo",
    name: "Kit Rotomartillo + Esmeriladora Angular + Llave de Impacto",
    category: "Herramientas",
    price: 1969.8,
    originalPrice: 4690,
    discount: 58,
    installment: { months: 9, amount: 218.87 },
    rating: 4.7,
    reviews: 337,
    sold: "+1000 vendidos",
    badge: "Nuevo",
    specs: ["Rotomartillo", "Esmeriladora angular", "Llave de impacto"],
    emoji: "🛠️",
    color: "orange",
    image: "img/kit_rotomartillo.png",
    searchCode: "DB7X6K-8BR6",
    url: "https://meli.la/2TiNpMV"
  },
  {
    "id": "auriculares-jbl-pure-bass-bluetooth-tune-520bt-color-morado",
    "name": "Auriculares Jbl Pure Bass Bluetooth Tune 520bt, color morado",
    "category": "TV y Audio",
    "price": 480.52,
    "originalPrice": 799.0,
    "discount": 39,
    "description": "Incluye micrófono.",
    "specs": [
      "Modelo: Tune 520BT",
      "Color: Morado"
    ],
    "badge": "Nuevo",
    "emoji": "📺",
    "color": "blue",
    "image": "img/auriculares-jbl-pure-bass-bluetooth-tune-520bt-color-morado.jpg",
    "url": "https://meli.la/2H9J2v2",
    "postTexto": "🚨 **OFERTA DESTACADA DE HOY** 🚨\n\n📦 **Auriculares Jbl Pure Bass Bluetooth Tune 520bt, color morado**\n\n🔥 **¡39% DE DESCUENTO!**\n❌ Antes: ~$799.00~\n✅ **A solo: $480.52**\n\n⭐ Envío rápido y compra 100% protegida.\n\n👇 **Consigue el enlace de compra directo en el PRIMER COMENTARIO.** 👇\n\n#Ofertas #Gadgets #ComprasOnline #Descuentos #MercadoLibre",
    "primerComentario": "🛒 **Compra directo aquí con descuento:**\n👉 https://meli.la/2H9J2v2\n\n⚠️ *Promoción por tiempo limitado o hasta agotar existencias.*"
  },
  {
    "id": "apple-iphone-16-128-gb-negro",
    "name": "Apple iPhone 16 (128 GB) - Negro",
    "category": "Tecnología",
    "price": 14645.55,
    "description": "Diseñado para Apple Intelligence. Control de la cámara. Capturas más amplias y detalladas.",
    "specs": [
      "Modelo: iPhone 16",
      "Memoria interna: 128 GB",
      "Memoria RAM: 8 GB",
      "Tamaño de la pantalla: 6.1 \"",
      "Resolución de la pantalla: 2556 px x 1179 px",
      "Color: Negro"
    ],
    "badge": "Nuevo",
    "emoji": "🛒",
    "color": "blue",
    "image": "img/apple-iphone-16-128-gb-negro.jpg",
    "url": "https://meli.la/1xFobD3",
    "postTexto": "🚨 **OFERTA DESTACADA DE HOY** 🚨\n\n📦 **Apple iPhone 16 (128 GB) - Negro**\n\n⚡ **Precio especial: $14,645.55**\n\n⭐ Envío rápido y compra 100% protegida.\n\n👇 **Consigue el enlace de compra directo en el PRIMER COMENTARIO.** 👇\n\n#Ofertas #Gadgets #ComprasOnline #Descuentos #MercadoLibre",
    "primerComentario": "🛒 **Compra directo aquí con descuento:**\n👉 https://meli.la/1xFobD3\n\n⚠️ *Promoción por tiempo limitado o hasta agotar existencias.*"
  },
  {
    "id": "celular-samsung-galaxy-s23-ultra-5g-dual-sim-8gb-256gb-color",
    "name": "Celular Samsung Galaxy S23 Ultra 5G Dual SIM 8gb + 256gb Color Verde",
    "category": "Tecnología",
    "price": 12318.0,
    "originalPrice": 21699.0,
    "discount": 43,
    "description": "Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras. Compatible con redes 5G. Pantalla AMOLED de 6.78\".",
    "specs": [
      "Modelo: S23 Ultra",
      "Memoria interna: 256 GB",
      "Memoria RAM: 8 GB",
      "Tamaño de la pantalla: 6.78 \"",
      "Resolución de la pantalla: 1440 px x 3088 px",
      "Color: Verde"
    ],
    "badge": "Nuevo",
    "emoji": "🛒",
    "color": "blue",
    "image": "img/celular-samsung-galaxy-s23-ultra-5g-dual-sim-8gb-256gb-color.jpg",
    "url": "https://meli.la/2jzLXY4",
    "postTexto": "🚨 **OFERTA DESTACADA DE HOY** 🚨\n\n📦 **Celular Samsung Galaxy S23 Ultra 5G Dual SIM 8gb + 256gb Color Verde**\n\n🔥 **¡43% DE DESCUENTO!**\n❌ Antes: ~$21,699.00~\n✅ **A solo: $12,318.00**\n\n⭐ Envío rápido y compra 100% protegida.\n\n👇 **Consigue el enlace de compra directo en el PRIMER COMENTARIO.** 👇\n\n#Ofertas #Gadgets #ComprasOnline #Descuentos #MercadoLibre",
    "primerComentario": "🛒 **Compra directo aquí con descuento:**\n👉 https://meli.la/2jzLXY4\n\n⚠️ *Promoción por tiempo limitado o hasta agotar existencias.*"
  },
  {
    "id": "telefono-celular-xiaomi-pocophone-poco-m8-5g-12-gb-ram-512-g",
    "name": "Teléfono celular Xiaomi Pocophone Poco M8 5g 12 Gb Ram 512 Gb Rom 6.77 Dual Sim Negro",
    "category": "Tecnología",
    "price": 5999.0,
    "originalPrice": 8999.0,
    "discount": 33,
    "description": "Xiaomi POCO POCO M8 5G · Memoria interna: 512 GB · Memoria RAM: 12 GB · Tamaño de la pantalla: 6.67 \" · Color: Negro",
    "specs": [
      "Modelo: POCO M8 5G",
      "Memoria interna: 512 GB",
      "Memoria RAM: 12 GB",
      "Tamaño de la pantalla: 6.67 \"",
      "Resolución de la pantalla: 2400 px x 1080 px",
      "Color: Negro"
    ],
    "badge": "Nuevo",
    "emoji": "🛒",
    "color": "blue",
    "image": "img/telefono-celular-xiaomi-pocophone-poco-m8-5g-12-gb-ram-512-g.jpg",
    "url": "https://meli.la/1VZpayn",
    "postTexto": "🚨 **OFERTA DESTACADA DE HOY** 🚨\n\n📦 **Teléfono celular Xiaomi Pocophone Poco M8 5g 12 Gb Ram 512 Gb Rom 6.77 Dual Sim Negro**\n\n🔥 **¡33% DE DESCUENTO!**\n❌ Antes: ~$8,999.00~\n✅ **A solo: $5,999.00**\n\n⭐ Envío rápido y compra 100% protegida.\n\n👇 **Consigue el enlace de compra directo en el PRIMER COMENTARIO.** 👇\n\n#Ofertas #Gadgets #ComprasOnline #Descuentos #MercadoLibre",
    "primerComentario": "🛒 **Compra directo aquí con descuento:**\n👉 https://meli.la/1VZpayn\n\n⚠️ *Promoción por tiempo limitado o hasta agotar existencias.*"
  },
  {
    "id": "htc-wildfire-e9-4g-telefono-celular-rendimiento-liquido-rama",
    "name": "Htc Wildfire E9 4g Teléfono celular, rendimiento líquido, rama 6gb + 12 Gb Ram Virtual, 128gb, Android 16, Batería 7000mah, Pantalla 6.745 pulgadas 120hz, Cámara 50mp, Nfc, doble Sim",
    "category": "Tecnología",
    "price": 2970.42,
    "originalPrice": 4714.95,
    "discount": 36,
    "description": "HTC E9 · Memoria interna: 128 GB · Memoria RAM: 6 GB · Tamaño de la pantalla: 6.75 \" · Color: Plata titanio",
    "specs": [
      "Modelo: E9",
      "Memoria interna: 128 GB",
      "Memoria RAM: 6 GB",
      "Tamaño de la pantalla: 6.75 \"",
      "Resolución de la pantalla: 720 px x 1600 px",
      "Color: Plata titanio"
    ],
    "badge": "Nuevo",
    "emoji": "🛒",
    "color": "blue",
    "image": "img/htc-wildfire-e9-4g-telefono-celular-rendimiento-liquido-rama.jpg",
    "url": "https://meli.la/1WWFDFd",
    "postTexto": "🚨 **OFERTA DESTACADA DE HOY** 🚨\n\n📦 **Htc Wildfire E9 4g Teléfono celular, rendimiento líquido, rama 6gb + 12 Gb Ram Virtual, 128gb, Android 16, Batería 7000mah, Pantalla 6.745 pulgadas 120hz, Cámara 50mp, Nfc, doble Sim**\n\n🔥 **¡36% DE DESCUENTO!**\n❌ Antes: ~$4,714.95~\n✅ **A solo: $2,970.42**\n\n⭐ Envío rápido y compra 100% protegida.\n\n👇 **Consigue el enlace de compra directo en el PRIMER COMENTARIO.** 👇\n\n#Ofertas #Gadgets #ComprasOnline #Descuentos #MercadoLibre",
    "primerComentario": "🛒 **Compra directo aquí con descuento:**\n👉 https://meli.la/1WWFDFd\n\n⚠️ *Promoción por tiempo limitado o hasta agotar existencias.*"
  },
  {
    "id": "smart-tv-acer-50-qled-4k-con-google-tv-dolby-audio-y-soporte",
    "name": "Smart TV Acer 50\" QLED 4K con Google TV, Dolby Audio y Soporte de Pared Incluido",
    "category": "TV y Audio",
    "price": 4999.0,
    "originalPrice": 7903.01,
    "discount": 36,
    "description": "Pantalla QLED de 50\" con resolución 4K para imágenes nítidas y vibrantes. Sistema operativo Google TV para acceso a múltiples apps. Google Assistant integrado para control por voz y navegación.",
    "specs": [
      "Modelo: 50PQ100QG",
      "Tamaño de la pantalla: 50 \"",
      "Sistema operativo: Google TV",
      "Color: Black"
    ],
    "badge": "Nuevo",
    "emoji": "📺",
    "color": "blue",
    "image": "img/smart-tv-acer-50-qled-4k-con-google-tv-dolby-audio-y-soporte.jpg",
    "url": "https://meli.la/26JV9aW",
    "postTexto": "🚨 **OFERTA DESTACADA DE HOY** 🚨\n\n📦 **Smart TV Acer 50\" QLED 4K con Google TV, Dolby Audio y Soporte de Pared Incluido**\n\n🔥 **¡36% DE DESCUENTO!**\n❌ Antes: ~$7,903.01~\n✅ **A solo: $4,999.00**\n\n⭐ Envío rápido y compra 100% protegida.\n\n👇 **Consigue el enlace de compra directo en el PRIMER COMENTARIO.** 👇\n\n#Ofertas #Gadgets #ComprasOnline #Descuentos #MercadoLibre",
    "primerComentario": "🛒 **Compra directo aquí con descuento:**\n👉 https://meli.la/26JV9aW\n\n⚠️ *Promoción por tiempo limitado o hasta agotar existencias.*"
  },
  {
    "id": "honor-x8d-dual-sim-8gb-ram-256gb-azul",
    "name": "Honor X8d Dual Sim 8gb Ram 256gb Azul",
    "category": "Tecnología",
    "price": 4847.0,
    "originalPrice": 8999.0,
    "discount": 46,
    "description": "Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras. Memoria interna de 256GB.",
    "specs": [
      "Modelo: X8D",
      "Memoria interna: 256 GB",
      "Memoria RAM: 8 GB",
      "Color: Azul"
    ],
    "badge": "Nuevo",
    "emoji": "🛒",
    "color": "blue",
    "image": "img/honor-x8d-dual-sim-8gb-ram-256gb-azul.jpg",
    "url": "https://meli.la/2rKFhFW",
    "postTexto": "🚨 **OFERTA DESTACADA DE HOY** 🚨\n\n📦 **Honor X8d Dual Sim 8gb Ram 256gb Azul**\n\n🔥 **¡46% DE DESCUENTO!**\n❌ Antes: ~$8,999.00~\n✅ **A solo: $4,847.00**\n\n⭐ Envío rápido y compra 100% protegida.\n\n👇 **Consigue el enlace de compra directo en el PRIMER COMENTARIO.** 👇\n\n#Ofertas #Gadgets #ComprasOnline #Descuentos #MercadoLibre",
    "primerComentario": "🛒 **Compra directo aquí con descuento:**\n👉 https://meli.la/2rKFhFW\n\n⚠️ *Promoción por tiempo limitado o hasta agotar existencias.*"
  },
  {
    "id": "oppo-reno14-f-azul-5g-256-gb-12-gb-enco-buds3",
    "name": "Oppo Reno14 F Azul 5g 256 Gb 12 Gb + Enco Buds3",
    "category": "Tecnología",
    "price": 7669.0,
    "originalPrice": 9999.0,
    "discount": 23,
    "description": "Dispositivo desbloqueado para que elijas la compañía telefónica que prefieras. Compatible con redes 5G. Pantalla AMOLED de 6.57\".",
    "specs": [
      "Modelo: Reno14 F 5g",
      "Memoria interna: 256 GB",
      "Memoria RAM: 12 GB",
      "Tamaño de la pantalla: 6.57 \"",
      "Resolución de la pantalla: 2372 px x 1080 px",
      "Color: Azul"
    ],
    "badge": "Nuevo",
    "emoji": "🛒",
    "color": "blue",
    "image": "img/oppo-reno14-f-azul-5g-256-gb-12-gb-enco-buds3.jpg",
    "url": "https://meli.la/2j4SMB4",
    "postTexto": "🚨 **OFERTA DESTACADA DE HOY** 🚨\n\n📦 **Oppo Reno14 F Azul 5g 256 Gb 12 Gb + Enco Buds3**\n\n🔥 **¡23% DE DESCUENTO!**\n❌ Antes: ~$9,999.00~\n✅ **A solo: $7,669.00**\n\n⭐ Envío rápido y compra 100% protegida.\n\n👇 **Consigue el enlace de compra directo en el PRIMER COMENTARIO.** 👇\n\n#Ofertas #Gadgets #ComprasOnline #Descuentos #MercadoLibre",
    "primerComentario": "🛒 **Compra directo aquí con descuento:**\n👉 https://meli.la/2j4SMB4\n\n⚠️ *Promoción por tiempo limitado o hasta agotar existencias.*"
  },
  {
    "id": "hidrolavadora-electrica-portatil-1600-psi-1200w-alta-presion",
    "name": "Hidrolavadora Electrica Portátil 1600 Psi 1200w Alta Presion Amarillo 60hz Trent Para Lavar Carros",
    "category": "Herramientas",
    "price": 842.49,
    "originalPrice": 2299.0,
    "discount": 63,
    "description": "Potencia de 1.2 kW para una limpieza eficiente. Presión máxima de 110 bar para eliminar suciedad resistente. Caudal de agua de 6 L/min para un rendimiento óptimo.",
    "specs": [
      "Modelo: HLT203-1200-AC127V",
      "Color: Amarillo"
    ],
    "badge": "Nuevo",
    "emoji": "🔧",
    "color": "orange",
    "image": "img/hidrolavadora-electrica-portatil-1600-psi-1200w-alta-presion.jpg",
    "url": "https://meli.la/1ReYXqE",
    "postTexto": "🚨 **OFERTA DESTACADA DE HOY** 🚨\n\n📦 **Hidrolavadora Electrica Portátil 1600 Psi 1200w Alta Presion Amarillo 60hz Trent Para Lavar Carros**\n\n🔥 **¡63% DE DESCUENTO!**\n❌ Antes: ~$2,299.00~\n✅ **A solo: $842.49**\n\n⭐ Envío rápido y compra 100% protegida.\n\n👇 **Consigue el enlace de compra directo en el PRIMER COMENTARIO.** 👇\n\n#Ofertas #Gadgets #ComprasOnline #Descuentos #MercadoLibre",
    "primerComentario": "🛒 **Compra directo aquí con descuento:**\n👉 https://meli.la/1ReYXqE\n\n⚠️ *Promoción por tiempo limitado o hasta agotar existencias.*"
  },
  {
    "id": "auto-estereo-carsapro-pantalla-7-pulgadas-ips-tactil-inalamb",
    "name": "Auto Estéreo Carsapro Pantalla 7 pulgadas IPS Táctil inalámbrico CarPlay Android Auto Autoestéreo Portátil Bluetooth Mirrorlink Estereo Para Carro Con Cámara EQ FM Bt Hd Aux SD Usb",
    "category": "Automotriz",
    "price": 739.35,
    "originalPrice": 1297.1,
    "discount": 42,
    "description": "Dimensiones: 5cm de altura x 17.8cm de largo x 10cm de profundidad. Con puerto USB. Con función de TV.",
    "specs": [
      "Modelo: C5800",
      "Tamaño de la pantalla: 7 \"",
      "Color: Negro"
    ],
    "badge": "Nuevo",
    "emoji": "🚗",
    "color": "blue",
    "image": "img/auto-estereo-carsapro-pantalla-7-pulgadas-ips-tactil-inalamb.jpg",
    "url": "https://meli.la/1FJGVnq",
    "postTexto": "🚨 **OFERTA DESTACADA DE HOY** 🚨\n\n📦 **Auto Estéreo Carsapro Pantalla 7 pulgadas IPS Táctil inalámbrico CarPlay Android Auto Autoestéreo Portátil Bluetooth Mirrorlink Estereo Para Carro Con Cámara EQ FM Bt Hd Aux SD Usb**\n\n🔥 **¡42% DE DESCUENTO!**\n❌ Antes: ~$1,297.10~\n✅ **A solo: $739.35**\n\n⭐ Envío rápido y compra 100% protegida.\n\n👇 **Consigue el enlace de compra directo en el PRIMER COMENTARIO.** 👇\n\n#Ofertas #Gadgets #ComprasOnline #Descuentos #MercadoLibre",
    "primerComentario": "🛒 **Compra directo aquí con descuento:**\n👉 https://meli.la/1FJGVnq\n\n⚠️ *Promoción por tiempo limitado o hasta agotar existencias.*"
  }
];

const money = (value) =>
  value == null
    ? null
    : new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(value);

function stars(rating) {
  if (rating == null) return "";
  const full = Math.round(rating);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

function media(product) {
  const inner = product.image
    ? `<img class="card-img" src="${product.image}" alt="${product.name}" loading="lazy" />`
    : `<span class="card-emoji">${product.emoji}</span>`;
  return `
    <a class="card-media" href="${product.url}" target="_blank" rel="noopener sponsored" aria-label="${product.name}">
      ${inner}
      ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ""}
    </a>
  `;
}

function priceBlock(product) {
  if (product.price == null) {
    return `<div class="card-price-block"><span class="card-price">Ver precio</span></div>`;
  }
  const oldPrice = product.originalPrice
    ? `<span class="card-old-price">${money(product.originalPrice)}</span>`
    : "";
  const off = product.discount ? `<span class="card-off">${product.discount}% OFF</span>` : "";
  const inst = product.installment
    ? `<span class="card-installment">${product.installment.months} meses de ${money(product.installment.amount)}</span>`
    : "";
  return `
    <div class="card-price-block">
      <div class="card-price-row">
        <span class="card-price">${money(product.price)}</span>
        ${off}
      </div>
      ${oldPrice}
      ${inst}
    </div>
  `;
}

function card(product) {
  const rating =
    product.rating != null
      ? `<div class="card-rating">
           <span class="card-stars">${stars(product.rating)}</span>
           <span>${product.rating} · ${product.reviews.toLocaleString("es-MX")} opiniones</span>
         </div>`
      : `<div class="card-rating muted">Compra verificada en Mercado Libre</div>`;

  const meta = [];
  if (product.rank) meta.push(`<span class="card-rank">${product.rank}</span>`);
  if (product.sold) meta.push(`<span class="card-sold">${product.sold}</span>`);
  if (product.flash) meta.push(`<span class="card-flash">⚡ Oferta relámpago</span>`);

  const searchCode = product.searchCode
    ? `<p class="card-search">🔍 Busca en Mercado Libre: <code>${product.searchCode}</code></p>`
    : "";

  const specs = product.specs?.length
    ? `<ul class="card-specs">${product.specs.map((s) => `<li>${s}</li>`).join("")}</ul>`
    : "";

  const desc = product.description
    ? `<p class="card-desc">${product.description}</p>`
    : "";

  const colors = product.colors?.length
    ? `<div class="card-colors"><span>Color:</span>${product.colors
        .map((c) => `<span class="swatch swatch-${c.toLowerCase()}" title="${c}"></span>`)
        .join("")}</div>`
    : "";

  return `
    <article class="card" data-category="${product.category}">
      ${media(product)}
      <div class="card-body">
        <div class="card-tags">
          <span class="card-category">${product.category}</span>
          ${meta.join("")}
        </div>
        <h3 class="card-title">${product.name}</h3>
        ${desc}
        ${rating}
        ${searchCode}
        ${colors}
        ${specs}
        ${priceBlock(product)}
        <div class="card-footer">
          <a class="card-cta" href="${product.url}" target="_blank" rel="noopener sponsored">
            <span>Ver oferta en Mercado Libre</span>
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

const PAGE_SIZE = 6;

const state = { category: "Todos", page: 1 };

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getFiltered() {
  return state.category === "Todos"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === state.category);
}

function totalPages(count) {
  return Math.max(1, Math.ceil(count / PAGE_SIZE));
}

function renderFilters() {
  const categories = ["Todos", ...new Set(PRODUCTS.map((p) => p.category))];
  const el = document.getElementById("filters");
  el.innerHTML = categories
    .map(
      (c) =>
        `<button class="chip${c === state.category ? " active" : ""}" data-filter="${c}">${c}</button>`
    )
    .join("");

  el.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn || btn.dataset.filter === state.category) return;
    state.category = btn.dataset.filter;
    state.page = 1;
    el.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
    render();
  });
}

function pageNumbers(current, total) {
  const pages = [];
  const push = (v) => {
    if (!pages.includes(v)) pages.push(v);
  };
  push(1);
  for (let i = current - 1; i <= current + 1; i++) {
    if (i > 1 && i < total) push(i);
  }
  if (total > 1) push(total);

  const out = [];
  let prev = 0;
  for (const p of pages.sort((a, b) => a - b)) {
    if (p - prev > 1) out.push(`<span class="page-gap">…</span>`);
    out.push(
      `<button class="page-btn${p === current ? " active" : ""}" data-page="${p}" ${p === current ? 'aria-current="page"' : ""}>${p}</button>`
    );
    prev = p;
  }
  return out.join("");
}

function renderPagination(count) {
  const el = document.getElementById("pagination");
  const pages = totalPages(count);
  if (pages <= 1) {
    el.innerHTML = "";
    el.hidden = true;
    return;
  }
  el.hidden = false;

  const from = (state.page - 1) * PAGE_SIZE + 1;
  const to = Math.min(state.page * PAGE_SIZE, count);

  el.innerHTML = `
    <p class="page-info">Mostrando <strong>${from}–${to}</strong> de <strong>${count}</strong> hallazgos</p>
    <nav class="pager" aria-label="Paginación">
      <button class="page-btn page-nav" data-page="${state.page - 1}" ${state.page === 1 ? "disabled" : ""} aria-label="Anterior">‹ Anterior</button>
      ${pageNumbers(state.page, pages)}
      <button class="page-btn page-nav" data-page="${state.page + 1}" ${state.page === pages ? "disabled" : ""} aria-label="Siguiente">Siguiente ›</button>
    </nav>
  `;

  el.querySelector(".pager").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-page]");
    if (!btn || btn.disabled) return;
    const p = Number(btn.dataset.page);
    if (p < 1 || p > pages || p === state.page) return;
    state.page = p;
    render();
    document.getElementById("productos").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function render() {
  const filtered = getFiltered();
  const pages = totalPages(filtered.length);
  if (state.page > pages) state.page = pages;

  const start = (state.page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  document.getElementById("grid").innerHTML = visible.map(card).join("");
  renderPagination(filtered.length);
  document.getElementById("year").textContent = new Date().getFullYear();
}

shuffle(PRODUCTS);
renderFilters();
render();
