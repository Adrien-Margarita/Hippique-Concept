'use client'

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Ici vous pourriez ajouter une API call pour enregistrer l'email
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 6000);
      setEmail('');
    }
  };

  return (
    <footer className="mt-8 border-t-2 border-[color:var(--gold)]">
      {/* Section supérieure du footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Colonne 1 - Logo et Description */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.jpg" alt="Logo Solaire Hippique Concept" className="w-48 mb-4" />
            <p className="text-sm text-center md:text-left mx-auto md:mx-0 max-w-sm">
              Solaire Hippique Concept est spécialisé dans la construction de bâtiments équestres 
              financés par des panneaux solaires. Notre entreprise familiale met son expertise
              au service des cavaliers dans toute la France.
            </p>
          </div>
          
          {/* Colonne 2 - Plan du site */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-[color:var(--gold)] pb-2">Plan du site</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-xs sm:text-sm hover:text-[color:var(--gold)] transition-colors duration-300">Accueil</Link></li>
                  <li><Link href="/batiments-solaires" className="text-xs sm:text-sm hover:text-[color:var(--gold)] transition-colors duration-300">Bâtiments</Link></li>
                  <li><Link href="/equipements" className="text-xs sm:text-sm hover:text-[color:var(--gold)] transition-colors duration-300">Équipements</Link></li>
                  <li><Link href="/constructions" className="text-xs sm:text-sm hover:text-[color:var(--gold)] transition-colors duration-300">Nos constructions</Link></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li><Link href="/a-propos" className="text-xs sm:text-sm hover:text-[color:var(--gold)] transition-colors duration-300">Qui sommes-nous</Link></li>
                  <li><Link href="/etude-faisabilite" className="text-xs sm:text-sm hover:text-[color:var(--gold)] transition-colors duration-300">Demander une étude</Link></li>
                  <li><Link href="/mentions-legales" className="text-xs sm:text-sm hover:text-[color:var(--gold)] transition-colors duration-300">Mentions légales</Link></li>
                  <li><Link href="/contact" className="text-xs sm:text-sm hover:text-[color:var(--gold)] transition-colors duration-300">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Colonne 3 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-[color:var(--gold)] pb-2">Newsletter</h3>
            <p className="text-sm mb-4">Restez informés de nos dernières réalisations et offres</p>
            <form onSubmit={handleSubscribe} className="flex flex-col">
              <div className="flex max-w-full">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] min-w-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="gold-bg text-white p-2 rounded-r-md whitespace-nowrap text-xs sm:text-sm hover:bg-[color:var(--gold)]/80 transition-colors duration-300">
                  S'abonner
                </button>
              </div>
              {subscribed && (
                <p className="gold-text font-bold text-sm mt-2">Merci pour votre inscription !</p>
              )}
            </form>
          </div>
        </div>
      </div>
      
      {/* Section inférieure du footer */}
      <div className="gold-bg py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1900px]">
          <div className="flex flex-col md:flex-row md:justify-center items-center">
            {/* Informations de contact */}
            <div className="flex flex-col md:flex-row items-center md:justify-center text-white mb-4 md:mb-0 w-full md:w-auto md:mx-auto">
              <div className="flex items-center justify-center mr-6 mb-2 md:mb-0">
                <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm">112 Rue du Docteur Guérin, 83210 La Farlède</span>
              </div>
              <div className="flex items-center justify-center mr-6 mb-2 md:mb-0">
                <FaPhone className="mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm">07.72.08.44.06</span>
              </div>
              <div className="flex items-center justify-center">
                <FaEnvelope className="mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm">etude.solaire.concept@gmail.com</span>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 md:ml-4 lg:ml-6">
              <a href="https://www.facebook.com/solaireconcept" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors duration-300">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/solaire.hippique.concept" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-4 text-center text-white text-xs">
            <p>© {new Date().getFullYear()} Solaire Hippique Concept - Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  );
}