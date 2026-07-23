import { useTilt } from '../utils/useTilt'

const events = [
  {
    id: 1,
    title: 'Festa de Iemanjá',
    date: '2026-02-02',
    time: '14:00',
    location: 'Praia do Porto',
    description: 'Homenagem anual à Rainha do Mar. Oferecimento de flores e presentes nas águas.',
    orixa: 'Iemanjá',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    title: 'Festa de Xangô',
    date: '2026-06-24',
    time: '16:00',
    location: 'Terreiro Principal',
    description: 'Celebração do Orixá da Justiça. Toques especiais e comidas de Xangô.',
    orixa: 'Xangô',
    color: 'from-red-600 to-orange-500',
  },
  {
    id: 3,
    title: 'Festa de Oxum',
    date: '2026-08-08',
    time: '15:00',
    location: 'Fonte da Água',
    description: 'Festa das águas doces. Flores amarelas e oferendas para a Mãe de Oxum.',
    orixa: 'Oxum',
    color: 'from-yellow-400 to-amber-500',
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString + 'T00:00:00')
  return date.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

function EventCard({ event }: { event: typeof events[0] }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLAnchorElement>({ maxTilt: 10, scale: 1.02 })

  return (
    <a
      ref={ref}
      href="/festas"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group block"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`h-32 bg-gradient-to-br ${event.color} relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="text-white text-5xl font-heading font-bold opacity-30 group-hover:scale-110 transition-transform"
            style={{ transform: 'translateZ(15px)' }}
          >
            {event.orixa.charAt(0)}
          </span>
        </div>
        <div className="absolute bottom-3 left-3" style={{ transform: 'translateZ(10px)' }}>
          <span className="bg-white text-primary text-xs px-3 py-1 rounded-full font-bold shadow-lg">
            {event.orixa}
          </span>
        </div>
      </div>
      <div className="p-5" style={{ transform: 'translateZ(5px)' }}>
        <h3 className="font-heading font-bold text-lg text-primary mb-2">
          {event.title}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(event.date)}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {event.time}
          </div>
        </div>
        <div className="mt-4">
          <span className="text-primary font-semibold text-sm group-hover:underline inline-flex items-center gap-1">
            Ver detalhes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}

function NextEvents() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
            📅 Calendário
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Próximas Festas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Participe das celebrações e fortaleça sua conexão com os Orixás.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/festas" className="btn-primary inline-flex items-center gap-2">
            Ver Todas as Festas
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NextEvents
