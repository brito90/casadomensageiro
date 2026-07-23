import { useState } from 'react'
import Layout from '../layouts/Layout'
import { useTilt } from '../utils/useTilt'

const categorias = [
  { id: 'todos', name: 'Todos', icon: '✨' },
  { id: 'espiritualidade', name: 'Espiritualidade', icon: '🙏' },
  { id: 'historia', name: 'História', icon: '📚' },
  { id: 'saude', name: 'Saúde Mental', icon: '🧠' },
  { id: 'cultura', name: 'Cultura', icon: '🎭' },
  { id: 'entrevistas', name: 'Entrevistas', icon: '🎤' },
]

const podcasts = [
  { id: 1, title: 'Vozes do Terreiro', description: 'Conversas com membros da comunidade sobre fé e vida.', category: 'entrevistas', duration: '45 min', episodes: 24, gradient: 'from-red-500 to-orange-500', host: 'Pai Rychelmy', latest: 'Ep. 24 - A Paz Interior' },
  { id: 2, title: 'Sabedoria Ancestral', description: 'Histórias e ensinamentos transmitidos por gerações.', category: 'historia', duration: '38 min', episodes: 18, gradient: 'from-amber-600 to-orange-700', host: 'Mãe de Santo', latest: 'Ep. 18 - Os Primeiros Passos' },
  { id: 3, title: 'Mente e Espírito', description: 'A conexão entre saúde mental e espiritualidade.', category: 'saude', duration: '32 min', episodes: 15, gradient: 'from-green-500 to-emerald-600', host: 'Dr. Espiritual', latest: 'Ep. 15 - Ansiedade e Fé' },
  { id: 4, title: 'Ritmos Sagrados', description: 'A música e sua importância nos rituais.', category: 'cultura', duration: '28 min', episodes: 12, gradient: 'from-purple-500 to-pink-600', host: 'Mestre de Atabaques', latest: 'Ep. 12 - Toques de Oxum' },
  { id: 5, title: 'Caminhos de Exu', description: 'Desmistificando Exu e seu papel na espiritualidade.', category: 'espiritualidade', duration: '42 min', episodes: 20, gradient: 'from-red-700 to-red-900', host: 'Pai Rychelmy', latest: 'Ep. 20 - Exu e a Proteção' },
  { id: 6, title: 'Bate-papo com Orixá', description: 'Entendendo cada Orixá através de histórias e simbologias.', category: 'espiritualidade', duration: '35 min', episodes: 16, gradient: 'from-blue-500 to-cyan-600', host: 'Comunidade', latest: 'Ep. 16 - Oxalá, o Criador' },
  { id: 7, title: 'Mulheres do Axé', description: 'Histórias de mulheres fortes da comunidade.', category: 'entrevistas', duration: '40 min', episodes: 10, gradient: 'from-pink-500 to-rose-600', host: 'Mãe de Santo', latest: 'Ep. 10 - A Força de Oxum' },
  { id: 8, title: 'Alimentação e Orixás', description: 'Como a comida se conecta com a espiritualidade.', category: 'cultura', duration: '30 min', episodes: 8, gradient: 'from-yellow-500 to-amber-600', host: 'Cozinheira do Terreiro', latest: 'Ep. 8 - Comidas de Xangô' },
]

const episodes = [
  { id: 1, podcastId: 1, number: 24, title: 'A Paz Interior', duration: '45 min', date: '2026-07-15', description: 'Uma conversa profunda sobre como encontrar paz em meio ao caos da vida moderna.' },
  { id: 2, podcastId: 1, number: 23, title: 'Fé nos Momentos Difíceis', duration: '42 min', date: '2026-07-08', description: 'Como a fé nos ajuda a superar os momentos mais difíceis da vida.' },
  { id: 3, podcastId: 1, number: 22, title: 'A Força da Comunidade', duration: '38 min', date: '2026-07-01', description: 'O poder da união e do apoio mútuo na jornada espiritual.' },
]

function PodcastCard({ podcast }: { podcast: typeof podcasts[0] }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>({ maxTilt: 8, scale: 1.03 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`h-48 bg-gradient-to-br ${podcast.gradient} relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.752 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.129-.31-1.082-.66.02-.18.274-.36.74-.5 2.897-.93 4.83-1.56 5.755-1.87 2.645-.91 3.165-.78 3.517-.474.1.082.167.202.17.334z" />
            </svg>
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full">{podcast.episodes} episódios</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-primary text-lg mb-1 group-hover:text-primary-600 transition-colors">{podcast.title}</h3>
        <p className="text-gray-500 text-sm mb-2">por {podcast.host}</p>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{podcast.description}</p>
        <div className="bg-primary-50 rounded-xl p-3">
          <p className="text-xs text-gray-500 mb-1">Último episódio:</p>
          <p className="text-primary font-semibold text-sm">{podcast.latest}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {podcast.duration}
          </span>
          <button className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function Podcasts() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [isPlaying, setIsPlaying] = useState(false)

  const filteredPodcasts = selectedCategory === 'todos' 
    ? podcasts 
    : podcasts.filter(p => p.category === selectedCategory)

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            🎙️ Podcasts
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Podcasts da <span className="text-accent">Casa do Mensageiro</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ouça nossos podcasts sobre espiritualidade, história, cultura e muito mais.
          </p>
        </div>
      </section>

      {/* Player Bar */}
      <section className="bg-gray-900 text-white py-4 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center flex-shrink-0"
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">Vozes do Terreiro - Ep. 24</p>
              <p className="text-sm text-gray-400 truncate">A Paz Interior</p>
            </div>
            <div className="hidden md:flex items-center gap-3 flex-1 max-w-md">
              <span className="text-xs text-gray-400">12:34</span>
              <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-primary rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400">45:00</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'gradient-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">🎙️ Todos os Podcasts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPodcasts.map((podcast) => (
              <PodcastCard key={podcast.id} podcast={podcast} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Episodes */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-6">🎧 Últimos Episódios</h2>
          <div className="space-y-4">
            {episodes.map((ep) => (
              <div key={ep.id} className="bg-gray-50 rounded-xl p-4 flex items-center gap-4 hover:bg-gray-100 transition-colors cursor-pointer">
                <button className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0 hover:opacity-90">
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500">Ep. {ep.number}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{ep.date}</span>
                  </div>
                  <h3 className="font-semibold text-primary truncate">{ep.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-1">{ep.description}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-sm text-gray-500">{ep.duration}</span>
                  <button className="text-gray-400 hover:text-primary">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Inscreva-se nos Podcasts</h2>
          <p className="text-white/80 mb-8">Receba notificações de novos episódios diretamente no seu e-mail.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input type="email" placeholder="Seu melhor e-mail" className="flex-1 px-6 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent" />
            <button className="btn-accent px-8 py-3">Inscrever</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Podcasts
