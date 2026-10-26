import { useEffect } from 'react'
import { SITE } from '../config/site'

interface SeoProps {
  title?: string
  description?: string
}

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    if (title) document.title = `${title} | ${SITE.name}`
    else document.title = SITE.name
    const meta = document.querySelector('meta[name="description"]')
    if (meta && description) meta.setAttribute('content', description)
  }, [title, description])
  return null
}
