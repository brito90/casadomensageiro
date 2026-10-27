import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F1EC] text-[#1a1a1a] px-4">
      <h1 className="text-8xl md:text-[12rem] font-heading font-bold leading-none">404</h1>
      <p className="text-xl mt-4 mb-8">Página não encontrada.</p>
      <Link to="/" className="btn-square">Voltar ao início</Link>
    </div>
  )
}
