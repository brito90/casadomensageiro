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
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
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
        {/* Fallback gradient for when video is not available */}
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Um lugar onde sua fé
          <br />
          <span className="text-secondary">encontra propósito</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Acolhimento, comunidade e espiritualidade em um espaço moderno e acolhedor.
          Junte-se a nós nesta jornada de fé e transformação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-secondary text-lg px-8 py-4">
            Conheça Nossa História
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold
                           hover:bg-white hover:text-primary transition-all duration-200
                           focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
            Próximos Eventos
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
