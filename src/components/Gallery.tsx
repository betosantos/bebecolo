import React from 'react';
import { Camera, Heart, Star } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1973270/pexels-photo-1973270.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Mãe carinhosa com bebê",
      category: "Momentos Especiais"
    },
    {
      src: "https://images.pexels.com/photos/1166473/pexels-photo-1166473.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Bebê dormindo peacefully",
      category: "Sono Tranquilo"
    },
    {
      src: "https://images.pexels.com/photos/6849106/pexels-photo-6849106.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Hora do banho",
      category: "Cuidados Diários"
    },
    {
      src: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Consulta médica",
      category: "Saúde e Bem-estar"
    },
    {
      src: "https://images.pexels.com/photos/1673975/pexels-photo-1673975.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Brincadeiras e desenvolvimento",
      category: "Desenvolvimento"
    },
    {
      src: "https://images.pexels.com/photos/1973270/pexels-photo-1973270.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Amamentação",
      category: "Alimentação"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-pink-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Momentos Preciosos
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uma coleção de momentos especiais que mostram o carinho e os cuidados essenciais 
            para o desenvolvimento saudável do seu bebê.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium text-sm">{image.category}</p>
                      <p className="text-white/80 text-xs">{image.alt}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-4 w-4 text-white/80" />
                      <Star className="h-4 w-4 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
            <p className="text-gray-600">Famílias Atendidas</p>
          </div>
          
          <div className="text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Dicas Compartilhadas</p>
          </div>
          
          <div className="text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">200+</h3>
            <p className="text-gray-600">Momentos Capturados</p>
          </div>
          
          <div className="text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600">Amor e Carinho</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;