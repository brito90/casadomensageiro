import { useState } from 'react'
import Layout from '../layouts/Layout'

const faq = [
  { q: 'Como posso participar das festas?', a: 'Basta comparecer no horário indicado. Todas as festas são abertas ao público.' },
  { q: 'Preciso marcar consulta com o Pai de Santo?', a: 'Sim, agende pelo WhatsApp ou pela página de Búzios.' },
  { q: 'O terreiro接受 visitas?', a: 'Sim! Visitas são recebidas de terça a sábado, das 9h às 17h.' },
  { q: 'Como posso ser voluntário?', a: 'Preencha o formulário abaixo ou fale conosco pelo WhatsApp.' },
  { q: 'Quais são as formas de doação?', a: 'Aceitamos Pix, cartão, boleto e doação de materiais presencialmente.' },
]

function MapPlaceholder() {
  return (
    <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-gray-600 font-semibold">Casa do Mensageiro</p>
          <p className="text-gray-500 text-sm">Rua da Fé, 123 - Centro</p>
        </div>
      </div>
    </div>
  )
}

function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Fale Conosco</h1>
          <p className="text-xl text-white/80">Estamos aqui para ajudar você.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">Endereço</h3>
              <p className="text-gray-600 text-sm">Rua da Fé, 123<br />Centro - São Paulo/SP</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm">(11) 99999-9999<br />Seg-Sex: 9h às 18h</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="font-heading font-bold text-primary mb-2">E-mail</h3>
              <p className="text-gray-600 text-sm">contato@casadomensageiro.com<br />Respondemos em 24h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Envie sua mensagem</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <span className="text-5xl">✅</span>
                  <h3 className="text-xl font-bold text-green-700 mt-4">Mensagem enviada!</h3>
                  <p className="text-green-600 mt-2">Responderemos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Assunto *</label>
                      <select required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0">
                        <option value="">Selecione</option>
                        <option>Consulta espiritual</option>
                        <option>Agendar visita</option>
                        <option>Quero ser voluntário</option>
                        <option>Doação</option>
                        <option>Outro assunto</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                    <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 resize-none" />
                  </div>
                  <button type="submit" className="w-full btn-primary py-4 text-lg">Enviar Mensagem</button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Localização</h2>
              <MapPlaceholder />
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="text-xl">🕐</span>
                  <span>Horário: Terça a Sábado, 9h às 17h</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="text-xl">🅿️</span>
                  <span>Estacionamento gratuito disponível</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="text-xl">🚌</span>
                  <span>Próximo ao ponto de ônibus linha 123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-8">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-primary pr-4">{item.q}</span>
                  <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`transition-all duration-300 ${openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-5 pb-5 text-gray-600">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-heading font-bold text-primary mb-6">Siga-nos nas redes sociais</h3>
          <div className="flex justify-center gap-4">
            {['Facebook', 'Instagram', 'YouTube'].map((social) => (
              <a key={social} href="#" className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                <span className="text-xl">{social === 'Facebook' ? 'f' : social === 'Instagram' ? '📷' : '▶️'}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contato
