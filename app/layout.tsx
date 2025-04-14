import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/ui/Header";

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
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
