const products = [
  {id:1,name:'Nintendo Switch 2', img: (window.basePath || 'src/assets/') + 'nintendo-switch2.jpg',specs:'256GB, Mario Kart World, Lacrado',cat:'console',price:'R$ 3.899,90',old:'R$ 4.799,90',install:'5x de R$ 779,98 sem juros',badge:'sale',color:'#1a3a00'},
  {id:2,name:'Meta Quest 3S',img: (window.basePath || 'src/assets/') + 'meta-quest3s.jpg',specs:'128GB, Realidade Virtual, Lacrado',cat:'vr',price:'R$ 2.299,90',old:'R$ 2.899,90',install:'5x de R$ 459,98 sem juros',badge:'sale',color:'#1a001a'},
  {id:3,name:'Razer DeathAdder V3',img: (window.basePath || 'src/assets/') + 'razer-deathadder.jpg',specs:'30000 DPI, Sem Fio, RGB',cat:'mouse',price:'R$ 749,90',old:'',install:'3x de R$ 249,97 sem juros',badge:'new',color:'#001a1a'},
  {id:4,name:'HyperX Alloy Origins',img: (window.basePath || 'src/assets/') + 'hyperx-alloy.jpg',specs:'Mecânico, RGB, Switch Red',cat:'teclado',price:'R$ 549,90',old:'R$ 699,90',install:'3x de R$ 183,30 sem juros',badge:'sale',color:'#1a1a00'},
  {id:5,name:'Samsung Odyssey G9',img: (window.basePath || 'src/assets/') + 'samsung-odyssey.jpg',specs:'49" OLED, 240Hz, HDR',cat:'monitor',price:'R$ 9.999,90',old:'',install:'12x de R$ 833,33 sem juros',badge:'new',color:'#001a0d'},
  {id:6,name:'Logitech G733',img: (window.basePath || 'src/assets/') + 'logitech-g733.jpg',specs:'7.1 Surround, Sem Fio, RGB',cat:'headset',price:'R$ 699,90',old:'R$ 899,90',install:'3x de R$ 233,30 sem juros',badge:'sale',color:'#0d001a'},
];

const destaques = [
  {name:'Nintendo Switch 2',img:'src/assets/nintendo-switch2.jpg',desc:'Com Mario Kart World, 256GB, Console Nintendo (Novo, Lacrado)',price:'R$ 3.899,90',old:'R$ 4.333,22',install:'em até 5x de R$ 866,64 sem juros',tag:'Console'},
  {name:'Meta Quest 3S',img:'src/assets/meta-quest3s.jpg',desc:'128GB, Lente Óculos de Realidade Virtual (Novo, Lacrado)',price:'R$ 2.299,90',old:'R$ 2.555,44',install:'em até 5x de R$ 511,08 sem juros',tag:'VR Headset'},
  {name:'Odyssey G9 OLED',img:'src/assets/samsung-odyssey.jpg',desc:'49" Curvo, 240Hz, 0.03ms, HDR2000, Samsung',price:'R$ 9.999,90',old:'',install:'em até 12x de R$ 833,33 sem juros',tag:'Monitor'},
  {name:'Cadeira DXRacer',img:'src/assets/cadeira-dxracer.jpg',desc:'Formula Series, Encosto Alto, Couro PU, Preta/Vermelha',price:'R$ 1.899,90',old:'R$ 2.299,90',install:'em até 6x de R$ 316,65 sem juros',tag:'Cadeira'},
];

const orderItems = [
  {name:'Nintendo Switch 2 — 256GB',img:'src/assets/nintendo-switch2.jpg',qty:'x1',price:'R$ 3.899,90'},
  {name:'Meta Quest 3S — 128GB',img:'src/assets/meta-quest3s.jpg',qty:'x1',price:'R$ 2.299,90'},
];

/* ---- RENDER PRODUCTS ---- */
function renderProducts(filter='todos'){
  const grid = document.getElementById('productsGrid');
  const filtered = filter==='todos' ? products : products.filter(p=>p.cat===filter);
  grid.innerHTML = filtered.map((p,i)=>`
    <div class="product-card" style="animation-delay:${i*0.1}s">
      ${p.badge?`<span class="product-badge badge-${p.badge}">${p.badge==='sale'?'OFERTA':'NOVO'}</span>`:''}
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;">
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-specs">${p.specs}</div>
      ${p.old?`<div class="product-price-old">${p.old}</div>`:''}
      <div class="product-price">${p.price}</div>
      <div class="product-install">${p.install}</div>
      <div class="product-footer">
        <button class="btn-buy">Comprar</button>
        <button class="btn-wishlist">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

/* ---- RENDER DESTAQUES ---- */
function renderDestaques(){
  const slider = document.getElementById('destaqueSlider');
  slider.innerHTML = destaques.map(d=>`
    <div class="destaque-card">
      <div class="destaque-img">
        <img src="${d.img}" alt="${d.name}" style="width:100%;height:100%;object-fit:cover;display:block;">
      </div>
      <div class="destaque-info">
        <div class="destaque-tag">${d.tag}</div>
        <div class="destaque-name">${d.name}</div>
        <div class="destaque-desc">${d.desc}</div>
        <div class="destaque-price-block">
          <div class="price-vista">${d.price} <span style="font-size:12px;font-weight:400;color:rgba(255,255,255,0.4);">à vista</span></div>
          ${d.old?`<div class="price-ou">ou</div><div class="price-parcel">${d.old}</div>`:''}
          <div class="price-parcel" style="margin-top:2px;">${d.install}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---- RENDER ORDER ---- */
function renderOrder(){
  const el = document.getElementById('orderItems');
  el.innerHTML = orderItems.map(o=>`
    <div class="order-item">
      <div class="order-thumb">
        <img src="${o.img}" alt="${o.name}" style="width:100%;height:100%;object-fit:cover;display:block;">
      </div>
      <div>
        <div class="order-item-name">${o.name}</div>
        <div class="order-item-qty">${o.qty}</div>
      </div>
      <div class="order-item-price">${o.price}</div>
    </div>
  `).join('');
}

/* ---- FILTER ---- */
function filterProducts(cat, btn){
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat);
}

/* ---- PAY SWITCH ---- */
function switchPay(method, btn){
  document.querySelectorAll('.pay-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('payCartao').style.display = method==='cartao' ? 'block':'none';
  document.getElementById('payPix').classList.toggle('show', method==='pix');
  document.getElementById('payBoleto').classList.toggle('show', method==='boleto');
}

/* ---- CARD FORMAT ---- */
function formatCard(el){
  let v = el.value.replace(/\D/g,'').substring(0,16);
  el.value = v.replace(/(.{4})/g,'$1 ').trim();
}
function formatDate(el){
  let v = el.value.replace(/\D/g,'').substring(0,4);
  if(v.length>=3) v = v.substring(0,2)+'/'+v.substring(2);
  el.value = v;
}

/* ---- PIX TIMER ---- */
let pixSeconds = 15*60-1;
setInterval(()=>{
  if(pixSeconds<=0) return;
  pixSeconds--;
  const m = Math.floor(pixSeconds/60).toString().padStart(2,'0');
  const s = (pixSeconds%60).toString().padStart(2,'0');
  const el = document.getElementById('pixTimer');
  if(el) el.textContent = m+':'+s;
},1000);

/* ---- NAV ACTIVE ---- */
window.addEventListener('scroll',()=>{
  const sections = ['home','portfolio','destaques','pricing','checkout'];
  let current = 'home';
  sections.forEach(id=>{
    const el = document.getElementById(id);
    if(el && window.scrollY >= el.offsetTop - 100) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href')==='#'+current);
  });
});

/* ---- INIT ---- */
renderProducts();
renderDestaques();
renderOrder();