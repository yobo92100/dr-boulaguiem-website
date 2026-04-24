import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Formations en homéopathie & Sujok au Maroc`,
  description:
    "Formations en homéopathie et Sujok au Maroc avec Dr Noureddine Boulaguiem, docteur en pharmacie."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
