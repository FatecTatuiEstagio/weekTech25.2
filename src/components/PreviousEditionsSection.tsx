
import React from 'react';
import { Users, Calendar, Award } from 'lucide-react';

const PreviousEditionsSection = () => {
  const editions = [
    {
      year: "2024",
      title: "Semana de Tecnologia 2024",
      description: "Focada em Inteligência Artificial e Machine Learning, reuniu mais de 400 participantes.",
      participants: "400+",
      days: "5",
      talks: "18",
      image: "/placeholder.svg",
      highlights: ["IA Generativa", "ML na Prática", "Ética em IA"]
    },
    {
      year: "2023", 
      title: "Semana de Tecnologia 2023",
      description: "Abordou temas sobre Cloud Computing e DevOps, com participação de grandes empresas.",
      participants: "350+",
      days: "5", 
      talks: "15",
      image: "/placeholder.svg",
      highlights: ["AWS", "Docker", "Kubernetes"]
    },
    {
      year: "2022",
      title: "Semana de Tecnologia 2022", 
      description: "Primeiro evento pós-pandemia, híbrido, discutindo o futuro do trabalho remoto.",
      participants: "300+",
      days: "4",
      talks: "12",
      image: "/placeholder.svg",
      highlights: ["Trabalho Remoto", "Ferramentas Colaborativas", "Segurança Digital"]
    }
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

                {/* Estatísticas */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-lg font-bold text-slate-900">{edition.participants}</div>
                    <div className="text-xs text-slate-500">Participantes</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-lg font-bold text-slate-900">{edition.days}</div>
                    <div className="text-xs text-slate-500">Dias</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-lg font-bold text-slate-900">{edition.talks}</div>
                    <div className="text-xs text-slate-500">Palestras</div>
                  </div>
                </div>

                {/* Destaques */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Destaques:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edition.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
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
