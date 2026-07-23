import Layout from '../layouts/Layout'
import { useState } from 'react'

const videosAntigos = [
  {
    id: 1,
    title: 'Toque de Xangô - Gravação 1985',
    description: 'Registro histórico do toque de Xangô na festa de Santiago',
    year: 1985,
    duration: '12:34',
    thumbnail: '/assets/images/video-thumb-1.jpg',
  },
  {
    id: 2,
    title: 'Canto de Oxum - Festa da Água',
    description: 'Canto tradicional gravado durante a festa de Oxum',
    year: 1992,
    duration: '8:21',
    thumbnail: '/assets/images/video-thumb-2.jpg',
  },
  {
    id: 3,
    title: 'Toque de Ogum - Batalha',
    description: 'Ritmo guerreiro de Ogum com atabaques artesanais',
    year: 1978,
    duration: '15:47',
    thumbnail: '/assets/images/video-thumb-3.jpg',
  },
  {
    id: 4,
    title: 'Canto de Iemanjá - Maré Alta',
    description: 'Canto marinho gravado na praia do Porto',
    year: 1995,
    duration: '10:12',
    thumbnail: '/assets/images/video-thumb-4.jpg',
  },
  {
    id: 5,
    title: 'Toque de Logunedé - Caçador',
    description: 'Toque rápido e enérgico do Orixá das sete espadas',
    year: 1988,
    duration: '9:56',
    thumbnail: '/assets/images/video-thumb-5.jpg',
  },
  {
    id: 6,
    title: 'Canto de Oxalá - Pai Branco',
    description: 'O canto mais antigo do terreiro, transmitido por gerações',
    year: 1972,
    duration: '14:33',
    thumbnail: '/assets/images/video-thumb-6.jpg',
  },
]

const cantos = [
  { id: 1, title: 'Axé Oxum', orixa: 'Oxum', category: 'Feminino' },
  { id: 2, title: 'Toque de Xangô', orixa: 'Xangô', category: 'Masculino' },
  { id: 3, title: 'Canto de Iemanjá', orixa: 'Iemanjá', category: 'Feminino' },
  { id: 4, title: 'Toque de Ogum', orixa: 'Ogum', category: 'Masculino' },
  { id: 5, title: 'Canto de Oxalá', orixa: 'Oxalá', category: 'Neutro' },
  { id: 6, title: 'Toque de Logunedé', orixa: 'Logunedé', category: 'Masculino' },
  { id: 7, title: 'Canto de Nanã', orixa: 'Nanã', category: 'Feminino' },
  { id: 8, title: 'Toque de Obaluaê', orixa: 'Obaluaê', category: 'Masculino' },
]

function Biblioteca() {
  const [activeTab, setActiveTab] = useState<'videos' | 'cantos'>('videos')
  const [selectedVideo, setSelectedVideo] = useState<typeof videosAntigos[0] | null>(null)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Biblioteca de Cantos e Toques
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Preserve a tradição. Acesse nosso acervo histórico de cantos sagrados e toques dos Orixás.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('videos')}
              className={`py-4 px-2 border-b-2 font-semibold transition-colors ${
                activeTab === 'videos'
                  ? 'border-secondary text-primary'
                  : 'border-transparent text-gray-500 hover:text-primary'
              }`}
            >
              Vídeos Históricos
            </button>
            <button
              onClick={() => setActiveTab('cantos')}
              className={`py-4 px-2 border-b-2 font-semibold transition-colors ${
                activeTab === 'cantos'
                  ? 'border-secondary text-primary'
                  : 'border-transparent text-gray-500 hover:text-primary'
              }`}
            >
              Cantos e Toques
            </button>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      {activeTab === 'videos' && (
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                Vídeos Históricos
              </h2>
              <p className="text-gray-600">
                Registros raros de toques e cantos dos Orixás, preservados desde 1972.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videosAntigos.map((video) => (
                <article
                  key={video.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative aspect-video bg-gradient-to-br from-primary to-secondary">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-2 left-2 bg-secondary text-primary text-xs px-2 py-1 rounded font-bold">
                      {video.year}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-primary mb-1">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {video.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cantos Section */}
      {activeTab === 'cantos' && (
        <section className="section-padding bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                Cantos e Toques
              </h2>
              <p className="text-gray-600">
                Repertório completo dos cantos sagrados e toques dos Orixás.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {cantos.map((canto) => (
                <article
                  key={canto.id}
                  className="bg-white rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      canto.category === 'Feminino' ? 'bg-pink-100' :
                      canto.category === 'Masculino' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <span className="text-lg">
                        {canto.category === 'Feminino' ? '♀' :
                         canto.category === 'Masculino' ? '♂' : '☯'}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary">
                        {canto.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Orixá: {canto.orixa}
                      </p>
                    </div>
                  </div>
                  <button className="text-secondary hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-xl font-heading font-bold">
                {selectedVideo.title}
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-white hover:text-secondary transition-colors"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400">Vídeo será reproduzido aqui</p>
                <p className="text-gray-500 text-sm mt-2">{selectedVideo.duration} • {selectedVideo.year}</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Biblioteca
