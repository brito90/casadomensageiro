import Layout from '../layouts/Layout'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import FeaturedProjects from '../components/FeaturedProjects'
import NextEvents from '../components/NextEvents'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <NextEvents />
      <Newsletter />
    </Layout>
  )
}

export default Home
