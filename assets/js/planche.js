/* comelebozec.com — page projet : chargement des figures, profondeur de lecture, thème de l'en-tête,
   précédent / suivant depuis projets.js, mode planche (<dialog> natif, adressable, réversible) */
const html = document.documentElement;
const REDUIT = matchMedia('(prefers-reduced-motion:reduce)');
const POINTEUR = matchMedia('(hover:hover) and (pointer:fine)');
const pointeurFin = () => POINTEUR.matches && !html.classList.contains('tactile');
const code = document.body.dataset.projet;

/* ---- images : le fichier réel se fond sur son image d'attente au chargement ---- */
const marquer = img => img.classList.add('ok');
document.addEventListener('load', e => { if (e.target.matches && e.target.matches('.ouvrir img')) marquer(e.target); }, true);
document.querySelectorAll('.ouvrir img').forEach(img => { if (img.complete && img.naturalWidth) marquer(img); });

/* ---- repli sans transitions inter-documents (Firefox) : un fondu de 200 ms ---- */
addEventListener('pageshow', () => {
  if (!document.startViewTransition && document.body.animate)
    document.body.animate([{ opacity:0 }, { opacity:1 }], { duration:200, easing:'ease-out' });
});
if (REDUIT.matches) document.querySelectorAll('[style*="view-transition-name"]').forEach(n => { n.style.viewTransitionName = ''; });

/* ---- l'en-tête suit la section : nuit tant que le bord bas du titre est sous la bande de l'en-tête, papier ensuite ---- */
const hero = document.querySelector('.hero'), tete = document.getElementById('tete');
if (hero && tete){
  let obsTheme = null;
  const observer = () => {
    if (obsTheme) obsTheme.disconnect();
    const H = tete.offsetHeight || 72;
    obsTheme = new IntersectionObserver(([en]) => { html.dataset.theme = en.isIntersecting ? 'nuit' : 'papier'; },
      { rootMargin:`0px 0px -${Math.max(0, innerHeight - H)}px 0px`, threshold:0 });
    obsTheme.observe(hero);
  };
  observer();
  addEventListener('resize', observer);
}

/* ---- profondeur de lecture : la figure qui traverse la bande 40–55 % est pleine ---- */
const figures = [...document.querySelectorAll('.cadre figure')];
const obsLecture = new IntersectionObserver(entries => {
  for (const en of entries) if (en.isIntersecting) figures.forEach(f => f.classList.toggle('lu', f === en.target));
}, { rootMargin:'-40% 0px -45% 0px', threshold:0 });
figures.forEach(f => obsLecture.observe(f));

/* ---- précédent / suivant ---- */
(function(){
  const suite = document.getElementById('suite'), barre = document.getElementById('barre-basse');
  const P = (window.PROJETS || []).filter(p => p.etat === 'publie').sort((a, b) => a.ordre - b.ordre);
  const i = P.findIndex(p => p.code === code);
  const prec = i > 0 ? P[i-1] : null, suiv = i >= 0 && i < P.length-1 ? P[i+1] : null;
  const lien = (p, s) => `<a href="../${p.page}">${s} · ${p.titre}</a>`;
  const brouillons = (window.PROJETS || []).filter(p => p.etat === 'brouillon').length;
  if (suite){
    suite.innerHTML = (prec ? lien(prec, 'précédent') : `<a href="../index.html">← index</a>`)
      + (suiv ? lien(suiv, 'suivant') : `<span class="sourd">seul projet publié${brouillons ? ' — d’autres en préparation' : ''}</span>`);
  }
  if (barre){
    barre.innerHTML = `<a href="../index.html">← index</a>` + (suiv ? lien(suiv, 'suivant →') : `<span class="sourd">seul projet publié</span>`);
  }
})();

/* ---- mode planche ---- */
const dialog = document.getElementById('planche');
if (dialog && typeof dialog.showModal === 'function'){
  const piste = dialog.querySelector('.piste'), compteur = dialog.querySelector('.compteur'),
        legende = dialog.querySelector('.legende'), annonce = dialog.querySelector('.annonce'),
        boutonFermer = dialog.querySelector('.fermer');
  const boutons = [...document.querySelectorAll('.ouvrir')];
  const N = boutons.length;
  let courant = -1, construit = false, fermeture = false, pousse = false, redimension = false;

  function construire(){
    if (construit) return; construit = true;
    const tailles = pointeurFin() ? '180vw' : '100vw';
    piste.innerHTML = boutons.map((b, n) => {
      const img = b.querySelector('img');
      const srcset = img.getAttribute('srcset') || '';
      return `<div class="vue" data-n="${n}"><img src="${img.dataset.grand || img.currentSrc || img.src}"` +
        (srcset ? ` srcset="${srcset}" sizes="${tailles}"` : '') +
        ` alt="${img.alt.replace(/"/g, '&quot;')}" loading="lazy" decoding="async"></div>`;
    }).join('');
    piste.addEventListener('scroll', () => {
      if (redimension) return;
      const n = Math.round(piste.scrollLeft / piste.clientWidth); if (n !== courant) montrer(n, false);
    }, { passive:true });
    piste.addEventListener('click', e => {
      const img = e.target.closest('img');
      if (!img || !pointeurFin()){ fermer(); return; }          /* voile, ou tap sur l'image au doigt : on ferme */
      const r = img.getBoundingClientRect();
      img.style.transformOrigin = `${((e.clientX - r.left)/r.width*100).toFixed(1)}% ${((e.clientY - r.top)/r.height*100).toFixed(1)}%`;
      img.classList.toggle('zoom');
    });
    addEventListener('resize', () => {
      if (!dialog.open) return;
      redimension = true;
      requestAnimationFrame(() => { piste.scrollTo({ left: courant * piste.clientWidth, behavior:'auto' }); requestAnimationFrame(() => { redimension = false; }); });
    });
  }
  function montrer(n, defiler){
    n = Math.max(0, Math.min(N-1, n));
    if (defiler) piste.scrollTo({ left: n * piste.clientWidth, behavior: courant < 0 || REDUIT.matches ? 'auto' : 'smooth' });
    piste.querySelectorAll('img.zoom').forEach(i => i.classList.remove('zoom'));
    courant = n;
    const texte = (boutons[n].closest('figure').querySelector('figcaption') || {}).textContent || '';
    compteur.textContent = `${String(n+1).padStart(2, '0')} / ${N}`;
    legende.textContent = texte;
    if (annonce) annonce.textContent = `${n+1} sur ${N} — ${texte}`;
    const suivante = piste.querySelector(`.vue[data-n="${n+1}"] img`); if (suivante) suivante.loading = 'eager';
    history.replaceState({ planche:n+1, pousse }, '', location.pathname + '#planche-' + (n+1));
  }
  function ouvrir(n, depuisHistorique){
    construire();
    courant = -1;
    if (!depuisHistorique){ history.pushState({ planche:n+1, pousse:true }, '', location.pathname + '#planche-' + (n+1)); pousse = true; }
    else pousse = !!(history.state && history.state.pousse);
    dialog.showModal();
    html.classList.add('planche-ouverte');
    montrer(n, true);
    piste.focus({ preventScroll:true });
  }
  function fermer(){
    if (!dialog.open || fermeture) return;
    fermeture = true;
    if (pousse) history.back();                                  /* l'entrée est à nous : le retour ferme */
    else { history.replaceState(null, '', location.pathname); dialog.close(); }
  }
  dialog.addEventListener('close', () => {
    if (history.state && history.state.planche) history.replaceState(null, '', location.pathname);
    html.classList.remove('planche-ouverte');
    fermeture = false; pousse = false;
    if (courant >= 0) boutons[courant].focus({ preventScroll:true });
  });
  dialog.addEventListener('cancel', e => { e.preventDefault(); fermer(); });
  if (boutonFermer) boutonFermer.addEventListener('click', fermer);
  addEventListener('popstate', () => {
    const s = history.state;
    if (dialog.open && !(s && s.planche)) { fermeture = false; dialog.close(); }
    else if (s && s.planche){ if (!dialog.open) ouvrir(s.planche-1, true); else if (s.planche-1 !== courant) montrer(s.planche-1, true); }
  });
  dialog.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight'){ e.preventDefault(); montrer(courant+1, true); }
    else if (e.key === 'ArrowLeft'){ e.preventDefault(); montrer(courant-1, true); }
    else if (e.key === 'z' || e.key === 'Z'){
      const img = piste.querySelector(`.vue[data-n="${courant}"] img`);
      if (img){ img.style.transformOrigin = '50% 50%'; img.classList.toggle('zoom'); }
    }
  });
  boutons.forEach((b, n) => b.addEventListener('click', e => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;   /* laisser ouvrir le fichier dans un onglet */
    e.preventDefault(); ouvrir(n, false);
  }));
  piste.setAttribute('tabindex', '-1');
  const m = /#planche-(\d+)/.exec(location.hash);
  if (m){
    /* lien profond ou rechargement : on n'empile pas d'entrée d'historique, on remplace */
    history.replaceState({ planche: parseInt(m[1], 10), pousse:false }, '', location.pathname + location.hash);
    ouvrir(parseInt(m[1], 10) - 1, true);
  }
}
