import { useState, useEffect } from 'react'
import Layout from '../layouts/Layout'
import Seo from '../components/Seo'

const posts = [
  { id: 1, title: 'A Importância do Jogo de Búzios na Vida Espiritual', excerpt: 'Descubra como o jogo de búzios pode guiar suas decisões e trazer clareza.', category: 'Espiritualidade', date: '20 Jul 2026', readTime: '5 min', featured: true, gradient: 'from-amber-500 to-orange-600' },
  { id: 2, title: 'Como Preparar uma Festa de Iemanjá', excerpt: 'Guia completo para celebrar a Rainha do Mar com reverência e alegria.', category: 'Festas', date: '18 Jul 2026', readTime: '8 min', featured: false, gradient: 'from-blue-500 to-cyan-500' },
  { id: 3, title: 'Os Sete Orixás e Seus Significados', excerpt: 'Conheça a história e os símbolos dos principais Orixás do Candomblé.', category: 'Tradição', date: '15 Jul 2026', readTime: '10 min', featured: false, gradient: 'from-purple-500 to-pink-500' },
  { id: 4, title: 'Benefícios dos Sabonetes Artesanais', excerpt: 'Como os sabonetes naturais podem cuidar do corpo e da alma.', category: 'Produtos', date: '12 Jul 2026', readTime: '4 min', featured: false, gradient: 'from-green-500 to-emerald-500' },
  { id: 5, title: 'Meditação e Conexão com Ogum', excerpt: 'Técnicas de meditação para fortalecer sua energia guerreira.', category: 'Espiritualidade', date: '10 Jul 2026', readTime: '6 min', featured: false, gradient: 'from-red-500 to-rose-500' },
  { id: 6, title: 'O Significado das Velas nos Rituais', excerpt: 'Cada cor tem um significado. Saiba qual usar em cada situação.', category: 'Tradição', date: '08 Jul 2026', readTime: '5 min', featured: false, gradient: 'from-yellow-500 to-amber-500' },
  { id: 7, title: 'Ervas Sagradas e Seus Usos', excerpt: 'Conheça as ervas mais usadas nos rituais e seus benefícios.', category: 'Tradição', date: '05 Jul 2026', readTime: '7 min', featured: false, gradient: 'from-teal-500 to-green-500' },
  { id: 8, title: 'A Arte de Fazer Oferecimentos', excerpt: 'Como preparar oferendas com amor e respeito aos Orixás.', category: 'Cultura', date: '03 Jul 2026', readTime: '6 min', featured: false, gradient: 'from-rose-500 to-pink-500' },
]

const categories = [
  { name: 'Espiritualidade', color: '#F59E0B', count: 12 },
  { name: 'Tradição', color: '#8B5CF6', count: 8 },
  { name: 'Festas', color: '#3B82F6', count: 6 },
  { name: 'Cultura', color: '#EC4899', count: 10 },
  { name: 'Produtos', color: '#10B981', count: 5 },
]

function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute text-6xl opacity-10" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, transform: `rotate(${Math.random() * 360}deg)` }}>
              {['📖', '✍️', '💡', '🌟', '📚'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 text-center px-4" style={{ transform: `translateY(${-scrollY * 0.2}px)`, opacity: 1 - scrollY / 600 }}>
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Novos artigos toda semana
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">B</span>
          <span className="text-white">LOG</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-xl mx-auto mb-8">
          Conhecimento, tradição e sabedoria ancestral.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
            Explorar Artigos
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
            Categorias
          </button>
        </div>
      </div>
    </section>
  )
}

function MarqueeSection() {
  return (
    <div className="py-8 bg-white border-y overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-4xl font-black text-gray-100">ESPIRITUALIDADE</span>
            <span className="text-4xl font-black text-gray-100">TRADIÇÃO</span>
            <span className="text-4xl font-black text-gray-100">CULTURA</span>
            <span className="text-4xl font-black text-gray-100">FÉ</span>
            <span className="text-4xl font-black text-gray-100">SABEDORIA</span>
            <span className="text-4xl font-black text-gray-100">ORIXÁS</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FeaturedPost({ post }: { post: typeof posts[0] }) {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${post.gradient}`}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="flex flex-col justify-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-semibold w-fit mb-4">
                ⭐ Artigo em Destaque
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{post.title}</h2>
              <p className="text-white/80 text-lg mb-6">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-white/60 text-sm mb-8">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} de leitura</span>
              </div>
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-fit">
                Ler Agora
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                <span className="text-[120px]">📖</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoriesBar({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <section className="py-12 bg-gray-900 sticky top-16 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <button
            onClick={() => setActive(-1)}
            className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all ${active === -1 ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            Todos
          </button>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${active === i ? 'text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
              style={active === i ? { backgroundColor: cat.color } : {}}
            >
              {cat.name}
              <span className="text-sm opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function MasonryGrid({ posts: list }: { posts: typeof posts }) {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-black text-white mb-12">
          Últimos <span className="text-amber-500">Artigos</span>
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {list.slice(1).map((post, i) => (
            <article key={post.id} className="break-inside-avoid group cursor-pointer">
              <div className={`rounded-2xl overflow-hidden bg-gradient-to-br ${post.gradient} aspect-[4/3] relative mb-4`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {['📖', '🎉', '✨', '🧴', '🧘', '🕯️', '🌿', '🙏'][i % 8]}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="px-1">
                <div className="flex items-center gap-3 text-gray-500 text-sm mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute text-8xl" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, transform: `rotate(${Math.random() * 360}deg)` }}>
            ✍️
          </div>
        ))}
      </div>
      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-black text-white mb-4">Inscreva-se no Blog</h2>
        <p className="text-white/80 mb-8">Receba artigos exclusivos diretamente no seu e-mail.</p>
        {submitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <span className="text-4xl">✅</span>
            <p className="text-white font-bold mt-4">Inscrito com sucesso!</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Inscrever
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Blog() {
  const [active, setActive] = useState(0)
  const [search, setSearch] = useState('')
  const [visible, setVisible] = useState(6)

  const filtered = posts.filter(p => {
    const catMatch = active === -1 ? true : p.category === categories[active]?.name
    const searchMatch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
    return catMatch && searchMatch
  })

  return (
    <Layout>
      <Seo title="Blog" />
      <HeroSection />
      <MarqueeSection />
      <FeaturedPost post={filtered[0] ?? posts[0]} />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <input
          type="text"
          placeholder="Buscar artigos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border-2 border-black focus:outline-none"
        />
      </div>
      <CategoriesBar active={active} setActive={setActive} />
      <MasonryGrid posts={filtered.slice(0, visible)} />
      {visible < filtered.length && (
        <div className="text-center py-8">
          <button onClick={() => setVisible(v => v + 6)} className="btn-square">
            Carregar mais
          </button>
        </div>
      )}
      <NewsletterSection />
    </Layout>
  )
}

export default Blog
