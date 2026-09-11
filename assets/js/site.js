/* comelebozec.com — entrée depuis le seuil, en-tête rétractable, grille d'accueil, lightbox, liste des projets.
   Comportements repris du site de référence : en-tête qui se rétracte de 80 px au défilement (seuil 78 px, hystérésis 30 px),
   images qui apparaissent en fondu une fois chargées, lightbox adressée par #slug&plate-N (bouton retour = diapo précédente
   puis fermeture), Échap à deux niveaux (panneau d'information, puis lightbox), moitiés d'écran = précédent / suivant. */
(function(){
  const html = document.documentElement;
  const body = document.body;
  const P = window.PROJETS || [];
  const CHAMPS = window.PROJETS_CHAMPS || [];
  const pointeurFin = () => matchMedia('(hover:hover) and (pointer:fine)').matches && !html.classList.contains('tactile');
  const prefixe = body.dataset.prefixe || '';           /* '' à la racine, '../' dans un sous-dossier */
  const echappe = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

  /* ---- entrée : le seuil s'éteint, la page apparaît, le défilement se libère à 1 200 ms ---- */
  function liberer(){
    if (html.classList.contains('libre')) return;
    html.classList.add('libre');
    const s = document.getElementById('seuil'); if (s){ s.hidden = true; s.inert = true; }
    const g = document.getElementById('galaxie'); if (g && !g.getContext) g.remove();
    const cible = document.getElementById('page'); if (cible) cible.focus({ preventScroll:true });
  }
  if (html.classList.contains('entered') && !html.classList.contains('direct')) setTimeout(liberer, 1200);
  else if (!html.classList.contains('direct')) addEventListener('entree', () => setTimeout(liberer, 1200), { once:true });

  /* ---- images : fondu à l'arrivée (imagesLoaded, sans bibliothèque) ---- */
  document.addEventListener('load', e => { if (e.target.tagName === 'IMG') e.target.classList.add('ok'); }, true);
  const marquerChargees = () => document.querySelectorAll('img').forEach(i => { if (i.complete && i.naturalWidth) i.classList.add('ok'); });

  /* ---- en-tête de l'accueil : se rétracte de 80 px au défilement vers le bas, revient au défilement vers le haut ---- */
  const entete = document.querySelector('.entete');
  if (entete && body.classList.contains('home')){
    let precedent = 0, etat = 'ouvert';
    const SEUIL = 78, HYSTERESIS = 30;
    addEventListener('scroll', () => {
      const y = scrollY;
      if (y > precedent + 2 && y > SEUIL && etat !== 'ferme'){ etat = 'ferme'; entete.classList.add('ferme'); precedent = y; }
      else if ((y < SEUIL || precedent - y > HYSTERESIS) && etat !== 'ouvert'){ etat = 'ouvert'; entete.classList.remove('ferme'); precedent = y; }
      else if (Math.abs(y - precedent) > HYSTERESIS || y < precedent) precedent = y;
    }, { passive:true });
  }

  /* ---- grille d'accueil : une ligne par projet, image à gauche puis à droite, titre dans la colonne vide ---- */
  const grille = document.getElementById('grille');
  if (grille){
    grille.innerHTML = P.map((p, i) => `
      <div class="ligne${i % 2 ? ' droite' : ''}${p.enCours ? ' en-cours' : ''}" data-slug="${p.slug}"${p.enCours ? ' aria-label="' + echappe(p.titre) + (typeof p.enCours === 'string' ? ' — ' + echappe(p.enCours) : '') + '"' : ' tabindex="0" role="link" aria-label="' + echappe(p.titre) + ' — open project"'}>
        <div class="cellule-img"><article>
          <figure>
            <div class="titre-petit"><h1>${echappe(p.titre)}</h1></div>
            <div class="img-cadre" style="--ar:${p.couverture.w}/${p.couverture.h}">
              <img class="${p.couverture.photo ? '' : 'dessin'}" src="${prefixe}${p.couverture.src}" width="${p.couverture.w}" height="${p.couverture.h}" alt="${echappe(p.titre)}" loading="${i < 2 ? 'eager' : 'lazy'}" decoding="async">
              <span class="indicateur" aria-hidden="true"></span>
            </div>
          </figure>
          <figcaption><div class="legende"><p>${typeof p.enCours === 'string' ? echappe(p.enCours) : p.description}</p></div></figcaption>
        </article></div>
        <div class="cellule-titre"><div class="titre-grand" aria-hidden="true"><h1>${echappe(p.titre)}</h1></div></div>
      </div>`).join('');
    grille.addEventListener('click', e => { const l = e.target.closest('.ligne'); if (l && !l.classList.contains('en-cours')) ouvrir(l.dataset.slug, 0, false); });
    grille.addEventListener('keydown', e => { const l = e.target.closest('.ligne'); if (l && !l.classList.contains('en-cours') && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); ouvrir(l.dataset.slug, 0, false); } });
    marquerChargees();
  }

  /* ---- liste des projets : trois colonnes en quinconce, un dépliant par titre, clic sur l'image = lightbox ---- */
  const liste = document.getElementById('liste');
  if (liste){
    /* motif de la référence : ligne impaire = colonnes 1 et 3, ligne paire = colonne 2 */
    const rangs = []; let i = 0;
    while (i < P.length){ rangs.push([P[i], null, P[i+1] || null]); i += 2; if (i < P.length){ rangs.push([null, P[i], null]); i += 1; } }
    const cellule = p => p && p.enCours ? `
      <div class="liste-cellule"><div class="liste-titre en-cours" aria-disabled="true"${typeof p.enCours === 'string' ? ' title="' + echappe(p.enCours) + '"' : ''}>${echappe(p.titre)}</div></div>` : p ? `
      <div class="liste-cellule">
        <button class="liste-titre" type="button" aria-expanded="false" aria-controls="dep-${p.slug}">${echappe(p.titre)}</button>
        <div class="depliant" id="dep-${p.slug}"><div>
          <div class="img-cadre" style="--ar:${p.couverture.w}/${p.couverture.h}" data-slug="${p.slug}" role="link" tabindex="-1" aria-label="open project ${echappe(p.titre)}">
            <img class="${p.couverture.photo ? '' : 'dessin'}" src="${prefixe}${p.couverture.src}" width="${p.couverture.w}" height="${p.couverture.h}" alt="" loading="lazy" decoding="async"><span class="indicateur" aria-hidden="true"></span>
          </div>
          <div class="depliant-desc"><p>${p.description}</p></div>
        </div></div>
      </div>` : `<div class="liste-espace"><div class="espace">&nbsp;</div></div>`;
    liste.innerHTML = rangs.map(r => `<div class="liste-rangee">${r.map(cellule).join('')}</div>`).join('');
    liste.addEventListener('click', e => {
      const t = e.target.closest('.liste-titre');
      if (t){ const d = document.getElementById(t.getAttribute('aria-controls')); const ouvert = d.classList.toggle('ouvert'); t.setAttribute('aria-expanded', ouvert); d.querySelector('.img-cadre').tabIndex = ouvert ? 0 : -1; return; }
      const im = e.target.closest('.img-cadre[data-slug]'); if (im) ouvrir(im.dataset.slug, 0, false);
    });
    liste.addEventListener('keydown', e => { const im = e.target.closest('.img-cadre[data-slug]'); if (im && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); ouvrir(im.dataset.slug, 0, false); } });
    marquerChargees();
  }

  /* ==================================================================
     LIGHTBOX
     ================================================================== */
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const diapo = lb.querySelector('.diapo'), titre = lb.querySelector('.lb-titre'), infoBtn = lb.querySelector('.lb-info'), legende = lb.querySelector('.lb-legende'),
        panneau = lb.querySelector('.lb-panneau'), meta = lb.querySelector('.lb-meta'), desc = lb.querySelector('.lb-description'),
        photo = lb.querySelector('.lb-photographie'), annonce = lb.querySelector('.lb-annonce');
  let courant = null, index = 0, ouverte = false, infoOuverte = false, sansPush = false, positionDefilement = 0, declencheur = null, redim = false;

  /* la légende peut tenir sur plusieurs lignes : on mesure la barre et la planche descend dessous */
  const barre = lb.querySelector('.lb-barre');
  function mesurerBarre(){ if (barre) lb.style.setProperty('--barre', Math.max(52, barre.offsetHeight) + 'px'); }
  addEventListener('resize', mesurerBarre);

  function construire(p, n){
    diapo.innerHTML = p.diapos.map((d, k) => `<div class="vue" data-n="${k}"><img class="${d.photo ? '' : 'dessin'}"${d.echelle ? ` style="max-width:${Math.round(d.echelle*100)}%;max-height:${Math.round(d.echelle*100)}%"` : ''} src="${prefixe}${d.src}" width="${d.w}" height="${d.h}" alt="${echappe(d.legende || (p.titre + ', plate ' + (k+1)))}" loading="${Math.abs(k - n) <= 1 ? 'eager' : 'lazy'}" decoding="async"></div>`).join('');
    titre.textContent = p.titre;
    meta.innerHTML = CHAMPS.filter(([k]) => p.fiche && p.fiche[k]).map(([k, l]) => `<div class="lb-champ"><dt>${l}</dt><dd>${p.fiche[k]}</dd></div>`).join('');
    desc.innerHTML = (p.texte && p.texte.length ? p.texte : [p.description]).map(t => `<p>${t}</p>`).join('');
    photo.textContent = p.photographie || '';
    marquerChargees();
  }
  function aller(n, pousser){
    if (!courant) return;
    const N = courant.diapos.length;
    n = ((n % N) + N) % N;                                  /* bouclage : jamais de cul-de-sac */
    index = n;
    const vue = diapo.querySelector(`.vue[data-n="${n}"]`);
    if (vue){ const suiv = diapo.querySelector(`.vue[data-n="${(n+1) % N}"] img`); if (suiv) suiv.loading = 'eager'; }
    diapo.scrollTo({ left: n * diapo.clientWidth, behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth' });
    const leg = courant.diapos[n].legende || '';
    if (legende){ legende.textContent = leg; legende.title = leg; }
    mesurerBarre();
    if (annonce) annonce.textContent = `${courant.titre}, plate ${n+1} of ${N}${leg ? ' — ' + leg : ''}`;
    majHash(pousser);
  }
  function majHash(pousser){
    const url = location.pathname + location.search + '#' + courant.slug + '&plate-' + (index + 1);
    if (sansPush){ sansPush = false; history.replaceState({ lb: courant.slug, n: index }, '', url); return; }
    if (pousser) history.pushState({ lb: courant.slug, n: index }, '', url);
    else history.replaceState({ lb: courant.slug, n: index }, '', url);
  }
  function ouvrir(slug, n, depuisHistorique){
    const p = P.find(x => x.slug === slug); if (!p || p.enCours || !p.diapos.length) return;
    const deja = ouverte && courant === p;
    courant = p;
    if (!deja){
      declencheur = document.activeElement;
      construire(p, n);
      positionDefilement = scrollY;
      html.classList.add('lightbox-ouverte');
      lb.classList.add('active');
      lb.setAttribute('aria-hidden', 'false');
      setTimeout(() => lb.classList.add('visible'), 20);     /* après un rendu avec display:block, pour que le fondu joue */
      ouverte = true;
      fermerInfo();
    }
    if (depuisHistorique) sansPush = true;
    /* premier positionnement sans animation */
    index = n;
    diapo.scrollTo({ left: n * diapo.clientWidth, behavior:'auto' });
    aller(n, !depuisHistorique && !deja);
    lb.querySelector('.lb-fermer button').focus({ preventScroll:true });
  }
  function fermer(){
    if (!ouverte) return;
    ouverte = false;
    fermerInfo();
    lb.classList.remove('visible');
    html.classList.remove('lightbox-ouverte');
    scrollTo({ top: positionDefilement, behavior:'auto' });
    setTimeout(() => { lb.classList.remove('active'); lb.setAttribute('aria-hidden', 'true'); diapo.innerHTML = ''; }, 350);
    /* comme la référence : la fermeture pousse une URL propre ; le bouton retour rouvre la dernière planche */
    if (history.state && history.state.lb) history.pushState(null, '', location.pathname + location.search);
    if (declencheur && declencheur.focus) declencheur.focus({ preventScroll:true });
    courant = null;
  }
  function ouvrirInfo(){ infoOuverte = true; lb.classList.add('info-ouverte'); panneau.setAttribute('aria-hidden', 'false'); }
  function fermerInfo(){ infoOuverte = false; lb.classList.remove('info-ouverte'); panneau.setAttribute('aria-hidden', 'true'); }

  infoBtn.querySelector('button').addEventListener('click', () => infoOuverte ? fermerInfo() : ouvrirInfo());
  lb.querySelector('.prec').addEventListener('click', () => aller(index - 1, true));
  lb.querySelector('.suiv').addEventListener('click', () => aller(index + 1, true));
  lb.querySelectorAll('.lb-panneau-actions,.lb-panneau-fermer-mobile').forEach(b => b.addEventListener('click', fermerInfo));
  lb.querySelector('.lb-fermer button').addEventListener('click', fermer);
  addEventListener('keydown', e => {
    if (!ouverte) return;
    if (e.key === 'Escape'){ e.preventDefault(); if (infoOuverte) fermerInfo(); else fermer(); }
    else if (e.key === 'ArrowRight'){ e.preventDefault(); aller(index + 1, true); }
    else if (e.key === 'ArrowLeft'){ e.preventDefault(); aller(index - 1, true); }
  });
  /* glissement au doigt : on suit la diapo aimantée */
  diapo.addEventListener('scroll', () => {
    if (!ouverte || redim) return;
    const n = Math.round(diapo.scrollLeft / diapo.clientWidth);
    if (n !== index && courant){ index = n; const leg = courant.diapos[n].legende || ''; if (legende){ legende.textContent = leg; legende.title = leg; mesurerBarre(); } if (annonce) annonce.textContent = `${courant.titre}, plate ${n+1} of ${courant.diapos.length}${leg ? ' — ' + leg : ''}`; majHash(true); }
  }, { passive:true });
  addEventListener('resize', () => { if (!ouverte) return; redim = true; requestAnimationFrame(() => { diapo.scrollTo({ left: index * diapo.clientWidth, behavior:'auto' }); requestAnimationFrame(() => { redim = false; }); }); });

  /* ---- historique : #slug&plate-N ; retour = planche précédente, puis fermeture ----
     ALIAS : les adresses françaises d'avant la traduction (#habiter-produire-partager, &diapo-N)
     et l'ancien nom de la maison de la rue au Tiroir (#house-on-rue-au-tiroir)
     restent valables et ouvrent le même projet. */
  const ALIAS = { 'habiter-produire-partager': 'dwelling-producing-sharing', 'house-on-rue-au-tiroir': 'home-from-the-street-to-the-drawer' };
  function lireHash(){ const m = /^#([a-z0-9-]+)&(?:plate|diapo)-(\d+)$/.exec(location.hash);
    return m ? { slug: ALIAS[m[1]] || m[1], n: parseInt(m[2], 10) - 1 } : null; }
  addEventListener('popstate', () => {
    const h = lireHash();
    if (h){ ouvrir(h.slug, h.n, true); }
    else if (ouverte) fermer();
  });
  const initial = lireHash();
  if (initial && P.some(p => p.slug === initial.slug)){
    history.replaceState({ lb: initial.slug, n: initial.n }, '', location.href);
    ouvrir(initial.slug, initial.n, true);
  }
})();
