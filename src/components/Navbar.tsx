import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoFatec from "../Icon_FatecTwentyYears.png";
import logoGovernoSP from "../Icon_governoSP.png";

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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-neutral-950/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logos */}
          <div className="flex items-center gap-4">
            <img
              src="/logo/logoSemanaTech.png"
              alt="Semana de Tecnologia"
              className="w-36 sm:w-44 lg:w-52"
            />

            <div className="flex items-center gap-4">
              <img
                className="h-10 w-auto object-contain md:h-12"
                src={logoFatec}
                alt="Fatec Tatuí — 20 anos"
              />

              <img
                className="hidden h-10 w-auto object-contain lg:block"
                src={logoGovernoSP}
                alt="Governo do Estado de São Paulo"
              />
              <img
                className="hidden h-9 w-auto object-contain xl:block"
                src="/logo/logo-branco-cps.png"
                alt="Centro Paula Souza"
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
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
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
