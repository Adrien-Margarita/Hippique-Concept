'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navigation() {
    const pathname = usePathname()
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const isActive = (path: string) => pathname === path;

  return (
 <>
{/* Version Desktop */}
    <nav className='white-bg hidden md:block w-full'>
        <div className='font-medium text-sm'>
            <ul className='flex flex-nowrap gap-3 justify-between items-center w-full px-4 text-sm'>
            {/* Réseaux sociaux */}
            <div className="flex min-w-[120px]">
                <li>
                    <a href="https://www.facebook.com/solaireconcept" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="w-8 h-8 gold-text" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/solaire.hippique.concept" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-8 h-8 gold-text ml-3" />
                    </a>
                </li>
            </div>
            
                <li>
                    <Link href="/" className={isActive('/') ? 'gold-text font-bold' : ''}>
                        Accueil
                    </Link>
                </li>

                <li className='relative group'>
                    <div className='relative z-10'>
                        <Link href="/batiments-solaires" className={isActive('/batiments-solaires') ? 'gold-text font-bold' : ''}
                        >
                        Bâtiments
                        </Link>
                    </div>
                    <ul className="absolute top-full left-0 mt-2 hidden group-hover:flex group-hover:flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-200 white-bg shadow-md z-50 text-left text-sm min-w-[200px]">

                        <li>
                            <Link href="/batiments-solaires/batiments-equestres" className='block px-4 py-2 hover:bg-gray-100'>
                                Bâtiments Équestres
                            </Link>
                        </li>
                        {/* TODO: Modifier les catégories (chemin + Titre) */}
                        <li>
                            <Link href="/batiments-solaires/categorie-2" className="block px-4 py-2 hover:bg-gray-100">
                                Catégorie 2
                            </Link>
                        </li>
                        <li>
                            <Link href="/batiments-solaires/categorie-3" className="block px-4 py-2 hover:bg-gray-100">
                                Catégorie 3
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* TODO: Modifier les catégories (chemin + Titre) */}
                <li className="relative group">
                    <Link href="/equipements-ecuries" className={isActive('/equipements-ecuries') ? 'gold-text font-bold' : ''}>
                        Équipements d'écuries
                    </Link>
                    <ul className="absolute top-full left-0 mt-2 hidden group-hover:block white-bg shadow-md rounded-md z-50 text-left text-sm min-w-[200px]">
                        <li>
                            <Link href="/equipements-ecuries/barns" className="block px-4 py-2 hover:bg-gray-100">
                                Barns
                            </Link>
                        </li>
                        <li>
                            <Link href="/equipements-ecuries/boxes" className="block px-4 py-2 hover:bg-gray-100">
                                Boxes
                            </Link>
                        </li>
                        <li>
                            <Link href="/equipements-ecuries/pare-botte" className="block px-4 py-2 hover:bg-gray-100">
                                Pare Botte
                            </Link>
                        </li>
                        <li>
                            <Link href="/equipements-ecuries/herse" className="block px-4 py-2 hover:bg-gray-100">
                                Herse de carrière
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* Logo */}
                <li>
                    <Link href="/">
                    <img src="/logo.jpg" alt="Logo" className="w-60 max-w-full object-contain" />
                    </Link>
                </li>

                <li>
                    <Link href="/constructions" className={isActive('/constructions') ? 'gold-text font-bold' : ''}>
                        Nos constructions
                    </Link>
                </li>
                <li>
                    <Link href="/a-propos" className={isActive('/a-propos') ? 'gold-text font-bold' : ''}>
                        Qui sommes-nous ?
                    </Link>
                </li>
                <li className='text-white p-3 gold-bg rounded-xl'>
                    <Link href="/etude-faisabilite">
                        Demandez une étude
                    </Link>
                </li>
            </ul>
        </div>
    </nav>

{/* Version Mobile */}
    <nav className='block md:hidden w-full white-bg z-50'>
        <div className='flex items-center justify-between'>
            <Link href="/">
                <img src="/logo.jpg" alt="Logo Solaire Hippique Concept" className='h-30 w-auto'/>
            </Link>
            
            <button 
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle Menu"
                className="gold-text"
            >
                {isMobileOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
            </button>
        </div>

        {isMobileOpen && (
            <ul className='flex flex-col space-y-4 px-4 pb-4 text-sm font-medium shadow'>
                <li className="font-semibold"><Link href="/" onClick={() => setIsMobileOpen(false)}>Accueil</Link></li>

                <li><Link href="/batiments-solaires" className="font-semibold">Bâtiments</Link>
                    <ul className="pl-4 mt-2 text-sm space-y-1">
                    <li><Link href="/batiments-solaires/batiments-equestres">Bâtiments Équestres</Link></li>
                    <li><Link href="/batiments-solaires/categorie-2">Catégorie 2</Link></li>
                    <li><Link href="/batiments-solaires/categorie-3">Catégorie 3</Link></li>
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
                    className="block text-center bg-[var(--gold)] text-white p-2 rounded-md"
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