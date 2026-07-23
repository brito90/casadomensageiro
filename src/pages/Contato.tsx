import { useState, useEffect, useRef } from 'react'
import Layout from '../layouts/Layout'

const faq = [
  { q: 'Como posso participar das festas?', a: 'Basta comparecer no horário indicado. Todas as festas são abertas ao público e não é necessária inscrição prévia.' },
  { q: 'Preciso marcar consulta com o Pai de Santo?', a: 'Sim, agende pelo WhatsApp ou pela página de Búzios. Atendemos de terça a sábado.' },
  { q: 'O terreiro recebe visitas?', a: 'Sim! Visitas são recebidas de terça a sábado, das 9h às 17h. Agende pelo WhatsApp.' },
  { q: 'Como posso ser voluntário?', a: 'Preencha o formulário abaixo ou fale conosco pelo WhatsApp. Teremos prazer em recebê-lo!' },
  { q: 'Quais são as formas de doação?', a: 'Aceitamos Pix, cartão de crédito, boleto e doação de materiais presencialmente no terreiro.' },
  { q: 'Preciso ser iniciado para frequentar?', a: 'Não! Todas as nossas portas são abertas para quem busca paz e crescimento espiritual.' },
]

const contactInfo = [
  { icon: '📍', title: 'Endereço', lines: ['Rua da Fé, 123', 'Centro - São Paulo/SP', 'CEP: 01234-567'], color: 'from-red-500 to-orange-500' },
  { icon: '📱', title: 'WhatsApp', lines: ['(11) 99999-9999', 'Seg-Sex: 9h às 18h', 'Sáb: 9h às 14h'], color: 'from-green-500 to-emerald-500' },
  { icon: '✉️', title: 'E-mail', lines: ['contato@casadomensageiro.com', 'Respondemos em até 24h', 'Dúvidas gerais'], color: 'from-blue-500 to-indigo-500' },
  { icon: '📞', title: 'Telefone', lines: ['(11) 3333-4444', 'Fixo: Seg-Sex 9h às 18h', 'Emergências 24h'], color: 'from-purple-500 to-pink-500' },
]

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsInView(true) }, { threshold })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, threshold])
  return isInView
}

function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-800" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="absolute inset-0 opacity-10">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="absolute text-4xl" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 2}s` }}>
              {['💬', '📞', '✉️', '📍', '🙏'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-10 text-center px-4" style={{ transform: `translateY(${-scrollY * 0.2}px)`, opacity: 1 - scrollY / 500 }}>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          FALE <span className="text-accent">CONOSCO</span>
        </h1>
        <p className="text-xl text-white/80 max-w-xl mx-auto mb-8">
          Estamos aqui para ajudar. Entre em contato conosco.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#contato" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
            Enviar Mensagem
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactCards() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  return (
    <div ref={ref} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <div key={i} className={`group relative bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 cursor-pointer ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <span className="text-3xl">{info.icon}</span>
              </div>
              <h3 className="font-heading font-bold text-primary text-xl mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.lines.map((line, j) => (
                  <p key={j} className="text-gray-600 text-sm">{line}</p>
                ))}
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contato" className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">Envie sua mensagem</h2>
            <p className="text-gray-600 mb-8">Preencha o formulário e entraremos em contato.</p>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-slide-up">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">Mensagem enviada!</h3>
                <p className="text-green-600">Responderemos em breve. Obrigado pelo contato!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'name' || formData.name ? 'top-2 text-xs text-primary' : 'top-4 text-gray-500'}`}>Nome *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} className="w-full px-4 pt-7 pb-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white" />
                  </div>
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'email' || formData.email ? 'top-2 text-xs text-primary' : 'top-4 text-gray-500'}`}>E-mail *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className="w-full px-4 pt-7 pb-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'phone' || formData.phone ? 'top-2 text-xs text-primary' : 'top-4 text-gray-500'}`}>Telefone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)} className="w-full px-4 pt-7 pb-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white" />
                  </div>
                  <div className="relative">
                    <label className={`absolute left-4 transition-all duration-300 text-xs text-primary`}>Assunto *</label>
                    <select required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 pt-7 pb-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white appearance-none">
                      <option value="">Selecione</option>
                      <option>Consulta espiritual</option>
                      <option>Agendar visita</option>
                      <option>Quero ser voluntário</option>
                      <option>Doação</option>
                      <option>Outro assunto</option>
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-300 ${focusedField === 'message' || formData.message ? 'top-2 text-xs text-primary' : 'top-4 text-gray-500'}`}>Mensagem *</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} className="w-full px-4 pt-7 pb-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors bg-white resize-none" />
                </div>
                <button type="submit" className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2 group">
                  Enviar Mensagem
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
              </form>
            )}
          </div>

          {/* Map + Info */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">Localização</h2>
            <p className="text-gray-600 mb-8">Visite-nos pessoalmente.</p>
            <div className="w-full h-72 bg-gray-200 rounded-2xl overflow-hidden mb-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center group-hover:scale-105 transition-transform">
                  <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <p className="text-gray-600 font-semibold">Casa do Mensageiro</p>
                  <p className="text-gray-500 text-sm">Rua da Fé, 123 - Centro</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: '🕐', text: 'Horário: Terça a Sábado, 9h às 17h' },
                { icon: '🅿️', text: 'Estacionamento gratuito para visitantes' },
                { icon: '🚌', text: 'Próximo ao ponto de ônibus linha 123' },
                { icon: '♿', text: 'Acessibilidade para cadeirantes' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600">Encontre respostas para as dúvidas mais comuns.</p>
        </div>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <div key={i} className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border-primary shadow-lg' : 'border-gray-200 hover:border-gray-300'}`}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className={`font-semibold pr-4 transition-colors ${openFaq === i ? 'text-primary' : 'text-gray-800'}`}>{item.q}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openFaq === i ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>
              <div className={`transition-all duration-300 ${openFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 pb-6 text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialSection() {
  const socials = [
    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', color: 'from-blue-600 to-blue-700' },
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', color: 'from-pink-500 to-purple-600' },
    { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', color: 'from-red-500 to-red-600' },
  ]
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-heading font-bold text-primary mb-8">Siga-nos nas redes sociais</h3>
        <div className="flex justify-center gap-6">
          {socials.map((social, i) => (
            <a key={i} href="#" className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300`}>
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon}/></svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contato() {
  return (
    <Layout>
      <HeroSection />
      <ContactCards />
      <ContactForm />
      <FAQSection />
      <SocialSection />
    </Layout>
  )
}

export default Contato
