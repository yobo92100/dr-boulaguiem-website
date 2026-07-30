/**
 * Site imagery — served from /public/images.
 *
 * DRAFT placeholders (AI-generated portraits of Dr Boulaguiem + thematic shots).
 * To change a photo: drop a new file in public/images/ and update the path below.
 * Everything on the site flows from this single file.
 */

export const images = {
  // Dr Boulaguiem
  heroPortrait: "/images/hero.jpg", // hero — smiling, Sujok session, plants
  portrait: "/images/apropos.jpg", // head-and-shoulders portrait (À propos)
  teaching: "/images/lamethode.jpg", // teaching with microphone (landscape)
  teachingAlt: "/images/seminaire.jpg", // teaching, portrait orientation
  sujokSession: "/images/sujok-session.jpg", // focused Sujok session (portrait)
  sessionWide1: "/images/consult2.jpg", // examining wrist (wide)
  sessionWide2: "/images/consult3.jpg", // Sujok with a participant (wide)

  // Homéopathie (thematic)
  homeo1: "/images/homeo1.jpg", // pellet jar + blossoms (soft pink)
  homeo2: "/images/homeo2.jpg", // apothecary bottles + wildflowers (warm)

  // Sujok (thematic)
  sujokRing: "/images/sujok-ring.jpg", // Sujok spring ring on a finger
  sujokBall: "/images/sujok-ball.jpg", // spiky Sujok ball on a foot
  sujokDiagram: "/images/sujok-diagram.png", // reflexology foot map (illustration)

  // Participant avatars (hero trust row)
  participant1: "/images/participant1.jpg",
  participant2: "/images/participant2.jpg",
  participant3: "/images/participant3.jpg"
};

export type ImageKey = keyof typeof images;
