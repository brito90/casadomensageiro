import Layout from '../layouts/Layout'
import Seo from '../components/Seo'

function TrilhaEcológica() {
  return (
    <Layout>
      <Seo title="TrilhaEcológica" />
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              <span className="text-gradient">Trilha</span> Ecológica
            </h2>
            <p className="text-gray-600">
              Um percurso de aprendizagem sobre a relação entre a espiritualidade
              e o cuidado com o meio ambiente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Compostagem Espiritual
              </h3>
              <p className="text-gray-600 text-sm">
                Transformação de resíduos em energia positiva através de processos
                naturais e rituais de retorno à terra.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🌧️</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Chuva Consciente
              </h3>
              <p className="text-gray-600 text-sm">
                Rituais e práticas para alinhar as energias com as estações do ano
                e os ciclos da natureza.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🌳</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Reflorestamento Espiritual
              </h3>
              <p className="text-gray-600 text-sm">
                Práticas de plantio e dedicação às matas, honrando os espíritos
                da natureza e dos Orixás protetores dos bosques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TrilhaEcológica