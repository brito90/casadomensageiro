const projects = [
  {
    id: 1,
    title: 'Projeto Esperança',
    description: 'Ajuda humanitária para comunidades carentes, distribuindo alimentos e utensílios básicos.',
    image: '/assets/images/project-1.jpg',
    category: 'Social',
  },
  {
    id: 2,
    title: 'Cultura & Fé',
    description: 'Eventos culturais que promovem a espiritualidade através da arte e música.',
    image: '/assets/images/project-2.jpg',
    category: 'Cultural',
  },
  {
    id: 3,
    title: 'Educação para Todos',
    description: 'Cursos e workshops para desenvolvimento pessoal e espiritual.',
    image: '/assets/images/project-3.jpg',
    category: 'Educacional',
  },
]

function FeaturedProjects() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossas iniciativas que transformam vidas e fortalecem a comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article key={project.id} className="card group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-heading text-lg">{project.category}</span>
                </div>
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 bg-secondary bg-opacity-20 text-secondary text-sm font-medium rounded-full">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-2">
                  <span className="text-secondary font-semibold group-hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
