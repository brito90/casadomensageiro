import { useState } from 'react'
import Layout from '../layouts/Layout'
import { useTilt } from '../utils/useTilt'

const categorias = [
  { id: 'todos', name: 'Todos', icon: '✨' },
  { id: 'social', name: 'Social', icon: '🤝' },
  { id: 'cultural', name: 'Cultural', icon: '🎭' },
  { id: 'educacional', name: 'Educacional', icon: '📚' },
  { id: 'ambiental', name: 'Ambiental', icon: '🌿' },
  { id: 'saude', name: 'Saúde', icon: '🏥' },
]

const projetos = [
  {
    id: 1,
    title: 'Projeto Mesa Redonda',
    category: 'social',
    description: 'Alimentação para pessoas em situação de rua toda segunda-feira.',
    longDescription: 'Todo segunda-feira, voluntários da Casa do Mensageiro se reúnem para preparar e distribuir refeições para pessoas em situação de rua. O projeto atende mais de 100 pessoas semanalmente.',
    impact: '100+ pessoas alimentadas por semana',
    volunteers: 25,
    since: '2018',
    status: 'active',
    image: '🍲',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: 'Cultura Viva',
    category: 'cultural',
    description: 'Oficinas de arte, música e dança para a comunidade.',
    longDescription: 'O projeto Cultura Viva oferece oficinas gratuitas de pintura, capoeira, samba de roda e dança afro-brasileira para crianças, jovens e adultos da comunidade.',
    impact: '150+ alunos em 10 oficinas',
    volunteers: 15,
    since: '2019',
    status: 'active',
    image: '🎨',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Semeador de Saberes',
    category: 'educacional',
    description: 'Reforço escolar e alfabetização para crianças e jovens.',
    longDescription: 'O Semeador de Saberes oferece reforço escolar, alfabetização e preparação para vestibulares. Contamos com professores voluntários e material didático doado.',
    impact: '80+ alunos atendidos',
    volunteers: 20,
    since: '2017',
    status: 'active',
    image: '📖',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 4,
    title: 'Raízes Verdes',
    category: 'ambiental',
    description: 'Horta comunitária e conscientização ambiental.',
    longDescription: 'O projeto Raízes Verdes mantém uma horta comunitária que abastece nossa cozinha e distribui hortaliças para famílias cadastradas. Também realizamos oficinas de sustentabilidade.',
    impact: '200kg de alimentos produzidos/mês',
    volunteers: 12,
    since: '2020',
    status: 'active',
    image: '🌱',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Acolher é Viver',
    category: 'saude',
    description: 'Atendimento básico de saúde e orientação para idosos.',
    longDescription: 'O projeto Acolher é Viver oferece aferição de pressão, glicemia, orientação nutricional e acompanhamento básico para idosos da comunidade. Contamos com profissionais voluntários.',
    impact: '120+ idosos atendidos mensalmente',
    volunteers: 18,
    since: '2019',
    status: 'active',
    image: '🩺',
    gradient: 'from-red-400 to-pink-400',
  },
  {
    id: 6,
    title: 'Oficina do Futuro',
    category: 'educacional',
    description: 'Cursos de informática e preparação para o mercado de trabalho.',
    longDescription: 'A Oficina do Futuro oferece cursos de informática básica, Excel, design gráfico e empreendedorismo. O objetivo é capacitar jovens e adultos para o mercado de trabalho.',
    impact: '60+ pessoas capacitadas/ano',
    volunteers: 10,
    since: '2021',
    status: 'active',
    image: '💻',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 7,
    title: 'Memória Viva',
    category: 'cultural',
    description: 'Preservação da história e tradições do Candomblé.',
    longDescription: 'O projeto Memória Viva documenta e preserva a história do terreiro, entrevistando membros mais antigos e organizando um acervo fotográfico e documental.',
    impact: '50+ entrevistas realizadas',
    volunteers: 8,
    since: '2018',
    status: 'active',
    image: '📸',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 8,
    title: 'Mãos que Acolhem',
    category: 'social',
    description: 'Distribuição de cestas básicas para famílias carentes.',
    longDescription: 'O projeto Mãos que Acolhem distribui cestas básicas mensalmente para 80 famílias cadastradas. Contamos com doações da comunidade e parcerias com empresas locais.',
    impact: '80 famílias atendidas/mês',
    volunteers: 30,
    since: '2016',
    status: 'active',
    image: '📦',
    gradient: 'from-teal-500 to-cyan-500',
  },
]

const estatisticas = [
  { number: '5000+', label: 'Pessoas Atendidas', icon: '👥' },
  { number: '150+', label: 'Voluntários Ativos', icon: '🙋' },
  { number: '8', label: 'Projetos em Andamento', icon: '📋' },
  { number: '10+', label: 'Anos de Atuação', icon: '📅' },
]

function ProjetoCard({ projeto }: { projeto: typeof projetos[0] }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>({ maxTilt: 8, scale: 1.02 })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Header */}
      <div className={`h-48 bg-gradient-to-br ${projeto.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl group-hover:scale-110 transition-transform duration-500 opacity-80">
            {projeto.image}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full">
            {projeto.category.charAt(0).toUpperCase() + projeto.category.slice(1)}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Ativo
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white text-sm bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
            Desde {projeto.since} • {projeto.volunteers} voluntários
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-bold text-xl text-primary mb-2 group-hover:text-primary-600 transition-colors">
          {projeto.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {projeto.description}
        </p>

        {/* Impact Badge */}
        <div className="bg-primary-50 rounded-xl p-3 mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-primary font-semibold text-sm">{projeto.impact}</span>
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-center text-primary font-semibold text-sm hover:text-primary-600 transition-colors flex items-center justify-center gap-1"
        >
          {isExpanded ? 'Menos' : 'Saiba mais'}
          <svg className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Expanded Content */}
        <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-48 mt-4' : 'max-h-0'}`}>
          <p className="text-gray-600 text-sm leading-relaxed border-t pt-4">
            {projeto.longDescription}
          </p>
          <div className="flex gap-4 mt-4">
            <button className="flex-1 btn-primary text-sm py-2">
              Quero Participar
            </button>
            <button className="flex-1 btn-secondary text-sm py-2">
              Doar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projetos() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = projetos.filter(p => 
    selectedCategory === 'todos' || p.category === selectedCategory
  )

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-accent rounded-full" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 w-full text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            🤝 Nossos Projetos
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Transformando Vidas Através da <span className="text-accent">Ação</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Conheça nossos projetos sociais, culturais e educacionais que fazem a diferença 
            na vida de milhares de pessoas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projetos" className="btn-accent text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
              Ver Projetos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
              Seja Voluntário
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section id="projetos" className="bg-gray-50 border-b sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'gradient-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((projeto) => (
              <ProjetoCard key={projeto.id} projeto={projeto} />
            ))}
          </div>

          {filteredProjects.length > 6 && !showAll && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Ver Todos os Projetos
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How to Participate */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Como Participar?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Existem diversas formas de contribuir com nossos projetos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🙋</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-3">Seja Voluntário</h3>
              <p className="text-gray-600">
                Dedique parte do seu tempo para ajudar nas atividades dos projetos. 
                Toda ajuda é bem-vinda!
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-3">Faça uma Doação</h3>
              <p className="text-gray-600">
                Sua doação ajuda a manter nossos projetos funcionando. 
                Valores a partir de R$ 10.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📦</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-3">Doe Materiais</h3>
              <p className="text-gray-600">
                Livros, roupas, alimentos e materiais de expediente são sempre bem recebidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-4">
                ⭐ Projeto em Destaque
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Projeto Mesa Redonda
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Todo segunda-feira, nossos voluntários se reúnem para preparar e distribuir 
                refeições para pessoas em situação de rua. O projeto atende mais de 100 
                pessoas semanalmente e conta com a doação de alimentos da comunidade.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm text-white/70">Pessoas/Semana</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold">25</div>
                  <div className="text-sm text-white/70">Voluntários</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Quero Participar
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                  Doar Agora
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center">
                  <span className="text-[100px]">🍲</span>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Refeições nutritivas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Acolhimento digno</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Apoio espiritual</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Faça Parte Dessa História
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Junte-se a nós e ajude a transformar vidas. Cada mão que se estende faz a diferença.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Seja Voluntário
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Fazer uma Doação
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projetos
