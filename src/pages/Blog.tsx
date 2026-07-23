import { Link } from 'react-router-dom'
import Layout from '../layouts/Layout'

const posts = [
  {
    id: 1,
    title: 'A Importância do Jogo de Búzios na Vida Espiritual',
    excerpt: 'Descubra como o jogo de búzios pode guiar suas decisões e trazer clareza para o seu caminho.',
    category: 'Espiritualidade',
    date: '2026-07-20',
    readTime: '5 min',
    featured: true,
    image: '🔮',
  },
  {
    id: 2,
    title: 'Como Preparar uma Festa de Iemanjá',
    excerpt: 'Guia completo para celebrar a Rainha do Mar com reverência e alegria.',
    category: 'Festas',
    date: '2026-07-18',
    readTime: '8 min',
    featured: false,
    image: '🌊',
  },
  {
    id: 3,
    title: 'Os Sete Orixás e Seus Significados',
    excerpt: 'Conheça a história e os símbolos dos principais Orixás do Candomblé.',
    category: 'Tradição',
    date: '2026-07-15',
    readTime: '10 min',
    featured: false,
    image: '✨',
  },
  {
    id: 4,
    title: 'Benefícios dos Sabonetes Artesanais',
    excerpt: 'Como os sabonetes naturais podem cuidar do corpo e da alma.',
    category: 'Produtos',
    date: '2026-07-12',
    readTime: '4 min',
    featured: false,
    image: '🧼',
  },
  {
    id: 5,
    title: 'Meditação e Conexão com Ogum',
    excerpt: 'Técnicas de meditação para fortalecer sua energia guerreira.',
    category: 'Espiritualidade',
    date: '2026-07-10',
    readTime: '6 min',
    featured: false,
    image: '⚔️',
  },
  {
    id: 6,
    title: 'O Significado das Velas nos Rituais',
    excerpt: 'Cada cor tem um significado. Saiba qual usar em cada situação.',
    category: 'Tradição',
    date: '2026-07-08',
    readTime: '5 min',
    featured: false,
    image: '🕯️',
  },
]

function Blog() {
  const featuredPost = posts.find(p => p.featured)
  const otherPosts = posts.filter(p => !p.featured)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            📚 Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Blog da <span className="text-accent">Casa do Mensageiro</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Artigos, dicas e histórias sobre espiritualidade e tradição.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <Link
              to={`/blog/${featuredPost.id}`}
              className="block bg-gradient-to-br from-primary-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-64 md:h-auto bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center">
                  <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                    {featuredPost.image}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-accent text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
                      DESTAQUE
                    </span>
                    <span className="bg-primary-100 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4 group-hover:text-primary-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime} de leitura</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other Posts */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary mb-8">
            Últimos Artigos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {post.image}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary-100 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding gradient-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-4">
            Receba Artigos por E-mail
          </h2>
          <p className="text-white/80 mb-6">
            Cadastre-se e receba conteúdo exclusivo sobre espiritualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="btn-accent">
              Inscrever-se
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
