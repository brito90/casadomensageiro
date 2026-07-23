import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import Layout from '../layouts/Layout'
import { useCart, Product } from '../context/CartContext'

const allProducts: Product[] = [
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

function Produto() {
  const { id } = useParams<{ id: string }>()
  const product = allProducts.find(p => p.id === Number(id))
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '')
  const [quantity, setQuantity] = useState(1)
  const { addToCart, toggleFavorite, isFavorite } = useCart()

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Produto não encontrado</h1>
            <Link to="/loja" className="btn-primary">Voltar à Loja</Link>
          </div>
        </div>
      </Layout>
    )
  }

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedColor)
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name} (${selectedColor}). Podem me ajudar?`)
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 pt-24 pb-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Início</Link>
            <span>/</span>
            <Link to="/loja" className="hover:text-primary">Loja</Link>
            <span>/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative">
              <div className="gradient-secondary rounded-3xl p-8 aspect-square flex items-center justify-center">
                <span className="text-[120px]">
                  {product.category === 'nichos' ? '🏠' :
                   product.category === 'sabonetes' ? '🧼' :
                   product.category === 'camisas' ? '👕' :
                   product.category === 'perfumes' ? '💐' :
                   product.category === 'brindes' ? '🎁' : '📿'}
                </span>
              </div>
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="gradient-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                    {product.badge}
                  </span>
                </div>
              )}
              <button
                onClick={() => toggleFavorite(product.id)}
                className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  isFavorite(product.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-400 hover:text-red-500 shadow-lg'
                }`}
              >
                <svg className="w-6 h-6" fill={isFavorite(product.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500">({product.reviews} avaliações)</span>
                </div>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">
                      -{discount}%
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-3">
                  Opção: <span className="font-normal text-gray-600">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all ${
                        selectedColor === color
                          ? 'gradient-primary text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-3">Quantidade</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gray-100 rounded-xl">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-gray-500">
                    Total: <span className="font-bold text-primary text-xl">
                      R$ {(product.price * quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary text-lg py-4 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Adicionar ao Carrinho
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Frete grátis acima de R$ 200
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Garantia de 30 dias
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Produto artesanal
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Suporte via WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding gradient-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-8">
              Produtos Relacionados
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/produto/${p.id}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-32 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                    <span className="text-5xl group-hover:scale-110 transition-transform">
                      {p.category === 'nichos' ? '🏠' :
                       p.category === 'sabonetes' ? '🧼' :
                       p.category === 'camisas' ? '👕' :
                       p.category === 'perfumes' ? '💐' :
                       p.category === 'brindes' ? '🎁' : '📿'}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-primary text-sm mb-1 group-hover:text-primary-600 transition-colors">
                      {p.name}
                    </h3>
                    <span className="text-lg font-bold text-primary">
                      R$ {p.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}

export default Produto
