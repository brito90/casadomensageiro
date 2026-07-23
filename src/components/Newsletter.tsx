import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section className="section-padding bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Fique Conectado
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Receba novidades, eventos e mensagens de inspiração diretamente no seu e-mail.
          </p>

          {isSubmitted ? (
            <div className="bg-white bg-opacity-10 rounded-xl p-6 max-w-md mx-auto">
              <svg className="w-12 h-12 text-secondary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-white font-semibold">
                Obrigado por se inscrever!
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Em breve você receberá nossas novidades.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-grow px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-30
                         text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary
                         focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="btn-secondary whitespace-nowrap"
              >
                Inscrever-se
              </button>
            </form>
          )}

          <p className="text-gray-400 text-sm">
            Respeitamos sua privacidade. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
