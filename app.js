const style = document.createElement('style');
style.textContent = `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:#f6f4f0;color:#1e1b1a;-webkit-font-smoothing:antialiased}
.navbar{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(30,27,26,0.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,0.06)}
.nav-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:64px}
.logo{font-family:'Playfair Display',serif;font-size:1.6rem;font-weight:700;color:#fff;text-decoration:none;letter-spacing:-0.5px}
.nav-links{display:flex;list-style:none;gap:32px}
.nav-links a{color:rgba(255,255,255,0.7);text-decoration:none;font-size:.85rem;font-weight:500;letter-spacing:.5px;text-transform:uppercase;transition:color .2s}
.nav-links a:hover,.nav-links a.active{color:#d4af37}
.hero{position:relative;min-height:92vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 24px 80px;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,rgba(30,27,26,0.88),rgba(48,38,32,0.92));z-index:0}
.hero-content{position:relative;z-index:1;max-width:720px}
.hero-since{display:inline-block;font-size:.75rem;text-transform:uppercase;letter-spacing:6px;color:#d4af37;margin-bottom:20px;opacity:.8}
.hero h1{font-family:'Playfair Display',serif;font-size:5rem;font-weight:700;color:#fff;line-height:1.1;margin-bottom:16px}
.hero h1 em{font-style:italic;color:#d4af37}
.hero p{font-size:1.2rem;color:rgba(255,255,255,0.7);font-weight:300;margin-bottom:36px;line-height:1.7}
.btn-hero{display:inline-block;padding:14px 40px;border:1px solid #d4af37;color:#d4af37;text-decoration:none;font-size:.85rem;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;border-radius:50px;transition:all .3s}
.btn-hero:hover{background:#d4af37;color:#1e1b1a}
.menu-section{max-width:1200px;margin:0 auto;padding:80px 24px 100px}
.section-heading{text-align:center;margin-bottom:48px}
.section-sub{display:inline-block;font-size:.8rem;text-transform:uppercase;letter-spacing:4px;color:#b8944a;margin-bottom:8px}
.section-heading h2{font-family:'Playfair Display',serif;font-size:2.8rem;font-weight:600;color:#1e1b1a}
.filter-bar{display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:48px}
.filter-btn{padding:10px 24px;border:1px solid #d9d0c6;background:transparent;color:#5a4e46;font-family:'Inter',sans-serif;font-size:.82rem;font-weight:500;letter-spacing:.5px;border-radius:50px;cursor:pointer;transition:all .25s}
.filter-btn:hover{border-color:#b8944a;color:#b8944a}
.filter-btn.active{background:#1e1b1a;border-color:#1e1b1a;color:#fff}
.menu-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:36px}
.menu-card{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.05);transition:transform .4s cubic-bezier(.25,.46,.45,.94),box-shadow .4s ease}
.menu-card:hover{transform:translateY(-10px);box-shadow:0 20px 60px rgba(0,0,0,0.10)}
.card-img-wrap{position:relative;width:100%;height:220px;overflow:hidden}
.card-img-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(.25,.46,.45,.94)}
.menu-card:hover .card-img-wrap img{transform:scale(1.10)}
.card-img-wrap.img-failed{display:flex;align-items:center;justify-content:center}
.cuisine-tag{position:absolute;top:14px;left:14px;background:rgba(30,27,26,0.8);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);color:#fff;padding:5px 14px;border-radius:50px;font-size:.72rem;font-weight:500;letter-spacing:.3px;border:1px solid rgba(255,255,255,0.1)}
.card-body{padding:22px 24px 26px}
.card-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.card-header h3{font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:600;color:#1e1b1a}
.price{font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:700;color:#b8944a}
.desc{font-size:.9rem;color:#6b5f56;line-height:1.65;margin-bottom:16px}
.card-meta{display:flex;align-items:center;justify-content:space-between}
.origin{font-size:.88rem;color:#5a4e46}
.badge{display:inline-block;padding:3px 12px;border-radius:50px;font-size:.7rem;font-weight:600;letter-spacing:.3px}
.badge.veg{background:#e6f3e6;color:#1f7a3a}
.badge.non-veg{background:#fde8e8;color:#b91c1c}
footer{background:#1e1b1a;color:rgba(255,255,255,0.6);padding:48px 24px}
.footer-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.footer-logo{font-family:'Playfair Display',serif;font-size:1.3rem;color:#fff;font-weight:600}
.footer-brand p{font-size:.85rem;margin-top:4px}
.footer-copy{font-size:.8rem}
@media(max-width:768px){.hero h1{font-size:3.2rem}.hero{min-height:70vh;padding:100px 20px 60px}.section-heading h2{font-size:2rem}.menu-grid{grid-template-columns:1fr;gap:28px}.nav-links{gap:16px}.nav-links a{font-size:.75rem}.filter-bar{gap:8px}.filter-btn{padding:8px 16px;font-size:.75rem}}
@media(max-width:480px){.hero h1{font-size:2.4rem}.nav-links li:nth-child(3),.nav-links li:nth-child(4){display:none}.card-body{padding:18px 18px 22px}}
.reservation-section{max-width:1200px;margin:0 auto;padding:80px 24px 100px}
.reservation-section h2{font-family:'Playfair Display',serif;font-size:2.8rem;font-weight:600;color:#1e1b1a;text-align:center;margin-bottom:8px}
.reservation-section .section-sub{display:block;text-align:center;margin-bottom:48px}
.reservation-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px}
@media(max-width:768px){.reservation-grid{grid-template-columns:1fr}}
.reservation-form{background:#fff;border-radius:20px;padding:36px;box-shadow:0 4px 24px rgba(0,0,0,0.05)}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px}
.form-group{display:flex;flex-direction:column}
.form-group label{font-size:.8rem;font-weight:600;color:#5a4e46;letter-spacing:.5px;text-transform:uppercase;margin-bottom:6px}
.form-group input,.form-group select{font-family:'Inter',sans-serif;font-size:.9rem;padding:10px 14px;border:1px solid #d9d0c6;border-radius:10px;background:#faf9f7;transition:border-color .2s}
.form-group input:focus,.form-group select:focus{outline:none;border-color:#b8944a}
.pre-order-section{margin-top:24px}
.pre-order-section h4{font-family:'Playfair Display',serif;font-size:1.3rem;color:#1e1b1a;margin-bottom:16px}
.pre-order-list{display:flex;flex-direction:column;gap:10px;margin-bottom:16px;max-height:320px;overflow-y:auto}
.pre-order-item{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#faf9f7;border-radius:10px;gap:12px}
.pre-order-item .item-info{flex:1}
.pre-order-item .item-name{font-size:.9rem;font-weight:500;color:#1e1b1a}
.pre-order-item .item-price{font-size:.82rem;color:#b8944a}
.pre-order-item .item-qty{display:flex;align-items:center;gap:8px}
.pre-order-item .item-qty button{width:30px;height:30px;border:1px solid #d9d0c6;border-radius:50%;background:#fff;cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;transition:all .2s}
.pre-order-item .item-qty button:hover{background:#1e1b1a;color:#fff;border-color:#1e1b1a}
.pre-order-item .item-qty span{font-size:.95rem;font-weight:600;min-width:24px;text-align:center}
.pre-order-total{text-align:right;font-size:1.1rem;font-weight:600;color:#1e1b1a;padding-top:12px;border-top:1px solid #e8e3dd;margin-bottom:20px}
.btn-primary{width:100%;padding:14px;background:#1e1b1a;color:#fff;font-family:'Inter',sans-serif;font-size:.9rem;font-weight:600;letter-spacing:.5px;text-transform:uppercase;border:none;border-radius:50px;cursor:pointer;transition:all .3s}
.btn-primary:hover{background:#b8944a}
.reservation-info{background:#fff;border-radius:20px;padding:36px;box-shadow:0 4px 24px rgba(0,0,0,0.05);display:flex;flex-direction:column;justify-content:center}
.reservation-info h3{font-family:'Playfair Display',serif;font-size:1.8rem;color:#1e1b1a;margin-bottom:16px}
.reservation-info p{color:#6b5f56;line-height:1.7;margin-bottom:12px}
.reservation-info .info-detail{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #f0ece7}
.reservation-info .info-detail:last-child{border-bottom:none}
.reservation-info .info-icon{font-size:1.2rem;width:28px;text-align:center}
.reservation-info .info-text{font-size:.9rem;color:#5a4e46}
.confirmation-overlay{position:fixed;inset:0;background:rgba(30,27,26,0.7);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:1000;opacity:0;pointer-events:none;transition:opacity .4s}
.confirmation-overlay.active{opacity:1;pointer-events:auto}
.confirmation-modal{background:#fff;border-radius:24px;padding:48px;max-width:480px;width:90%;text-align:center;box-shadow:0 40px 80px rgba(0,0,0,0.2)}
.confirmation-modal .checkmark{font-size:3rem;margin-bottom:16px}
.confirmation-modal h3{font-family:'Playfair Display',serif;font-size:1.6rem;color:#1e1b1a;margin-bottom:8px}
.confirmation-modal p{color:#6b5f56;line-height:1.6;margin-bottom:6px}
.confirmation-modal .reservation-id{font-size:.85rem;color:#b8944a;font-weight:600;margin-top:12px;margin-bottom:20px}
.confirmation-modal .btn-close{padding:12px 32px;background:#1e1b1a;color:#fff;font-family:'Inter',sans-serif;font-size:.85rem;font-weight:500;border:none;border-radius:50px;cursor:pointer;transition:all .3s}
.confirmation-modal .btn-close:hover{background:#b8944a}
:root{--bg:#f6f4f0;--text:#1e1b1a;--card-bg:#fff;--card-shadow:0 4px 24px rgba(0,0,0,0.05);--input-bg:#faf9f7;--border:#d9d0c6;--muted:#5a4e46;--desc:#6b5f56;--footer-bg:#1e1b1a;--footer-text:rgba(255,255,255,0.6);--filter-text:#5a4e46;--filter-border:#d9d0c6;--pre-order-bg:#faf9f7;--divider:#e8e3dd;--info-divider:#f0ece7}
[data-theme="dark"]{--bg:#121212;--text:#e8e0d8;--card-bg:#1e1e1e;--card-shadow:0 4px 24px rgba(0,0,0,0.3);--input-bg:#2a2a2a;--border:#3a3a3a;--muted:#a09888;--desc:#b0a898;--footer-bg:#0a0a0a;--footer-text:rgba(255,255,255,0.5);--filter-text:#c0b8a8;--filter-border:#3a3a3a;--pre-order-bg:#2a2a2a;--divider:#333;--info-divider:#2a2a2a}
body{background:var(--bg);color:var(--text);transition:background .3s,color .3s}
.section-heading h2,.reservation-section h2,.reservation-info h3,.confirmation-modal h3,.pre-order-section h4,.menu-card h3{color:var(--text)}
.menu-card{background:var(--card-bg);box-shadow:var(--card-shadow)}
.menu-card:hover{box-shadow:0 20px 60px rgba(0,0,0,0.15)}
.filter-btn{color:var(--filter-text);border-color:var(--filter-border)}
.filter-btn.active{background:var(--text);color:var(--bg);border-color:var(--text)}
.desc,.reservation-info p,.confirmation-modal p{color:var(--desc)}
.origin{color:var(--muted)}
.card-body,.card-header h3,.reservation-form h4{color:var(--text)}
.reservation-form{background:var(--card-bg);box-shadow:var(--card-shadow)}
.reservation-info{background:var(--card-bg);box-shadow:var(--card-shadow)}
.confirmation-modal{background:var(--card-bg);box-shadow:0 40px 80px rgba(0,0,0,0.3)}
.form-group input,.form-group select{background:var(--input-bg);border-color:var(--border);color:var(--text)}
.form-group label{color:var(--muted)}
.pre-order-item{background:var(--pre-order-bg)}
.pre-order-item .item-name{color:var(--text)}
.pre-order-total{color:var(--text);border-top-color:var(--divider)}
.reservation-info .info-detail{border-bottom-color:var(--info-divider)}
.reservation-info .info-text{color:var(--muted)}
.btn-primary{background:var(--text);color:var(--bg)}
.btn-primary:hover{background:#b8944a;color:#fff}
footer{background:var(--footer-bg);color:var(--footer-text)}
.dark-toggle{background:0;border:1px solid rgba(255,255,255,.25);color:rgba(255,255,255,.8);padding:5px 8px;border-radius:6px;font-size:.8rem;font-weight:600;cursor:pointer;transition:all .25s;font-family:'Inter',sans-serif;line-height:1}
.dark-toggle:hover{background:rgba(255,255,255,.1);border-color:#d4af37;color:#d4af37}
.nav-actions{display:flex;align-items:center;gap:8px}
.nav-actions .lang-btn{background:0;border:1px solid rgba(255,255,255,.25);color:rgba(255,255,255,.8);padding:5px 12px;border-radius:6px;font-size:.75rem;font-weight:600;letter-spacing:.5px;cursor:pointer;transition:all .25s;font-family:'Inter',sans-serif;line-height:1}
.nav-actions .lang-btn:hover{background:rgba(255,255,255,.1);border-color:#d4af37;color:#d4af37}
.lang-switcher{position:relative}
.lang-menu{position:absolute;top:calc(100%+8px);right:0;background:#fff;border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,.15);padding:6px;min-width:120px;max-height:280px;overflow-y:auto;opacity:0;pointer-events:none;transform:translateY(-6px);transition:all .25s ease;display:grid;grid-template-columns:1fr 1fr;gap:2px}
.lang-menu.open{opacity:1;pointer-events:auto;transform:translateY(0)}
.lang-menu::-webkit-scrollbar{width:4px}
.lang-menu::-webkit-scrollbar-thumb{background:#d9d0c6;border-radius:4px}
.lang-menu button{background:0;border:none;padding:6px 8px;border-radius:6px;cursor:pointer;font-size:.78rem;color:#5a4e46;font-weight:500;transition:all .15s;font-family:'Inter',sans-serif;text-align:center}
.lang-menu button:hover{background:#f0ece7;color:#1e1b1a}
.lang-menu button.active{background:#1e1b1a;color:#fff}
.about-section,.contact-section{max-width:1200px;margin:0 auto;padding:80px 24px 100px}
.about-section h2,.contact-section h2{font-family:'Playfair Display',serif;font-size:2.8rem;font-weight:600;color:var(--text);text-align:center;margin-bottom:8px}
.about-section .section-sub,.contact-section .section-sub{display:block;text-align:center;margin-bottom:48px}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.about-text p{color:var(--desc);line-height:1.8;font-size:.95rem;margin-bottom:16px}
.about-text .chef-name{font-family:'Playfair Display',serif;font-size:1.2rem;color:#d4af37;font-weight:600;margin-top:8px}
.about-text .chef-title{font-size:.82rem;color:var(--muted);margin-bottom:20px}
.about-img{width:100%;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)}
.about-img img{width:100%;height:420px;object-fit:cover;display:block}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px}
.contact-card{background:var(--card-bg);border-radius:20px;padding:36px;box-shadow:0 4px 24px rgba(0,0,0,.05)}
.contact-card h3{font-family:'Playfair Display',serif;font-size:1.6rem;color:var(--text);margin-bottom:20px}
.contact-item{display:flex;align-items:flex-start;gap:14px;padding:14px 0;border-bottom:1px solid var(--info-divider)}
.contact-item:last-child{border-bottom:none}
.contact-item .ci-icon{font-size:1.3rem;width:28px;text-align:center;flex-shrink:0;margin-top:2px}
.contact-item .ci-label{font-size:.72rem;font-weight:600;color:var(--muted);letter-spacing:.5px;text-transform:uppercase;margin-bottom:2px}
.contact-item .ci-value{font-size:.9rem;color:var(--text);line-height:1.5}
.contact-map{background:var(--card-bg);border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.05);min-height:360px}
.contact-map iframe{width:100%;height:360px;border:none;display:block}
@media(max-width:768px){.about-grid,.contact-grid{grid-template-columns:1fr}.about-img img{height:260px}.lang-menu{grid-template-columns:1fr}}
@media(max-width:480px){.lang-btn{padding:4px 10px;font-size:.7rem}}
`;
document.head.appendChild(style);

const heroBg = document.querySelector('.hero-bg');
heroBg.style.background = 'none';
heroBg.innerHTML = '';
heroBackground.forEach((url, i) => {
  const div = document.createElement('div');
  div.className = 'hero-slide';
  div.style.cssText = `position:absolute;inset:0;background:linear-gradient(135deg,rgba(30,27,26,0.88),rgba(48,38,32,0.92)),url(${url}) center/cover no-repeat;opacity:${i===0?1:0};transition:opacity 1.2s ease;z-index:${i===0?1:0}`;
  heroBg.appendChild(div);
});
let slideIdx = 0;
setInterval(() => {
  const s = heroBg.children;
  s[slideIdx].style.opacity = '0';
  s[slideIdx].style.zIndex = '0';
  slideIdx = (slideIdx + 1) % s.length;
  s[slideIdx].style.opacity = '1';
  s[slideIdx].style.zIndex = '1';
}, 5000);

const toggle = document.querySelector('.dark-toggle');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('genDTheme', theme);
}

const saved = localStorage.getItem('genDTheme');
if (saved) {
    applyTheme(saved);
} else {
    applyTheme('dark');
}

toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

let currentLang = 'en';
const langBtn = document.querySelector('.lang-switcher .lang-btn');
const langWrap = document.querySelector('.lang-switcher');
const langMenu = document.createElement('div');
langMenu.className = 'lang-menu';
langList.forEach(code => {
  const btn = document.createElement('button');
  btn.textContent = code.toUpperCase();
  btn.dataset.lang = code;
  if (code === currentLang) btn.className = 'active';
  btn.addEventListener('click', () => {
    setLanguage(code);
    langMenu.classList.remove('open');
  });
  langMenu.appendChild(btn);
});
langWrap.appendChild(langMenu);
langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langMenu.classList.toggle('open');
  if (langMenu.classList.contains('open')) {
    const active = langMenu.querySelector('.active');
    if (active) active.scrollIntoView({ block: 'center' });
  }
});
document.addEventListener('click', () => langMenu.classList.remove('open'));

function setLanguage(code) {
  currentLang = code;
  langBtn.textContent = code.toUpperCase();
  langMenu.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.lang === code));
  renderReservation();
  renderAbout();
  renderContact();
  applyTranslation(translations[code]);
}

function applyTranslation(t) {
  document.querySelector('.nav-links li:nth-child(1) a').textContent = t.navMenu;
  document.querySelector('.nav-links li:nth-child(2) a').textContent = t.navAbout;
  document.querySelector('.nav-links li:nth-child(3) a').textContent = t.navRes;
  document.querySelector('.nav-links li:nth-child(4) a').textContent = t.navContact;
  document.querySelector('.hero-since').textContent = t.heroSince;
  document.querySelector('.hero h1').innerHTML = t.heroTitle.replace(/ (.+)$/, ' <em>$1</em>');
  document.querySelector('.hero p').innerHTML = t.heroDesc.replace('Gen D', '<span style="color:yellow"><em>Gen D </em></span>');
  document.querySelector('.btn-hero').textContent = t.heroBtn;
  document.querySelector('.menu-section .section-sub').textContent = t.sectionSub;
  document.querySelector('.menu-section .section-heading h2').textContent = t.sectionTitle;
  document.querySelectorAll('.filter-btn')[0].textContent = t.filterAll;
  document.querySelectorAll('.filter-bar .filter-btn').forEach((btn, i) => {
    if (i > 0) {
      const cuisine = btn.dataset.filter;
      btn.textContent = t[cuisine] || cuisine;
    }
  });
  document.querySelector('.footer-brand p').textContent = t.footerText;
}

function title(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getFlag(country) {
    return { Italy: '🇮🇹', USA: '🇺🇸', Japan: '🇯🇵', Mexico: '🇲🇽', Thailand: '🇹🇭' }[country] || '🌍';
}

const grid = document.getElementById('menuGrid');
const fragment = document.createDocumentFragment();

foodDatabase.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.dataset.cuisine = item.cuisine;

    const grad = fallbackGradients[item.cuisine] || 'linear-gradient(135deg, #667eea, #764ba2)';
    const price = '$' + item.price.toFixed(2);

    card.innerHTML = `
        <div class="card-img-wrap" style="background:${grad}">
            <img src="${item.image}" alt="${item.name}" loading="lazy"
                 onerror="this.parentElement.classList.add('img-failed');this.style.display='none'">
            <span class="cuisine-tag">${(translations[currentLang]||translations.en)[item.cuisine] || item.cuisine}</span>
        </div>
        <div class="card-body">
            <div class="card-header">
                <h3>${title(item.name)}</h3>
                <span class="price">${price}</span>
            </div>
            <p class="desc">${item.description}</p>
            <div class="card-meta">
                <span class="origin">${getFlag(item.origin)} ${item.origin}</span>
                <span class="badge ${item.vegetarian ? 'veg' : 'non-veg'}">
                    ${item.vegetarian ? (translations[currentLang]||translations.en).veg : (translations[currentLang]||translations.en).nonVeg}
                </span>
            </div>
        </div>
    `;

    fragment.appendChild(card);
});

grid.appendChild(fragment);

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;
        document.querySelectorAll('.menu-card').forEach(card => {
            card.style.display = (filter === 'all' || card.dataset.cuisine === filter) ? '' : 'none';
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
    observer.observe(card);
});

const preOrder = {};
let preOrderTotal = 0;

function renderReservation() {
    const t = translations[currentLang] || translations.en;
    const section = document.getElementById('reservation');
    section.innerHTML = `
        <span class="section-sub">${t.resSub}</span>
        <h2>${t.resTitle}</h2>
        <div class="reservation-grid">
            <div class="reservation-form">
                <div class="form-row">
                    <div class="form-group">
                        <label>${t.formName}</label>
                        <input type="text" id="resName" placeholder="${t.placeName}" required>
                    </div>
                    <div class="form-group">
                        <label>${t.formEmail}</label>
                        <input type="email" id="resEmail" placeholder="${t.placeEmail}" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>${t.formPhone}</label>
                        <input type="tel" id="resPhone" placeholder="${t.placePhone}" required>
                    </div>
                    <div class="form-group">
                        <label>${t.formGuests}</label>
                        <select id="resGuests">
                            ${Array.from({length:8}, (_,i) => `<option value="${i+1}">${i+1} ${i===0?t.guest:t.guests}</option>`).join('')}
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>${t.formDate}</label>
                        <input type="date" id="resDate" required>
                    </div>
                    <div class="form-group">
                        <label>${t.formTime}</label>
                        <select id="resTime">
                            ${['11:00','11:30','12:00','12:30','13:00','13:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00'].map(tm => `<option value="${tm}">${tm}</option>`).join('')}
                        </select>
                    </div>
                </div>
                <div class="pre-order-section">
                    <h4>${t.preOrderTitle}</h4>
                    <div class="pre-order-list" id="preOrderList"></div>
                    <div class="pre-order-total">${t.preOrderTotal} <span id="preOrderTotal">$0.00</span></div>
                </div>
                <button class="btn-primary" id="submitReservation">${t.submitBtn}</button>
            </div>
            <div class="reservation-info">
                <h3>${t.infoTitle}</h3>
                <p>${t.infoDesc}</p>
                <div class="info-detail"><span class="info-icon">🕐</span><span class="info-text">${t.infoSeating}</span></div>
                <div class="info-detail"><span class="info-icon">🍽️</span><span class="info-text">${t.infoPreOrder}</span></div>
                <div class="info-detail"><span class="info-icon">🎉</span><span class="info-text">${t.infoOccasion}</span></div>
            </div>
        </div>
        <div class="confirmation-overlay" id="confirmationOverlay">
            <div class="confirmation-modal">
                <div class="checkmark">✅</div>
                <h3>${t.confirmTitle}</h3>
                <p>${t.confirmP1}</p>
                <p>${t.confirmP2}</p>
                <div class="reservation-id" id="reservationId"></div>
                <button class="btn-close" id="closeConfirmation">${t.confirmBtn}</button>
            </div>
        </div>
    `;

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('resDate').setAttribute('min', today);
    document.getElementById('resDate').value = today;

    renderPreOrderList();
    document.getElementById('submitReservation').addEventListener('click', submitReservation);
    document.getElementById('closeConfirmation').addEventListener('click', () => {
        document.getElementById('confirmationOverlay').classList.remove('active');
    });
}

function renderPreOrderList() {
    const container = document.getElementById('preOrderList');
    container.innerHTML = '';
    foodDatabase.forEach(item => {
        const qty = preOrder[item.id] || 0;
        const div = document.createElement('div');
        div.className = 'pre-order-item';
        div.innerHTML = `
            <div class="item-info">
                <div class="item-name">${title(item.name)}</div>
                <div class="item-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="item-qty">
                <button data-id="${item.id}" data-action="minus">−</button>
                <span id="qty-${item.id}">${qty}</span>
                <button data-id="${item.id}" data-action="plus">+</button>
            </div>
        `;
        container.appendChild(div);
    });

    container.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            if (btn.dataset.action === 'plus') {
                preOrder[id] = (preOrder[id] || 0) + 1;
            } else if (btn.dataset.action === 'minus' && preOrder[id] > 0) {
                preOrder[id]--;
                if (preOrder[id] === 0) delete preOrder[id];
            }
            updatePreOrderUI();
        });
    });
}

function updatePreOrderUI() {
    preOrderTotal = 0;
    foodDatabase.forEach(item => {
        const qty = preOrder[item.id] || 0;
        const span = document.getElementById(`qty-${item.id}`);
        if (span) span.textContent = qty;
        preOrderTotal += qty * item.price;
    });
    document.getElementById('preOrderTotal').textContent = '$' + preOrderTotal.toFixed(2);
}

function submitReservation() {
    const name = document.getElementById('resName').value.trim();
    const email = document.getElementById('resEmail').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const guests = document.getElementById('resGuests').value;

    if (!name || !email || !phone || !date) {
        alert('Please fill in all required fields.');
        return;
    }

    const orderItems = foodDatabase.filter(item => preOrder[item.id]).map(item => ({
        name: item.name,
        qty: preOrder[item.id],
        price: item.price
    }));

    const reservation = {
        id: 'GD-' + Date.now().toString(36).toUpperCase(),
        name, email, phone, date, time, guests: parseInt(guests),
        order: orderItems,
        total: preOrderTotal,
        createdAt: new Date().toISOString()
    };

    const bookings = JSON.parse(localStorage.getItem('genDReservations') || '[]');
    bookings.push(reservation);
    localStorage.setItem('genDReservations', JSON.stringify(bookings));

    Object.keys(preOrder).forEach(k => delete preOrder[k]);
    updatePreOrderUI();

    const tConfirm = translations[currentLang] || translations.en;
    document.getElementById('reservationId').textContent = tConfirm.confirmRef + ' ' + reservation.id;
    document.getElementById('confirmationOverlay').classList.add('active');

    document.getElementById('resName').value = '';
    document.getElementById('resEmail').value = '';
    document.getElementById('resPhone').value = '';
}

renderReservation();
renderAbout();
renderContact();

function renderAbout() {
  const t = translations[currentLang] || translations.en;
  const section = document.getElementById('about');
  section.innerHTML = `
    <span class="section-sub">${t.aboutSub}</span>
    <h2>${t.aboutTitle}</h2>
    <div class="about-grid">
      <div class="about-text">
        <p>${t.aboutP1}</p>
        <p>${t.aboutP2}</p>
        <p>${t.aboutP3}</p>
        <p>${t.aboutP4}</p>
        <div class="chef-name">${t.aboutChef}</div>
        <div class="chef-title">${t.aboutChefTitle}</div>
      </div>
      <div class="about-img" style="background:linear-gradient(135deg,#1a1a2e,#16213e);display:flex;align-items:center;justify-content:center;min-height:420px;border-radius:20px">
        <span style="color:rgba(255,255,255,.3);font-size:3rem;font-family:'Playfair Display',serif">Maido</span>
      </div>
    </div>`;
}

function renderContact() {
  const t = translations[currentLang] || translations.en;
  const section = document.getElementById('contact');
  section.innerHTML = `
    <span class="section-sub">${t.contactSub}</span>
    <h2>${t.contactTitle}</h2>
    <div class="contact-grid">
      <div class="contact-card">
        <h3>${t.contactVisit}</h3>
        <div class="contact-item">
          <span class="ci-icon">📍</span>
          <div><div class="ci-label">${t.contactAddrLabel}</div><div class="ci-value">${t.contactAddress}</div></div>
        </div>
        <div class="contact-item">
          <span class="ci-icon">📞</span>
          <div><div class="ci-label">${t.contactPhoneLabel}</div><div class="ci-value">${t.contactPhone}</div></div>
        </div>
        <div class="contact-item">
          <span class="ci-icon">🕐</span>
          <div><div class="ci-label">${t.contactHoursLabel}</div><div class="ci-value">${t.contactHours}</div></div>
        </div>
        <div class="contact-item">
          <span class="ci-icon">🚫</span>
          <div><div class="ci-label">${t.contactSundayLabel}</div><div class="ci-value">${t.contactSunday}</div></div>
        </div>
      </div>
      <div class="contact-map">
        <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-77.0375%2C-12.1234%2C-77.0255%2C-12.1134&amp;layer=mapnik&amp;marker=-12.1184%2C-77.0315" loading="lazy" allowfullscreen></iframe>
      </div>
    </div>`;
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver(() => {
  let current = 'menu';
  sections.forEach(s => {
    const rect = s.getBoundingClientRect();
    if (rect.top <= 200) current = s.id;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}, { threshold: [0, 0.25, 0.5] });
sections.forEach(s => sectionObserver.observe(s));
