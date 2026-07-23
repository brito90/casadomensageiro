function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Sobre a Casa do Mensageiro
            </h2>
            <p className="text-lg text-text leading-relaxed">
              Somos uma comunidade de fé que acredita no poder da espiritualidade
              para transformar vidas. Nosso espaço é aberto para todos que buscam
              paz, acolhimento e crescimento espiritual.
            </p>
            <p className="text-lg text-text leading-relaxed">
              Através de projetos culturais, sociais e educacionais, trabalhamos
              para fazer a diferença na vida das pessoas, compartilhando amor
              e esperança.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Saiba Mais
              </button>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold
                               hover:bg-primary hover:text-white transition-all duration-200">
                Nossos Valores
              </button>
            </div>
          </div>

          {/* Image/Icon Area */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">Comunidade</h3>
                  <p className="text-sm text-gray-600">Pessoas unidas pela fé</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">Acolhimento</h3>
                  <p className="text-sm text-gray-600">Espaço para todos</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">Ensino</h3>
                  <p className="text-sm text-gray-600">Crescimento espiritual</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">Impacto</h3>
                  <p className="text-sm text-gray-600">Transformando vidas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
