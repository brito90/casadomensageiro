import { useState } from 'react'
import Layout from '../layouts/Layout'
import { Card3D, Button3D, Icon3D } from '../utils/useTilt3D'

const horarios = [
  { day: 'Segunda', hours: 'Fechado', available: false },
  { day: 'Terça', hours: '9h - 17h', available: true },
  { day: 'Quarta', hours: '9h - 17h', available: true },
  { day: 'Quinta', hours: '9h - 17h', available: true },
  { day: 'Sexta', hours: '9h - 17h', available: true },
  { day: 'Sábado', hours: '9h - 14h', available: true },
  { day: 'Domingo', hours: 'Após o Culto', available: true },
]

const regras = [
  { icon: '👗', title: 'Vestimenta', description: 'Roupas modestas e respeitosas. Evite roupas curtas ou decotadas.' },
  { icon: '🤫', title: 'Silêncio', description: 'Mantenha o silêncio nas áreas de oração e rituais.' },
  { icon: '📷', title: 'Fotografias', description: 'Fotografias são permitidas apenas em áreas autorizadas.' },
  { icon: '🚫', title: 'Álcool e Fumo', description: 'É proibido o consumo de álcool e tabaco no terreiro.' },
  { icon: '🙏', title: 'Respeito', description: 'Respeite todos os participantes e as tradições sagradas.' },
  { icon: '👶', title: 'Crianças', description: 'Crianças devem estar acompanhadas de um adulto responsável.' },
]

const tourSteps = [
  { step: 1, title: 'Recepção', description: 'Chegada e apresentação aos guias do terreiro.', icon: '🚪' },
  { step: 2, title: 'Sala de Espera', description: 'Espaço de acolhimento e orientação inicial.', icon: '🪑' },
  { step: 3, title: 'Área Ritual', description: 'Conheça o espaço sagrado onde ocorrem as celebrações.', icon: '🏛️' },
  { step: 4, title: 'Quadro dos Orixás', description: 'Apresentação dos Orixás e suas representações.', icon: '🖼️' },
  { step: 5, title: 'Horta Comunitária', description: 'Conheça我们的 horta que abastece a cozinha.', icon: '🌱' },
  { step: 6, title: 'Encerramento', description: 'Momento de perguntas e reflexão final.', icon: '✨' },
]

const depoimentos = [
  { name: 'Ana Paula', text: 'Uma experiência transformadora. O acolhimento foi incrível!', rating: 5, avatar: '👩', date: 'Jul 2026' },
  { name: 'Roberto Silva', text: 'Aprendi muito sobre a tradição. Os guias são muito pacientes.', rating: 5, avatar: '👨', date: 'Jun 2026' },
  { name: 'Mariana Costa', text: 'Recomendo para todos que querem conhecer esta cultura rica.', rating: 5, avatar: '👩‍🦰', date: 'Jun 2026' },
]

function Visitas() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', time: '', people: '1', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="absolute text-4xl" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 2}s` }}>
                {['🙏', '🏛️', '🌿', '✨', '🕊️'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 w-full text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            🏛️ Visite o Templo
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Conheça a <span className="text-accent">Casa do Mensageiro</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Sejamos bem-vindos! Visite nosso templo sagrado e conheça a tradição e a fé que moves esta comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#agendar">
              <Button3D variant="accent" className="text-lg">
                Agendar Visita
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </Button3D>
            </a>
            <a href="#tour">
              <Button3D variant="secondary" className="text-lg">
                Conhecer o Tour
              </Button3D>
            </a>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card3D className="text-center p-6 rounded-2xl bg-primary-50">
              <Icon3D className="gradient-primary shadow-lg mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </Icon3D>
              <h3 className="font-heading font-bold text-primary mb-2">Localização</h3>
              <p className="text-gray-600 text-sm">Rua da Fé, 123<br />Centro - São Paulo/SP</p>
            </Card3D>
            <Card3D className="text-center p-6 rounded-2xl bg-primary-50">
              <Icon3D className="gradient-primary shadow-lg mx-auto mb-4">
                <span className="text-2xl">🕐</span>
              </Icon3D>
              <h3 className="font-heading font-bold text-primary mb-2">Horários</h3>
              <p className="text-gray-600 text-sm">Terça a Sábado<br />9h às 17h</p>
            </Card3D>
            <Card3D className="text-center p-6 rounded-2xl bg-primary-50">
              <Icon3D className="gradient-primary shadow-lg mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </Icon3D>
              <h3 className="font-heading font-bold text-primary mb-2">Valor</h3>
              <p className="text-gray-600 text-sm">Entrada gratuita<br />Doações bem-vindas</p>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Horários */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Horário de Funcionamento</h2>
            <p className="text-gray-600">Confira nossos horários para planejar sua visita.</p>
          </div>
          <div className="grid md:grid-cols-7 gap-4">
            {horarios.map((item, i) => (
              <div key={i} className={`rounded-2xl p-4 text-center transition-all ${item.available ? 'bg-white shadow-md hover:shadow-lg' : 'bg-gray-200'}`}>
                <div className={`text-sm font-bold mb-2 ${item.available ? 'text-primary' : 'text-gray-400'}`}>
                  {item.day}
                </div>
                <div className={`text-xs ${item.available ? 'text-gray-600' : 'text-gray-400'}`}>
                  {item.hours}
                </div>
                {item.available && (
                  <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Virtual */}
      <section id="tour" className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Passo a Passo do Tour</h2>
            <p className="text-gray-600">Saiba o que esperar durante sua visita.</p>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {tourSteps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <Icon3D className="gradient-primary shadow-lg flex-shrink-0 relative z-10">
                    <span className="text-2xl">{step.icon}</span>
                  </Icon3D>
                  <Card3D className="bg-gray-50 rounded-2xl p-6 flex-1">
                    <div className="text-sm text-primary font-semibold mb-1">Passo {step.step}</div>
                    <h3 className="font-heading font-bold text-primary text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </Card3D>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regras */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Regras de Visita</h2>
            <p className="text-gray-600">Por favor, respeite estas orientações durante sua visita.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regras.map((regra, i) => (
              <Card3D key={i} className="bg-white rounded-2xl p-6">
                <span className="text-4xl mb-4 block">{regra.icon}</span>
                <h3 className="font-heading font-bold text-primary text-lg mb-2">{regra.title}</h3>
                <p className="text-gray-600 text-sm">{regra.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section id="agendar" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Agende sua Visita</h2>
            <p className="text-gray-600">Preencha o formulário abaixo para garantir sua vaga.</p>
          </div>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <span className="text-5xl">✅</span>
              <h3 className="text-2xl font-bold text-green-700 mt-4 mb-2">Visita Agendada!</h3>
              <p className="text-green-600">Enviaremos uma confirmação para seu e-mail.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Número de Pessoas *</label>
                  <select required value={formData.people} onChange={(e) => setFormData({...formData, people: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0">
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'pessoa' : 'pessoas'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Data Preferida *</label>
                  <input type="date" required value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Horário Preferido *</label>
                  <select required value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0">
                    <option value="">Selecione</option>
                    <option>09:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Observações</label>
                <textarea rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 resize-none" placeholder="Alguma informação adicional..." />
              </div>
              <Button3D variant="primary" className="w-full py-4 text-lg">
                Confirmar Agendamento
              </Button3D>
            </form>
          )}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">O que Dizem os Visitantes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {depoimentos.map((dep, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(dep.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{dep.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-xl">{dep.avatar}</div>
                  <div>
                    <p className="font-semibold text-primary">{dep.name}</p>
                    <p className="text-xs text-gray-500">{dep.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Pronto para Visitar?</h2>
          <p className="text-white/80 mb-8">Agende sua visita e descubra a paz deste espaço sagrado.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#agendar" className="btn-accent text-lg px-8 py-4">
              Agendar Agora
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Visitas
