/* comelebozec.com — index : chorégraphie d'entrée, foyer, parallaxe, réglette, inventaire, signet, prefetch */
const html = document.documentElement;
const champ = document.getElementById('champ');
const docs = champ ? [...champ.querySelectorAll('.doc')] : [];
const POINTEUR = matchMedia('(hover:hover) and (pointer:fine)');
const REDUIT = matchMedia('(prefers-reduced-motion:reduce)');
const ecoute = (mql, fn) => { try { mql.addEventListener('change', fn); } catch (e) { if (mql.addListener) mql.addListener(fn); } };
const pointeurFin = () => POINTEUR.matches && !html.classList.contains('tactile');
const cibleHash = () => { const id = decodeURIComponent(location.hash.slice(1)); return id ? document.getElementById(id) : null; };

/* ---- entrée : le nom glisse vers l'en-tête (FLIP, transform seul), le défilement se libère à 1 200 ms ---- */
function choregraphie(){
  const seuil = document.getElementById('seuil');
  const h1 = seuil && seuil.querySelector('h1');
  const nom = document.querySelector('.tete .nom');
  const tete = document.getElementById('tete');
  if (h1 && nom && tete && !REDUIT.matches && h1.animate){
    html.classList.add('flip');
    tete.style.animation = 'none';                 /* mesure hors de l'animation d'arrivée (échelle 1.03) */
    const a = h1.getBoundingClientRect(), b = nom.getBoundingClientRect();
    tete.style.animation = '';
    const k = b.height / a.height;
    const glisse = h1.animate([{ transform:'none' }, { transform:`translate(${b.left - a.left}px,${b.top - a.top}px) scale(${k})` }],
      { duration:500, easing:'cubic-bezier(.2,.7,.2,1)', fill:'forwards' });
    glisse.onfinish = () => { h1.animate([{ opacity:1 }, { opacity:0 }], { duration:120, fill:'forwards' }); };
  }
  setTimeout(liberer, REDUIT.matches ? 600 : 1200);
}
function liberer(){
  if (html.classList.contains('libre')) return;
  html.classList.add('libre');
  const seuil = document.getElementById('seuil'); if (seuil){ seuil.hidden = true; seuil.inert = true; }
  const tete = document.getElementById('tete'); if (tete) tete.focus({ preventScroll:true });
  const annonce = document.getElementById('annonce'); if (annonce) annonce.textContent = 'portfolio — un projet publié';
  const c = cibleHash(); if (c) c.scrollIntoView({ block:'start' });
}
if (html.classList.contains('entered') && !html.classList.contains('direct')) choregraphie();
else if (!html.classList.contains('direct')) addEventListener('entree', choregraphie, { once:true });
else if (location.hash){
  /* arrivée directe sur une ancre : on garantit le défilement une fois la mise en page stable */
  requestAnimationFrame(() => { const c = cibleHash(); if (c) c.scrollIntoView({ block:'start', behavior:'instant' }); });
}

/* ---- foyer : un seul document se développe, tous les autres reculent, la fratrie est dite typographiquement ---- */
let signet = null;
function poserFoyer(doc){
  if (!doc) return;
  if (signet && signet !== doc){ signet.classList.remove('signet'); signet = null; }
  champ.dataset.foyer = doc.dataset.projet;
  champ.style.setProperty('--zf', doc.dataset.z || 0);
  for (const d of docs){
    d.classList.toggle('foyer', d === doc);
    d.classList.toggle('frere', d !== doc && d.dataset.projet === doc.dataset.projet);
  }
}
function leverFoyer(){
  if (!champ.hasAttribute('data-foyer')) return;
  delete champ.dataset.foyer;
  champ.style.setProperty('--zf', 0);
  for (const d of docs) d.classList.remove('foyer', 'frere');
}
if (champ){
  /* survol : souris et stylet seulement ; le doigt n'a pas de survol, il ouvre directement */
  champ.addEventListener('pointerover', e => { if (e.pointerType === 'touch') return; const d = e.target.closest('.doc'); if (d && pointeurFin()) poserFoyer(d); });
  champ.addEventListener('pointerout', e => { const d = e.target.closest('.doc'); if (d && !d.contains(e.relatedTarget)) leverFoyer(); });
  champ.addEventListener('focusin', e => { const d = e.target.closest('.doc'); if (d) poserFoyer(d); });
  champ.addEventListener('focusout', e => { const d = e.target.closest('.doc'); if (d && !d.contains(e.relatedTarget)) leverFoyer(); });
  addEventListener('pointerdown', e => { if (e.pointerType === 'touch') leverFoyer(); }, { capture:true, passive:true });
  ecoute(POINTEUR, leverFoyer);

  /* prefetch de la page projet au premier survol ; signet et nom de transition au clic qui navigue */
  const prefetches = new Set();
  champ.addEventListener('pointerover', e => {
    const d = e.target.closest('.doc'); if (!d || prefetches.has(d.href)) return;
    prefetches.add(d.href);
    const l = document.createElement('link'); l.rel = 'prefetch'; l.href = d.href; document.head.appendChild(l);
  });
  champ.addEventListener('click', e => {
    const d = e.target.closest('.doc');
    if (d && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) marquerDepart(d);
  });
  function marquerDepart(d){
    try { sessionStorage.setItem('signet', d.dataset.doc); } catch (err) {}
    if (REDUIT.matches) return;                  /* mouvement réduit : fondu de page, pas de morph */
    document.querySelectorAll('[style*="view-transition-name"]').forEach(n => { n.style.viewTransitionName = ''; });
    const pos = d.querySelector('.pos'); if (pos) pos.style.viewTransitionName = 'doc-' + d.dataset.projet;
  }
  addEventListener('pagehide', () => { document.querySelectorAll('.pos').forEach(p => { p.style.viewTransitionName = ''; }); });

  /* ---- parallaxe signée par la profondeur : un écouteur, une frame, deux propriétés sur un seul élément ---- */
  let px = 0, py = 0, attente = false;
  addEventListener('pointermove', e => {
    if (e.pointerType === 'touch' || !pointeurFin() || REDUIT.matches) return;
    px = (e.clientX/innerWidth - .5) * 2; py = (e.clientY/innerHeight - .5) * 2;
    if (!attente){ attente = true; requestAnimationFrame(() => {
      champ.style.setProperty('--px', px.toFixed(3)); champ.style.setProperty('--py', py.toFixed(3)); attente = false; }); }
  }, { passive:true });

  /* ---- couplage inventaire → champ (survol et focus) ---- */
  document.querySelectorAll('.inventaire a[data-doc]').forEach(a => {
    const doc = () => docs.find(x => x.dataset.doc === a.dataset.doc);
    a.addEventListener('pointerenter', e => {
      if (e.pointerType === 'touch' || !pointeurFin()) return;
      const d = doc(); if (!d) return;
      poserFoyer(d);
      if (!REDUIT.matches) d.scrollIntoView({ block:'center', behavior:'smooth' });
    });
    a.addEventListener('pointerleave', leverFoyer);
    a.addEventListener('focus', () => { const d = doc(); if (d) poserFoyer(d); });
    a.addEventListener('blur', leverFoyer);
  });

  /* ---- réglette et foyer par défilement : le document dont le centre est le plus proche de 45 % de l'écran,
          avec une hystérésis de 12 % pour ne jamais clignoter ---- */
  const liens = [...document.querySelectorAll('.reglette a')];
  const visibles = new Set();
  let elu = null;
  function choisir(){
    if (!visibles.size) return;
    const cible = innerHeight * .45;
    const dist = d => { const r = d.getBoundingClientRect(); return Math.abs(r.top + r.height/2 - cible); };
    let meilleur = null, dMin = Infinity;
    for (const d of visibles){ const x = dist(d); if (x < dMin){ dMin = x; meilleur = d; } }
    if (elu && visibles.has(elu) && dMin > dist(elu) - innerHeight * .12) meilleur = elu;
    if (meilleur === elu) return;
    elu = meilleur;
    liens.forEach(l => l.classList.toggle('courant', l.getAttribute('href') === '#' + elu.id));
    if (!pointeurFin()){ champ.classList.add('defile'); docs.forEach(d => d.classList.toggle('au-foyer', d === elu)); }
  }
  const obs = new IntersectionObserver(entries => {
    for (const en of entries){ if (en.isIntersecting) visibles.add(en.target); else visibles.delete(en.target); }
    choisir();
  }, { rootMargin:'-40% 0px -45% 0px', threshold:0 });
  docs.forEach(d => obs.observe(d));
  let attDefil = false;
  addEventListener('scroll', () => { if (attDefil) return; attDefil = true; requestAnimationFrame(() => { attDefil = false; choisir(); }); }, { passive:true });
  ecoute(POINTEUR, () => { if (pointeurFin()){ champ.classList.remove('defile'); docs.forEach(d => d.classList.remove('au-foyer')); } });

  /* ---- signet au retour : la cellule d'origine se rappelle 600 ms puis garde son numéro en vidéo inverse ---- */
  addEventListener('pageshow', e => {
    let slug = null; try { slug = sessionStorage.getItem('signet'); sessionStorage.removeItem('signet'); } catch (err) {}
    const d = slug && docs.find(x => x.dataset.doc === slug);
    if (d){
      signet = d; d.classList.add('signet');
      if (!e.persisted && !location.hash) d.scrollIntoView({ block:'center', behavior:'instant' });
      if (pointeurFin()){ poserFoyer(d); setTimeout(() => { leverFoyer(); d.classList.add('signet'); signet = d; }, 600); }
    }
    if (html.classList.contains('direct') && !document.startViewTransition && document.body.animate)
      document.body.animate([{ opacity:0 }, { opacity:1 }], { duration:200, easing:'ease-out' });
  });
}
