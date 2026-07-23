import Layout from '../layouts/Layout'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTilt } from '../utils/useTilt'
import { useCart } from '../context/CartContext'

const categorias = [
  { id: 'todos', name: 'Todos', icon: '✨' },
  { id: 'nichos', name: 'Nichos', icon: '🏠' },
  { id: 'sabonetes', name: 'Sabonetes', icon: '🧼' },
  { id: 'camisas', name: 'Camisas', icon: '👕' },
  { id: 'perfumes', name: 'Perfumes', icon: '💐' },
  { id: 'brindes', name: 'Brindes', icon: '🎁' },
  { id: 'acessorios', name: 'Acessórios', icon: '📿' },
]

const produtos = [
  { id: 1, name: 'Nicho Ogum', category: 'nichos', price: 189.90, originalPrice: 249.90, description: 'Nicho artesanal em madeira para devoção a Ogum. Inclui detalhes em ferro e velas.', rating: 5, reviews: 45, badge: 'MAIS VENDIDO', colors: ['Vermelho', 'Preto'], image: '/assets/images/nicho-ogum.jpg' },
  { id: 2, name: 'Nicho Oxum', category: 'nichos', price: 179.90, originalPrice: 229.90, description: 'Nicho em madeira com detalhes dourados para Oxum. Espelho e acessórios inclusos.', rating: 5, reviews: 38, badge: 'NOVO', colors: ['Dourado', 'Amarelo'], image: '/assets/images/nicho-oxum.jpg' },
  { id: 3, name: 'Nicho Iemanjá', category: 'nichos', price: 199.90, originalPrice: 259.90, description: 'Nicho azul marinho com conchas e espelho para Iemanjá.', rating: 5, reviews: 52, badge: 'DESTAQUE', colors: ['Azul', 'Branco'], image: '/assets/images/nicho-iemanja.jpg' },
  { id: 4, name: 'Sabonete de Rosas', category: 'sabonetes', price: 29.90, originalPrice: 45.90, description: 'Sabonete artesanal com pétalas de rosas naturais. Hidrata e perfuma.', rating: 5, reviews: 127, badge: 'BEST SELLER', colors: ['Rosa', 'Vermelho'], image: '/assets/images/sabonete-rosas.jpg' },
  { id: 5, name: 'Sabonete de Lavanda', category: 'sabonetes', price: 27.90, originalPrice: 42.90, description: 'Sabonete com lavanda natural. Calma e renova.', rating: 5, reviews: 98, badge: '', colors: ['Roxo', 'Lilás'], image: '/assets/images/sabonete-lavanda.jpg' },
  { id: 6, name: 'Sabonete de Alecrim', category: 'sabonetes', price: 25.90, originalPrice: 39.90, description: 'Sabonete com alecrim. Proteção e limpeza espiritual.', rating: 4, reviews: 76, badge: '', colors: ['Verde', 'Natural'], image: '/assets/images/sabonete-alecrim.jpg' },
  { id: 7, name: 'Camisa Casa do Mensageiro', category: 'camisas', price: 89.90, originalPrice: 129.90, description: 'Camisa oficial do terreiro. Algodão premium, corte moderno.', rating: 5, reviews: 203, badge: 'EXCLUSIVO', colors: ['Branco', 'Preto', 'Vermelho'], image: '/assets/images/camisa-oficial.jpg' },
  { id: 8, name: 'Camisa Ogum', category: 'camisas', price: 79.90, originalPrice: 119.90, description: 'Camisa com estampa de Ogum. Algodão 100%.', rating: 5, reviews: 156, badge: '', colors: ['Vermelho', 'Preto'], image: '/assets/images/camisa-ogum.jpg' },
  { id: 9, name: 'Camisa Oxum', category: 'camisas', price: 79.90, originalPrice: 119.90, description: 'Camisa com estampa de Oxum. Algodão 100%.', rating: 5, reviews: 142, badge: '', colors: ['Amarelo', 'Dourado'], image: '/assets/images/camisa-oxum.jpg' },
  { id: 10, name: 'Perfume Axé', category: 'perfumes', price: 149.90, originalPrice: 199.90, description: 'Perfume com óleos essenciais para atrair axé e prosperidade.', rating: 5, reviews: 89, badge: 'PREMIUM', colors: ['50ml', '100ml'], image: '/assets/images/perfume-axe.jpg' },
  { id: 11, name: 'Perfume Oxum', category: 'perfumes', price: 139.90, originalPrice: 189.90, description: 'Perfume floral com essências de Oxum. Amor e fertilidade.', rating: 5, reviews: 76, badge: '', colors: ['50ml', '100ml'], image: '/assets/images/perfume-oxum.jpg' },
  { id: 12, name: 'Perfume Ogum', category: 'perfumes', price: 139.90, originalPrice: 189.90, description: 'Perfume com essências de Ogum. Força e proteção.', rating: 5, reviews: 68, badge: '', colors: ['50ml', '100ml'], image: '/assets/images/perfume-ogum.jpg' },
  { id: 13, name: 'Kit Bem-Vindo', category: 'brindes', price: 49.90, originalPrice: 79.90, description: 'Kit para novos membros: vela, sabonete e cartinha de boas-vindas.', rating: 5, reviews: 234, badge: 'INDICADO', colors: ['Único'], image: '/assets/images/kit-boas-vindas.jpg' },
  { id: 14, name: 'Vela de Sete Cores', category: 'brindes', price: 19.90, originalPrice: 35.90, description: 'Vela artesanal de sete cores para trabalhos espirituais.', rating: 5, reviews: 312, badge: 'POPULAR', colors: ['Sete Cores'], image: '/assets/images/vela-sete-cores.jpg' },
  { id: 15, name: 'Pacote de Oferendas', category: 'brindes', price: 39.90, originalPrice: 59.90, description: 'Kit completo de oferendas: flores, velas e defumação.', rating: 5, reviews: 178, badge: '', colors: ['Completo'], image: '/assets/images/pacote-oferendas.jpg' },
  { id: 16, name: 'Colar de Contas', category: 'acessorios', price: 69.90, originalPrice: 99.90, description: 'Colar artesanal de contas para Orixá. Fio encerado.', rating: 5, reviews: 145, badge: 'ARTESANAL', colors: ['Ogum', 'Oxum', 'Xangô'], image: '/assets/images/colar-contas.jpg' },
  { id: 17, name: 'Pulseira de Proteção', category: 'acessorios', price: 39.90, originalPrice: 59.90, description: 'Pulseira de proteção com pedras naturais.', rating: 5, reviews: 201, badge: '', colors: ['Preto', 'Vermelho'], image: '/assets/images/pulseira-protecao.jpg' },
  { id: 18, name: 'Abadá Cerimonial', category: 'acessorios', price: 199.90, originalPrice: 299.90, description: 'Abadá branco para rituais. Algodão premium, bordado artesanal.', rating: 5, reviews: 67, badge: 'EXCLUSIVO', colors: ['Branco', 'Off-white'], image: '/assets/images/abadá-cerimonial.jpg' },
]

function ProdutoCard({ produto, viewMode }: { produto: typeof produtos[0], viewMode: 'grid' | 'list' }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>({ maxTilt: 8, scale: 1.02 })
  const { addToCart, toggleFavorite, isFavorite } = useCart()
  const discount = Math.round((1 - produto.price / produto.originalPrice) * 100)

  if (viewMode === 'list') {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Link to={`/produto/${produto.id}`} className="w-48 h-48 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center flex-shrink-0">
          <span className="text-6xl">
            {produto.category === 'nichos' ? '🏠' :
             produto.category === 'sabonetes' ? '🧼' :
             produto.category === 'camisas' ? '👕' :
             produto.category === 'perfumes' ? '💐' :
             produto.category === 'brindes' ? '🎁' : '📿'}
          </span>
        </Link>
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <Link to={`/produto/${produto.id}`} className="font-heading font-bold text-lg text-primary hover:text-primary-600 transition-colors">
                {produto.name}
              </Link>
              <button
                onClick={() => toggleFavorite(produto.id)}
                className={`transition-colors ${isFavorite(produto.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
              >
                <svg className="w-5 h-5" fill={isFavorite(produto.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{produto.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-primary">R$ {produto.price.toFixed(2).replace('.', ',')}</span>
              {discount > 0 && <span className="text-sm text-green-600 font-semibold">-{discount}%</span>}
            </div>
            <button
              onClick={() => addToCart(produto)}
              className="btn-primary text-sm px-4 py-2"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Link to={`/produto/${produto.id}`} className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-50 block">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {produto.category === 'nichos' ? '🏠' :
             produto.category === 'sabonetes' ? '🧼' :
             produto.category === 'camisas' ? '👕' :
             produto.category === 'perfumes' ? '💐' :
             produto.category === 'brindes' ? '🎁' : '📿'}
          </span>
        </div>
        {produto.badge && (
          <div className="absolute top-3 left-3">
            <span className="gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              {produto.badge}
            </span>
          </div>
        )}
        <button
          onClick={(e) => { e.preventDefault(); toggleFavorite(produto.id); }}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorite(produto.id) ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-400 hover:text-red-500'
          }`}
        >
          <svg className="w-4 h-4" fill={isFavorite(produto.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(produto.rating)].map((_, i) => (
            <svg key={i} className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-500">({produto.reviews})</span>
        </div>
        <Link to={`/produto/${produto.id}`}>
          <h3 className="font-heading font-bold text-lg text-primary mb-2 group-hover:text-primary-600 transition-colors">
            {produto.name}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{produto.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-primary">R$ {produto.price.toFixed(2).replace('.', ',')}</span>
            {discount > 0 && (
              <span className="text-sm text-gray-400 line-through ml-2">
                R$ {produto.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(produto)}
            className="btn-primary text-sm px-4 py-2"
          >
            + Carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

function Loja() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const { favorites, favoritesCount } = useCart()

  const filteredProducts = produtos.filter(produto => {
    const matchesCategory = selectedCategory === 'todos' || produto.category === selectedCategory
    const matchesSearch = produto.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFavorites = !showFavoritesOnly || favorites.includes(produto.id)
    return matchesCategory && matchesSearch && matchesFavorites
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return b.reviews - a.reviews
  })

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            🛒 Loja do Terreiro
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Loja <span className="text-accent">Casa do Mensageiro</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Produtos artesanais e espirituais para fortalecer sua fé e conexão com os Orixás.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-64">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'gradient-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Favorites Filter */}
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  showFavoritesOnly
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <svg className="w-4 h-4" fill={showFavoritesOnly ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {favoritesCount > 0 && <span>({favoritesCount})</span>}
              </button>

              {/* View Mode */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow text-primary' : 'text-gray-500'}`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow text-primary' : 'text-gray-500'}`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors text-sm"
              >
                <option value="popular">Mais Popular</option>
                <option value="rating">Melhor Nota</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              <span className="font-semibold text-primary">{filteredProducts.length}</span> produtos encontrados
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((produto) => (
                <ProdutoCard key={produto.id} produto={produto} viewMode="grid" />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((produto) => (
                <ProdutoCard key={produto.id} produto={produto} viewMode="list" />
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 text-lg">Nenhum produto encontrado.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">Frete Grátis</h3>
              <p className="text-sm text-gray-600">Acima de R$ 200</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">Compra Segura</h3>
              <p className="text-sm text-gray-600">Pagamento protegido</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">Troca Fácil</h3>
              <p className="text-sm text-gray-600">Até 30 dias</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">Suporte 24h</h3>
              <p className="text-sm text-gray-600">WhatsApp</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Loja
