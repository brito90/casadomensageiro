import Layout from '../layouts/Layout'

function OlojaComCatalog() {
  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* OLOJÁ SECTION */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Olojá</h2>
            <p className="text-gray-600 text-lg">
              O espa sagrado onde se recebem as iniciações e as comunicações
              espirituais mais profundas. A sala de trabalho principal do terreiro.
            </p>
          </div>

          {/* HISTÓRIAS SECTION */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              <span className="text-gradient">Histórias</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Histórias sagradas da comunidade, relatos de experiências espirituais
              e depoimentos de membros da comunidade.
            </p>
          </div>

          {/* FOTOS CATÁLOGO SECTION */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-3">📸</div>
                <h3 className="font-heading font-bold text-primary text-base mb-2">
                  Fotos do Terreiro
                </h3>
                <p className="text-gray-600 text-sm">
                  Galeria de registros fotográficos dos espaços sagrados,
                  rituais, eventos comunitários e momentos de celebração.
                </p>
              </div>
              <p className="text-gray-500 text-center text-sm">
                Fotos em breve - aguarde o upload do álbum cultural
              </p>
            </div>
            <div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-6 shadow-lg text-center">
                <div className="text-4xl font-bold text-primary mb-3">📖</div>
                <h3 className="font-heading font-bold text-primary text-base mb-2">
                  Catálogo de Histórias
                </h3>
                <p className="text-gray-600 text-sm">
                  Relatos orais e escritos das histórias fundadoras, lendas de
                  Orixás e depoimentos de líderes espirituais da comunidade.
                </p>
              </div>
              <p className="text-gray-500 text-center text-sm">
                Catálogo em desenvolvimento - conteúdo em breve
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default OlojaComCatalog