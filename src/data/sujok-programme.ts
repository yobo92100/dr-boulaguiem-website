export type SujokLevel = {
  key: string;
  label: string;
  name: string;
  tagline: string;
  intro: string;
  modules: string[];
};

export const sujokProgrammePdf = "/programme-formation-sujok.pdf";

export const sujokLevels: SujokLevel[] = [
  {
    key: "niveau-1",
    label: "Niveau 1",
    name: "Les fondamentaux",
    tagline: "6 modules · 1 journée de 8h par module",
    intro:
      "Le point de départ, sans aucun prérequis. On y pose les bases : d'où vient le Sujok, comment lire la main et le pied, et comment appliquer les premiers gestes.",
    modules: [
      "Histoire du Sujok, notions de bio-énergétique et cartographie de la main",
      "Cartographie des pieds et les sept étapes de la pratique",
      "Le système « insecte », chromothérapie et cycle des Six Ki",
      "Les énergies des doigts et l'équilibrage énergétique",
      "Les outils : stylets, anneaux, rouleaux, stimulateurs, aimants",
      "Applications courantes : rhume, toux, fièvre, céphalées, ballonnements"
    ]
  },
  {
    key: "niveau-2",
    label: "Niveau 2",
    name: "La pratique appliquée",
    tagline: "6 modules",
    intro:
      "On passe des repères aux situations concrètes. Chaque outil est mis en pratique, et l'on apprend à choisir le système adapté selon ce que l'on observe.",
    modules: [
      "Le cycle de la vie et les correspondances énergétiques",
      "Les stimulateurs de surface, aimants et mini-moxas",
      "Moxibustion, cigare d'armoise et thérapie par les graines",
      "Choisir le système approprié selon la situation",
      "Troubles respiratoires, digestifs et ostéo-articulaires",
      "Troubles ORL, dermatologiques et fatigue chronique"
    ]
  },
  {
    key: "niveau-3",
    label: "Niveau 3",
    name: "L'approche avancée",
    tagline: "6 modules",
    intro:
      "Le niveau le plus exigeant, pour celles et ceux qui veulent comprendre le Sujok en profondeur : méridiens, chakras et méthodes combinées.",
    modules: [
      "Les méridiens corporels Yin-Yang et leur topographie",
      "Les byol-méridiens des bras et des jambes",
      "Tonification et dispersion des énergies",
      "Les Cinq Éléments et la théorie des Six Ki",
      "Les chakras : rôle, structure et correspondances",
      "Magnétothérapie et méthodes combinées"
    ]
  }
];
