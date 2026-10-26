import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import ChatWidget from './components/ChatWidget'
import DarkMode from './components/DarkMode'

const Home = lazy(() => import('./pages/Home'))
const Biblioteca = lazy(() => import('./pages/Biblioteca'))
const Festas = lazy(() => import('./pages/Festas'))
const Buzios = lazy(() => import('./pages/Buzios'))
const PaiDeSanto = lazy(() => import('./pages/PaiDeSanto'))
const Loja = lazy(() => import('./pages/Loja'))
const Oloja = lazy(() => import('./pages/Oloja'))
const Projetos = lazy(() => import('./pages/Projetos'))
const Podcasts = lazy(() => import('./pages/Podcasts'))
const Produto = lazy(() => import('./pages/Produto'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Quiz = lazy(() => import('./pages/Quiz'))
const Blog = lazy(() => import('./pages/Blog'))
const Contato = lazy(() => import('./pages/Contato'))
const Visitas = lazy(() => import('./pages/Visitas'))
const Eventos = lazy(() => import('./pages/Eventos'))
const ContatoTemplo = lazy(() => import('./pages/ContatoTemplo'))
const Sobre = lazy(() => import('./pages/Sobre'))
const Faq = lazy(() => import('./pages/Faq'))
const Membros = lazy(() => import('./pages/Membros'))
const Axelie = lazy(() => import('./pages/Axelie'))
const TrilhaEcológica = lazy(() => import('./pages/TrilhaEcológica'))
const DiaCultural = lazy(() => import('./pages/DiaCultural'))
const ProjetosAmbientais = lazy(() => import('./pages/ProjetosAmbientais'))
const CursosCulinária = lazy(() => import('./pages/CursosCulinária'))
const OlojaComCatalog = lazy(() => import('./pages/OlojaComCatalog'))
const AssociacaoSociedadeCivil = lazy(() => import('./pages/AssociacaoSociedadeCivil'))

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/pai-de-santo" element={<PaiDeSanto />} />
            <Route path="/festas" element={<Festas />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/oloja" element={<Oloja />} />
            <Route path="/axelie" element={<Axelie />} />
            <Route path="/trilha-ecologica" element={<TrilhaEcológica />} />
            <Route path="/dia-cultural" element={<DiaCultural />} />
            <Route path="/projetos-ambientais" element={<ProjetosAmbientais />} />
            <Route path="/cursos-culinaria" element={<CursosCulinária />} />
            <Route path="/oloja-catalogo" element={<OlojaComCatalog />} />
            <Route path="/buzios" element={<Buzios />} />
            <Route path="/biblioteca" element={<Biblioteca />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/visitas" element={<Visitas />} />
            <Route path="/contato-templo" element={<ContatoTemplo />} />
            <Route path="/membros" element={<Membros />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/associacao-sociedade-civil" element={<AssociacaoSociedadeCivil />} />
          </Routes>
        </Suspense>
      </Router>
      <ChatWidget />
      <div className="fixed bottom-6 left-6 z-50">
        <DarkMode />
      </div>
    </CartProvider>
  )
}

export default App
