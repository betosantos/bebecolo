import React from 'react';
import { Clock, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';

const TipsSection = () => {
  const tips = [
    {
      category: "Primeiros Dias",
      icon: Clock,
      color: "bg-blue-100 text-blue-600",
      items: [
        "Estabeleça uma rotina flexível desde o início",
        "Mantenha o ambiente calmo e silencioso",
        "Aproveite para descansar quando o bebê dorme",
        "Não tenha medo de pedir ajuda quando necessário"
      ]
    },
    {
      category: "Sinais de Alerta",
      icon: AlertCircle,
      color: "bg-red-100 text-red-600",
      items: [
        "Febre persistente acima de 38°C",
        "Dificuldade para respirar ou respiração rápida",
        "Choro inconsolável por mais de 3 horas",
        "Mudanças bruscas no padrão de sono ou alimentação"
      ]
    },
    {
      category: "Desenvolvimento Saudável",
      icon: CheckCircle,
      color: "bg-green-100 text-green-600",
      items: [
        "Converse sempre com seu bebê durante os cuidados",
        "Faça massagens suaves para relaxar",
        "Proporcione momentos de brincadeira adequados à idade",
        "Mantenha contato visual durante a amamentação"
      ]
    },
    {
      category: "Dicas Práticas",
      icon: Lightbulb,
      color: "bg-yellow-100 text-yellow-600",
      items: [
        "Tenha sempre uma muda de roupa extra à mão",
        "Prepare um kit de emergência com itens essenciais",
        "Mantenha as unhas do bebê sempre cortadas",
        "Use produtos específicos para a pele sensível do bebê"
      ]
    }
  ];

  return (
    <section id="dicas" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dicas Valiosas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conselhos práticos e orientações importantes para os primeiros meses do seu bebê. 
            Informações que fazem a diferença no dia a dia.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {tips.map((tipCategory, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full ${tipCategory.color} mr-4`}>
                  <tipCategory.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{tipCategory.category}</h3>
              </div>

              <ul className="space-y-4">
                {tipCategory.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="bg-pink-100 p-1 rounded-full mr-3 mt-1">
                      <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Precisa de Mais Orientações?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para ajudar você com dúvidas específicas sobre os cuidados do seu bebê.
            </p>
            <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors shadow-md hover:shadow-lg">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipsSection;