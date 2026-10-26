import Layout from '../layouts/Layout'
import Hero from '../components/Hero'
import ClipReveal from '../components/ClipReveal'
import { Link } from 'react-router-dom'

const blocks = [
  { title: 'Visitas', desc: 'Agende sua visita ao templo', path: '/visitas', span: 'md:col-span-2 md:row-span-2', bg: 'bg-[#520c02]', text: 'text-white' },
  { title: 'Eventos', desc: 'Próximos rituais e festas', path: '/eventos', span: 'md:col-span-1', bg: 'bg-white', text: 'text-black' },
  { title: 'Loja', desc: 'Produtos espirituais', path: '/loja', span: 'md:col-span-1', bg: 'bg-white', text: 'text-black' },
  { title: 'Blog', desc: 'Conhecimento e tradição', path: '/blog', span: 'md:col-span-2', bg: 'bg-black', text: 'text-white' },
]

function Home() {
  return (
    <Layout>
      <Hero />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <ClipReveal>
            <h2 className="section-title mb-12">
              Explore a <span className="text-[#520c02]">Casa</span>
            </h2>
          </ClipReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
            {blocks.map((b, i) => (
              <ClipReveal key={b.title} delay={i * 80} className={b.span}>
                <Link
                  to={b.path}
                  className={`${b.bg} ${b.text} border-2 border-black p-6 flex flex-col justify-between h-full transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]`}
                  style={{ boxShadow: '4px 4px 0 #1a1a1a' }}
                >
                  <span className="text-sm uppercase tracking-widest opacity-70">0{i + 1}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold leading-none">{b.title}</h3>
                    <p className="text-sm mt-2 opacity-80">{b.desc}</p>
                  </div>
                </Link>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { n: '12+', l: 'Anos de tradição' },
            { n: '500+', l: 'Consultas realizadas' },
            { n: '50+', l: 'Eventos por ano' },
          ].map((s, i) => (
            <ClipReveal key={s.l} delay={i * 100}>
              <div className="border-2 border-white/30 p-8">
                <div className="text-6xl md:text-8xl font-heading font-bold text-[#520c02]">{s.n}</div>
                <div className="text-sm uppercase tracking-widest mt-4 opacity-70">{s.l}</div>
              </div>
            </ClipReveal>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Home
