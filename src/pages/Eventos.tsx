import { useState } from 'react'
import Layout from '../layouts/Layout'
import Seo from '../components/Seo'
import { Card3D, Button3D, Icon3D } from '../utils/useTilt3D'

const categorias = [
  { id: 'todos', name: 'Todos', icon: '✨', color: 'from-gray-500 to-gray-600' },
  { id: 'culto', name: 'Cultos', icon: '🙏', color: 'from-primary to-primary-700' },
  { id: 'workshop', name: 'Workshops', icon: '📚', color: 'from-blue-500 to-indigo-600' },
  { id: 'musica', name: 'Música', icon: '🎵', color: 'from-purple-500 to-pink-600' },
  { id: 'gastronomia', name: 'Gastronomia', icon: '🍳', color: 'from-orange-500 to-red-500' },
  { id: 'meditacao', name: 'Meditação', icon: '🧘', color: 'from-green-500 to-emerald-600' },
]

const eventos = [
  { id: 1, title: 'Culto de Domingo', category: 'culto', date: '2026-07-27', time: '10:00', location: 'Auditório Principal', description: 'Nosso culto semanal com louvor, palavra e comunhão.', spots: 200, registered: 145, gradient: 'from-primary to-primary-700', recurring: true },
  { id: 2, title: 'Workshop: Meditação e Paz', category: 'meditacao', date: '2026-07-30', time: '19:00', location: 'Sala de Retiro', description: 'Aprenda técnicas de meditação para encontrar paz interior.', spots: 30, registered: 22, gradient: 'from-green-500 to-emerald-600' },
  { id: 3, title: 'Noite de Louvor', category: 'musica', date: '2026-08-02', time: '19:30', location: 'Auditório Principal', description: 'Uma noite especial de adoração e louvor.', spots: 200, registered: 178, gradient: 'from-purple-500 to-pink-600' },
  { id: 4, title: 'Aula de Culinária Sagrada', category: 'gastronomia', date: '2026-08-05', time: '15:00', location: 'Cozinha Comunitária', description: 'Aprenda a preparar comidas sagradas para oferendas.', spots: 20, registered: 18, gradient: 'from-orange-500 to-red-500' },
  { id: 5, title: 'Estudo Bíblico', category: 'culto', date: '2026-08-07', time: '19:00', location: 'Sala de Estudos', description: 'Aprofunde seus conhecimentos através do estudo guiado.', spots: 40, registered: 28, gradient: 'from-primary to-primary-700' },
  { id: 6, title: 'Workshop: Ervas Sagradas', category: 'workshop', date: '2026-08-10', time: '14:00', location: 'Horta Comunitária', description: 'Conheça as ervas usadas nos rituais e seus significados.', spots: 25, registered: 20, gradient: 'from-blue-500 to-indigo-600' },
  { id: 7, title: 'Meditação ao Nascer do Sol', category: 'meditacao', date: '2026-08-12', time: '06:00', location: 'Área Externa', description: 'Meditação contemplativa com vista ao nascer do sol.', spots: 50, registered: 35, gradient: 'from-green-500 to-emerald-600' },
  { id: 8, title: 'Culto de Ação de Graças', category: 'culto', date: '2026-08-14', time: '10:00', location: 'Auditório Principal', description: 'Momento especial de gratidão e celebração.', spots: 200, registered: 120, gradient: 'from-primary to-primary-700' },
]

const eventosPassados = [
  { title: 'Festa de Iemanjá 2026', date: '2026-02-02', participants: 500, highlight: 'Maior participação da história' },
  { title: 'Culto de Páscoa', date: '2026-04-20', participants: 350, highlight: 'Coro especial de 30 vozes' },
  { title: 'Workshop: Artesanato Sagrado', date: '2026-05-15', participants: 45, highlight: 'Peças criadas foram doadas' },
]

function formatDate(dateString: string) {
  const date = new Date(dateString + 'T00:00:00')
  return {
    day: date.getDate(),
    month: date.toLocaleDateString('pt-BR', { month: 'short' }),
    weekday: date.toLocaleDateString('pt-BR', { weekday: 'long' }),
    full: date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }),
  }
}

function EventCard({ event }: { event: typeof eventos[0] }) {
  const [showModal, setShowModal] = useState(false)
  const date = formatDate(event.date)
  const spotsLeft = event.spots - event.registered
  const percentage = (event.registered / event.spots) * 100

  return (
    <>
      <Card3D className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer" onClick={() => setShowModal(true)}>
        <div className={`h-32 bg-gradient-to-br ${event.gradient} relative`}>
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full">
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </span>
          </div>
          {event.recurring && (
            <div className="absolute top-4 right-4">
              <span className="bg-accent text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
                Recorrente
              </span>
            </div>
          )}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl px-3 py-2 text-center shadow-lg">
            <div className="text-2xl font-bold text-primary leading-none">{date.day}</div>
            <div className="text-xs text-gray-500 uppercase">{date.month}</div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading font-bold text-primary text-lg mb-2 group-hover:text-primary-600 transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{event.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {event.time}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              {event.location}
            </span>
          </div>
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500">{spotsLeft} vagas restantes</span>
              <span className="font-semibold text-primary">{Math.round(percentage)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-500 ${percentage > 80 ? 'bg-red-500' : percentage > 50 ? 'bg-accent' : 'bg-green-500'}`} style={{ width: `${percentage}%` }} />
            </div>
          </div>
          <button className="w-full btn-primary text-sm py-2">
            {spotsLeft > 0 ? 'Inscrever-se' : 'Lista de Espera'}
          </button>
        </div>
      </Card3D>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className={`h-40 bg-gradient-to-br ${event.gradient} relative`}>
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/50">✕</button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-white text-primary text-sm font-bold px-4 py-2 rounded-xl shadow">
                  {date.full}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">{event.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>🕐 {event.time}</span>
                <span>📍 {event.location}</span>
              </div>
              <p className="text-gray-600 mb-6">{event.description}</p>
              <div className="bg-primary-50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Vagas disponíveis:</span>
                  <span className="font-bold text-primary">{spotsLeft} de {event.spots}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button3D variant="primary" className="flex-1">Inscrever-se</Button3D>
                <Button3D variant="secondary" className="flex-1" onClick={() => setShowModal(false)}>Fechar</Button3D>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Eventos() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredEvents = selectedCategory === 'todos' ? eventos : eventos.filter(e => e.category === selectedCategory)

  return (
    <Layout>
      <Seo title="Eventos" />
      {/* Hero */}
      <section className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="absolute text-4xl" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 2}s` }}>
                {['📅', '🎉', '🎵', '🧘', '✨'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 w-full text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            📅 Eventos do Templo
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Próximos <span className="text-accent">Eventos</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Participe dos nossos encontros, workshops e celebrações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#eventos">
              <Button3D variant="accent" className="text-lg">
                Ver Eventos
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
              </Button3D>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '12', label: 'Eventos este mês', icon: '📅' },
              { number: '500+', label: 'Participantes', icon: '👥' },
              { number: '6', label: 'Categorias', icon: '🏷️' },
              { number: '98%', label: 'Satisfação', icon: '⭐' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4">
                <Icon3D className="gradient-primary mx-auto mb-3">
                  <span className="text-xl">{stat.icon}</span>
                </Icon3D>
                <div className="text-2xl font-bold text-primary">{stat.number}</div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section id="eventos" className="bg-gray-50 border-b sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
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
            <div className="flex bg-white rounded-xl p-1 border border-gray-200">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'gradient-primary text-white' : 'text-gray-500'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'gradient-primary text-white' : 'text-gray-500'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary">
              {selectedCategory === 'todos' ? 'Todos os Eventos' : categorias.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">{filteredEvents.length} eventos</p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEvents.map((event) => {
                const date = formatDate(event.date)
                const spotsLeft = event.spots - event.registered
                return (
                  <Card3D key={event.id} className="bg-white rounded-xl p-4 flex items-center gap-6">
                    <div className="bg-primary-50 rounded-xl p-4 text-center min-w-[80px]">
                      <div className="text-3xl font-bold text-primary">{date.day}</div>
                      <div className="text-sm text-gray-500 uppercase">{date.month}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-primary">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span>🕐 {event.time}</span>
                        <span>📍 {event.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-semibold ${spotsLeft < 10 ? 'text-red-500' : 'text-green-600'}`}>
                        {spotsLeft} vagas
                      </div>
                      <Button3D variant="primary" className="mt-2 text-sm px-4 py-2">Inscrever</Button3D>
                    </div>
                  </Card3D>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Eventos Passados */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-8">🏆 Destaques Passados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {eventosPassados.map((event, i) => (
              <Card3D key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-heading font-bold text-primary text-lg mb-1">{event.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{event.date}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span>👥</span>
                  <span>{event.participants} participantes</span>
                </div>
                <p className="text-accent font-semibold text-sm">✨ {event.highlight}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Não perca nenhum evento!</h2>
          <p className="text-white/80 mb-8">Cadastre-se e receba notificações dos próximos eventos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input type="email" placeholder="Seu melhor e-mail" className="flex-1 px-6 py-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent" />
            <Button3D variant="accent">Inscrever</Button3D>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Eventos
