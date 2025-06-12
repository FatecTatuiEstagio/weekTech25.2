
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logos */}
          <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-3'>
              {/* <div className='w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>ST</span>
              </div> */}
              <div >
                <h1 className='text-xl font-bold text-slate-900'>Semana de Tecnologia</h1>
                <p className='text-sm text-slate-600'>Fatec Tatuí</p>
              </div>
            </div>
            
            {/* Logos institucionais */}
            <div className='flex gap-5 items-center space-x-4'>
              <img className='w-16 max-md:w-14' src='/logo/fatec.png' alt='Logo da Fatec Tatuí' />
              <img className='w-60 max-md:hidden max-md:w-14' src='/logo/cps.png' alt='Logo da Centro Paula Souza' />
              {/* <div className='w-10 h-10 bg-red-600 rounded flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>FATEC</span>
              </div>
              <div className='w-10 h-10 bg-blue-800 rounded flex items-center justify-center'>
                <span className='text-white font-bold text-xs'>CPS</span>
              </div> */}
            </div>
          </div>

          {/* Menu Desktop */}
          <div className='hidden md:flex items-center space-x-8'>
            <button
              onClick={() => scrollToSection('inicio')}
              className='text-slate-700 hover:text-blue-600 transition-colors duration-200'
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className='text-slate-700 hover:text-blue-600 transition-colors duration-200'
            >
              Sobre o Evento
            </button>
            <button
              onClick={() => scrollToSection('programacao')}
              className='text-slate-700 hover:text-blue-600 transition-colors duration-200'
            >
              Programação
            </button>
            <button
              onClick={() => scrollToSection('edicoes-anteriores')}
              className='text-slate-700 hover:text-blue-600 transition-colors duration-200'
            >
              Edições Anteriores
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className='text-slate-700 hover:text-blue-600 transition-colors duration-200'
            >
              Contato
            </button>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='h-6 w-6 text-slate-700' />
            ) : (
              <Menu className='h-6 w-6 text-slate-700' />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className='md:hidden pb-4 border-t border-slate-200 mt-2'>
            <div className='flex flex-col space-y-3 pt-4'>
              <button
                onClick={() => scrollToSection('inicio')}
                className='text-slate-700 hover:text-blue-600 text-left py-2'
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className='text-slate-700 hover:text-blue-600 text-left py-2'
              >
                Sobre o Evento
              </button>
              <button
                onClick={() => scrollToSection('programacao')}
                className='text-slate-700 hover:text-blue-600 text-left py-2'
              >
                Programação
              </button>
              <button
                onClick={() => scrollToSection('edicoes-anteriores')}
                className='text-slate-700 hover:text-blue-600 text-left py-2'
              >
                Edições Anteriores
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className='text-slate-700 hover:text-blue-600 text-left py-2'
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
