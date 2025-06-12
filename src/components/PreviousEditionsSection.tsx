
import React from 'react';
import { Users, Calendar, Award } from 'lucide-react';

const PreviousEditionsSection = () => {
  const editions = [
    {
      year: "2024",
      title: "Semana de Tecnologia 2024",
      description: "Focada em Inteligência Artificial e Machine Learning, reuniu mais de 400 participantes.",
      image: "/placeholder.svg",
    },
    {
      year: "2023", 
      title: "Semana de Tecnologia 2023",
      description: "Abordou temas sobre Cloud Computing e DevOps, com participação de grandes empresas.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="edicoes-anteriores" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Edições <span className="tech-text-gradient">Anteriores</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Relembre as edições anteriores da Semana de Tecnologia e veja como 
            o evento tem crescido e evoluído ao longo dos anos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {editions.map((edition, index) => (
            <div key={index} className="tech-card overflow-hidden tech-hover-effect">
              {/* Imagem placeholder */}
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                  <span className="text-2xl font-bold text-slate-500">{edition.year}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{edition.title}</h3>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {edition.year}
                  </span>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {edition.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="tech-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Faça Parte da História
            </h3>
            <p className="text-slate-600 mb-6">
              Junte-se a nós na edição 2025 e ajude a construir mais um capítulo 
              da história da Semana de Tecnologia da Fatec Tatuí.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('programacao');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Ver Programação 2025
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousEditionsSection;
