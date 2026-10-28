import Link from "next/link";
import { ArrowRightIcon, HandIcon, LeafIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { images } from "@/config/images";

const disciplines = [
  {
    name: "Homéopathie",
    href: "/homeopathie",
    image: images.homeo1,
    icon: LeafIcon,
    text: "Une découverte progressive des principes fondamentaux à travers des cas concrets, un vocabulaire clair et un cadre d'usage responsable."
  },
  {
    name: "Sujok",
    href: "/sujok",
    image: images.sujokBall,
    icon: HandIcon,
    text: "Apprenez à soulager la douleur et les tensions du quotidien par la stimulation de points précis des mains et des pieds. Accessible sans prérequis médical."
  }
];

export function DisciplineCards() {
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-2">
      {disciplines.map((d, i) => (
        <Reveal key={d.name} delay={i * 120}>
          <Link
            href={d.href}
            className="img-zoom group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-4xl shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={d.image}
              alt={d.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/35 to-transparent" />
            <div className="relative p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 text-cream ring-1 ring-cream/25 backdrop-blur">
                <d.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-cream">
                {d.name}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-cream/80">
                {d.text}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-light">
                En savoir plus
                <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
