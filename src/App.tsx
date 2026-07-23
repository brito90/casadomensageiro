import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Biblioteca from './pages/Biblioteca'
import Festas from './pages/Festas'
import Buzios from './pages/Buzios'
import PaiDeSanto from './pages/PaiDeSanto'
import Loja from './pages/Loja'
import Produto from './pages/Produto'

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
          <Route path="/produto/:id" element={<Produto />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
