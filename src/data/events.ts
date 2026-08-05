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

/*
  Pas de session datée pour le moment.

  Le site présente actuellement les deux FORMATS (présentiel / en ligne) —
  voir src/data/formats.ts.

  Quand de vraies dates seront fixées, ajoutez-les ci-dessous en copiant le
  modèle commenté. Il suffira alors de réafficher les cartes de dates
  (composant EventCard) sur la page Formations.
*/
export const events: EventItem[] = [
  // {
  //   title: "Initiation à l'homéopathie",
  //   date: "18 mai 2026",
  //   time: "09:30 - 17:00",
  //   city: "Casablanca",
  //   venue: "Lieu à confirmer",
  //   shortText:
  //     "8h de formation structurée : principes fondamentaux, cas pratiques, remèdes essentiels.",
  //   limitedPlaces: true,
  //   remainingPlaces: 12,
  //   price: "",
  //   whatsappMessage:
  //     "Bonjour Dr Boulaguiem, je souhaite m'inscrire à la formation Initiation à l'homéopathie à Casablanca."
  // }
];
