import { Link } from 'react-router-dom'

interface Product {
  id: number
  name: string
  category: string
  price: number
  badge: string
}

interface Top10Props {
  products: Product[]
}

function Top10({ products }: Top10Props) {
  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4">
        <h2 className="text-xl md:text-2xl font-heading font-bold text-primary flex items-center gap-2">
          <span className="text-accent">🏆</span> Top 10 Mais Vendidos
        </h2>
        <Link to="/loja" className="text-sm text-primary hover:text-primary-600 font-semibold">
          Ver todos →
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
        {products.slice(0, 10).map((product, index) => (
          <Link
            key={product.id}
            to={`/produto/${product.id}`}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 aspect-square">
              {/* Number */}
              <div className="absolute -left-4 -bottom-4 text-[120px] font-black text-primary/10 leading-none z-0">
                {index + 1}
              </div>
              
              {/* Product Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
                  {product.category === 'nichos' ? '🏠' :
                   product.category === 'sabonetes' ? '🧼' :
                   product.category === 'camisas' ? '👕' :
                   product.category === 'perfumes' ? '💐' :
                   product.category === 'brindes' ? '🎁' : '📿'}
                </span>
              </div>

              {/* Rank Badge */}
              <div className="absolute top-2 right-2 z-20">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  index < 3 ? 'gradient-primary text-white' : 'bg-white text-primary'
                }`}>
                  {index + 1}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                <span className="text-white font-semibold">Ver Produto</span>
              </div>
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="font-heading font-bold text-primary text-sm line-clamp-1 group-hover:text-primary-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-primary font-bold">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Top10
