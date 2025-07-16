import React from 'react';
import { Baby, Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-pink-600 p-2 rounded-full">
                <Baby className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">CarinhoBaby</span>
            </div>
            <p className="text-gray-400 text-sm">
              Cuidados especiais para o seu bebê, com muito amor e carinho. 
              Orientações seguras para os primeiros anos de vida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cuidados" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Cuidados
                </a>
              </li>
              <li>
                <a href="#dicas" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Dicas
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Orientação para Pais
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Dicas de Alimentação
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Cuidados de Higiene
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Desenvolvimento Infantil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  Suporte 24h
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-pink-400" />
                <span className="text-gray-400 text-sm">(11) 92004-2923</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-pink-400" />
                <span className="text-gray-400 text-sm">oliveira.roberto@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-pink-400" />
                <span className="text-gray-400 text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CarinhoBaby. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              Feito com <Heart className="h-4 w-4 text-pink-400 mx-1" /> para famílias brasileiras
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;