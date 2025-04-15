'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  const isActive = (path: string) => pathname === path;
  
  const toggleExpand = (category: string) => {
    setExpandedItems(prev => 
      prev.includes(category) 
        ? prev.filter(item => item !== category) 
        : [...prev, category]
    );
  };
  
  const isExpanded = (category: string) => expandedItems.includes(category);

  return (
    <>
      {/* --- NAVIGATION DESKTOP --- */}
      <nav className="white-bg hidden lg:block w-full sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 xl:px-6 2xl:px-10">
          <ul className="flex justify-between items-center flex-wrap py-2 text-sm xl:text-base font-medium">
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 min-w-[80px]">
              <li>
                <a 
                  href="https://www.facebook.com/solaireconcept" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block"
                >
                  <FaFacebook className="w-6 h-6 gold-text transform transition-all duration-300 hover:scale-125" />
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/solaire.hippique.concept" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block"
                >
                  <FaInstagram className="w-6 h-6 gold-text transform transition-all duration-300 hover:scale-125" />
                </a>
              </li>
            </div>

            <li className="px-1 lg:px-2">
              <Link 
                href="/" 
                className={`${isActive('/') ? 'gold-text font-bold' : 'hover:gold-text transition-colors'}`}
              >
                Accueil
              </Link>
            </li>

            {/* --- DROPDOWN Bâtiments --- */}
            <li className="relative group px-1 lg:px-2">
              <Link
                href="/batiments-solaires"
                className={`${isActive('/batiments-solaires') ? 'gold-text font-bold' : 'hover:gold-text transition-colors'}`}
              >
                Bâtiments
              </Link>

              <ul className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100 white-bg shadow-md z-50 text-left text-sm min-w-[200px] rounded-md overflow-hidden">
                <li><Link href="/batiments-solaires/batiments-equestres" className="block px-4 py-2 hover:bg-gray-100 hover:gold-text transition-colors">Bâtiments Équestres</Link></li>
                <li><Link href="/batiments-solaires/categorie-2" className="block px-4 py-2 hover:bg-gray-100 hover:gold-text transition-colors">Catégorie 2</Link></li>
                <li><Link href="/batiments-solaires/categorie-3" className="block px-4 py-2 hover:bg-gray-100 hover:gold-text transition-colors">Catégorie 3</Link></li>
              </ul>
            </li>

            {/* --- DROPDOWN Équipements --- */}
            <li className="relative group px-1 lg:px-2">
              <Link 
                href="/equipements-ecuries" 
                className={`${isActive('/equipements-ecuries') ? 'gold-text font-bold' : 'hover:gold-text transition-colors'}`}
              >
                Équipements d'écuries
              </Link>
              <ul className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100 white-bg shadow-md z-50 text-left text-sm min-w-[200px] rounded-md overflow-hidden">
                <li><Link href="/equipements-ecuries/barns" className="block px-4 py-2 hover:bg-gray-100 hover:gold-text transition-colors">Barns</Link></li>
                <li><Link href="/equipements-ecuries/boxes" className="block px-4 py-2 hover:bg-gray-100 hover:gold-text transition-colors">Boxes</Link></li>
                <li><Link href="/equipements-ecuries/pare-botte" className="block px-4 py-2 hover:bg-gray-100 hover:gold-text transition-colors">Pare Botte</Link></li>
                <li><Link href="/equipements-ecuries/herse" className="block px-4 py-2 hover:bg-gray-100 hover:gold-text transition-colors">Herse de carrière</Link></li>
              </ul>
            </li>

            {/* Logo */}
            <li className="flex-shrink-0 mx-0 xl:mx-2">
              <Link href="/">
                <img src="/logo.jpg" 
                alt="Logo" 
                  className="object-contain h-auto max-w-[100px] lg:max-w-[120px] xl:max-w-[160px] 2xl:max-w-[180px]"
                />
              </Link>
            </li>

            <li className="px-1 lg:px-2">
              <Link 
                href="/constructions" 
                className={`${isActive('/constructions') ? 'gold-text font-bold' : 'hover:gold-text transition-colors'}`}
              >
                Nos constructions
              </Link>
            </li>
            
            <li className="px-1 lg:px-2">
              <Link 
                href="/a-propos" 
                className={`${isActive('/a-propos') ? 'gold-text font-bold' : 'hover:gold-text transition-colors'} text-sm xl:text-base`}
              >
                À propos
              </Link>
            </li>
            
            <li className="whitespace-nowrap ml-1">
              <Link 
                href="/etude-faisabilite" 
                className="text-white px-2 py-2 lg:px-3 xl:px-4 gold-bg rounded-xl hover:shadow-lg hover:brightness-110 transition-all duration-300 text-sm xl:text-base"
              >
                Demandez une étude
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* --- NAVIGATION MOBILE --- */}
      <nav className="block lg:hidden w-full white-bg sticky top-0 z-50 px-3 py-2 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img src="/logo.jpg" alt="Logo Solaire Hippique Concept" className="max-h-20 w-auto" />
          </Link>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileOpen}
            className="gold-bg text-white p-2 rounded-md transform transition-all duration-300 hover:scale-105"
            type="button"
          >
            {isMobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile optimisé avec animation */}
        <div 
        className={`fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsMobileOpen(false)}
        onKeyDown={(e) => e.key === 'Escape' && setIsMobileOpen(false)}
        role="button"
        tabIndex={0}
        />
        <div 
          className={`fixed right-0 top-0 h-full w-4/5 bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-bold gold-text">Menu</h2>
            <button
            onClick={() => setIsMobileOpen(false)}
            aria-label="Fermer le menu"
            className="text-gray-500 hover:text-gray-700"
            type="button"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          <ul className="py-2">
            <li className="border-b border-gray-100">
              <Link 
                href="/" 
                onClick={() => setIsMobileOpen(false)}
                className={`block px-4 py-3 ${isActive('/') ? 'gold-text font-bold' : ''}`}
              >
                Accueil
              </Link>
            </li>

            {/* Bâtiments avec accordéon */}
            <li className="border-b border-gray-100">
              <div className="flex justify-between items-center px-4 py-3">
                <Link 
                  href="/batiments-solaires"
                  onClick={(e) => {
                    if (isExpanded('batiments')) {
                      e.preventDefault();
                      toggleExpand('batiments');
                    } else {
                      setIsMobileOpen(false);
                    }
                  }}
                  className={isActive('/batiments-solaires') ? 'gold-text font-bold' : ''}
                >
                  Bâtiments
                </Link>
                <button 
                  onClick={() => toggleExpand('batiments')}
                  className="p-1"
                  type='button'
                >
                <svg 
                className={`w-4 h-4 transition-transform ${isExpanded('batiments') ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
                >
                    <title>Flèche d'expansion</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className={`overflow-hidden transition-all duration-300 ${isExpanded('batiments') ? 'max-h-40' : 'max-h-0'}`}>
                <ul className="bg-gray-50">
                  <li>
                    <Link 
                      href="/batiments-solaires/batiments-equestres" 
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-8 py-2 hover:gold-text"
                    >
                      Bâtiments Équestres
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/batiments-solaires/categorie-2" 
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-8 py-2 hover:gold-text"
                    >
                      Catégorie 2
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/batiments-solaires/categorie-3" 
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-8 py-2 hover:gold-text"
                    >
                      Catégorie 3
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Équipements avec accordéon */}
            <li className="border-b border-gray-100">
              <div className="flex justify-between items-center px-4 py-3">
                <Link 
                  href="/equipements-ecuries"
                  onClick={(e) => {
                    if (isExpanded('equipements')) {
                      e.preventDefault();
                      toggleExpand('equipements');
                    } else {
                      setIsMobileOpen(false);
                    }
                  }}
                  className={isActive('/equipements-ecuries') ? 'gold-text font-bold' : ''}
                >
                  Équipements d'écuries
                </Link>
                <button 
                  onClick={() => toggleExpand('equipements')}
                  className="p-1"
                  type='button'
                >
                  <svg 
                    className={`w-4 h-4 transition-transform ${isExpanded('equipements') ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <title>Flèche d'expansion</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <div className={`overflow-hidden transition-all duration-300 ${isExpanded('equipements') ? 'max-h-40' : 'max-h-0'}`}>
                <ul className="bg-gray-50">
                  <li>
                    <Link 
                      href="/equipements-ecuries/barns" 
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-8 py-2 hover:gold-text"
                    >
                      Barns
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/equipements-ecuries/boxes" 
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-8 py-2 hover:gold-text"
                    >
                      Boxes
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/equipements-ecuries/pare-botte" 
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-8 py-2 hover:gold-text"
                    >
                      Pare Botte
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/equipements-ecuries/herse" 
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-8 py-2 hover:gold-text"
                    >
                      Herse de carrière
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="border-b border-gray-100">
              <Link 
                href="/constructions" 
                onClick={() => setIsMobileOpen(false)}
                className={`block px-4 py-3 ${isActive('/constructions') ? 'gold-text font-bold' : ''}`}
              >
                Nos constructions
              </Link>
            </li>

            <li className="border-b border-gray-100">
              <Link 
                href="/a-propos" 
                onClick={() => setIsMobileOpen(false)}
                className={`block px-4 py-3 ${isActive('/a-propos') ? 'gold-text font-bold' : ''}`}
              >
                À propos
              </Link>
            </li>
          </ul>

          <div className="p-4 mt-4">
            <Link 
              href="/etude-faisabilite" 
              onClick={() => setIsMobileOpen(false)} 
              className="block text-center bg-[var(--gold)] text-white p-3 rounded-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
            >
              Demandez une étude
            </Link>
          </div>

          <div className="p-4 border-t border-gray-200 flex justify-center space-x-6">
            <a 
              href="https://www.facebook.com/solaireconcept" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block transform transition-all duration-300 hover:scale-125"
            >
              <FaFacebook className="w-6 h-6 gold-text" />
            </a>
            <a 
              href="https://instagram.com/solaire.hippique.concept" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block transform transition-all duration-300 hover:scale-125"
            >
              <FaInstagram className="w-6 h-6 gold-text" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}