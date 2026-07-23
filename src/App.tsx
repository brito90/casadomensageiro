import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Biblioteca from './pages/Biblioteca'
import Festas from './pages/Festas'
import Buzios from './pages/Buzios'
import PaiDeSanto from './pages/PaiDeSanto'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/festas" element={<Festas />} />
        <Route path="/buzios" element={<Buzios />} />
        <Route path="/pai-de-santo" element={<PaiDeSanto />} />
      </Routes>
    </Router>
  )
}

export default App
