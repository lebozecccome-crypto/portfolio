# -*- coding: utf-8 -*-
"""
Dérive les images du portfolio depuis les JPEG sources (jamais écrasés) :
  - WebP q82 en 800 / 1400 / 2400 px (plafonnés à la largeur native)
  - largeurs dédiées à l'index (1x et 1,5x de la largeur d'affichage à 1440 px)
  - LQIP 32 px (q40) inliné en data-URI dans manifest.json
  - négatif duoton hors foyer (état de repos de l'index), recette mesurée :
      gris → master 640 → médian 3 → inversion → autocontraste 0,2 % → plancher de noir 20/255
      → gamma cherché sur l'image FINALE (après flou 0,63 % de la largeur)
        pour P95 (trait) = 120 / 82 / 60 selon la profondeur, sous contrainte P50 (fond) ≤ 8
      → flou 4,03 px → duoton (6,6,8) → (214,210,201), WebP q72
  - manifest.json : dimensions, ratio, poids, plafond d'encre, LQIP

Contrôles bloquants : plafond d'encre < cible du plan demandé ; P50 > 8 ; document en z2
de moins de 4 colonnes ; photo marquée pour l'index ; ordre des --y non croissant.

Exécution :  uv run --with pillow python outils/derive.py
"""
import os, sys, json, base64, io
from PIL import Image, ImageFilter, ImageOps, ImageStat

sys.stdout.reconfigure(encoding='utf-8')
RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(RACINE, 'projets', 'images')
DST = SRC
WIDTHS = [800, 1400, 2400]
CU_1440 = 110.4                  # unité de colonne à 1440 px (12 colonnes sur 1325 px utiles)
MASTER = 640
FLOU = round(MASTER * 0.0063, 2) # 4,03 px
PLANCHER = 20
CIBLES = {0: 120, 1: 82, 2: 60}
P50_MAX = 8
NUIT, IVOIRE = (6, 6, 8), (214, 210, 201)

# Documents posés dans le champ de l'index : slug -> (z, col, span, y)
CHAMP = {
    'hpp-coupe-50':      dict(z=0, col=0, span=7,  y=0.0),
    'hpp-axonometrie':   dict(z=1, col=7, span=4,  y=2.6),
    'hpp-elevation':     dict(z=2, col=1, span=11, y=6.4),
    'hpp-analyse-verts': dict(z=1, col=7, span=5,  y=9.6),
    'hpp-cycle':         dict(z=2, col=3, span=6,  y=11.3),
    'hpp-coupe-urbaine': dict(z=0, col=0, span=7,  y=15.9),
}
PHOTOS = {'hpp-ref-molenbeek', 'hpp-ref-melbourne'}
EXCLUS = {'hpp-vignette'}          # ancienne vignette carrée de l'index, plus utilisée

def gamma(im, g):
    return im.point([min(255, round(255 * ((i / 255) ** g))) for i in range(256)])

def percentile(im, p):
    h = im.histogram(); tot = sum(h); acc = 0
    for v, c in enumerate(h):
        acc += c
        if acc >= p * tot:
            return v
    return 255

def base_negatif(im_gris):
    w, h = im_gris.size
    m = im_gris.resize((MASTER, max(1, round(h * MASTER / w))), Image.LANCZOS)
    m = m.filter(ImageFilter.MedianFilter(3))
    n = ImageOps.invert(m)
    n = ImageOps.autocontrast(n, cutoff=(0.2, 0.2))
    n = n.point([0 if i < PLANCHER else i for i in range(256)])
    return n

def final(n, g):
    return gamma(n, g).filter(ImageFilter.GaussianBlur(FLOU))

def plafond_encre(n):
    """P95 maximal atteignable sous contrainte P50 <= 8 (gamma minimal admissible)."""
    lo, hi = 0.02, 6.0
    for _ in range(18):
        g = (lo + hi) / 2
        if percentile(final(n, g), .5) > P50_MAX: lo = g
        else: hi = g
    f = final(n, hi)
    return percentile(f, .95), hi

def negatif_cible(n, cible):
    """gamma cherché sur l'image finale : P95 = cible, puis P50 <= 8 (le plus fort des deux)."""
    lo, hi = 0.02, 6.0
    for _ in range(18):
        g = (lo + hi) / 2
        if percentile(final(n, g), .95) > cible: lo = g
        else: hi = g
    g = hi
    while percentile(final(n, g), .5) > P50_MAX and g < 6.0:
        g *= 1.05
    f = final(n, g)
    return f, g, percentile(f, .95), percentile(f, .5)

def webp(im, chemin, q):
    im.save(chemin, 'WEBP', quality=q, method=6)
    return os.path.getsize(chemin)

manifest = {}
erreurs = []
total = 0
print(f"{'document':24s} {'source':>10s}  variantes")
for f in sorted(os.listdir(SRC)):
    if not f.lower().endswith('.jpg'):
        continue
    base = f[:-4]
    if base in EXCLUS:
        continue
    im = Image.open(os.path.join(SRC, f)).convert('RGB')
    w, h = im.size
    entree = {'w': w, 'h': h, 'ar': round(w / h, 4), 'type': 'photo' if base in PHOTOS else 'dessin', 'variants': []}
    largeurs = set(min(x, w) for x in WIDTHS)
    if base in CHAMP:
        aff = CHAMP[base]['span'] * CU_1440
        largeurs |= {min(w, round(aff)), min(w, round(aff * 1.5))}
    # on ignore une variante à moins de 8 % d'une autre déjà retenue
    retenues = []
    for ww in sorted(largeurs):
        if retenues and ww < retenues[-1] * 1.08:
            continue
        retenues.append(ww)
    for ww in retenues:
        th = round(h * ww / w)
        out = im if ww == w else im.resize((ww, th), Image.LANCZOS)
        nom = f"{base}_{ww}.webp"
        taille = webp(out, os.path.join(DST, nom), 82)
        total += taille
        entree['variants'].append({'src': nom, 'w': ww, 'h': th, 'o': taille})
    # LQIP 32 px, inliné
    lq = im.resize((32, max(1, round(h * 32 / w))), Image.LANCZOS)
    buf = io.BytesIO(); lq.save(buf, 'WEBP', quality=40, method=6)
    entree['lqip'] = 'data:image/webp;base64,' + base64.b64encode(buf.getvalue()).decode()
    # négatif + plafond d'encre (dessins seulement)
    if entree['type'] == 'dessin':
        n = base_negatif(im.convert('L'))
        plafond, _ = plafond_encre(n)
        entree['plafond_encre'] = plafond
        if base in CHAMP:
            z = CHAMP[base]['z']; cible = CIBLES[z]
            if plafond < cible:
                erreurs.append(f"{base} : plafond d'encre {plafond}, refusé en z{z} (cible {cible})")
            else:
                fin, g, p95, p50 = negatif_cible(n, cible)
                if p50 > P50_MAX:
                    erreurs.append(f"{base} : fond trop clair (P50 {p50} > {P50_MAX})")
                neg = ImageOps.colorize(fin, black=NUIT, white=IVOIRE)
                nom = f"{base}_neg.webp"
                taille = webp(neg, os.path.join(DST, nom), 72)
                entree['neg'] = {'src': nom, 'w': neg.width, 'h': neg.height, 'o': taille,
                                 'gamma': round(g, 3), 'p95': p95, 'p50': p50, 'z': z}
    elif base in CHAMP:
        erreurs.append(f"{base} : photographie, interdite dans le champ")
    manifest[base] = entree
    print(f"{base:24s} {w}x{h:<6d} " + ', '.join(f"{v['w']} ({round(v['o']/1024)} Ko)" for v in entree['variants'])
          + (f"  · négatif z{entree['neg']['z']} P95 {entree['neg']['p95']} P50 {entree['neg']['p50']} {round(entree['neg']['o']/1024,1)} Ko" if 'neg' in entree else '')
          + (f"  · plafond {entree['plafond_encre']}" if 'plafond_encre' in entree else ''))

# contrôles géométriques du champ
ys = [CHAMP[k]['y'] for k in CHAMP]
if ys != sorted(ys):
    erreurs.append("ordre du champ : les --y ne sont pas croissants dans CHAMP")
# contrôle croisé : projets.js (source unique) et index.html doivent porter la même géométrie, dans le même ordre
import re
try:
    js = open(os.path.join(RACINE, 'projets', 'projets.js'), encoding='utf-8').read()
    docs_js = {m.group(1): dict(z=int(m.group(2)), col=int(m.group(3)), span=int(m.group(4)), y=float(m.group(5)))
               for m in re.finditer(r"id: '([^']+)'[^}]*?index: true[^}]*?z: (\d+), col: (\d+), span: (\d+), y: ([\d.]+)", js, re.S)}
    if docs_js != CHAMP:
        erreurs.append("projets.js et derive.py divergent : " + str(sorted(set(docs_js) ^ set(CHAMP)) or [k for k in CHAMP if docs_js.get(k) != CHAMP[k]]))
    idx = open(os.path.join(RACINE, 'index.html'), encoding='utf-8').read()
    docs_html = [(m.group(1), dict(col=int(m.group(2)), span=int(m.group(3)), y=float(m.group(4)), z=int(m.group(5))))
                 for m in re.finditer(r'data-doc="([^"]+)"[^>]*?style="--col:(\d+);--span:(\d+);--y:([\d.]+);--z:(\d+)', idx, re.S)]
    if [d['y'] for _, d in docs_html] != sorted(d['y'] for _, d in docs_html):
        erreurs.append("index.html : l'ordre du DOM ne suit pas les --y croissants")
    if dict(docs_html) != CHAMP:
        erreurs.append("index.html et derive.py divergent : " + str(sorted(set(dict(docs_html)) ^ set(CHAMP)) or [k for k in CHAMP if dict(docs_html).get(k) != CHAMP[k]]))
except OSError as e:
    erreurs.append(f"contrôle croisé impossible : {e}")
for k, d in CHAMP.items():
    if d['z'] == 2 and d['span'] < 4:
        erreurs.append(f"{k} : document en z2 de moins de 4 colonnes")
hauteur = max(d['y'] + d['span'] / manifest[k]['ar'] for k, d in CHAMP.items())
manifest['_champ'] = {'cu_1440': CU_1440, 'hauteur_cu': round(hauteur, 3), 'docs': CHAMP}

with open(os.path.join(RACINE, 'outils', 'manifest.json'), 'w', encoding='utf-8') as fh:
    json.dump(manifest, fh, ensure_ascii=False, indent=1)

print(f"\nWebP positifs : {round(total/1024)} Ko · hauteur du champ : {hauteur:.3f} cu")
if erreurs:
    print("\nREFUS :"); [print(' -', e) for e in erreurs]; sys.exit(1)
print("aucun refus")
