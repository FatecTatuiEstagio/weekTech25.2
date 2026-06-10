import {
  Calendar,
  Clock,
  MapPin,
  User,
} from 'lucide-react'
import { useState } from 'react'

const ProgramSection = () => {
  const [selectedDay, setSelectedDay] = useState('segunda')
  const [copiedId, setCopiedId] = useState('')

  const copyEventLink = async eventId => {
    try {
      const currentUrl = window.location.href.split('#')[0] // Remove any existing hash
      const eventUrl = `${currentUrl}#${eventId}`
      await navigator.clipboard.writeText(eventUrl)
      setCopiedId(eventId)

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedId('')
      }, 2000)
    } catch (err) {
      console.error('Erro ao copiar link: ', err)
    }
  }

  const programData = {
    segunda: {
      date: 'Segunda-feira - 20/10',
      activities: [
        {
          time: '8:00',
          title: 'Ideathon, Startups e Inovação',
          speaker: 'Point Media e Câmara Municipal de Tatuí',
          speakerInfo: 'Com o curso de GTI',
          location: 'Auditório 1 - Prédio 2',
          images: [
            {w: '20', image: '/logo/company/pointmedia.png'},
            {w: '20', image: '/logo/company/camaratatui.png'},
          ],
        },
        {
          time: '13:00 - 17:00',
          title: 'Ideathon, Startups e Inovação',
          speaker: 'Point Media e Câmara Municipal de Tatuí',
          speakerInfo: 'Com o curso de ADS',
          location: 'Auditório 1 - Prédio 2',
          images: [
            {w: '20', image: '/logo/company/pointmedia.png'},
            {w: '20', image: '/logo/company/camaratatui.png'},
          ],
        },
        {
          time: '19:00',
          title: 'Ideathon, Startups e Inovação',
          speaker: 'Point Media e Câmara Municipal de Tatuí',
          speakerInfo: 'Com o curso de GTI',
          location: 'Auditório 1 - Prédio 2',
          images: [
            {w: '20', image: '/logo/company/pointmedia.png'},
            {w: '20', image: '/logo/company/camaratatui.png'},
          ],
        },
      ],
    },
    terca: {
      date: 'Terça-feira - 21/10',
      activities: [
        {
          time: '13:00 - 17:00',
          title: 'Protagonismo Feminino: A melhor versão do seu negócio',
          speaker: 'Sebrae',
          speakerInfo: '',
          icon: '',
          location: 'Auditório 1',
          images: [{w: '60', image: '/logo/company/protagonismo.png',}]
        },
        {
          time: '14:30 às 15:30',
          title: 'Copilot em ação: Inteligência Artificial como parceria na Inovação e Produtividade',
          speaker: 'Prof. Dr. Ricardo Slavov',
          speakerInfo: '',
          icon: '',
          location: 'Auditório 2 - Prédio 2',
          images: [{image: '/logo/company/slavov.jpeg'}],
        },
        {
          time: '19:30 - 21:00',
          title: 'As mudanças tecnológicas e a novas oportunidades no mercado de trabalho',
          speaker: 'Professor Geraldo Cesar Almeida',
          speakerInfo: 'Economista, Professor Universitário',
          icon: '',
          location: 'Auditório 1 - Prédio 2',
          images: [{image: '/logo/company/geraldoalmeida.jpg'}],
        },
      ],
    },
    quinta: {
      date: 'Quinta-feira - 23/10',
      activities: [
        {
          time: 'Manhã e Noite',
          title: 'Mesa redonda: Batalha de Robôs como Instrumento de Curricularização da Extensão',
          speaker: 'Automação Industrial e Manuntenção Industrial',
          speakerInfo: '',
          location: 'Auditório 1 - Prédio 2',
          images: [{image: '/logo/company/battleRobot.jpg'}],
        },
        {
          time: 'Manhã e Noite',
          title: 'Batalha de robôs',
          speaker: 'Automação Industrial e Manuntenção Industrial',
          speakerInfo: '',
          location: 'Área de Convivência - Prédio 2',
          images: [{image: '/logo/company/battleRobot.jpg'}],
        },
      ],
    },
    sexta: {
      date: 'Sexta-feira - 24/10',
      activities: [
        {
          time: '14:00',
          title: 'Bate Papo com Egresso',
          speaker: 'Dani Mariano e Natália Ferlin',
          speakerInfo: '',
          location: 'Estúdio - Prédio 1',
          images: [
            {w: '20', image: '/logo/company/dani.jpg'},
            {w: '20', image: '/logo/company/natalia.jpg'}
          ],
        },
      ],
    },
  }

  const days = [
    { key: 'segunda', label: 'Segunda' },
    { key: 'terca', label: 'Terça' },
    // { key: 'quarta', label: 'Quarta' },
    { key: 'quinta', label: 'Quinta' },
    { key: 'sexta', label: 'Sexta' },
  ]

  return (
    <section id="programacao" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
          <span className="text-[#b20000]">Programação</span> do Evento
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Confira a programação completa da Semana de Tecnologia 2025.
            Palestras, workshops e atividades práticas durante toda a semana.
          </p>
        </div>

        {/* Navegação dos dias */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white rounded-2xl p-3 shadow-lg border border-neutral-200 max-w-2xl mx-auto">
          {days.map(day => (
            <button
              type="button"
              key={day.key}
              id={`dia-${day.key}`}
              onClick={() => setSelectedDay(day.key)}
              className={`px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                selectedDay === day.key
                  ? 'bg-[#b20000] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#b20000] hover:bg-red-50'
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
              <Calendar className="w-6 h-6 mr-3 text-[#b20000]" />
              {programData[selectedDay].date}
            </h3>
          </div>

          <div className="space-y-6">
            {programData[selectedDay].activities.map((activity, index) => (
              <div
                key={activity.id || index.toString()}
                id={activity.id}
                className="tech-card p-6 rounded-3xl hover:-translate-y-1 transition-all duration-300"
              >
                {activity.speaker ? (
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="lg:col-span-1">
                      <div className="flex items-center text-[#b20000] mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{activity.time}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{activity.location}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      {activity.title ? (
                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                          {activity.title}
                        </h4>
                      ) : (
                        <p> </p>
                      )}
                      <div className="flex items-center mb-2">
                        {/* <User className="w-4 h-4 mr-2 text-slate-500" /> */}
                        {activity.speaker ? (
                          <span className="font-semibold text-slate-700">
                            {activity.speaker}
                          </span>
                        ) : (
                          <p> </p>
                        )}
                      </div>
                      {activity.speakerInfo ? (
                        <p className="text-slate-600 text-sm mb-3">
                          {activity.speakerInfo}
                        </p>
                      ) : (
                        <p> </p>
                      )}
                    </div>

                    {/* <div className="lg:col-span-1">
                      <div className="w-20 h-20 mx-auto lg:mx-0 bg-slate-200 rounded-full flex items-center justify-center">
                         <User className="w-8 h-8 text-slate-400" /> 
                      </div>
                    </div> */}
                    <div className='p-2 flex '>
                      {activity.image ? (
                        <img
                          className="flex flex-wrap items-center justify-center gap-3 p-2"
                          src={activity.image}
                          alt="imagem do evento"
                        />
                      ) : (
                        <p> </p>
                      )}

                      {activity.images.map((img, index) =>
                        img.image ? (
                          <img
                            key={index.toString()}
                            className={`w-${img.w} h-${img.w} p-1 evento mx-auto lg:mx-0`}
                            src={img.image}
                            alt="imagem do evento"
                          />
                        ) : (
                          <p key={index.toString()}> </p>
                        )
                      )}
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
                    <p className="text-slate-500 mb-4">
                      A programação deste período será divulgada em breve. Fique
                      atento às nossas redes sociais para novidades!
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="tech-card p-8 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              <span className="tech-text-gradient">Monitoramento da Trabalhabilidade e do Empreendedorismo</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Participe da nossa pesquisa e contribua para o desenvolvimento acadêmico e profissional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.office.com/pages/responsepage.aspx?id=xWS-6vVodkqDAZV3pnnkSaRawpGWC41GlQ82MEFked5UMjMzMlVNN1FaTjBIMzNGWDQ1WFVUTDdVUy4u&origin=QRCode&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b20000] hover:bg-[#8f0000]text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center text-decoration-none"
              >
                <User className="w-5 h-5 inline-block mr-2" />
                Aluno
              </a>
              <a
                href="https://forms.office.com/pages/responsepage.aspx?id=xWS-6vVodkqDAZV3pnnkSaRawpGWC41GlQ82MEFked5UNDdYQVFYMUcxOE1OVDBWMkxSM1Q3SVVRUy4u&origin=QRCode&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#b20000] hover:bg-[#8f0000] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center text-decoration-none"
              >
                <User className="w-5 h-5 inline-block mr-2" />
                Egresso
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramSection
