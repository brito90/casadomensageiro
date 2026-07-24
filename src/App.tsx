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
import ChatWidget from './components/ChatWidget'
import DarkMode from './components/DarkMode'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/festas" element={<Festas />} />
          <Route path="/buzios" element={<Buzios />} />
          <Route path="/pai-de-santo" element={<PaiDeSanto />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/oloja" element={<Oloja />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/visitas" element={<Visitas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contato-templo" element={<ContatoTemplo />} />
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
