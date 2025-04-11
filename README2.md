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