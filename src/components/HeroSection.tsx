
import React from 'react';
import { Calendar } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 tech-gradient"></div>
      
      {/* Pattern de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Outubro 2025</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Semana de
            <span className="block text-green-400">Tecnologia</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Evento de tecnologia e inovação da Fatec Tatuí. 
            Conectando estudantes, profissionais e empresas em uma semana de aprendizado e networking.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('programacao')}
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Veja a Programação
          </button>
          
          <button
            onClick={() => scrollToSection('sobre')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
          >
            Sobre o Evento
          </button>
        </div>

        {/* Estatísticas do evento */}
        {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">5</div>
            <div className="text-blue-200">Dias de Evento</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-blue-200">Palestrantes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200">Participantes</div>
          </div>
        </div> */}
      </div>

      {/* Elemento decorativo */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
