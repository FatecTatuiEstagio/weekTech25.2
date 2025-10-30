import { Users, Target, Award, Network } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Inovação",
      description: "Explorando as últimas tendências em tecnologia e suas aplicações práticas no mercado."
    },
    {
      icon: Users,
      title: "Networking",
      description: "Conectando estudantes, profissionais e empresas para criar oportunidades de crescimento."
    },
    {
      icon: Award,
      title: "Empregabilidade",
      description: "Preparando os participantes para o mercado de trabalho com conhecimentos atualizados."
    },
    {
      icon: Network,
      title: "Colaboração",
      description: "Promovendo a troca de experiências entre academia e indústria."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Sobre o <span className="tech-text-gradient">Evento</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A Semana de Tecnologia da Fatec Tatuí é um evento anual que reúne estudantes, 
            profissionais e empresas para discutir as últimas tendências em tecnologia, 
            inovação e desenvolvimento profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="tech-card p-6 text-center tech-hover-effect">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#F5F3FA] rounded-lg flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-[#6A0DAD]" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
