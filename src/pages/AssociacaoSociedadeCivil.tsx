import Layout from '../layouts/Layout'

function AssociacaoSociedadeCivil() {
  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-6">
              <span className="text-gradient">A</span>ssociação
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              A Casa do Mensageiro como Representação da Sociedade Civil:
              nossa missão, nossos valores e nosso papel na comunidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* QUERA DE SERVIR */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-4">
                Missão Institucional
              </h3>
              <p className="text-gray-600 text-base">
                Consolidar um espaço de acolhimento espiritual que funcione como
                extensão da cidadania, garantindo liberdade de culto e preservação
                das tradições ancestralizadas.
              </p>
            </div>

            {/* QUERA DE CIDADANIA */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-6">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-4">
                Representação da Sociedade Civil
              </h3>
              <p className="text-gray-600 text-base">
                A Casa do Mensageiro atua como entidade de direito privado que
                representa os interesses espirituais e culturais de seus membros
                perante a comunidade urbana e institucional.
              </p>
            </div>

            {/* QUERA DE IMPACTO */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 shadow-lg">
              <div className="gradient-primary rounded-xl p-4 mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-4">
                Impacto Social e Cultural
              </h3>
              <p className="text-gray-600 text-base">
                Contribuição para a diversidade religiosa, combate ao preconceito,
                assistência social aos membros e promoção dos valores da comunidade
                em fóruns locais e regionais.
              </p>
            </div>
          </div>

          {/* DEPOIMENTOS E DOCUMENTOS */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Documentação e Transparência
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-heading font-bold text-primary mb-4">Estatuto Social</h4>
                <p className="text-gray-600 text-sm">
                  Download do documento oficial da associação.
                </p>
                <button
                  className="text-primary underline text-sm hover:text-primary-600 transition-colors"
                >
                  Acessar
                </button>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-heading font-bold text-primary mb-4">Relatórios Anuais</h4>
                <p className="text-gray-600 text-sm">
                  Relatórios de atividades, projetos realizados e impacto social.
                </p>
                <button
                  className="text-primary underline text-sm hover:text-primary-600 transition-colors"
                >
                  Acessar
                </button>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-heading font-bold text-primary mb-4">Parcerias</h4>
                <p className="text-gray-600 text-sm">
                  Instituições e organizações com as quais a Casa mantém
                  vínculos de cooperação e respeito mútuo.
                </p>
                <button
                  className="text-primary underline text-sm hover:text-primary-600 transition-colors"
                >
                  Acessar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AssociacaoSociedadeCivil