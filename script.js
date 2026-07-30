// ---------- Data ----------
const IMG = (id,w=800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const services = [
  {n:'01',name:'Hair Styling & Blow-dry',desc:'Wash, blow-dry and finish for everyday polish or an event look.',dur:'45 min',price:'From ₹499',img:IMG('1707812343087-c9ff9e5abb43')},
  {n:'02',name:'Hair Colour & Balayage',desc:'Global colour, highlights or hand-painted balayage in your chosen tone.',dur:'2–3 hrs',price:'From ₹2,499',img:IMG('1522337360788-8b13dee7a37e')},
  {n:'03',name:'Keratin Smoothening',desc:'Frizz-control treatment for smoother, more manageable hair for months.',dur:'3 hrs',price:'From ₹4,999',img:IMG('1614020863825-28a0bb7e3c3c')},
  {n:'04',name:'Hydra Facial',desc:'Deep-cleansing, hydrating facial for immediate glow before events.',dur:'60 min',price:'From ₹1,999',img:IMG('1616394584738-fc6e612e71b9')},
  {n:'05',name:'Threading & Waxing',desc:'Full-face threading and body waxing with a gentle, precise finish.',dur:'30–90 min',price:'From ₹149',img:IMG('1713824096348-c1956e6da321')},
  {n:'06',name:'Gel Extensions & Nail Art',desc:'Gel polish, acrylic extensions and hand-painted nail art.',dur:'75 min',price:'From ₹999',img:IMG('1607779097040-26e80aa78e66')},
  {n:'07',name:'Party Makeup',desc:'HD makeup for engagements, receptions and family functions.',dur:'75 min',price:'From ₹2,999',img:IMG('1610173827043-9db50e0d8ef9')},
  {n:'08',name:'Bridal Makeup',desc:'Full bridal look with skin prep, draping assistance and touch-up kit.',dur:'3 hrs',price:'From ₹14,999',img:IMG('1684868264466-4c4fcf0a5b37')},
  {n:'09',name:'Body Spa & Massage',desc:'De-stressing full-body spa using warm oils and aromatherapy.',dur:'90 min',price:'From ₹2,499',img:IMG('1643684391140-c5056cfd3436')},
];

const journey = [
  {t:'Bridal Consultation',d:'We map your wedding calendar, skin goals and look references — usually 6–8 weeks out.'},
  {t:'Skin Preparation',d:'A short series of facials and treatments so skin is event-ready, not just event-day makeup.'},
  {t:'Hair & Makeup Trial',d:'A full run-through of your chosen look, adjusted until it is certain.'},
  {t:'Wedding Day Look',d:'On-site or in-studio execution, timed against your baraat or ceremony schedule.'},
  {t:'Reception Look',d:'A distinct second look — different draping, different drama — for the reception.'},
  {t:'Post-Wedding Care',d:'A recovery facial and hair spa once the events are behind you.'},
];

const baSets = [
  {label:'Hair Colour', before:IMG('1522337360788-8b13dee7a37e',1400), after:IMG('1605980766335-d3a41c7332a1',1400)},
  {label:'Bridal Makeup', before:IMG('1610173827043-9db50e0d8ef9',1400), after:IMG('1631549424057-403e75d68e2f',1400)},
  {label:'Skin & Glow', before:IMG('1731514771613-991a02407132',1400), after:IMG('1616394584738-fc6e612e71b9',1400)},
  {label:'Nail Art', before:IMG('1571290274554-6a2eaa771e5f',1400), after:IMG('1632345031435-8727f6897d53',1400)},
];

const portfolioCats = ['All','Bridal','Hair','Skin','Nails'];
const portfolioItems = [
  {cat:'Bridal',label:'Reception Look',h:260,img:IMG('1610047614301-13c63f00c032')},
  {cat:'Hair',label:'Balayage',h:190,img:IMG('1707979577466-2d6109c68a45')},
  {cat:'Skin',label:'Hydra Glow',h:220,img:IMG('1570172619644-dfd03ed5d881')},
  {cat:'Bridal',label:'Mandap Makeup',h:290,img:IMG('1631549424057-403e75d68e2f')},
  {cat:'Nails',label:'Gel Art',h:170,img:IMG('1612887390768-fb02affea7a6')},
  {cat:'Hair',label:'Keratin Finish',h:210,img:IMG('1546561925-a427a021303a')},
  {cat:'Bridal',label:'Engagement Look',h:250,img:IMG('1600685890506-593fdf55949b')},
  {cat:'Skin',label:'Pre-Wedding Facial',h:190,img:IMG('1731514771613-991a02407132')},
  {cat:'Nails',label:'French Ombré',h:170,img:IMG('1519014816548-bf5fe059798b')},
  {cat:'Hair',label:'Hair Spa',h:230,img:IMG('1522337360788-8b13dee7a37e')},
  {cat:'Bridal',label:'Reception Draping',h:210,img:IMG('1610173827043-9db50e0d8ef9')},
  {cat:'Skin',label:'Threading & Brows',h:170,img:IMG('1552693673-1bf958298935')},
  {cat:'Nails',label:'Classic Manicure',h:190,img:IMG('1571290274554-6a2eaa771e5f')},
  {cat:'Hair',label:'Colour Refresh',h:170,img:IMG('1614020863825-28a0bb7e3c3c')},
];

const experts = [
  {name:'Anita Behera',role:'Lead Bridal Artist',exp:'11 yrs experience · HD & Airbrush',img:IMG('1580489944761-15a19d654956')},
  {name:'Suman Pradhan',role:'Senior Hair Stylist',exp:'8 yrs experience · Colour & Balayage',img:IMG('1627161683077-e34782c24d81')},
  {name:'Rina Sahu',role:'Skin & Facial Specialist',exp:'6 yrs experience · Hydra & Anti-ageing',img:IMG('1494790108377-be9c29b29330')},
  {name:'Pooja Nayak',role:'Nail & Nail Art Artist',exp:'5 yrs experience · Gel & 3D Art',img:IMG('1611432579699-484f7990b127')},
];

const reviews = [
  {t:'Trial look was exactly what we discussed — no surprises on the wedding day. That alone was worth booking early.',w:'— Ankita, Bride · Bargarh'},
  {t:'Reception makeup lasted the entire evening through the heat and the photos. Team was on time and calm.',w:'— Debasmita, Bride · Sambalpur'},
  {t:'Been going for hair spa monthly for a year now. Consistent quality, never feels rushed.',w:'— Swagatika, Member'},
  {t:'Booked the bridal package for both engagement and wedding — two completely different looks, both beautiful.',w:'— Priyanka, Bride · Bargarh'},
];

const tiers = [
  {name:'Gold',tag:'Entry',perks:['10% off all services','Priority weekend slots','Birthday facial']},
  {name:'Platinum',tag:'Most chosen',perks:['15% off all services','Free monthly hair spa','Priority booking','Birthday gift hamper'],featured:true},
  {name:'Diamond',tag:'Bridal families',perks:['20% off all services','Complimentary bridal trial','Dedicated stylist','Members-only event invites']},
];

const whyItems = [
  {t:'Certified Artists',d:'Trained in HD, airbrush and modern colour technique.'},
  {t:'Premium Product Lines',d:"Skin and hair products chosen for Odisha's climate."},
  {t:'Hygiene Standards',d:'Sanitised tools and single-use essentials for every client.'},
  {t:'Personal Consultation',d:'Every bridal booking starts with a proper sit-down, not a walk-in.'},
];

// ---------- Render ----------
const el = (sel) => document.querySelector(sel);

el('#servicesGrid').innerHTML = services.map(s => `
  <div class="service-card" data-reveal>
    <div class="sc-img"><img src="${s.img}" alt="${s.name}" loading="lazy"></div>
    <div class="sc-body">
      <div class="sc-top">
        <span class="num">${s.n}</span>
        <div class="arrow">→</div>
      </div>
      <div>
        <h3>${s.name}</h3>
        <p class="desc">${s.desc}</p>
      </div>
      <div class="meta"><span>${s.dur}</span><span class="price">${s.price}</span></div>
    </div>
  </div>
`).join('');

el('#journeySteps').innerHTML = journey.map((j,i) => `
  <div class="journey-step" data-reveal>
    <div class="js-content">
      <div class="jnum">Stage ${String(i+1).padStart(2,'0')}</div>
      <h3>${j.t}</h3>
      <p>${j.d}</p>
    </div>
    <div class="js-dot"></div>
  </div>
`).join('');

el('#baTabs').innerHTML = baSets.map((b,i)=>`<div class="ba-tab ${i===0?'active':''}" data-i="${i}">${b.label}</div>`).join('');
function setBaSet(i){
  document.querySelectorAll('.ba-tab').forEach((t,idx)=>t.classList.toggle('active', idx===i));
  const set = baSets[i];
  el('#baBefore').src = set.before;
  el('#baAfter').src = set.after;
  el('#baBefore').alt = `${set.label} before AB Dreamline treatment`;
  el('#baAfter').alt = `${set.label} after AB Dreamline treatment`;
}
el('#baTabs').addEventListener('click', e=>{
  const t = e.target.closest('.ba-tab'); if(!t) return;
  setBaSet(parseInt(t.dataset.i));
});
setBaSet(0);

el('#portTabs').innerHTML = portfolioCats.map((c,i)=>`<button class="${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
function renderMasonry(cat){
  const items = cat==='All' ? portfolioItems : portfolioItems.filter(p=>p.cat===cat);
  el('#masonryGrid').innerHTML = items.map(p=>`
    <article class="gallery-page">
      <img src="${p.img}" alt="${p.label}" loading="lazy">
      <div><span>${p.cat}</span><h3>${p.label}</h3></div>
    </article>
  `).join('');
}
el('#portTabs').addEventListener('click', e=>{
  const b = e.target.closest('button'); if(!b) return;
  document.querySelectorAll('.portfolio-tabs button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  renderMasonry(b.dataset.cat);
});
renderMasonry('All');

el('#expertsGrid').innerHTML = experts.map(e=>`
  <div class="expert-card" data-reveal>
    <div class="expert-photo">
      <img src="${e.img}" alt="${e.name}" loading="lazy">
      <div class="ig">◎</div>
    </div>
    <h3>${e.name}</h3>
    <div class="role">${e.role}</div>
    <p class="exp">${e.exp}</p>
  </div>
`).join('');

const reviewCards = reviews.map(r=>`
  <div class="review-card">
    <div class="stars">★★★★★</div>
    <p>"${r.t}"</p>
    <div class="who">${r.w}</div>
  </div>
`).join('');
// Two matching groups create a seamless, infinite marquee; the duplicate is hidden from assistive technology.
el('#reviewsTrack').innerHTML = `<div class="reviews-group">${reviewCards}</div><div class="reviews-group" aria-hidden="true">${reviewCards}</div>`;

el('#tiersGrid').innerHTML = tiers.map(t=>`
  <div class="tier ${t.featured?'featured':''}" data-reveal>
    <div class="tag">${t.tag}</div>
    <h3>${t.name}</h3>
    <ul>${t.perks.map(p=>`<li>${p}</li>`).join('')}</ul>
  </div>
`).join('');

el('#whyGrid').innerHTML = whyItems.map((w,i)=>`
  <div class="why-item" data-reveal>
    <div class="wi-num">${String(i+1).padStart(2,'0')}</div>
    <h3>${w.t}</h3>
    <p>${w.d}</p>
  </div>
`).join('');

const bookingDate = el('#bookingDate');
bookingDate.min = new Date().toISOString().split('T')[0];
el('#bookingForm').addEventListener('submit', event => {
  event.preventDefault();
  const booking = new FormData(event.currentTarget);
  const message = `Hello AB Dreamline, I would like to request an appointment.%0A%0AService: ${booking.get('service')}%0AArtist: ${booking.get('artist')}%0ADate: ${booking.get('date')}%0ATime: ${booking.get('time')}`;
  window.open(`https://wa.me/910000000000?text=${message}`, '_blank', 'noopener');
});

// ---------- Interactions ----------
// Header scroll state
const header = el('#siteHeader');
window.addEventListener('scroll', ()=>{
  header.classList.toggle('scrolled', window.scrollY > 40);
}, {passive:true});

// Mobile menu toggle
const menuToggle = el('#menuToggle');
const mobileMenu = el('#mobileMenu');
menuToggle.addEventListener('click', ()=>{
  const open = menuToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
  menuToggle.classList.remove('open');
  mobileMenu.classList.remove('open');
}));

// Hero image load-in
requestAnimationFrame(()=> requestAnimationFrame(()=> document.querySelector('.hero').classList.add('loaded')));

// Scroll reveal (IntersectionObserver)
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.15});
document.querySelectorAll('[data-reveal], .journey-step').forEach(elm => revealObserver.observe(elm));

// Ribbon draw + journey step stagger
const ribbon = el('#ribbonSvg');
const ribbonObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      ribbon.classList.add('drawn');
      ribbonObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.1});
ribbonObserver.observe(document.querySelector('.journey-wrap'));
