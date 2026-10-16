const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7d0000] via-[#b20000] to-[#d62828]" />

      {/* Efeito decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, white 2px, transparent 2px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-4 flex w-[calc(100%-2rem)] max-w-4xl flex-col items-center rounded-3xl border border-white/15 bg-black/10 px-5 py-9 text-center shadow-2xl backdrop-blur-sm sm:mx-6 sm:w-full sm:px-10 sm:py-12">
        <p className="mb-4 text-3xl font-bold text-white md:text-5xl">
          20 a 24{" "}
          <span className="font-semibold text-red-100">em Outubro</span>
        </p>

        <h1 className="mb-7 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          5ª Semana da
          <span className="mt-2 block text-red-100">Tecnologia</span>
        </h1>

        <p className="mb-8 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
          Evento de tecnologia e inovação da Fatec Tatuí. Conectando
          estudantes, profissionais e empresas em uma semana de aprendizado e
          networking.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => scrollToSection("programacao")}
            className="rounded-xl bg-white px-8 py-4 font-semibold text-[#b20000] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
          >
            Veja a Programação
          </button>

          <button
            onClick={() => scrollToSection("sobre")}
            className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
          >
            Sobre o Evento
          </button>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <svg
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
