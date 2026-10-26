import { useState, useEffect, useRef } from 'react'
import Layout from '../layouts/Layout'
import Seo from '../components/Seo'

const categorias = [
  { id: 'todos', name: 'Todos', icon: '✨' },
  { id: 'social', name: 'Social', icon: '🤝' },
  { id: 'cultural', name: 'Cultural', icon: '🎭' },
  { id: 'educacional', name: 'Educacional', icon: '📚' },
  { id: 'ambiental', name: 'Ambiental', icon: '🌿' },
  { id: 'saude', name: 'Saúde', icon: '🏥' },
]

const projetos = [
  { id: 1, title: 'Projeto Mesa Redonda', category: 'social', description: 'Alimentação para pessoas em situação de rua toda segunda-feira.', longDescription: 'Todo segunda-feira, voluntários da Casa do Mensageiro se reúnem para preparar e distribuir refeições para pessoas em situação de rua.', impact: '100+ pessoas/semana', volunteers: 25, since: '2018', status: 'active', image: '🍲', gradient: 'from-orange-500 to-red-500', progress: 85 },
  { id: 2, title: 'Cultura Viva', category: 'cultural', description: 'Oficinas de arte, música e dança para a comunidade.', longDescription: 'Oferece oficinas gratuitas de pintura, capoeira, samba de roda e dança afro-brasileira.', impact: '150+ alunos', volunteers: 15, since: '2019', status: 'active', image: '🎨', gradient: 'from-purple-500 to-pink-500', progress: 70 },
  { id: 3, title: 'Semeador de Saberes', category: 'educacional', description: 'Reforço escolar e alfabetização para crianças e jovens.', longDescription: 'Oferece reforço escolar, alfabetização e preparação para vestibulares.', impact: '80+ alunos', volunteers: 20, since: '2017', status: 'active', image: '📖', gradient: 'from-blue-500 to-cyan-500', progress: 90 },
  { id: 4, title: 'Raízes Verdes', category: 'ambiental', description: 'Horta comunitária e conscientização ambiental.', longDescription: 'Mantém horta comunitária que abastece cozinha e distribui hortaliças.', impact: '200kg/mês', volunteers: 12, since: '2020', status: 'active', image: '🌱', gradient: 'from-green-500 to-emerald-500', progress: 60 },
  { id: 5, title: 'Acolher é Viver', category: 'saude', description: 'Atendimento básico de saúde para idosos.', longDescription: 'Oferece aferição de pressão, glicemia e orientação nutricional para idosos.', impact: '120+ idosos/mês', volunteers: 18, since: '2019', status: 'active', image: '🩺', gradient: 'from-red-400 to-pink-400', progress: 75 },
  { id: 6, title: 'Oficina do Futuro', category: 'educacional', description: 'Cursos de informática e preparação para o mercado.', longDescription: 'Cursos de informática básica, Excel, design gráfico e empreendedorismo.', impact: '60+ capacitados/ano', volunteers: 10, since: '2021', status: 'active', image: '💻', gradient: 'from-indigo-500 to-purple-500', progress: 55 },
  { id: 7, title: 'Memória Viva', category: 'cultural', description: 'Preservação da história e tradições do Candomblé.', longDescription: 'Documenta e preserva a história do terreiro através de entrevistas.', impact: '50+ entrevistas', volunteers: 8, since: '2018', status: 'active', image: '📸', gradient: 'from-amber-500 to-orange-500', progress: 65 },
  { id: 8, title: 'Mãos que Acolhem', category: 'social', description: 'Distribuição de cestas básicas para famílias carentes.', longDescription: 'Distribui cestas básicas mensalmente para 80 famílias cadastradas.', impact: '80 famílias/mês', volunteers: 30, since: '2016', status: 'active', image: '📦', gradient: 'from-teal-500 to-cyan-500', progress: 95 },
]

const timeline = [
  { year: '2016', title: 'Início da Jornada', description: 'Fundação da Casa do Mensageiro e primeiro projeto social.', icon: '🌱' },
  { year: '2017', title: 'Expansão Educacional', description: 'Início do Semeador de Saberes com 20 alunos.', icon: '📚' },
  { year: '2018', title: 'Cultura Viva', description: 'Lançamento das oficinas culturais e preservação da memória.', icon: '🎭' },
  { year: '2019', title: 'Saúde comunitária', description: 'Início do Acolher é Viver para idosos.', icon: '🏥' },
  { year: '2020', title: 'Sustentabilidade', description: 'Criação da horta comunitária Raízes Verdes.', icon: '🌿' },
  { year: '2021', title: 'Capacitação', description: 'Oficina do Futuro para preparação profissional.', icon: '💻' },
  { year: '2022', title: '5000 vidas', description: 'Marco de 5000 pessoas atendidas.', icon: '🎉' },
  { year: '2023', title: 'Reconhecimento', description: 'Prêmio de melhor projeto social da cidade.', icon: '🏆' },
  { year: '2024', title: 'Novos horizontes', description: 'Expansão para novas comunidades.', icon: '🚀' },
  { year: '2025', title: 'Tecnologia', description: 'Digitalização dos projetos e alcance global.', icon: '💻' },
]

const voluntarios = [
  { name: 'Ana Silva', role: 'Voluntária há 5 anos', quote: 'Aqui encontrei propósito. Servir é o maior dom.', avatar: '👩', project: 'Mesa Redonda' },
  { name: 'Carlos Santos', role: 'Professor voluntário', quote: 'Ver o progresso dos alunos é a maior recompensa.', avatar: '👨', project: 'Semeador de Saberes' },
  { name: 'Maria Oliveira', role: 'Coordenadora cultural', quote: 'A arte é uma forma de fé em ação.', avatar: '👩‍🎨', project: 'Cultura Viva' },
]

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, threshold])
  return isInView
}

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return <div ref={ref}>{count}</div>
}

function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-800" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute border border-white/30 rounded-full" style={{ width: `${50 + Math.random() * 150}px`, height: `${50 + Math.random() * 150}px`, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 2}s` }} />
          ))}
        </div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-5xl mx-auto" style={{ transform: `translateY(${-scrollY * 0.3}px)`, opacity: 1 - scrollY / 600 }}>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            NOSSOS <span className="text-accent">PROJETOS</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Transformando vidas através da ação social, cultura e educação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projetos" className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Ver Projetos
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Seja Voluntário
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const stats = [
    { number: 5000, suffix: '+', label: 'Pessoas Atendidas', icon: '👥' },
    { number: 150, suffix: '+', label: 'Voluntários Ativos', icon: '🙋' },
    { number: 8, suffix: '', label: 'Projetos Ativos', icon: '📋' },
    { number: 10, suffix: '+', label: 'Anos de Atuação', icon: '📅' },
  ]

  return (
    <div ref={ref} className="py-16 bg-white border-y">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                <AnimatedCounter target={stat.number} />{stat.suffix}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ projeto }: { projeto: typeof projetos[0] }) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
        <div className={`h-48 bg-gradient-to-br ${projeto.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl group-hover:scale-110 transition-transform duration-500 opacity-80">{projeto.image}</span>
          </div>
          <div className="absolute top-4 left-4"><span className="bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full">{projeto.category.charAt(0).toUpperCase() + projeto.category.slice(1)}</span></div>
          <div className="absolute top-4 right-4"><span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><span className="w-2 h-2 bg-white rounded-full animate-pulse" />Ativo</span></div>
        </div>
        <div className="p-6">
          <h3 className="font-heading font-bold text-xl text-primary mb-2">{projeto.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{projeto.description}</p>
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">Progresso</span>
              <span className="font-semibold text-primary">{projeto.progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full gradient-primary rounded-full transition-all duration-1000" style={{ width: `${projeto.progress}%` }} />
            </div>
          </div>
          <div className="bg-primary-50 rounded-xl p-3 mb-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <span className="text-primary font-semibold text-sm">{projeto.impact}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setShowModal(true)} className="flex-1 btn-primary text-sm py-2">Ver Detalhes</button>
            <button className="flex-1 btn-secondary text-sm py-2">Doar</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className={`h-48 bg-gradient-to-br ${projeto.gradient} relative`}>
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/50">✕</button>
              <div className="absolute inset-0 flex items-center justify-center"><span className="text-[100px]">{projeto.image}</span></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">{projeto.title}</h3>
              <p className="text-gray-500 mb-4">Desde {projeto.since} • {projeto.volunteers} voluntários</p>
              <p className="text-gray-600 mb-6">{projeto.longDescription}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary-50 rounded-xl p-4 text-center"><div className="text-2xl font-bold text-primary">{projeto.impact}</div><div className="text-sm text-gray-600">Impacto</div></div>
                <div className="bg-primary-50 rounded-xl p-4 text-center"><div className="text-2xl font-bold text-primary">{projeto.volunteers}</div><div className="text-sm text-gray-600">Voluntários</div></div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 btn-primary">Quero Participar</button>
                <button className="flex-1 btn-secondary">Doar Agora</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, 0.1)

  return (
    <div ref={ref} className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-white text-center mb-16">
          Nossa <span className="text-accent">História</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-orange-500 -translate-x-1/2" />
          {timeline.map((item, i) => (
            <div key={i} className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-1/2 flex justify-center">
                <div className="bg-gray-800 rounded-2xl p-6 max-w-sm hover:bg-gray-750 transition-colors border border-gray-700">
                  <div className="text-accent font-bold text-lg mb-1">{item.year}</div>
                  <h3 className="text-white font-heading font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-red-500/30">
                <span className="text-xl">{item.icon}</span>
              </div>
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VolunteersSection() {
  return (
    <div className="py-24 bg-gradient-to-br from-primary to-primary-700">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-white text-center mb-4">Vozes dos Voluntários</h2>
        <p className="text-white/80 text-center mb-12 max-w-xl mx-auto">Ouça quem faz a diferença acontecer.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {voluntarios.map((vol, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl">{vol.avatar}</div>
                <div>
                  <h3 className="text-white font-semibold">{vol.name}</h3>
                  <p className="text-white/60 text-sm">{vol.role}</p>
                </div>
              </div>
              <p className="text-white/80 italic mb-4">"{vol.quote}"</p>
              <span className="text-accent text-sm font-semibold">Projeto: {vol.project}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Projetos() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [showAll, setShowAll] = useState(false)
  const filteredProjects = projetos.filter(p => selectedCategory === 'todos' || p.category === selectedCategory)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <Layout>
      <Seo title="Projetos" />
      <HeroSection />
      <StatsSection />

      <div id="projetos" className="bg-gray-50 border-b sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categorias.map((cat) => (
              <button key={cat.id} onClick={() => setSelectedCategory(cat.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat.id ? 'gradient-primary text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}>
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((projeto) => (
              <ProjectCard key={projeto.id} projeto={projeto} />
            ))}
          </div>
          {filteredProjects.length > 6 && !showAll && (
            <div className="text-center mt-12">
              <button onClick={() => setShowAll(true)} className="btn-primary text-lg px-8 py-4">Ver Todos os Projetos</button>
            </div>
          )}
        </div>
      </section>

      <TimelineSection />
      <VolunteersSection />

      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Faça Parte Dessa História</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Junte-se a nós e ajude a transformar vidas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">Seja Voluntário</button>
            <button className="btn-secondary text-lg px-8 py-4">Fazer uma Doação</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Projetos
