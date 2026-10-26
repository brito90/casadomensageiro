import Layout from '../layouts/Layout'

function ProjetosAmbientais() {
  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              <span className="text-gradient">Projetos</span> Ambientais
            </h2>
            <p className="text-gray-600">
              Iniciativas concretas de sustentabilidade e responsabilidade
              ambiental dentro da prática espiritual.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🌧️</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Projeto Água Limpa
              </h3>
              <p className="text-gray-600 text-sm">
                Ação de conscientização sobre a preservação das águas,
                bênçãos aos rios e cuidados com a qualidade das fontes
                hídricas na comunidade.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Floresta Cuidada
              </h3>
              <p className="text-gray-600 text-sm">
                Projeto de manejo sustentável de áreas verdes, plantio de espécies
                nativas e proteção de habitats naturais ao redor do terreiro.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🗑️</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Gestão de Resíduos
              </h3>
              <p className="text-gray-600 text-sm">
                Programa de reciclagem e destinação correta de resíduos,
                incluindo rituais de encerramento energético de materiais.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors"
            >
              Conhecer Mais Projetos
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjetosAmbientais