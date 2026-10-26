import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface Product {
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

export interface CartItem extends Product {
  quantity: number
  selectedColor: string
}

export interface CartContextType {
  items: CartItem[]
  favorites: number[]
  addToCart: (product: Product, color?: string) => void
  removeFromCart: (productId: number, color: string) => void
  updateQuantity: (productId: number, color: string, quantity: number) => void
  clearCart: () => void
  toggleFavorite: (productId: number) => void
  isFavorite: (productId: number) => boolean
  cartTotal: number
  cartCount: number
  favoritesCount: number
}

function parseSaved<T>(key: string, defaultValue: T): T {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : defaultValue
  } catch {
    console.warn(`Failed to parse localStorage key: ${key}`)
    return defaultValue
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    return parseSaved<CartItem[]>( 'cart', [])
  })

  const [favorites, setFavorites] = useState<number[]>(() => {
    return parseSaved<number[]>( 'favorites', [])
  })

  useEffect(() => {
    const serialized = JSON.stringify(items)
    try {
      localStorage.setItem('cart', serialized)
    } catch (error) {
      console.error('localStorage quota exceeded, cart not saved', error)
    }
  }, [items])

  useEffect(() => {
    const serialized = JSON.stringify(favorites)
    try {
      localStorage.setItem('favorites', serialized)
    } catch (error) {
      console.error('localStorage quota exceeded, favorites not saved', error)
    }
  }, [favorites])

  const addToCart = (product: Product, color?: string) => {
    const selectedColor = color || product.colors[0]
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedColor === selectedColor)
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1, selectedColor }]
    })
  }

  const removeFromCart = (productId: number, color: string) => {
    setItems(prev => prev.filter(item => !(item.id === productId && item.selectedColor === color)))
  }

  const updateQuantity = (productId: number, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, color)
      return
    }
    setItems(prev =>
      prev.map(item =>
        item.id === productId && item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => setItems([])

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const isFavorite = (productId: number) => favorites.includes(productId)

  const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const favoritesCount = favorites.length

  return (
    <CartContext.Provider
      value={{
        items,
        favorites,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleFavorite,
        isFavorite,
        cartTotal,
        cartCount,
        favoritesCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
