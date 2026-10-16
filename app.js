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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
    url: "https://meli.la/2Tqzykk"
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
