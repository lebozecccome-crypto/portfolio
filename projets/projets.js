/* Contenu FICTIF — seuls comptent l'emplacement, le volume et les rapports d'échelle des zones de texte et d'image.
   Chaque projet : titre (h1 de la colonne vide, 96 px), description (légende sous l'image, 40 à 70 mots),
   couverture (image de la grille, rapport natif conservé), diapos (planches de la lightbox), fiche (panneau Information). */
window.PROJETS = [
  {
    slug: 'maison-du-marais', titre: 'Maison du Marais',
    description: "Posée sur pilotis au bord d'une roselière, la maison réunit trois volumes de bois brûlé autour d'une coursive ouverte. Les baies cadrent l'eau à hauteur d'assise, la toiture collecte la pluie vers une citerne, et la façade nord se referme presque entièrement pour tenir le vent d'hiver.",
    couverture: { src: 'projets/images/fictif/photo-01_1280x720.jpg', w: 1280, h: 720 },
    diapos: [
      { src: 'projets/images/fictif/photo-01_1280x720.jpg', w: 1280, h: 720 },
      { src: 'projets/images/fictif/photo-06_1280x960.jpg', w: 1280, h: 960 },
      { src: 'projets/images/hpp-coupe-50_1400.webp', w: 1400, h: 1040 },
      { src: 'projets/images/fictif/photo-09_1280x1706.jpg', w: 1280, h: 1706 },
      { src: 'projets/images/hpp-plan-rdc-100_1400.webp', w: 1400, h: 1195 }
    ],
    fiche: { lieu: 'Marais de Lessines, Hainaut', annee: '2024', programme: 'maison individuelle', surface: '168 m²', statut: 'livré', equipe: 'avec Atelier Pluie' },
    photographie: 'photographies : Anne Dupré'
  },
  {
    slug: 'halle-des-tanneurs', titre: 'Halle des Tanneurs',
    description: "La Halle des Tanneurs transforme un entrepôt de 1910 en marché couvert et ateliers partagés. La charpente métallique est conservée et peinte en blanc, un plancher intermédiaire s'insère entre les fermes, et une nouvelle verrière redonne au sol de brique la lumière que les extensions successives lui avaient prise.",
    couverture: { src: 'projets/images/fictif/photo-02_1280x692.jpg', w: 1280, h: 692 },
    diapos: [
      { src: 'projets/images/fictif/photo-02_1280x692.jpg', w: 1280, h: 692 },
      { src: 'projets/images/fictif/photo-04_1280x853.jpg', w: 1280, h: 853 },
      { src: 'projets/images/hpp-elevation_1400.webp', w: 1400, h: 313 },
      { src: 'projets/images/fictif/photo-14_1280x853.jpg', w: 1280, h: 853 }
    ],
    fiche: { lieu: 'Braine-le-Comte', annee: '2023', programme: 'marché couvert et ateliers', surface: '2 400 m²', statut: 'concours, lauréat', equipe: 'avec Bureau Solstice, ingénieur Vantorre' },
    photographie: 'photographies : Studio Lemaire'
  },
  {
    slug: 'tour-du-canal', titre: 'Tour du Canal',
    description: "Vingt-quatre logements traversants empilés sur huit niveaux, au bord du canal. Chaque appartement possède une loggia profonde qui sert de pièce d'été ; la façade en briques claires se creuse au sud et se lisse au nord, et le rez-de-chaussée accueille un atelier de réparation de vélos ouvert sur le quai.",
    couverture: { src: 'projets/images/fictif/photo-03_1280x1918.jpg', w: 1280, h: 1918 },
    diapos: [
      { src: 'projets/images/fictif/photo-03_1280x1918.jpg', w: 1280, h: 1918 },
      { src: 'projets/images/fictif/photo-05_1280x1600.jpg', w: 1280, h: 1600 },
      { src: 'projets/images/hpp-axonometrie_906.webp', w: 906, h: 1152 },
      { src: 'projets/images/fictif/photo-13_1280x1918.jpg', w: 1280, h: 1918 },
      { src: 'projets/images/hpp-plan-r1-100_1400.webp', w: 1400, h: 1199 },
      { src: 'projets/images/fictif/photo-10_1280x800.jpg', w: 1280, h: 800 }
    ],
    fiche: { lieu: 'Bruxelles, Molenbeek', annee: '2022-2025', programme: '24 logements et un atelier', surface: '3 150 m²', statut: 'en chantier', equipe: 'avec Ney &amp; Partners' },
    photographie: 'photographies : Anne Dupré'
  },
  {
    slug: 'serre-urbaine', titre: 'Serre urbaine',
    description: "Sur le toit d'un parking, une serre de production maraîchère de soixante mètres de long distribue trois salles communes chauffées par l'air des cultures. La structure en bois lamellé porte des châssis de verre simple récupérés ; le sol de la serre est un plancher de tables, démontable, réglé sur la hauteur des cultures.",
    couverture: { src: 'projets/images/fictif/photo-04_1280x853.jpg', w: 1280, h: 853 },
    diapos: [
      { src: 'projets/images/fictif/photo-04_1280x853.jpg', w: 1280, h: 853 },
      { src: 'projets/images/hpp-coupe-urbaine_1400.webp', w: 1400, h: 420 },
      { src: 'projets/images/fictif/photo-16_1280x960.jpg', w: 1280, h: 960 },
      { src: 'projets/images/hpp-cycle_1400.webp', w: 1400, h: 785 }
    ],
    fiche: { lieu: 'Anderlecht', annee: '2025', programme: 'serre productive et espaces communs', surface: '1 100 m²', statut: 'étude', equipe: 'avec la coopérative Racines' },
    photographie: 'images : atelier'
  },
  {
    slug: 'sainte-agathe', titre: 'Sainte-Agathe, logements',
    description: "Six maisons en bande sur une parcelle en pente, chacune décalée d'un demi-niveau par rapport à sa voisine. Les toits en pente inverse dessinent une seule ligne brisée sur la rue ; à l'arrière, les jardins sont reliés par un chemin commun qui descend jusqu'au verger conservé.",
    couverture: { src: 'projets/images/fictif/photo-05_1280x1600.jpg', w: 1280, h: 1600 },
    diapos: [
      { src: 'projets/images/fictif/photo-05_1280x1600.jpg', w: 1280, h: 1600 },
      { src: 'projets/images/fictif/photo-11_1280x1024.jpg', w: 1280, h: 1024 },
      { src: 'projets/images/hpp-plan-r2-100_1400.webp', w: 1400, h: 1192 },
      { src: 'projets/images/fictif/photo-15_1280x640.jpg', w: 1280, h: 640 }
    ],
    fiche: { lieu: 'Berchem-Sainte-Agathe', annee: '2024', programme: 'six maisons en bande', surface: '890 m²', statut: 'permis obtenu', equipe: 'avec Bureau Solstice' },
    photographie: 'photographies : Studio Lemaire'
  },
  {
    slug: 'atelier-senne', titre: 'Atelier Senne',
    description: "Un atelier de menuiserie et son logement de gardien, glissés dans la profondeur d'un îlot bruxellois. Le volume de l'atelier est un hangar de bois à sheds orientés au nord ; la maison, en brique, s'appuie contre le mur mitoyen et regarde la cour de travail par une seule grande fenêtre.",
    couverture: { src: 'projets/images/fictif/photo-06_1280x960.jpg', w: 1280, h: 960 },
    diapos: [
      { src: 'projets/images/fictif/photo-06_1280x960.jpg', w: 1280, h: 960 },
      { src: 'projets/images/hpp-croquis_800.webp', w: 800, h: 1357 },
      { src: 'projets/images/fictif/photo-12_1280x720.jpg', w: 1280, h: 720 },
      { src: 'projets/images/hpp-plan-r1_1400.webp', w: 1400, h: 827 }
    ],
    fiche: { lieu: 'Bruxelles, Cureghem', annee: '2021', programme: 'atelier et logement', surface: '620 m²', statut: 'livré', equipe: 'avec Menuiserie Dewitte' },
    photographie: 'photographies : Anne Dupré'
  },
  {
    slug: 'belvedere-de-la-dyle', titre: 'Belvédère de la Dyle',
    description: "Une plateforme de bois de douze mètres carrés, portée par quatre pieux, au-dessus de la prairie inondable. On y accède par une passerelle qui devient escalier ; un banc court sur trois côtés et le quatrième reste ouvert sur la rivière. La structure est conçue pour être submergée deux semaines par an.",
    couverture: { src: 'projets/images/fictif/photo-07_1280x1280.jpg', w: 1280, h: 1280 },
    diapos: [
      { src: 'projets/images/fictif/photo-07_1280x1280.jpg', w: 1280, h: 1280 },
      { src: 'projets/images/hpp-analyse-verts_1388.webp', w: 1388, h: 1261 },
      { src: 'projets/images/fictif/photo-08_1280x549.jpg', w: 1280, h: 549 }
    ],
    fiche: { lieu: 'Vallée de la Dyle, Brabant wallon', annee: '2023', programme: 'belvédère paysager', surface: '12 m²', statut: 'livré', equipe: 'avec le Contrat de rivière Dyle' },
    photographie: 'photographies : Studio Lemaire'
  },
  {
    slug: 'cabane-des-dunes', titre: 'Cabane des Dunes',
    description: "Refuge de plage démontable en panneaux de contreplaqué marine, assemblé en deux jours par une équipe de quatre personnes. Le plan est un carré de quatre mètres ; la toiture se soulève d'un côté pour laisser entrer le vent d'ouest, et se ferme entièrement à la fin de la saison.",
    couverture: { src: 'projets/images/fictif/photo-08_1280x549.jpg', w: 1280, h: 549 },
    diapos: [
      { src: 'projets/images/fictif/photo-08_1280x549.jpg', w: 1280, h: 549 },
      { src: 'projets/images/fictif/photo-09_1280x1706.jpg', w: 1280, h: 1706 },
      { src: 'projets/images/hpp-herbier_712.webp', w: 712, h: 937 },
      { src: 'projets/images/fictif/photo-01_1280x720.jpg', w: 1280, h: 720 }
    ],
    fiche: { lieu: 'De Panne, littoral', annee: '2022', programme: 'refuge saisonnier', surface: '16 m²', statut: 'prototype', equipe: 'auto-construction' },
    photographie: 'photographies : atelier'
  }
];

/* Libellés des champs de la fiche, dans l'ordre d'affichage */
window.PROJETS_CHAMPS = [['lieu', 'Lieu'], ['annee', 'Année'], ['programme', 'Programme'], ['surface', 'Surface'], ['statut', 'Statut'], ['equipe', 'Équipe']];
