import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTilt } from '../utils/useTilt'
import { useCart } from '../context/CartContext'

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice: number
  description: string
  rating: number
  reviews: number
  badge: string
  colors: string[]
  image: string
}

interface ProductCarouselProps {
  title: string
  products: Product[]
  icon?: string
}

function ProductCard({ product }: { product: Product }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>({ maxTilt: 8, scale: 1.05 })
  const { addToCart, toggleFavorite, isFavorite } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className="flex-shrink-0 w-64 md:w-72 group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Image */}
        <Link to={`/produto/${product.id}`} className="relative h-40 bg-gradient-to-br from-primary-100 to-primary-50 block overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl transition-transform duration-500 group-hover:scale-125">
              {product.category === 'nichos' ? '🏠' :
               product.category === 'sabonetes' ? '🧼' :
               product.category === 'camisas' ? '👕' :
               product.category === 'perfumes' ? '💐' :
               product.category === 'brindes' ? '🎁' : '📿'}
            </span>
          </div>
          
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-2 left-2">
              <span className="gradient-primary text-white text-xs font-bold px-2 py-1 rounded">
                {product.badge}
              </span>
            </div>
          )}

          {/* Discount Badge */}
          {discount > 0 && (
            <div className="absolute top-2 right-2">
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discount}%
              </span>
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={(e) => { e.preventDefault(); toggleFavorite(product.id); }}
            className={`absolute bottom-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              isFavorite(product.id) ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-400 hover:text-red-500'
            }`}
          >
            <svg className="w-4 h-4" fill={isFavorite(product.id) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Quick Add Overlay */}
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={(e) => { e.preventDefault(); addToCart(product); }}
              className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              + Adicionar
            </button>
          </div>
        </Link>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(product.rating)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
          <Link to={`/produto/${product.id}`}>
            <h3 className="font-heading font-bold text-primary text-sm mb-1 hover:text-primary-600 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {discount > 0 && (
              <span className="text-xs text-gray-400 line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCarousel({ title, products, icon = '✨' }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = 300
    const newScrollLeft = direction === 'left' 
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount
    
    scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  return (
    <div className="relative mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-xl md:text-2xl font-heading font-bold text-primary flex items-center gap-2">
          <span>{icon}</span> {title}
        </h2>
        <Link to="/loja" className="text-sm text-primary hover:text-primary-600 font-semibold">
          Ver todos →
        </Link>
      </div>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Products Scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-white transition-all opacity-0 group-hover:opacity-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductCarousel
