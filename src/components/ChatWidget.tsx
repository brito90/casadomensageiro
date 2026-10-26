import { useState } from 'react'

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (message.trim()) {
      const encoded = encodeURIComponent(message)
      window.open(`https://wa.me/5511999999999?text=${encoded}`, '_blank')
      setMessage('')
      setIsOpen(false)
    }
  }

  const quickMessages = [
    'Gostaria de saber mais sobre um produto',
    'Tenho uma dúvida sobre meu pedido',
    'Quero agendar uma consulta',
    'Outra pergunta',
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="gradient-primary p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <h4 className="font-semibold">Casa do Mensageiro</h4>
                  <p className="text-xs text-white/80">Pai Rychelmy</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 bg-gray-50 h-64 overflow-y-auto">
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🧘</span>
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    Olá! Como posso te ajudar? 🙏
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="mt-4 space-y-2">
              <p className="text-xs text-gray-500">Mensagens rápidas:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(msg)}
                  className="block w-full text-left text-sm bg-white border border-gray-200 rounded-lg px-3 py-2 hover:bg-primary-50 hover:border-primary transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 text-sm"
                aria-label="Mensagem de WhatsApp"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Atendimento via WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-gray-500 rotate-90' : 'gradient-primary hover-glow'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--color-accent)] rounded-full flex items-center justify-center animate-pulse">
          <span className="text-primary-900 text-xs font-bold">1</span>
        </div>
      )}
    </div>
  )
}

export default ChatWidget
