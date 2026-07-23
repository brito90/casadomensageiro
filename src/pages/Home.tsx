import Layout from '../layouts/Layout'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import FeaturedProjects from '../components/FeaturedProjects'
import NextEvents from '../components/NextEvents'
import Newsletter from '../components/Newsletter'
import SectionDivider from '../components/SectionDivider'
import CorkscrewSection from '../components/CorkscrewSection'

function Home() {
  return (
    <Layout>
      <Hero />
      
      <SectionDivider color="#FFFFFF" />
      
      <AboutPreview />
      
      <SectionDivider color="#FFFBFB" direction="up" />
      
      <CorkscrewSection variant="subtle" className="bg-background">
        <FeaturedProjects />
      </CorkscrewSection>
      
      <SectionDivider color="#FFFFFF" />
      
      <NextEvents />
      
      <SectionDivider color="#DC2626" />
      
      <Newsletter />
    </Layout>
  )
}

export default Home
