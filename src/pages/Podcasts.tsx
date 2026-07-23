import { useState, useEffect } from 'react'
import Layout from '../layouts/Layout'

const podcasts = [
  { id: 1, title: 'Vozes do Terreiro', host: 'Pai Rychelmy', category: 'Entrevistas', color: '#EF4444', episodes: 24, description: 'Conversas profundas com membros da comunidade.' },
  { id: 2, title: 'Sabedoria Ancestral', host: 'Mãe de Santo', category: 'História', color: '#F59E0B', episodes: 18, description: 'Ensinamentos transmitidos por gerações.' },
  { id: 3, title: 'Mente e Espírito', host: 'Dr. Espiritual', category: 'Saúde Mental', color: '#10B981', episodes: 15, description: 'Conexão entre saúde mental e fé.' },
  { id: 4, title: 'Ritmos Sagrados', host: 'Mestre de Atabaques', category: 'Música', color: '#8B5CF6', episodes: 12, description: 'A música nos rituais sagrados.' },
  { id: 5, title: 'Caminhos de Exu', host: 'Pai Rychelmy', category: 'Espiritualidade', color: '#DC2626', episodes: 20, description: 'Desmistificando Exu.' },
  { id: 6, title: 'Bate-papo com Orixá', host: 'Comunidade', category: 'Mitologia', color: '#2563EB', episodes: 16, description: 'Entendendo cada Orixá.' },
  { id: 7, title: 'Mulheres do Axé', host: 'Mãe de Santo', category: 'Entrevistas', color: '#EC4899', episodes: 10, description: 'Histórias de mulheres fortes.' },
  { id: 8, title: 'Alimentação e Orixás', host: 'Cozinheira', category: 'Cultura', color: '#14B8A6', episodes: 8, description: 'Comida e espiritualidade.' },
]

const recentEpisodes = [
  { id: 1, podcast: 1, title: 'A Paz Interior', duration: '45:00', plays: 1250 },
  { id: 2, podcast: 5, title: 'Exu e a Proteção', duration: '42:00', plays: 1580 },
  { id: 3, podcast: 3, title: 'Ansiedade e Fé', duration: '32:00', plays: 1350 },
  { id: 4, podcast: 2, title: 'Os Primeiros Passos', duration: '38:00', plays: 850 },
  { id: 5, podcast: 4, title: 'Toques de Oxum', duration: '28:00', plays: 720 },
  { id: 6, podcast: 6, title: 'Oxalá, o Criador', duration: '35:00', plays: 920 },
]

function SoundWave({ isPlaying, color }: { isPlaying: boolean; color: string }) {
  return (
    <div className="flex items-center gap-1 h-8">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-1 rounded-full transition-all duration-300"
          style={{
            backgroundColor: color,
            height: isPlaying ? `${20 + Math.random() * 60}%` : '20%',
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  )
}

function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['OUÇA', 'SINTA', 'CONECTE', 'TRANFORME']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#EF4444', '#F59E0B', '#10B981', '#8B5CF6', '#EC4899'][Math.floor(Math.random() * 5)],
              animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <SoundWave isPlaying={true} color="#EF4444" />
        </div>
        <h1 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter">
          POD<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">CASTS</span>
        </h1>
        <div className="h-16 overflow-hidden mb-8">
          <div className="text-2xl md:text-4xl font-light text-gray-400" style={{ transform: `translateY(-${currentWord * 100}%)`, transition: 'transform 0.5s ease' }}>
            {words.map((word, i) => (
              <div key={i} className="h-16 flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{word}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto">
          Histórias que tocam a alma através do áudio.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          Começar a Ouvir
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

function PodcastCarousel() {
  const [active, setActive] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => setActive((prev) => (prev + 1) % podcasts.length), 4000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const podcast = podcasts[active]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Color Shift */}
      <div className="absolute inset-0 transition-all duration-1000" style={{ background: `radial-gradient(circle at 50% 50%, ${podcast.color}15, transparent 70%)` }} />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden relative" style={{ background: `linear-gradient(135deg, ${podcast.color}, ${podcast.color}88)` }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-12 h-12 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.752 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.129-.31-1.082-.66.02-.18.274-.36.74-.5 2.897-.93 4.83-1.56 5.755-1.87 2.645-.91 3.165-.78 3.517-.474.1.082.167.202.17.334z" /></svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <SoundWave isPlaying={true} color="white" />
              </div>
            </div>
          </div>

          {/* Right - Info */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: `${podcast.color}20`, color: podcast.color }}>
              {podcast.category}
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{podcast.title}</h2>
            <p className="text-gray-400 text-lg mb-2">por {podcast.host}</p>
            <p className="text-gray-500 mb-8">{podcast.description}</p>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{podcast.episodes}</div>
                <div className="text-sm text-gray-500">Episódios</div>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9</div>
                <div className="text-sm text-gray-500">Avaliação</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105" style={{ backgroundColor: podcast.color }}>
                Ouvir Agora
              </button>
              <button className="px-8 py-4 rounded-full font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-all">
                Ver Episódios
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {podcasts.map((p, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setIsAutoPlaying(false) }}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{ backgroundColor: i === active ? p.color : '#374151', transform: i === active ? 'scale(1.5)' : 'scale(1)' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function WaveformSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const duration = 240

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setCurrentTime((prev) => (prev >= duration ? 0 : prev + 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [isPlaying, duration])

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🎧</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">A Paz Interior</h3>
              <p className="text-gray-400">Vozes do Terreiro • Ep. 24</p>
            </div>
          </div>

          {/* Waveform Visualization */}
          <div className="h-24 flex items-center gap-1 mb-4">
            {[...Array(100)].map((_, i) => {
              const height = 20 + Math.sin(i * 0.3) * 30 + Math.random() * 20
              const isPlayed = (i / 100) * duration <= currentTime
              return (
                <div
                  key={i}
                  className="flex-1 rounded-full transition-all duration-200 cursor-pointer hover:opacity-80"
                  style={{
                    height: `${height}%`,
                    backgroundColor: isPlayed ? '#EF4444' : '#374151',
                  }}
                  onClick={() => setCurrentTime(Math.floor((i / 100) * duration))}
                />
              )
            })}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
              ) : (
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function GridSection() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-black text-white text-center mb-16">
          Explore por <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Categoria</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Entrevistas', 'História', 'Música', 'Espiritualidade', 'Saúde Mental', 'Cultura', 'Mitologia', 'Empreendedorismo'].map((cat, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-center text-lg group-hover:scale-110 transition-transform">
                  {cat}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EpisodesGrid() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black text-white">
            Últimos <span className="text-red-500">Episódios</span>
          </h2>
          <button className="text-gray-400 hover:text-white flex items-center gap-2">
            Ver todos <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentEpisodes.map((ep, i) => {
            const podcast = podcasts.find(p => p.id === ep.podcast)!
            return (
              <div key={i} className="bg-gray-900 rounded-2xl p-5 hover:bg-gray-800 transition-colors group cursor-pointer border border-gray-800 hover:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${podcast.color}20` }}>
                    <svg className="w-6 h-6" fill={podcast.color} viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-500 text-sm truncate">{podcast.title}</p>
                    <h3 className="text-white font-semibold truncate">{ep.title}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <span>{ep.duration}</span>
                  <span>{ep.plays.toLocaleString()} plays</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FloatingPlayer() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(35)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5)), 100)
    return () => clearInterval(timer)
  }, [isPlaying])

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${isExpanded ? 'h-[80vh]' : 'h-24'}`}>
      <div className="h-full bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
        {/* Mini Player */}
        <div className="h-24 px-4 flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🎧</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold truncate">A Paz Interior</p>
            <p className="text-gray-500 text-sm truncate">Vozes do Terreiro</p>
          </div>
          <div className="flex items-center gap-4">
            <SoundWave isPlaying={isPlaying} color="#EF4444" />
            <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              {isPlaying ? (
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
              ) : (
                <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>
            <button onClick={() => setIsExpanded(!isExpanded)} className="text-gray-400 hover:text-white">
              <svg className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4 -mt-8 pb-2">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Expanded View */}
        {isExpanded && (
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-6xl">🎧</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-2">A Paz Interior</h3>
              <p className="text-gray-400 mb-8">Vozes do Terreiro • Episódio 24</p>

              <div className="bg-gray-800 rounded-2xl p-6 text-left mb-8">
                <h4 className="text-white font-bold mb-3">Sobre este episódio</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Uma conversa profunda sobre como encontrar paz em meio ao caos da vida moderna.
                  O Pai Rychelmy compartilha ensinamentos ancestrais que ajudam a alcançar a tranquilidade interior.
                </p>
              </div>

              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                  📥 Download
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                  📤 Compartilhar
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors">
                  ❤️ Favoritar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Podcasts() {
  return (
    <Layout>
      <HeroSection />
      <PodcastCarousel />
      <WaveformSection />
      <GridSection />
      <EpisodesGrid />
      <FloatingPlayer />
      <div className="h-24" />
    </Layout>
  )
}

export default Podcasts
