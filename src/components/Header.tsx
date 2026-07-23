import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Início', path: '/' },
  { name: 'Festas', path: '/festas' },
  { name: 'Biblioteca', path: '/biblioteca' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Contato', path: '/contato' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-primary font-heading font-bold text-xl">CM</span>
            </div>
            <span className={`font-heading font-bold text-lg md:text-xl ${
              isScrolled ? 'text-white' : 'text-primary'
            }`}>
              Casa do Mensageiro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-secondary'
                    : isScrolled
                    ? 'text-white hover:text-secondary'
                    : 'text-primary hover:text-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="btn-secondary text-sm">
              Doação
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            <div className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? 'bg-white' : 'bg-primary'
            } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${
              isScrolled ? 'bg-white' : 'bg-primary'
            } ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 mt-1.5 transition-all duration-300 ${
              isScrolled ? 'bg-white' : 'bg-primary'
            } ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block font-body font-medium ${
                  location.pathname === item.path
                    ? 'text-secondary'
                    : 'text-white hover:text-secondary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="btn-secondary w-full text-sm">
              Doação
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
