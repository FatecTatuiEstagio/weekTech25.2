const editions = [
  {
    year: "2025",
    title: "5ª Semana da Tecnologia",
    description:
      "Focada em Inteligência Artificial e Machine Learning, reuniu mais de 400 participantes.",
    image: "/editions/2025-1.png",
    link: "https://week-tech2025.vercel.app/",
  },
  {
    year: "2024",
    title: "4ª Semana da Tecnologia",
    description:
      "Abordou temas sobre Cloud Computing e DevOps, com participação de grandes empresas.",
    image: "/editions/2024-2.png",
    link: "https://week-tech.vercel.app/",
  },
];

const PreviousEditionsSection = () => (
  <section id="edicoes-anteriores" className="bg-neutral-50 py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-14 text-center">
        <h2 className="mb-5 text-4xl font-bold text-neutral-900">
          Edições <span className="tech-text-gradient">Anteriores</span>
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-neutral-600">
          Relembre as edições anteriores da Semana da Tecnologia e veja como o evento tem crescido.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {editions.map((edition) => (
          <article key={edition.year} className="tech-card overflow-hidden tech-hover-effect">
            <a
              href={edition.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Acessar ${edition.title} (${edition.year})`}
              className="block overflow-hidden bg-neutral-200"
            >
              <img
                className="aspect-[16/9] w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                src={edition.image}
                alt={`Imagem da ${edition.title}`}
                loading="lazy"
              />
            </a>
            <div className="p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-neutral-900">{edition.title}</h3>
                <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-[#b20000]">
                  {edition.year}
                </span>
              </div>
              <p className="mb-5 leading-relaxed text-neutral-600">{edition.description}</p>
              <a
                href={edition.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-lg bg-[#b20000] px-5 py-2 font-semibold text-white transition-colors hover:bg-[#8f0000] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b20000]"
              >
                Acessar edição
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PreviousEditionsSection;
