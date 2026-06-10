import { Users, Target, Award, Network } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Inovação",
      description:
        "Explorando as últimas tendências em tecnologia e suas aplicações práticas no mercado.",
    },
    {
      icon: Users,
      title: "Networking",
      description:
        "Conectando estudantes, profissionais e empresas para criar oportunidades de crescimento.",
    },
    {
      icon: Award,
      title: "Empregabilidade",
      description:
        "Preparando os participantes para o mercado de trabalho com conhecimentos atualizados.",
    },
    {
      icon: Network,
      title: "Colaboração",
      description:
        "Promovendo a troca de experiências entre academia e indústria.",
    },
  ];

  return (
    <section id="sobre" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-[#b20000]">
            Sobre o evento
          </span>

          <h2 className="mb-6 text-4xl font-bold text-neutral-900 md:text-5xl">
            Sobre o <span className="text-[#b20000]">Evento</span>
          </h2>

          <p className="text-lg leading-8 text-neutral-600">
            A Semana de Tecnologia da Fatec Tatuí é um evento anual que reúne
            estudantes, profissionais e empresas para discutir as últimas
            tendências em tecnologia, inovação e desenvolvimento profissional.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#b20000]/30 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 transition-colors duration-300 group-hover:bg-[#b20000]">
                <feature.icon className="h-8 w-8 text-[#b20000] transition-colors duration-300 group-hover:text-white" />
              </div>

              <h4 className="mb-3 text-2xl font-bold text-neutral-900">
                {feature.title}
              </h4>

              <p className="leading-7 text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;