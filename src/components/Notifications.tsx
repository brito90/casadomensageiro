import { useState, useEffect } from 'react'

interface Notification {
  id: number
  type: 'sale' | 'stock' | 'new' | 'viewed'
  message: string
  time: string
}

const initialNotifications: Notification[] = [
  { id: 1, type: 'sale', message: 'Maria acabou de comprar Nicho Ogum', time: 'Agora' },
  { id: 2, type: 'stock', message: 'Últimas 3 unidades do Perfume Axé!', time: '5 min' },
  { id: 3, type: 'new', message: 'Nova coleção de Sabonetes disponível', time: '1 hora' },
]

function Notifications() {
  const [showNotification, setShowNotification] = useState(false)
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < initialNotifications.length) {
        setCurrentNotification(initialNotifications[index])
        setShowNotification(true)
        
        setTimeout(() => {
          setShowNotification(false)
        }, 4000)
        
        index++
      } else {
        index = 0
      }
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Floating Notification */}
      {showNotification && currentNotification && (
        <div className="fixed bottom-24 left-6 z-50 animate-slide-in-left">
          <div className="bg-white rounded-xl shadow-2xl p-4 max-w-sm flex items-center gap-3 border-l-4 border-primary">
            <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
              {currentNotification.type === 'sale' && (
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )}
              {currentNotification.type === 'stock' && (
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {currentNotification.type === 'new' && (
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{currentNotification.message}</p>
              <p className="text-xs text-gray-500">{currentNotification.time}</p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Notifications List (Hidden by default, can be toggled) */}
    </>
  )
}

export default Notifications
