import React from 'react';
import { Heart, Star, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Cuidados Especiais para
                <span className="text-pink-600 block">Seu Bebê</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Descubra tudo sobre os cuidados essenciais para recém-nascidos. Dicas práticas, 
                orientações seguras e muito carinho para você e seu pequeno tesouro.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Heart className="h-5 w-5 text-pink-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Cuidado Amoroso</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-pink-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Orientações Seguras</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Star className="h-5 w-5 text-pink-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Dicas Especiais</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors shadow-md hover:shadow-lg">
                Ver Dicas de Cuidados
              </button>
              <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1973270/pexels-photo-1973270.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mãe carinhosa com bebê"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Mais de 1000</p>
                  <p className="text-sm text-gray-600">Famílias Felizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;