import React from 'react';
import { Droplets, Moon, Utensils, Thermometer, Baby, Heart } from 'lucide-react';

const CareSection = () => {
  const careCards = [
    {
      icon: Droplets,
      title: "Higiene e Banho",
      description: "Aprenda as técnicas corretas para dar banho no seu bebê com segurança e carinho.",
      image: "https://images.pexels.com/photos/914253/pexels-photo-914253.jpeg?auto=compress&cs=tinysrgb&w=600",
      tips: ["Água morna (36-37°C)", "Produtos específicos para bebês", "Movimentos suaves"]
    },
    {
      icon: Utensils,
      title: "Alimentação",
      description: "Orientações sobre amamentação, introdução alimentar e nutrição adequada.",      
      image: "https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=600",
      tips: ["Amamentação exclusiva até 6 meses", "Horários regulares", "Posição correta"]
    },
    {
      icon: Moon,
      title: "Sono e Descanso",
      description: "Dicas para estabelecer uma rotina de sono saudável e tranquila.",
      image: "https://images.pexels.com/photos/1973270/pexels-photo-1973270.jpeg?auto=compress&cs=tinysrgb&w=600",
      tips: ["Ambiente calmo", "Rotina consistente", "Posição segura para dormir"]
    },
    {
      icon: Thermometer,
      title: "Saúde e Bem-estar",
      description: "Monitoramento da saúde, vacinas e sinais de alerta importantes.",
      image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600",
      tips: ["Consultas regulares", "Acompanhamento do crescimento", "Vacinação em dia"]
    },
    {
      icon: Baby,
      title: "Desenvolvimento",
      description: "Estimulação adequada para o desenvolvimento motor e cognitivo.",
      image: "https://images.pexels.com/photos/4964482/pexels-photo-4964482.jpeg?auto=compress&cs=tinysrgb&w=600",
      tips: ["Brincadeiras estimulantes", "Conversas constantes", "Toque afetuoso"]
    },
    {
      icon: Heart,
      title: "Vínculo Afetivo",
      description: "Fortalecimento do vínculo entre pais e bebê através do carinho.",
      image: "https://images.pexels.com/photos/7180737/pexels-photo-7180737.jpeg?auto=compress&cs=tinysrgb&w=600",
      tips: ["Contato pele a pele", "Conversar com o bebê", "Colo e carinho"]
    }
  ];

  return (
    <section id="cuidados" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cuidados Essenciais
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra tudo o que você precisa saber para cuidar do seu bebê com amor e segurança. 
            Nossas orientações são baseadas em evidências científicas e experiência prática.
          </p>
        </div>

        {/* Care Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careCards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <card.icon className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                </div>

                <p className="text-gray-600 mb-4">{card.description}</p>

                {/* Tips */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800 text-sm">Dicas importantes:</h4>
                  <ul className="space-y-1">
                    {card.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-pink-600 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <button className="mt-6 w-full bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition-colors">
                  Saiba Mais
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareSection;