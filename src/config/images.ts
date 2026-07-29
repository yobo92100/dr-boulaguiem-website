/**
 * Curated stock imagery (Unsplash) used across the site as premium placeholders.
 *
 * To swap in the real photos of Dr Boulaguiem and the trainings, replace the
 * URLs below with your own image paths (e.g. "/images/portrait.jpg" placed in
 * the /public folder). Every image on the site flows from this single file.
 */

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Pharmacy / natural remedies
  supplements: unsplash("1512069772995-ec65ed45afd6", 1000), // gold & blue capsules macro
  pillsFlat: unsplash("1631549916768-4119b2e5f926", 1000), // blister packs flat-lay

  // Botanical
  eucalyptus: unsplash("1466781783364-36c955e42a7f", 1100), // eucalyptus in glass vase
  veggies: unsplash("1610348725531-843dff563e2c", 1100), // fresh produce around board
  healthyBowl: unsplash("1490645935967-10de6ba17061", 1100), // nourishing bowl on wood
  soil: unsplash("1416879595882-3373a0480b5b", 1000), // earthy soil & scoop

  // Therapy / hands-on (Sujok)
  hotStone: unsplash("1600334129128-685c5582fd35", 1100), // hands-on stone therapy
  therapyBW: unsplash("1591343395082-e120087004b4", 1100), // outdoor therapy, black & white

  // Wellness / balance
  yoga: unsplash("1519494026892-80bbd2d6fd0d", 1300), // yoga silhouette at sunset
  spaStill: unsplash("1540555700478-4be289fbecef", 1100), // spa still life

  // Teaching
  seminar: unsplash("1524178232363-1fb2b075b655", 1300) // training seminar room
};

export type ImageKey = keyof typeof images;
