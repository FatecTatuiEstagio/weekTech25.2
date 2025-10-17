

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Organizado pela Fatec Tatuí e Centro Paula Souza
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Nossa semana de tecnologia é cuidadosamente planejada para oferecer uma experiência 
              completa de aprendizado e networking. Com palestras, workshops e atividades práticas, 
              proporcionamos um ambiente rico para o desenvolvimento profissional e pessoal.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              O evento é uma iniciativa da Fatec Tatuí, mantida pelo Centro Paula Souza, 
              com o objetivo de aproximar o ambiente acadêmico do mercado de trabalho, 
              criando pontes para o futuro da tecnologia.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FATEC</span>
              </div>
              <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CPS</span>
              </div>
            </div>
          </div> */}
          
          {/* <div className="relative">
            <div className="tech-card p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Público-Alvo</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Estudantes de tecnologia e áreas afins
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Profissionais da área de TI
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Empresários e gestores
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Entusiastas da tecnologia
                </li>
              </ul>
            </div>
          </div> */}
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
