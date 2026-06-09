'use client';

import { useState } from 'react';
import { Menu, X, Car } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Start', href: '#start' },
    { name: 'Über uns', href: '#about' },
    { name: 'Ausbildung', href: '#classes' },
    { name: 'Theorie', href: '#theory' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#start" className="flex items-center gap-2">
              <div className="relative w-48 h-16">
                <Image 
                  src="/logo.png" 
                  alt="Fahrschule Astrid Dietz"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-brand-blue font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-brand-blue hover:bg-brand-blue-dark text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              JETZT STARTEN
            </a>
          </div>

           {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-medium text-slate-800 hover:text-brand-blue hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-3 py-4 text-center rounded-md text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-dark shadow-md"
            >
              JETZT STARTEN
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
