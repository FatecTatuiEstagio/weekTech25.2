import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Sobre o Evento", id: "sobre" },
    { label: "Programação", id: "programacao" },
    { label: "Edições Anteriores", id: "edicoes-anteriores" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-red-900/20 bg-[#b20000]/95 backdrop-blur-md shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logos */}
          <div className="flex items-center gap-4">
            <img
              src="/logo/logoSemanaTech.png"
              alt="Semana de Tecnologia"
              className="w-52 lg:w-60"
            />

            <div className="flex items-center gap-4">
              <img
                className="w-12 md:w-14"
                src="/logo/logoFatec.png"
                alt="Logo da Fatec Tatuí"
              />

              <img
                className="hidden w-52 lg:block"
                src="/logo/logo-branco-cps.png"
                alt="Logo do Centro Paula Souza"
              />
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative font-medium text-white transition duration-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-white/20 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-lg px-3 py-3 text-left font-medium text-white transition hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;