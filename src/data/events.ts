export type EventItem = {
  title: string;
  date: string;
  time: string;
  city: string;
  venue: string;
  shortText: string;
  limitedPlaces: boolean;
  remainingPlaces: number;
  price: string;
  whatsappMessage: string;
};

export const events: EventItem[] = [
  {
    title: "Initiation structurée à l'homéopathie",
    date: "18 mai 2026",
    time: "09:30 - 17:00",
    city: "Casablanca",
    venue: "Lieu à confirmer",
    shortText:
      "8h de formation structurée : principes fondamentaux, cas pratiques, limites d'application. Groupe max 20 personnes. Ouvert aux professionnels et novices.",
    limitedPlaces: true,
    remainingPlaces: 5,
    price: "600 MAD / pers.",
    whatsappMessage:
      "Bonjour Dr Boulaguiem, je souhaite m'inscrire à la formation Initiation structurée à l'homéopathie à Casablanca. Est-ce qu'il reste des places ?"
  },
  {
    title: "Découverte du Sujok en pratique",
    date: "1 juin 2026",
    time: "10:00 - 16:30",
    city: "Rabat",
    venue: "Centre de formation partenaire",
    shortText:
      "Introduction pratique au Sujok avec exercices sur séance. Aucun prérequis médical. Matériel fourni. Attestation de participation remise.",
    limitedPlaces: true,
    remainingPlaces: 8,
    price: "600 MAD / pers.",
    whatsappMessage:
      "Bonjour Dr Boulaguiem, je souhaite m'inscrire à la formation Découverte du Sujok en pratique à Rabat. Est-ce qu'il reste des places ?"
  },
  {
    title: "Homéopathie et accompagnement responsable",
    date: "15 juin 2026",
    time: "09:30 - 17:00",
    city: "Marrakech",
    venue: "Salle de formation locale",
    shortText:
      "Repères pratiques, posture professionnelle et complémentarité avec le suivi médical classique. Format interactif avec études de cas.",
    limitedPlaces: false,
    remainingPlaces: 12,
    price: "600 MAD / pers.",
    whatsappMessage:
      "Bonjour Dr Boulaguiem, je souhaite m'inscrire à la formation Homéopathie et accompagnement responsable à Marrakech. Est-ce qu'il reste des places ?"
  }
];

/*
  Comment ajouter ou modifier une formation ?

  1. Chaque bloc entre accolades { ... } représente une formation.
  2. Pour ajouter une formation, copiez un bloc complet, collez-le dans le tableau events,
     puis changez les informations.
  3. Respectez les virgules entre les blocs.
  4. limitedPlaces accepte seulement true ou false :
     - true affiche "Places limitées"
     - false n'affiche pas ce badge
  5. remainingPlaces indique le nombre de places restantes affiché sur la carte.
  6. price affiche le prix public sur la carte.
  7. whatsappMessage est le texte qui s'ouvre automatiquement dans WhatsApp.
     Gardez une phrase simple avec le titre et la ville.
  8. Le site n'affiche pas de niveau.
*/
