import Layout from '../layouts/Layout'
import { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import ProductCarousel from '../components/ProductCarousel'
import HeroBanner from '../components/HeroBanner'
import Top10 from '../components/Top10'
import ContinueBuying from '../components/ContinueBuying'
import Notifications from '../components/Notifications'

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
  { id: 1, name: 'Nicho Ogum', category: 'nichos', price: 189.90, originalPrice: 249.90, description: 'Nicho artesanal em madeira para devoção a Ogum.', rating: 5, reviews: 45, badge: 'MAIS VENDIDO', colors: ['Vermelho', 'Preto'], image: '/assets/images/nicho-ogum.jpg' },
  { id: 2, name: 'Nicho Oxum', category: 'nichos', price: 179.90, originalPrice: 229.90, description: 'Nicho em madeira com detalhes dourados para Oxum.', rating: 5, reviews: 38, badge: 'NOVO', colors: ['Dourado', 'Amarelo'], image: '/assets/images/nicho-oxum.jpg' },
  { id: 3, name: 'Nicho Iemanjá', category: 'nichos', price: 199.90, originalPrice: 259.90, description: 'Nicho azul marinho com conchas para Iemanjá.', rating: 5, reviews: 52, badge: 'DESTAQUE', colors: ['Azul', 'Branco'], image: '/assets/images/nicho-iemanja.jpg' },
  { id: 4, name: 'Sabonete de Rosas', category: 'sabonetes', price: 29.90, originalPrice: 45.90, description: 'Sabonete artesanal com pétalas de rosas.', rating: 5, reviews: 127, badge: 'BEST SELLER', colors: ['Rosa', 'Vermelho'], image: '/assets/images/sabonete-rosas.jpg' },
  { id: 5, name: 'Sabonete de Lavanda', category: 'sabonetes', price: 27.90, originalPrice: 42.90, description: 'Sabonete com lavanda natural.', rating: 5, reviews: 98, badge: '', colors: ['Roxo', 'Lilás'], image: '/assets/images/sabonete-lavanda.jpg' },
  { id: 6, name: 'Sabonete de Alecrim', category: 'sabonetes', price: 25.90, originalPrice: 39.90, description: 'Sabonete com alecrim para proteção.', rating: 4, reviews: 76, badge: '', colors: ['Verde', 'Natural'], image: '/assets/images/sabonete-alecrim.jpg' },
  { id: 7, name: 'Camisa Casa do Mensageiro', category: 'camisas', price: 89.90, originalPrice: 129.90, description: 'Camisa oficial do terreiro.', rating: 5, reviews: 203, badge: 'EXCLUSIVO', colors: ['Branco', 'Preto', 'Vermelho'], image: '/assets/images/camisa-oficial.jpg' },
  { id: 8, name: 'Camisa Ogum', category: 'camisas', price: 79.90, originalPrice: 119.90, description: 'Camisa com estampa de Ogum.', rating: 5, reviews: 156, badge: '', colors: ['Vermelho', 'Preto'], image: '/assets/images/camisa-ogum.jpg' },
  { id: 9, name: 'Camisa Oxum', category: 'camisas', price: 79.90, originalPrice: 119.90, description: 'Camisa com estampa de Oxum.', rating: 5, reviews: 142, badge: '', colors: ['Amarelo', 'Dourado'], image: '/assets/images/camisa-oxum.jpg' },
  { id: 10, name: 'Perfume Axé', category: 'perfumes', price: 149.90, originalPrice: 199.90, description: 'Perfume para atrair axé e prosperidade.', rating: 5, reviews: 89, badge: 'PREMIUM', colors: ['50ml', '100ml'], image: '/assets/images/perfume-axe.jpg' },
  { id: 11, name: 'Perfume Oxum', category: 'perfumes', price: 139.90, originalPrice: 189.90, description: 'Perfume floral de Oxum.', rating: 5, reviews: 76, badge: '', colors: ['50ml', '100ml'], image: '/assets/images/perfume-oxum.jpg' },
  { id: 12, name: 'Perfume Ogum', category: 'perfumes', price: 139.90, originalPrice: 189.90, description: 'Perfume de Ogum para força.', rating: 5, reviews: 68, badge: '', colors: ['50ml', '100ml'], image: '/assets/images/perfume-ogum.jpg' },
  { id: 13, name: 'Kit Bem-Vindo', category: 'brindes', price: 49.90, originalPrice: 79.90, description: 'Kit para novos membros.', rating: 5, reviews: 234, badge: 'INDICADO', colors: ['Único'], image: '/assets/images/kit-boas-vindas.jpg' },
  { id: 14, name: 'Vela de Sete Cores', category: 'brindes', price: 19.90, originalPrice: 35.90, description: 'Vela para trabalhos espirituais.', rating: 5, reviews: 312, badge: 'POPULAR', colors: ['Sete Cores'], image: '/assets/images/vela-sete-cores.jpg' },
  { id: 15, name: 'Pacote de Oferendas', category: 'brindes', price: 39.90, originalPrice: 59.90, description: 'Kit completo de oferendas.', rating: 5, reviews: 178, badge: '', colors: ['Completo'], image: '/assets/images/pacote-oferendas.jpg' },
  { id: 16, name: 'Colar de Contas', category: 'acessorios', price: 69.90, originalPrice: 99.90, description: 'Colar artesanal para Orixá.', rating: 5, reviews: 145, badge: 'ARTESANAL', colors: ['Ogum', 'Oxum', 'Xangô'], image: '/assets/images/colar-contas.jpg' },
  { id: 17, name: 'Pulseira de Proteção', category: 'acessorios', price: 39.90, originalPrice: 59.90, description: 'Pulseira com pedras naturais.', rating: 5, reviews: 201, badge: '', colors: ['Preto', 'Vermelho'], image: '/assets/images/pulseira-protecao.jpg' },
  { id: 18, name: 'Abadá Cerimonial', category: 'acessorios', price: 199.90, originalPrice: 299.90, description: 'Abadá branco para rituais.', rating: 5, reviews: 67, badge: 'EXCLUSIVO', colors: ['Branco', 'Off-white'], image: '/assets/images/abadá-cerimonial.jpg' },
]

// Filter products by category
const nichosProducts = produtos.filter(p => p.category === 'nichos')
const sabonetesProducts = produtos.filter(p => p.category === 'sabonetes')
const camisasProducts = produtos.filter(p => p.category === 'camisas')
const perfumesProducts = produtos.filter(p => p.category === 'perfumes')
const brindesProducts = produtos.filter(p => p.category === 'brindes')
const acessoriosProducts = produtos.filter(p => p.category === 'acessorios')

function Loja() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const { favorites, favoritesCount, addToCart } = useCart()

  // debounce search
  const handleSearch = useCallback((v: string) => {
    setSearchTerm(v)
    window.clearTimeout((handleSearch as any)._t)
    ;(handleSearch as any)._t = window.setTimeout(() => setDebouncedSearch(v), 300)
  }, [])

  const filteredProducts = useMemo(() => {
    return produtos.filter(produto => {
      const matchesCategory = selectedCategory === 'todos' || produto.category === selectedCategory
      const matchesSearch = produto.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      const matchesFavorites = !showFavoritesOnly || favorites.includes(produto.id)
      return matchesCategory && matchesSearch && matchesFavorites
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return b.reviews - a.reviews
    })
  }, [selectedCategory, debouncedSearch, showFavoritesOnly, favorites, sortBy])

  const handleAddToCart = useCallback((produto: typeof produtos[0]) => {
    addToCart(produto)
    setToast(`${produto.name} adicionado ao carrinho`)
    window.setTimeout(() => setToast(null), 2500)
  }, [addToCart])

  return (
    <Layout>
      {/* Hero Banner */}
      <div className="pt-24 pb-8 px-4 max-w-7xl mx-auto">
        <HeroBanner />
      </div>

      {/* Continue Buying */}
      <ContinueBuying />

      {/* Top 10 */}
      <div className="max-w-7xl mx-auto px-4">
        <Top10 products={produtos.sort((a, b) => b.reviews - a.reviews)} />
      </div>

      {/* Carousels by Category */}
      <div className="max-w-7xl mx-auto">
        <ProductCarousel
          title="Nichos Artesanais"
          products={nichosProducts}
          icon="🏠"
        />
        <ProductCarousel
          title="Sabonetes Naturais"
          products={sabonetesProducts}
          icon="🧼"
        />
        <ProductCarousel
          title="Camisas Exclusivas"
          products={camisasProducts}
          icon="👕"
        />
        <ProductCarousel
          title="Perfumes Sagrados"
          products={perfumesProducts}
          icon="💐"
        />
        <ProductCarousel
          title="Brindes e Presentes"
          products={brindesProducts}
          icon="🎁"
        />
        <ProductCarousel
          title="Acessórios"
          products={acessoriosProducts}
          icon="📿"
        />
      </div>

      {/* Filters */}
      <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-64">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-sm font-medium transition-all border-2 ${
                    selectedCategory === cat.id
                      ? 'bg-[#520c02] text-white border-[#520c02]'
                      : 'bg-white text-black border-black hover:bg-gray-100'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                  showFavoritesOnly ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <svg className="w-4 h-4" fill={showFavoritesOnly ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {favoritesCount > 0 && <span>({favoritesCount})</span>}
              </button>

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

      {/* All Products Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary">
              Todos os Produtos
            </h2>
            <p className="text-gray-600">
              <span className="font-semibold text-primary">{filteredProducts.length}</span> produtos
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((produto) => (
                <ProdutoCardGrid key={produto.id} produto={produto} onAdd={handleAddToCart} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((produto) => (
                <ProdutoCardList key={produto.id} produto={produto} onAdd={handleAddToCart} />
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
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
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">Frete Grátis</h3>
              <p className="text-sm text-gray-600">Acima de R$ 200</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">Compra Segura</h3>
              <p className="text-sm text-gray-600">Pagamento protegido</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">Troca Fácil</h3>
              <p className="text-sm text-gray-600">Até 30 dias</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">Suporte 24h</h3>
              <p className="text-sm text-gray-600">WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-black text-white px-6 py-3 border-2 border-black shadow-[4px_4px_0_#520c02]">
          {toast}
        </div>
      )}

      {/* Notifications */}
      <Notifications />
    </Layout>
  )
}

// Grid Card Component
function ProdutoCardGrid({ produto, onAdd }: { produto: typeof produtos[0]; onAdd: (p: typeof produtos[0]) => void }) {
  const { toggleFavorite, isFavorite } = useCart()
  const discount = Math.round((1 - produto.price / produto.originalPrice) * 100)

  return (
    <div className="card-square overflow-hidden group">
      <Link to={`/produto/${produto.id}`} className="relative h-44 bg-gradient-to-br from-primary-100 to-primary-50 block">
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
            <span className="bg-[#520c02] text-white text-xs font-bold px-3 py-1">
              {produto.badge}
            </span>
          </div>
        )}
        <button
          onClick={(e) => { e.preventDefault(); toggleFavorite(produto.id); }}
          className={`absolute top-3 right-3 w-8 h-8 border-2 border-black flex items-center justify-center transition-all ${
            isFavorite(produto.id) ? 'bg-[#520c02] text-white' : 'bg-white text-gray-400 hover:text-[#520c02]'
          }`}
        >
          <svg className="w-4 h-4" fill={isFavorite(produto.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </Link>
      <div className="p-4">
        <Link to={`/produto/${produto.id}`}>
          <h3 className="font-heading font-bold text-[#520c02] text-sm mb-1 group-hover:opacity-80 transition-colors line-clamp-1">
            {produto.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-[#520c02]">R$ {produto.price.toFixed(2).replace('.', ',')}</span>
            {discount > 0 && (
              <span className="text-xs text-gray-400 line-through ml-2">
                R$ {produto.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
          <button
            onClick={() => onAdd(produto)}
            className="btn-square text-xs px-3 py-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// List Card Component
function ProdutoCardList({ produto, onAdd }: { produto: typeof produtos[0]; onAdd: (p: typeof produtos[0]) => void }) {
  const { toggleFavorite, isFavorite } = useCart()
  const discount = Math.round((1 - produto.price / produto.originalPrice) * 100)

  return (
    <div className="card-square overflow-hidden flex">
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
            <Link to={`/produto/${produto.id}`} className="font-heading font-bold text-lg text-[#520c02] hover:opacity-80 transition-colors">
              {produto.name}
            </Link>
            <button
              onClick={() => toggleFavorite(produto.id)}
              className={`transition-colors ${isFavorite(produto.id) ? 'text-[#520c02]' : 'text-gray-400 hover:text-[#520c02]'}`}
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
            <span className="text-xl font-bold text-[#520c02]">R$ {produto.price.toFixed(2).replace('.', ',')}</span>
            {discount > 0 && <span className="text-sm text-green-600 font-semibold">-{discount}%</span>}
          </div>
          <button
            onClick={() => onAdd(produto)}
            className="btn-square text-sm px-4 py-2"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Loja
