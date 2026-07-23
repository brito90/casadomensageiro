import Layout from '../layouts/Layout'
import { useState } from 'react'

const servicos = [
  {
    id: 1,
    title: 'Abertura de Caminhos',
    description: 'Desbloqueie obstáculos e encontre novas oportunidades na vida.',
    icon: '🛤️',
    price: 'A partir de R$ 150',
  },
  {
    id: 2,
    title: 'Proteção Pessoal',
    description: 'Escudo espiritual contra energias negativas e mau-olhado.',
    icon: '🛡️',
    price: 'A partir de R$ 200',
  },
  {
    id: 3,
    title: 'Trabalho de Prosperidade',
    description: 'Atraia abundance financeira e sucesso nos negócios.',
    icon: '💰',
    price: 'A partir de R$ 250',
  },
  {
    id: 4,
    title: 'Limpeza Espiritual',
    description: 'Renove sua energia e limpse de cargas pesadas.',
    icon: '✨',
    price: 'A partir de R$ 180',
  },
  {
    id: 5,
    title: 'Trabalho Amoroso',
    description: 'Atraia amor saudável ou reconcilie relacionamentos.',
    icon: '💕',
    price: 'A partir de R$ 220',
  },
  {
    id: 6,
    title: 'Despacho Exu',
    description: 'Trabalho especial com Exu para resolver problemas urgentes.',
    icon: '🔥',
    price: 'A partir de R$ 300',
  },
]

const depoimentos = [
  {
    id: 1,
    name: 'Ricardo M.',
    text: 'Após o trabalho de Exu, minha vida financeira mudou completamente. As portas se abriram!',
    rating: 5,
    avatar: '🧔',
  },
  {
    id: 2,
    name: 'Fernanda S.',
    text: 'Estava passando por um momento difícil. O despacho de Exu me trouxe paz e solução.',
    rating: 5,
    avatar: '👩',
  },
  {
    id: 3,
    name: 'Carlos A.',
    text: 'Recomendo! O trabalho de proteção me deu segurança e tranquilidade.',
    rating: 5,
    avatar: '👨‍🦳',
  },
  {
    id: 4,
    name: 'Patricia L.',
    text: 'Meu negócio estava parado. Após o trabalho de prosperidade, faturamento triplicou!',
    rating: 5,
    avatar: '👩‍💼',
  },
]

function Oloja() {
  const [selectedService, setSelectedService] = useState<typeof servicos[0] | null>(null)
  const [showModal, setShowModal] = useState(false)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-red-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-orange-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-yellow-500 rounded-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-red-400 text-sm font-medium mb-6 border border-red-500/30">
                🔥 Olojá - Exu do Mercado
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                Poder de <span className="text-red-500">Exu</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Exu é o guardião dos caminhos, o abridor de portas, o senhor do mercado e da comunicação. 
                Aqui você encontra trabalhos espirituais para resolver seus problemas com rapidez e eficácia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    setSelectedService(servicos[0])
                    setShowModal(true)
                  }}
                  className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Consultar Agora
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a 
                  href="#servicos"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Ver Serviços
                </a>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                  <span className="text-[120px] md:text-[160px]">🔥</span>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Quem é <span className="text-red-500">Exu</span>?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚪</span>
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">Abre os Caminhos</h3>
              <p className="text-gray-400">
                Exu é o senhor das encruzilhadas, aquele que abre e fecha portas. 
                Ele remove obstáculos e facilita os caminhos.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">Rapidez e Eficiência</h3>
              <p className="text-gray-400">
                Os trabalhos com Exu são conhecidos por sua rapidez. 
                Soluções rápidas para problemas urgentes.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-750 transition-colors">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-3">Proteção e Segurança</h3>
              <p className="text-gray-400">
                Exu protege seus filhos contra energias negativas, 
                mau-olhado e ataques espirituais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-padding bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Serviços de <span className="text-red-500">Exu</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Escolha o serviço que melhor atende sua necessidade espiritual.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico) => (
              <div
                key={servico.id}
                onClick={() => {
                  setSelectedService(servico)
                  setShowModal(true)
                }}
                className="bg-gray-800 rounded-2xl p-6 cursor-pointer hover:bg-gray-750 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{servico.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-2">{servico.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{servico.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-400 font-semibold">{servico.price}</span>
                  <span className="text-gray-500 text-sm group-hover:text-red-400 transition-colors">
                    Saiba mais →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Depoimentos
            </h2>
            <p className="text-gray-400">
              Veja o que dizem aqueles que já experimentaram o poder de Exu.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {depoimentos.map((depoimento) => (
              <div key={depoimento.id} className="bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">"{depoimento.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl">
                    {depoimento.avatar}
                  </div>
                  <span className="text-white font-semibold">{depoimento.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Precisa de Urgência?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Exu resolve rapidamente. Entre em contato agora mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setSelectedService(servicos[5])
                setShowModal(true)
              }}
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Consultar Agora
            </button>
            <a 
              href="https://wa.me/5511999999999?text=Olá! Preciso de uma consulta com Exu."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-700">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">{selectedService.icon}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                {selectedService.title}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-6">{selectedService.description}</p>
              <div className="bg-gray-800 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Valor:</span>
                  <span className="text-xl font-bold text-red-400">{selectedService.price}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  Fechar
                </button>
                <a
                  href={`https://wa.me/5511999999999?text=Olá! Tenho interesse no serviço: ${selectedService.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 text-center"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Oloja
