import Layout from '../layouts/Layout'

function DiaCultural() {
  return (
    <Layout>
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              <span className="text-gradient">Dia</span> Cultural
            </h2>
            <p className="text-gray-600">
              Celebração da tradição, arte e sabedoria ancestral das comunidades
              tradicionais.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🎵</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Música e Canto Sagrado
              </h3>
              <p className="text-gray-600 text-sm">
                A importância dos cantos, batucadas e instrumentos tradicionais
                na transmissão da tradição oral.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Artesanato Tradicional
              </h3>
              <p className="text-gray-600 text-sm">
                Técnicas ancestrais de artesanato: trançado, cerâmica, pintura
                facial e corporativa com significados espirituais.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">📜</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Contação de Histórias
              </h3>
              <p className="text-gray-600 text-sm">
                O poder das histórias (histórias de Orixás, lendas de fundação,
                lições de vida) na formação da identidade cultural.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors"
            >
              Inscrever-se em Eventos Culturais
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DiaCultural