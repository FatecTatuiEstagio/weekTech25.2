
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { useState } from 'react';

const ProgramSection = () => {
  const [selectedDay, setSelectedDay] = useState('segunda');

  const programData = {
    segunda: {
      // date: "Segunda-feira - 13/10",
      date: " - ",
      activities: [
        {
          time: "19:00 - 22:00",
          title: "Em breve mais informações",
          speaker: "",
          speakerInfo: "",
          location: "",
          image: ""
        }
      ]
    },
    terca: {
      date: " - ",
      activities: [
        {
          time: "19:00 - 22:00",
          title: "Em breve mais informações",
          speaker: "",
          speakerInfo: "",
          location: "",
          image: ""
        }
      ]
    },
    quarta: {
      date: " - ",
      activities: [
        {
          time: "19:00 - 22:00",
          title: "Em breve mais informações",
          speaker: "",
          speakerInfo: "",
          location: "",
          image: ""
        }
      ]
    },
    quinta: {
      date: " - ",
      activities: [
        {
          time: "19:00 - 22:00",
          title: "Em breve mais informações",
          speaker: "",
          speakerInfo: "",
          location: "",
          image: ""
        }
      ]
    },
    sexta: {
      date: " - ",
      activities: [
        {
          time: "19:00 - 22:00",
          title: "Em breve mais informações",
          speaker: "",
          speakerInfo: "",
          location: "",
          image: ""
        }
      ]
    }
  };

  const days = [
    { key: 'segunda', label: 'Segunda' },
    { key: 'terca', label: 'Terça' },
    { key: 'quarta', label: 'Quarta' },
    { key: 'quinta', label: 'Quinta' },
    { key: 'sexta', label: 'Sexta' }
  ];

  return (
    <section id="programacao" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            <span className="tech-text-gradient">Programação</span> do Evento
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Confira a programação completa da Semana de Tecnologia 2025. 
            Palestras, workshops e atividades práticas durante toda a semana.
          </p>
        </div>

        {/* Navegação dos dias */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-lg p-2 shadow-md max-w-2xl mx-auto">
          {days.map((day) => (
            <button
              key={day.key}
              onClick={() => setSelectedDay(day.key)}
              className={`px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                selectedDay === day.key
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>

        {/* Conteúdo da programação */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-blue-600" />
              {programData[selectedDay].date}
            </h3>
          </div>

          <div className="space-y-6">
            {programData[selectedDay].activities.map((activity, index) => (
              <div key={index} className="tech-card p-6">
                {activity.speaker ? (
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="lg:col-span-1">
                      <div className="flex items-center text-blue-600 mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{activity.time}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{activity.location}</span>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="text-xl font-bold text-slate-900 mb-3">
                        {activity.title}
                      </h4>
                      <div className="flex items-center mb-2">
                        <User className="w-4 h-4 mr-2 text-slate-500" />
                        <span className="font-semibold text-slate-700">{activity.speaker}</span>
                      </div>
                      <p className="text-slate-600 text-sm">{activity.speakerInfo}</p>
                    </div>
                    
                    <div className="lg:col-span-1">
                      <div className="w-20 h-20 mx-auto lg:mx-0 bg-slate-200 rounded-full flex items-center justify-center">
                        <User className="w-8 h-8 text-slate-400" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-slate-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-slate-600 mb-2">
                      Em breve mais informações
                    </h4>
                    <p className="text-slate-500">
                      A programação deste período será divulgada em breve. 
                      Fique atento às nossas redes sociais para novidades!
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
