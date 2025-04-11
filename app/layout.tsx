import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/ui/Header";
import Navigation from "./components/ui/Navigation";


// Police d'écriture du site, accès via --font-montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Modification des poids nécessaires (regular et bold)
});

//TODO: Modifier le metaTitle/description pour SEO
export const metadata: Metadata = {
  title: "Hippique Concept, Bâtiments solaires et équipements d\'écuries",
  description: "Découvrez notre expertise dans la construction de bâtiments agricoles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} antialiased mr-10 ml-10`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
