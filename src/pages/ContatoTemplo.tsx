import { useState } from 'react'
import Layout from '../layouts/Layout'
import { Card3D, Button3D, Icon3D } from '../utils/useTilt3D'

const contatos = [
  { icon: '📍', title: 'Endereço', lines: ['Rua da Fé, 123', 'Centro - São Paulo/SP', 'CEP: 01234-567'], action: 'Como chegar', gradient: 'from-red-500 to-orange-500' },
  { icon: '📱', title: 'WhatsApp', lines: ['(11) 99999-9999', 'Seg-Sex: 9h às 18h', 'Sáb: 9h às 14h'], action: 'Enviar mensagem', gradient: 'from-green-500 to-emerald-500' },
  { icon: '✉️', title: 'E-mail', lines: ['templo@casadomensageiro.com', 'Respondemos em até 24h', 'Dúvidas gerais'], action: 'Enviar e-mail', gradient: 'from-blue-500 to-indigo-500' },
  { icon: '📞', title: 'Telefone', lines: ['(11) 3333-4444', 'Fixo: Seg-Sex 9h às 18h', 'Emergências 24h'], action: 'Ligar agora', gradient: 'from-purple-500 to-pink-500' },
]

const horarios = [
  { day: 'Segunda', hours: 'Fechado', available: false },
  { day: 'Terça', hours: '9h - 17h', available: true },
  { day: 'Quarta', hours: '9h - 17h', available: true },
  { day: 'Quinta', hours: '9h - 17h', available: true },
  { day: 'Sexta', hours: '9h - 17h', available: true },
  { day: 'Sábado', hours: '9h - 14h', available: true },
  { day: 'Domingo', hours: 'Após o Culto (12h)', available: true },
]

const redes = [
  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', color: 'from-blue-600 to-blue-700' },
  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', color: 'from-pink-500 to-purple-600' },
  { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', color: 'from-red-500 to-red-600' },
  { name: 'TikTok', icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48 6.28 6.28 0 001.86-4.43V8.73A8.25 8.25 0 0021 10.09V6.69h-1.41z', color: 'from-gray-800 to-black' },
]

function ContatoTemplo() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="absolute text-4xl" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 2}s` }}>
                {['🏛️', '📞', '✉️', '📍', '🙏'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Contato do <span className="text-accent">Templo</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Estamos aqui para acolhê-lo. Entre em contato conosco.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contatos.map((contato, i) => (
              <Card3D key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                <Icon3D className={`bg-gradient-to-br ${contato.gradient} mx-auto mb-4 shadow-lg`}>
                  <span className="text-2xl">{contato.icon}</span>
                </Icon3D>
                <h3 className="font-heading font-bold text-primary text-lg mb-3">{contato.title}</h3>
                <div className="space-y-1 mb-4">
                  {contato.lines.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm">{line}</p>
                  ))}
                </div>
                <button className="text-primary font-semibold text-sm hover:underline">
                  {contato.action} →
                </button>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Horários + Mapa */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Horários */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Horário de Funcionamento</h2>
              <Card3D className="bg-white rounded-2xl p-6">
                <div className="space-y-3">
                  {horarios.map((item, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-xl ${item.available ? 'bg-primary-50' : 'bg-gray-100'}`}>
                      <span className={`font-semibold ${item.available ? 'text-primary' : 'text-gray-400'}`}>
                        {item.day}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${item.available ? 'text-gray-600' : 'text-gray-400'}`}>
                          {item.hours}
                        </span>
                        {item.available && (
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-xl">
                  <p className="text-sm text-primary font-semibold">
                    📌 Horário especial: Domingos após o Culto (12h - 14h)
                  </p>
                </div>
              </Card3D>
            </div>

            {/* Mapa */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Como Chegar</h2>
              <Card3D className="bg-white rounded-2xl overflow-hidden">
                <div className="h-72 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <p className="font-semibold text-primary">Casa do Mensageiro</p>
                      <p className="text-sm text-gray-500">Rua da Fé, 123 - Centro</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🚌</span>
                    <div>
                      <p className="font-semibold text-primary text-sm">Ônibus</p>
                      <p className="text-gray-600 text-sm">Linhas 123, 456 - Ponto "Rua da Fé"</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🚇</span>
                    <div>
                      <p className="font-semibold text-primary text-sm">Metrô</p>
                      <p className="text-gray-600 text-sm">Estação Centro - 5 min a pé</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🅿️</span>
                    <div>
                      <p className="font-semibold text-primary text-sm">Estacionamento</p>
                      <p className="text-gray-600 text-sm">Gratuito para visitantes</p>
                    </div>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Envie uma Mensagem</h2>
            <p className="text-gray-600">Preencha o formulário e entraremos em contato.</p>
          </div>
          {submitted ? (
            <Card3D className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-lg mx-auto">
              <span className="text-5xl">✅</span>
              <h3 className="text-2xl font-bold text-green-700 mt-4 mb-2">Mensagem Enviada!</h3>
              <p className="text-green-600">Responderemos em breve. Obrigado pelo contato!</p>
            </Card3D>
          ) : (
            <Card3D className="bg-gray-50 rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assunto *</label>
                    <select required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors">
                      <option value="">Selecione</option>
                      <option>Visita ao templo</option>
                      <option>Consulta espiritual</option>
                      <option>Agendar Búzios</option>
                      <option>Quero ser voluntário</option>
                      <option>Doação</option>
                      <option>Dúvida geral</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors resize-none" placeholder="Escreva sua mensagem aqui..." />
                </div>
                <Button3D variant="primary" className="w-full py-4 text-lg">
                  Enviar Mensagem
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </Button3D>
              </form>
            </Card3D>
          )}
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-heading font-bold text-primary mb-6">Siga-nos nas Redes Sociais</h3>
          <div className="flex justify-center gap-4">
            {redes.map((rede, i) => (
              <a key={i} href="#" className={`w-14 h-14 bg-gradient-to-br ${rede.color} rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300`}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d={rede.icon}/></svg>
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">@casadomensageiro</p>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-12 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Fale Conosco pelo WhatsApp</h3>
              <p className="text-white/80">Resposta rápida para suas dúvidas.</p>
            </div>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContatoTemplo
