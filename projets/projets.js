/* Contenu : un projet réel (habiter, produire, partager) puis des projets FICTIFS, sans aucun tiers réel — pour ces derniers seuls comptent l'emplacement, le volume et les rapports d'échelle des zones de texte et d'image.
   Chaque projet : titre (h1 de la colonne vide, 96 px), description (légende sous l'image, 40 à 70 mots),
   couverture (image de la grille, rapport natif conservé), diapos (planches de la lightbox), fiche (panneau Information). */
window.PROJETS = [
  /* ---- projet réel : habiter, produire, partager — Berchem-Sainte-Agathe (atelier II, LOCI UCLouvain, 2025-2026) ---- */
  {
    slug: 'dwelling-producing-sharing', titre: 'Dwelling, Producing, Sharing',
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
    slug: 'three-seasons',
    titre: 'Three Seasons',
    description: "In Braine-l'Alleud, the former Carimar warehouse becomes a cultural centre for young people, backed by the municipality's existing associations, as part of an urban renewal programme. Brick and metal structures are kept, and the masonry dismantled to free the east flank is reused as walls between the rooms. Inside, three atmospheres: a foyer in the manner of a guinguette, joined to the public space; an entrance hall lit through sawtooth roofs; a quiet garden of maples turning with the seasons.",
    texte: [
      "The conversion of the former Carimar warehouse is part of an urban renewal programme to revive the neighbourhood and give young people a place of culture, backed by the municipality's existing associations. The site has a strong architectural identity: brick buildings, metal structures, a large central yard. The main access for cars and visitors is from the north-east; to the east, the Hain runs along the site, with a green space by the delivery area. Across the site, the project opens the Hain further onto the yard, to separate the delivery access from the building's entrance, and sets out benches for visitors, marking the foyer's extension onto the public space.",
      "Three atmospheres share the building. The first borrows from the guinguette: open to the neighbourhood and a varied public, including people far from creative and cultural production. Joined directly to the public space, the foyer can run on its own; its terrace extends it as far as the event requires. Long, wide openings in the existing façades make the industrial building welcoming and show what happens inside. The second is the entrance hall, lit from above through its sawtooth roofs and large enough for visitors and the scenery workshop's performances. Through its glazing, passers-by see the main corridor and the rooms opening off it like the teeth of a comb.",
      'The third is a quiet garden, reached from the multi-purpose rooms given over to some of the workshops, to rest and to exhibitions. Maples fill it, their bright foliage turning with the seasons — green in summer, red and yellow in autumn — and the ground under them is for sitting and for activities in the open air. The garden runs along a new façade whose brick patterns reinterpret the masonry of the existing warehouse: a textured backdrop. At its far end stands the original west façade, its two bays and double-pitched roofs cutting the skyline; a bench of reused bricks is set against it.',
      'The aim is to keep as much of the old as possible and reuse some of it to build the new. Exposed brick and metal structures stay, and what is added uses the same materials, brick and steel, so old and new read together. The walls between the multi-purpose rooms are load-bearing brick piers, infilled with brick from the masonry dismantled to free the east flank of the site. Between rooms and workshops, these bricks make a good acoustic break, sometimes lined on one face with acoustic panels or curtains. The other face stays exposed and speaks to the existing building: its blue joints show the history of successive interventions.',
    ],
    couverture: { src: 'projets/images/tsa-photo-01-hall-racks_1021.webp', w: 1021, h: 1004, legende: 'the warehouse as found — storage racks beneath the sawtooth roofs' },
    diapos: [
      { src: 'projets/images/tsa-site-plan_1400.webp', w: 1400, h: 846, legende: 'site plan — the Carimar site around its central yard, the Hain along the east edge, the neighbouring buildings' },
      { src: 'projets/images/tsa-ground-floor_1400.webp', w: 1400, h: 1718, legende: 'ground floor — foyer on the yard, entrance hall under the sawtooth roofs, rooms and workshops off the corridor, maple garden to the north; new in red, existing in grey' },
      { src: 'projets/images/tsa-first-floor_1400.webp', w: 1400, h: 1718, legende: 'first floor — the single upper level, above the multi-purpose rooms' },
      { src: 'projets/images/tsa-map-situation_1400.webp', w: 1400, h: 2006, legende: 'location plan, 1:6 000 — the site outlined in red, the Hain running north–south past it, railway line 124 to the east' },
      { src: 'projets/images/tsa-map-connections_1174.webp', w: 1174, h: 1526, legende: 'connections, 1:15 000 — municipal roads and paths, railway line 124, the RAVeL greenway, bus stops, the Hain' },
      { src: 'projets/images/tsa-map-land-use_1162.webp', w: 1162, h: 1543, legende: 'zoning, 1:15 000 — housing, rural housing, mixed economic activity, public facilities; the warehouse outlined in red' },
      { src: 'projets/images/tsa-map-building-heights_1174.webp', w: 1174, h: 1456, legende: 'building heights, 1:15 000 — from single-storey to four storeys or more; the warehouse outlined in red, the tallest blocks just to its north-east' },
      { src: 'projets/images/tsa-map-figure-ground_1162.webp', w: 1162, h: 1361, legende: 'figure-ground, 1:15 000 — the built fabric, the warehouse in red' },
      { src: 'projets/images/tsa-photo-01-hall-racks_1021.webp', w: 1021, h: 1004, legende: 'the warehouse as found — storage racks beneath the sawtooth roofs' },
      { src: 'projets/images/tsa-photo-03-hall-yard_1009.webp', w: 1009, h: 1004, legende: 'as found — from inside the warehouse towards the yard, two figures in the opening against the light' },
      { src: 'projets/images/tsa-photo-04-trusses_1021.webp', w: 1021, h: 1004, legende: 'as found — timber trusses and brick walls of the workshop wing, equipment in store' },
      { src: 'projets/images/tsa-photo-02-roof-pallets_1033.webp', w: 1033, h: 1004, legende: 'as found — the roof structure over stacked pallets, timber and brick' },
      { src: 'projets/images/tsa-photo-12-gate_953.webp', w: 953, h: 957, legende: 'as found — the warehouse gate onto the yard, painted brick under a metal roof' },
      { src: 'projets/images/tsa-photo-06-brick-canopy_1001.webp', w: 1001, h: 1013, legende: 'as found — brick wall and metal canopy on the yard, a parked car' },
      { src: 'projets/images/tsa-photo-09-alley_1009.webp', w: 1009, h: 1004, legende: 'as found — the alley along the sawtooth roofs, towards the neighbourhood' },
      { src: 'projets/images/tsa-photo-07-hain-brick_1021.webp', w: 1021, h: 1004, legende: 'as found — the Hain at the foot of a brick gable' },
      { src: 'projets/images/tsa-photo-11-hain-building_964.webp', w: 964, h: 945, legende: 'as found — the Hain along the building, the east flank to be freed' },
      { src: 'projets/images/tsa-photo-08-hain-trees_1033.webp', w: 1033, h: 1004, legende: 'as found — trees over the Hain, the houses of the neighbourhood behind' },
    ],
    fiche: { lieu: "Braine-l'Alleud, Walloon Brabant", annee: '2024-2025', programme: 'conversion of a former warehouse into a cultural centre for young people — foyer and terrace, entrance hall, multi-purpose rooms and workshops, garden', statut: 'studio project, LOCI UCLouvain', equipe: 'project in a two-person team with Maëlis Alban' },
    photographie: 'drawings: Côme Le Bozec and Maëlis Alban — maps: Côme Le Bozec, from SPW Géoportail de la Wallonie data (CC BY 4.0)'
  },
  {
    slug: 'tanners-hall', titre: 'Tanners’ Hall',
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
    slug: 'canal-tower', titre: 'Canal Tower',
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
    slug: 'rooftop-greenhouse', titre: 'Rooftop Greenhouse',
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
    slug: 'six-terraced-houses', titre: 'Six Terraced Houses',
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
    slug: 'senne-workshop', titre: 'Senne Workshop',
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
    slug: 'dyle-belvedere', titre: 'Dyle Belvedere',
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
    slug: 'dune-hut', titre: 'Dune Hut',
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
