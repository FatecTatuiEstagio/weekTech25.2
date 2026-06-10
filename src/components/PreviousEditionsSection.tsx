const PreviousEditionsSection = () => {
  const editions = [
    {
      year: '2025',
      title: 'Semana de Tecnologia 2025',
      description:
        'Focada em Inteligência Artificial e Machine Learning, reuniu mais de 400 participantes.',
      image: '/editions/2025-1.png',
      link: 'https://week-tech2025.vercel.app/',
    },
    {
      year: '2024',
      title: 'Semana de Tecnologia 2024',
      description:
        'Abordou temas sobre Cloud Computing e DevOps, com participação de grandes empresas.',
      image: '/editions/2024-2.png',
      link: 'https://week-tech.vercel.app/',
    },
  ]

  return (
    <section id="edicoes-anteriores" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Edições <span className="tech-text-gradient">Anteriores</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Relembre as edições anteriores da Semana de Tecnologia e veja como o
            evento tem crescido e evoluído ao longo dos anos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {editions.map((edition, index) => (
            <div
              key={index.toString()}
              className="tech-card overflow-hidden tech-hover-effect"
            >
              {/* Imagem placeholder */}
              {/* biome-ignore lint/a11y/noBlankTarget: <explanation> */}
              <a href={edition.link} target="_blank">
                <div className="bg-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      className="w-full"
                      src={edition.image}
                      alt={`Imagem da ${edition.title}`}
                    />
                    {/* <Calendar className="w-12 h-12 text-slate-400 mx-auto mb-2" /> */}
                    {/* <span className="text-2xl font-bold text-slate-500">{edition.year}</span> */}
                  </div>
                </div>
              </a>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {edition.title}
                  </h3>
                  <span className="text-sm font-semibold text-[#B20000] bg-[#F5F3FA] px-3 py-1 rounded-full">
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

      </div>
    </section>
  )
}

export default PreviousEditionsSection
