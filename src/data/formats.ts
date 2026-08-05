import { images } from "@/config/images";

export type FormatItem = {
  key: "presentiel" | "enligne";
  name: string;
  icon: "presentiel" | "enligne";
  tagline: string; // lieu / rythme
  image: string;
  points: string[];
  whatsappMessage: string;
};

export const formats: FormatItem[] = [
  {
    key: "presentiel",
    name: "En présentiel",
    icon: "presentiel",
    tagline: "Rabat & Casablanca · le week-end",
    image: images.teaching,
    points: [
      "Sessions de Sujok et d'Homéopathie",
      "En petits groupes, pour un vrai suivi",
      "Pratique et échanges en direct"
    ],
    whatsappMessage:
      "Bonjour Dr Boulaguiem, je souhaite être informé(e) des prochaines formations en présentiel (Rabat / Casablanca, le week-end)."
  },
  {
    key: "enligne",
    name: "En ligne",
    icon: "enligne",
    tagline: "En semaine, en soirée · partout au Maroc",
    image: images.sujokSession,
    points: [
      "Sessions de Sujok et d'Homéopathie",
      "Depuis chez vous, où que vous soyez",
      "Un suivi interactif à distance"
    ],
    whatsappMessage:
      "Bonjour Dr Boulaguiem, je souhaite être informé(e) des prochaines formations en ligne (en soirée, en semaine)."
  }
];
