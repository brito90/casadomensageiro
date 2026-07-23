import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layouts/Layout'

const questions = [
  {
    id: 1,
    question: 'Qual elemento mais te representa?',
    options: [
      { text: 'Água', icon: '💧', orixa: 'oxum' },
      { text: 'Fogo', icon: '🔥', orixa: 'ogum' },
      { text: 'Terra', icon: '🌍', orixa: 'xango' },
      { text: 'Ar', icon: '💨', orixa: 'obará' },
    ],
  },
  {
    id: 2,
    question: 'Qual sua maior qualidade?',
    options: [
      { text: 'Amor e compaixão', icon: '❤️', orixa: 'oxum' },
      { text: 'Força e coragem', icon: '💪', orixa: 'ogum' },
      { text: 'Justiça e sabedoria', icon: '⚖️', orixa: 'xango' },
      { text: 'Liderança e prosperidade', icon: '👑', orixa: 'obará' },
    ],
  },
  {
    id: 3,
    question: 'Em qual cenário você se sente mais em paz?',
    options: [
      { text: 'Perto da água', icon: '🌊', orixa: 'oxum' },
      { text: 'Na floresta', icon: '🌳', orixa: 'ogum' },
      { text: 'Em um templo', icon: '🏛️', orixa: 'xango' },
      { text: 'No céu', icon: '☁️', orixa: 'obará' },
    ],
  },
  {
    id: 4,
    question: 'Qual cor mais te atrai?',
    options: [
      { text: 'Amarelo/Dourado', icon: '✨', orixa: 'oxum' },
      { text: 'Vermelho', icon: '🔴', orixa: 'ogum' },
      { text: 'Azul', icon: '🔵', orixa: 'xango' },
      { text: 'Branco', icon: '⚪', orixa: 'obará' },
    ],
  },
  {
    id: 5,
    question: 'Qual sua missão de vida?',
    options: [
      { text: 'Amar e ser amado', icon: '💕', orixa: 'oxum' },
      { text: 'Lutar pelo certo', icon: '⚔️', orixa: 'ogum' },
      { text: 'Trazer justiça', icon: '🔨', orixa: 'xango' },
      { text: 'Liderar e inspirar', icon: '🌟', orixa: 'obará' },
    ],
  },
]

const results = {
  oxum: {
    name: 'Oxum',
    emoji: '💧',
    description: 'Você é uma alma sensível e amorosa. Oxum, a mãe das águas doces, guia seu caminho com beleza, fertilidade e prosperidade.',
    products: ['Perfume Oxum', 'Nicho Oxum', 'Colar de Contas Oxum'],
    color: 'from-yellow-400 to-amber-500',
  },
  ogum: {
    name: 'Ogum',
    emoji: '⚔️',
    description: 'Você é guerreiro(a) e corajoso(a). Ogum, o guerreiro das sete espadas, protege seu caminho com força e determinação.',
    products: ['Perfume Ogum', 'Nicho Ogum', 'Camisa Ogum'],
    color: 'from-red-600 to-orange-500',
  },
  xango: {
    name: 'Xangô',
    emoji: '🪓',
    description: 'Você é justo(a) e sábio(a). Xangô, o senhor da justiça, guia suas decisões com sabedoria e equilíbrio.',
    products: ['Colar de Contas Xangô', 'Nicho Xangô', 'Vela de Sete Cores'],
    color: 'from-red-700 to-red-900',
  },
  obará: {
    name: 'Obaluaê',
    emoji: '🌍',
    description: 'Você é líder nato(a). Obaluaê, o senhor da terra, abre os caminhos para sua prosperidade e liderança.',
    products: ['Pulseira de Proteção', 'Sabonete de Alecrim', 'Kit Bem-Vindo'],
    color: 'from-green-600 to-green-800',
  },
}

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (orixa: string) => {
    const newAnswers = [...answers, orixa]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getResult = () => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const maxOrixa = Object.entries(counts).reduce((a, b) => 
      (b[1] > a[1] ? b : a)
    )[0]

    return results[maxOrixa as keyof typeof results]
  }

  const result = showResult ? getResult() : null
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <Layout>
      <section className="relative pt-24 pb-16 overflow-hidden min-h-screen">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
        </div>
        
        <div className="relative max-w-2xl mx-auto px-4">
          {!showResult ? (
            <div className="text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
                🔮 Descubra seu Orixá
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
                Qual Orixá combina com você?
              </h1>

              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-white/80 text-sm mb-2">
                  <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-3xl p-8 text-left shadow-2xl">
                <h2 className="text-xl font-heading font-bold text-primary mb-6">
                  {questions[currentQuestion].question}
                </h2>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.orixa)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary-50 transition-all text-left"
                    >
                      <span className="text-3xl">{option.icon}</span>
                      <span className="font-medium text-gray-700">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
                🎉 Resultado
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
                Seu Orixá é <span className="text-accent">{result?.name}</span>
              </h1>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className={`w-24 h-24 bg-gradient-to-br ${result?.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-5xl">{result?.emoji}</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                  {result?.name}
                </h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  {result?.description}
                </p>

                <div className="bg-primary-50 rounded-xl p-6 mb-6">
                  <h3 className="font-heading font-bold text-primary mb-3">
                    Produtos Recomendados
                  </h3>
                  <div className="space-y-2">
                    {result?.products.map((product, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {product}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/loja" className="btn-primary">
                    Ver na Loja
                  </Link>
                  <button
                    onClick={() => {
                      setCurrentQuestion(0)
                      setAnswers([])
                      setShowResult(false)
                    }}
                    className="btn-secondary"
                  >
                    Refazer Quiz
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Quiz
