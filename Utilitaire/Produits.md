# Listing Produits

Barns
Description : Les barns sont des structures conçues pour abriter les chevaux, offrant un espace lumineux, pratique et performant. Elles sont fabriquées avec des matériaux de haute qualité, garantissant durabilité et sécurité.
Caractéristiques :

Matériaux : Acier galvanisé à chaud et planches en résine plastique 32mm.
Conception : Modulaire et personnalisable.
Options : Possibilité d'intégrer des boxes et autres équipements équestres.
Boxes
Description : Les boxes sont des espaces individuels conçus pour offrir un environnement confortable et sécurisé aux chevaux. Ils sont fabriqués sur mesure pour répondre aux besoins spécifiques de chaque client.
Caractéristiques :

Matériaux : Bois traité, acier galvanisé.
Options : Différentes tailles et configurations disponibles.
Sécurité : Conçus pour assurer la sécurité des chevaux et des cavaliers.
Herse de Carrière
Description : La herse de carrière est un outil essentiel pour l'entretien des sols équestres. Elle permet de niveler et d'aérer le sol, assurant ainsi une surface optimale pour les chevaux.
Caractéristiques :

Matériaux : Acier galvanisé.
Utilisation : Adaptée pour différents types de sols équestres.
Options : Personnalisable selon les besoins spécifiques.
Lices en Acier Galvanisé
Description : Les lices en acier galvanisé sont des éléments de clôture utilisés pour délimiter les espaces dans les écuries. Elles sont conçues pour offrir une solution durable et esthétique.
Caractéristiques :

Matériaux : Acier galvanisé à chaud.
Conception : Modulaire et personnalisable.
Options : Différentes hauteurs et configurations disponibles.
Pare-Botte
Description : Le pare-botte est un élément de sécurité essentiel dans les manèges équestres. Il est conçu pour protéger les chevaux et les cavaliers des blessures.
Caractéristiques :

Matériaux : Bois traité, acier galvanisé.
Conception : Galbé pour une meilleure esthétique et fonctionnalité.
Options : Personnalisable selon les dimensions du manège.
Cavalettis
Description : Les cavalettis sont des obstacles utilisés pour l'entraînement des chevaux. Ils sont conçus pour être modulables et légers, permettant une grande variété d'exercices.
Caractéristiques :

Matériaux : Bois, plastique.
Utilisation : Adaptés pour différents niveaux d'entraînement.
Options : Différentes hauteurs et configurations disponibles.
Marcheur
Description : Le marcheur est un équipement utilisé pour l'exercice des chevaux. Il permet de faire travailler les chevaux en toute sécurité, avec des options de réglage de la vitesse et de la direction.
Caractéristiques :

Matériaux : Acier galvanisé.
Conception : Modulaire et personnalisable.
Options : Différentes tailles disponibles selon les besoins.
Élément en Acier Galvanisé
Description : Les éléments en acier galvanisé sont utilisés pour diverses structures dans les écuries, offrant durabilité et résistance à la corrosion.
Caractéristiques :

Matériaux : Acier galvanisé à chaud.
Utilisation : Adapté pour différentes structures équestres.
Options : Personnalisable selon les besoins spécifiques.
Boxes
Pour la catégorie "Boxes", il serait judicieux de créer plusieurs sous-catégories dans votre base de données Prisma, telles que :

Box Intérieur : Pour les boxes situés à l'intérieur des bâtiments.
Box Extérieur : Pour les boxes situés à l'extérieur.
Box Paddock : Pour les boxes utilisés dans les paddocks.
Cela permettra de mieux organiser les produits et de faciliter les recherches et les filtres dans votre base de données.

Liste des Boxes
Voici la liste des boxes disponibles :

Box Intérieur Standard

Description : Box intérieur standard pour abriter les chevaux.
Prix de base : N/A (sur devis)
Catégorie : Box Intérieur
Box Extérieur Modulaire

Description : Box extérieur modulaire et personnalisable.
Prix de base : N/A (sur devis)
Catégorie : Box Extérieur
Box Paddock Sécurisé

Description : Box paddock sécurisé pour les chevaux en extérieur.
Prix de base : N/A (sur devis)
Catégorie : Box Paddock

## Ancien schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model ProductCategory {
  id        Int       @id @default(autoincrement())
  name      String
  imageUrl  String
  products  Product[]
}

model Product {
  id            Int             @id @default(autoincrement())
  title         String
  description   String
  basePrice     Float?          // null si prix sur devis
  deliveryInfo  String?         // null si devis
  categoryId    Int
  category      ProductCategory @relation(fields: [categoryId], references: [id])
  variants      ProductVariant[]
}

model ProductVariant {
  id        Int     @id @default(autoincrement())
  label     String
  price     Float
  productId Int
  product   Product @relation(fields: [productId], references: [id])
}

model Prospect {
  id              Int     @id @default(autoincrement())
  nom             String
  prenom          String
  telephone       String
  email           String
  ville           String
  codePostal      String
  sectionParcelle String
  numeroParcelle  String
  message         String?
  createdAt       DateTime @default(now())
}

model NewsletterSubscriber {
  id           Int      @id @default(autoincrement())
  email        String   @unique
  subscribedAt DateTime @default(now())
}

model adminUser {
  id       Int    @id @default(autoincrement())
  email    String @unique
  password String
  name     String?
}
