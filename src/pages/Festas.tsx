import Layout from '../layouts/Layout'
import { useState } from 'react'

const festas = [
  {
    id: 1,
    title: 'Festa de Iemanjá',
    date: '2026-02-02',
    time: '14:00',
    location: 'Praia do Porto',
    description: 'Homenagem anual à Rainha do Mar. Oferecimento de flores e presentes nas águas.',
    orixa: 'Iemanjá',
    color: 'from-blue-500 to-cyan-400',
    status: 'upcoming',
    image: '/assets/images/festa-iemanja.jpg',
  },
  {
    id: 2,
    title: 'Festa de Xangô',
    date: '2026-06-24',
    time: '16:00',
    location: 'Terreiro Principal',
    description: 'Celebração do Orixá da Justiça. Toques especiais e comidas de Xangô.',
    orixa: 'Xangô',
    color: 'from-red-600 to-orange-500',
    status: 'upcoming',
    image: '/assets/images/festa-xango.jpg',
  },
  {
    id: 3,
    title: 'Festa de Oxum',
    date: '2026-08-08',
    time: '15:00',
    location: 'Fonte da Água',
    description: 'Festa das águas doces. Flores amarelas e oferendas para a Mãe de Oxum.',
    orixa: 'Oxum',
    color: 'from-yellow-400 to-amber-500',
    status: 'upcoming',
    image: '/assets/images/festa-oxum.jpg',
  },
  {
    id: 4,
    title: 'Festa de Ogum',
    date: '2026-04-23',
    time: '17:00',
    location: 'Terreiro dos Guerreiros',
    description: 'O guerreiro das sete espadas. Toque de guerra e comidas de ferro.',
    orixa: 'Ogum',
    color: 'from-blue-800 to-red-700',
    status: 'upcoming',
    image: '/assets/images/festa-ogum.jpg',
  },
  {
    id: 5,
    title: 'Festa de Oxalá',
    date: '2026-12-25',
    time: '06:00',
    location: 'Terreiro Principal',
    description: 'O maior Orixá. Jejum e orações desde as primeiras horas do dia.',
    orixa: 'Oxalá',
    color: 'from-white to-gray-200',
    status: 'upcoming',
    image: '/assets/images/festa-oxala.jpg',
  },
  {
    id: 6,
    title: 'Festa de Nanã',
    date: '2026-09-08',
    time: '14:00',
    location: 'Quadra da Mãe Velha',
    description: 'Homenagem à avó dos Orixás. Barro sagrado e cantos ancestrais.',
    orixa: 'Nanã',
    color: 'from-purple-800 to-indigo-900',
    status: 'upcoming',
    image: '/assets/images/festa-nana.jpg',
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function Festas() {
  const [selectedOrixa, setSelectedOrixa] = useState<string>('Todos')
  const [selectedFesta, setSelectedFesta] = useState<typeof festas[0] | null>(null)

  const orixas = ['Todos', ...new Set(festas.map(f => f.orixa))]
  const filteredFestas = selectedOrixa === 'Todos' 
    ? festas 
    : festas.filter(f => f.orixa === selectedOrixa)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Festas e Celebrações
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Acompanhe as festas dos Orixás. Participe das celebrações que mantêm viva a tradição.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {orixas.map((orixa) => (
              <button
                key={orixa}
                onClick={() => setSelectedOrixa(orixa)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedOrixa === orixa
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {orixa}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Festas Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFestas.map((festa) => (
              <article
                key={festa.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedFesta(festa)}
              >
                {/* Image with gradient overlay */}
                <div className={`relative h-48 bg-gradient-to-br ${festa.color}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl font-heading font-bold opacity-30">
                      {festa.orixa.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <span className="inline-block bg-white text-primary text-xs px-3 py-1 rounded-full font-bold">
                      {festa.orixa}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">
                    {festa.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(festa.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {festa.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {festa.location}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {festa.description}
                  </p>

                  <button className="w-full btn-secondary text-sm">
                    Saiba Mais
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredFestas.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-lg">Nenhuma festa encontrada para este Orixá.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Receba Convites Exclusivos
          </h2>
          <p className="text-gray-300 mb-6">
            Cadastre-se e receba informações sobre todas as festas e eventos do terreiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-grow px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-30
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="btn-secondary whitespace-nowrap">
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {/* Festa Modal */}
      {selectedFesta && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white rounded-xl overflow-hidden">
            {/* Header */}
            <div className={`relative h-48 bg-gradient-to-br ${selectedFesta.color}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-8xl font-heading font-bold opacity-20">
                  {selectedFesta.orixa.charAt(0)}
                </span>
              </div>
              <button
                onClick={() => setSelectedFesta(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="inline-block bg-white text-primary text-sm px-4 py-1 rounded-full font-bold">
                  {selectedFesta.orixa}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                {selectedFesta.title}
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(selectedFesta.date)}
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {selectedFesta.time}
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedFesta.location}
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {selectedFesta.description}
              </p>

              <div className="flex gap-4">
                <button className="flex-1 btn-primary">
                  Confirmar Presença
                </button>
                <button 
                  onClick={() => setSelectedFesta(null)}
                  className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold
                           hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Festas
