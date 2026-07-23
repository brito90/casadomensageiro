import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 border border-white/10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 border border-white/10 rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
          📬 Newsletter
        </div>
        
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Fique Conectado ao Axé
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Receba novidades, datas de festas e mensagens de inspiração diretamente no seu e-mail.
        </p>

        {isSubmitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-white/30">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-semibold text-lg">
              Obrigado por se inscrever!
            </p>
            <p className="text-white/70 text-sm mt-2">
              Em breve você receberá nossas novidades.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              required
              className="flex-grow px-6 py-4 rounded-xl bg-white/20 border border-white/30
                       text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent
                       focus:border-transparent transition-all duration-200 backdrop-blur-sm"
            />
            <button
              type="submit"
              className="btn-accent whitespace-nowrap px-8 py-4"
            >
              Inscrever-se
            </button>
          </form>
        )}

        <p className="text-white/50 text-sm mt-6">
          Respeitamos sua privacidade. Cancele quando quiser.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
