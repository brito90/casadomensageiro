import Layout from '../layouts/Layout'
import Seo from '../components/Seo'
import { useState } from 'react'
import { useTilt } from '../utils/useTilt'

const horariosDisponiveis = [
  { id: 1, time: '09:00', available: true },
  { id: 2, time: '10:00', available: true },
  { id: 3, time: '11:00', available: false },
  { id: 4, time: '14:00', available: true },
  { id: 5, time: '15:00', available: true },
  { id: 6, time: '16:00', available: true },
  { id: 7, time: '17:00', available: false },
  { id: 8, time: '18:00', available: true },
]

const diasDisponiveis = [
  { id: 1, day: 'Seg', date: '28', available: true },
  { id: 2, day: 'Ter', date: '29', available: true },
  { id: 3, day: 'Qua', date: '30', available: true },
  { id: 4, day: 'Qui', date: '31', available: false },
  { id: 5, day: 'Sex', date: '01', available: true },
  { id: 6, day: 'Sab', date: '02', available: true },
  { id: 7, day: 'Dom', date: '03', available: true },
]

const tiposConsulta = [
  {
    id: 1,
    name: 'Jogo de Búzios Simples',
    price: 'R$ 150',
    duration: '30 min',
    description: 'Consulta rápida para perguntas específicas',
    popular: false,
    icon: '🔮',
  },
  {
    id: 2,
    name: 'Jogo de Búzios Completo',
    price: 'R$ 250',
    duration: '1 hora',
    description: 'Análise completa do seu Ori com todos os Orixás',
    popular: true,
    icon: '✨',
  },
  {
    id: 3,
    name: 'Despacho Espiritual',
    price: 'R$ 350',
    duration: '1h30',
    description: 'Consulta + despacho personalizado',
    popular: false,
    icon: '🕯️',
  },
]

function ConsultaCard({ tipo, selected, onSelect }: { tipo: typeof tiposConsulta[0], selected: boolean, onSelect: () => void }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt({ maxTilt: 8, scale: 1.02 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
        selected
          ? 'ring-4 ring-primary shadow-2xl'
          : 'shadow-lg hover:shadow-xl'
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {tipo.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-primary-900 text-xs font-bold px-4 py-1 rounded-full shadow-lg">
            MAIS POPULAR
          </span>
        </div>
      )}
      
      <div 
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
          selected ? 'gradient-primary' : 'bg-primary-50'
        }`}
        style={{ transform: 'translateZ(20px)' }}
      >
        <span className="text-2xl">{tipo.icon}</span>
      </div>

      <h3 
        className="font-heading font-bold text-xl text-primary mb-2"
        style={{ transform: 'translateZ(15px)' }}
      >
        {tipo.name}
      </h3>
      <p 
        className="text-gray-600 text-sm mb-4"
        style={{ transform: 'translateZ(10px)' }}
      >
        {tipo.description}
      </p>

      <div 
        className="flex items-center justify-between"
        style={{ transform: 'translateZ(5px)' }}
      >
        <span className="text-2xl font-bold text-primary">{tipo.price}</span>
        <span className="text-sm text-gray-500">{tipo.duration}</span>
      </div>

      <div className={`absolute inset-0 rounded-2xl border-4 transition-all duration-300 ${
        selected ? 'border-primary' : 'border-transparent'
      }`}></div>
    </div>
  )
}

function Buzios() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<number | null>(null)
  const [selectedType, setSelectedType] = useState<number>(2)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowConfirmation(true)
  }

  return (
    <Layout>
      <Seo title="Buzios" />
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            ✨ Consultas Espirituais
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Agenda de Jogos de <span className="text-accent">Búzios</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Receba orientação dos Orixás através do sagrado jogo de búzios.
            Agende sua consulta com o Pai de Santo.
          </p>
        </div>
      </section>

      {/* Tipos de Consulta */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Escolha sua Consulta
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Selecione o tipo de consulta que melhor atende suas necessidades espirituais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {tiposConsulta.map((tipo) => (
              <ConsultaCard
                key={tipo.id}
                tipo={tipo}
                selected={selectedType === tipo.id}
                onSelect={() => setSelectedType(tipo.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Calendário e Horários */}
      <section className="section-padding gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Selecione Data e Horário
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            {/* Dias da Semana */}
            <div className="mb-8">
              <h3 className="font-heading font-bold text-lg text-primary mb-4">
                Escolha o Dia
              </h3>
              <div className="grid grid-cols-7 gap-2">
                {diasDisponiveis.map((dia) => (
                  <button
                    key={dia.id}
                    disabled={!dia.available}
                    onClick={() => setSelectedDay(dia.id)}
                    className={`p-4 rounded-xl text-center transition-all duration-300 ${
                      !dia.available
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : selectedDay === dia.id
                        ? 'gradient-primary text-white shadow-lg scale-105'
                        : 'bg-gray-50 text-primary hover:bg-primary-50 hover:shadow-md'
                    }`}
                  >
                    <div className="text-sm font-medium">{dia.day}</div>
                    <div className="text-2xl font-bold">{dia.date}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Horários */}
            <div>
              <h3 className="font-heading font-bold text-lg text-primary mb-4">
                Escolha o Horário
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {horariosDisponiveis.map((horario) => (
                  <button
                    key={horario.id}
                    disabled={!horario.available}
                    onClick={() => setSelectedTime(horario.id)}
                    className={`p-4 rounded-xl font-semibold transition-all duration-300 ${
                      !horario.available
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed line-through'
                        : selectedTime === horario.id
                        ? 'gradient-primary text-white shadow-lg scale-105'
                        : 'bg-gray-50 text-primary hover:bg-primary-50 hover:shadow-md'
                    }`}
                  >
                    {horario.time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section className="section-padding bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Confirme seus Dados
            </h2>
            <p className="text-gray-600">
              Preencha suas informações para confirmar o agendamento.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Mensagem (Opcional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0 transition-colors resize-none"
                  placeholder="Alguma informação adicional sobre sua consulta..."
                />
              </div>

              {/* Resumo do Agendamento */}
              <div className="bg-primary-50 rounded-2xl p-6">
                <h4 className="font-heading font-bold text-primary mb-4">Resumo do Agendamento</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tipo de Consulta:</span>
                    <span className="font-semibold text-primary">
                      {tiposConsulta.find(t => t.id === selectedType)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data:</span>
                    <span className="font-semibold text-primary">
                      {selectedDay ? `${diasDisponiveis.find(d => d.id === selectedDay)?.day}, ${diasDisponiveis.find(d => d.id === selectedDay)?.date}/07` : 'Selecione um dia'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Horário:</span>
                    <span className="font-semibold text-primary">
                      {selectedTime ? horariosDisponiveis.find(h => h.id === selectedTime)?.time : 'Selecione um horário'}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-primary-200 pt-2 mt-2">
                    <span className="text-gray-600">Valor:</span>
                    <span className="font-bold text-xl text-primary">
                      {tiposConsulta.find(t => t.id === selectedType)?.price}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={!selectedDay || !selectedTime}
                className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar Agendamento
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Modal de Confirmação */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Agendamento Confirmado!
            </h3>
            <p className="text-gray-600 mb-6">
              Você receberá uma confirmação por e-mail com todos os detalhes da sua consulta.
            </p>
            <div className="bg-primary-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-gray-600">Protocolo:</p>
              <p className="font-bold text-primary text-lg">#BZ-2026-{Math.floor(Math.random() * 10000)}</p>
            </div>
            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full btn-primary"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Buzios
