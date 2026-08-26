export type VideoTestimonial = {
  key: string;
  src: string;
  poster: string;
  author: string;
  role: string;
  hook: string;
};

export type LongTestimonial = {
  key: string;
  paragraphs: string[];
  author: string;
  role: string;
  detail: string;
};

export type ShortTestimonial = {
  key: string;
  quote: string;
  author: string;
  role: string;
};

/** Reels verticaux, format 9:16, lus au clic. */
export const videoTestimonials: VideoTestimonial[] = [
  {
    key: "medecin",
    src: "/videos/temoignage-medecin.mp4",
    poster: "/videos/temoignage-medecin.jpg",
    author: "Firdaws",
    role: "Médecin",
    hook: "« J'avais tout essayé. Le Sujok est la seule chose qui m'a soulagée. »"
  },
  {
    key: "hanane",
    src: "/videos/temoignage-hanane.mp4",
    poster: "/videos/temoignage-hanane.jpg",
    author: "Hanane",
    role: "Institutrice · Kénitra",
    hook: "« Une formation très axée sur la pratique. »"
  },
  {
    key: "conference",
    src: "/videos/temoignage-conference.mp4",
    poster: "/videos/temoignage-conference.jpg",
    author: "Mohamed M'farraj",
    role: "Homme d'affaires · Conférence à Bruxelles",
    hook: "« Moins de cinq minutes, et je n'ai plus jamais eu mal. »"
  }
];

/** Extraits de cours filmés — pour la section « En images ». */
export const courseClips: VideoTestimonial[] = [
  {
    key: "mal-de-tete",
    src: "/videos/cours-mal-de-tete.mp4",
    poster: "/videos/cours-mal-de-tete.jpg",
    author: "Traiter un mal de tête",
    role: "Extrait de cours · Sujok",
    hook: "Le geste change selon l'endroit où la douleur se situe."
  },
  {
    key: "graines",
    src: "/videos/cours-graines.mp4",
    poster: "/videos/cours-graines.jpg",
    author: "Le choix des graines",
    role: "Extrait de cours · Sujok",
    hook: "Pourquoi la forme d'une graine compte dans le choix du remède."
  },
  {
    key: "massage",
    src: "/videos/cours-massage.mp4",
    poster: "/videos/cours-massage.jpg",
    author: "Le sens du massage",
    role: "Extrait de cours · Sujok",
    hook: "« Si vous hésitez, faites les deux. Le corps prendra ce dont il a besoin. »"
  }
];

/** Récits complets, mis en avant. */
export const longTestimonials: LongTestimonial[] = [
  {
    key: "khadija",
    paragraphs: [
      "Je n'ai aucun lien avec le domaine de la santé, et pourtant j'ai suivi le niveau 1 en Sujok comme en homéopathie. Ce qui m'a le plus étonnée, c'est la formation elle-même : elle est très axée sur la pratique. On en absorbe plus de 90 %, et on peut appliquer immédiatement ce qu'on vient d'apprendre.",
      "J'ai des douleurs cervicales chroniques. D'habitude il me faut vingt jours pour m'en remettre. Avec ce que j'ai appris, une seule journée a suffi. Ma sœur, qui est infirmière et reste debout toute la journée, souffrait du genou et de la cheville : une séance, et deux mois plus tard les douleurs ne sont pas revenues.",
      "Le Dr Boulaguiem est généreux, à l'écoute, et répond à toutes les questions. Je recommande très fortement."
    ],
    author: "Khadija",
    role: "Naturopathe",
    detail: "Homéopathie niveau 1 · Sujok niveau 1"
  },
  {
    key: "accidentee",
    paragraphs: [
      "Je prenais des cours de Sujok avec le Dr Boulaguiem, et il me restait une séance pour terminer le premier niveau. Puis j'ai eu un accident. Je suis restée huit jours alitée, sans pouvoir bouger.",
      "Je ne maîtrisais plus mes jambes. Alors j'ai appliqué le protocole que j'avais appris en cours, et j'ai attendu. Deux heures plus tard, je me suis levée seule pour la première fois.",
      "Aujourd'hui j'ai suivi les deux formations. Je comprends ce que je fais, je l'applique sur moi et sur mes proches. Et à chaque anniversaire, j'offre une trousse Sujok à ma famille."
    ],
    author: "Rkia",
    role: "Ancienne cadre au ministère en mission aux États-Unis",
    detail: "Homéopathie · Sujok"
  }
];

/** Citations brèves, en cartes. */
export const shortTestimonials: ShortTestimonial[] = [
  {
    key: "camelia",
    quote:
      "Le jour de mon premier cours, j'avais un mal de tête à devoir rentrer chez moi. Un point, quelques secondes, et la douleur avait disparu. J'ai compris ce jour-là que je ne recevais pas seulement un cours, mais un outil pour la vie.",
    author: "Camélia",
    role: "Étudiante en naturopathie · DESS en agroalimentaire"
  },
  {
    key: "nawal",
    quote:
      "Je connais le Dr Boulaguiem depuis presque dix ans, et il m'arrive de faire l'aller-retour France-Maroc pour le Sujok. Mon métier n'est pas dans le médical, et pourtant aujourd'hui, je peux aider d'autres personnes à mon tour.",
    author: "Nawal El Bacha",
    role: "Cadre de banque · Paris"
  },
  {
    key: "rabia",
    quote:
      "Au-delà de son professionnalisme, le Dr Boulaguiem est un homme très humain, très généreux, toujours dans le partage.",
    author: "Rabia El Cohen",
    role: "Professeure universitaire de physique"
  }
];
