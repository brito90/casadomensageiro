import Layout from '../layouts/Layout'
import { useState } from 'react'
import { useTilt } from '../utils/useTilt'

const servicos = [
  {
    id: 1,
    name: 'Jogo de Búzios',
    price: 'R$ 250',
    duration: '1 hora',
    description: 'Consulta completa com o Pai de Santo para orientação espiritual',
    icon: '🔮',
  },
  {
    id: 2,
    name: 'Despacho Espiritual',
    price: 'R$ 350',
    duration: '1h30',
    description: 'Limpeza e proteção espiritual com trabalhos personalizados',
    icon: '🕯️',
  },
  {
    id: 3,
    name: 'Axé Pessoal',
    price: 'R$ 500',
    duration: '2 horas',
    description: 'Trabalho completo de fortalecimento espiritual e prosperidade',
    icon: '✨',
  },
  {
    id: 4,
    name: 'Consultoria Espiritual',
    price: 'R$ 150',
    duration: '30 min',
    description: 'Orientação rápida para perguntas específicas',
    icon: '💬',
  },
]

const depoimentos = [
  {
    id: 1,
    name: 'Maria S.',
    text: 'O Pai Rychelmy me ajudou a resolver uma situação muito difícil. O jogo de búzios foi preciso e a orientação transformou minha vida.',
    rating: 5,
  },
  {
    id: 2,
    name: 'João P.',
    text: 'Consulto com o Pai há 3 anos. Cada visita é uma renovação de fé e paz interior. Recomendo demais!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana R.',
    text: 'Primeira vez que fiz um jogo de búzios. Fiquei impressionada com a precisão e o carinho no atendimento.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Carlos M.',
    text: 'O despacho espiritual mudou minha vida. Tudo começou a fluir depois da consulta. Sou grato eternamente.',
    rating: 5,
  },
]

function ServicoCard({ servico }: { servico: typeof servicos[0] }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>({ maxTilt: 8, scale: 1.02 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
        style={{ transform: 'translateZ(20px)' }}
      >
        <span className="text-2xl">{servico.icon}</span>
      </div>
      <h3 
        className="font-heading font-bold text-xl text-primary mb-2"
        style={{ transform: 'translateZ(15px)' }}
      >
        {servico.name}
      </h3>
      <p 
        className="text-gray-600 text-sm mb-4"
        style={{ transform: 'translateZ(10px)' }}
      >
        {servico.description}
      </p>
      <div 
        className="flex items-center justify-between border-t pt-4"
        style={{ transform: 'translateZ(5px)' }}
      >
        <span className="text-2xl font-bold text-primary">{servico.price}</span>
        <span className="text-sm text-gray-500">{servico.duration}</span>
      </div>
    </div>
  )
}

function PaiDeSanto() {
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [selectedService, setSelectedService] = useState<typeof servicos[0] | null>(null)

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
            🙏 Guia Espiritual
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Conheça o <span className="text-accent">Pai Rychelmy</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Mais de 25 anos de experiência no serviço aos Orixás.
            Orientação espiritual com sabedoria e acolhimento.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo Area */}
            <div className="relative">
              <div className="gradient-primary rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative bg-white rounded-2xl p-8 text-center">
                  <div className="w-40 h-40 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-6xl">🧘</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                    Pai Rychelmy
                  </h2>
                  <p className="text-gray-600 mb-4">Filho de Ogum e Oxum</p>
                  <div className="flex justify-center gap-2 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">Avaliação 5.0 • 500+ consultas</p>
                </div>
              </div>
            </div>

            {/* Info Area */}
            <div className="space-y-6">
              <div className="inline-block bg-primary-50 px-4 py-2 rounded-full text-primary text-sm font-medium">
                🙏 Sobre o Pai
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                Pai Rychelmy de Ogum
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com mais de 25 anos de experiência no serviço aos Orixás, o Pai Rychelmy 
                dedica sua vida ao acolhimento e orientação espiritual. Filho de Ogum e Oxum, 
                ele carrega a sabedoria ancestral transmitida por gerações.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Suas consultas são conhecidas pela precisão e pelo carinho com que recebe 
                cada pessoa. Através do jogo de búzios e dos trabalhos espirituais, ele 
                ajuda a iluminar o caminho de quem busca paz e direção.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-primary">25+</p>
                  <p className="text-sm text-gray-600">Anos de Experiência</p>
                </div>
                <div className="bg-primary-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-gray-600">Consultas Realizadas</p>
                </div>
                <div className="bg-primary-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-gray-600">Dedicação</p>
                </div>
                <div className="bg-primary-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-primary">5.0</p>
                  <p className="text-sm text-gray-600">Avaliação</p>
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedService(servicos[0])
                  setShowBookingModal(true)
                }}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Agendar Consulta
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
              ✨ Serviços
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Serviços Espirituais
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o serviço que melhor atende suas necessidades espirituais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((servico) => (
              <div
                key={servico.id}
                onClick={() => {
                  setSelectedService(servico)
                  setShowBookingModal(true)
                }}
              >
                <ServicoCard servico={servico} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Depoimentos da Comunidade
            </h2>
            <p className="text-gray-600">
              Veja o que dizem aqueles que já receberam a orientação do Pai Rychelmy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {depoimentos.map((depoimento) => (
              <div key={depoimento.id} className="bg-primary-50 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic text-sm">"{depoimento.text}"</p>
                <p className="font-semibold text-primary">— {depoimento.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 border border-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 border border-white/10 rounded-full"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Precisa de Orientação Espiritual?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Agende sua consulta com o Pai Rychelmy e receba a sabedoria dos Orixás.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setSelectedService(servicos[0])
                setShowBookingModal(true)
              }}
              className="btn-accent text-lg px-8 py-4"
            >
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
      {showBookingModal && selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="gradient-primary p-6 text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🧘</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Pai Rychelmy
              </h3>
              <p className="text-white/80">{selectedService.name}</p>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Duração</p>
                    <p className="font-semibold text-primary">{selectedService.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary-50 rounded-xl">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Valor</p>
                    <p className="font-semibold text-primary">{selectedService.price}</p>
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
                  Confirmar
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
