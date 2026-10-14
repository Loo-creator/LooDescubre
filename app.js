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

  const searchCode = product.searchCode
    ? `<p class="card-search">🔍 Busca en Mercado Libre: <code>${product.searchCode}</code></p>`
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
        ${priceBlock(product)}
        <div class="card-footer">
          <a class="card-cta" href="${product.url}" target="_blank" rel="noopener sponsored">Ir a Mercado Libre →</a>
        </div>
      </div>
    </article>
  `;
}

function renderFilters() {
  const categories = ["Todos", ...new Set(PRODUCTS.map((p) => p.category))];
  const el = document.getElementById("filters");
  el.innerHTML = categories
    .map(
      (c, i) =>
        `<button class="chip${i === 0 ? " active" : ""}" data-filter="${c}">${c}</button>`
    )
    .join("");

  el.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    el.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".card").forEach((cardEl) => {
      const show = filter === "Todos" || cardEl.dataset.category === filter;
      cardEl.classList.toggle("hidden", !show);
    });
  });
}

function render() {
  document.getElementById("grid").innerHTML = PRODUCTS.map(card).join("");
  document.getElementById("year").textContent = new Date().getFullYear();
  renderFilters();
}

render();
