import { useEffect, useRef } from 'react'

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, that's okay
      })
    }
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/assets/video/poster.jpg"
      >
        <source src="/assets/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero opacity-90" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-accent/30 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-8 border border-white/30">
          ✨ Tradição, Fé e Axé ✨
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Um lugar onde a fé
          <br />
          <span className="text-accent">encontra propósito</span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Acolhimento, tradição e espiritualidade no Candomblé.
          Junte-se a nós nesta jornada de fé e transformação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20jogo%20de%20b%C3%BAzios." target="_blank" rel="noopener noreferrer" className="btn-accent text-lg px-10 py-4 inline-flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            WhatsApp
          </a>
          <a href="/pai-de-santo" className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-semibold
                           border-2 border-white/30 hover:bg-white/30 transition-all duration-300
                           inline-flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Conhecer o Pai de Santo
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
