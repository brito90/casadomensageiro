import { useState } from 'react'
import Layout from '../layouts/Layout'
import Seo from '../components/Seo'
import { Card3D, Button3D, Icon3D } from '../utils/useTilt3D'

const membroExemplo = {
  name: 'Maria Silva',
  email: 'maria@email.com',
  since: '2022',
  points: 1250,
  level: 'Ouro',
  avatar: '👩',
}

const beneficios = [
  { icon: '🎫', title: 'Descontos Exclusivos', description: '10% off em todos os produtos da loja.' },
  { icon: '📅', title: 'Prioridade em Eventos', description: 'Inscrição antecipada para eventos lotados.' },
  { icon: '📚', title: 'Conteúdo Exclusivo', description: 'Acesso a materiais e cursos especiais.' },
  { icon: '🎁', title: 'Presentes Especiais', description: 'Surpresas em datas comemorativas.' },
  { icon: '🙏', title: 'Oração Personalizada', description: 'Oração mensal dedicada pelo Pai de Santo.' },
  { icon: '💬', title: 'Grupo Exclusivo', description: 'Acesso ao grupo VIP no WhatsApp.' },
]

const atividades = [
  { date: '15 Jul 2026', title: 'Participou do Culto de Domingo', points: '+50' },
  { date: '10 Jul 2026', title: 'Doação para Projeto Mesa Redonda', points: '+100' },
  { date: '05 Jul 2026', title: 'Comprou na Loja', points: '+25' },
  { date: '01 Jul 2026', title: 'Indicou um amigo', points: '+200' },
]

function Membros() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggedIn(true)
  }

  if (isLoggedIn) {
    return (
      <Layout>
      <Seo title="Membros" />
        {/* Dashboard Header */}
        <section className="pt-24 pb-8 gradient-primary">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl">{membroExemplo.avatar}</span>
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold text-white">Olá, {membroExemplo.name}!</h1>
                <p className="text-white/70">Membro desde {membroExemplo.since}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-6">
              <Card3D className="bg-primary-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-primary">{membroExemplo.points}</div>
                <div className="text-sm text-gray-600">Pontos</div>
              </Card3D>
              <Card3D className="bg-accent/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-accent">{membroExemplo.level}</div>
                <div className="text-sm text-gray-600">Nível</div>
              </Card3D>
              <Card3D className="bg-green-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">Meses ativo</div>
              </Card3D>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Seus Benefícios</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {beneficios.map((beneficio, i) => (
                <Card3D key={i} className="bg-white rounded-xl p-4 flex items-start gap-4">
                  <Icon3D className="gradient-primary flex-shrink-0">
                    <span className="text-xl">{beneficio.icon}</span>
                  </Icon3D>
                  <div>
                    <h3 className="font-semibold text-primary">{beneficio.title}</h3>
                    <p className="text-gray-600 text-sm">{beneficio.description}</p>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Atividade Recente</h2>
            <div className="space-y-3">
              {atividades.map((atividade, i) => (
                <Card3D key={i} className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-primary">{atividade.title}</p>
                    <p className="text-gray-500 text-sm">{atividade.date}</p>
                  </div>
                  <span className="text-green-600 font-bold">{atividade.points} pts</span>
                </Card3D>
              ))}
            </div>
          </div>
        </section>

        {/* Logout */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <button onClick={() => setIsLoggedIn(false)} className="text-gray-500 hover:text-primary transition-colors">
              Sair da conta
            </button>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-16 min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="absolute text-4xl" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 2}s` }}>
                {['👤', '🔑', '✨', '🙏', '🎁'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Área de <span className="text-accent">Membros</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Acesse benefícios exclusivos e acompanhe sua jornada.
          </p>
        </div>
      </section>

      {/* Login/Register */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-md mx-auto">
          <Card3D className="bg-white rounded-3xl p-8 shadow-xl">
            {/* Tabs */}
            <div className="flex mb-8 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${isLogin ? 'bg-white text-primary shadow' : 'text-gray-500'}`}
              >
                Entrar
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${!isLogin ? 'bg-white text-primary shadow' : 'text-gray-500'}`}
              >
                Cadastrar
              </button>
            </div>

            {isLogin ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-600">Lembrar-me</span>
                  </label>
                  <a href="#" className="text-primary hover:underline">Esqueci a senha</a>
                </div>
                <Button3D variant="primary" className="w-full">Entrar</Button3D>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                    placeholder="••••••••"
                  />
                </div>
                <Button3D variant="primary" className="w-full">Criar Conta</Button3D>
              </form>
            )}
          </Card3D>
        </div>
      </section>

      {/* Benefits Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Benefícios de ser Membro</h2>
            <p className="text-gray-600">Ao se cadastrar, você terá acesso a:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, i) => (
              <Card3D key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                <Icon3D className="gradient-primary mx-auto mb-4 shadow-lg">
                  <span className="text-2xl">{beneficio.icon}</span>
                </Icon3D>
                <h3 className="font-heading font-bold text-primary text-lg mb-2">{beneficio.title}</h3>
                <p className="text-gray-600 text-sm">{beneficio.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Membros
