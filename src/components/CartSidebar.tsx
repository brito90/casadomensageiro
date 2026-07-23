import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="gradient-primary p-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-heading font-bold">Meu Carrinho</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-white/80 text-sm mt-1">
              {items.length} {items.length === 1 ? 'item' : 'itens'}
            </p>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-gray-500 text-lg mb-2">Seu carrinho está vazio</p>
                <p className="text-gray-400 text-sm">Adicione produtos para continuar</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedColor}`}
                    className="bg-gray-50 rounded-xl p-4 flex gap-4"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">
                        {item.category === 'nichos' ? '🏠' :
                         item.category === 'sabonetes' ? '🧼' :
                         item.category === 'camisas' ? '👕' :
                         item.category === 'perfumes' ? '💐' :
                         item.category === 'brindes' ? '🎁' : '📿'}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-primary truncate">{item.name}</h3>
                      <p className="text-xs text-gray-500">Cor: {item.selectedColor}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-white rounded-lg border">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-bold text-primary">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedColor)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="text-2xl font-bold text-primary">
                  R$ {cartTotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              {cartTotal >= 200 && (
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Frete grátis!
                </div>
              )}
              <Link
                to="/checkout"
                onClick={onClose}
                className="w-full btn-primary text-lg py-4 block text-center"
              >
                Finalizar Compra
              </Link>
              <button
                onClick={clearCart}
                className="w-full text-center text-gray-500 hover:text-red-500 text-sm transition-colors"
              >
                Limpar carrinho
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartSidebar
