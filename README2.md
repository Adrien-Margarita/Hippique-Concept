Structure :

mon-projet/
├── app/                      # Dossier principal (App Router)
│   ├── layout.js             # Layout principal
│   ├── page.js               # Page d'accueil
│   ├── batiments-solaires/   # Route pour Bâtiments Solaires
│   │   ├── page.js           # Page principale
│   │   ├── [categorie]/      # Route dynamique pour les sous-catégories
│   │   │   └── page.js       # Page de catégorie spécifique
│   ├── equipements-ecuries/  # Route pour Équipements d'écuries
│   │   ├── page.js
│   │   ├── [categorie]/
│   │   │   └── page.js
│   ├── constructions/        # Route pour Nos constructions
│   │   └── page.js
│   ├── a-propos/             # Route pour Qui sommes-nous
│   │   └── page.js
│   ├── contact/              # Route pour Contact
│   │   └── page.js
│   └── demande-etude/        # Route pour Demandez une étude
│       └── page.js
├── components/               # Composants réutilisables
│   ├── ui/                   # Composants d'interface
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   └── ContactForm.jsx
│   └── sections/             # Sections de page
│       ├── Hero.jsx
│       ├── ProductGrid.jsx
│       └── FeatureSection.jsx
├── lib/                      # Utilitaires et helpers
│   └── db.js                 # Futur fichier pour la connexion à la BDD
├── public/                   # Fichiers statiques (images, etc.)
├── styles/                   # Styles globaux
│   └── globals.css
└── data/                     # Données mockées pour commencer
    ├── categories.json
    ├── products.json
    └── projects.json


    Bonjour, tu es un developpeur confirmé. Nous sommes entrain de développer un site vitrine sous NextJs/ts/tailwind. Nous venons de faire la page d'accueil, en t'aidant de ce qu'on a fait, j'ai besoin d'effectuer la page Équipement d'écurie. Celle-ci va afficher les sous catégories en visuel pour avoir la liste des produits proposé par la société. actuellement c'est codé en dur, ils ont actuellement 8 produits, ça pourra un peu augmenter, j'aimerai dynamiser ça pour éviter de tout faire un par un à chaque fois qu'il y a un produit supprimé/nouveau produit Peux-tu m'aider à créer ça ? Si tu peux aussi m'aider sur le back, Je n'ai pas encore monté la BDD, mais je pense la faire avec prisma ou sequelize selon ce qui est le mieux. J'aimerai que tu m'aide à la faire aussi. Niveau données c'est assez simple, on va avoir les données des formulaires d'études de faisabilité/demande de contact, une table pour les prospects générés, une autre pour la newsletter (si tu juges ça bien), et un dernier sur les produits. Les produits ont un titre, une description, un prix (qui peux être null lorsqu'on ne veut pas l'afficher), éventuellement une livraison (qui peut aussi être null pour préciser sous devis), les produits pourront avoir un prix différent selon sa taille. Par exemple, un barns  pour 6 chevaux vaut 29 000€ HT, pour 12 55200 et pour 18 78600. idem pour les marcheurs qui peuvent être simple ou complet, ils peuvent faire 10M, 12M, 14M, 16M en simple et en complet et ont tous un prix différents. Que me conseilles tu pour la BDD ? Prisma est une bonne idée ou tu as mieux ? J'aimerai que tu m'aides sur tout ça. Pour la table Newsletter j'ai juste un email. Pour la table sur les prospects (appelle la au mieux par convention), c'est toutes les infos qui sont sur le formulaire d'étude de faisabilité. Peux-tu me dire sur les fichier que tu vas me créer où les placer dans le projet Next ?