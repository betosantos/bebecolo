import React, { useState } from 'react';
import { Menu, X, Baby, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-pink-100 p-2 rounded-full">
              <Baby className="h-6 w-6 text-pink-600" />
            </div>
            <span className="text-xl font-bold text-gray-800">CarinhoBaby</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Início
            </a>
            <a href="#cuidados" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Cuidados
            </a>
            <a href="#dicas" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Dicas
            </a>
            <a href="#galeria" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Galeria
            </a>
            <a href="#contato" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Contato
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#inicio"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                onClick={toggleMenu}
              >
                Início
              </a>
              <a
                href="#cuidados"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                onClick={toggleMenu}
              >
                Cuidados
              </a>
              <a
                href="#dicas"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                onClick={toggleMenu}
              >
                Dicas
              </a>
              <a
                href="#galeria"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                onClick={toggleMenu}
              >
                Galeria
              </a>
              <a
                href="#contato"
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors"
                onClick={toggleMenu}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;