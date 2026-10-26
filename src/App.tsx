import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Biblioteca from './pages/Biblioteca'
import Festas from './pages/Festas'
import Buzios from './pages/Buzios'
import PaiDeSanto from './pages/PaiDeSanto'
import Loja from './pages/Loja'
import Oloja from './pages/Oloja'
import Projetos from './pages/Projetos'
import Podcasts from './pages/Podcasts'
import Produto from './pages/Produto'
import Checkout from './pages/Checkout'
import Quiz from './pages/Quiz'
import Blog from './pages/Blog'
import Contato from './pages/Contato'
import Visitas from './pages/Visitas'
import Eventos from './pages/Eventos'
import ContatoTemplo from './pages/ContatoTemplo'
import Sobre from './pages/Sobre'
import Faq from './pages/Faq'
import Membros from './pages/Membros'
import ChatWidget from './components/ChatWidget'
import DarkMode from './components/DarkMode'
import Axelie from './pages/Axelie'
import TrilhaEcológica from './pages/TrilhaEcológica'
import DiaCultural from './pages/DiaCultural'
import ProjetosAmbientais from './pages/ProjetosAmbientais'
import CursosCulinária from './pages/CursosCulinária'
import OlojaComCatalog from './pages/OlojaComCatalog'
import AssociacaoSociedadeCivil from './pages/AssociacaoSociedadeCivil'

function App() {
  return (
    <CartProvider>
      <Router>
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
      </Router>
      <ChatWidget />
      <div className="fixed bottom-6 left-6 z-50">
        <DarkMode />
      </div>
    </CartProvider>
  )
}

export default App