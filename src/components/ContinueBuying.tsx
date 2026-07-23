import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Product {
  id: number
  name: string
  category: string
  price: number
}

function ContinueBuying() {
  const [recentProducts, setRecentProducts] = useState<Product[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('recentProducts')
    if (stored) {
      setRecentProducts(JSON.parse(stored))
    }
  }, [])

  if (recentProducts.length === 0) return null

  return (
    <div className="mb-12 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl md:text-2xl font-heading font-bold text-primary flex items-center gap-2">
          <span>👁️</span> Continuar Comprando
        </h2>
        <Link to="/loja" className="text-sm text-primary hover:text-primary-600 font-semibold">
          Ver todos →
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
        {recentProducts.slice(0, 6).map((product) => (
          <Link
            key={product.id}
            to={`/produto/${product.id}`}
            className="flex-shrink-0 w-32"
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl aspect-square flex items-center justify-center mb-2">
              <span className="text-4xl">
                {product.category === 'nichos' ? '🏠' :
                 product.category === 'sabonetes' ? '🧼' :
                 product.category === 'camisas' ? '👕' :
                 product.category === 'perfumes' ? '💐' :
                 product.category === 'brindes' ? '🎁' : '📿'}
              </span>
            </div>
            <h3 className="font-medium text-primary text-xs line-clamp-2">{product.name}</h3>
            <p className="text-primary font-bold text-sm">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ContinueBuying
