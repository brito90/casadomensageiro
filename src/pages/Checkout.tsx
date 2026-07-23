import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layouts/Layout'
import { useCart } from '../context/CartContext'

type Step = 1 | 2 | 3 | 4

function Checkout() {
  const { items, cartTotal, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('pix')

  const shipping = cartTotal >= 200 ? 0 : 15.90
  const discount = couponApplied ? cartTotal * 0.1 : 0
  const total = cartTotal + shipping - discount

  const handleCoupon = () => {
    if (coupon.toUpperCase() === 'AXE10') {
      setCouponApplied(true)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step)
    } else {
      clearCart()
      setCurrentStep(4)
    }
  }

  const steps = [
    { id: 1, name: 'Carrinho', icon: '🛒' },
    { id: 2, name: 'Dados', icon: '📝' },
    { id: 3, name: 'Pagamento', icon: '💳' },
    { id: 4, name: 'Confirmação', icon: '✅' },
  ]

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-primary">Finalizar Compra</h1>
          </div>

          {/* Steps */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center gap-2 ${currentStep >= step.id ? 'text-primary' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step.id ? 'gradient-primary text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.id ? '✓' : step.icon}
                  </div>
                  <span className="hidden sm:block font-medium">{step.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 sm:w-20 h-1 mx-2 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6">
                {/* Step 1: Cart */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-xl font-heading font-bold text-primary mb-6">Seu Carrinho</h2>
                    {items.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
                        <Link to="/loja" className="btn-primary">Ir para a Loja</Link>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div key={`${item.id}-${item.selectedColor}`} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg flex items-center justify-center">
                              <span className="text-2xl">
                                {item.category === 'nichos' ? '🏠' :
                                 item.category === 'sabonetes' ? '🧼' :
                                 item.category === 'camisas' ? '👕' :
                                 item.category === 'perfumes' ? '💐' :
                                 item.category === 'brindes' ? '🎁' : '📿'}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-primary">{item.name}</h3>
                              <p className="text-sm text-gray-500">{item.selectedColor} x {item.quantity}</p>
                            </div>
                            <span className="font-bold text-primary">
                              R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: Personal Data */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-heading font-bold text-primary mb-6">Dados Pessoais</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                        <input
                          type="tel"
                          required
                          placeholder="(11) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                        <input
                          type="text"
                          required
                          placeholder="000.000.000-00"
                          value={formData.cpf}
                          onChange={(e) => setFormData({...formData, cpf: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        />
                      </div>
                    </div>

                    <h2 className="text-xl font-heading font-bold text-primary mt-6 mb-4">Endereço</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
                        <input
                          type="text"
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Número</label>
                        <input
                          type="text"
                          required
                          value={formData.number}
                          onChange={(e) => setFormData({...formData, number: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
                        <input
                          type="text"
                          value={formData.complement}
                          onChange={(e) => setFormData({...formData, complement: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bairro</label>
                        <input
                          type="text"
                          required
                          value={formData.neighborhood}
                          onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                        <input
                          type="text"
                          required
                          placeholder="00000-000"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                        <select
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({...formData, state: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                        >
                          <option value="">Selecione</option>
                          <option value="SP">São Paulo</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="MG">Minas Gerais</option>
                          <option value="BA">Bahia</option>
                          <option value="RS">Rio Grande do Sul</option>
                          <option value="PR">Paraná</option>
                          <option value="SC">Santa Catarina</option>
                          <option value="PE">Pernambuco</option>
                          <option value="CE">Ceará</option>
                          <option value="GO">Goiás</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-heading font-bold text-primary mb-6">Forma de Pagamento</h2>
                    
                    <div className="space-y-3">
                      <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        paymentMethod === 'pix' ? 'border-primary bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="payment"
                          value="pix"
                          checked={paymentMethod === 'pix'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-5 h-5 text-primary"
                        />
                        <span className="text-2xl">💸</span>
                        <div>
                          <p className="font-semibold text-primary">Pix</p>
                          <p className="text-sm text-gray-500">Aprovação instantânea • 10% de desconto</p>
                        </div>
                      </label>

                      <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        paymentMethod === 'credit' ? 'border-primary bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="payment"
                          value="credit"
                          checked={paymentMethod === 'credit'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-5 h-5 text-primary"
                        />
                        <span className="text-2xl">💳</span>
                        <div>
                          <p className="font-semibold text-primary">Cartão de Crédito</p>
                          <p className="text-sm text-gray-500">Até 6x sem juros</p>
                        </div>
                      </label>

                      <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        paymentMethod === 'boleto' ? 'border-primary bg-primary-50' : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <input
                          type="radio"
                          name="payment"
                          value="boleto"
                          checked={paymentMethod === 'boleto'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-5 h-5 text-primary"
                        />
                        <span className="text-2xl">📄</span>
                        <div>
                          <p className="font-semibold text-primary">Boleto Bancário</p>
                          <p className="text-sm text-gray-500">Vencimento em 3 dias úteis</p>
                        </div>
                      </label>
                    </div>

                    {paymentMethod === 'credit' && (
                      <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Número do Cartão</label>
                          <input
                            type="text"
                            placeholder="0000 0000 0000 0000"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Validade</label>
                            <input
                              type="text"
                              placeholder="MM/AA"
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                            <input
                              type="text"
                              placeholder="000"
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Nome no Cartão</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-0"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <div className="text-center py-8">
                    <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                      Pedido Confirmado! 🎉
                    </h2>
                    <p className="text-gray-600 mb-2">
                      Obrigado pela sua compra, {formData.name || 'Cliente'}!
                    </p>
                    <p className="text-gray-600 mb-6">
                      Você receberá um e-mail com os detalhes do pedido.
                    </p>
                    <div className="bg-primary-50 rounded-xl p-4 mb-6 inline-block">
                      <p className="text-sm text-gray-600">Número do Pedido:</p>
                      <p className="font-bold text-primary text-xl">#CMD-2026-{Math.floor(Math.random() * 10000)}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/loja" className="btn-primary">
                        Continuar Comprando
                      </Link>
                      <Link to="/" className="btn-secondary">
                        Voltar ao Início
                      </Link>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                {currentStep < 4 && (
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep((currentStep - 1) as Step)}
                        className="btn-secondary"
                      >
                        Voltar
                      </button>
                    ) : (
                      <div></div>
                    )}
                    <button type="submit" className="btn-primary">
                      {currentStep === 3 ? 'Finalizar Pedido' : 'Próximo'}
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="font-heading font-bold text-primary mb-4">Resumo</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal ({items.length} itens)</span>
                    <span className="font-semibold">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Frete</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-green-600">Grátis</span>
                      ) : (
                        `R$ ${shipping.toFixed(2).replace('.', ',')}`
                      )}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Desconto (AXE10)</span>
                      <span className="font-semibold text-green-600">
                        -R$ {discount.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Coupon */}
                {currentStep === 1 && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cupom de Desconto</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Digite o cupom"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-0 text-sm"
                      />
                      <button
                        type="button"
                        onClick={handleCoupon}
                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-600"
                      >
                        Aplicar
                      </button>
                    </div>
                    {couponApplied && (
                      <p className="text-green-600 text-sm mt-2">✓ Cupom AXE10 aplicado! 10% de desconto</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">Use: AXE10 para 10% OFF</p>
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-primary">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      R$ {total.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  {cartTotal >= 200 && (
                    <p className="text-green-600 text-sm mt-2">✓ Frete grátis aplicado!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
