import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Consultations & formations en homéopathie et Sujok — Casablanca`,
  description:
    "Consultations en homéopathie et Sujok au cabinet de Casablanca, et formations partout au Maroc, avec Dr Noureddine Boulaguiem, docteur en pharmacie. Prise de rendez-vous en ligne.",
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: `${siteConfig.name} | Consultations & formations en homéopathie et Sujok`,
    description:
      "Consultations à Casablanca et formations partout au Maroc — une approche naturelle, claire et personnalisée.",
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${fraunces.variable} bg-cream font-sans text-ink antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
