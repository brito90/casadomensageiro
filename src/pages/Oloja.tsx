import { useState, useEffect, useRef } from 'react'
import Layout from '../layouts/Layout'
import { useTilt } from '../utils/useTilt'

const servicos = [
  { id: 1, title: 'Abertura de Caminhos', description: 'Desbloqueie obstáculos e encontre novas oportunidades na vida.', icon: '🛤️', price: 150, duration: '24h' },
  { id: 2, title: 'Proteção Pessoal', description: 'Escudo espiritual contra energias negativas e mau-olhado.', icon: '🛡️', price: 200, duration: '48h' },
  { id: 3, title: 'Trabalho de Prosperidade', description: 'Atraia abundância financeira e sucesso nos negócios.', icon: '💰', price: 250, duration: '72h' },
  { id: 4, title: 'Limpeza Espiritual', description: 'Renove sua energia e limpe-se de cargas pesadas.', icon: '✨', price: 180, duration: '24h' },
  { id: 5, title: 'Trabalho Amoroso', description: 'Atraia amor saudável ou reconcilie relacionamentos.', icon: '💕', price: 220, duration: '48h' },
  { id: 6, title: 'Despacho Exu', description: 'Trabalho especial com Exu para resolver problemas urgentes.', icon: '🔥', price: 300, duration: '24h' },
]

const depoimentos = [
  { id: 1, name: 'Ricardo M.', text: 'Após o trabalho, minha vida financeira mudou completamente!', rating: 5, avatar: '🧔', location: 'São Paulo' },
  { id: 2, name: 'Fernanda S.', text: 'Estava passando por um momento difícil. O despacho me trouxe paz.', rating: 5, avatar: '👩', location: 'Rio de Janeiro' },
  { id: 3, name: 'Carlos A.', text: 'Recomendo! O trabalho de proteção me deu segurança.', rating: 5, avatar: '👨‍🦳', location: 'Belo Horizonte' },
  { id: 4, name: 'Patricia L.', text: 'Meu negócio estava parado. Faturamento triplicou!', rating: 5, avatar: '👩‍💼', location: 'Salvador' },
  { id: 5, name: 'Marcos R.', text: 'Exu resolveu um problema jurídico que durava anos.', rating: 5, avatar: '👨‍⚖️', location: 'Curitiba' },
]

const faq = [
  { question: 'Como funciona o atendimento?', answer: 'O atendimento é feito via WhatsApp ou presencialmente no terreiro. Após a consulta, o trabalho espiritual é iniciado imediatamente.' },
  { question: 'Quanto tempo leva para ver resultados?', answer: 'Depende do tipo de trabalho. Alguns são imediatos (24h), outros podem levar até 7 dias. O importante é a fé e a persistência.' },
  { question: 'Posso fazer mais de um serviço?', answer: 'Sim! Muitos clientes combinam serviços para maior eficácia. Consulte-nos para criar um plano personalizado.' },
  { question: 'O pagamento é parcelado?', answer: 'Sim, parcelamos em até 6x no cartão de crédito ou oferecemos desconto para pagamento à vista via Pix.' },
]

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return <div ref={ref}>{count}</div>
}

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-red-500 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

function ServiceCard({ servico }: { servico: typeof servicos[0] }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>({ maxTilt: 10, scale: 1.03 })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className="bg-gray-800 rounded-2xl p-6 cursor-pointer hover:bg-gray-750 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 relative overflow-hidden group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-600/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="text-3xl">{servico.icon}</span>
        </div>
        <h3 className="font-heading font-bold text-white text-xl mb-2">{servico.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{servico.description}</p>
        
        <div className="flex items-center justify-between border-t border-gray-700 pt-4">
          <div>
            <span className="text-2xl font-bold text-red-400">R$ {servico.price}</span>
            <span className="text-gray-500 text-sm ml-2">• {servico.duration}</span>
          </div>
          <span className="text-gray-500 text-sm group-hover:text-red-400 transition-colors">
            Saiba mais →
          </span>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-red-500/10 rounded-full blur-xl transition-all duration-500 group-hover:w-32 group-hover:h-32" />
    </div>
  )
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % depoimentos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {depoimentos.map((dep) => (
            <div key={dep.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(dep.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 italic">"{dep.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                    {dep.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{dep.name}</p>
                    <p className="text-gray-500 text-sm">{dep.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {depoimentos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 5000)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-red-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function FAQItem({ item, isOpen, onToggle }: { item: typeof faq[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800 transition-colors"
      >
        <span className="font-semibold text-white">{item.question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-5 pb-5 text-gray-400">{item.answer}</p>
      </div>
    </div>
  )
}

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 23, minutes: 59, seconds: 59 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 59, seconds: 59 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-4 justify-center">
      <div className="text-center">
        <div className="bg-gray-800 rounded-xl px-4 py-3 min-w-[70px]">
          <span className="text-3xl font-bold text-red-400">{String(time.hours).padStart(2, '0')}</span>
        </div>
        <span className="text-xs text-gray-500 mt-1 block">Horas</span>
      </div>
      <span className="text-2xl text-gray-600">:</span>
      <div className="text-center">
        <div className="bg-gray-800 rounded-xl px-4 py-3 min-w-[70px]">
          <span className="text-3xl font-bold text-red-400">{String(time.minutes).padStart(2, '0')}</span>
        </div>
        <span className="text-xs text-gray-500 mt-1 block">Min</span>
      </div>
      <span className="text-2xl text-gray-600">:</span>
      <div className="text-center">
        <div className="bg-gray-800 rounded-xl px-4 py-3 min-w-[70px]">
          <span className="text-3xl font-bold text-red-400">{String(time.seconds).padStart(2, '0')}</span>
        </div>
        <span className="text-xs text-gray-500 mt-1 block">Seg</span>
      </div>
    </div>
  )
}

function Oloja() {
  const [selectedService, setSelectedService] = useState<typeof servicos[0] | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <Particles />
        
        <div className="relative max-w-6xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-red-400 text-sm font-medium mb-6 border border-red-500/30 animate-pulse">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                Atendimento 24h disponível
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Poder de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Exu</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Exu é o guardião dos caminhos, o abridor de portas, o senhor do mercado e da comunicação. 
                Aqui você encontra trabalhos espirituais para resolver seus problemas com rapidez e eficácia.
              </p>
              
              {/* Countdown */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
                <p className="text-sm text-gray-400 mb-3 text-center">⏰ Oferta especial termina em:</p>
                <CountdownTimer />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    setSelectedService(servicos[5])
                    setShowModal(true)
                  }}
                  className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-red-500/30"
                >
                  Consultar Agora
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a 
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                  <span className="text-[120px] md:text-[160px] animate-float">🔥</span>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-900 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                <AnimatedCounter target={5000} />+
              </div>
              <p className="text-gray-400">Clientes Atendidos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                <AnimatedCounter target={98} />%
              </div>
              <p className="text-gray-400">Satisfação</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                <AnimatedCounter target={24} />h
              </div>
              <p className="text-gray-400">Resposta Rápida</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                <AnimatedCounter target={15} />+
              </div>
              <p className="text-gray-400">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-padding bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Serviços de <span className="text-red-500">Exu</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Escolha o serviço que melhor atende sua necessidade espiritual.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico) => (
              <ServiceCard key={servico.id} servico={servico} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Depoimentos
            </h2>
            <p className="text-gray-400">
              Veja o que dizem aqueles que já experimentaram o poder de Exu.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Receba Conselhos de Exu
          </h2>
          <p className="text-white/80 mb-6">
            Cadastre-se e receba orientações espirituais por e-mail.
          </p>
          {subscribed ? (
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <svg className="w-12 h-12 text-white mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-white font-semibold">Inscrito com sucesso!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-1 px-6 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button type="submit" className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Inscrever
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-700 animate-slide-up">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 text-center relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30"
              >
                ✕
              </button>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">{selectedService.icon}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                {selectedService.title}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-6">{selectedService.description}</p>
              <div className="bg-gray-800 rounded-xl p-4 mb-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Valor:</span>
                  <span className="text-xl font-bold text-red-400">R$ {selectedService.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Prazo:</span>
                  <span className="text-white">{selectedService.duration}</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300"
                >
                  Fechar
                </button>
                <a
                  href={`https://wa.me/5511999999999?text=Olá! Tenho interesse no serviço: ${selectedService.title} (R$ ${selectedService.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Oloja
