import { useTilt } from '../utils/useTilt'

const projects = [
  {
    id: 1,
    title: 'Jogos de Búzios',
    description: 'Consultas espirituais para orientação e solução de problemas através dos Orixás.',
    icon: '🔮',
    category: 'Espiritual',
    link: '/buzios',
  },
  {
    id: 2,
    title: 'Festas dos Orixás',
    description: 'Celebrações tradicionais com toques, cantos e oferendas aos Orixás.',
    icon: '🎉',
    category: 'Celebração',
    link: '/festas',
  },
  {
    id: 3,
    title: 'Biblioteca Sagrada',
    description: 'Acervo histórico de cantos, toques e vídeos antigos do terreiro.',
    icon: '📚',
    category: 'Cultura',
    link: '/biblioteca',
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLAnchorElement>({ maxTilt: 12, scale: 1.03 })

  return (
    <a
      ref={ref}
      href={project.link}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl group block"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
        style={{ transform: 'translateZ(20px)' }}
      >
        <span className="text-3xl">{project.icon}</span>
      </div>
      <div className="space-y-3" style={{ transform: 'translateZ(10px)' }}>
        <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full">
          {project.category}
        </span>
        <h3 className="font-heading font-bold text-xl text-primary group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>
        <div className="pt-2">
          <span className="text-primary font-semibold group-hover:underline inline-flex items-center gap-1">
            Saiba mais
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}

function FeaturedProjects() {
  return (
    <section className="section-padding gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium mb-4">
            ✨ Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Conheça Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos diversos serviços espirituais para fortalecer sua fé e conexão com os Orixás.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
