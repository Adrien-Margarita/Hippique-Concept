'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* --- NAVIGATION DESKTOP --- */}
      <nav className="white-bg hidden lg:block w-full sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 xl:px-6 2xl:px-10">
          <ul className="flex justify-between items-center flex-wrap gap-2 xl:gap-3 py-2 text-base font-medium">
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 min-w-[100px]">
              <li>
                <a 
                  href="https://www.facebook.com/solaireconcept" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gold-text hover:scale-110 transition-transform duration-300"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/solaire.hippique.concept" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="gold-text hover:scale-110 transition-transform duration-300"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
            </div>

            <li>
              <Link 
                href="/" 
                className={`${isActive('/') ? 'gold-text font-bold' : 'hover:gold-text transition-colors'}`}
              >
                Accueil
              </Link>
            </li>

            {/* --- DROPDOWN Bâtiments --- */}
            <li className="relative group">
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
            <li className="relative group">
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
                  className="object-contain h-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[160px] xl:max-w-[180px] 2xl:max-w-[200px]"
                />
              </Link>
            </li>

            <li>
              <Link 
                href="/constructions" 
                className={`${isActive('/constructions') ? 'gold-text font-bold' : 'hover:gold-text transition-colors'}`}
              >
                Nos constructions
              </Link>
            </li>
            
            <li>
              <Link 
                href="/a-propos" 
                className={`${isActive('/a-propos') ? 'gold-text font-bold' : 'hover:gold-text transition-colors'}`}
              >
                Qui sommes-nous ?
              </Link>
            </li>
            
            <li className="whitespace-nowrap">
              <Link 
                href="/etude-faisabilite" 
                className="text-white px-3 py-2 lg:px-3 xl:px-4 gold-bg rounded-xl hover:shadow-lg hover:brightness-110 transition-all duration-300"
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
            className="gold-text hover:scale-110 transition-transform duration-300"
            type="button"
          >
            {isMobileOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
          </button>
        </div>

        {isMobileOpen && (
          <ul className="flex flex-col space-y-4 px-4 pb-6 pt-4 text-sm font-medium shadow max-h-[80vh] overflow-y-auto">
            <li className="font-semibold"><Link href="/" onClick={() => setIsMobileOpen(false)}>Accueil</Link></li>

            <li><Link href="/batiments-solaires" className="font-semibold">Bâtiments</Link>
              <ul className="pl-4 mt-2 text-sm space-y-1">
                <li><Link href="/batiments-solaires/batiments-equestres" onClick={() => setIsMobileOpen(false)}>Bâtiments Équestres</Link></li>
                <li><Link href="/batiments-solaires/categorie-2" onClick={() => setIsMobileOpen(false)}>Catégorie 2</Link></li>
                <li><Link href="/batiments-solaires/categorie-3" onClick={() => setIsMobileOpen(false)}>Catégorie 3</Link></li>
              </ul>
            </li>

            <li><Link href="/equipements-ecuries" className="font-semibold">Équipements d'écuries</Link>
              <ul className="pl-4 mt-2 space-y-1">
                <li><Link href="/equipements-ecuries/barns" onClick={() => setIsMobileOpen(false)}>Barns</Link></li>
                <li><Link href="/equipements-ecuries/boxes" onClick={() => setIsMobileOpen(false)}>Boxes</Link></li>
                <li><Link href="/equipements-ecuries/pare-botte" onClick={() => setIsMobileOpen(false)}>Pare Botte</Link></li>
                <li><Link href="/equipements-ecuries/herse" onClick={() => setIsMobileOpen(false)}>Herse de carrière</Link></li>
              </ul>
            </li>

            <li className="font-semibold"><Link href="/constructions" onClick={() => setIsMobileOpen(false)}>Nos constructions</Link></li>
            <li className="font-semibold"><Link href="/a-propos" onClick={() => setIsMobileOpen(false)}>Qui sommes-nous ?</Link></li>

            <li>
              <Link 
                href="/etude-faisabilite" 
                onClick={() => setIsMobileOpen(false)} 
                className="block text-center bg-[var(--gold)] text-white p-2 rounded-md hover:shadow-lg hover:brightness-110 transition-all duration-300"
              >
                Demandez une étude
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}