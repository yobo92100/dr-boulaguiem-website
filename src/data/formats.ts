export type FormatItem = {
  key: "presentiel" | "enligne";
  name: string;
  icon: "presentiel" | "enligne";
  tagline: string; // lieu / rythme
  price: string; // prix affiché en avant, grand format
  priceDetail: string; // précision sous le prix
  duration: string; // rythme et volume horaire
  points: string[];
  whatsappMessage: string;
};

export const formats: FormatItem[] = [
  {
    key: "presentiel",
    name: "En présentiel",
    icon: "presentiel",
    tagline: "Rabat & Casablanca · le week-end",
    price: "600 Dh / module",
    priceDetail: "payable par module, à raison d'un par mois",
    duration: "10 modules · une journée de 8h chacun",
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
    price: "400 Dh / mois",
    priceDetail: "payable par trimestre, soit 1 200 Dh (24h)",
    duration: "2h par semaine, en soirée",
    points: [
      "Sessions interactives en visioconférence",
      "Aucun déplacement, où que vous soyez",
      "Questions et échanges en direct avec le formateur"
    ],
    whatsappMessage:
      "Bonjour Dr Boulaguiem, je souhaite être informé(e) des prochaines formations en ligne (en soirée, en semaine)."
  }
];
