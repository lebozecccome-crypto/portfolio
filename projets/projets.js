/* Contenu : un projet réel (habiter, produire, partager) puis des projets FICTIFS, sans aucun tiers réel — pour ces derniers seuls comptent l'emplacement, le volume et les rapports d'échelle des zones de texte et d'image.
   Chaque projet : titre (h1 de la colonne vide, 96 px), description (légende sous l'image, 40 à 70 mots),
   couverture (image de la grille, rapport natif conservé), diapos (planches de la lightbox), fiche (panneau Information).
   enCours : true pour l'espace réservé, ou un libellé pour un projet réel mis en pause — image floutée, projet
   non ouvrable, le libellé remplace la description sous l'image et suit le titre dans la liste. */
window.PROJETS = [
  /* ---- projet réel : habiter, produire, partager — Berchem-Sainte-Agathe (atelier II, LOCI UCLouvain, 2025-2026) ---- */
  {
    slug: 'dwelling-producing-sharing', titre: 'Dwelling, Producing, Sharing',
    description: 'Over the past seventy years, housing modernization has increasingly expanded private space. This project takes the opposite approach, reducing private areas in favour of diverse shared spaces. This is not seen as a loss, but as a way to encourage encounters and strengthen residents’ appropriation of communal areas.</p><p>The project creates a gradual transition from the street to more intimate spaces. The market extends the life of the neighbourhood, while the garden, greenhouse, and communal areas encourage interaction. Circulation spaces become places of everyday life, with each threshold designed as an inhabited space that connects rather than separates residents.',
    texte: [
      'For seventy years, the modernisation of housing has meant enlarging private space ever further; a whole family could once fit into a single room. The project takes the opposite path and builds a gradation from public to common and then to private: the street and the market open to the neighbourhood, the great common of the garden and the greenhouse, the common of the building, the small common of a landing shared between a few households, and finally the bedroom. Each threshold is a place, not a door.',
      'The living rooms are deliberately tight. What is no longer in the dwelling is found in the shared spaces: the shared kitchen, the laundry, the workshop, the cultivated terraces, the greenhouse and the ground-floor room opening level with the garden. Residents are invited to gather there rather than withdraw, and the life of the building can be read from the garden.',
      'A shared food production project links the dwellings: vegetable gardens in open ground, growing greenhouses and a greenhouse crowning the roof, which takes the sunniest floor while the dwellings are arranged beneath. The collective, set up as an association, runs the crops, the shared spaces and a monthly market open to the municipality: the project settles into the life of the neighbourhood and becomes one of its working parts.',
      'A single building, the garden in the depth of the plot; three structural systems: concrete ground floor with brick facing, timber post-and-beam, light greenhouse at the ridge.'
    ],
    couverture: { src: 'projets/images/hpp-site-02-street_1400.webp', w: 1400, h: 934, photo: true, legende: 'as found — the street front, the neighbouring houses and the passage to the plot' },
    diapos: [
      { src: 'projets/images/hpp-map-nolli_1400.webp', w: 1400, h: 1400, legende: 'figure-ground, 1:10 000 — the site in black in the fabric of Berchem-Sainte-Agathe' },
      { src: 'projets/images/hpp-concept_2800.webp', w: 2800, h: 618, echelle: 0.69, legende: 'concept — fragmenting the plot, subtracting and adding to open the shared garden behind the street building, crossing from the street to the heart of the block, then opening to the morning and evening sun' },
      { src: 'projets/images/hpp-implantation_2800.webp', w: 2800, h: 2162, legende: 'site plan — the building and the productive garden in the depth of the plot' },
      { src: 'projets/images/hpp-elevation_2800.webp', w: 2800, h: 626, legende: 'on the street, the project takes up the heights of its neighbours' },
      { src: 'projets/images/hpp-coupe-50_2787.webp', w: 2787, h: 2070, legende: 'the greenhouse crowns the dwellings — crops hung beneath the ridge, vegetable gardens on the terraces' },
      { src: 'projets/images/hpp-plan-rdc-100_1466.webp', w: 1466, h: 1251, legende: 'on the ground floor, the shared spaces open level with the garden' },
      { src: 'projets/images/hpp-plan-r1-100_1462.webp', w: 1462, h: 1252, legende: 'on the first floor, the bedrooms and the shared terrace' },
      { src: 'projets/images/hpp-plan-r2-100_1464.webp', w: 1464, h: 1246, legende: 'on the second floor, the dwellings beneath the greenhouse' },
      { src: 'projets/images/hpp-plan-r3-100_1464.webp', w: 1464, h: 1249, legende: 'on the top floor, the production greenhouse and its growing tables' },
      { src: 'projets/images/hpp-plan-r1_2787.webp', w: 2787, h: 1646, legende: 'the first floor in detail, from the street to the garden' },
      { src: 'projets/images/hpp-axonometrie-legende_906.webp', w: 906, h: 1152, legende: 'three structural systems — concrete and brick on the ground floor, timber post-and-beam, light greenhouse at the ridge' },
      { src: 'projets/images/hpp-model-01-corner_1400.webp', w: 1400, h: 1867, photo: true, legende: 'the model — brick ground floor, timber upper floors, the greenhouse frame at the ridge' },
      { src: 'projets/images/hpp-model-02-street_1400.webp', w: 1400, h: 1867, photo: true, legende: 'the model — the street elevation, the slatted timber façade over the open ground floor' },
      { src: 'projets/images/hpp-model-03-garden_1400.webp', w: 1400, h: 1867, photo: true, legende: 'the model — the garden side, the terraces and the greenhouse frame above' },
      { src: 'projets/images/hpp-croquis_800.webp', w: 800, h: 1357, legende: 'first intentions — the thresholds of the common, the market open to the neighbourhood' },
      { src: 'projets/images/hpp-analyses_3061.webp', w: 3061, h: 976, legende: 'site analysis, three readings of the neighbourhood — parks, collective vegetable gardens and playgrounds within 400 m; where people get their food, short supply chains and shops; the massing of the fabric, from ground floor to fifteen metres' },
      { src: 'projets/images/hpp-narration_760.webp', w: 760, h: 927, legende: 'the cultivated municipality — the territory told through its gardens' },
      { src: 'projets/images/hpp-herbier_712.webp', w: 712, h: 937, legende: 'six spontaneous species recorded on site, from wild marjoram to purple foxglove' },
      { src: 'projets/images/hpp-site-01-shed_1400.webp', w: 1400, h: 1050, photo: true, legende: 'as found — inside an existing shed, racks and stored material' },
      { src: 'projets/images/hpp-site-02-street_1400.webp', w: 1400, h: 934, photo: true, legende: 'as found — the street front, the neighbouring houses and the passage to the plot' },
      { src: 'projets/images/hpp-ref-molenbeek_407.webp', w: 407, h: 560, photo: true, legende: 'reference — hé architecture, molenbeek 2024: the house extended by its roof' },
      { src: 'projets/images/hpp-ref-melbourne_457.webp', w: 457, h: 560, photo: true, legende: 'reference — austin maynard architects, melbourne 2022: the access gallery as a place to live' }
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
    couverture: { src: 'projets/images/tsa-photo-07-hain-brick-colour_1021.webp', w: 1021, h: 1004, photo: true, legende: 'as found — the Hain at the foot of a brick gable' },
    diapos: [
      { src: 'projets/images/tsa-map-nolli_2799.webp', w: 2799, h: 2800, legende: 'figure-ground, 1:10 000 — the warehouse in black among the built fabric of Braine-l’Alleud, railway line 124 to the east' },
      { src: 'projets/images/tsa-concept_2800.webp', w: 2800, h: 1041, echelle: 0.5, legende: 'concept — fragmenting the volume, subtracting to open the yard and the garden, then opening the façades to light and to the Hain' },
      { src: 'projets/images/tsa-site-plan_2800.webp', w: 2800, h: 1692, legende: 'site plan — the Carimar site around its central yard, the Hain along the east edge, the neighbouring buildings' },
      { src: 'projets/images/tsa-ground-floor_2282.webp', w: 2282, h: 2800, legende: 'ground floor — foyer on the yard, entrance hall under the sawtooth roofs, rooms and workshops off the corridor, maple garden to the north; new in red, existing in grey' },
      { src: 'projets/images/tsa-first-floor_2282.webp', w: 2282, h: 2800, legende: 'first floor — the single upper level, above the multi-purpose rooms' },
      { src: 'projets/images/tsa-model-01-overview_1400.webp', w: 1400, h: 1050, photo: true, legende: 'the model — the sawtooth roofs around the central yard' },
      { src: 'projets/images/tsa-model-02-yard_1400.webp', w: 1400, h: 1050, photo: true, legende: 'the model — the yard, the timber truss and the sawtooth roofs' },
      { src: 'projets/images/tsa-model-05-workshop_1400.webp', w: 1400, h: 1867, photo: true, legende: 'the model, inside — a workshop room, its furniture and the glazing onto the garden' },
      { src: 'projets/images/tsa-map-situation_1948.webp', w: 1948, h: 2801, legende: 'location plan, 1:6 000 — the site outlined in red, the Hain running north–south past it, railway line 124 to the east' },
      { src: 'projets/images/tsa-map-medallions_2801.webp', w: 2801, h: 880, legende: 'local context, four medallions at 1:15 000 — left to right: connections, zoning, building heights, figure-ground; the warehouse in red' },
      { src: 'projets/images/tsa-photo-01-hall-racks_1021.webp', w: 1021, h: 1004, photo: true, legende: 'the warehouse as found — storage racks beneath the sawtooth roofs' },
      { src: 'projets/images/tsa-photo-03-hall-yard_1009.webp', w: 1009, h: 1004, photo: true, legende: 'as found — from inside the warehouse towards the yard, two figures in the opening against the light' },
      { src: 'projets/images/tsa-photo-04-trusses_1021.webp', w: 1021, h: 1004, photo: true, legende: 'as found — timber trusses and brick walls of the workshop wing, equipment in store' },
      { src: 'projets/images/tsa-photo-02-roof-pallets_1033.webp', w: 1033, h: 1004, photo: true, legende: 'as found — the roof structure over stacked pallets, timber and brick' },
      { src: 'projets/images/tsa-photo-12-gate_953.webp', w: 953, h: 957, photo: true, legende: 'as found — the warehouse gate onto the yard, painted brick under a metal roof' },
      { src: 'projets/images/tsa-photo-06-brick-canopy_1001.webp', w: 1001, h: 1013, photo: true, legende: 'as found — brick wall and metal canopy on the yard, a parked car' },
      { src: 'projets/images/tsa-photo-09-alley_1009.webp', w: 1009, h: 1004, photo: true, legende: 'as found — the alley along the sawtooth roofs, towards the neighbourhood' },
      { src: 'projets/images/tsa-photo-07-hain-brick_1021.webp', w: 1021, h: 1004, photo: true, legende: 'as found — the Hain at the foot of a brick gable' },
      { src: 'projets/images/tsa-photo-11-hain-building_964.webp', w: 964, h: 945, photo: true, legende: 'as found — the Hain along the building, the east flank to be freed' },
      { src: 'projets/images/tsa-photo-08-hain-trees_1033.webp', w: 1033, h: 1004, photo: true, legende: 'as found — trees over the Hain, the houses of the neighbourhood behind' },
    ],
    fiche: { lieu: "Braine-l'Alleud, Walloon Brabant", annee: '2024-2025', programme: 'conversion of a former warehouse into a cultural centre for young people — foyer and terrace, entrance hall, multi-purpose rooms and workshops, garden', statut: 'studio project, LOCI UCLouvain', equipe: 'project in a two-person team with Maëlis Alban' },
    photographie: 'drawings: Côme Le Bozec and Maëlis Alban — maps: Côme Le Bozec, from SPW Géoportail de la Wallonie data (CC BY 4.0)'
  },
    {
    slug: 'house-on-rue-au-tiroir',
    titre: 'House on Rue au Tiroir',
    enCours: 'work in progress',   /* en pause : supprimer cette ligne pour rouvrir le projet */
    description: 'On Rue au Tiroir, a terraced house sits between two neighbours, the street on one side and, a few steps down, the garden on the other. A bookcase wall rises through every floor and carries the stair; long passages run through the house, so that the rooms connect freely and daylight reaches deep inside. On the roof, a second living room and a terrace facing due south.',
    texte: [
      'A terraced house between two neighbours, on ground that falls from the street to the garden. The project sets out to make the spaces flow into one another and to bring in as much daylight as possible. On the ground floor a long passage runs the length of the house: from the front door, along the living room and past the stair, to the dining room at the back and a few steps down to the garden. The rooms open off it, and light comes in at both ends.',
      'A bookcase wall rises through the house, from the ground floor to the roof level, and carries the stair. The axonometric draws it apart from the house as a tall grid of shelves; in the section the flights climb against it one above the other, books, bottles and vases on the shelves beside them. Around it, on the first and second floors, two bedrooms and a bathroom on each; on the first floor the landing opens onto a terrace on the garden side, over the back of the ground floor.',
      'The roof is rethought as a space of its own. At the top of the stair, a second living room; in front of it, on the street side, a terrace with a table and chairs, facing due south: a place to catch the sun and an extra living space. The section brings it all together: three floors and the roof level, the bookcase wall running through them, the stair climbing against it from bottom to top.',
    ],
    couverture: { src: 'projets/images/rat-section_1400.webp', w: 1400, h: 794, legende: 'the section — the bookcase wall carries the stair from the ground floor to the roof level; the garden a few steps below the house on one side, the street on the other' },
    diapos: [
      { src: 'projets/images/rat-section_1400.webp', w: 1400, h: 794, legende: 'the section — the bookcase wall carries the stair from the ground floor to the roof level; the garden a few steps below the house on one side, the street on the other' },
      { src: 'projets/images/rat-axonometric_1400.webp', w: 1400, h: 1115, legende: 'exploded axonometric — the house cut open and the bookcase wall drawn apart from it; the garden steps on one side, the street on the other' },
      { src: 'projets/images/rat-plan-r0_1400.webp', w: 1400, h: 474, legende: 'ground floor — dining room on the garden side, living room on the street side, the stair between them; the passage runs from the front door to the garden steps' },
      { src: 'projets/images/rat-plan-r1_1400.webp', w: 1400, h: 332, legende: 'first floor — two bedrooms and a bathroom around the stair; the landing opens onto a terrace on the garden side' },
      { src: 'projets/images/rat-plan-r2_1400.webp', w: 1400, h: 332, legende: 'second floor — the same layout, two bedrooms and a bathroom around the stair' },
      { src: 'projets/images/rat-plan-r3_1400.webp', w: 1400, h: 332, legende: 'roof level — a second living room at the top of the stair, and the terrace on the street side, facing due south' },
    ],
    fiche: { lieu: 'Rue au Tiroir', annee: '2024-2025', programme: 'terraced house — living and dining rooms, four bedrooms and two bathrooms, a second living room and a terrace on the roof', statut: 'studio project, LOCI UCLouvain' },
    photographie: 'drawings: Côme Le Bozec'
  },
  {
    slug: 'work-in-progress',
    titre: 'Work in progress',
    enCours: true,
    description: 'the next project is in preparation.',
    couverture: { src: 'projets/images/fictif/photo-01_1280x720.jpg', w: 1280, h: 720, photo: true },
    diapos: [],
    fiche: { statut: 'in preparation' },
    photographie: ''
  }
];

/* Libellés des champs de la fiche, dans l'ordre d'affichage */
window.PROJETS_CHAMPS = [['lieu', 'Location'], ['annee', 'Year'], ['programme', 'Programme'], ['surface', 'Area'], ['statut', 'Status'], ['equipe', 'Team']];
