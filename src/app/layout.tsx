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
  title: `${siteConfig.name} | Formations en homéopathie & Sujok au Maroc`,
  description:
    "Formations en homéopathie et Sujok au Maroc avec Dr Noureddine Boulaguiem, docteur en pharmacie. Une pédagogie claire et complémentaire, partout à travers le Maroc.",
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: `${siteConfig.name} | Formations en homéopathie & Sujok`,
    description:
      "Formations en homéopathie et Sujok au Maroc — une pédagogie claire et complémentaire.",
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
