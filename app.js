// ─── DATA ───────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1, name: "Manteau laine camel", category: "manteaux", subcategory: "Manteaux",
    price: 68, oldPrice: 220, size: "38", condition: "Excellent", color: "camel",
    colorHex: "#C4A882", tags: ["new"], drop: null,
    desc: "Manteau en laine mélangée, coupe droite légèrement oversize. Fermeture à double boutonnage. Doublure satinée. Provenance : marque française indépendante.",
    care: ["Nettoyage à sec uniquement", "Ne pas essorer", "Repasser à basse température"],
    bg: "#E8DDD0",
    svg: `<svg viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M40,28 L10,70 L38,76 L32,172 L128,172 L122,76 L150,70 L120,28 Q100,18 80,22 Q60,18 40,28Z" fill="#9A7A52" opacity=".85"/>
      <path d="M40,28 Q52,50 52,76 L32,172" fill="none" stroke="#7A5C32" stroke-width="1.5"/>
      <path d="M120,28 Q108,50 108,76 L128,172" fill="none" stroke="#7A5C32" stroke-width="1.5"/>
      <path d="M56,26 Q80,16 104,26" fill="none" stroke="#7A5C32" stroke-width="1"/>
      <circle cx="76" cy="90" r="4" fill="#6A4C2A" opacity=".6"/>
      <circle cx="76" cy="112" r="4" fill="#6A4C2A" opacity=".6"/>
      <circle cx="76" cy="134" r="4" fill="#6A4C2A" opacity=".6"/>
    </svg>`
  },
  {
    id: 2, name: "Robe velours bordeaux", category: "robes", subcategory: "Robes",
    price: 52, oldPrice: 165, size: "36", condition: "Très bon", color: "bordeaux",
    colorHex: "#6B1A2A", tags: ["coup-de-coeur"], drop: null,
    desc: "Robe mi-longue en velours côtelé. Col V, manches longues ajustées. Douceur incomparable au toucher. Idéale pour les saisons fraîches.",
    care: ["Lavage délicat 30°C", "Ne pas essorer", "Séchage à plat"],
    bg: "#DDD0D8",
    svg: `<svg viewBox="0 0 140 210" xmlns="http://www.w3.org/2000/svg">
      <path d="M48,18 Q70,10 92,18 L100,48 Q86,44 70,45 Q54,44 40,48 Z" fill="#6B1A2A" opacity=".9"/>
      <path d="M40,48 Q32,80 34,180 Q52,196 70,197 Q88,196 106,180 Q108,80 100,48" fill="#6B1A2A" opacity=".78"/>
      <path d="M52,48 L52,190 M88,48 L88,190" stroke="#4A0E1A" stroke-width="1" opacity=".25"/>
      <path d="M63,22 L70,34 L77,22" fill="none" stroke="#4A0E1A" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: 3, name: "Veste tweed écossais", category: "vestes", subcategory: "Vestes",
    price: 78, oldPrice: 290, size: "40", condition: "Excellent", color: "tweed",
    colorHex: "#7A6A52", tags: ["rare"], drop: null,
    desc: "Veste structurée en tweed à motif pied-de-poule. Coupe tailleur, doublure bordeaux. Boutons en corne naturelle. Pièce vintage années 90.",
    care: ["Nettoyage à sec", "Repasser à l'envers", "Conserver sur cintre rembourré"],
    bg: "#E0DAD0",
    svg: `<svg viewBox="0 0 160 185" xmlns="http://www.w3.org/2000/svg">
      <path d="M28,22 L8,58 L34,64 L28,158 L132,158 L126,64 L152,58 L132,22 L108,36 L80,28 L52,36 Z" fill="#6B5A3E" opacity=".88"/>
      <path d="M28,22 Q40,46 40,68 L28,158" fill="none" stroke="#4E4028" stroke-width="1"/>
      <path d="M132,22 Q120,46 120,68 L132,158" fill="none" stroke="#4E4028" stroke-width="1"/>
      <rect x="72" y="28" width="16" height="22" rx="0" fill="#5C4C32" opacity=".6"/>
      <path d="M52,36 Q80,22 108,36" fill="none" stroke="#4E4028" stroke-width="1"/>
      <circle cx="76" cy="80" r="3" fill="#4E4028" opacity=".7"/>
      <circle cx="76" cy="100" r="3" fill="#4E4028" opacity=".7"/>
      <circle cx="76" cy="120" r="3" fill="#4E4028" opacity=".7"/>
    </svg>`
  },
  {
    id: 4, name: "Chemisier soie ivoire", category: "hauts", subcategory: "Hauts",
    price: 34, oldPrice: 98, size: "38", condition: "Excellent", color: "ivoire",
    colorHex: "#F0EAD8", tags: ["new"], drop: null,
    desc: "Chemisier en soie naturelle, col à lavallière. Coupe fluide légèrement oversize. Boutons nacrés. Discret et élégant à la fois.",
    care: ["Lavage main froid uniquement", "Ne pas tordre", "Sécher à l'ombre"],
    bg: "#F2EDE8",
    svg: `<svg viewBox="0 0 150 180" xmlns="http://www.w3.org/2000/svg">
      <path d="M38,26 L12,62 L38,68 L32,160 L118,160 L112,68 L138,62 L112,26 Q96,16 75,20 Q54,16 38,26Z" fill="#D4C8A8" opacity=".85"/>
      <path d="M60,20 Q75,12 90,20 L85,52 L75,46 L65,52 Z" fill="#BEB098" opacity=".7"/>
      <path d="M38,26 Q50,48 50,68 L32,160" fill="none" stroke="#A89878" stroke-width="1"/>
      <path d="M112,26 Q100,48 100,68 L118,160" fill="none" stroke="#A89878" stroke-width="1"/>
    </svg>`
  },
  {
    id: 5, name: "Pantalon tailleur noir", category: "bas", subcategory: "Bas",
    price: 42, oldPrice: 135, size: "38", condition: "Très bon", color: "noir",
    colorHex: "#2A2420", tags: [], drop: null,
    desc: "Pantalon coupe droite taille haute. Tissu crêpe fluide, tombé parfait. Fermeture zip côté. Intemporel et versatile.",
    care: ["Lavage délicat 30°C", "Repasser vapeur", "Ne pas sécher en machine"],
    bg: "#D4CEC8",
    svg: `<svg viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M38,18 L32,50 L108,50 L102,18 Z" fill="#2A2420" opacity=".9"/>
      <path d="M32,50 L24,180 L64,180 L70,110 L76,180 L116,180 L108,50 Z" fill="#2A2420" opacity=".82"/>
      <path d="M70,50 L70,180" stroke="#1A1410" stroke-width="1" opacity=".3"/>
      <path d="M32,50 L108,50" stroke="#1A1410" stroke-width="1.5" opacity=".4"/>
    </svg>`
  },
  {
    id: 6, name: "Pull angora rose poudré", category: "hauts", subcategory: "Hauts",
    price: 38, oldPrice: 120, size: "S/M", condition: "Bon", color: "rose",
    colorHex: "#E8C4C0", tags: ["coup-de-coeur"], drop: null,
    desc: "Pull en mélange angora et laine, col rond. Texture duvetteuse et légère. Teinte rose poudré très porteur. Confort maximal.",
    care: ["Lavage main eau froide", "Séchage à plat", "Ne pas repasser"],
    bg: "#F0E4E0",
    svg: `<svg viewBox="0 0 160 175" xmlns="http://www.w3.org/2000/svg">
      <path d="M42,24 L14,64 L40,70 L34,158 L126,158 L120,70 L146,64 L118,24 Q100,14 80,18 Q60,14 42,24Z" fill="#D4A0A0" opacity=".82"/>
      <path d="M42,24 Q54,46 54,70 L34,158" fill="none" stroke="#B88080" stroke-width="1.5"/>
      <path d="M118,24 Q106,46 106,70 L126,158" fill="none" stroke="#B88080" stroke-width="1.5"/>
      <path d="M58,22 Q80,14 102,22" fill="none" stroke="#B88080" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: 7, name: "Trench camel classique", category: "manteaux", subcategory: "Manteaux",
    price: 85, oldPrice: 340, size: "40", condition: "Très bon", color: "camel",
    colorHex: "#C4A070", tags: ["rare"], drop: null,
    desc: "Trench-coat double boutonnage coton gabardine. Ceinture à boucle, épaulettes et passants. Véritable classique indémodable.",
    care: ["Nettoyage à sec uniquement", "Repassage à basse chaleur", "Impermabilisant recommandé"],
    bg: "#E8DCCC",
    svg: `<svg viewBox="0 0 170 210" xmlns="http://www.w3.org/2000/svg">
      <path d="M36,24 L8,70 L36,78 L30,185 L140,185 L134,78 L162,70 L134,24 Q110,12 85,16 Q60,12 36,24Z" fill="#B8904A" opacity=".82"/>
      <path d="M36,24 Q50,52 50,78 L30,185" fill="none" stroke="#987030" stroke-width="2"/>
      <path d="M134,24 Q120,52 120,78 L140,185" fill="none" stroke="#987030" stroke-width="2"/>
      <line x1="85" y1="50" x2="85" y2="180" stroke="#987030" stroke-width="1" opacity=".3"/>
      <circle cx="81" cy="85" r="4" fill="#7A5828" opacity=".7"/>
      <circle cx="81" cy="108" r="4" fill="#7A5828" opacity=".7"/>
      <circle cx="81" cy="131" r="4" fill="#7A5828" opacity=".7"/>
      <rect x="58" y="52" width="54" height="20" rx="0" fill="#9A7030" opacity=".5"/>
    </svg>`
  },
  {
    id: 8, name: "Jupe mi-longue lin", category: "bas", subcategory: "Bas",
    price: 28, oldPrice: 85, size: "36/38", condition: "Excellent", color: "naturel",
    colorHex: "#D4C4A8", tags: ["new"], drop: null,
    desc: "Jupe midi en lin lavé, légèrement froissée par nature. Taille élastiquée, coupe évasée. Légèreté et respirabilité incomparables.",
    care: ["Lavage machine 40°C", "Séchage machine possible", "Repasser légèrement humide"],
    bg: "#EEEAE0",
    svg: `<svg viewBox="0 0 140 190" xmlns="http://www.w3.org/2000/svg">
      <rect x="44" y="16" width="52" height="28" rx="2" fill="#C0AA80" opacity=".9"/>
      <path d="M44,44 Q28,80 22,175 L118,175 Q112,80 96,44 Z" fill="#C0AA80" opacity=".75"/>
      <path d="M44,44 L22,175 M96,44 L118,175" stroke="#A08A60" stroke-width="1" opacity=".3"/>
      <path d="M32,100 L108,100 M28,130 L112,130 M24,158 L116,158" stroke="#A08A60" stroke-width=".8" opacity=".2"/>
    </svg>`
  },
  {
    id: 9, name: "Sac cuir cognac", category: "accessoires", subcategory: "Accessoires",
    price: 55, oldPrice: 180, size: "Unique", condition: "Bon", color: "cognac",
    colorHex: "#9A6040", tags: ["coup-de-coeur"], drop: null,
    desc: "Sac structuré en cuir véritable, coloris cognac. Bandoulière amovible, compartiments intérieurs. Petites griffures légères sur le fond.",
    care: ["Entretenir au baume nourrissant", "Éviter l'humidité", "Conserver dans sa housse"],
    bg: "#E4D4C4",
    svg: `<svg viewBox="0 0 170 145" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="40" width="122" height="90" rx="6" fill="#8A5030" opacity=".88"/>
      <path d="M60,40 Q60,18 85,18 Q110,18 110,40" fill="none" stroke="#8A5030" stroke-width="4"/>
      <rect x="70" y="75" width="30" height="22" rx="3" fill="#6A3A1E" opacity=".7"/>
      <rect x="78" y="82" width="14" height="8" rx="2" fill="#8A5030"/>
      <line x1="24" y1="70" x2="146" y2="70" stroke="#6A3A1E" stroke-width="1.5" opacity=".5"/>
    </svg>`
  },
  {
    id: 10, name: "Cardigan long crème", category: "hauts", subcategory: "Hauts",
    price: 44, oldPrice: 148, size: "M/L", condition: "Excellent", color: "crème",
    colorHex: "#E8E0CC", tags: [], drop: null,
    desc: "Cardigan oversize longueur mi-cuisse, maille fine côtelée. Poches plaquées, boutons dorés. L'allié parfait des mi-saisons.",
    care: ["Lavage main eau froide", "Séchage à plat", "Repasser à basse température"],
    bg: "#EEEAE4",
    svg: `<svg viewBox="0 0 160 215" xmlns="http://www.w3.org/2000/svg">
      <path d="M36,20 L10,62 L38,68 L32,195 L128,195 L122,68 L150,62 L124,20 Q104,10 80,14 Q56,10 36,20Z" fill="#CCC0A0" opacity=".82"/>
      <path d="M36,20 Q50,46 50,70 L32,195" fill="none" stroke="#AAA080" stroke-width="1.5"/>
      <path d="M124,20 Q110,46 110,70 L128,195" fill="none" stroke="#AAA080" stroke-width="1.5"/>
      <circle cx="76" cy="90" r="3.5" fill="#C8B888" opacity=".8"/>
      <circle cx="76" cy="116" r="3.5" fill="#C8B888" opacity=".8"/>
      <circle cx="76" cy="142" r="3.5" fill="#C8B888" opacity=".8"/>
      <circle cx="76" cy="168" r="3.5" fill="#C8B888" opacity=".8"/>
    </svg>`
  },
  {
    id: 11, name: "Blazer rayures fines", category: "vestes", subcategory: "Vestes",
    price: 62, oldPrice: 210, size: "38/40", condition: "Très bon", color: "rayures",
    colorHex: "#3A3430", tags: ["rare"], drop: null,
    desc: "Blazer à rayures fines blanches sur fond noir. Coupe ajustée, revers crantés. Doublure rayée assortie. Chic absolu.",
    care: ["Nettoyage à sec", "Repasser légèrement", "Conserver sur cintre"],
    bg: "#DCDAD8",
    svg: `<svg viewBox="0 0 165 190" xmlns="http://www.w3.org/2000/svg">
      <path d="M30,20 L8,60 L36,66 L30,165 L135,165 L129,66 L157,60 L135,20 L110,34 L82,26 L55,34 Z" fill="#2E2A28" opacity=".9"/>
      <path d="M30,20 Q44,46 44,68 L30,165" fill="none" stroke="#EEE8E0" stroke-width=".5" opacity=".4"/>
      <path d="M135,20 Q121,46 121,68 L135,165" fill="none" stroke="#EEE8E0" stroke-width=".5" opacity=".4"/>
      <line x1="52" y1="34" x2="34" y2="165" stroke="#F0EAE2" stroke-width=".6" opacity=".25"/>
      <line x1="62" y1="34" x2="44" y2="165" stroke="#F0EAE2" stroke-width=".6" opacity=".25"/>
      <line x1="104" y1="34" x2="122" y2="165" stroke="#F0EAE2" stroke-width=".6" opacity=".25"/>
      <line x1="94" y1="34" x2="112" y2="165" stroke="#F0EAE2" stroke-width=".6" opacity=".25"/>
      <path d="M55,34 Q82,20 110,34" fill="none" stroke="#3E3830" stroke-width="1"/>
    </svg>`
  },
  {
    id: 12, name: "Robe lin fleuri", category: "robes", subcategory: "Robes",
    price: 46, oldPrice: 155, size: "38", condition: "Excellent", color: "fleuri",
    colorHex: "#C8B4A8", tags: ["new", "coup-de-coeur"], drop: null,
    desc: "Robe longue en lin imprimé fleuri discret, fonds écru. Col V, boutons sur toute la longueur. Légèreté estivale.",
    care: ["Lavage machine 40°C", "Séchage doux", "Repasser légèrement humide"],
    bg: "#EDE8E0",
    svg: `<svg viewBox="0 0 145 215" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,16 Q72,8 95,16 L104,46 Q88,42 72,43 Q56,42 41,46 Z" fill="#B8A48E" opacity=".9"/>
      <path d="M41,46 Q33,82 36,185 Q54,200 72,201 Q90,200 108,185 Q111,82 104,46" fill="#B8A48E" opacity=".72"/>
      <circle cx="56" cy="85" r="5" fill="#8A6A58" opacity=".4"/>
      <circle cx="86" cy="110" r="4" fill="#8A6A58" opacity=".35"/>
      <circle cx="64" cy="140" r="6" fill="#8A6A58" opacity=".3"/>
      <circle cx="90" cy="160" r="3" fill="#8A6A58" opacity=".35"/>
      <path d="M58,18 L72,30 L86,18" fill="none" stroke="#8A6A58" stroke-width="1.5"/>
    </svg>`
  }
];

const DROPS = [
  {
    id: "drop-1",
    name: "Collection Automne",
    subtitle: "12 pièces — laines & velours",
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // J+3
    color: "#6B1A2A",
    productIds: [1, 2, 3]
  },
  {
    id: "drop-2",
    name: "Drop Parisien",
    subtitle: "Sélection vintage années 90",
    date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // J+10
    color: "#3A3430",
    productIds: [7, 11, 5]
  }
];

// ─── CART ───────────────────────────────────────────────
const Cart = {
  get() { try { return JSON.parse(localStorage.getItem('remembrance_cart') || '[]'); } catch { return []; } },
  save(items) { localStorage.setItem('remembrance_cart', JSON.stringify(items)); },
  add(productId) {
    const items = this.get();
    const p = PRODUCTS.find(p => p.id === productId);
    if (!p) return;
    const ex = items.find(i => i.id === productId);
    if (ex) { ex.qty++; } else { items.push({ id: productId, qty: 1 }); }
    this.save(items);
    this.updateUI();
    showToast(`"${p.name}" ajouté au panier`);
  },
  remove(productId) {
    const items = this.get().filter(i => i.id !== productId);
    this.save(items); this.updateUI();
  },
  count() { return this.get().reduce((s, i) => s + i.qty, 0); },
  total() {
    return this.get().reduce((s, i) => {
      const p = PRODUCTS.find(p => p.id === i.id);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
  },
  updateUI() {
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = this.count(); el.style.display = this.count() ? 'flex' : 'none';
    });
  }
};

// ─── UTILS ──────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.querySelector('.toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3200);
}

function formatCountdown(ms) {
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  if (d > 0) return `${d}j ${h.toString().padStart(2,'0')}h ${m.toString().padStart(2,'0')}m`;
  return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

function navigate(page) {
  const overlay = document.getElementById('pageOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
    setTimeout(() => { window.location.href = page; }, 400);
  } else {
    window.location.href = page;
  }
}

// ─── SHARED INIT ────────────────────────────────────────
function initShared() {
  // Nav scroll
  const nav = document.getElementById('navbar');
  if (nav) {
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
  }

  // Reveal observer
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));

  // Page overlay
  const overlay = document.getElementById('pageOverlay');
  if (overlay) setTimeout(() => overlay.classList.add('hidden'), 500);

  // Cart count
  Cart.updateUI();

  // Nav links - intercept
  document.querySelectorAll('a[data-nav]').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); navigate(a.href); });
  });
}
