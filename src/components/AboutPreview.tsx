function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block bg-primary-50 px-4 py-2 rounded-full text-primary text-sm font-medium">
              🙏 Nossa História
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Sobre a Casa do Mensageiro
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos um terreiro de Candomblé que acredita no poder da espiritualidade
              para transformar vidas. Nosso espaço é aberto para todos que buscam
              paz, acolhimento e crescimento espiritual.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Através de rituais, festas e consultas espirituais, trabalhamos
              para fazer a diferença na vida das pessoas, compartilhando o axé
              dos nossos Orixás.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/sobre" className="btn-primary inline-flex items-center gap-2">
                Saiba Mais
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/festas" className="btn-secondary inline-flex items-center gap-2">
                Ver Festas
              </a>
            </div>
          </div>

          {/* Image/Icon Area */}
          <div className="relative">
            <div className="gradient-secondary rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow group">
                  <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">⚔️</span>
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">Ogum</h3>
                  <p className="text-sm text-gray-600">Guerreiro e protetor</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow group">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💧</span>
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">Oxum</h3>
                  <p className="text-sm text-gray-600">Águas doces e fertilidade</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow group">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🪓</span>
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">Xangô</h3>
                  <p className="text-sm text-gray-600">Justiça e poder</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🌊</span>
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2">Iemanjá</h3>
                  <p className="text-sm text-gray-600">Rainha do mar</p>
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
