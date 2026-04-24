export type EventItem = {
  title: string;
  date: string;
  time: string;
  city: string;
  venue: string;
  shortText: string;
  limitedPlaces: boolean;
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
      "Une journée de formation pédagogique pour comprendre les bases, le cadre d'utilisation responsable et les limites de l'homéopathie.",
    limitedPlaces: true,
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
      "Une introduction claire au Sujok comme approche complémentaire, avec un cadre pédagogique accessible aux professionnels et au grand public.",
    limitedPlaces: true,
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
      "Formation dédiée aux repères pratiques, à la posture professionnelle et à la complémentarité avec le suivi médical classique.",
    limitedPlaces: false,
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
  5. whatsappMessage est le texte qui s'ouvre automatiquement dans WhatsApp.
     Gardez une phrase simple avec le titre et la ville.
  6. Le site n'affiche pas de prix et n'affiche pas de niveau.
*/
