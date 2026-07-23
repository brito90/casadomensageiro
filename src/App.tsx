import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Biblioteca from './pages/Biblioteca'
import Festas from './pages/Festas'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/festas" element={<Festas />} />
      </Routes>
    </Router>
  )
}

export default App
