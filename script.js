/* =========================================================
   PESQUEIRO GIRASSOL — CARDÁPIO ONLINE
   =========================================================
   IMPORTANTE: troque o número abaixo pelo WhatsApp real do
   pesqueiro, no formato DDI + DDD + número, só números.
   Exemplo Brasil: 55 13 99999-9999  ->  "5513999999999"
   ========================================================= */
const WHATSAPP_NUMBER = "5513996341796"; // <-- TROQUE AQUI

/* ---------------------------------------------------------
   DADOS DO CARDÁPIO
   Cada item pode ter "price" (preço único) OU "sizes"
   ({meia, inteira}) quando o cardápio original oferece
   porção meia/inteira.
   --------------------------------------------------------- */
const MENU = [
  {
    id: "bebidas",
    name: "Bebidas",
    icon: "🥤",
    note: "Geladinhas, direto pra sua mesa.",
    items: [
      { name: "Refrigerante Lata", icon: "🥤", price: 6.50 },
      { name: "Schweppes Lata", icon: "🥤", price: 7.50 },
      { name: "Red Bull", icon: "⚡", price: 18.00 },
      { name: "Skol", icon: "🍺", price: 6.50 },
      { name: "Itaipava", icon: "🍺", price: 6.50 },
      { name: "Xingu", icon: "🍺", price: 7.50 },
      { name: "Duplo Malte", icon: "🍺", price: 7.50 },
      { name: "Eisenbahn", icon: "🍺", price: 7.50 },
      { name: "Império", icon: "🍺", price: 7.50 },
      { name: "Amstel", icon: "🍺", price: 7.50 },
      { name: "Brahma Zero", icon: "🍺", price: 7.50 },
      { name: "Heineken", icon: "🍺", price: 9.50 },
      { name: "Heineken Zero", icon: "🍺", price: 9.50 },
      { name: "Água sem Gás", icon: "💧", price: 4.00 },
      { name: "Água com Gás", icon: "💧", price: 5.00 },
      { name: "Suco Litro", icon: "🧃", price: 20.00 },
      { name: "Suco Copo", icon: "🧃", price: 10.00 },
      { name: "Caipirinha Limão", icon: "🍹", price: 13.00 },
      { name: "Caipirinha Limão Vodka", icon: "🍹", price: 19.00 },
      { name: "Caipirinha de Pinga", icon: "🍹", price: 15.00, desc: "Sabores: abacaxi, morango e maracujá." },
      { name: "Caipirinha de Vodka", icon: "🍸", price: 23.00, desc: "Sabores: abacaxi, morango e maracujá." },
    ],
  },
  {
    id: "porcoes",
    name: "Porções",
    icon: "🍤",
    note: "Preço em meia ou porção inteira.",
    items: [
      { name: "Calabresa Acebolada", icon: "🌭", sizes: { meia: 30.00, inteira: 42.00 } },
      { name: "Frango a Passarinho", icon: "🍗", sizes: { meia: 30.00, inteira: 41.00 } },
      { name: "Fritas / Mandioca / Polenta", icon: "🍟", sizes: { meia: 17.00, inteira: 24.00 } },
      { name: "Costelinha de Pacu", icon: "🐟", sizes: { meia: 34.00, inteira: 52.00 } },
      { name: "Isca de Filé de Tilápia", icon: "🐟", sizes: { meia: 34.00, inteira: 52.00 } },
      { name: "Sashimi de Tilápia", icon: "🍣", sizes: { meia: 40.00, inteira: 60.00 } },
      { name: "Yakisoba Misto", icon: "🍜", sizes: { meia: 33.00, inteira: 45.00 } },
      { name: "Yakisoba de Tilápia", icon: "🍜", sizes: { meia: 42.00, inteira: 55.00 } },
      { name: "Porco a Passarinho", icon: "🥩", sizes: { meia: 32.00, inteira: 43.00 } },
      { name: "Camarão", icon: "🍤", sizes: { meia: 42.00, inteira: 55.00 } },
      { name: "Salada Simples", icon: "🥗", sizes: { meia: 13.00, inteira: 19.00 } },
      { name: "Salada Mista", icon: "🥗", sizes: { meia: 18.00, inteira: 25.00 } },
      { name: "Costela na Chapa", icon: "🥩", price: 79.00 },
      { name: "Porção Isca de Sobrecoxa à Milanesa", icon: "🍗", price: 52.00 },
      { name: "Porção Isca de Carne à Milanesa", icon: "🥩", price: 65.00 },
    ],
  },
  {
    id: "acompanhamentos",
    name: "Acompanhamentos",
    icon: "🍚",
    note: "Para completar sua porção.",
    items: [
      { name: "Arroz", icon: "🍚", sizes: { meia: 10.00, inteira: 12.00 } },
      { name: "Feijão", icon: "🫘", sizes: { meia: 10.00, inteira: 12.00 } },
      { name: "Pururuca de Tilápia", icon: "🐟", price: 10.00 },
    ],
  },
  {
    id: "lanches",
    name: "Lanches",
    icon: "🍔",
    note: "",
    items: [
      { name: "Misto Quente", icon: "🥪", price: 14.00 },
      { name: "Queijo Quente", icon: "🧀", price: 14.00 },
      { name: "Bauru", icon: "🥪", price: 17.00 },
      { name: "Hambúrguer", icon: "🍔", price: 17.00 },
      { name: "X-Burguer", icon: "🍔", price: 19.00 },
      { name: "X-Salada", icon: "🍔", price: 21.00 },
      { name: "X-Egg", icon: "🍔", price: 23.00 },
      { name: "X-Egg Salada", icon: "🍔", price: 25.00 },
      { name: "X-Calabresa", icon: "🍔", price: 23.00 },
      { name: "Americano", icon: "🥪", price: 22.00 },
    ],
  },
  {
    id: "salgados",
    name: "Salgados",
    icon: "🥟",
    note: "",
    items: [
      { name: "Coxinha", icon: "🍗", price: 9.00 },
      { name: "Presunto e Queijo", icon: "🥟", price: 9.00 },
      { name: "Carne", icon: "🥟", price: 9.00 },
      { name: "Bolinho de Tilápia", icon: "🐟", price: 11.00 },
      { name: "Kibe de Tilápia", icon: "🐟", price: 11.00 },
      { name: "Empada Tilápia / Camarão / Palmito", icon: "🥧", price: 10.00 },
      { name: "Porpeta de Carne", icon: "🥩", price: 15.00 },
      { name: "Torresmo Rolo", icon: "🥓", price: 15.00 },
    ],
  },
  {
    id: "alacarte",
    name: "À La Carte",
    icon: "🍽️",
    note: "Pratos para compartilhar.",
    items: [
      { name: "Costela à La Carte", icon: "🥩", price: 99.00, desc: "Acompanha arroz, feijão, salada, mandioca e batata." },
      { name: "Moqueca à La Girassol", icon: "🍲", price: 100.00, desc: "Ovo, camarão seco, banana, palmito, pimentões, cebola, tomate, farofa, fritas e arroz." },
      { name: "Moqueca de Tilápia", icon: "🍲", price: 130.00, desc: "Filé de tilápia, banana, palmito, pimentões, cebola, fritas, farofa e arroz." },
      { name: "Traíra sem Espinho Inteira Frita", icon: "🐟", price: 110.00, desc: "Acompanha arroz, fritas e pirão." },
      { name: "Parmegiana de Carne", icon: "🥩", price: 85.00, desc: "Acompanha arroz e fritas." },
      { name: "Parmegiana de Filé de Tilápia", icon: "🐟", price: 98.00, desc: "Acompanha arroz e fritas." },
      { name: "Joelho de Porco", icon: "🍖", price: 79.00, desc: "Purê, pimenta biquinho e salada de repolho com mostarda." },
    ],
  },
  {
    id: "comerciais",
    name: "Pratos Comerciais",
    icon: "🍛",
    note: "Todos acompanham arroz, feijão, fritas e salada.",
    items: [
      { name: "Tilápia", icon: "🐟", price: 30.00 },
      { name: "Contra Filé", icon: "🥩", price: 30.00 },
      { name: "Frango", icon: "🍗", price: 27.00 },
      { name: "Calabresa", icon: "🌭", price: 27.00 },
    ],
  },
];

/* ---------------------------------------------------------
   ESTADO DO CARRINHO
   chave: id único por item+tamanho | valor: {name, icon, size, unitPrice, qty}
   --------------------------------------------------------- */
let cart = {};
let selectedSize = {}; // controla toggle Meia/Inteira por item antes de adicionar
let qtyDraft = {};     // controla quantidade escolhida antes de adicionar

const money = (v) => "R$ " + v.toFixed(2).replace(".", ",");
const slug = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-");

/* ---------------------------------------------------------
   RENDER: navegação de categorias
   --------------------------------------------------------- */
function renderCatNav() {
  const nav = document.getElementById("catNav");
  nav.innerHTML = "";
  MENU.forEach((cat, i) => {
    const btn = document.createElement("button");
    btn.className = "cat-pill" + (i === 0 ? " active" : "");
    btn.textContent = `${cat.icon} ${cat.name}`;
    btn.dataset.target = cat.id;
    btn.addEventListener("click", () => {
      document.getElementById(cat.id).scrollIntoView({ behavior: "smooth", block: "start" });
    });
    nav.appendChild(btn);
  });
}

/* ---------------------------------------------------------
   RENDER: cardápio completo
   --------------------------------------------------------- */
function renderMenu() {
  const root = document.getElementById("menuRoot");
  root.innerHTML = "";

  MENU.forEach((cat) => {
    const section = document.createElement("section");
    section.className = "category-section";
    section.id = cat.id;

    section.innerHTML = `
      <div class="category-heading">
        <span style="font-size:1.4rem">${cat.icon}</span>
        <h2>${cat.name}</h2>
      </div>
      ${cat.note ? `<p class="category-note">${cat.note}</p>` : ""}
      <div class="item-grid"></div>
    `;

    const grid = section.querySelector(".item-grid");

    cat.items.forEach((item) => {
      const itemKeyBase = slug(cat.id + "-" + item.name);
      const hasSizes = !!item.sizes;

      if (hasSizes && !(itemKeyBase in selectedSize)) {
        selectedSize[itemKeyBase] = "meia";
      }
      if (!(itemKeyBase in qtyDraft)) qtyDraft[itemKeyBase] = 1;

      const card = document.createElement("div");
      card.className = "item-card";

      const currentPrice = hasSizes
        ? item.sizes[selectedSize[itemKeyBase]]
        : item.price;

      card.innerHTML = `
        <div class="item-top">
          <div class="item-icon">${item.icon}</div>
          <div class="item-info">
            <h3>${item.name}</h3>
            ${item.desc ? `<p class="item-desc">${item.desc}</p>` : ""}
          </div>
        </div>

        <div class="item-price-row">
          ${
            hasSizes
              ? `<div class="size-toggle" data-key="${itemKeyBase}">
                   <button type="button" data-size="meia" class="${selectedSize[itemKeyBase] === "meia" ? "active" : ""}">Meia</button>
                   <button type="button" data-size="inteira" class="${selectedSize[itemKeyBase] === "inteira" ? "active" : ""}">Inteira</button>
                 </div>`
              : `<span></span>`
          }
          <span class="price-tag" data-price-tag="${itemKeyBase}">${money(currentPrice)}</span>
        </div>

        <div class="add-row">
          <div class="qty-stepper" data-key="${itemKeyBase}">
            <button type="button" data-step="-1" aria-label="Diminuir quantidade">−</button>
            <span data-qty="${itemKeyBase}">${qtyDraft[itemKeyBase]}</span>
            <button type="button" data-step="1" aria-label="Aumentar quantidade">+</button>
          </div>
          <button type="button" class="btn-add" data-add="${itemKeyBase}">
            Adicionar <span aria-hidden="true">＋</span>
          </button>
        </div>
      `;

      // Toggle Meia/Inteira
      if (hasSizes) {
        card.querySelectorAll(".size-toggle button").forEach((btn) => {
          btn.addEventListener("click", () => {
            selectedSize[itemKeyBase] = btn.dataset.size;
            card.querySelectorAll(".size-toggle button").forEach((b) =>
              b.classList.toggle("active", b === btn)
            );
            const newPrice = item.sizes[selectedSize[itemKeyBase]];
            card.querySelector(`[data-price-tag="${itemKeyBase}"]`).textContent = money(newPrice);
          });
        });
      }

      // Stepper de quantidade
      card.querySelectorAll(".qty-stepper button").forEach((btn) => {
        btn.addEventListener("click", () => {
          const step = parseInt(btn.dataset.step, 10);
          qtyDraft[itemKeyBase] = Math.max(1, (qtyDraft[itemKeyBase] || 1) + step);
          card.querySelector(`[data-qty="${itemKeyBase}"]`).textContent = qtyDraft[itemKeyBase];
        });
      });

      // Adicionar ao carrinho
      card.querySelector(`[data-add="${itemKeyBase}"]`).addEventListener("click", () => {
        const size = hasSizes ? selectedSize[itemKeyBase] : null;
        const unitPrice = hasSizes ? item.sizes[size] : item.price;
        const qty = qtyDraft[itemKeyBase] || 1;
        const cartKey = itemKeyBase + (size ? "-" + size : "");

        if (cart[cartKey]) {
          cart[cartKey].qty += qty;
        } else {
          cart[cartKey] = {
            name: item.name,
            icon: item.icon,
            size: size ? (size === "meia" ? "Meia" : "Inteira") : null,
            unitPrice,
            qty,
          };
        }

        qtyDraft[itemKeyBase] = 1;
        card.querySelector(`[data-qty="${itemKeyBase}"]`).textContent = 1;

        renderCart();
        showToast(`${item.name} adicionado ao carrinho!`);
        pulseFab();
      });

      grid.appendChild(card);
    });

    root.appendChild(section);
  });
}

/* ---------------------------------------------------------
   SCROLL SPY — destaca categoria ativa no nav
   --------------------------------------------------------- */
function setupScrollSpy() {
  const sections = MENU.map((c) => document.getElementById(c.id));
  const pills = () => Array.from(document.querySelectorAll(".cat-pill"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          pills().forEach((p) => p.classList.toggle("active", p.dataset.target === id));
        }
      });
    },
    { rootMargin: "-160px 0px -70% 0px", threshold: 0 }
  );

  sections.forEach((s) => s && observer.observe(s));
}

/* ---------------------------------------------------------
   CARRINHO — render e ações
   --------------------------------------------------------- */
function cartTotal() {
  return Object.values(cart).reduce((sum, l) => sum + l.unitPrice * l.qty, 0);
}
function cartCount() {
  return Object.values(cart).reduce((sum, l) => sum + l.qty, 0);
}

function renderCart() {
  const list = document.getElementById("cartList");
  const empty = document.getElementById("cartEmpty");
  const summary = document.getElementById("cartSummary");
  const entries = Object.entries(cart);

  document.getElementById("cartFabCount").textContent =
    cartCount() === 1 ? "1 item" : `${cartCount()} itens`;
  document.getElementById("cartFabTotal").textContent = money(cartTotal());
  document.getElementById("cartTotal").textContent = money(cartTotal());

  if (entries.length === 0) {
    empty.style.display = "flex";
    list.style.display = "none";
    summary.style.display = "none";
    return;
  }

  empty.style.display = "none";
  list.style.display = "flex";
  summary.style.display = "block";

  list.innerHTML = "";
  entries.forEach(([key, line]) => {
    const li = document.createElement("li");
    li.className = "cart-line";
    li.innerHTML = `
      <span class="cart-line-icon">${line.icon}</span>
      <div class="cart-line-info">
        <strong>${line.name}${line.size ? ` <small>(${line.size})</small>` : ""}</strong>
        <small>${money(line.unitPrice)} cada</small>
      </div>
      <div class="cart-line-actions">
        <span class="cart-line-price">${money(line.unitPrice * line.qty)}</span>
        <div class="mini-stepper">
          <button type="button" data-dec="${key}" aria-label="Diminuir">−</button>
          <span>${line.qty}</span>
          <button type="button" data-inc="${key}" aria-label="Aumentar">+</button>
        </div>
        <button type="button" class="remove-line" data-remove="${key}">remover</button>
      </div>
    `;
    list.appendChild(li);
  });

  list.querySelectorAll("[data-inc]").forEach((btn) =>
    btn.addEventListener("click", () => {
      cart[btn.dataset.inc].qty += 1;
      renderCart();
    })
  );
  list.querySelectorAll("[data-dec]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const key = btn.dataset.dec;
      cart[key].qty -= 1;
      if (cart[key].qty <= 0) delete cart[key];
      renderCart();
    })
  );
  list.querySelectorAll("[data-remove]").forEach((btn) =>
    btn.addEventListener("click", () => {
      delete cart[btn.dataset.remove];
      renderCart();
    })
  );
}

/* ---------------------------------------------------------
   DRAWER open/close
   --------------------------------------------------------- */
function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("show");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "false");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "true");
}

function pulseFab() {
  const fab = document.getElementById("cartFab");
  fab.style.transform = "scale(1.08)";
  setTimeout(() => (fab.style.transform = ""), 160);
}

/* ---------------------------------------------------------
   TOAST
   --------------------------------------------------------- */
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ---------------------------------------------------------
   ENVIO DO PEDIDO VIA WHATSAPP
   --------------------------------------------------------- */
function buildWhatsAppMessage(name, local, obs) {
  const lines = [];
  lines.push("🌻 *Pedido — Pesqueiro Girassol*");
  lines.push("");
  lines.push(`*Cliente:* ${name}`);
  lines.push(`*Local:* ${local}`);
  lines.push("");
  lines.push("*Itens do pedido:*");

  Object.values(cart).forEach((line) => {
    const sizeTxt = line.size ? ` (${line.size})` : "";
    lines.push(`• ${line.qty}x ${line.name}${sizeTxt} — ${money(line.unitPrice * line.qty)}`);
  });

  lines.push("");
  lines.push(`*Total: ${money(cartTotal())}*`);

  if (obs && obs.trim()) {
    lines.push("");
    lines.push(`*Observação:* ${obs.trim()}`);
  }

  lines.push("");
  lines.push("_Pedido feito pelo cardápio online 🎣_");

  return lines.join("\n");
}

function setupCheckout() {
  const form = document.getElementById("checkoutForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (cartCount() === 0) {
      showToast("Seu carrinho está vazio!");
      return;
    }

    const name = document.getElementById("custName").value.trim();
    const local = document.getElementById("custLocal").value.trim();
    const obs = document.getElementById("custObs").value;

    if (!name || !local) {
      showToast("Preencha nome e local para continuar.");
      return;
    }

    const message = buildWhatsAppMessage(name, local, obs);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
}

/* ---------------------------------------------------------
   INIT
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderCatNav();
  renderMenu();
  renderCart();
  setupScrollSpy();
  setupCheckout();

  document.getElementById("cartFab").addEventListener("click", openCart);
  document.getElementById("closeCart").addEventListener("click", closeCart);
  document.getElementById("overlay").addEventListener("click", closeCart);
});
