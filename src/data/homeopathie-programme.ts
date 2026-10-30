import programme from "./homeopathie-programme.json";

// The JSON is shared with the PDF template in print/programme-homeopathie.html.

export type HomeopathieModule = {
  title: string;
  objective?: string;
  listLabel: string;
  items: string[];
  remedies: string[];
  practice: string;
  evaluation: string;
};

export const homeopathieProgrammePdf = "/programme-formation-homeopathie-dr-boulaguiem.pdf";

export const homeopathieModules: HomeopathieModule[] = programme.modules;
