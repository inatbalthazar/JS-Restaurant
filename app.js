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
`;
document.head.appendChild(style);

const heroBg = document.querySelector('.hero-bg');
heroBg.style.backgroundImage = `linear-gradient(135deg, rgba(30,27,26,0.88), rgba(48,38,32,0.92)), url(${heroBackground})`;
heroBg.style.backgroundSize = 'cover';
heroBg.style.backgroundPosition = 'center';
heroBg.style.backgroundRepeat = 'no-repeat';

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
            <span class="cuisine-tag">${item.cuisine}</span>
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
                    ${item.vegetarian ? 'Vegetarian' : 'Non-Veg'}
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
