'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 relative flex items-center justify-between">
        {/* Réseaux sociaux */}
        <div className="flex space-x-4 min-w-[120px]">
          <a href="https://www.facebook.com/solaireconcept" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-5 h-5" style={{ color: 'var(--gold)' }} />
          </a>
          <a href="https://instagram.com/solaire.hippique.concept" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-5 h-5" style={{ color: 'var(--gold)' }} />
          </a>
        </div>

        {/* Logo centré dans la nav */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
          <Link href="/">
            <img src="/logo.jpg" alt="Logo Hippique Concept" className="h-12 w-auto" />
          </Link>
        </div>

        {/* Menu desktop */}
        <ul className="hidden lg:flex space-x-6 items-center justify-end flex-1">
          {[
            { title: 'Accueil', path: '/' },
            {
              title: 'Bâtiments Solaires',
              path: '/batiments-solaires',
              submenu: [
                { title: 'Bâtiments Équestres', path: '/batiments-solaires/batiments-equestres' },
                { title: 'Catégorie 2', path: '/batiments-solaires/categorie-2' },
                { title: 'Catégorie 3', path: '/batiments-solaires/categorie-3' },
              ],
            },
            {
              title: "Équipements d'écuries",
              path: '/equipements-ecuries',
              submenu: [
                { title: 'Barns', path: '/equipements-ecuries/barns' },
                { title: 'Boxes', path: '/equipements-ecuries/boxes' },
                { title: 'Pare Botte', path: '/equipements-ecuries/pare-botte' },
                { title: 'Herse de carrière', path: '/equipements-ecuries/herse' },
              ],
            },
            { title: 'Nos Constructions', path: '/constructions' },
            { title: 'Qui Sommes-Nous', path: '/a-propos' },
            { title: 'Contact', path: '/contact' },
            {
              title: 'Demandez une étude',
              path: '/demande-etude',
              isButton: true,
            },
          ].map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveMenu(index)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.path}
                className={`px-2 py-1 transition ${
                  item.isButton
                    ? 'bg-[var(--gold)] text-white rounded-md font-semibold hover:opacity-90'
                    : pathname === item.path
                    ? 'text-[var(--gold)] font-bold'
                    : 'hover:text-[var(--gold)]'
                }`}
              >
                {item.title}
              </Link>

              {/* Sous-menu desktop */}
              {item.submenu && (
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md py-2 z-50 w-56">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.path}
                        className={`block px-4 py-2 text-sm hover:bg-gray-100 transition ${
                          pathname === subItem.path ? 'text-[var(--gold)] font-semibold' : ''
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Bouton menu burger */}
        <button
          className="lg:hidden z-30"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <HiX className="w-6 h-6 text-[var(--gold)]" />
          ) : (
            <HiMenu className="w-6 h-6 text-[var(--gold)]" />
          )}
        </button>

        {/* Menu mobile (slide-down) */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-md z-40 py-4">
            <ul className="flex flex-col space-y-4 px-4">
              {[
                { title: 'Accueil', path: '/' },
                {
                  title: 'Bâtiments Solaires',
                  path: '/batiments-solaires',
                  submenu: [
                    { title: 'Bâtiments Équestres', path: '/batiments-solaires/batiments-equestres' },
                    { title: 'Catégorie 2', path: '/batiments-solaires/categorie-2' },
                    { title: 'Catégorie 3', path: '/batiments-solaires/categorie-3' },
                  ],
                },
                {
                  title: "Équipements d'écuries",
                  path: '/equipements-ecuries',
                  submenu: [
                    { title: 'Barns', path: '/equipements-ecuries/barns' },
                    { title: 'Boxes', path: '/equipements-ecuries/boxes' },
                    { title: 'Pare Botte', path: '/equipements-ecuries/pare-botte' },
                    { title: 'Herse de carrière', path: '/equipements-ecuries/herse' },
                  ],
                },
                { title: 'Nos Constructions', path: '/constructions' },
                { title: 'Qui Sommes-Nous', path: '/a-propos' },
                { title: 'Contact', path: '/contact' },
                {
                  title: 'Demandez une étude',
                  path: '/demande-etude',
                  isButton: true,
                },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-2 py-1 transition ${
                      item.isButton
                        ? 'bg-[var(--gold)] text-white rounded-md font-semibold text-center'
                        : pathname === item.path
                        ? 'text-[var(--gold)] font-bold'
                        : 'hover:text-[var(--gold)]'
                    }`}
                  >
                    {item.title}
                  </Link>

                  {/* Sous-menu mobile */}
                  {item.submenu && (
                    <ul className="pl-4 mt-2 space-y-1">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm text-gray-700 hover:text-[var(--gold)]"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
