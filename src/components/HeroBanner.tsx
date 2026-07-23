import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const banners = [
  {
    id: 1,
    title: 'Coleção Ogum',
    subtitle: 'Força e Proteção',
    description: 'Produtos exclusivos para o guerreiro das sete espadas.',
    cta: 'Ver Coleção',
    link: '/loja',
    gradient: 'from-red-600 via-red-700 to-red-900',
    emoji: '⚔️',
  },
  {
    id: 2,
    title: 'Perfumes Sagrados',
    subtitle: 'Essências dos Orixás',
    description: 'Aromas que conectam sua alma aos Orixás.',
    cta: 'Explorar',
    link: '/loja',
    gradient: 'from-purple-600 via-purple-700 to-purple-900',
    emoji: '💐',
  },
  {
    id: 3,
    title: 'Promoção de Inverno',
    subtitle: 'Até 50% OFF',
    description: 'Aproveite ofertas imperdíveis em toda a loja.',
    cta: 'Aproveitar',
    link: '/loja',
    gradient: 'from-blue-600 via-blue-700 to-blue-900',
    emoji: '❄️',
  },
  {
    id: 4,
    title: 'Nichos Artesanais',
    subtitle: 'Feitos com Amor',
    description: 'Cada nicho é único, feito à mão para seu Orixá.',
    cta: 'Conhecer',
    link: '/loja',
    gradient: 'from-amber-600 via-amber-700 to-amber-900',
    emoji: '🏠',
  },
]

function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrent(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-3xl mb-12">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${banner.gradient} relative`}>
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 right-10 w-64 h-64 border border-white/10 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 border border-white/10 rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-6xl mx-auto px-8 w-full">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-white">
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-4">
                      {banner.subtitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                      {banner.title}
                    </h2>
                    <p className="text-white/80 text-lg mb-6 max-w-md">
                      {banner.description}
                    </p>
                    <Link
                      to={banner.link}
                      className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                    >
                      {banner.cta}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <span className="text-[150px] animate-float">{banner.emoji}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'w-8 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroBanner
