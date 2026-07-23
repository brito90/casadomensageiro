const events = [
  {
    id: 1,
    title: 'Culto de Domingo',
    date: '2026-07-27',
    time: '10:00',
    location: 'Auditório Principal',
    description: 'Nosso culto semanal com louvor, palavra e comunhão.',
  },
  {
    id: 2,
    title: 'Workshop: Meditação e Paz',
    date: '2026-07-30',
    time: '19:00',
    location: 'Sala de Encontros',
    description: 'Aprenda técnicas de meditação para encontrar paz interior.',
  },
  {
    id: 3,
    title: 'Sarau Cultural',
    date: '2026-08-02',
    time: '18:30',
    location: 'Área Externa',
    description: 'Noite de música, poesia e arte com a comunidade.',
  },
]

function NextEvents() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Próximos Eventos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Participe dos nossos encontros e fortaleça sua conexão espiritual.
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-background rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:shadow-lg transition-shadow duration-300"
            >
              {/* Date Badge */}
              <div className="flex-shrink-0 bg-primary text-white rounded-xl p-4 text-center min-w-[100px]">
                <div className="text-3xl font-bold">
                  {new Date(event.date + 'T00:00:00').getDate()}
                </div>
                <div className="text-sm uppercase">
                  {new Date(event.date + 'T00:00:00').toLocaleDateString('pt-BR', { month: 'short' })}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow space-y-2">
                <h3 className="font-heading font-bold text-xl text-primary">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
                <p className="text-gray-600">
                  {event.description}
                </p>
              </div>

              {/* Action */}
              <div className="flex-shrink-0">
                <button className="btn-secondary text-sm">
                  Inscreva-se
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold
                           hover:bg-primary hover:text-white transition-all duration-200">
            Ver Calendário Completo
          </button>
        </div>
      </div>
    </section>
  )
}

export default NextEvents
