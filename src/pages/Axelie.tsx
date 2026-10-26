import Layout from '../layouts/Layout'

function Axelie() {
  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Axelie</h2>
            <p className="text-gray-600">
              Espaço dedicado à reflexão e às práticas espirituais avançadas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-primary mb-4">🕯️</div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">Círculos de Axelie</h3>
              <p className="text-gray-600 text-sm">
                Encontros espirituais para aprofundar a conexão com os Orixás.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-primary mb-4">🌿</div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">Ritualização</h3>
              <p className="text-gray-600 text-sm">
                Técnicas avançadas de ritual e oferinação.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-primary mb-4">🎓</div>
              <h3 className="font-heading font-bold text-primary text-xl mb-2">Capacitação</h3>
              <p className="text-gray-600 text-sm">
                Formação contínua para practicantes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Axelie