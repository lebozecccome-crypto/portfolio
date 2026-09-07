/* Contenu : un projet réel (habiter, produire, partager) puis des projets FICTIFS, sans aucun tiers réel — pour ces derniers seuls comptent l'emplacement, le volume et les rapports d'échelle des zones de texte et d'image.
   Chaque projet : titre (h1 de la colonne vide, 96 px), description (légende sous l'image, 40 à 70 mots),
   couverture (image de la grille, rapport natif conservé), diapos (planches de la lightbox), fiche (panneau Information). */
window.PROJETS = [
  /* ---- projet réel : habiter, produire, partager — Berchem-Sainte-Agathe (atelier II, LOCI UCLouvain, 2025-2026) ---- */
  {
    slug: 'habiter-produire-partager', titre: 'Habiter, produire, partager',
    description: 'In Berchem-Sainte-Agathe, six collective housing units are divided between two houses on either side of a food-producing garden, on a through plot at the heart of the urban block. The project sets out a gradation from public to private — the street, the great common, the common, the small common, the bedroom — and tightens the living rooms so that people come together in the shared spaces, around food production that links the dwellings to one another and to the neighbourhood.',
    texte: [
      'For seventy years, the modernisation of housing has meant enlarging private space ever further; a whole family could once fit into a single room. The project takes the opposite path and builds a gradation from public to common and then to private: the street and the market open to the neighbourhood, the great common of the garden and the greenhouse, the common of each house, the small common of a landing shared between a few households, and finally the bedroom. Each threshold is a place, not a door.',
      'The living rooms are deliberately tight. What is no longer in the dwelling is found in the shared spaces: the shared kitchen, the laundry, the workshop, the cultivated terraces, the greenhouse and the ground-floor room opening level with the garden. Residents are invited to gather there rather than withdraw, and the life of the houses can be read from the garden.',
      'A shared food production project links the dwellings: vegetable gardens in open ground, growing greenhouses and a greenhouse crowning each roof, which takes the sunniest floor while the dwellings are arranged beneath. The collective, set up as an association, runs the crops, the shared spaces and a monthly market open to the municipality: the project settles into the life of the neighbourhood and becomes one of its working parts.',
      'Two houses held by the garden in the depth of the plot; three structural systems: concrete ground floor with brick facing, timber post-and-beam, light greenhouse at the ridge.'
    ],
    couverture: { src: 'projets/images/hpp-implantation_1400.webp', w: 1400, h: 1081, legende: 'two houses held by the productive garden, in the depth of the plot' },
    diapos: [
      { src: 'projets/images/hpp-coupe-50_1400.webp', w: 1400, h: 1040, legende: 'the greenhouse crowns the dwellings — crops hung beneath the ridge, vegetable gardens on the terraces' },
      { src: 'projets/images/hpp-elevation_1400.webp', w: 1400, h: 313, legende: 'on the street, the project takes up the heights of its neighbours' },
      { src: 'projets/images/hpp-coupe-urbaine_1400.webp', w: 1400, h: 420, legende: 'the crossing of the urban block — the project drops down to let the garden in' },
      { src: 'projets/images/hpp-implantation_1400.webp', w: 1400, h: 1081, legende: 'two houses held by the productive garden, in the depth of the plot' },
      { src: 'projets/images/hpp-plan-rdc-100_1400.webp', w: 1400, h: 1195, legende: 'on the ground floor, the shared spaces open level with the garden' },
      { src: 'projets/images/hpp-plan-r1-100_1400.webp', w: 1400, h: 1199, legende: 'on the first floor, the bedrooms and the shared terrace' },
      { src: 'projets/images/hpp-plan-r2-100_1400.webp', w: 1400, h: 1192, legende: 'on the second floor, the dwellings beneath the greenhouse' },
      { src: 'projets/images/hpp-plan-r3-100_1400.webp', w: 1400, h: 1194, legende: 'on the top floor, the production greenhouse and its growing tables' },
      { src: 'projets/images/hpp-plan-r1_1400.webp', w: 1400, h: 827, legende: 'the first floor in detail, from the street to the garden' },
      { src: 'projets/images/hpp-axonometrie_906.webp', w: 906, h: 1152, legende: 'three structural systems — concrete and brick on the ground floor, timber post-and-beam, light greenhouse at the ridge' },
      { src: 'projets/images/hpp-croquis_800.webp', w: 800, h: 1357, legende: 'first intentions — the thresholds of the common, the market open to the neighbourhood' },
      { src: 'projets/images/hpp-cycle_1400.webp', w: 1400, h: 785, legende: 'the loop at work — produce, process, share, reinvest' },
      { src: 'projets/images/hpp-analyse-verts_1388.webp', w: 1388, h: 1261, legende: 'what the neighbourhood already offers — parks, collective vegetable gardens and playgrounds within 400 m of the site' },
      { src: 'projets/images/hpp-analyse-alimentation_950.webp', w: 950, h: 976, legende: 'where people get their food — short supply chains and shops around the site' },
      { src: 'projets/images/hpp-analyse-bati_1056.webp', w: 1056, h: 1095, legende: 'the massing of the urban fabric, from ground floor to fifteen metres' },
      { src: 'projets/images/hpp-narration_760.webp', w: 760, h: 927, legende: 'the cultivated municipality — the territory told through its gardens' },
      { src: 'projets/images/hpp-herbier_712.webp', w: 712, h: 937, legende: 'six spontaneous species recorded on site, from wild marjoram to purple foxglove' },
      { src: 'projets/images/hpp-ref-molenbeek_407.webp', w: 407, h: 560, legende: 'reference — hé architecture, molenbeek 2024: the house extended by its roof' },
      { src: 'projets/images/hpp-ref-melbourne_457.webp', w: 457, h: 560, legende: 'reference — austin maynard architects, melbourne 2022: the access gallery as a place to live' }
    ],
    fiche: { lieu: 'Berchem-Sainte-Agathe, Brussels', annee: '2025-2026', programme: 'six collective housing units and their shared spaces — greenhouse, laundry, shared kitchen, productive garden', surface: '1,100 m²', statut: 'studio project, LOCI UCLouvain', equipe: 'site analysis and massing study in a two-person team with Hamza El Arja — building, documents and drawings: Côme Le Bozec' },
    photographie: 'drawings: Côme Le Bozec'
  },
  {
    slug: 'maison-du-marais', titre: 'Maison du Marais',
    description: 'Set on stilts at the edge of a reed bed, the house brings together three volumes of charred timber around an open access gallery. The openings frame the water at seated height, the roof collects rainwater into a cistern, and the north façade closes almost entirely to hold off the winter wind.',
    couverture: { src: 'projets/images/fictif/photo-01_1280x720.jpg', w: 1280, h: 720 },
    diapos: [
      { src: 'projets/images/fictif/photo-01_1280x720.jpg', w: 1280, h: 720 },
      { src: 'projets/images/fictif/photo-06_1280x960.jpg', w: 1280, h: 960 },
      { src: 'projets/images/fictif/photo-09_1280x1706.jpg', w: 1280, h: 1706 }
    ],
    fiche: { lieu: 'Lessines marshes, Hainaut', annee: '2024', programme: 'single-family house', surface: '168 m²', statut: 'placeholder project — space reserved' },
    photographie: 'placeholder photographs — picsum.photos'
  },
  {
    slug: 'halle-des-tanneurs', titre: 'Halle des Tanneurs',
    description: 'The Halle des Tanneurs turns a 1910 warehouse into a covered market and shared workshops. The metal roof frame is kept and painted white, an intermediate floor slots in between the trusses, and a new glazed roof gives back to the brick floor the light that successive extensions had taken from it.',
    couverture: { src: 'projets/images/fictif/photo-02_1280x692.jpg', w: 1280, h: 692 },
    diapos: [
      { src: 'projets/images/fictif/photo-02_1280x692.jpg', w: 1280, h: 692 },
      { src: 'projets/images/fictif/photo-04_1280x853.jpg', w: 1280, h: 853 },
      { src: 'projets/images/fictif/photo-14_1280x853.jpg', w: 1280, h: 853 }
    ],
    fiche: { lieu: 'Braine-le-Comte', annee: '2023', programme: 'covered market and workshops', surface: '2,400 m²', statut: 'placeholder project — space reserved' },
    photographie: 'placeholder photographs — picsum.photos'
  },
  {
    slug: 'tour-du-canal', titre: 'Tour du Canal',
    description: 'Twenty-four dual-aspect dwellings stacked over eight levels, on the edge of the canal. Each flat has a deep loggia that serves as a summer room; the pale brick façade is hollowed out to the south and smoothed to the north, and the ground floor holds a bicycle repair workshop opening onto the quay.',
    couverture: { src: 'projets/images/fictif/photo-03_1280x1918.jpg', w: 1280, h: 1918 },
    diapos: [
      { src: 'projets/images/fictif/photo-03_1280x1918.jpg', w: 1280, h: 1918 },
      { src: 'projets/images/fictif/photo-05_1280x1600.jpg', w: 1280, h: 1600 },
      { src: 'projets/images/fictif/photo-13_1280x1918.jpg', w: 1280, h: 1918 },
      { src: 'projets/images/fictif/photo-10_1280x800.jpg', w: 1280, h: 800 }
    ],
    fiche: { lieu: 'Brussels, Molenbeek', annee: '2022-2025', programme: '24 dwellings and a workshop', surface: '3,150 m²', statut: 'placeholder project — space reserved' },
    photographie: 'placeholder photographs — picsum.photos'
  },
  {
    slug: 'serre-urbaine', titre: 'Serre urbaine',
    description: 'On the roof of a car park, a market-garden greenhouse sixty metres long serves three shared rooms heated by the air of the crops. The glue-laminated timber structure carries reclaimed single-glazed frames; the greenhouse floor is a deck of tables, demountable, set to the height of the crops.',
    couverture: { src: 'projets/images/fictif/photo-04_1280x853.jpg', w: 1280, h: 853 },
    diapos: [
      { src: 'projets/images/fictif/photo-04_1280x853.jpg', w: 1280, h: 853 },
      { src: 'projets/images/fictif/photo-16_1280x960.jpg', w: 1280, h: 960 }
    ],
    fiche: { lieu: 'Anderlecht', annee: '2025', programme: 'productive greenhouse and shared spaces', surface: '1,100 m²', statut: 'placeholder project — space reserved' },
    photographie: 'placeholder photographs — picsum.photos'
  },
  {
    slug: 'six-maisons-en-bande', titre: 'Six maisons en bande',
    description: 'Six terraced houses on a sloping plot, each offset by half a level from its neighbour. The reverse-pitched roofs draw a single broken line along the street; at the rear, the gardens are linked by a shared path running down to the retained orchard.',
    couverture: { src: 'projets/images/fictif/photo-05_1280x1600.jpg', w: 1280, h: 1600 },
    diapos: [
      { src: 'projets/images/fictif/photo-05_1280x1600.jpg', w: 1280, h: 1600 },
      { src: 'projets/images/fictif/photo-11_1280x1024.jpg', w: 1280, h: 1024 },
      { src: 'projets/images/fictif/photo-15_1280x640.jpg', w: 1280, h: 640 }
    ],
    fiche: { lieu: 'Uccle', annee: '2024', programme: 'six terraced houses', surface: '890 m²', statut: 'placeholder project — space reserved' },
    photographie: 'placeholder photographs — picsum.photos'
  },
  {
    slug: 'atelier-senne', titre: 'Atelier Senne',
    description: "A joinery workshop and its caretaker's dwelling, slipped into the depth of a Brussels urban block. The workshop volume is a timber shed with north-facing sawtooth roofs; the brick house leans against the party wall and looks onto the working yard through a single large window.",
    couverture: { src: 'projets/images/fictif/photo-06_1280x960.jpg', w: 1280, h: 960 },
    diapos: [
      { src: 'projets/images/fictif/photo-06_1280x960.jpg', w: 1280, h: 960 },
      { src: 'projets/images/fictif/photo-12_1280x720.jpg', w: 1280, h: 720 }
    ],
    fiche: { lieu: 'Brussels, Cureghem', annee: '2021', programme: 'workshop and dwelling', surface: '620 m²', statut: 'placeholder project — space reserved' },
    photographie: 'placeholder photographs — picsum.photos'
  },
  {
    slug: 'belvedere-de-la-dyle', titre: 'Belvédère de la Dyle',
    description: 'A timber platform of twelve square metres, carried on four piles, above the flood meadow. It is reached by a footbridge that becomes a stair; a bench runs along three sides and the fourth stays open to the river. The structure is designed to be submerged two weeks a year.',
    couverture: { src: 'projets/images/fictif/photo-07_1280x1280.jpg', w: 1280, h: 1280 },
    diapos: [
      { src: 'projets/images/fictif/photo-07_1280x1280.jpg', w: 1280, h: 1280 },
      { src: 'projets/images/fictif/photo-08_1280x549.jpg', w: 1280, h: 549 }
    ],
    fiche: { lieu: 'Dyle valley, Walloon Brabant', annee: '2023', programme: 'landscape belvedere', surface: '12 m²', statut: 'placeholder project — space reserved' },
    photographie: 'placeholder photographs — picsum.photos'
  },
  {
    slug: 'cabane-des-dunes', titre: 'Cabane des Dunes',
    description: 'Demountable beach shelter in marine plywood panels, assembled in two days by a team of four. The plan is a four-metre square; the roof lifts on one side to let in the west wind, and closes completely at the end of the season.',
    couverture: { src: 'projets/images/fictif/photo-08_1280x549.jpg', w: 1280, h: 549 },
    diapos: [
      { src: 'projets/images/fictif/photo-08_1280x549.jpg', w: 1280, h: 549 },
      { src: 'projets/images/fictif/photo-09_1280x1706.jpg', w: 1280, h: 1706 },
      { src: 'projets/images/fictif/photo-01_1280x720.jpg', w: 1280, h: 720 }
    ],
    fiche: { lieu: 'De Panne, coast', annee: '2022', programme: 'seasonal shelter', surface: '16 m²', statut: 'placeholder project — space reserved' },
    photographie: 'placeholder photographs — picsum.photos'
  }
];

/* Libellés des champs de la fiche, dans l'ordre d'affichage */
window.PROJETS_CHAMPS = [['lieu', 'Location'], ['annee', 'Year'], ['programme', 'Programme'], ['surface', 'Area'], ['statut', 'Status'], ['equipe', 'Team']];
