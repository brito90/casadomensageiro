import { useState } from 'react'
import Layout from '../layouts/Layout'
import Seo from '../components/Seo'
import { Card3D, Button3D } from '../utils/useTilt3D'

const faqCategories = [
  { id: 'geral', name: 'Geral', icon: '❓' },
  { id: 'visitas', name: 'Visitas', icon: '🏛️' },
  { id: 'espiritual', name: 'Espiritual', icon: '🙏' },
  { id: 'eventos', name: 'Eventos', icon: '📅' },
  { id: 'doacoes', name: 'Doações', icon: '💰' },
  { id: 'voluntarios', name: 'Voluntários', icon: '🙋' },
]

const faqItems = [
  { id: 1, category: 'geral', question: 'O que é a Casa do Mensageiro?', answer: 'A Casa do Mensageiro é um terreiro de Candomblé dedicado ao acolhimento espiritual, preservação da tradição e serviço à comunidade.' },
  { id: 2, category: 'geral', question: 'Preciso ser iniciado para frequentar?', answer: 'Não! Todas as nossas portas são abertas para quem busca paz e crescimento espiritual. Você é bem-vindo independentemente de sua crença.' },
  { id: 3, category: 'geral', question: 'O terreiro é aberto ao público?', answer: 'Sim! Aceitamos visitas de terça a sábado, das 9h às 17h. Recomendamos agendar previamente pelo WhatsApp.' },
  { id: 4, category: 'visitas', question: 'Como posso agendar uma visita?', answer: 'Você pode agendar pelo WhatsApp (11) 99999-9999, pelo formulário na página de Visitas, ou pelo e-mail visitas@casadomensageiro.com.' },
  { id: 5, category: 'visitas', question: 'Qual o horário de visitas?', answer: 'Terça a sábado, das 9h às 17h. Domingos após o culto, das 12h às 14h. Segunda-feira o terreiro está fechado.' },
  { id: 6, category: 'visitas', question: 'Preciso levar alguma coisa para a visita?', answer: 'Não é necessário trazer nada. Apenas roupas modestas e respeitosas. Oferecemos água e acolhimento.' },
  { id: 7, category: 'espiritual', question: 'O que é um jogo de búzios?', answer: 'O jogo de búzios é uma forma de adivinhação e orientação espiritual utilizada no Candomblé. Os búzios são jogados e sua disposição revela mensagens dos Orixás.' },
  { id: 8, category: 'espiritual', question: 'Quem são os Orixás?', answer: 'Os Orixás são divindades da natureza no Candomblé, cada uma representando um elemento da natureza e aspectos da vida humana.' },
  { id: 9, category: 'espiritual', question: 'Posso fazer uma consulta espiritual?', answer: 'Sim! Agende pelo WhatsApp com o Pai de Santo. Atendemos de terça a sábado.' },
  { id: 10, category: 'eventos', question: 'Como fico sabendo dos próximos eventos?', answer: 'Cadastre-se na newsletter, siga nossas redes sociais ou acesse a página de Eventos regularmente.' },
  { id: 11, category: 'eventos', question: 'Preciso me inscrever para participar dos eventos?', answer: 'Alguns eventos requerem inscrição prévia, outros são abertos. Verifique as informações na página do evento.' },
  { id: 12, category: 'eventos', question: 'Os eventos são gratuitos?', answer: 'A maioria dos nossos eventos é gratuita. Alguns workshops podem ter um valor simbólico para cobrir materiais.' },
  { id: 13, category: 'doacoes', question: 'Como posso fazer uma doação?', answer: 'Aceitamos Pix, cartão de crédito, boleto e doação de materiais presencialmente. Acesse nossa Loja ou entre em contato.' },
  { id: 14, category: 'doacoes', question: 'Minha doação é dedutível de imposto?', answer: 'Sim! Emitimos recibo para doações acima de R$ 100,00 que podem ser declaradas no Imposto de Renda.' },
  { id: 15, category: 'doacoes', question: 'Posso doar materiais?', answer: 'Sim! Aceitamos roupas, alimentos, livros, materiais de expediente e outros itens úteis para nossos projetos.' },
  { id: 16, category: 'voluntarios', question: 'Como posso ser voluntário?', answer: 'Preencha o formulário na página de Voluntários ou fale conosco pelo WhatsApp. Teremos prazer em recebê-lo!' },
  { id: 17, category: 'voluntarios', question: 'Preciso ter experiência para ser voluntário?', answer: 'Não! Aceitamos voluntários de todas as idades e habilidades. O mais importante é a disposição para servir.' },
  { id: 18, category: 'voluntarios', question: 'Qual o compromisso de tempo mínimo?', answer: 'Não há compromisso mínimo. Você pode participar quando puder. Mesmo algumas horas por mês fazem diferença.' },
]

function Faq() {
  const [selectedCategory, setSelectedCategory] = useState('geral')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFaqs = faqItems.filter(faq => {
    const matchesCategory = faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && (searchTerm === '' || matchesSearch)
  })

  return (
    <Layout>
      <Seo title="Faq" />
      {/* Hero */}
      <section className="relative pt-24 pb-16 min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-primary-800">
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="absolute text-4xl" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`, animationDelay: `${Math.random() * 2}s` }}>
                {['❓', '💡', '📖', '🙏', '✨'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Perguntas <span className="text-accent">Frequentes</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Encontre respostas para suas dúvidas.
          </p>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Buscar pergunta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'gradient-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-5xl">🔍</span>
              <p className="text-gray-500 text-lg mt-4">Nenhuma pergunta encontrada.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <Card3D key={faq.id} className="bg-white rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`font-semibold pr-4 transition-colors ${openFaq === faq.id ? 'text-primary' : 'text-gray-800'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      openFaq === faq.id ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ${openFaq === faq.id ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed border-t pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </Card3D>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-bold text-primary mb-4">Não encontrou sua resposta?</h2>
          <p className="text-gray-600 mb-6">Entre em contato conosco.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button3D variant="primary">Falar no WhatsApp</Button3D>
            <Button3D variant="secondary">Enviar E-mail</Button3D>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Faq
