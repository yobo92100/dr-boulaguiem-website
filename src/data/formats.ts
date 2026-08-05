export type FormatItem = {
  key: "presentiel" | "enligne";
  name: string;
  icon: "presentiel" | "enligne";
  tagline: string; // lieu / rythme
  points: string[];
  whatsappMessage: string;
};

export const formats: FormatItem[] = [
  {
    key: "presentiel",
    name: "En présentiel",
    icon: "presentiel",
    tagline: "Rabat & Casablanca · le week-end",
    points: [
      "Pratique guidée et manipulations en direct",
      "Échanges en face à face avec le formateur",
      "Groupe restreint, pour un suivi personnalisé"
    ],
    whatsappMessage:
      "Bonjour Dr Boulaguiem, je souhaite être informé(e) des prochaines formations en présentiel (Rabat / Casablanca, le week-end)."
  },
  {
    key: "enligne",
    name: "En ligne",
    icon: "enligne",
    tagline: "En soirée, en semaine · depuis chez vous",
    points: [
      "Sessions interactives en visioconférence",
      "Aucun déplacement, où que vous soyez",
      "Questions et échanges en direct avec le formateur"
    ],
    whatsappMessage:
      "Bonjour Dr Boulaguiem, je souhaite être informé(e) des prochaines formations en ligne (en soirée, en semaine)."
  }
];
