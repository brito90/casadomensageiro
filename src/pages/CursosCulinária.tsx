import Layout from '../layouts/Layout'
import Seo from '../components/Seo'

function CursosCulinária() {
  return (
    <Layout>
      <Seo title="CursosCulinária" />
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              <span className="text-gradient">Cursos</span> de Culinária
            </h2>
            <p className="text-gray-600">
              Formação em culinária tradicional, conectando arte culinária
              com espiritualidade e nutrição consciente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🍞</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Pão e Oferendas
              </h3>
              <p className="text-gray-600 text-sm">
                Técnicas de panificação sagrada, uso de ingredientes simbólicos
                e preparação de alimentos para rituais e celebrações.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🍲</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Cozinha Espiritual
              </h3>
              <p className="text-gray-600 text-sm">
                Preparação de refeições espirituais, cardápios de oferências e
                o significado dos alimentos nos rituais dos Orixás.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-4">
                <span className="text-3xl">🍵</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">
                Chás e Infusões
              </h3>
              <p className="text-gray-600 text-sm">
                Preparação de chás medicinais e espirituais, propriedades das
                ervas sagradas e combinações para diferentes finalidades
                (proteção, amor, prosperidade).
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors"
            >
              Inscrever-se em Cursos
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CursosCulinária