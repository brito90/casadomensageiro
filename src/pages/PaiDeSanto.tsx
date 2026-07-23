import Layout from '../layouts/Layout'
import { useState } from 'react'

const paisDeSanto = [
  {
    id: 1,
    name: 'Pai Miguel de Ogum',
    orixa: 'Ogum',
    experience: '35 anos',
    specialties: ['Jogos de Búzios', 'Despachos', 'Axé Pessoal'],
    rating: 5,
    reviews: 234,
    nextAvailable: '28/07/2026',
    photo: '/assets/images/pai-miguel.jpg',
    available: true,
  },
  {
    id: 2,
    name: 'Mãe Benedita de Oxum',
    orixa: 'Oxum',
    experience: '28 anos',
    specialties: ['Búzios', 'Oferendas', 'Cura Espiritual'],
    rating: 5,
    reviews: 189,
    nextAvailable: '29/07/2026',
    photo: '/assets/images/mae-benedita.jpg',
    available: true,
  },
  {
    id: 3,
    name: 'Pai José de Xangô',
    orixa: 'Xangô',
    experience: '42 anos',
    specialties: ['Búzios', 'Justiça Espiritual', 'Trabalhos de Oxalá'],
    rating: 5,
    reviews: 312,
    nextAvailable: '30/07/2026',
    photo: '/assets/images/pai-jose.jpg',
    available: true,
  },
  {
    id: 4,
    name: 'Mãe Lúcia de Iemanjá',
    orixa: 'Iemanjá',
    experience: '31 anos',
    specialties: ['Búzios', 'Águas', 'Proteção Marinha'],
    rating: 5,
    reviews: 276,
    nextAvailable: '01/08/2026',
    photo: '/assets/images/mae-lucia.jpg',
    available: false,
  },
]

const depoimentos = [
  {
    id: 1,
    name: 'Maria S.',
    text: 'O Pai Miguel me ajudou a resolver uma situação muito difícil. O jogo de búzios foi preciso e a orientação transformou minha vida.',
    rating: 5,
  },
  {
    id: 2,
    name: 'João P.',
    text: 'Consulto com a Mãe Benedita há 5 anos. Cada visita é uma renovação de fé e paz interior.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana R.',
    text: 'Primeira vez que fiz um jogo de búzios. Fiquei impressionada com a precisão e o carinho no atendimento.',
    rating: 5,
  },
]

function PaiDeSanto() {
  const [selectedMentor, setSelectedMentor] = useState<typeof paisDeSanto[0] | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="20" cy="20" r="15" fill="white" />
            <circle cx="80" cy="30" r="10" fill="white" />
            <circle cx="50" cy="80" r="12" fill="white" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            🙏 Nossos Guiares Espirituais
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Nossos Pais e Mães <span className="text-accent">de Santo</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Conecte-se com guiares experientes que dedicaram suas vidas ao serviço dos Orixás.
          </p>
        </div>
      </section>

      {/* Pais de Santo Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {paisDeSanto.map((pais) => (
              <div
                key={pais.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Header with gradient */}
                <div className="relative h-48 gradient-primary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <span className="text-5xl">
                        {pais.orixa === 'Ogum' ? '⚔️' :
                         pais.orixa === 'Oxum' ? '💧' :
                         pais.orixa === 'Xangô' ? '🪓' : '🌊'}
                      </span>
                    </div>
                  </div>
                  {pais.available && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Disponível
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-primary">
                        {pais.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{pais.experience} de experiência</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(pais.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-1">({pais.reviews})</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Especialidades:</p>
                    <div className="flex flex-wrap gap-2">
                      {pais.specialties.map((spec, index) => (
                        <span
                          key={index}
                          className="bg-primary-50 text-primary text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-500">Próxima disponibilidade:</p>
                      <p className="font-semibold text-primary">{pais.nextAvailable}</p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedMentor(pais)
                        setShowBookingModal(true)
                      }}
                      disabled={!pais.available}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        pais.available
                          ? 'btn-primary'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {pais.available ? 'Agendar' : 'Indisponível'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Depoimentos da Comunidade
            </h2>
            <p className="text-gray-600">
              Veja o que dizem aqueles que já receberam a orientação dos Orixás.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((depoimento) => (
              <div key={depoimento.id} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{depoimento.text}"</p>
                <p className="font-semibold text-primary">— {depoimento.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Precisa de Orientação Espiritual?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Agende sua consulta e receba a sabedoria dos Orixás para trilhar seu caminho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent text-lg px-8 py-4">
              Agendar Agora
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold
                             border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
              Fale Conosco
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && selectedMentor && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
            {/* Header */}
            <div className="gradient-primary p-6 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">
                  {selectedMentor.orixa === 'Ogum' ? '⚔️' :
                   selectedMentor.orixa === 'Oxum' ? '💧' :
                   selectedMentor.orixa === 'Xangô' ? '🪓' : '🌊'}
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                {selectedMentor.name}
              </h3>
              <p className="text-white/80">{selectedMentor.experience} de experiência</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Próxima disponibilidade</p>
                    <p className="font-semibold text-primary">{selectedMentor.nextAvailable}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Duração média</p>
                    <p className="font-semibold text-primary">1 hora</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Valor da consulta</p>
                    <p className="font-semibold text-primary">R$ 250,00</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-xl font-semibold
                           hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Fechar
                </button>
                <button className="flex-1 btn-primary">
                  Confirmar Agendamento
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default PaiDeSanto
