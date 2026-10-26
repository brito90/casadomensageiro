export const SITE = {
  name: 'Casa do Mensageiro',
  url: 'https://casa-do-mensageiro.vercel.app',
  whatsapp: '5511999999999',
  whatsappMessage: 'Olá, gostaria de mais informações.',
  email: 'contato@casadomensageiro.com',
  address: 'Rua exemplo 123, São Paulo - SP',
  description: 'Casa do Mensageiro — espaço de fé, acolhimento e transformação. Consultas, rituais, eventos, cursos e loja de produtos espirituais.',
}

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? SITE.whatsappMessage)
  return `https://wa.me/${SITE.whatsapp}?text=${text}`
}
