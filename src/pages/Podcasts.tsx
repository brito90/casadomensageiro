import { useState, useEffect, useRef } from 'react'
import Layout from '../layouts/Layout'

const podcasts = [
  { id: 1, title: 'Vozes do Terreiro', description: 'Conversas com membros da comunidade sobre fé e vida.', category: 'entrevistas', duration: '45 min', episodes: 24, gradient: 'from-red-500 to-orange-500', host: 'Pai Rychelmy', latest: 'A Paz Interior', color: '#DC2626' },
  { id: 2, title: 'Sabedoria Ancestral', description: 'Histórias e ensinamentos transmitidos por gerações.', category: 'historia', duration: '38 min', episodes: 18, gradient: 'from-amber-600 to-orange-700', host: 'Mãe de Santo', latest: 'Os Primeiros Passos', color: '#D97706' },
  { id: 3, title: 'Mente e Espírito', description: 'A conexão entre saúde mental e espiritualidade.', category: 'saude', duration: '32 min', episodes: 15, gradient: 'from-green-500 to-emerald-600', host: 'Dr. Espiritual', latest: 'Ansiedade e Fé', color: '#059669' },
  { id: 4, title: 'Ritmos Sagrados', description: 'A música e sua importância nos rituais.', category: 'cultura', duration: '28 min', episodes: 12, gradient: 'from-purple-500 to-pink-600', host: 'Mestre de Atabaques', latest: 'Toques de Oxum', color: '#9333EA' },
  { id: 5, title: 'Caminhos de Exu', description: 'Desmistificando Exu e seu papel na espiritualidade.', category: 'espiritualidade', duration: '42 min', episodes: 20, gradient: 'from-red-700 to-red-900', host: 'Pai Rychelmy', latest: 'Exu e a Proteção', color: '#991B1B' },
  { id: 6, title: 'Bate-papo com Orixá', description: 'Entendendo cada Orixá através de histórias.', category: 'espiritualidade', duration: '35 min', episodes: 16, gradient: 'from-blue-500 to-cyan-600', host: 'Comunidade', latest: 'Oxalá, o Criador', color: '#2563EB' },
]

const allEpisodes = [
  { id: 1, podcastId: 1, number: 24, title: 'A Paz Interior', duration: '45:00', date: '15 Jul 2026', description: 'Uma conversa profunda sobre como encontrar paz em meio ao caos da vida moderna.', plays: 1250 },
  { id: 2, podcastId: 1, number: 23, title: 'Fé nos Momentos Difíceis', duration: '42:00', date: '08 Jul 2026', description: 'Como a fé nos ajuda a superar os momentos mais difíceis da vida.', plays: 980 },
  { id: 3, podcastId: 1, number: 22, title: 'A Força da Comunidade', duration: '38:00', date: '01 Jul 2026', description: 'O poder da união e do apoio mútuo na jornada espiritual.', plays: 1100 },
  { id: 4, podcastId: 2, number: 18, title: 'Os Primeiros Passos', duration: '38:00', date: '12 Jul 2026', description: 'Como começar sua jornada espiritual no Candomblé.', plays: 850 },
  { id: 5, podcastId: 3, number: 15, title: 'Ansiedade e Fé', duration: '32:00', date: '10 Jul 2026', description: 'Como a fé pode ajudar a lidar com ansiedade e estresse.', plays: 1350 },
  { id: 6, podcastId: 4, number: 12, title: 'Toques de Oxum', duration: '28:00', date: '05 Jul 2026', description: 'Os ritmos sagrados dedicados à mãe das águas doces.', plays: 720 },
  { id: 7, podcastId: 5, number: 20, title: 'Exu e a Proteção', duration: '42:00', date: '14 Jul 2026', description: 'Desmistificando o papel protetor de Exu.', plays: 1580 },
  { id: 8, podcastId: 6, number: 16, title: 'Oxalá, o Criador', duration: '35:00', date: '07 Jul 2026', description: 'A história do maior Orixá e sua sabedoria.', plays: 920 },
]

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, threshold])
  return isInView
}

function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div
          className="text-center px-4 max-w-5xl mx-auto"
          style={{ transform: `translateY(${-scrollY * 0.3}px)`, opacity: 1 - scrollY / 500 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm">AO VIVO</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 leading-none">
            POD<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">CASTS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-xl mx-auto mb-8">
            Histórias, sabedoria e conexão espiritual através do áudio.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Ouvir Agora
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

function FeaturedPodcast({ podcast }: { podcast: typeof podcasts[0] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, 0.2)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setScrollY(-rect.top)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Parallax */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${podcast.gradient} transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-64 h-64 border border-white/20 rounded-full"
          style={{ transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.03}px)` }}
        />
        <div
          className="absolute w-48 h-48 border border-white/10 rounded-full"
          style={{ transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.05}px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm mb-4">
              Destaque
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              {podcast.title}
            </h2>
            <p className="text-xl text-white/80 mb-6">{podcast.description}</p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-white/80">{podcast.host}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-white/80">{podcast.episodes} episódios</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Ouvir Agora
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Ver Episódios
              </button>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.752 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.129-.31-1.082-.66.02-.18.274-.36.74-.5 2.897-.93 4.83-1.56 5.755-1.87 2.645-.91 3.165-.78 3.517-.474.1.082.167.202.17.334z" />
                    </svg>
                  </div>
                  <p className="text-white font-heading font-bold text-xl mb-1">{podcast.latest}</p>
                  <p className="text-white/60 text-sm">Último episódio</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">🎧</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - windowHeight)))
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="h-full flex items-center bg-gray-900">
          <div
            className="flex gap-8 px-8 transition-transform duration-100"
            style={{ transform: `translateX(-${scrollProgress * 200}vw)` }}
          >
            {podcasts.map((podcast) => (
              <div
                key={podcast.id}
                className="flex-shrink-0 w-[80vw] md:w-[40vw] h-[60vh] rounded-3xl overflow-hidden relative group cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${podcast.color}, ${podcast.color}88)` }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-white text-sm mb-4">
                      {podcast.episodes} episódios
                    </span>
                    <h3 className="text-3xl font-heading font-bold text-white mb-2">{podcast.title}</h3>
                    <p className="text-white/80">{podcast.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">{podcast.host}</span>
                    <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-100"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <p className="text-white/60 text-sm mt-2 text-center">
            Role para explorar mais podcasts
          </p>
        </div>
      </div>
    </div>
  )
}

function LatestEpisodes() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, 0.1)

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Últimos <span className="text-red-500">Episódios</span>
          </h2>
          <p className="text-gray-400 text-lg">Ouça agora os episódios mais recentes</p>
        </div>

        <div className="space-y-4">
          {allEpisodes.slice(0, 6).map((ep, index) => (
            <div
              key={ep.id}
              className={`bg-gray-900 rounded-2xl p-6 flex items-center gap-6 hover:bg-gray-800 transition-all duration-500 cursor-pointer group ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-gray-500">{podcasts.find(p => p.id === ep.podcastId)?.title}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-xs text-gray-500">Ep. {ep.number}</span>
                </div>
                <h3 className="text-white font-semibold text-lg truncate">{ep.title}</h3>
                <p className="text-gray-500 text-sm truncate">{ep.description}</p>
              </div>
              <div className="flex items-center gap-6 flex-shrink-0">
                <div className="hidden md:flex items-center gap-2 text-gray-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm">{ep.plays.toLocaleString()}</span>
                </div>
                <span className="text-gray-500 text-sm">{ep.duration}</span>
                <button className="text-gray-500 hover:text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FloatingPlayer() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${isExpanded ? 'h-[80vh]' : 'h-20'}`}>
      <div className="h-full bg-gray-900 border-t border-gray-800">
        {/* Mini Player */}
        <div className="h-20 px-4 flex items-center gap-4">
          <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.752 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.129-.31-1.082-.66.02-.18.274-.36.74-.5 2.897-.93 4.83-1.56 5.755-1.87 2.645-.91 3.165-.78 3.517-.474.1.082.167.202.17.334z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold truncate">A Paz Interior</p>
            <p className="text-gray-400 text-sm truncate">Vozes do Terreiro - Ep. 24</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
              {isPlaying ? (
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
              ) : (
                <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>
            <button onClick={() => setIsExpanded(!isExpanded)} className="text-gray-400 hover:text-white">
              <svg className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="px-4 pb-2">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>12:34</span>
            <span>45:00</span>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="text-center">
              <div className="w-32 h-32 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.752 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.129-.31-1.082-.66.02-.18.274-.36.74-.5 2.897-.93 4.83-1.56 5.755-1.87 2.645-.91 3.165-.78 3.517-.474.1.082.167.202.17.334z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">A Paz Interior</h3>
              <p className="text-gray-400">Vozes do Terreiro • Episódio 24</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-2">Sobre o Episódio</h4>
              <p className="text-gray-400 text-sm">Uma conversa profunda sobre como encontrar paz em meio ao caos da vida moderna. O Pai Rychelmy compartilha ensinamentos ancestrais sobre paz interior.</p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-white/10 text-white py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                📥 Download
              </button>
              <button className="flex-1 bg-white/10 text-white py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors">
                📤 Compartilhar
              </button>
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
      <FeaturedPodcast podcast={podcasts[0]} />
      <HorizontalScrollSection />
      <LatestEpisodes />
      <FloatingPlayer />
      <div className="h-20" />
    </Layout>
  )
}

export default Podcasts
