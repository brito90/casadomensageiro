import { useState } from 'react'
import Layout from '../layouts/Layout'
import { useTilt } from '../utils/useTilt'

const categorias = [
  { id: 'todos', name: 'Todos', icon: '✨' },
  { id: 'festas', name: 'Festas', icon: '🎉' },
  { id: 'documentarios', name: 'Documentários', icon: '🎬' },
  { id: 'videos', name: 'Vídeos', icon: '📹' },
  { id: 'fotos', name: 'Fotos', icon: '📸' },
]

const festas = [
  { id: 1, title: 'Festa de Iemanjá', date: '2026-02-02', time: '14:00', location: 'Praia do Porto', description: 'Homenagem anual à Rainha do Mar. Oferecimento de flores e presentes nas águas.', orixa: 'Iemanjá', color: 'from-blue-500 to-cyan-400', category: 'festas', participants: 500 },
  { id: 2, title: 'Festa de Xangô', date: '2026-06-24', time: '16:00', location: 'Terreiro Principal', description: 'Celebração do Orixá da Justiça. Toques especiais e comidas de Xangô.', orixa: 'Xangô', color: 'from-red-600 to-orange-500', category: 'festas', participants: 350 },
  { id: 3, title: 'Festa de Oxum', date: '2026-08-08', time: '15:00', location: 'Fonte da Água', description: 'Festa das águas doces. Flores amarelas e oferendas para a Mãe de Oxum.', orixa: 'Oxum', color: 'from-yellow-400 to-amber-500', category: 'festas', participants: 400 },
  { id: 4, title: 'Festa de Ogum', date: '2026-04-23', time: '17:00', location: 'Terreiro dos Guerreiros', description: 'O guerreiro das sete espadas. Toque de guerra e comidas de ferro.', orixa: 'Ogum', color: 'from-blue-800 to-red-700', category: 'festas', participants: 300 },
  { id: 5, title: 'Festa de Oxalá', date: '2026-12-25', time: '06:00', location: 'Terreiro Principal', description: 'O maior Orixá. Jejum e orações desde as primeiras horas do dia.', orixa: 'Oxalá', color: 'from-white to-gray-200', category: 'festas', participants: 600 },
  { id: 6, title: 'Festa de Nanã', date: '2026-09-08', time: '14:00', location: 'Quadra da Mãe Velha', description: 'Homenagem à avó dos Orixás. Barro sagrado e cantos ancestrais.', orixa: 'Nanã', color: 'from-purple-800 to-indigo-900', category: 'festas', participants: 250 },
]

const documentarios = [
  { id: 101, title: 'A Origem do Candomblé no Brasil', description: 'Documentário sobre a história e chegada do Candomblé ao Brasil.', duration: '45 min', year: 2023, views: 15000, category: 'documentarios', gradient: 'from-amber-600 to-orange-700' },
  { id: 102, title: 'Os Orixás e a Natureza', description: 'A conexão sagrada entre os Orixás e os elementos da natureza.', duration: '38 min', year: 2024, views: 12000, category: 'documentarios', gradient: 'from-green-600 to-emerald-700' },
  { id: 103, title: 'Rituais de Passagem', description: 'Os rituais de iniciação e seus significados espirituais.', duration: '52 min', year: 2022, views: 18000, category: 'documentarios', gradient: 'from-purple-600 to-pink-700' },
  { id: 104, title: 'A Música Sagrada', description: 'Os cantos e toques que conectam o mundo físico ao espiritual.', duration: '41 min', year: 2024, views: 9500, category: 'documentarios', gradient: 'from-red-600 to-rose-700' },
]

const videos = [
  { id: 201, title: 'Toque de Xangô ao Vivo', description: 'Registro do toque de Xangô na última festa do terreiro.', duration: '12:34', views: 5200, category: 'videos', gradient: 'from-red-500 to-orange-500' },
  { id: 202, title: 'Canto de Oxum - Festa da Água', description: 'Momento especial do canto à Oxum na praia.', duration: '8:21', views: 4800, category: 'videos', gradient: 'from-yellow-500 to-amber-500' },
  { id: 203, title: 'Dança de Ogum', description: 'Apresentação da dança guerreira de Ogum.', duration: '10:15', views: 6100, category: 'videos', gradient: 'from-blue-500 to-indigo-500' },
  { id: 204, title: 'Bateria de Atabaques', description: 'Os ritmos ancestrais dos atabaques em honra aos Orixás.', duration: '15:42', views: 7300, category: 'videos', gradient: 'from-purple-500 to-violet-500' },
  { id: 205, title: 'Banho de Ervas', description: 'O ritual de purificação com ervas sagradas.', duration: '9:30', views: 3900, category: 'videos', gradient: 'from-green-500 to-teal-500' },
  { id: 206, title: 'Festa de Iemanjá 2025', description: 'Os melhores momentos da festa da Rainha do Mar.', duration: '18:45', views: 12500, category: 'videos', gradient: 'from-cyan-500 to-blue-500' },
]

const fotos = [
  { id: 301, title: 'Galeria Festa de Iemanjá', count: 156, category: 'fotos', gradient: 'from-blue-500 to-cyan-400' },
  { id: 302, title: 'Galeria Festa de Xangô', count: 124, category: 'fotos', gradient: 'from-red-500 to-orange-500' },
  { id: 303, title: 'Galeria Festa de Oxum', count: 142, category: 'fotos', gradient: 'from-yellow-400 to-amber-500' },
  { id: 304, title: 'Galeria Rituais', count: 98, category: 'fotos', gradient: 'from-purple-500 to-pink-500' },
]

function formatDate(dateString: string) {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

function VideoCard({ video }: { video: typeof videos[0] }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>({ maxTilt: 8, scale: 1.03 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`relative h-40 bg-gradient-to-br ${video.gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-primary text-sm mb-1 group-hover:text-primary-600 transition-colors line-clamp-1">
          {video.title}
        </h3>
        <p className="text-gray-500 text-xs line-clamp-2">{video.description}</p>
        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          {video.views.toLocaleString()} visualizações
        </div>
      </div>
    </div>
  )
}

function DocumentarioCard({ doc }: { doc: typeof documentarios[0] }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>({ maxTilt: 8, scale: 1.03 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`relative h-48 bg-gradient-to-br ${doc.gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500">🎬</span>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full">Documentário</span>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {doc.duration}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-primary mb-2 group-hover:text-primary-600 transition-colors">
          {doc.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{doc.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{doc.year}</span>
          <span className="text-primary font-semibold">{doc.views.toLocaleString()} views</span>
        </div>
      </div>
    </div>
  )
}

function AlbumCard({ album }: { album: typeof fotos[0] }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>({ maxTilt: 8, scale: 1.03 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bg-gradient-to-br ${album.gradient} rounded-2xl p-6 text-white hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
      <div className="relative">
        <span className="text-4xl mb-4 block">📸</span>
        <h3 className="font-heading font-bold text-xl mb-2">{album.title}</h3>
        <p className="text-white/80">{album.count} fotos</p>
      </div>
    </div>
  )
}

function Festas() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [selectedFesta, setSelectedFesta] = useState<typeof festas[0] | null>(null)

  const filteredContent = () => {
    if (selectedCategory === 'todos') {
      return { festas, documentarios, videos, fotos }
    }
    if (selectedCategory === 'festas') return { festas, documentarios: [], videos: [], fotos: [] }
    if (selectedCategory === 'documentarios') return { festas: [], documentarios, videos: [], fotos: [] }
    if (selectedCategory === 'videos') return { festas: [], documentarios: [], videos, fotos: [] }
    if (selectedCategory === 'fotos') return { festas: [], documentarios: [], videos: [], fotos }
    return { festas, documentarios, videos, fotos }
  }

  const content = filteredContent()

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            🎉 Festas e Celebrações
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Festas dos <span className="text-accent">Orixás</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Acompanhe as festas, documentários, vídeos e fotos das celebrações do terreiro.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
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

      {/* Content */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Festas */}
          {content.festas.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">📅 Calendário de Festas</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.festas.map((festa) => (
                  <div
                    key={festa.id}
                    onClick={() => setSelectedFesta(festa)}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className={`h-32 bg-gradient-to-br ${festa.color} relative`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-5xl font-heading font-bold opacity-30 group-hover:scale-110 transition-transform">
                          {festa.orixa.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-white text-primary text-xs px-3 py-1 rounded-full font-bold shadow">{festa.orixa}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold text-primary mb-2">{festa.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">{festa.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{formatDate(festa.date)}</span>
                        <span>👥 {festa.participants}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documentários */}
          {content.documentarios.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">🎬 Documentários</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.documentarios.map((doc) => (
                  <DocumentarioCard key={doc.id} doc={doc} />
                ))}
              </div>
            </div>
          )}

          {/* Vídeos */}
          {content.videos.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">📹 Vídeos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          )}

          {/* Fotos */}
          {content.fotos.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">📸 Galerias de Fotos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.fotos.map((album) => (
                  <AlbumCard key={album.id} album={album} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal Festa */}
      {selectedFesta && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className={`h-40 bg-gradient-to-br ${selectedFesta.color} relative`}>
              <button onClick={() => setSelectedFesta(null)} className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/50">✕</button>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-7xl font-heading font-bold opacity-40">{selectedFesta.orixa}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">{selectedFesta.title}</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>📅 {formatDate(selectedFesta.date)}</p>
                <p>🕐 {selectedFesta.time}</p>
                <p>📍 {selectedFesta.location}</p>
                <p>👥 {selectedFesta.participants} participantes</p>
              </div>
              <p className="text-gray-600 mb-6">{selectedFesta.description}</p>
              <button onClick={() => setSelectedFesta(null)} className="w-full btn-primary">Confirmar Presença</button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Festas
