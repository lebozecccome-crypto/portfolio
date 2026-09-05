# -*- coding: utf-8 -*-
"""Remplit les figures d'une page projet depuis outils/manifest.json.
   Dans la page, chaque figure s'écrit :
     <figure data-img="<id>" class="pleine|demie|tiers …"><a class="ouvrir" href="…">
       <span class="cadre-img"><img alt="…" loading="lazy|eager" [fetchpriority="high"]></span></a>
       <figcaption>…</figcaption></figure>
   Le script pose --ar, l'image d'attente (LQIP) en fond, src / srcset / sizes / data-grand / width / height, le lien
   vers le fichier grand (sans JS, l'image s'ouvre en plein écran natif ; avec JS, le mode planche), le nom de
   transition sur l'image de tête, et conserve l'alt et les attributs de chargement. Idempotent : peut être relancé.
   Exécution :  uv run python outils/page-projet.py projets/habiter-produire-partager.html
"""
import json, os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
manifest = json.load(open(os.path.join(RACINE, 'outils', 'manifest.json'), encoding='utf-8'))
page = sys.argv[1] if len(sys.argv) > 1 else 'projets/habiter-produire-partager.html'
chemin = os.path.join(RACINE, page)
html = open(chemin, encoding='utf-8').read()

SIZES = {'pleine': '(max-width:859px) 100vw, min(92vw, 1456px)',
         'demie': '(max-width:859px) 86vw, min(45vw, 716px)',
         'tiers': '(max-width:859px) 67vw, min(30vw, 470px)'}

def attr(tag, nom):
    m = re.search(nom + r'="([^"]*)"', tag)
    return m.group(1) if m else None

code = attr(html, 'data-projet') or ''

def figure(m):
    ident, largeur, reste, bloc = m.group(1), m.group(2), m.group(3), m.group(4)
    img = re.search(r'<img[^>]*>', bloc).group(0)
    e = manifest[ident]
    variantes = sorted(e['variants'], key=lambda v: v['w'])
    srcset = ', '.join(f"images/{v['src']} {v['w']}w" for v in variantes)
    defaut = next((v for v in variantes if v['w'] >= 1400), variantes[-1])
    grand = variantes[-1]
    natif = f' style="max-width:{e["w"]}px"' if e['w'] < 600 else ''
    alt = attr(img, 'alt') or ''
    charge = attr(img, 'loading') or 'lazy'
    prio = attr(img, 'fetchpriority')
    # l'image de tête (eager) porte le nom de transition, en dur dans le HTML : présent dès le premier paint
    vt = f';view-transition-name:doc-{code}' if (charge == 'eager' and code) else ''
    return (f'<figure data-img="{ident}" class="{largeur}{reste}"{natif}>'
            f'<a class="ouvrir" href="images/{grand["src"]}">'
            f'<span class="cadre-img" style="--ar:{e["w"]}/{e["h"]};background-image:url({e["lqip"]}){vt}">'
            f'<img src="images/{defaut["src"]}" srcset="{srcset}" sizes="{SIZES[largeur]}" data-grand="images/{grand["src"]}" '
            f'width="{e["w"]}" height="{e["h"]}" alt="{alt}" loading="{charge}"' + (f' fetchpriority="{prio}"' if prio else '')
            + ' decoding="async"></span><span class="sr">, ouvrir la planche</span></a>')

# on remplace tout le bloc <figure …><button|a class="ouvrir" …>…</button|a> ; la légende qui suit est conservée
motif = r'<figure data-img="([a-z0-9-]+)" class="(pleine|demie|tiers)([^"]*)"[^>]*>\s*(<(?:button|a) class="ouvrir".*?</(?:button|a)>)'
html2, n = re.subn(motif, figure, html, flags=re.S)
print(f"{n} figures remplies")
open(chemin, 'w', encoding='utf-8', newline='\n').write(html2)
