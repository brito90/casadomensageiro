import Layout from '../layouts/Layout'
import Seo from '../components/Seo'
import { Card3D, Button3D, Icon3D } from '../utils/useTilt3D'

const valores = [
  { icon: '🙏', title: 'Fé', description: 'Acreditamos no poder da fé para transformar vidas e comunidades.' },
  { icon: '❤️', title: 'Amor', description: 'O amor é a base de tudo que fazemos. Amor a Deus, ao próximo e a si mesmo.' },
  { icon: '🤝', title: 'Comunidade', description: 'Juntos somos mais fortes. A comunidade é nossa família.' },
  { icon: '✨', title: 'Tradição', description: 'Preservamos e honramos as tradições transmitidas por gerações.' },
  { icon: '🌿', title: 'Respeito', description: 'Respeitamos a todos, independente de sua origem ou crença.' },
  { icon: '💪', title: 'Serviço', description: 'Servir ao próximo é o maior dom que podemos oferecer.' },
]

const lideres = [
  { name: 'Pai Rychelmy', role: 'Pai de Santo', description: 'Mais de 25 anos de experiência no serviço aos Orixás.', avatar: '🧘' },
  { name: 'Mãe Benedita', role: 'Mãe de Santo', description: 'Guardiã das tradições e mentora de novos iniciados.', avatar: '👩' },
  { name: 'Pai José', role: 'Conselheiro', description: 'Sábio conselheiro e guia espiritual da comunidade.', avatar: '👨' },
]

const timeline = [
  { year: '2010', title: 'Fundação', description: 'A Casa do Mensageiro foi fundada com o sonho de criar um espaço de acolhimento espiritual.' },
  { year: '2013', title: 'Primeiro Templo', description: 'Inauguração do nosso primeiro templo, com a bênção dos Orixás.' },
  { year: '2016', title: 'Projetos Sociais', description: 'Início dos projetos de assistência social à comunidade.' },
  { year: '2019', title: 'Expansão', description: 'Ampliação do espaço e criação de novas áreas de atuação.' },
  { year: '2022', title: 'Reconhecimento', description: 'Prêmio de melhor terreiro da região.' },
  { year: '2025', title: 'Presente', description: 'Mais de 5000 pessoas atendidas e 150 voluntários ativos.' },
]

function Sobre() {
  return (
    <Layout>
      <Seo title="Sobre" />
      {/* Hero */}
      <section className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute text-4xl" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 2}s` }}>
                {['🙏', '❤️', '✨', '🏛️', '🕊️'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Sobre a <span className="text-accent">Casa do Mensageiro</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Conheça nossa história, nossos valores e nossa missão de servir.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A Casa do Mensageiro nasceu do sonho de criar um espaço onde a fé pudesse ser vivida com autenticidade e comunhão. Desde nossa fundação, dedicamos-nos a acolher todas as pessoas que buscam paz espiritual.
                </p>
                <p>
                  Ao longo dos anos, crescemos e evoluímos, mas nossa essência permanece a mesma: servir com amor, preservar a tradição e fortalecer a comunidade.
                </p>
                <p>
                  Hoje, somos referência em acolhimento espiritual, com mais de 5000 pessoas atendidas e 150 voluntários dedicados.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center shadow-md">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-gray-600">Anos de história</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md">
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-gray-600">Pessoas atendidas</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md">
                    <div className="text-3xl font-bold text-primary">150+</div>
                    <div className="text-sm text-gray-600">Voluntários</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md">
                    <div className="text-3xl font-bold text-primary">8</div>
                    <div className="text-sm text-gray-600">Projetos ativos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Nossos Valores</h2>
            <p className="text-gray-600">Os princípios que guiam nossa comunidade.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, i) => (
              <Card3D key={i} className="bg-white rounded-2xl p-6 text-center">
                <Icon3D className="gradient-primary mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">{valor.icon}</span>
                </Icon3D>
                <h3 className="font-heading font-bold text-primary text-xl mb-2">{valor.title}</h3>
                <p className="text-gray-600 text-sm">{valor.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Nossa Liderança</h2>
            <p className="text-gray-600">Pessoas dedicadas ao serviço espiritual.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {lideres.map((lider, i) => (
              <Card3D key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl">{lider.avatar}</span>
                </div>
                <h3 className="font-heading font-bold text-primary text-xl mb-1">{lider.name}</h3>
                <p className="text-secondary font-semibold text-sm mb-3">{lider.role}</p>
                <p className="text-gray-600 text-sm">{lider.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Nossa Linha do Tempo</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/20" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                    <span className="text-white font-bold">{item.year}</span>
                  </div>
                  <Card3D className="bg-white rounded-2xl p-6 flex-1">
                    <h3 className="font-heading font-bold text-primary text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </Card3D>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Faça Parte da Nossa História</h2>
          <p className="text-white/80 mb-8">Junte-se a nós e ajude a transformar vidas através da fé.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button3D variant="accent">Seja Voluntário</Button3D>
            <Button3D variant="secondary">Conhecer Projetos</Button3D>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Sobre
