export type FormatItem = {
  key: "presentiel" | "enligne";
  name: string;
  icon: "presentiel" | "enligne";
  tagline: string; // lieu / rythme
  prices: string[]; // une ou plusieurs formules, affichées côte à côte
  priceDetail: string; // les modalités de paiement des formules ci-dessus
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
    prices: ["600 Dh / module", "5 000 Dh / 10 modules"],
    priceDetail: "Payable par module, ou les 10 modules avec facilités",
    duration: "10 modules · 1 module par mois · une journée de 8h chacun",
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
    prices: ["400 Dh / mois"],
    priceDetail: "Payable par trimestre, soit 1 200 Dh (24h)",
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
